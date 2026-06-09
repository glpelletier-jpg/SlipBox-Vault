---
doc_type: state
purpose: "Living snapshot — current stats, active work, what needs attention, bugs fixed"
tags: [vault-meta, state]
date: 2026-06-07
vault_version: 1.4.0
---

# Vault State — June 2026

> Living snapshot. Update "what needs attention" after each weekly review.

---

## Stats (June 8, 2026)

| Area | Count | Notes |
|---|---|---|
| Total notes | ~435 | All folders |
| Daily notes | 19 | May 21 – Jun 7 · all filled |
| Focus minutes logged | All 18 | Strong habit — vitals + energy filled every day |
| Weekly reviews | 5 | W20–W23 filled · W24 current week |
| Monthly reviews | 2 | May (partial) · June (blank — fill at month end) |
| Active quests | 2 | Health Reset (20%) · New Role Integration (10%) |
| Life Compass | ✅ Complete | All values, roles, energy audit filled |
| Literature notes | 46 | 70+ permanent note claims ready in processing guide |
| Permanent notes | 6 | All claim-based kebab-case titles ✅ |
| MOCs | 4 | Automation · PKM · Personal Growth · HAM Radio |
| Fleeting notes | 136 | 🔴 Backlog — triage script ready (`_scripts/fleeting-triage.js`), target <50 |
| Work Knowledge | 39 notes | 5 subfolders populated |
| Attachments | 17 companion notes | Rockwell PDFs + HAM Radio resources |
| Git backup | ✅ Active | Remote: github.com/glpelletier-jpg/slip-box-vault · uncommitted changes |
| Community plugins | 15 | All enabled · Commander ribbon/toolbar redesigned Jun 7 |
| Morgen Tasks | ✅ Configured | morgen-config.json updated Jun 7 — ignoreDirectories set, isDoneDateEnabled: true |
| reMarkable Sync | ⚠️ Non-functional | Plugin broken — awaiting developer update. Manual PDF export in use. |
| Commander | ✅ Configured | Ribbon: Home · Today · This Week · Search · Switcher · Toolbar: Back · Forward · Home · Today · Graph · Palette |
| Dashboard | ✅ Live | Base file transclusions — quests, vitals, focus, Zettelkasten, courses, reviews |
| Scripts | 6 | weekly-cal · next-week-cal · daily-schedule · vault-backup · create-course · **fleeting-triage** |
| Templates | 30 | Daily Note · Weekly Review · Permanent Note · Troubleshooting Log · 6 course templates · 3 Plan vs. Actual · **Workout Log** · etc. |
| Plan vs. Actual notes | 0 | Folder ready at `03-Reviews/Plan-Actual/` · templates wired · base file live on dashboard |
| Courses | 1 active | HAM Radio — full 5-file structure (Overview, Syllabus, Resources, Progress, Reference) |
| Procedures | 5 | Life Compass · Zettelkasten · Vault Systems · Reviews & Planning · reMarkable Integration |
| Base files | 11 | 10 in 00-Home/ + docs.base in _docs/ · vitals.base updated with energy_score field |
| Docs index | ✅ Live | `_docs/_docs.md` MOC + `_docs/docs.base` — all docs categorised with doc_type + purpose |
| Workout log | ✅ Ready | `03-Reviews/Workouts/` + Workout Log Template · Templater auto-applies (15 folder templates) |
| Field Notes | ✅ Live | `_reference/Work/Field Notes.md` — Todoist→vault capture landing; processed each Sunday via Section 9b |
| Body Comp Log | ✅ Live | `_reference/Personal/Body Composition Log.md` — weekly BIA scan tracking |

---

## What's active right now

### Quests
- [[02-Quests/Health-Reset-Q3-2026|Health Reset Q3]] — 20% · 3 daily habits active · tracking in daily notes
- [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Q3]] — 10% · Learning systems · Gary Tebow transitioned out Jun 5 — Guy is now primary automation engineer

### Study — Week 1 starts June 8
- **HAM Radio General License** — Week 1: G1 Commission's Rules
- Open [[05-Resources/Courses/HAM-Radio/General License Syllabus|General License Syllabus]] Sunday and check off first session

### Permanent notes target
- Current: 6 · Target by June end: 10
- Next: use [[06-Zettelkasten/Literature Processing Guide|Literature Processing Guide]] Tier 1 claims (Feel Good Productivity, Deep Work, Stolen Focus, Atomic Habits)

---

## What's working well

