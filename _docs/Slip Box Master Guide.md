---
doc_type: master
purpose: "Comprehensive vault reference — how everything works, why it works that way, and troubleshooting"
tags: [no-tasks]
updated: 2026-06-07
---

# Slip Box — Master Guide

*Use, Maintenance & Troubleshooting · Updated June 7, 2026*

---

## Part 1: What this vault is

The Slip Box is a personal operating system built around three tools — **Obsidian** (knowledge, reflection, reviews), **Todoist** (task management), and **Morgen** (scheduling and time-blocking). Each tool has a distinct lane; overlap is where friction comes from.

| Tool | Owns |
|---|---|
| **Slip Box vault** | Intention, reflection, quest management, reviews, knowledge, vitals, Zettelkasten |
| **Todoist** | All actionable tasks with due dates; quick capture; reminders |
| **Morgen** | Time-bound events; time-blocking; unified calendar + task view for daily planning |

The vault is the anchor — open it every day. The full three-tool integration workflow lives in `_docs/Slip Box Integrated Workflow.md`.

---

The vault operates in three layers:

**The doing layer** answers: *What am I working on and am I making progress?*
Quests set 90-day goals. Daily notes track focus, tasks, and health vitals. Reviews close the feedback loop — weekly, monthly, quarterly.

**The thinking layer** answers: *What do I actually know and believe?*
The Zettelkasten (`06-Zettelkasten`) builds a networked body of ideas. Every book, article, and insight captured becomes a permanent note that links to others. The network grows more valuable with every addition.

**The health layer** answers: *How is my body doing over time?*
Vitals are logged in each daily note and aggregated automatically — daily log, weekly averages, monthly averages, and quarterly trends — all from the dashboard.

The layers connect: ideas in the thinking layer generate quests in the doing layer; vitals trends inform the Health & energy life area in every review; quests produce experiences that generate new permanent notes.

### The five core questions

Everything in the vault traces back to these:

1. **Who am I and what do I want?** → `01-Vision` (Life Compass + Future Vision)
2. **What am I actively working toward?** → `02-Quests`
3. **Am I making progress?** → `03-Reviews` + `04-Daily-Notes`
4. **What do I think and know?** → `06-Zettelkasten`
5. **How is my body doing?** → Vitals tracker (daily notes + `vitals.base`)

---

## Part 2: Vault structure

