// Weekly Calendar — fetches Google Calendar via ICS URL
// Ctrl+Shift+K → this week | Ctrl+Shift+J → next week (next-week-calendar.js)

const CONFIG = {
  name: "Weekly Calendar",
  author: "Slip Box",
  options: {
    ics_url: {
      type: "input",
      defaultValue: "",
      placeholder: "https://calendar.google.com/calendar/ical/.../basic.ics",
      description: "Your Google Calendar private ICS URL. In Google Calendar: Settings → your calendar → 'Secret address in iCal format'. Append ?futureevents=true&singleevents=true to extend the event window beyond 60 days.",
      secret: true
    },
    todoist_ics_url: {
      type: "input",
      defaultValue: "",
      placeholder: "https://todoist.com/pm/ical/...",
      description: "Optional: Your Todoist iCal feed URL. In Todoist: Settings → Integrations → Calendar feeds → Copy link. Leave blank to disable.",
      secret: true
    },
    work_ics_url: {
      type: "input",
      defaultValue: "",
      placeholder: "https://calendar.google.com/calendar/ical/...@import.calendar.google.com/public/basic.ics",
      description: "Optional: Argenta work calendar ICS URL. In Google Calendar: Settings → your work calendar → 'Secret address in iCal format'. Leave blank to disable.",
      secret: true
    }
  }
};

module.exports = async (params, settings) => {
  await runCalendar(params, settings, 0);
};

module.exports.settings = CONFIG;
module.exports.runCalendar = runCalendar;

// ── Shared calendar engine (used by both weekly and next-week scripts) ────────

