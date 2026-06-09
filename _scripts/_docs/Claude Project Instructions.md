---
doc_type: meta
purpose: "AI assistant context file — vault structure, rules, and critical notes for Claude sessions"
title: Claude Project Instructions — Slip Box Vault
date: 2026-06-07
tags: [vault-meta, claude]
---

# Claude Project Instructions — Slip Box Vault

> Paste the content below the horizontal rule into the Claude project's "Project instructions" field at claude.ai/projects.

---

## Project instructions (copy everything below this line)

---

You are assisting Guy Pelletier with his Obsidian personal knowledge management vault called **Slip Box**, located at `C:\Vault\Slip Box`. You have direct file access via Cowork mode.

---

### Who Guy is

- Automation engineer who started at Argenta on May 27, 2026 (pharma/biotech manufacturing)
- Previous coworker Gary Tebow left June 5 — Guy is now the primary automation engineer
- Running two active quests: Health Reset Q3 (20%) and New Role Integration Q3 (10%)
- Studying for HAM Radio General License (started June 8, 2026)
- Email: glpelletier@gmail.com

---

### Devices

| Device | Role |
|---|---|
| Windows 11 Desktop | Primary vault — all serious work |
| Tablet | Zettelkasten processing, reading, lighter vault use |
| reMarkable Paper Pro | Handwritten capture (field notes, sketches, HAM study diagrams). Sync plugin non-functional — manual PDF export only. |
| Samsung Galaxy S25 Ultra | Todoist capture, Obsidian mobile capture, Morgen on-the-go. S Pen for PDF annotation only. |
| Samsung Galaxy Watch Ultra | Health tracking — steps and HR logged manually to daily note vitals |

---

### Vault structure

```
C:\Vault\Slip Box\
├── 00-Home/          Dashboard (00-Home.md) + 11 .base live views (incl. plan-actual.base)
├── 01-Vision/        Life Compass (complete) + Future Vision
├── 02-Quests/        Health Reset Q3 · New Role Integration Q3
├── 03-Reviews/       Weekly (W20–W24) · Monthly (May, Jun) · Quarterly (Q2) · Plan-Actual/ · Workouts/
├── 04-Daily-Notes/   18 daily notes May 21–Jun 7 · all filled
├── 05-Resources/     Books (32) · Articles · Courses (HAM, GPS, MIT) · Ideas
├── 06-Zettelkasten/  Fleeting (141) · Literature (38) · Permanent (6) · MOC (4)
├── 07-Work-Knowledge/ Automation (12) · Networking (9) · Processes (10) · Troubleshooting (2) · CAP (2)
├── _archive/         Destinations for completed/outdated content · _archive/Fleeting/ for triaged notes
├── _attachments/     PDFs with companion .md notes · Work, Courses, Books, Personal, reMarkable
├── _docs/            Master Guide · Procedures (5) · Evaluations (12) · MOC (_docs.md) · docs.base · Vault State
├── _reference/       Personal admin (9 notes) · Work (Contacts, Key Systems, Site Map stubs)
├── _scripts/         weekly-calendar.js · next-week-calendar.js · daily-schedule.js · vault-backup.bat · create-course.js · fleeting-triage.js
└── _templates/       29 templates — Daily Note, Weekly Review, Permanent Note, Troubleshooting Log, 3× Plan vs. Actual, Workout Log, Vault Doc, etc.
```

---

### Key files

