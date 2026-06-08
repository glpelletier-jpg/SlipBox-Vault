---
doc_type: reference
purpose: "How Slip Box, Todoist, and Morgen work together as a single productivity system"
tags: [no-tasks]
updated: 2026-06-07
---

# Slip Box — Integrated Workflow

*Slip Box vault · Todoist · Morgen · Updated June 2026*

---

## System map — who owns what

Each tool has a clear lane. Overlap is where friction lives.

| Tool | Owns | Does not own |
|---|---|---|
| **Slip Box vault** | Daily intention, habit tracking, focus logging, vitals, quest management, weekly/monthly/quarterly reviews, knowledge and thinking (Zettelkasten) | Task management with reminders, scheduling, calendar events |
| **Todoist** | All actionable tasks — work and personal — with due dates; quick capture from anywhere; recurring tasks; reminders | Reflection, knowledge, long-form thinking |
| **Morgen** | All time-bound events; Todoist tasks + calendar in one view; time-blocking for focused work; the daily and weekly schedule view | Task management, reflection, note-taking |

### Morgen Tasks plugin — vault tasks in Morgen

The **Morgen Tasks plugin** (installed June 2026) syncs tasks written in vault notes directly into Morgen for time-blocking. Tasks in `02-Quests/`, `04-Daily-Notes/`, and `07-Work-Knowledge/Troubleshooting/` appear in Morgen's task panel with a `🆔` ID. Drag them onto your calendar to time-block. Completing a task in Morgen checks it off in the vault.

**What syncs to Morgen from the vault:**
- Quest milestone tasks in `02-Quests/`
- Daily note task lists in `04-Daily-Notes/`
- Troubleshooting action items in `07-Work-Knowledge/Troubleshooting/`
- MOC task items in `06-Zettelkasten/MOC/`

**What is excluded (does not sync):**
- `06-Zettelkasten/Fleeting`, `Literature`, `Permanent` — knowledge notes, not tasks
- `03-Reviews/` — review process checkboxes
- `05-Resources/` — reading list items
- `00-Home/` — dashboard views
- `_archive`, `_attachments`, `_docs`, `_reference`, `_scripts`, `_templates`

### Accessing your calendar from the vault

Press `Ctrl+Shift+K` to fetch this week's Google Calendar into `00-Home/Weekly Calendar.md`, or `Ctrl+Shift+J` for next week into `00-Home/Next Week Calendar.md`. Each event shows time, location 📍, attendees 👤, and description. Multi-day events appear on every day they span. Full details in Part 5b of the Master Guide.

### Todoist projects reference

