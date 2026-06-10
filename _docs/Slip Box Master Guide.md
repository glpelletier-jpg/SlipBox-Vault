---
tags: [no-tasks]
updated: 2026-06-08
---

# Slip Box — Master Guide

*Use, Maintenance & Troubleshooting · Updated June 8, 2026*

---

## Table of Contents

- [[#Part 1 What this vault is|Part 1: What this vault is]]
  - [[#The five core questions]]
- [[#Part 2 Vault structure|Part 2: Vault structure]]
  - [[#Files in 00-Home]]
  - [[#Files in _docs]]
- [[#Part 3 Three-tool system|Part 3: Three-tool system]]
  - [[#Connection points]]
  - [[#Todoist quick links]]
  - [[#Capture routing]]
  - [[#Calendar scripts]]
- [[#Part 4 Plugin reference|Part 4: Plugin reference]]
  - [[#Community plugins 15 installed|Community plugins]]
  - [[#Core plugins must stay enabled|Core plugins]]
- [[#Part 5 Hotkey reference|Part 5: Hotkey reference]]
- [[#Part 6 Daily workflow|Part 6: Daily workflow]]
  - [[#Morning 15 minutes|Morning (15 min)]]
  - [[#Logging focus sessions]]
  - [[#End of day 8 minutes|End of day (8 min)]]
- [[#Part 7 Weekly workflow — Sunday ~50 minutes|Part 7: Weekly workflow]]
- [[#Part 8 Monthly workflow — end of month ~30–45 min|Part 8: Monthly workflow]]
- [[#Part 9 Quarterly workflow — end of quarter ~2–3 hours|Part 9: Quarterly workflow]]
- [[#Part 10 Quests|Part 10: Quests]]
- [[#Part 11 Vision documents|Part 11: Vision documents]]
- [[#Part 12 Zettelkasten — the thinking layer|Part 12: Zettelkasten]]
  - [[#The four note types]]
  - [[#Zettelkasten processing workflow]]
- [[#Part 13 Work Knowledge base|Part 13: Work Knowledge base]]
- [[#Part 14 Template reference|Part 14: Template reference]]
- [[#Part 15 Vault maintenance routines|Part 15: Vault maintenance routines]]
- [[#Part 16 Attachment system|Part 16: Attachment system]]
- [[#Part 17 Dataview and Bases troubleshooting|Part 17: Dataview & Bases troubleshooting]]
- [[#Part 18 Plugin troubleshooting|Part 18: Plugin troubleshooting]]
- [[#Part 19 Git backup|Part 19: Git backup]]

---

## Part 1: What this vault is

The Slip Box is a personal operating system built around three tools — **Obsidian** (knowledge, reflection, reviews), **Todoist** (task management), and **Morgen Calendar** (scheduling). Each tool has a distinct lane; overlap is where friction comes from.

| Tool | Owns | Does not own |
|---|---|---|
| **Slip Box vault** | Daily intention, habit tracking, focus logging, vitals, quest management, weekly/monthly/quarterly reviews, knowledge and thinking (Zettelkasten) | Task management with reminders, scheduling, calendar events |
| **Todoist** | All actionable tasks — work and personal — with due dates; quick capture from anywhere; recurring tasks; reminders | Reflection, knowledge, long-form thinking |
| **Morgen Calendar** | All time-bound events; time-blocking for focused work; the daily and weekly schedule view | Task management, reflection, note-taking |

The vault is the anchor — open it every day. Morning order: **Morgen → Todoist → Obsidian**. Never reversed — checking the vault before looking at the calendar produces intentions that ignore reality.

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
Slip Box/                         ~460 notes · as of June 8, 2026
├── .obsidian/                  Obsidian configuration — do not edit manually
├── _attachments/               PDFs and binary files — drag-and-drop saves here automatically
│   ├── Attachment Catalog.md   Master index — add a row every time you add a file
│   └── Work/Automation/        10 Rockwell PDF manuals with companion notes
├── _archive/                   Completed/outdated material
│   ├── Fleeting/               Processed fleeting notes tagged `processed`
│   ├── Daily-Notes/            Daily notes older than 90 days (batch-move quarterly)
│   └── Quests/                 Completed or abandoned quests
├── _docs/                      System documentation — click folder to open navigation hub
│   ├── _docs.md                Navigation hub — start here for any system question
│   ├── Slip Box Master Guide.md          (this document)
│   ├── Getting Started - First 30 Days.md
│   ├── Vault State - June 2026.md
│   ├── Vault Backup System.md
│   ├── Commander — Quick Reference.md
│   ├── Bulk Import Work Reference PDFs.md
│   ├── Life Compass — Complete Procedure.md
│   ├── Zettelkasten — Complete Procedure.md
│   ├── Vault Systems — Complete Procedure.md
│   └── Evaluations/            Audit history — 14 evaluations (May–June 2026)
├── _reference/                 Reference material — looked up, not Zettelkasten-processed
│   ├── Personal/               DMV, insurance, vehicle, home hunting (10 notes)
│   └── Work/                   Process docs, SOPs
├── _scripts/                   QuickAdd macros + Templater scripts
│   ├── weekly-calendar.js      Fetches Google Calendar ICS → Weekly Calendar.md (Ctrl+Shift+K)
│   ├── next-week-calendar.js   Fetches next week ICS → Next Week Calendar.md (Ctrl+Shift+J)
│   ├── daily-schedule.js       Templater user script — populates today's schedule in daily notes
│   └── vault-backup.bat        Git commit + push to GitHub (run manually or via Task Scheduler)
├── _templates/                 18 note templates — do not write notes here
├── 00-Home/                    Dashboard and base views only
├── 01-Vision/                  Life Compass and Future Vision
├── 02-Quests/                  Active quests — Health Reset Q3 + New Role Integration Q3
├── 03-Reviews/
│   ├── Weekly/                 W20–W23 (2026) — auto-created via Periodic Notes (Ctrl+Shift+W)
│   ├── Monthly/                May 2026, June 2026
│   └── Quarterly/              Q2 2026 review
├── 04-Daily-Notes/             May 21 – Jun 8, 2026 · schedule auto-populates on creation
├── 05-Resources/
│   ├── Articles/               Articles to read / reading / done
│   ├── Books/                  32 book notes — reading tracker, linked to Literature notes
│   ├── Courses/
│   │   ├── HAM-Radio/          General License study system — started Jun 8, 2026
│   │   ├── GPS-Tracker-Project/ Paul McWhorter Raspberry Pi series
│   │   └── MIT-CS/             MIT OpenCourseWare notes
│   └── Ideas/                  Project-shaped sparks; pipeline to quests
├── 06-Zettelkasten/
│   ├── Fleeting/               ~150 notes — processing queue active (10/week target)
│   ├── Literature/             49 notes — includes 11 IA/OT reference stubs (June 2026)
│   ├── Permanent/              28 notes — 6 original + 22 IA/OT domain stubs (June 2026)
│   └── MOC/                    4 Maps of Content:
│                               · Automation Engineering MOC
│                               · HAM Radio MOC
│                               · PKM and Zettelkasten MOC
│                               · Personal Growth MOC
│                               · MOC — Instrumentation
│                               · MOC — OT Networking
│                               · MOC — PLC Architecture
│                               · MOC — Process Safety (IEC 61511)
└── 07-Work-Knowledge/          38 notes — professional knowledge + CAP prep
    ├── Automation/             12 notes — full electrical fundamentals sequence
    ├── Networking/             9 notes — OT/IT, Windows Server, Linux, AWS
    ├── Processes/              10 notes — pharma manufacturing, SOPs, documentation
    ├── Troubleshooting/        2 notes
    └── CAP-Certification/      2 notes — domain breakdown and study timeline
```

### Files in 00-Home

`00-Home` is **operational only** — the dashboard and its base views. All system documentation lives in `_docs/`.

| File | Purpose |
|---|---|
| `00-Home.md` | The dashboard — open this every day |
| `quests.base` | Powers the Active Quests section |
| `focus-log.base` | Powers the Focus log chart |
| `reading-list.base` | Powers the Currently Reading section |
| `zettelkasten.base` | Powers the Recent Permanent Notes section |
| `daily-focus.base` | Morning intention vs. end-of-day tracker |
| `vitals.base` | Powers the Vitals Tracker |
| `weekly-reviews.base` | Powers the Recent Weekly Reviews section |
| `monthly-reviews.base` | Powers the Recent Monthly Reviews section |
| `quarterly-reviews.base` | Powers the Recent Quarterly Reviews section |
| `Weekly Calendar.md` | Generated by `Ctrl+Shift+K` — current week from Google Calendar |
| `Next Week Calendar.md` | Generated by `Ctrl+Shift+J` — next week from Google Calendar |

### Files in _docs

| File | Purpose |
|---|---|
| `_docs.md` | Navigation hub — single entry point for all system documentation |
| `Slip Box Master Guide.md` | This document — full reference |
| `Getting Started - First 30 Days.md` | Onboarding checklist |
| `Vault State - June 2026.md` | Monthly health check + quarterly audit queries — **run this monthly** |
| `Vault Backup System.md` | Backup architecture, setup, and restore procedures |
| `Commander — Quick Reference.md` | Toolbar/Ribbon/Tab Bar button reference + troubleshooting |
| `Bulk Import Work Reference PDFs.md` | Procedure for bulk-importing vendor PDFs |
| `Life Compass — Complete Procedure.md` | Step-by-step guide: values, roles, energy audit, quarterly review |
| `Zettelkasten — Complete Procedure.md` | Step-by-step guide: all 4 note types, processing, linking, MOCs |
| `Vault Systems — Complete Procedure.md` | Step-by-step guide: daily notes, vitals, reviews, quests, backup |
| `Evaluations/` | Audit history — 14 evaluations (May–June 2026) |

---

## Part 3: Three-tool system

### What each tool owns

| Tool | Owns | Does not own |
|---|---|---|
| **Slip Box vault** | Intention, reflection, quests, reviews, knowledge, vitals, Zettelkasten | Task reminders, scheduling, calendar events |
| **Todoist** | All actionable tasks with due dates; recurring tasks; inbox capture | Reflection, knowledge, long-form thinking |
| **Morgen Calendar** | Time-bound events; time-blocking; the daily schedule view | Task management, reflection, note-taking |

### Connection points

```
Morgen Calendar ←→ Todoist
  Shows time-bound events + Todoist tasks together
  Time-block Todoist priorities in Morgen

Todoist ←→ Slip Box vault
  Quest milestones → Todoist tasks with due dates
  Todoist inbox captures → vault if insight, stay in Todoist if task
  Weekly review quest progress → informs Todoist task rescheduling

Morgen Calendar ←→ Slip Box vault
  Ctrl+Shift+K / J → live Google Calendar view inside Obsidian
  Calendar shape → informs daily note focus_intention
  Next week's calendar → informs weekly review Section 7
```

### Todoist quick links

| Project | What lives here | Link |
|---|---|---|
| Inbox | Unprocessed captures — process to zero every Sunday | [todoist://inbox](todoist://inbox) |
| Work | Work Admin, Professional Development, OT System, Troubleshooting | [todoist://project?id=6gj9XJ56ccgp93vg](todoist://project?id=6gj9XJ56ccgp93vg) |
| Personal | House, Finances, Medical, Insurance, Pets, Travel, Admin | [todoist://project?id=6gj9XJ2wWPr4vHxG](todoist://project?id=6gj9XJ2wWPr4vHxG) |
| LifeOS Learning | System-building tasks — Life Compass, Quests setup, vault work | [todoist://project?id=6gmgpP4Cp8R8wCGh](todoist://project?id=6gmgpP4Cp8R8wCGh) |
| Work Backlog | Work tasks not ready to action yet | [todoist://project?id=6gjPGQG8PWJhWRWh](todoist://project?id=6gjPGQG8PWJhWRWh) |
| Personal Backlog | Personal tasks not ready to action yet | [todoist://project?id=6gjPGJRHrMgcmRcM](todoist://project?id=6gjPGJRHrMgcmRcM) |

### Capture routing

| Type | Where it goes |
|---|---|
| Work task | Todoist → Work project (or Inbox on the go) |
| Personal task / errand | Todoist → Personal project (or Inbox) |
| Thought / insight | `Ctrl+Shift+C` → Obsidian daily capture (no context switch) |
| Fleeting idea needing its own note | `Ctrl+Shift+F` → Obsidian Fleeting folder |
| Quest-related action | Quest note: `- [ ] Action 📅 YYYY-MM-DD` |
| Meeting to schedule | Morgen Calendar directly |

### Calendar scripts

All three calendar scripts share the same Google Calendar ICS URL stored in QuickAdd settings (Settings → QuickAdd → Manage Macros → ⚙️ → `ics_url` field).

| Script | Trigger | Writes to |
|---|---|---|
| `_scripts/weekly-calendar.js` | `Ctrl+Shift+K` | `00-Home/Weekly Calendar.md` |
| `_scripts/next-week-calendar.js` | `Ctrl+Shift+J` | `00-Home/Next Week Calendar.md` |
| `_scripts/daily-schedule.js` | Templater (auto on daily note creation) | `### 📅 Today's schedule` section |

If the schedule section shows `⚠️ No calendar ICS URL found`, open QuickAdd → Manage Macros → Weekly Calendar → ⚙️ and verify the `ics_url` field is populated.

---

## Part 4: Plugin reference

### Community plugins (15 installed)

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
| **Linter** | Auto-normalizes frontmatter on save (templates folder excluded; `force-yaml-escape: OFF`) |
| **Note Refactor** | Extract selected text to a new note |
| **Heatmap Calendar** | Focus time streak visualization on dashboard |
| **Minimal Theme Settings** | Controls for Minimal theme appearance |

### Core plugins (must stay enabled)

| Plugin | Role |
|---|---|
| **Bases** | Powers all `.base` embedded views throughout the vault |
| **Graph** | Visualizes connections between notes |
| **Backlinks** | Shows what links to the current note |
| **Properties** | Renders frontmatter as a structured panel |
| **Search** | Full-text search across the vault |

---

## Part 5: Hotkey reference

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

---

## Part 6: Daily workflow

The morning sequence runs across three tools in a fixed order. Don't reverse it.

### Morning (15 minutes)

**Step 1 — Morgen Calendar (3 min)**
Open Morgen or press `Ctrl+Shift+K` to pull this week's calendar into the vault. See today's shape — meetings, blocks, real available time — before touching Todoist or the vault.

**Step 2 — Todoist Today view (5 min)** — [todoist://today](todoist://today)
With the calendar shape visible: are today's tasks realistic? Process overnight inbox. Reschedule anything that won't happen. Identify your 1–2 most important tasks. Daily goal: 5 completed tasks.

**Step 3 — Obsidian daily note (5 min)** — `Ctrl+D`
- **Today's schedule** — auto-populates from Google Calendar on note creation
- **Today's focus** — one sentence in `focus_intention:` (Properties panel)
- **Quest habits** — which Health Reset habits will you do today? Commit now
- **Morning vitals** — BP, pulse, glucose, weight
- Scan the **Tasks** query — vault tasks due today?

**Step 4 — Morgen time-block (2 min)** — block protected focus time now.

### Logging focus sessions

In the Focus Log section of the daily note, log in **minutes**:
```
- [duration:: 90] OT System — network documentation
- [duration:: 45] HAM Radio study — G1 Commission's Rules
```
The `Total today:` line sums automatically. Copy the total to `focus_minutes:` in frontmatter at end of day.

*Quick reference: 30 min = 30 · 1 hr = 60 · 90 min = 90 · 2 hr = 120*

### End of day (8 minutes)

1. **Morgen (2 min):** Check tomorrow's calendar. Create focus blocks for tomorrow's priorities.
2. **Todoist (3 min):** Reschedule undone tasks. Process inbox. Confirm tomorrow's list.
3. **Obsidian daily note (3 min):**
   - Enter steps, weight, energy (1–5) in Properties
   - Sum focus sessions → copy total to `focus_minutes:` frontmatter
   - Write one sentence in `end_of_day:` — what actually happened?
   - Check any habit boxes done but not yet checked

---

## Part 7: Weekly workflow — Sunday (~50 minutes)

Do Todoist and Morgen **before** opening the vault.

### Step 1 — Todoist (10 min)
Inbox to zero. Overdue review — no task stays overdue more than one week. Confirm next week's top 5–7 tasks have due dates. Check backlogs.

### Step 2 — Morgen Calendar (5 min)
Open `Ctrl+Shift+J` to pull next week's calendar. Time-block the Todoist priorities. Resolve conflicts now.

### Step 3 — Obsidian weekly review (25 min) — `Ctrl+Shift+W`

**Section 1 — Clear the decks:** The Todoist + Morgen work just done counts here.

**Section 2 — Life area check-in:** Rate 6 areas 1–5. Vitals Dataview table auto-shows this week's health data. Copy overall rating to `rating:` frontmatter.

**Section 3 — Focus hours:** Fully automatic. Dataview pulls `focus_minutes` from each daily note. DataviewJS totals them, shows a progress bar against the 1,200 min target, and prompts you to copy the total to `focus_minutes:` frontmatter.

**Section 4 — Three wins:** Open `daily-focus.base` on "Last 7 days" view — morning intentions are there to jog memory.

**Section 5 — Quest progress:** Dataview shows active quests. Update `progress:` in any quest where milestones completed.

**Section 6 — Reflection prompts:** Answer 2–3 honestly. No editing.

**Section 7 — Next week intention:** One sentence + 3 specific priorities + one quest milestone.

**Section 8 — Zettelkasten processing:**
- **8a:** Dataview surfaces the 5 oldest fleeting notes. Process each: promote / archive / delete.
- **8b:** Shows permanent notes written this week. If empty — write one before closing.
- **8c:** DataviewJS inbox health with status indicator that escalates target if backlog grows.

### Step 4 — Quest–Todoist sync (5 min)
Any completed or upcoming quest milestones → create corresponding Todoist task with due date.
- Health Reset → [Personal project](todoist://project?id=6gj9XJ2wWPr4vHxG)
- Work quest → [Work project](todoist://project?id=6gj9XJ56ccgp93vg)

---

## Part 8: Monthly workflow — end of month (~30–45 min)

Dashboard → New monthly review. Read back through the month's weekly reviews first.

Fill `focus_minutes_total` and `rating` frontmatter from the metrics table. Note *direction of travel* per life area — trend matters more than the number. Run the **Monthly health check** section in `_docs/Vault State - June 2026.md`.

---

## Part 9: Quarterly workflow — end of quarter (~2–3 hours)

The most important review in the system. Do not rush it.

**Step 1 — Todoist (30 min):** Archive completed tasks. Review backlogs. Mark LifeOS Learning sections complete if now living in the vault.

**Step 2 — Morgen Calendar (15 min):** Block dates for next quarter: Quarterly Review, Quarterly Planning, monthly reviews.

**Step 3 — Obsidian Quarterly Review (60–90 min):** Dashboard → New quarterly review. Read back through all weekly reviews, monthly reviews, every quest note, and Life Compass + Future Vision. 14 sections: quest retrospective, life area deep-dive, ten wins, values and identity check, vision check, learning summary. Run the quarterly audit queries in `_docs/Vault State - June 2026.md`.

**Step 4 — Quarterly Planning (30 min):** Design next quarter's quests (1–3 max). For each quest's key milestones, create a Todoist task with the quarter's end date as a soft deadline.

---

## Part 10: Quests

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

## Part 11: Vision documents

**Life Compass** (`01-Vision/life-compass.md`) — Core values (3–5, personally defined), life roles with "showing up well" descriptions, and energy audit (1–5 per area). Fill this before creating any quests. Every quest should connect to it in one sentence. Review and update at each quarterly review.

**Future Vision** (`01-Vision/future-vision.md`) — 1-year, 3-year, 10-year vision written in past or present tense ("I have built..."), not "I want to...". Read before every quarterly planning session.

---

## Part 12: Zettelkasten — the thinking layer

### The four note types

**Fleeting notes** (`06-Zettelkasten/Fleeting/`) — Quick captures. Process or delete within 48 hours. These are an inbox, not storage. **Current backlog: ~150 notes. Target: process 10 per weekly review until below 50.**

**Literature notes** (`06-Zettelkasten/Literature/`) — One note per source, everything in your own words. 49 notes as of June 2026: 38 original + 11 IA/OT reference stubs (IEC 61511-1, NIST 800-82, Studio 5000 manual, etc.). Each book note in `05-Resources/Books/` links to its counterpart here via `literature_note:` frontmatter.

**Permanent notes** (`06-Zettelkasten/Permanent/`) — The core of the system. One atomic idea per note. Title must be a complete claim. 28 notes as of June 2026: 6 original cross-domain notes + 22 IA/OT domain stubs across instrumentation, PLC architecture, OT networking, and process safety. Stubs have empty body sections — fill one per week from the claim in the frontmatter.

Rules: self-contained, your words, linked (≥ 2 outbound links), one idea. **Target: 1 new completed note per week.**

**Maps of Content** (`06-Zettelkasten/MOC/`) — Navigation notes created reactively when a cluster gets large. Current MOCs: Automation Engineering, HAM Radio, PKM & Zettelkasten, Personal Growth, Instrumentation, OT Networking, PLC Architecture, Process Safety (IEC 61511).

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

The **Weekly Review Section 8** is the dedicated processing slot. The Dataview queue surfaces the 5 oldest fleeting notes automatically.

---

## Part 13: Work Knowledge base

`07-Work-Knowledge/` is the professional reference layer — 38 notes across 5 subfolders.

### Electrical fundamentals sequence (Automation subfolder)

1. [[07-Work-Knowledge/Automation/Basic Direct Current (DC) Theory - Overview|① DC Theory Overview]]
2. [[07-Work-Knowledge/Automation/Basics of Electrical Current|② Basics of Electrical Current]]
3. [[07-Work-Knowledge/Automation/Electrical Resistance and Ohm's Law|③ Electrical Resistance & Ohm's Law]]
4. [[07-Work-Knowledge/Automation/What is Electrical Power|④ Electrical Power]]
5. [[07-Work-Knowledge/Automation/Electrical Sources and Electronic Load|⑤ Sources and Loads]]

These fundamentals apply directly to **CAP exam Domains 1 & 3** and the **HAM General License G5 sub-element**. The HAM Radio MOC notes the crossover explicitly.

### CAP Certification prep

`07-Work-Knowledge/CAP-Certification/` has the domain breakdown and study timeline. Target: Q3 2027. Notes tagged `CAP-prep` are queryable via the quarterly audit in Vault State.

### HAM Radio study

`05-Resources/Courses/HAM-Radio/` — General License study system. Started June 8, 2026 with G1 Commission's Rules. Week-by-week syllabus with HamStudy.org integration.

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
| Automation Lit Note | `06-Zettelkasten/Literature/` | `type: literature`, `vendor`, `source_type`, `standard_ref` |
| Permanent Note | `06-Zettelkasten/Permanent/` | `type: permanent` — rename immediately to claim title |
| Automation PN | `06-Zettelkasten/Permanent/` | `type: permanent`, `maturity`, `domain: ia-ot`, `subdomain`, `moc` |
| MOC | `06-Zettelkasten/MOC/` | `type: moc` |
| Attachment Note | Manual | `type: attachment`, `tags`, `source_doc` |

**Frontmatter quoting:** `focus_minutes:` and `steps:` must be bare integers, not quoted strings. `force-yaml-escape` is disabled in Linter to prevent this.

---

## Part 15: Vault maintenance routines

### Weekly (Sunday, during review — Section 8)
- [ ] Process 5–10 oldest fleeting notes (Dataview queue in Section 8a)
- [ ] Write ≥ 1 permanent note or fill ≥ 1 PN stub (Section 8b)
- [ ] Verify permanent notes created this week have ≥ 2 outbound links
- [ ] Update `progress:` in any quest where milestones completed
- [ ] Fill `rating:` and `focus_minutes:` in this week's review frontmatter

### Monthly (first Sunday of each month — Vault State note)
Open `_docs/Vault State - June 2026.md` and run the monthly health check:
- [ ] **Orphan detector** — notes with zero backlinks. Link, move to `_reference/`, or delete.
- [ ] **Fleeting inbox trend** — count with status indicator. Adjust weekly target if above 80.
- [ ] **Permanent notes created this month** — check link health (≥ 2 outlinks, ≥ 1 inlink).
- [ ] **MOC freshness** — any MOC not updated in 30+ days? Review and update.
- [ ] Verify all weekly reviews have `rating:` and `focus_minutes:` filled.
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
- [ ] Archive completed quests, daily notes, and old reviews by year
- [ ] Open "All time" view in `vitals.base` — export for annual health checkup
- [ ] Review all MOCs for accuracy; prune stale links
- [ ] Prune reading list of books you've decided not to read

---

## Part 16: Attachment system

`_attachments/` holds all binary files. The Attachment Catalog (`_attachments/Attachment Catalog.md`) tracks every file with a companion note.

**Adding a new attachment:**
1. Drag the file into Obsidian — it saves to `_attachments/` automatically
2. Create a companion note using the Attachment Note Template
3. Add a row to `_attachments/Attachment Catalog.md`

---

## Part 17: Dataview and Bases troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Base shows empty table | Notes don't match filter (wrong `status` or `type`) | Check frontmatter spelling; run Linter |
| Dataview shows nothing | `type:` typo or notes in wrong folder | Check frontmatter; run `Dataview: Rebuild index` |
| Focus hours Section 3 blank | `focus_minutes:` not filled in daily note frontmatter | Copy session total from focus log into frontmatter |
| Focus bar shows 0% | Same as above — DataviewJS reads `focus_minutes` field | Enter total minutes in Properties panel |
| Vitals base shows nothing | Linter quoted numbers (`"2724"` not `2724`) | Settings → Linter → YAML Rules → Force YAML Escape → **OFF** |
| Vitals averages tables empty | `bp_systolic > 0` filter — no BP readings yet | Add one BP reading, or filter on a field you do track |
| Permanent notes missing from index | Missing `type: permanent` or note in wrong folder | Check Properties panel; confirm folder is `06-Zettelkasten/Permanent/` |
| Base shows raw YAML | Bases core plugin disabled | Settings → Core plugins → Bases → ON |
| Reviews not in dashboard bases | Wrong `type:` value | Must be `weekly-review`, `monthly-review`, or `quarterly-review` exactly |

---

## Part 18: Plugin troubleshooting

**Templates not firing on new note creation**
Settings → Templater → confirm "Trigger Templater on new file creation" is ON. Verify folder templates show all 12 assignments. Template file must be in `_templates/` exactly.

**Periodic notes not creating**

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
Three requirements must all be true: (1) `id` field must be the Obsidian command ID (e.g. `periodic-notes:open-daily-note`), not a UUID; (2) entry must have `"mode": "any"`; (3) for Tab Bar buttons, Settings → Appearance → Show tab title bar must be ON. See `_docs/Commander — Quick Reference.md` for full details and the correct JSON format.

**Linter breaking frontmatter numbers**
Settings → Linter → General → Folders to Ignore → add `_templates`. Also ensure Force YAML Escape is **OFF**.

**Heatmap Calendar shows nothing**
`focus_minutes:` must be a bare number > 0 in at least one daily note frontmatter.

---

## Part 19: Git backup

**Remote:** `https://github.com/glpelletier-jpg/slip-box-vault.git` · Branch: `master`

**Manual backup:** Run `_scripts/vault-backup.bat` (double-click in File Explorer or run from PowerShell). Commits with a timestamp and pushes to GitHub. Log saved to `C:\Vault\backup-log.txt`.

**Scheduled backup:** Windows Task Scheduler runs the script hourly. See `_docs/Vault Backup System.md` for full setup instructions, OneDrive sync configuration, and recovery procedures.

**Quick recovery:**
| Scenario | Tool |
|---|---|
| Deleted a note today | `Ctrl+P` → "File recovery: Open file recovery" |
| Deleted within 7 days | Obsidian File Recovery core plugin |
| Any historical version | GitHub → browse file history |
| Full vault restore | `git clone https://github.com/glpelletier-jpg/slip-box-vault.git "C:\Vault\Slip Box"` |

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Vault State - June 2026|Vault State]] | [[_docs/Commander — Quick Reference|Commander]] | [[_docs/Getting Started - First 30 Days|Getting Started]]
