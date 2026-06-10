---
dataview-ignore: true
date: '<% tp.date.now("YYYY-MM-DD") %>'
week: '<% tp.date.now("gggg-[W]ww") %>'
type: weekly-review
rating: 
focus_minutes: 
tags:
  - review/weekly
  - '<% tp.date.now("YYYY-[Q]Q") %>'
---

# Weekly Review — <% tp.date.now("gggg-[W]ww") %>
*<% tp.date.now("MMM D") %> – <% tp.date.now("MMM D, YYYY", 6) %>*

> Set a 20-minute timer. Work through each section without overthinking.

---

## 1. Clear the decks (5 min)

- [ ] Process email / messages inbox to zero
- [ ] Review calendar — anything to reschedule or follow up?
- [ ] Sweep task inbox — capture floating items
- [ ] File or archive loose notes

---

## 1b. This week's calendar

*Open [Weekly Calendar](obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3Achoice%3A1838ef3d-10c4-4c07-8d45-0cd2411a3411), press Ctrl+Shift+K to refresh it, then open [[00-Home/Weekly Calendar|Weekly Calendar]], select all (Ctrl+A), copy, and paste below. At next Sunday's review, compare what was planned against what actually happened.*

<details>
<summary>📅 Planned week — paste here</summary>

</details>

<details>
<summary>📝 Planned vs. actual — quick notes</summary>

**What shifted from the plan?** *(cancelled blocks, surprises, things that moved)*
> 

**What was added unplanned?**
> 

**What does this tell me about how I plan?**
> 

</details>

*For a full diagnosis → create [[03-Reviews/Plan-Actual/<% tp.date.now("gggg-[W]ww") %> Plan vs. Actual|<% tp.date.now("gggg-[W]ww") %> Plan vs. Actual]] in `03-Reviews/Plan-Actual/`*

## 2. Life area check-in

*Rate each area 1–5 based on how it felt this week.*

| Area | Rating (1–5) | One-word note |
|---|---|---|
| Work & career | | |
| Health & energy | | |
| Relationships | | |
| Personal growth | | |
| Fun & creativity | | |
| Money & finances | | |

**Overall week rating:** /5
*(Copy this number into the `rating:` frontmatter field above.)*

**Health & energy — this week's measurements:**

→ [[00-Home/vitals.base|Open Vitals Base]] and switch to the **Last 7 days** view. Daily notes use `dataview-ignore: true` so the base view is the correct way to read this data.

**This week's health notes** *(fill from Samsung Health after checking vitals base)*:

| Metric | This week avg / trend | Notes |
|---|---|---|
| BP | / mmHg | |
| Steps avg | steps/day | Goal: 10,000 |
| Sleep avg | hrs | Goal: 7+ |
| Energy avg | /5 | |
| Energy Score avg | /100 | From Samsung Health |
| Glucose | mg/dL | Context: |
| Weight | lbs | |

---

## 3. Focus hours

```dataview
TABLE WITHOUT ID
  dateformat(date, "EEE MMM D") AS "Day",
  choice(focus_minutes > 0,
    string(focus_minutes) + " min  (" +
    string(floor(focus_minutes / 60)) + "h " +
    string(focus_minutes % 60) + "m)",
    "—") AS "Focus time",
  choice(focus_minutes >= 240, "🟢",
    choice(focus_minutes >= 120, "🟡",
    choice(focus_minutes > 0,   "🔴", "⬜"))) AS "Status",
  choice(focus_intention != null AND string(focus_intention) != "",
    string(focus_intention), "—") AS "Intention"
FROM "04-Daily-Notes"
WHERE type = "daily"
  AND date >= date(this.date)
  AND date <= date(this.date) + dur(6 days)
SORT date ASC
```

```dataviewjs
const days = dv.pages('"04-Daily-Notes"')
  .where(p => p.type === "daily"
    && p.date >= dv.date(dv.current().date)
    && p.date <= dv.date(dv.current().date) + dv.duration("6 days"));

const total  = days.array().reduce((s, p) => s + (Number(p.focus_minutes) || 0), 0);
const hrs    = Math.floor(total / 60);
const mins   = total % 60;
const target = 1200;
const pct    = Math.min(Math.round((total / target) * 100), 100);
const filled = Math.round(pct / 5);
const bar    = "▓".repeat(filled) + "░".repeat(20 - filled);

dv.paragraph(
  `**Weekly total:** ${total} min — ${hrs}h ${mins}m  ` +
  `· **Target:** 1,200 min (20 hrs)  
` +
  `\`${bar}\` ${pct}%`
);

if (total >= 1200)      dv.paragraph("✅ Target hit!");
else if (total >= 900)  dv.paragraph("🟡 75% — strong week.");
else if (total >= 600)  dv.paragraph("🟠 50% — push the second half.");
else                    dv.paragraph("🔴 Below pace — what got in the way?");