| Project | What lives here |
|---|---|
| [Inbox](todoist://inbox) | Unprocessed captures — process to zero every Sunday |
| [Work](todoist://project?id=6gj9XJ56ccgp93vg) | Work Admin, Professional Development, OT System, Troubleshooting |
| [Personal](todoist://project?id=6gj9XJ2wWPr4vHxG) | House, Finances, Medical, Insurance, Pets, Travel, Admin |
| [LifeOS Learning](todoist://project?id=6gmgpP4Cp8R8wCGh) | System-building tasks — Life Compass, Quests setup, vault implementation |
| [Work Backlog](todoist://project?id=6gjPGQG8PWJhWRWh) | Work tasks not ready to action yet |
| [Personal Backlog](todoist://project?id=6gjPGJRHrMgcmRcM) | Personal tasks not ready to action yet |

### The connection points

```
Morgen ←→ Todoist
  Shows time-bound events + Todoist tasks in a single calendar view
  Time-block Todoist priorities directly in Morgen

Morgen Tasks plugin ←→ Slip Box vault
  Quest milestones and daily tasks in vault → appear in Morgen task panel
  Drag vault tasks onto Morgen calendar to time-block them
  Complete task in Morgen → checked off in vault automatically

Todoist ←→ Slip Box vault
  Todoist inbox captures → vault if insight, stay in Todoist if task
  Non-vault tasks (work admin, errands, calls) still live in Todoist only
  Weekly review quest progress → informs Todoist task rescheduling

Google Calendar ←→ Slip Box vault
  Ctrl+Shift+K / J → live Google Calendar view inside Obsidian
  Calendar shape → informs daily note focus_intention
  Next week's calendar → informs weekly review Section 7
```

### Capture routing

| Type of capture | Where it goes |
|---|---|
| Work task (admin, emails, calls) | Todoist → Work project (or Inbox on the go) |
| Personal task / errand | Todoist → Personal project (or Inbox) |
| Quest milestone or study task | Quest note: `- [ ] Action 📅 YYYY-MM-DD` → auto-appears in Morgen |
| Thought / insight | `Ctrl+Shift+C` → Obsidian daily capture (no context switch) |
| Fleeting idea needing its own note | `Ctrl+Shift+F` → Obsidian Fleeting folder |
| Meeting to schedule | Morgen / Google Calendar directly |

---

## Workday routine

### Morning (10 minutes)

#### Step 1 — Morgen (8 min)
Open Morgen. This is your single "what does today look like" view — it shows calendar events and Todoist tasks together, plus any vault quest tasks you've already time-blocked.

- What meetings or fixed commitments exist?
- What focus time is available?
- Are today's Todoist tasks realistic given the calendar shape?
- Process overnight Todoist inbox items (project + date, 2 min max each)
- Reschedule anything that won't happen today
- Identify 1–2 most important tasks and drag them onto the calendar to time-block

Daily Todoist goal: 5 tasks completed.

#### Step 2 — Obsidian daily note (5 min) — `Ctrl+D`
- **Today's focus** — one sentence in `focus_intention:` (Properties panel). Informed by what you saw in Morgen. This feeds the `daily-focus.base` and surfaces automatically in all reviews.
- **Quest habits** — which Health Reset habits will you actually do? Commit now.
- **Morning vitals** — BP, pulse, glucose, weight. 2 minutes.
- Scan the **Tasks** query — any vault tasks due today?

---

### During the day

**Capture immediately — route correctly:**
- Work or personal task (non-vault) → Todoist Inbox
- Thought or insight → `Ctrl+Shift+C` (appends to today's daily note without opening the vault)
- Idea needing its own note → `Ctrl+Shift+F` (new fleeting note)
- Quest milestone → add to quest note with due date; it will appear in Morgen automatically

**Log focus sessions in minutes:**
```
- [duration:: 90] OT System — Network documentation
- [duration:: 60] HAM Radio — G3 Operating Procedures study
- [duration:: 45] Deep work — Ohm's Law and circuit analysis
```
*Reference: 30 = 30 min · 60 = 1 hr · 90 = 1.5 hr · 120 = 2 hr*

**Task completion:**
- Todoist tasks → complete in Todoist or Morgen
- Quest tasks → check off in the quest note (or in Morgen — syncs back to vault)
- Habit checkboxes → check in the daily note as you complete them

---

### Evening (8 minutes)

#### Step 1 — Morgen (2 min)
Check tomorrow's calendar shape. Time-block focus time for tomorrow's priorities. Confirm Todoist tasks for tomorrow are realistic.

#### Step 2 — Todoist (3 min)
Reschedule undone non-vault tasks to a specific future date. Process inbox items (project + date). Confirm tomorrow's list is ready.

#### Step 3 — Obsidian daily note (3 min)
- **Steps** — end-of-day total from Samsung Health / Galaxy Watch
- **Energy** — rate today 1–5 in Properties (`energy:` field)
- **Focus total** — sum `[duration:: X]` entries; copy total to `focus_minutes:` frontmatter
- **End-of-day reflection** — one honest sentence in `end_of_day:` (Properties panel). The `daily-focus.base` pairs this with the morning intention — the gap between them is some of the most useful data in the vault over time.
- Check habit boxes done but not yet checked

---

## Weekend routine

### Saturday — light contact

**Morning (5 min):**
- `Ctrl+D` → daily note
  - Personal intention in `focus_intention:` — not a work frame
  - Quest habits checkboxes
  - Morning vitals

**During the day:**
- `Ctrl+Shift+C` for any captures — processed Sunday
- Todoist Inbox only — no processing

**Off-limits Saturday:**
- No Work project review
- No inbox processing
- No planning for next week

---

### Sunday — full weekly reset (~45 min)

Order matters. Do these in sequence.

#### Part 1 — Todoist (8 min) — before opening the vault
- Inbox to zero — every item gets a project and a date. Delete what won't be done.
- Overdue review — reschedule or delete. No task stays overdue more than one week.
- Next week's task list — confirm 5–7 most important non-vault tasks across Work and Personal have due dates.
- Backlog check — anything ready to move from backlog to active?
- Weekly Todoist goal is 30 tasks — is next week set up to hit that?

> **Note:** Quest milestone tasks no longer need to be duplicated into Todoist. They live in vault quest notes and sync to Morgen automatically via the Morgen Tasks plugin.

#### Part 2 — Morgen (5 min)
- Open Morgen and review next week's calendar
- Drag vault quest tasks from the Morgen task panel onto next week's calendar to time-block them
- Time-block the Todoist priorities you identified in Part 1
- Resolve conflicts between meetings and planned focus time now, not Monday morning
- You can also fetch [Next Week Calendar](obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3Achoice%3A35b1ab86-bddf-46a1-a583-094c3af0ad6c) in the vault (`Ctrl+Shift+J`) for a vault-side reference view

#### Part 3 — Obsidian weekly review — `Ctrl+Shift+W` (25 min)

**Section 1 — Clear the decks:** The Todoist + Morgen work just done counts. Check those boxes.

**Section 2 — Life area check-in:** Rate 6 areas 1–5. The vitals Dataview table auto-shows this week's health data. Copy overall rating to `rating:` frontmatter.

**Section 3 — Focus hours:** Fully automatic from daily note `focus_minutes:` values. The Dataview table shows each day. The DataviewJS block totals them, shows a `▓▓▓░░` progress bar against 1,200 min target, and tells you what to copy to frontmatter.

**Section 4 — Three wins:** The `daily-focus.base` on "Last 7 days" view shows your morning intentions — use them to pull wins.

**Section 5 — Quest progress:** Dataview shows active quests. Update `progress:` in quest notes after this review. For Health Reset: how many days were all 3 habits hit?

**Section 6 — Reflection prompts:** Answer 2–3 honestly.

**Section 7 — Next week intention:** One sentence + 3 priorities + one quest milestone. Informed by the Morgen time-blocking you did in Part 2.

**Section 8 — Zettelkasten processing:**
- 8a: Dataview surfaces the 5 oldest fleeting notes. Decide each: promote / archive / delete.
- 8b: Shows permanent notes written this week. If empty — write one now.
- 8c: DataviewJS inbox health — escalates target if backlog is growing.

#### Part 4 — Quest milestone review (2 min)
Review active quest notes. Add any new milestone tasks with due dates — they will appear in Morgen automatically. No Todoist duplication needed for quest tasks.

---

## Quarterly rhythm (~2–3 hours, end of quarter)

**Step 1 — Todoist (30 min):**
Archive completed tasks. Review both backlogs. Mark LifeOS Learning sections complete if now living in the vault.

**Step 2 — Morgen (15 min):**
Block dates for next quarter: Quarterly Review, Quarterly Planning, monthly reviews.

**Step 3 — Obsidian Quarterly Review (60–90 min):**
Dashboard → New quarterly review. 14 sections. Run the quarterly audit in Vault State.

**Step 4 — Obsidian Quarterly Planning (30 min):**
Design next quarter's quests (1–3 max). For each quest's key milestones, add a dated task in the quest note — it will flow to Morgen automatically.

---

## Notes on the LifeOS Learning project

The LifeOS Learning project in Todoist is a build checklist — it tracks the work of setting up the system. As the vault matures:

- Life Compass → completed when `01-Vision/life-compass.md` is filled in
- The Future Sketch → completed when `01-Vision/future-vision.md` is complete
- Quarterly Quests → completed when the first full quest quarter runs
- Balanced Weeks → completed when weekly review habit is established (target: 8 consecutive Sundays)

When a section is done, mark it complete in Todoist. Eventually this project winds down and the vault fully replaces it as the living system.

---

## Hotkey and link reference

### Vault hotkeys

| Action | Hotkey |
|---|---|
| Open today's daily note | `Ctrl+D` |
| Open weekly review | `Ctrl+Shift+W` |
| Open dashboard | `Ctrl+H` |
| New fleeting note | `Ctrl+Shift+F` |
| Add to daily capture | `Ctrl+Shift+C` |
| New permanent note | `Ctrl+Shift+P` |
| Fetch weekly calendar | `Ctrl+Shift+K` |
| Fetch next week calendar | `Ctrl+Shift+J` |

### Todoist quick links

| Destination | Link |
|---|---|
| Today view | [todoist://today](todoist://today) |
| Inbox | [todoist://inbox](todoist://inbox) |
| Work project | [todoist://project?id=6gj9XJ56ccgp93vg](todoist://project?id=6gj9XJ56ccgp93vg) |
| Personal project | [todoist://project?id=6gj9XJ2wWPr4vHxG](todoist://project?id=6gj9XJ2wWPr4vHxG) |
| LifeOS Learning | [todoist://project?id=6gmgpP4Cp8R8wCGh](todoist://project?id=6gmgpP4Cp8R8wCGh) |

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Slip Box Master Guide|Master Guide]] | [[_docs/Vault State - June 2026|Vault State]]