- **Morgen Tasks integration** — vault quest tasks (02-Quests/) and daily note tasks sync to Morgen for time-blocking; completion in Morgen checks off in vault. Morning routine simplified: Morgen → Obsidian (one fewer app).
- **Daily schedule in daily notes** — `_scripts/daily-schedule.js` auto-populates today's calendar events from Google Calendar ICS on note creation
- **Commander toolbar** — Dashboard, Today's Note, Weekly Review, New Permanent Note, New Troubleshooting Log, Daily Capture — all one-click
- **Daily note system** — 18/18 days complete with vitals, focus log, habits, tasks, and end-of-day reflection
- **Daily note focus intention** — Templater now prompts for `focus_intention` at note creation; value auto-fills frontmatter and body — no manual copy step
- **Dashboard** — live base views for quests, vitals, focus, Zettelkasten, reviews — all populate correctly
- **Permanent note link health** — all 6 permanent notes have ≥2 outbound links
- **Life Compass** — all values and roles filled with honest personal content
- **Git remote** — correctly pointed to github.com/glpelletier-jpg/slip-box-vault
- **Work Knowledge** — 38 notes across 5 subfolders, Troubleshooting system active
- **_docs/ index** — `_docs/_docs.md` rebuilt as full MOC with categorised links; `_docs/docs.base` live view with 5 tabs; all 18 docs tagged with `doc_type:` and `purpose:` for filtering
- **Plan vs. Actual system** — three-tier (weekly/monthly/quarterly) with templates, `03-Reviews/Plan-Actual/` folder, and `plan-actual.base` dashboard view
- **Dashboard fixes** — `weekly-reviews.base` week label now uses `week` field (not `date`) to distinguish same-Sunday reviews; `monthly-reviews.base` formula uses `number()` cast; May 2026 `focus_minutes_total` unquoted
- **Watch integration** — Galaxy Watch Ultra docs complete (full guide + personalized setup); `energy_score:` field live in daily notes and vitals.base; glucose_context now prompted via Templater suggester with 6 standard values
- **Workout log** — `03-Reviews/Workouts/` folder + Workout Log Template ready; Templater auto-applies on creation
- **Todoist→vault flow** — Section 9b in weekly review with live Dataview query showing work notes filed during the week; Field Notes as capture landing
- **Weekly review health section** — broken Dataview query replaced with vitals.base link + manual summary table (daily notes have `dataview-ignore: true` — Dataview was silently returning nothing)

---

## What needs attention

