// daily-schedule.js — Templater user script
// Fetches today's calendar events from the ICS URL already configured in QuickAdd.
// Usage in Daily Note Template: <%* tR += await tp.user.daily_schedule(tp) %>

async function daily_schedule(tp) {
  // requestUrl is a global in Obsidian's execution context (no require needed)
  // ── Read ICS URLs from QuickAdd (reuses Weekly Calendar config) ──────────────
  let icsUrl = '', todoistUrl = '', workUrl = '';
  try {
    const cmds = (app.plugins.plugins?.quickadd?.settings?.choices || [])
      .flatMap(c => c.macro?.commands || []);
    for (const cmd of cmds) {
      if (cmd.settings?.ics_url) {
        icsUrl     = cmd.settings.ics_url;
        todoistUrl = cmd.settings.todoist_ics_url || '';
        workUrl    = cmd.settings.work_ics_url    || '';
        break;
      }
    }
  } catch (_) { /* ignore */ }

  if (!icsUrl) {
    return '_⚠️ No calendar ICS URL found. Check QuickAdd → Weekly Calendar → script settings._';
  }

  // ── Helpers ──────────────────────────────────────────────────────────────────
  function pad(n) { return String(n).padStart(2, '0'); }

  function fmtTime(d) {
    let h = d.getHours(), m = d.getMinutes(), ap = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return m === 0 ? `${h}${ap}` : `${h}:${pad(m)}${ap}`;
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth()    === b.getMonth()
        && a.getDate()     === b.getDate();
  }

  function isAllDayStr(s) {
    return !!s && (s.length === 8 || /T000000Z?$/.test(s));
  }

  function parseDate(s) {
    if (!s) return null;
    if (isAllDayStr(s))
      return new Date(+s.slice(0,4), +s.slice(4,6)-1, +s.slice(6,8));
    if (s.endsWith('Z'))
      return new Date(Date.UTC(+s.slice(0,4), +s.slice(4,6)-1, +s.slice(6,8),
                               +s.slice(9,11), +s.slice(11,13), +s.slice(13,15)));
    return new Date(+s.slice(0,4), +s.slice(4,6)-1, +s.slice(6,8),
                    +s.slice(9,11), +s.slice(11,13), +s.slice(13,15));
  }

  function parseICS(text) {
    const events = [];
    const lines = text.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '')
                      .split(/\r\n|\n|\r/);
    let ev = null;
    for (const line of lines) {
      if (line === 'BEGIN:VEVENT') { ev = {}; continue; }
      if (line === 'END:VEVENT')   { if (ev?.dtstart) events.push(ev); ev = null; continue; }
      if (!ev) continue;
      const c = line.indexOf(':');
      if (c < 0) continue;
      const key = line.slice(0, c).toUpperCase().split(';')[0];
      const val = line.slice(c + 1).trim();
      if      (key === 'SUMMARY')  ev.summary  = val;
      else if (key === 'LOCATION') ev.location = val.split(',')[0].trim();
      else if (key === 'DTSTART')  { ev.dtstart = parseDate(val); ev.allDay = isAllDayStr(val); }
      else if (key === 'DTEND')    ev.dtend = parseDate(val);
    }
    return events;
  }

  // ── Fetch & filter to today ───────────────────────────────────────────────────
  const today = new Date();
  let events = [];

  try {
    const r = await requestUrl({ url: icsUrl });
    events = parseICS(r.text);

    if (workUrl) {
      try {
        const wr = await requestUrl({ url: workUrl });
        parseICS(wr.text).forEach(ev => { ev.isWork = true; events.push(ev); });
      } catch (_) { /* non-fatal */ }
    }

    if (todoistUrl) {
      try {
        const tr = await requestUrl({ url: todoistUrl });
        parseICS(tr.text).forEach(ev => { ev.isTodoist = true; events.push(ev); });
      } catch (_) { /* non-fatal — calendar still renders */ }
    }

    events = events
      .filter(ev => ev.dtstart && sameDay(ev.dtstart, today))
      .sort((a, b) => {
        if (a.allDay !== b.allDay) return a.allDay ? -1 : 1;
        return a.dtstart - b.dtstart;
      });

  } catch (e) {
    return `_⚠️ Calendar fetch failed: ${e.message}_`;
  }

  // ── Render ────────────────────────────────────────────────────────────────────
  if (!events.length) return '_No events scheduled today._';

  return events.map(ev => {
    const time  = ev.allDay
      ? 'All day'
      : `${fmtTime(ev.dtstart)} – ${fmtTime(ev.dtend || ev.dtstart)}`;
    const loc   = ev.location ? ` 📍 *${ev.location}*` : '';
    const check = ev.isTodoist ? '✅ ' : ev.isWork ? '🏢 ' : '';
    return `- [ ] \`${time}\` — ${check}**${ev.summary || '(no title)'}**${loc}`;
  }).join('\n');
}

module.exports = daily_schedule;