| File | Purpose |
|---|---|
| `00-Home/00-Home.md` | Dashboard — uses ![[base]] transclusions, NOT Dataview |
| `01-Vision/life-compass.md` | 5 values · 3 roles · energy audit — all filled |
| `02-Quests/Health-Reset-Q3-2026.md` | `status: Active` · `progress: 20` |
| `02-Quests/New-Role-Integration-Q3-2026.md` | `status: Active` · `progress: 10` |
| `_docs/_docs.md` | Documentation MOC — categorised index of every _docs/ file with embedded docs.base |
| `_docs/docs.base` | Live base view of all _docs/ files — 5 views: All / Procedures / Reference / Guides / Evaluations |
| `_docs/Slip Box Master Guide.md` | Full reference document |
| `_docs/Slip Box Integrated Workflow.md` | Three-tool workflow — Obsidian + Todoist + Morgen |
| `_docs/Vault State - June 2026.md` | Current health check + action list |
| `_docs/Commander — Quick Reference.md` | Commander button config + troubleshooting |
| `_docs/Evaluations/Vault Evaluation 12 - June 2026.md` | Latest audit (Jun 7, 2026) — session 4 added |
| `_docs/Galaxy Watch Ultra.md` | Complete watch guide — all settings, health, workouts, safety, vault integration |
| `_docs/Galaxy Watch Ultra — Personalized Setup.md` | Step-by-step watch setup tied to Health Reset and New Role Integration quests |
| `06-Zettelkasten/Literature Processing Guide.md` | 70+ permanent note claims ready to write |
| `_scripts/vault-backup.bat` | Git commit + push to github.com/glpelletier-jpg/slip-box-vault |
| `.obsidian/morgen-config.json` | Morgen Tasks plugin config — ignoreDirectories + isDoneDateEnabled |

---

### Plugins (17 community plugins, all enabled)

| Plugin | Key detail |
|---|---|
| Templater | Auto-applies templates to 15 folders on note creation (incl. 03-Reviews/Plan-Actual/, 03-Reviews/Workouts/) |
| Dataview | Powers queries in reviews and Zettelkasten index |
| Periodic Notes | Creates weekly/monthly/quarterly notes — `Ctrl+D`, `Ctrl+Shift+W` |
| QuickAdd | Hotkey macros — New Fleeting, New Permanent, New Troubleshooting Log, Daily Capture, Calendar fetchers |
| Commander | Custom toolbar buttons — see critical rules below |
| Bases (core) | Powers all `.base` embedded live views |
| Homepage | Opens `00-Home/00-Home.md` on startup |
| Linter | `force-yaml-escape: OFF` — was breaking numeric frontmatter fields |
| Tasks | Scans for `📅 YYYY-MM-DD` due-date syntax |
| Morgen Tasks | Syncs vault tasks (Quests, Daily Notes, Troubleshooting) to Morgen for time-blocking; completion in Morgen checks off in vault. Config: `.obsidian/morgen-config.json` |
| Morgen (ID decorator) | Hides or stylizes the `🆔` task IDs that Morgen adds to synced tasks |
| reMarkable Sync | ⚠️ Currently non-functional — awaiting plugin update from developer. Manual PDF export workaround in use. |

---

### Morgen Tasks plugin — key config

File: `.obsidian/morgen-config.json`

```json
{
  "idPolicy": "add-ids",
  "ignoreDirectories": [
    "/_archive", "/_attachments", "/_docs", "/_reference", "/_scripts", "/_templates",
    "/06-Zettelkasten/Fleeting", "/06-Zettelkasten/Literature", "/06-Zettelkasten/Permanent",
    "/03-Reviews", "/05-Resources", "/00-Home"
  ],
  "isDoneDateEnabled": true,
  "taskImportPolicy": "all",
  "taskIncludePropertyDefault": true,
  "shareParentTags": false,
  "enableNotesAsTasks": false
}
```

Folders that DO sync to Morgen: `02-Quests/`, `04-Daily-Notes/`, `07-Work-Knowledge/Troubleshooting/`, `06-Zettelkasten/MOC/`

---

### Critical rules learned through debugging

**1. Commander buttons require three things to render:**
- `id` field must be the Obsidian command ID (e.g. `periodic-notes:open-daily-note`), NOT a UUID
- Entry must include `"mode": "any"` — without it the `X()` gate function returns false and the button is silently skipped
- Tab Bar buttons additionally require Settings → Appearance → Show tab title bar = ON
- Config file: `.obsidian/plugins/cmdr/data.json` — keys are `leftRibbon`, `titleBar`, `pageHeader`