```
Slip Box/                         ~455 notes · as of June 7, 2026
├── .obsidian/                  Obsidian configuration — do not edit manually
├── _attachments/               PDFs and binary files — drag-and-drop saves here automatically
│   ├── Attachment Catalog.md   Master index — add a row every time you add a file
│   └── Work/Automation/        10 Rockwell PDF manuals with companion notes
├── _archive/                   Completed/outdated material
│   ├── Fleeting/               Processed fleeting notes tagged `processed`
│   ├── Daily-Notes/            Daily notes older than 90 days (batch-move quarterly)
│   └── Quests/                 Completed or abandoned quests
├── _docs/                      System documentation — click folder to open navigation hub
│   ├── _docs.md                MOC — categorised index of every doc with embedded live base view
│   ├── docs.base               Live base view — All / Procedures / Reference / Guides / Evaluations
│   ├── Slip Box Master Guide.md
│   ├── Slip Box Integrated Workflow.md
│   ├── Getting Started - First 30 Days.md
│   ├── Vault State - June 2026.md
│   ├── Vault Backup System.md
│   ├── Bulk Import Work Reference PDFs.md
│   └── Evaluations/            Audit history — 12 evaluations (June 2026)
├── _reference/                 Reference material — looked up, not Zettelkasten-processed
│   ├── Personal/               DMV, insurance, vehicle, home hunting · Body Composition Log
│   └── Work/                   Process docs, SOPs · Field Notes.md (Todoist→vault capture landing)
├── _scripts/                   QuickAdd macros + Templater scripts
│   ├── weekly-calendar.js      Fetches Morgen/calendar ICS → Weekly Calendar.md (Ctrl+Shift+K)
│   ├── next-week-calendar.js   Fetches next week ICS → Next Week Calendar.md (Ctrl+Shift+J)
│   ├── daily-schedule.js       Templater user script — populates today's schedule in daily notes
│   ├── vault-backup.bat        Git commit + push to GitHub (run manually)
│   ├── open-*.js (4 files)     Unused — not wired to any QuickAdd choice; archive or delete
│   └── fix-*.py (3 files)      One-time maintenance scripts already run; archive or delete
├── _templates/                 29 note templates — do not write notes here
├── 00-Home/                    Dashboard and base views only
├── 01-Vision/                  Life Compass and Future Vision
├── 02-Quests/                  Active quests — Health Reset Q3 + New Role Integration Q3
├── 03-Reviews/
│   ├── Weekly/                 W20–W24 (2026) — auto-created via Periodic Notes
│   ├── Monthly/                May 2026, June 2026
│   ├── Quarterly/              Q2 2026 review
│   ├── Plan-Actual/            Planning diagnosis notes (weekly/monthly/quarterly) — folder + templates ready
│   └── Workouts/               Workout log notes — auto-template via Templater; create via Workout Log Template
├── 04-Daily-Notes/             May 21 – Jun 7, 2026 (18 notes) · schedule auto-populates on creation
├── 05-Resources/
│   ├── Articles/               Articles to read / reading / done
│   ├── Books/                  32 book notes — reading tracker, linked to Literature notes
│   ├── Courses/
│   │   ├── HAM-Radio/          General License study system — Master Reference, Syllabus
│   │   ├── GPS-Tracker-Project/ Paul McWhorter Raspberry Pi series (6 lessons)
│   │   └── MIT-CS/             MIT OpenCourseWare notes
│   └── Ideas/                  Project-shaped sparks; pipeline to quests
├── 06-Zettelkasten/
│   ├── Fleeting/               141 notes — triage script ready (`_scripts/fleeting-triage.js`), target <50
│   ├── Literature/             38 notes — 19 rebuilt to proper template June 2026
│   ├── Permanent/              6 notes — all using claim-based kebab-case titles
│   └── MOC/                    4 Maps of Content:
│                               · Automation Engineering MOC
│                               · HAM Radio MOC
│                               · PKM and Zettelkasten MOC
│                               · Personal Growth MOC
└── 07-Work-Knowledge/          38 notes — professional knowledge + CAP prep
    ├── Automation/             12 notes — full electrical fundamentals sequence
    │                           DC Theory → Current → Ohm's Law → Power → Sources & Loads
    ├── Networking/             9 notes — OT/IT, Windows Server, Linux, AWS
    ├── Processes/              10 notes — pharma manufacturing, SOPs, documentation
    ├── Troubleshooting/        2 notes
    └── CAP-Certification/      2 notes — domain breakdown and study timeline
```

### Files in 00-Home

`00-Home` is now **operational only** — the dashboard and its base views. All system documentation lives in `_docs/`.

| File | Purpose |
|---|---|
| `00-Home.md` | The dashboard — open this every day |
| `quests.base` | Powers the Active Quests section |
| `focus-log.base` | Powers the Focus log chart |
| `reading-list.base` | Powers the Currently Reading section |
| `zettelkasten.base` | Powers the Recent Permanent Notes section |
| `daily-focus.base` | Morning intention vs. end-of-day tracker — embedded in dashboard and all reviews |
| `vitals.base` | Powers the Vitals Tracker |
| `courses.base` | Powers the Active Courses section |
| `weekly-reviews.base` | Powers the Recent Weekly Reviews section |
| `monthly-reviews.base` | Powers the Recent Monthly Reviews section |
| `quarterly-reviews.base` | Powers the Recent Quarterly Reviews section |
| `plan-actual.base` | Planning Diagnosis — all Plan vs. Actual notes; tabs: All / Weekly / Monthly / Quarterly / Needs attention |
| `Weekly Calendar.md` | Generated by `Ctrl+Shift+K` — current week calendar |
| `Next Week Calendar.md` | Generated by `Ctrl+Shift+J` — next week calendar |

### Files in _docs