dv.paragraph(
  `*Copy **${total}** into \`focus_minutes:\` in frontmatter above.*`
);
```

**Daily target guide:** 120 min = 🔴 minimum · 240 min = 🟡 solid · 360 min = 🟢 deep work day
---

## 4. Three wins this week

*Pull from this week's intentions and reflections — what actually landed?*

> **Daily Focus** · [[00-Home/00-Home|Dashboard]] · [[04-Daily-Notes|Daily Notes]] · [[00-Home/vitals.base|Vitals]] · [[00-Home/focus-log.base|Focus Log]]

![[daily-focus.base]]

1.
2.
3.

---

## 5. Quest progress

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Quest,
  area AS Area,
  progress + "%" AS Progress,
  due AS Due,
  choice(progress >= 66, "🟢 On track", choice(progress >= 33, "🟡 Check in", "🔴 At risk")) AS Health
FROM "02-Quests"
WHERE status = "Active"
SORT progress DESC
```

| Quest | Did it move forward? | Blocked? |
|---|---|---|
| | | |
| | | |
| | | |

---

## 6. Reflection prompts

*Pick 2–3 prompts that feel most relevant to this week. Write the first true answer — don't polish it.*

- **What drained my energy most?** — look for patterns across multiple weeks
- **What gave me the most energy?** — signals for what to do more of
- **Did I spend time on what actually matters?**
- **Stop / start / continue** — one thing to stop, one to start, one to keep
- **Did I act in line with my core values?** — reference [[01-Vision/life-compass|Life Compass]]
- **One thing I'm grateful for**

>

---

## 7. Next week intention

*Set the direction before next week starts, not during it.*

**Next week I want to:** *(one sentence)*
>

**3 priorities that would make next week a success:**
1.
2.
3.

**One quest milestone I will complete:**
>

*→ Open Morgen and block time for the 3 priorities above. Then press `Ctrl+Shift+J` to fetch next week's calendar and review the blocks.*

---

## 8. Zettelkasten inbox

*Brief version — see [[_docs/Zettelkasten — Complete Procedure|Zettelkasten Procedure]] Part 5 for full workflow.*

- [ ] Open [[06-Zettelkasten/06-Zettelkasten|Zettelkasten index]] → work through fleeting notes oldest-first
- [ ] Open [[06-Zettelkasten/Literature Processing Guide|Literature Processing Guide]] → pick top Tier 1 claim → write 2–3 permanent notes (`Ctrl+Shift+P`)
- [ ] Add at least one link to an existing permanent note

**Notes written this week:**
-

---

## 8b. Course study check-in

*5 minutes — log sessions, extract any permanent note claims, flag weak areas.*

### HAM Radio

```dataview
LIST WITHOUT ID
  "Week " + week + " · " + dateformat(date, "MMM D") + " sessions logged"
FROM "05-Resources/Courses/HAM-Radio"
WHERE type = "course-progress" AND date >= date(this.date) - dur(7 days)
```

- [ ] Log this week's study sessions in [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Progress|HAM Progress tracker]] (`[duration:: N]` inline field)
- [ ] Take one practice exam if you haven't this week → log score with `[score:: N%]`
- [ ] Add any concepts still fuzzy to the **Weak areas** list in the Progress tracker
- [ ] Any insight worth a permanent note? → `Ctrl+Shift+P` → tag `domain: ham-radio`

**HAM Radio PNs written this week:**
-

### CAP Certification

- [ ] Log study sessions in [[07-Work-Knowledge/CAP-Certification/CAP Study Plan|CAP Study Plan]] progress log
- [ ] Add wrong/uncertain practice questions to [[07-Work-Knowledge/CAP-Certification/CAP Practice Questions|CAP Practice Questions]] log
- [ ] Any insight worth a permanent note? → `Ctrl+Shift+P` → tag `domain: ia-ot`

**CAP PNs written this week:**
-

---

## 9. Brain dump

*Anything still on your mind — questions, observations, ideas, things to research, things to tell people. Get it out. Process anything actionable into Todoist after the review.*

>

---

## 9b. Work captures — Todoist → vault (10 min)

*Move field observations captured from your watch/phone this week into permanent vault notes. Prevents work knowledge rotting in Todoist inbox.*

- [ ] Open Todoist → filter **Work** project → review items captured this week from watch
- [ ] For each observation worth keeping:
  - Troubleshooting note → new file in `07-Work-Knowledge/Troubleshooting/` (`Ctrl+P` → QuickAdd → New Troubleshooting Log)
  - Process or system note → add to relevant file in `07-Work-Knowledge/Processes/` or `Networking/`
  - General observation → append to `_reference/Work/Field Notes.md`
- [ ] Mark processed Todoist items complete
- [ ] Check the **New Role Integration** daily habit: was "captured one work observation" actually filed somewhere useful, or just left in Todoist?

**Work observations filed this week:**

```dataview
TABLE WITHOUT ID
  link(file.path, file.name) AS Note,
  file.folder AS Location,
  dateformat(file.mtime, "EEE MMM D") AS Modified
FROM "07-Work-Knowledge" OR "/_reference/Work"
WHERE file.mtime >= date(this.date) AND file.mtime <= date(this.date) + dur(6 days)
SORT file.mtime DESC
```

---

## After review: Quest–Todoist sync (5 min)

- [ ] Did any quest milestones complete this week? If yes → create next milestone's key action in Todoist with a due date
- [ ] Health Reset milestones → Personal project · New Role Integration milestones → Work project