async function runCalendar(params, settings, weekOffset) {
  const { app, obsidian } = params;
  const { requestUrl, Notice } = obsidian;

  const icsUrl = settings?.ics_url || "";
  if (!icsUrl || !icsUrl.includes("calendar.google.com")) {
    new Notice("⚠️ Calendar: No ICS URL set.\nOpen QuickAdd → Manage Macros → configure the script → paste your ICS URL.", 8000);
    return;
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────

  function pad(n) { return String(n).padStart(2, "0"); }

  function getWeekBounds(d) {
    const day = d.getDay();
    const mon = new Date(d);
    mon.setDate(d.getDate() + (day === 0 ? -6 : 1 - day));
    mon.setHours(0, 0, 0, 0);
    const sun = new Date(mon);
    sun.setDate(mon.getDate() + 6);
    sun.setHours(23, 59, 59, 999);
    return { mon, sun };
  }

  function fmtTime(d) {
    let h = d.getHours(), m = d.getMinutes(), ap = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    return m === 0 ? `${h}${ap}` : `${h}:${pad(m)}${ap}`;
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
      && a.getMonth() === b.getMonth()
      && a.getDate() === b.getDate();
  }

  function daysBetween(start, end) {
    const s = new Date(start); s.setHours(0, 0, 0, 0);
    const e = new Date(end);   e.setHours(0, 0, 0, 0);
    return Math.round((e - s) / 86400000);
  }

  function fmtShortDate(d) {
    const MONTHS_S = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${MONTHS_S[d.getMonth()]} ${d.getDate()}`;
  }

  // ── ICS parser ──────────────────────────────────────────────────────────────

  function isAllDayStr(str) {
    if (!str) return false;
    if (str.length === 8) return true;                           // YYYYMMDD
    if (/T000000Z?$/.test(str)) return true;                    // YYYYMMDDТ000000 or T000000Z
    return false;
  }

  function parseICSDate(str) {
    if (!str) return null;
    // All-day variants: YYYYMMDD or YYYYMMDDТ000000[Z]
    const bare = str.slice(0, 8);
    if (isAllDayStr(str)) {
      return new Date(parseInt(bare.slice(0,4)), parseInt(bare.slice(4,6))-1, parseInt(bare.slice(6,8)));
    }
    // UTC: YYYYMMDDTHHmmssZ
    if (str.endsWith("Z")) {
      return new Date(Date.UTC(
        parseInt(str.slice(0,4)), parseInt(str.slice(4,6))-1, parseInt(str.slice(6,8)),
        parseInt(str.slice(9,11)), parseInt(str.slice(11,13)), parseInt(str.slice(13,15))
      ));
    }
    // Local / TZID-anchored: treat as local time
    return new Date(
      parseInt(str.slice(0,4)), parseInt(str.slice(4,6))-1, parseInt(str.slice(6,8)),
      parseInt(str.slice(9,11)), parseInt(str.slice(11,13)), parseInt(str.slice(13,15))
    );
  }

  // Known Gmail-auto-created boilerplate to suppress
  const BOILERPLATE = [
    "to see detailed information for automatically created events",
    "this event was created from an email",
    "https://g.co/calendar",
  ];

  function cleanDescription(raw, summary) {
    if (!raw) return null;
    const cleaned = raw.replace(/<[^>]+>/g, "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
    if (!cleaned || cleaned === summary) return null;
    // Filter Gmail boilerplate
    const lower = cleaned.toLowerCase();
    if (BOILERPLATE.some(p => lower.includes(p))) return null;
    return cleaned.slice(0, 120) + (cleaned.length > 120 ? "…" : "");
  }

  function parseAttendees(lines, selfEmail) {
    // Returns array of display names for non-self attendees
    const attendees = [];
    for (const line of lines) {
      const colon = line.indexOf(":");
      if (colon < 0) continue;
      const keyRaw = line.slice(0, colon);          // preserve original case for CN=
      const keyUp  = keyRaw.toUpperCase();
      const val    = line.slice(colon + 1).trim();
      if (!keyUp.startsWith("ATTENDEE")) continue;

      const emailMatch = val.match(/^mailto:(.+)$/i);
      const email = emailMatch ? emailMatch[1].toLowerCase() : "";
      if (selfEmail && email === selfEmail.toLowerCase()) continue;  // skip self

      const cnMatch = keyRaw.match(/CN=([^;:]+)/i);  // case-insensitive on original
      const name = cnMatch ? cnMatch[1].trim() : email.split("@")[0];
      if (name && !attendees.includes(name)) attendees.push(name);
    }
    return attendees;
  }

  function parseICS(text) {
    const events = [];
    // Unfold RFC 5545 continuation lines
    const unfolded = text.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
    const lines = unfolded.split(/\r\n|\n|\r/);
    let current = null;
    let eventLines = [];   // raw lines within current VEVENT for attendee parsing

    for (const line of lines) {
      if (line === "BEGIN:VEVENT") {
        current = {};
        eventLines = [];
      } else if (line === "END:VEVENT" && current) {
        if (current.dtstart) {
          // Parse attendees from collected event lines
          current.attendees = parseAttendees(eventLines, null);
          events.push(current);
        }
        current = null;
        eventLines = [];
      } else if (current) {
        eventLines.push(line);
        const colon = line.indexOf(":");
        if (colon < 0) continue;
        const key     = line.slice(0, colon).toUpperCase();
        const val     = line.slice(colon + 1).trim();
        const baseKey = key.split(";")[0];

        if      (baseKey === "SUMMARY")     { current.summary = val; }
        else if (baseKey === "LOCATION")    { current.location = val; }
        else if (baseKey === "DESCRIPTION") { current.rawDesc = val; }
        else if (baseKey === "DTSTART" || key.startsWith("DTSTART")) {
          current.dtstart = parseICSDate(val);
          current.allDay  = isAllDayStr(val);
        }
        else if (baseKey === "DTEND" || key.startsWith("DTEND")) {
          current.dtend = parseICSDate(val);
        }
        else if (baseKey === "ORGANIZER") {
          const lineRaw = eventLines[eventLines.length - 1];     // original-case line
          const cnMatch = lineRaw.match(/CN=([^;:]+)/i);
          const emailMatch = val.match(/^mailto:(.+)$/i);
          current.organizer = cnMatch ? cnMatch[1].trim() : (emailMatch ? emailMatch[1] : null);
        }
      }
    }

    // Post-process descriptions after organizer is known
    for (const ev of events) {
      ev.description = cleanDescription(ev.rawDesc, ev.summary);
      // Remove organizer from attendees list
      if (ev.organizer && ev.attendees) {
        ev.attendees = ev.attendees.filter(a =>
          !ev.organizer.toLowerCase().includes(a.toLowerCase()) &&
          !a.toLowerCase().includes(ev.organizer.toLowerCase().split("@")[0])
        );
      }
    }
    return events;
  }

  // ── Build week ──────────────────────────────────────────────────────────────

  const DAYS_FULL = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const MONTHS    = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const MONTHS_S  = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function weekLabel(mon, sun) {
    const s = `${MONTHS_S[mon.getMonth()]} ${mon.getDate()}`;
    const e = mon.getMonth() !== sun.getMonth()
      ? `${MONTHS_S[sun.getMonth()]} ${sun.getDate()}, ${sun.getFullYear()}`
      : `${sun.getDate()}, ${sun.getFullYear()}`;
    return `${s} – ${e}`;
  }

  const anchor = new Date();
  anchor.setDate(anchor.getDate() + weekOffset * 7);
  const { mon, sun } = getWeekBounds(anchor);
  const today = new Date();
  const days = Array.from({length: 7}, (_, i) => {
    const d = new Date(mon); d.setDate(mon.getDate() + i); return d;
  });

  const isThisWeek = weekOffset === 0;
  new Notice(`📅 ${isThisWeek ? "Fetching this week" : "Fetching next week"}…`);

  // ── Fetch & parse ───────────────────────────────────────────────────────────

  let events = [];
  let fetchError = null;
  const todoistUrl = settings?.todoist_ics_url || "";
  const workUrl    = settings?.work_ics_url    || "";

  try {
    // Fetch primary Google Calendar
    const response = await requestUrl({ url: icsUrl });
    let allEvents = parseICS(response.text);

    // Fetch work calendar if configured
    if (workUrl && workUrl.includes("calendar.google.com")) {
      try {
        const workResponse = await requestUrl({ url: workUrl });
        const workEvents = parseICS(workResponse.text);
        workEvents.forEach(ev => { ev.source = "work"; });
        allEvents = allEvents.concat(workEvents);
      } catch(we) {
        new Notice(`⚠️ Work calendar failed to load: ${we.message}`, 5000);
      }
    }

    // Fetch Todoist calendar if configured
    if (todoistUrl && todoistUrl.includes("todoist.com")) {
      try {
        const todoistResponse = await requestUrl({ url: todoistUrl });
        const todoistEvents = parseICS(todoistResponse.text);
        // Tag Todoist events so we can label them
        todoistEvents.forEach(ev => { ev.source = "todoist"; });
        allEvents = allEvents.concat(todoistEvents);
      } catch(te) {
        // Non-fatal — calendar still renders without Todoist
        new Notice(`⚠️ Todoist calendar failed to load: ${te.message}`, 5000);
      }
    }

    events = allEvents.filter(ev => {
      if (!ev.dtstart) return false;
      const span = ev.dtend ? daysBetween(ev.dtstart, ev.dtend) : 1;
      for (let i = 0; i < Math.max(span, 1); i++) {
        const d = new Date(ev.dtstart);
        d.setDate(d.getDate() + i);
        if (days.some(day => sameDay(d, day))) return true;
      }
      return false;
    }).sort((a, b) => {
      // All-day events first within each day, then by time, then alphabetically
      if (a.allDay && !b.allDay) return -1;
      if (!a.allDay && b.allDay) return 1;
      const diff = a.dtstart - b.dtstart;
      return diff !== 0 ? diff : (a.summary || "").localeCompare(b.summary || "");
    });

  } catch(e) {
    fetchError = e.message;
  }

  // ── Render markdown ─────────────────────────────────────────────────────────

  const label = isThisWeek ? `Week of ${weekLabel(mon, sun)}` : `Next week — ${weekLabel(mon, sun)}`;
  const refreshWord = isThisWeek ? "Refreshed" : "Fetched";

  const lines = [];
  lines.push(`## 📅 ${label}`);
  lines.push(`*${refreshWord}: ${new Date().toLocaleString("en-US", {weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"2-digit"})}*`);
  lines.push("");

  if (fetchError) {
    lines.push(`> ⚠️ Could not load events: ${fetchError}`);
    lines.push("");
  }

  for (const day of days) {
    const isToday = sameDay(day, today);
    lines.push(`### ${DAYS_FULL[day.getDay()]}, ${MONTHS[day.getMonth()]} ${day.getDate()}${isToday ? " ← today" : ""}`);

    const dayEvents = events.filter(ev => {
      const span = ev.dtend ? daysBetween(ev.dtstart, ev.dtend) : 1;
      for (let i = 0; i < Math.max(span, 1); i++) {
        const d = new Date(ev.dtstart);
        d.setDate(d.getDate() + i);
        if (sameDay(d, day)) return true;
      }
      return false;
    });

    if (!dayEvents.length) {
      lines.push("- (no events)");
    } else {
      for (const ev of dayEvents) {
        const isStartDay = sameDay(ev.dtstart, day);
        const span       = ev.dtend ? daysBetween(ev.dtstart, ev.dtend) : 1;
        const isMultiDay = span > 1;

        // ── Time string ───────────────────────────────────────────────────────
        let timeStr;
        if (ev.allDay || isMultiDay) {
          if (isMultiDay) {
            if (isStartDay) {
              // Show full span: "All day (Jun 11–14)"
              const endDay = new Date(ev.dtend);
              endDay.setDate(endDay.getDate() - 1);  // dtend is exclusive
              timeStr = `All day (${fmtShortDate(ev.dtstart)}–${fmtShortDate(endDay)})`;
            } else {
              // Continuation: which day of the span are we on
              const dayNum = daysBetween(ev.dtstart, day) + 1;
              timeStr = `All day (cont. day ${dayNum} of ${span})`;
            }
          } else {
            timeStr = "All day";
          }
        } else {
          timeStr = `${fmtTime(ev.dtstart)} – ${fmtTime(ev.dtend)}`;
        }

        // ── Attendees ─────────────────────────────────────────────────────────
        const withStr = ev.attendees && ev.attendees.length > 0
          ? ` 👤 *${ev.attendees.slice(0, 2).join(", ")}*`
          : "";

        // ── Location ──────────────────────────────────────────────────────────
        // Smart location: skip floor/suite prefixes, show street address
        let loc = "";
        if (ev.location) {
          const parts = ev.location.split(",").map(p => p.trim());
          const first = parts[0] || "";
          const isFloor = /^(floor|suite|ste|bldg|building|level|unit|apt|room)/i.test(first);
          const locDisplay = (isFloor && parts[1]) ? parts[1] : first;
          loc = ` 📍 *${locDisplay}*`;
        }

        // ── Description ───────────────────────────────────────────────────────
        const desc = ev.description
          ? `\n  - *${ev.description}*`
          : "";

        const sourcePrefix = ev.source === "todoist" ? "✅ " : ev.source === "work" ? "🏢 " : "";
        lines.push(`- [ ] ${timeStr} — ${sourcePrefix}**${ev.summary || "(no title)"}**${withStr}${loc}${desc}`);
      }
    }
    lines.push("");
  }

  // ── Nav footer ──────────────────────────────────────────────────────────────
  lines.push("---");
  lines.push(`> [[00-Home/Weekly Calendar|This week]] · [[00-Home/Next Week Calendar|Next week]] · [[00-Home/00-Home|Dashboard]] · [[04-Daily-Notes/04-Daily-Notes|Daily Notes]]`);

  const output = lines.join("\n");
  const frontmatter = "---\ncssclasses: [weekly-calendar]\n---\n\n";

  // ── Write & open ────────────────────────────────────────────────────────────

  const calPath = isThisWeek ? "00-Home/Weekly Calendar.md" : "00-Home/Next Week Calendar.md";
  const calFile = app.vault.getAbstractFileByPath(calPath);
  if (calFile) {
    await app.vault.modify(calFile, frontmatter + output);
  } else {
    await app.vault.create(calPath, frontmatter + output);
  }

  const file = app.vault.getAbstractFileByPath(calPath);
  if (file) await app.workspace.getLeaf(false).openFile(file);

  const countLabel = isThisWeek ? "this week" : "next week";
  new Notice(`📅 Calendar updated — ${events.length} event${events.length !== 1 ? "s" : ""} ${countLabel}`);
}