| File | Purpose |
|---|---|
| `_docs.md` | MOC — categorised index of every doc; open by clicking the `_docs` folder |
| `docs.base` | Live base view of all docs — sort and filter by type, purpose, date |
| `Slip Box Master Guide.md` | This document — full reference |
| `Slip Box Integrated Workflow.md` | Three-tool workflow (vault + Todoist + Morgen) |
| `Getting Started - First 30 Days.md` | Onboarding checklist |
| `Vault State - June 2026.md` | Monthly health check + quarterly audit queries — **run this monthly** |
| `Vault Quick Reference.md` | All hotkeys, QuickAdd commands, Commander buttons — one page |
| `Vault Backup System.md` | Backup procedure, locations, and restore steps |
| `Bulk Import Work Reference PDFs.md` | Procedure for bulk-importing vendor PDFs |
| `Commander — Quick Reference.md` | Commander plugin config — button IDs, modes, troubleshooting |
| `Life Compass — Complete Procedure.md` | Values, roles, energy audit — initial setup and quarterly review |
| `Zettelkasten — Complete Procedure.md` | Full Zettelkasten workflow — all 4 note types, processing, linking, MOCs |
| `Vault Systems — Complete Procedure.md` | Daily notes, focus log, vitals, quests, resources, backup |
| `Reviews & Planning — Complete Procedure.md` | Daily → weekly → monthly → quarterly review → quarterly planning + Plan vs. Actual |
| `reMarkable Integration — Complete Procedure.md` | Capturing from reMarkable tablet via PDF export |
| `Galaxy Watch Ultra.md` | Complete watch guide — all settings, health features, workouts, safety, vault integration |
| `Galaxy Watch Ultra — Personalized Setup.md` | Step-by-step setup tied to Health Reset and New Role Integration quests |
| `Evaluations/` | Audit history — 12 evaluations (June 2026) |

---

## Part 3: Plugin reference

### Community plugins (17 installed, as of June 7 2026)

| Plugin | Role |
|---|---|
| **Templater** | Auto-applies templates when notes are created in configured folders |
| **Dataview** | Powers live tables, progress bars, and lists in reviews and Zettelkasten |
| **Calendar** | Sidebar calendar for navigating daily/periodic notes |
| **Periodic Notes** | Creates weekly/monthly/quarterly review notes in the right folders |
| **Tasks** | Scans all notes for `📅 YYYY-MM-DD` due-date tasks |
| **QuickAdd** | Hotkey capture, new note macros, calendar fetch macros |
| **Advanced URI** | Powers all clickable action links in the dashboard |
| **Homepage** | Opens the dashboard automatically on startup |
| **Commander** | Adds custom buttons to the Ribbon, Tab Bar, and note Toolbar |
| **Folder Notes** | Makes folder names clickable — opens their index note |
| **Notebook Navigator** | Clean folder panel view |
| **Linter** | Auto-normalizes frontmatter on save (templates folder excluded) |
| **Note Refactor** | Extract selected text to a new note |
| **Heatmap Calendar** | Focus time streak visualization on dashboard |
| **Minimal Theme Settings** | Controls for Minimal theme appearance |
| **Morgen Tasks** | Syncs vault tasks (Quests, Daily Notes, Troubleshooting) to Morgen for time-blocking; completion in Morgen checks off in vault |
| **Morgen (ID decorator)** | Hides or stylizes the `🆔` task IDs that Morgen adds to synced tasks |

> ⚠️ **Periodic Notes is on v0.0.17** — check Community Plugins for an update. This plugin drives all weekly/monthly/quarterly note creation.

### Core plugins (must stay enabled)

| Plugin | Role |
|---|---|
| **Bases** | Powers all `.base` embedded views throughout the vault |
| **Graph** | Visualizes connections between notes |
| **Backlinks** | Shows what links to the current note |
| **Properties** | Renders frontmatter as a structured panel |
| **Search** | Full-text search across the vault |

---

## Part 4: Hotkey reference

| Action | Hotkey | Notes |
|---|---|---|
| Open today's daily note | `Ctrl+D` | Creates it if it doesn't exist |
| Open this week's review | `Ctrl+Shift+W` | Creates it if it doesn't exist |
| Open dashboard | `Ctrl+H` | Goes to `00-Home/00-Home.md` |
| New fleeting note | `Ctrl+Shift+F` | Creates in `06-Zettelkasten/Fleeting/` |
| New permanent note | `Ctrl+Shift+P` | Creates in `06-Zettelkasten/Permanent/` — rename immediately |
| Add to daily capture | `Ctrl+Shift+C` | Appends to today's daily note without opening it |
| Fetch weekly calendar | `Ctrl+Shift+K` | Writes to `00-Home/Weekly Calendar.md` |
| Fetch next week calendar | `Ctrl+Shift+J` | Writes to `00-Home/Next Week Calendar.md` |
| Extract to new note | `Ctrl+Shift+E` | Note Refactor — splits selected text |
| Open graph view | `Ctrl+G` | Color-coded by note type |
| **Update focus_minutes** | `Ctrl+Shift+M` *(assign this)* | Templater: reads all `[duration:: N]` entries, sums them, writes total to `focus_minutes:` frontmatter automatically |

