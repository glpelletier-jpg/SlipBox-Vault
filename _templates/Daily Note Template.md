---
dataview-ignore: true
date: <% tp.date.now("YYYY-MM-DD") %>
type: daily
focus_minutes: 0
bp_systolic: 
bp_diastolic: 
pulse: 
glucose: 
glucose_context: <%* const _gc = await tp.system.suggester(["fasting","post-meal-2h","pre-workout","post-workout","steroid-affected","random","(skip)"],["fasting","post-meal-2h","pre-workout","post-workout","steroid-affected","random",""],true,"Glucose context — measuring glucose today?"); tR += (_gc && _gc !== "") ? _gc : ""; %>
weight: 
steps: 
sleep_hours: 
energy: 
energy_score: 
focus_intention: <%* const _fi = (await tp.system.prompt("Today's focus — what would make today a win?", "", false)) || ""; tR += _fi; %>
end_of_day: 
tags: [daily]
---

# <% tp.date.now("dddd, MMMM D, YYYY") %>

---

## Today

| | |
|---|---|
| 📅 [Weekly Calendar](obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3Achoice%3A1838ef3d-10c4-4c07-8d45-0cd2411a3411) | Open calendar — see today's shape |
| ⏭️ [Next Week](obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3Achoice%3A35b1ab86-bddf-46a1-a583-094c3af0ad6c) | Next week's schedule |
| ✅ [Todoist today](todoist://today) | Review and confirm today's tasks |
| 📥 [Inbox](todoist://inbox) | Process overnight captures |

### 📅 Today's schedule

<%*
try {
  if (tp.user.daily_schedule) {
    tR += await tp.user.daily_schedule(tp);
  } else {
    tR += "Schedule unavailable. Go to Settings, Templater, Script files folder, set to _scripts";
  }
} catch(e) {
  tR += "Schedule error: " + e.message;
}
%>

---

**Today's focus:** *<% _fi || "*(not set — add to Properties)*" %>*

**Quest:** [[02-Quests/Health-Reset-Q3-2026|Health Reset Q3]] ← *update this link when the quest changes*

---

## This week

<details>
<summary>📅 Week view — paste Monday's calendar here</summary>

*Each Sunday: open [Weekly Calendar](obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3Achoice%3A1838ef3d-10c4-4c07-8d45-0cd2411a3411), press Ctrl+Shift+K to refresh it, then open [[00-Home/Weekly Calendar|Weekly Calendar]], select all (Ctrl+A), copy, and paste below.*

</details>

## Quest habits

**Health Reset Q3**
- [ ] 🏃 Moved for 30+ min
- [ ] 😴 In bed by target time
- [ ] 🥗 Avoided main dietary drain

**New Role Integration Q3**
- [ ] 📝 Captured one work observation, process note, or system detail
- [ ] 🤝 Connected with or followed up with a colleague
- [ ] 🔧 Made progress on an open technical issue or task

---

## Tasks

```tasks
not done
due today
sort by priority
```

### Capture — add tasks here
- [ ]

---

## Focus log

*Add sessions below — one line per block. Enter the number of minutes for each session.*

```dataviewjs
// ── Focus session total ──────────────────────────────────────────
// Read all [duration:: N] inline fields from this note's list items
const sessions = dv.current().file.lists
  .where(l => l.duration != null)
  .map(l => Number(l.duration) || 0)
  .array();

const total = sessions.reduce((a, b) => a + b, 0);
const hrs   = Math.floor(total / 60);
const mins  = total % 60;
const label = total > 0
  ? (hrs > 0 ? `**${hrs}h ${mins}m**` : `**${mins}m**`) + ` (${total} min)`
  : "_No sessions logged yet_";

dv.paragraph(`⏱ **Focus total:** ${label}`);
dv.paragraph(`➡ Copy **${total}** into \`focus_minutes:\` in frontmatter when done for the day.`);
```

- [duration:: 0]

*Add a new line for each focus session: `- [duration:: 45]` (replace 45 with actual minutes)*
*Quick reference: 30 min = 30 · 1 hr = 60 · 90 min = 90 · 2 hr = 120*

---

## Vitals

*Enter numbers in the Properties panel (top of note, ⊞ icon) or directly in frontmatter. Leave blank for any measurement not taken today.*

```dataviewjs
const p = dv.current();
const dash = "—";

// Blood pressure
const bp = (p.bp_systolic && p.bp_diastolic)
  ? `${p.bp_systolic} / ${p.bp_diastolic} mmHg`
  : dash;
const bpStatus = (() => {
  if (!p.bp_systolic || !p.bp_diastolic) return dash;
  const s = Number(p.bp_systolic), d = Number(p.bp_diastolic);
  if (s >= 180 || d >= 120) return "🔴 Hypertensive crisis";
  if (s >= 140 || d >= 90)  return "🟠 High — Stage 2";
  if (s >= 130 || d >= 80)  return "🟡 High — Stage 1";
  if (s >= 120 && d < 80)   return "🟡 Elevated";
  return "🟢 Normal";
})();

// Pulse
const pulse = p.pulse ? `${p.pulse} BPM` : dash;
const pulseStatus = p.pulse
  ? (Number(p.pulse) < 60 ? "🔵 Low" : Number(p.pulse) > 100 ? "🟡 Elevated" : "🟢 Normal")
  : dash;

// Glucose
const glucose = p.glucose ? `${p.glucose} mg/dL` : dash;
const glucoseStatus = (() => {
  if (!p.glucose) return dash;
  const g = Number(p.glucose);
  if (g >= 126) return "🔴 Diabetic range";
  if (g >= 100) return "🟡 Prediabetes";
  return "🟢 Normal";
})();

// Steps
const steps = p.steps ? `${Number(p.steps).toLocaleString()} steps` : dash;
const stepsStatus = p.steps
  ? (Number(p.steps) >= 10000 ? "🟢 Goal met" : `${(10000 - Number(p.steps)).toLocaleString()} to goal`)
  : dash;

// Sleep
const sleep = p.sleep_hours ? `${p.sleep_hours} hrs` : dash;
const sleepStatus = p.sleep_hours
  ? (Number(p.sleep_hours) >= 7 ? "🟢 Good" : Number(p.sleep_hours) >= 6 ? "🟡 Short" : "🔴 Low")
  : dash;

// Energy
const energyLabels = ["","🔴 Depleted","🟠 Low","🟡 Functional","🟢 Good","🟢 Excellent"];
const energy = p.energy ? `${p.energy} / 5` : dash;
const energyStatus = p.energy
  ? (energyLabels[Math.min(5, Math.max(1, Number(p.energy)))] || dash)
  : dash;

// Energy Score
const eScore = p.energy_score ? `${p.energy_score} / 100` : dash;

dv.table(
  ["Measurement", "Reading", "Status"],
  [
    ["🩺 Blood pressure",       bp,                         bpStatus],
    ["💓 Pulse",                pulse,                      pulseStatus],
    ["🩸 Glucose",              glucose,                    glucoseStatus],
    ["🔬 Glucose context",      p.glucose_context || dash,  dash],
    ["⚖️ Weight",               p.weight ? `${p.weight} lbs` : dash, dash],
    ["👟 Steps",                steps,                      stepsStatus],
    ["😴 Sleep",                sleep,                      sleepStatus],
    ["⚡ Energy",               energy,                     energyStatus],
    ["🔋 Energy Score (watch)", eScore,                     dash],
  ]
);
```

**Context / notes:**
> *(medication changes, illness, unusual exercise, time of measurement)*

*Enter vitals in the Properties panel — the table above updates live.*

---

## Capture inbox

*Anything that enters your head during the day — process during Sunday's weekly review.*

- 

---

## End-of-day note

> 

*Write one honest sentence about what actually happened. Copy it into `end_of_day:` in frontmatter.*

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[01-Vision/life-compass|Life Compass]] | [Todoist today](todoist://today) | [Work](todoist://project?id=6gj9XJ56ccgp93vg) | [Personal](todoist://project?id=6gj9XJ2wWPr4vHxG)