| Priority | Item | Action |
|---|---|---|
| 🔴 1 | Fleeting notes backlog (141) | Wire `_scripts/fleeting-triage.js` to QuickAdd macro (5 min), then triage — target <50 |
| 🔴 2 | HAM Radio study starts Jun 8 | Open [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Overview|Overview]] Monday · log first session in Progress Tracker |
| 🟡 3 | New Role Integration at risk (10%, week 2) | Capture at least 1 troubleshooting log this week — CP 12 Bottom Agitator is unresolved |
| 🟡 4 | reMarkable Sync plugin broken | Monitor [github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases](https://github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases) for update |
| 🟡 5 | Git uncommitted changes | Run `_scripts/vault-backup.bat` |
| 🟡 6 | Write 4 more permanent notes this month | Tier 1 queue: Feel Good Productivity, Deep Work, Stolen Focus, Atomic Habits |
| 🟡 7 | Argenta work calendar ICS URL | Enter in QuickAdd → Manage Macros → Weekly Calendar → ⚙ → `ics_url` field |
| 🟡 8 | Tablet setup | Install Obsidian + connect to Obsidian Sync · configure mobile toolbar for Zettelkasten processing use |
| 🟢 9 | June monthly review | Fill at month end — template is ready |
| 🟢 10 | Gitignore Claude Project Instructions | Add `_docs/Claude Project Instructions.md` to .gitignore — AI context file, not vault content |
| 🟢 11 | Next full evaluation | Scheduled for Jun 27, 2026 |
| 🟢 12 | Navigation redesign | ✅ Done Jun 7 — Ribbon (5 buttons) + Toolbar (6 buttons) + CSS snippet |
| 🟢 13 | W23 weekly review | ✅ Due Jun 7 — complete or archive |

---

## Bugs fixed (history)

**June 7, 2026 (session 4)**
- **Galaxy Watch Ultra docs** — `_docs/Galaxy Watch Ultra.md` rewritten as 693-line comprehensive guide (stripped 251KB duplicate AI chat dump); `_docs/Galaxy Watch Ultra — Personalized Setup.md` created (479 lines, step-by-step for all 7 watch recommendations); both added to `_docs/_docs.md` MOC.
- **energy_score field** — Added to daily note template frontmatter, vitals table, and vitals.base (with status formula 🟢/🟡/🔴 and summary average). Today's daily note updated.
- **glucose_context standardization** — Daily note template now prompts via `tp.system.suggester` with 6 standard values (fasting, post-meal-2h, pre-workout, post-workout, steroid-affected, random). Eliminates capitalisation inconsistency.
- **Workout Log Template** — Created `_templates/Workout Log Template.md` with Templater prompts (type, duration, HR zone, feel). `03-Reviews/Workouts/` folder created and wired to Templater (15 folder templates now).
- **Weekly review Section 9b** — Todoist→vault processing step added with live Dataview query showing `07-Work-Knowledge/` and `_reference/Work/` notes touched during the week.
- **Weekly review health bug** — Broken Dataview query (was silently empty due to `dataview-ignore: true` on daily notes) replaced with vitals.base link + manual summary table.
- **Body Composition Log** — Created `_reference/Personal/Body Composition Log.md` with running table, BIA instructions, reference ranges.
- **Field Notes** — Created `_reference/Work/Field Notes.md` as Todoist→vault capture landing for plant-floor observations.
- **sleep_hours quoting bug** — Fixed `sleep_hours: "6"` → `6` in Jun 6 and Jun 7 daily notes.
- **Vault Doc Template** — `_templates/Vault Doc Template.md` created with Templater suggester for doc_type and prompted purpose field.

**June 7, 2026 (session 3)**
- **_docs/ MOC + base** — `_docs/_docs.md` rebuilt as categorised MOC; `_docs/docs.base` created with 5 views (All / Procedures / Reference / Guides / Evaluations); all 18 docs given `doc_type:` and `purpose:` frontmatter fields.
- **Plan vs. Actual docs** — `_docs/Reviews & Planning — Complete Procedure.md` updated: Morgen fixes, focus_intention auto-prompt, Plan vs. Actual tier added throughout, section numbering corrected (Sec 14 = PvA, Sec 15 = Ready checklist).
- **Dashboard base fixes** — `weekly-reviews.base`: `week_label` now uses `week` field (not `date`) — fixes duplicate "Jun 7" row when W23 and W24 have same date. `monthly-reviews.base`: `number()` cast in `min_vs_goal` formula prevents String/Num error. `03-Reviews/Monthly/2026-05.md`: `focus_minutes_total` unquoted (was `"2100"`, now `2100`).
- **PDF export** — `Reviews & Planning — Complete Procedure.pdf` generated (8-part, styled with ReportLab).

**June 7, 2026 (session 2)**
- **Fleeting triage script** — `_scripts/fleeting-triage.js` created. QuickAdd user script: opens oldest fleeting note, then shows Archive / Promote → Literature / Delete / Skip menu on second trigger. Needs QuickAdd macro + hotkey to activate.
- **Daily note focus_intention** — Templater now prompts at note creation (`tp.system.prompt`); value populates frontmatter and body automatically. Manual copy step eliminated.
- **Weekly review section 7** — "Open Google Calendar" changed to "Open Morgen" in template and W24.
- **Daily note This Week section** — "Each Monday" corrected to "Each Sunday".

**June 7, 2026 (session 1)**
- **morgen-config.json updated** — ignoreDirectories expanded to exclude Fleeting, Literature, Permanent, Reviews, Resources, Home. isDoneDateEnabled set to true.

**June 5–6, 2026**
- **Commander buttons not showing** — Three bugs: wrong `id` (UUID instead of command ID), missing `action` field, missing `mode: "any"`. All fixed.
- **Dashboard missing** — `00-Home/00-Home.md` recreated with `.base` transclusions.
- **Homepage plugin error** — Resolved by recreating dashboard note.
- **`steps:` quoted as strings** — Fixed: `force-yaml-escape` disabled in Linter.

---

## Commander quick reference

**Left Ribbon** (always visible, far left strip):

| Button | What it does |
|---|---|
| 🏠 Home | Opens dashboard |
| 📅 Today | Opens today's daily note |
| 📆 This Week | Opens this week's weekly review |
| 🔍 Search | Global vault search |
| ⚡ Quick Switcher | Fast file jump |

**Toolbar** (top of every open note):

| Button | What it does |
|---|---|
| ← Back | Navigate back |
| → Forward | Navigate forward |
| 🏠 Home | Opens dashboard |
| 📅 Today | Opens today's daily note |
| 🕸 Graph | Graph view |
| ⌨ Palette | Command palette |

---

## Key navigation

| What | Where |
|---|---|
| Dashboard | 🏠 ribbon button or `Ctrl+H` |
| Today's note | 📅 ribbon or toolbar button, or `Ctrl+D` |
| Weekly review | 📆 ribbon or toolbar button, or `Ctrl+Shift+W` |
| New permanent note | `Ctrl+Shift+P` |
| New troubleshooting log | `Ctrl+P` → QuickAdd |
| Weekly calendar | `Ctrl+Shift+K` |
| Next week calendar | `Ctrl+Shift+J` |
| Life Compass | [[01-Vision/life-compass|Life Compass]] |
| Health Reset Quest | [[02-Quests/Health-Reset-Q3-2026|Health Reset]] |
| New Role Quest | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration]] |
| HAM Radio | [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Overview