> **To assign the focus minutes hotkey:** Settings → Hotkeys → search "Update Focus Minutes" → click `+` → press `Ctrl+Shift+M`

---

## Part 5: Daily workflow

The morning sequence runs across three tools in a fixed order. Don't reverse it — checking the vault before looking at the calendar produces intentions that ignore reality.

### Morning (10 minutes)

**Step 1 — Morgen (8 min)**
Open Morgen — this is your single "what does today look like" view. It shows calendar events and Todoist tasks together, plus any vault quest tasks already time-blocked.
- See today's shape — meetings, blocks, real available time — before touching the vault
- Are today's Todoist tasks realistic given the calendar?
- Process overnight Todoist inbox items (project + date, 2 min max each)
- Reschedule anything that won't happen today
- Identify 1–2 most important tasks and drag them onto the calendar to time-block

Daily Todoist goal: 5 tasks completed.

**Step 2 — Obsidian daily note (5 min)** — `Ctrl+D`
- **Today's schedule** — auto-populates from your calendar ICS when the note is created. Review events before writing your intention.
- **Today's focus** — prompted automatically when the note opens. Type one sentence ("what would make today a win?") and it goes directly into `focus_intention:` frontmatter and the note body — no manual copy. Feeds the daily-focus base.
- **Quest habits** — which Health Reset habits will you do today? Commit now.
- **Morning vitals** — BP, pulse, glucose, weight. Takes 2 minutes.
- Scan the **Tasks** query — vault tasks due today?"

### Capture routing during the day

| What surfaced | Where it goes |
|---|---|
| Work task | Todoist → Work project (or Inbox) |
| Personal task | Todoist → Personal project (or Inbox) |
| Thought / insight | `Ctrl+Shift+C` → daily capture (no context switch) |
| Idea needing its own note | `Ctrl+Shift+F` → Fleeting folder |
| Quest action | Quest note: `- [ ] Action 📅 YYYY-MM-DD` → appears in Morgen automatically |
| Meeting to schedule | Morgen / Google Calendar directly |

### Logging focus sessions

In the Focus Log section of the daily note, log in **minutes**:
```
- [duration:: 90] OT System — network documentation
- [duration:: 45] HAM Radio study — G1 Commission's Rules
```
The `Total today:` line sums automatically. Copy the total to `focus_minutes:` in frontmatter at end of day.

*Quick reference: 30 min = 30 · 1 hr = 60 · 90 min = 90 · 2 hr = 120*

### End of day (8 minutes)

1. **Morgen (2 min):** Check tomorrow's calendar shape. Drag priorities onto tomorrow's calendar. Confirm Todoist tasks for tomorrow are realistic.
2. **Todoist (3 min):** Reschedule undone tasks. Process inbox. Confirm tomorrow's list.
3. **Obsidian daily note (3 min):**
   - Enter steps, weight, energy (1–5) in Properties
   - Sum focus sessions → copy total to `focus_minutes:` frontmatter
   - Write one sentence in `end_of_day:` — what actually happened?
   - Check any habit boxes done but not yet checked

---

## Part 5b: Calendar scripts

All three calendar scripts share the same ICS URL stored in QuickAdd settings (Settings → QuickAdd → Manage Macros → ⚙️ → `ics_url` field).