**2. Dashboard uses .base transclusions, not Dataview:**
- `00-Home/00-Home.md` uses `![[quests.base]]`, `![[vitals.base]]`, etc.
- Daily notes have `dataview-ignore: true` — Dataview cannot query them from outside
- The .base files (Obsidian Bases plugin) query daily notes directly and work fine

**3. Daily note frontmatter fields:**
- `type: daily` (not `daily-note`)
- `focus_minutes:` — bare integer, not quoted string
- `dataview-ignore: true` on all daily notes — intentional
- `steps:` must be unquoted integer — Linter's `force-yaml-escape` was breaking this (now disabled)
- `focus_intention:` — populated automatically via `tp.system.prompt()` at note creation. Do not add placeholder text here; the Templater expression fills it.
- `energy_score:` — Galaxy Watch Ultra Energy Score (0–100 readiness index). Separate from `energy:` (self-rated 1–5 feeling). Enter from Samsung Health each morning.
- `glucose_context:` — now populated via `tp.system.suggester` at note creation. Standard values: `fasting`, `post-meal-2h`, `pre-workout`, `post-workout`, `steroid-affected`, `random`. Do not use capitalised variants.

**4. Folder notes:**
- Plugin: folder-notes with `storageLocation: insideFolder`, `hideFolderNote: true`
- Folder note for `00-Home` is `00-Home/00-Home.md` — hidden from explorer but real
- Click the folder name in sidebar to open its index note

**5. QuickAdd choice IDs (do not change these):**
- New Permanent Note: `13aab76c-a88d-406a-9114-70aa41ad812c`
- New Troubleshooting Log: `6a34ec86-7258-422d-95a1-322854a1f19c`
- Add to Daily Capture: `73fd090a-a813-4765-a89d-5765fd9eb671`
- Weekly Calendar macro: `1838ef3d-10c4-4c07-8d45-0cd2411a3411`
- Next Week Calendar macro: `35b1ab86-bddf-46a1-a583-094c3af0ad6c`

**6. Git backup:**
- Remote: `https://github.com/glpelletier-jpg/slip-box-vault.git`
- Branch: `master` (not `main`)
- Script: `_scripts/vault-backup.bat` — uses dynamic branch detection
- Linux shell path: `/sessions/*/mnt/Slip Box/`
- Git config: `user.email = glpelletier@gmail.com`, `user.name = Guy Pelletier`

**7. Focus log:**
- Daily note uses `[duration:: N]` inline fields for session logging
- Total line: `` `= sum(default(this.file.lists.duration, 0))` ``
- Instruction text uses HTML entities (`&#91;duration:: 90&#93;`) to avoid being parsed as a field

---

### Three-tool system

| Tool | Role |
|---|---|
| Obsidian (Slip Box) | Intention · reflection · quests · reviews · knowledge · vitals |
| Todoist | Non-vault tasks with due dates · quick capture · reminders · recurring tasks |
| Morgen | Calendar view + Todoist tasks in one place · time-blocking · vault quest tasks via Morgen Tasks plugin |

Morning order: **Morgen → Obsidian.** Morgen replaces the separate Calendar + Todoist morning steps — it shows both in one view.

Quest task flow: **Vault quest note → Morgen Tasks plugin → Morgen calendar (time-block).** No Todoist duplication needed for quest milestones.

---

### Hotkeys

| Action | Hotkey |
|---|---|
| Today's daily note | `Ctrl+D` |
| Weekly review | `Ctrl+Shift+W` |
| New fleeting note | `Ctrl+Shift+F` |
| New permanent note | `Ctrl+Shift+P` |
| Add to daily capture | `Ctrl+Shift+C` |
| Fetch weekly calendar | `Ctrl+Shift+K` |
| Fetch next week calendar | `Ctrl+Shift+J` |

---

### Current priorities (as of June 7, 2026)

1. Wire `_scripts/fleeting-triage.js` to a QuickAdd macro + hotkey (5 min setup)
2. HAM Radio Week 1 — G1 Commission's Rules (starts June 8)
3. Triage fleeting notes — 141 notes, use the new triage script, target <50
4. Write permanent notes — 6 exist, target 10 by Jun 30 from Literature Processing Guide
5. Quest 