| Script | Trigger | Writes to |
|---|---|---|
| `_scripts/weekly-calendar.js` | `Ctrl+Shift+K` | `00-Home/Weekly Calendar.md` |
| `_scripts/next-week-calendar.js` | `Ctrl+Shift+J` | `00-Home/Next Week Calendar.md` |
| `_scripts/daily-schedule.js` | Templater (auto on note creation) | Today's daily note — `### 📅 Today's schedule` section |

Weekly and next-week events render as:
```
- [ ] 8:30am – 9:30am — **Standup** 👤 *Team* 📍 *Conference Room*
```

Daily schedule events render as:
```
- [ ] `9am – 10am` — **Standup**
- [ ] `All day` — **National Holiday**
```

`daily-schedule.js` runs as a Templater user function. It reads the ICS URL from QuickAdd's stored settings automatically — no extra configuration needed. If the schedule section shows `⚠️ No calendar ICS URL found`, open QuickAdd → Manage Macros → Weekly Calendar → ⚙️ and verify the `ics_url` field is filled.

---

## Part 6: Weekly workflow — Sunday (~50 minutes)

Do Todoist and Morgen **before** opening the vault.

### Step 1 — Todoist (8 min)
Inbox to zero. Overdue review. Confirm next week's top 5–7 non-vault tasks have due dates. Check backlogs.

> **Note:** Quest milestone tasks no longer need to be duplicated into Todoist. They live in vault quest notes and sync to Morgen automatically via the Morgen Tasks plugin.

### Step 2 — Morgen (5 min)
Open Morgen and review next week's calendar. Drag vault quest tasks from the Morgen task panel onto next week's calendar. Time-block Todoist priorities. Resolve conflicts now. You can also use `Ctrl+Shift+J` to pull next week's calendar into the vault for reference.

### Step 3 — Obsidian weekly review (25 min) — `Ctrl+Shift+W`

Work through all 9 sections:

**Section 1 — Clear the decks:** The Todoist + Morgen planning just done counts here.

**Section 2 — Life area check-in:** Rate 6 areas 1–5. The vitals Dataview table auto-shows this week's health data below the Health & energy row. Copy overall rating to `rating:` frontmatter.

**Section 3 — Focus hours:** Fully automatic. The Dataview table pulls `focus_minutes` from each daily note in the week's range. The DataviewJS block totals them, shows a progress bar against the 1,200 min target, and prompts you to copy the total to `focus_minutes:` frontmatter.

**Section 4 — Three wins:** Open the `daily-focus.base` on "Last 7 days" view — your morning intentions are right there to jog memory.

**Section 5 — Quest progress:** Dataview shows active quests with health indicators. Update `progress:` in any quest note where milestones completed.

**Section 6 — Reflection prompts:** Answer 2–3 honestly. No editing.

**Section 7 — Next week intention:** One sentence + 3 specific priorities + one quest milestone. Use `Ctrl+Shift+J` to pull next week's calendar.

**Section 8 — Zettelkasten processing:**
- **8a:** Dataview surfaces the 5 oldest fleeting notes. Process each: promote to permanent, archive to literature, or delete.
- **8b:** Shows permanent notes written this week. If empty — write one before closing.
- **8c:** DataviewJS shows inbox size with a status indicator that escalates the weekly target as backlog grows.

**Section 9 — Capture anything else.**

### Step 4 — Quest milestone review (2 min)
Review active quest notes. Add any new milestone tasks with due dates — they appear in Morgen automatically via the Morgen Tasks plugin. No Todoist duplication needed for quest tasks. Non-vault tasks (admin, errands, calls) still go to Todoist as before.

---

## Part 7: Monthly workflow — end of month (~30–45 min)

Click "New monthly review" on the dashboard. Read back through the month's weekly reviews first.

Key additions: fill `focus_minutes_total` and `rating` frontmatter from the metrics table. Note *direction of travel* per life area — trend matters more than the number. Run the **Monthly health check** section in `00-Home/Vault State - June 2026.md` — the orphan detector and fleeting inbox trend queries live there.

---

## Part 8: Quarterly workflow — end of quarter (~60–90 min)

The most important review in the system. Do not rush it.

Read back through all weekly reviews, all monthly reviews, every quest note, and your Life Compass and Future Vision before starting. The 14-section quarterly review covers: quest retrospective, life area deep-dive, ten wins, values and identity check, vision check, learning summary, and planning for next quarter.

**Run the quarterly audit queries in `00-Home/Vault State - June 2026.md`:** fleeting → permanent conversion rate, archive-ready processed notes, Work Knowledge coverage, CAP domain coverage, HAM study progress.

After the review: run a Quarterly Planning session — `Ctrl+P` → "QuickAdd: New Quarterly Plan" → creates a planning note in `03-Reviews/Quarterly/`. The planning note appears alongside reviews in the `quarterly-reviews.base` dashboard panel.

---

## Part 9: Quests

Quests are 90-day focused efforts tied to one life area. Keep 1–3 active at a time.

**Creating a quest:** Dashboard → New quest. Rename immediately (`F2`) to `Topic-Q3-2026` format — the filename drives the Weekly actions task query inside the note.

**Key frontmatter:** `area`, `quarter` (QX-YYYY), `due`, `progress` (0–100), `status` (Active / Completed / Abandoned)

**Progress health:**
| Progress | Indicator |
|---|---|
| ≥ 66% | 🟢 On track |
| 33–65% | 🟡 Check in |
| < 33% | 🔴 At risk |

Keep Completed and Abandoned quests — they're more valuable for quarterly retrospectives than you'd expect.

---

## Part 10: Vision documents

**Life Compass** (`01-Vision/life-compass.md`) — Core values (3–5, personally defined), life roles with "showing up well" descriptions, and energy audit (1–5 per area). Fill this before creating any quests. Every quest should connect to it in one sentence. Review and update at each quarterly review.

**Future Vision** (`01-Vision/future-vision.md`) — 1-year, 3-year, 10-year vision written in past or present tense ("I have built..."), not "I want to...". Read before every quarterly planning session.

---

## Part 11: Zettelkasten — the thinking layer

### The four note types

**Fleeting notes** (`06-Zettelkasten/Fleeting/`) — Quick captures. Format doesn't matter. Process or delete within 48 hours. These are an inbox, not storage. **Current backlog: 141 notes. Use `_scripts/fleeting-triage.js` (QuickAdd macro) to open the oldest note and choose Archive / Promote / Delete / Skip in one step. Target: below 50.**

**Literature notes** (`06-Zettelkasten/Literature/`) — One note per source, everything in your own words. Template structure (June 2026): source in one sentence → key ideas → my reaction → permanent notes spawned → connections → source highlights. 38 notes, 19 rebuilt to proper template. Each book note in `05-Resources/Books/` now has a `literature_note:` link pointing to its counterpart here.

**Permanent notes** (`06-Zettelkasten/Permanent/`) — The core of the system. One atomic idea per note. Title must be a complete claim in kebab-case. Current notes 01–05 need to be renamed — use F2 in Obsidian to rename to the claim title directly:

| ❌ Topic | ✅ Claim |
|---|---|
| Habits | Habits are cues, not willpower |
| Deep work | Depth of focus multiplies output quality |
| Resistance | Resistance is friction — it opposes current, converts electrical energy to work |

Rules: self-contained, your words, linked (≥ 2 outbound links), one idea. **Current count: 6. Target: 1 new per week.**

**Maps of Content** (`06-Zettelkasten/MOC/`) — Navigation notes created reactively when a cluster gets too large to hold in your head. Current MOCs: Automation Engineering, HAM Radio, PKM & Zettelkasten, Personal Growth.

### Zettelkasten processing workflow

```
Capture  →  Fleeting note (Ctrl+Shift+F) or daily capture (Ctrl+Shift+C)
               ↓
Process  →  Permanent note (or literature note, or delete)
               ↓
Link     →  Add ≥ 2 outbound links before closing
               ↓
Navigate →  Create MOC when cluster is too large to hold in head
```

The **Weekly Review Section 8** is the dedicated processing slot. The Dataview queue surfaces the 5 oldest fleeting notes automatically — no hunting.

### Zettelkasten health indicators

| Indicator | Action |
|---|---|
| Fleeting notes > 100 | Process 10/week instead of 5 |
| Permanent notes with < 2 outbound links | Add links before the next review |
| No new permanent notes this week | Write one before closing the weekly review |
| Ideas parked 90+ days | Promote or delete — make a decision |

---

## Part 12: Work Knowledge base

`07-Work-Knowledge/` is the professional reference layer — 36 notes across 5 subfolders.

### Electrical fundamentals sequence (Automation subfolder)

The notes follow a deliberate learning sequence:

1. [[07-Work-Knowledge/Automation/Basic Direct Current (DC) Theory - Overview|① DC Theory Overview]] — voltage and potential energy
2. [[07-Work-Knowledge/Automation/Basics of Electrical Current|② Basics of Electrical Current]] — electron drift, conductors
3. [[07-Work-Knowledge/Automation/Electrical Resistance and Ohm's Law|③ Electrical Resistance & Ohm's Law]] — V=IR, series/parallel circuits
4. [[07-Work-Knowledge/Automation/What is Electrical Power|④ Electrical Power]] — Watt's Law, P=VI
5. [[07-Work-Knowledge/Automation/Electrical Sources and Electronic Load|⑤ Sources and Loads]] — voltage sources driving resistive loads

> These fundamentals apply directly to both **CAP exam Domains 1 & 3** and the **HAM General License G5 sub-element**. The HAM Radio MOC notes the crossover explicitly.

### CAP Certification prep

`07-Work-Knowledge/CAP-Certification/` has the domain breakdown and study timeline. Target: Q3 2027. Notes tagged `CAP-prep` are queryable — the Quarterly Audit in Vault State surfaces them.

---

## Part 13: Attachment system

`_attachments/` holds all binary files. The Attachment Catalog (`_attachments/Attachment Catalog.md`) tracks every file with a companion note.

**reMarkable Paper Pro integration:** The reMarkable Sync plugin is currently non-functional and awaiting a plugin update. Use USB or the reMarkable desktop app to export notebooks as PDFs and place them in `_attachments/reMarkable/`. See [[_docs/reMarkable Integration — Complete Procedure|reMarkable Integration]] for the full workflow.

**10 Rockwell PDF manuals** currently live in `_attachments/Work/Automation/`, each with a companion `.md` note that includes title, description, key topics, and a link back to the relevant Work Knowledge note.

**Adding a new attachment:**
1. Drag the file into Obsidian — it saves to `_attachments/` automatically
2. Create a companion note using the Attachment Note Template
3. Add a row to `_attachments/Attachment Catalog.md`

---

## Part 14: Template reference

| Template | Auto-applies to | Key frontmatter |
|---|---|---|
| Daily Note | `04-Daily-Notes/` | `date`, `type: daily`, `focus_minutes`, vitals fields |
| Weekly Review | `03-Reviews/Weekly/` | `date`, `week`, `type: weekly-review`, `rating`, `focus_minutes` |
| Monthly Review | `03-Reviews/Monthly/` | `date`, `month`, `type: monthly-review`, `rating`, `focus_minutes_total` |
| Quarterly Review | `03-Reviews/Quarterly/` | `date`, `quarter`, `rating`, `quests_completed` |
| Quest | `02-Quests/` | `area`, `quarter` (QX-YYYY), `status`, `due`, `progress` (0–100) |
| Book | `05-Resources/Books/` | `author`, `status`, `date_started`, `date_finished`, `rating`, `literature_note` |
| Article | `05-Resources/Articles/` | `url`, `author`, `source`, `status` |
| Idea | `05-Resources/Ideas/` | `area`, `status` (raw/developing/parked/promoted) |
| Fleeting Note | `06-Zettelkasten/Fleeting/` | `id` (timestamp), `date`, `type: fleeting` |
| Literature Note | `06-Zettelkasten/Literature/` | `type: literature`, `source-type`, `source-author`, `book_note` |
| Permanent Note | `06-Zettelkasten/Permanent/` | `type: permanent` — rename immediately to a claim |
| MOC | `06-Zettelkasten/MOC/` | `type: moc` |
| Attachment Note | Manual | `type: attachment`, `tags`, `source_doc` |
| Course Overview | `05-Resources/Courses/[slug]/` | `type: course-overview`, `course`, `status`, `credential`, `target_date`, `effort_hours_estimated` |
| Course Syllabus | `05-Resources/Courses/[slug]/` | `type: course-syllabus`, `course`, `total_weeks` |
| Course Resources | `05-Resources/Courses/[slug]/` | `type: course-resources`, `course` |
| Course Progress | `05-Resources/Courses/[slug]/` | `type: course-progress`, `course`, `status`, `target_score`, `exam_date` |
| Course Reference | `05-Resources/Courses/[slug]/` | `type: course-reference`, `course` |
| Quarterly Planning | `03-Reviews/Quarterly/` | `type: quarterly-planning`, `quarter`, `year`, `quests_planned` |

> **Creating a course package:** `Ctrl+P` → "QuickAdd: New Course Package" — prompts for 5 inputs and creates the complete 5-file folder automatically. See [[05-Resources/Courses/Course Study Workflow|Course Study Workflow]] for the full process.

**Frontmatter quoting:** All Templater `2026-06-05` expressions in frontmatter use single-quoted YAML strings (`date: '2026-06-05'`) to prevent Obsidian's Properties panel from trying to validate them before Templater runs.

---

## Part 15: Vault maintenance routines

### Weekly (Sunday, during review — Section 8)
- [ ] Process 5 oldest fleeting notes (Dataview queue in Section 8a)
- [ ] Write ≥ 1 permanent note (Section 8b — if empty, write one before closing)
- [ ] Check permanent notes created this week — each has ≥ 2 outbound links?
- [ ] Update `progress:` in any quest where milestones completed
- [ ] Fill `rating:` and `focus_minutes:` in this week's review frontmatter

### Monthly (first Sunday of each month — Vault State note)
Open `_docs/Vault State - June 2026.md` and run the monthly health check:
- [ ] **Orphan detector** — notes with zero backlinks. Link, move to `_reference/`, or delete.
- [ ] **Fleeting inbox trend** — count with status indicator. Adjust weekly processing target if above 80.
- [ ] **Permanent notes created this month** — check link health (≥ 2 outlinks, ≥ 1 inlink).
- [ ] **MOC freshness** — any MOC not updated in 30+ days? Review and update.
- [ ] Verify all weekly reviews this month have `rating:` and `focus_minutes:` filled.
- [ ] Archive fleeting notes tagged `processed` to `_archive/Fleeting/`.

### Quarterly (end of quarter — Vault State note)
Open `_docs/Vault State - June 2026.md` and run the quarterly audit:
- [ ] **Fleeting → permanent conversion rate** — target 1 permanent per 10 fleeting captured.
- [ ] **Archive processed fleeting notes** tagged `processed` → `_archive/Fleeting/`.
- [ ] **Work Knowledge coverage** — subfolder index link counts.
- [ ] **CAP domain coverage** — notes tagged `CAP-prep`.
- [ ] **HAM study progress** — HAM-Radio course notes by last-edited date.
- [ ] Update quest statuses (Active → Completed or Abandoned).
- [ ] Update Life Compass and Future Vision if direction has shifted.
- [ ] Graph view review — identify isolated permanent note clusters to link.

### Annual
- [ ] Archive completed quests to `02-Quests/Archive/YYYY/`
- [ ] Archive old daily notes to `04-Daily-Notes/Archive/YYYY/`
- [ ] Archive old weekly/monthly reviews by year
- [ ] Open "All time" view in `vitals.base` — export for annual health checkup
- [ ] Review all MOCs for accuracy
- [ ] Prune reading list of books you've decided not to read

---

## Part 16: Dataview and Bases troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Base shows empty table | Notes don't match the filter (wrong `status` or `type`) | Check frontmatter spelling; run Linter |
| Dataview shows nothing | `type:` typo or notes in wrong folder | Check frontmatter; run `Dataview: Rebuild index` |
| Focus hours Section 3 shows blank rows | `focus_minutes:` not filled in daily note frontmatter | Copy session total from focus log into frontmatter |
| Focus bar shows 0% | Same as above — DataviewJS reads `focus_minutes` frontmatter field | Enter the total minutes in Properties panel |
| Vitals base shows nothing | Linter converted numbers to quoted strings (`"2724"` instead of `2724`) | Settings → Linter → YAML Rules → Force YAML Escape → OFF |
| Vitals averages tables empty | `bp_systolic > 0` filter — no BP readings yet | Add one BP reading, or change filter to a field you do track |
| Weekly review Section 8a shows wrong notes | `file.ctime` sorts by creation time — system clock issue | Expected behavior; queue shows oldest-created-in-Obsidian |
| Permanent notes not in Zettelkasten index | Missing `type: permanent` or note in wrong folder | Check Properties panel; confirm note is in `06-Zettelkasten/Permanent/` |
| Base shows raw YAML | Bases core plugin disabled | Settings → Core plugins → Bases → ON |
| Reviews not in dashboard bases | Wrong `type:` value | Must be exactly `weekly-review`, `monthly-review`, `quarterly-review` |

---

## Part 17: Plugin troubleshooting

**Templates not firing on new note creation**
Settings → Templater → confirm "Trigger Templater on new file creation" is ON. Verify folder templates show all 12 assignments. The template file must be in `_templates/` exactly.

**Periodic notes (weekly/monthly/quarterly) not creating**
Settings → Periodic Notes → verify each type is enabled:

| Type | Format | Folder |
|---|---|---|
| Daily | `YYYY-MM-DD` | `04-Daily-Notes` |
| Weekly | `YYYY-[W]WW` | `03-Reviews/Weekly` |
| Monthly | `YYYY-MM` | `03-Reviews/Monthly` |
| Quarterly | `YYYY-[Q]Q[-review]` | `03-Reviews/Quarterly` |

**QuickAdd hotkeys do nothing**
Settings → QuickAdd → click the ⚡ lightning bolt icon next to each choice to toggle it as a command.

**Dashboard buttons do nothing**
Settings → Community plugins → verify `obsidian-advanced-uri` is enabled. Vault name in URLs must match exactly (Settings → About).

**Commander buttons not showing**
Three requirements must all be true: (1) entry `id` must be the Obsidian command ID (e.g. `periodic-notes:open-daily-note`), not a UUID; (2) entry must have `"mode": "any"`; (3) for Tab Bar buttons, Settings → Appearance → Show tab title bar must be ON. Toolbar (pageHeader) buttons work without the Appearance setting.

**Linter breaking Templater syntax**
Settings → Linter → General → Folders to Ig