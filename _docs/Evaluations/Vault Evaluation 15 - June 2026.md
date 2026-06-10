---
title: Vault Evaluation 15 — June 2026
date: 2026-06-09
tags: [evaluation, vault-maintenance]
---

# Vault Evaluation 15 — June 2026

> Evaluation #15. Conducted June 9, 2026. **Scope: Full four-area audit** — LifeOS, Zettelkasten, Courses, Work. Broken links, workflow integrity, cross-area connections, and improvement recommendations.

---

## Vault snapshot

| Metric | Count | Notes |
|---|---|---|
| Total notes | 584 | ↑ from ~460 (Eval 14) |
| Daily notes | 21 | May 21 – Jun 9, all filled |
| Weekly reviews | 5 | W20–W24 |
| Monthly reviews | 2 | May + June |
| Active quests | 2 | Health Reset (25%) · New Role Integration (12%) |
| Fleeting notes | 137 | 🔴 Backlog — 10 processed, 127 pending |
| Literature notes | 58 | |
| Permanent notes | 34 | 28 stubs need body content |
| MOCs | 8 | All present |
| Work Knowledge notes | 39 | |
| Courses | 8 | HAM, GPS, MIT-CS + 5 IA/OT self-study courses |
| 08-Work-Notes | 1 active | New field notebook section |
| _reference/Work entities | 18 | People (7), Locations (5), Systems (1), Equipment (1) |
| Templates | 44 | |
| Templater folder rules | 20 | |

---

## Fixes applied this session

### ✅ 1. Filename encoding bug — 36 files renamed

**Root cause:** Files created with em-dash `—` (U+2014) and en-dash `–` (U+2013) had their filenames corrupted to `ΓÇö` / `ΓÇô` — a double-encoding artifact. The wikilinks inside those files used the correct `—`/`–` characters, so every cross-link was broken.

**Scope:** 4 professional self-study course folders + HAM Radio + CIP work knowledge note + 11 `_scripts/_docs/` files = **36 files** renamed.

Affected courses (now fixed):
- `05-Resources/Courses/Instrumentation/` — all 5 files
- `05-Resources/Courses/OT-Networking/` — all 5 files
- `05-Resources/Courses/PLC Architecture/` — all 5 files
- `05-Resources/Courses/Process-Safety-IEC-61511/` — all 5 files
- `05-Resources/Courses/HAM-Radio/` — Overview, Progress, Reference + POTA article
- `07-Work-Knowledge/Automation/CIP – The Common Industrial Protocol.md`

**To prevent recurrence:** When creating note files from within Obsidian, use the app's rename function (`F2`) or Command Palette rather than external tools. The encoding issue originated from a file creation tool that didn't handle Unicode correctly.

---

### ✅ 2. Dashboard broken link fixed

`[[_docs/Vault Quick Reference]]` → `[[_docs/Commander — Quick Reference]]` (two occurrences in `00-Home.md`). The `Vault Quick Reference.md` file lives in `_scripts/_docs/`, not `_docs/` — it is a reference sheet for this Claude project session, not a vault-user document.

---

### ✅ 3. Book → literature note links fixed

Four books had broken `literature_note` links pointing to wrong filenames:

| Book | Was | Now |
|---|---|---|
| Feel Good Productivity | `Feel Good Productivity` | `Feel Good Productivity - Ali Abdaal` |
| ARRL Handbook Vol 1 | `...Vol 1` | `...100th Edition; Volume 1` |
| ARRL Handbook Vol 3 | `...Vol 3` | `...100th Edition; Volume 3` |
| ARRL Operating Manual | `...Radio Amateurs` | `...Radio Amateurs; Volume 1 and 2` |

---

### ✅ 4. Permanent note placeholder links cleared

28 permanent notes contained `[[PN — ]]` (empty PN cross-link placeholder) in their Cross-links section. Replaced with `*(link permanent notes here)*` text to eliminate broken link noise while keeping the structural prompt.

---

### ✅ 5. 08-Work-Notes added to Templater

`08-Work-Notes` was missing from the Templater folder template rules. Adding `Work-Note-Template.md` as the auto-apply template for this folder means new notes created there will pre-fill the correct frontmatter and structure.

---

## Issues found — not yet fixed

### 🔴 `my-banner.jpg` missing (affects all card-view folder notes)

Every folder note uses `cover: "[[attachments/my-banner.jpg]]"` but the file does not exist anywhere in the vault. The path is also wrong (should be `_attachments/`, not `attachments/`). This causes a broken image placeholder in every card view across `_archive/`, `_attachments/`, `05-Resources/`, `07-Work-Knowledge/`, `_reference/`, etc.

**Fix options:**
1. Add a banner image: place any `.jpg` at `_attachments/my-banner.jpg` and update the folder note template to `cover: "[[_attachments/my-banner.jpg]]"`
2. Remove the `cover` field from the Folder Note Template and all folder notes (cosmetic only — card views still work without a cover image)

---

### 🟡 `08-Work-Notes` not in dashboard or Master Guide

The work field notebook system (`08-Work-Notes/`) is fully built — 7 Bases views, Work-Note-Template, Work-Notes-Guide — but:
- Not listed in `00-Home.md` Navigation table
- Not documented in `_docs/Slip Box Master Guide.md` vault structure

**Fix:** Add a row to the dashboard Navigation table and a section to the Master Guide Part 2.

---

### 🟡 Work Note hotkey undocumented / not assigned

`Work-Notes-Guide.md` suggests `Ctrl+Shift+W` but that is already assigned to Open Weekly Review. The QuickAdd "Work Note" choice has `command: true` but no hotkey appears in the Obsidian hotkeys config.

**Recommended hotkey:** `Ctrl+Shift+G` (G for "go to field") — currently unassigned.

---

### 🟡 `_scripts/_docs/` is a stale duplicate doc folder

`_scripts/_docs/` contains 22 files that are largely duplicates of `_docs/` content, with encoding issues in several names. This folder was likely a sync artifact or export. Several files there (`reMarkable Integration`, `Device Workflows`, `Android Shortcuts`, `Galaxy Watch Ultra`, `Bixby Routines`) are legitimate supplementary docs not present in `_docs/`.

**Recommended action:** Move the unique docs (`reMarkable Integration`, `Device Workflows`, `Android/Galaxy/Bixby` guides) to `_docs/` proper. Delete the pure duplicates. Clean up the `_scripts/` folder.

---

### 🟡 `_reference/backup-status` linked from dashboard but missing

`00-Home.md` line 74: `![[_reference/backup-status]]` — this file does not exist. This is an embedded transclusion that produces an error panel on the dashboard every time it opens.

**Fix:** Create `_reference/backup-status.md` with a simple status line, or remove the transclusion.

---

### 🟡 `[[MOC — AVEVA Platform]]` linked but not created

`06-Zettelkasten/MOC/MOC — OT Networking.md` links to a planned AVEVA MOC that was never created.

**Fix:** Either create the stub MOC or change the link to `_reference/Work/Systems/Insight BAS` until AVEVA scope is established.

---

### 🟡 Evaluation index `Evaluations.md` has broken links

`_docs/Evaluations/Evaluations.md` lists evaluations 1–7 and 14, but evaluations 8–13 don't exist in the folder. The links use backslash-pipe syntax (`\|`) that may render incorrectly in some Obsidian versions.

---

### 🟢 `_docs/Vault State - June 2026.md` stats are stale

The Vault State note still shows ~460 notes, W20–W23 reviews, and Eval 14 as latest. Needs updating to reflect current state (584 notes, W24 exists, Eval 15, quest progress updates).

---

## Workflow audit

### LifeOS — Status: ✅ Functional

| Workflow | Status | Notes |
|---|---|---|
| Daily note creation | ✅ Working | Ctrl+D · Templater auto-applies |
| Daily habit tracking | ✅ Working | Quest habits section present in all daily notes |
| Focus log logging | ✅ Working | All 21 daily notes have `focus_minutes:` field |
| Vitals logging | ✅ Working | bp/pulse/glucose/weight fields populated |
| Weekly review | ✅ Working | W20–W24 created, sections complete |
| Calendar fetch (Ctrl+Shift+K/J) | ✅ Working | Scripts in `_scripts/` |
| Quest progress tracking | ✅ Working | Health Reset 25% · New Role Integration 12% |
| Monthly / Quarterly review | ✅ Working | Templates and Periodic Notes configured |

**Gap:** 8 of 21 daily notes have `focus_minutes: 0`. Some are legitimate zero-focus days; others may be logging gaps. Review during the next weekly review Section 3.

---

### Zettelkasten — Status: ⚠️ Functional but backlogged

| Workflow | Status | Notes |
|---|---|---|
| Fleeting capture (Ctrl+Shift+F) | ✅ Working | QuickAdd configured |
| Daily capture (Ctrl+Shift+C) | ✅ Working | QuickAdd configured |
| Permanent note creation (Ctrl+Shift+P) | ✅ Working | QuickAdd → Permanent folder |
| Literature Processing Guide | ✅ Current | Updated June 5, 2026 |
| Weekly review Section 8 queue | ✅ Working | Dataview surfaces oldest fleeting notes |
| Permanent note backfill | 🟡 In progress | 28 stubs, 22 with empty Explanation section |
| Fleeting backlog | 🔴 Critical | 137 notes · 10 processed · ~9 weeks at 10/week to reach target |

**Gap — Quest → Zettelkasten link:** Zero quest notes contain links to permanent notes. The PN stubs for instrumentation, OT networking, PLC, and process safety are directly relevant to the New Role Integration quest, but there's no explicit connection. Add a "Relevant permanent notes" section to each quest.

**Gap — Work Knowledge → Zettelkasten:** Zero `07-Work-Knowledge/` notes link to permanent notes. Work Knowledge and Zettelkasten are currently two separate silos when they should be reinforcing each other.

---

### Courses — Status: ✅ Functional (encoding bug now fixed)

| Workflow | Status | Notes |
|---|---|---|
| HAM Radio study system | ✅ Working | Overview → Syllabus → Progress → Reference → Resources |
| Instrumentation course | ✅ Now working | Was broken — filenames fixed this session |
| OT Networking course | ✅ Now working | Was broken — filenames fixed this session |
| PLC Architecture course | ✅ Now working | Was broken — filenames fixed this session |
| Process Safety course | ✅ Now working | Was broken — filenames fixed this session |
| GPS Tracker project | ✅ Working | 9 notes |
| MIT CS course | ✅ Working | 5 notes |
| Course → PN links | ✅ Working | 21 syllabus → permanent note links confirmed |

**Gap:** No Templater folder rule for any course subfolder. Creating a new note in `05-Resources/Courses/HAM-Radio/` applies no template. Low impact currently since HAM study notes are free-form, but worth establishing a simple Course Note template if HAM study intensifies.

---

### Work — Status: ✅ Strong, one gap

| Workflow | Status | Notes |
|---|---|---|
| 07-Work-Knowledge notes | ✅ Working | 39 notes, 5 subfolders |
| Troubleshooting Logs | ✅ Working | Templater rule configured |
| 08-Work-Notes field notebook | ✅ Working | Bases dashboard (7 views), template, QuickAdd |
| _reference/Work entity notes | ✅ Working | People, Locations, Systems, Equipment subfolders |
| Argenta Site Index | ✅ Working | Dataview tables across all 4 entity types |
| Field Notes capture → promotion | ✅ Documented | Field Notes.md describes the workflow |
| Work Note → Troubleshooting Log promotion | ✅ Documented | `promoted_to` field in work note template |

**Gap:** `08-Work-Notes` has no entry in the dashboard Navigation table. The section is invisible from the home screen unless you know to look for it in the sidebar.

---

## Cross-area connection matrix

| From | To | Links | Status |
|---|---|---|---|
| Daily Notes | Quests | 20 | ✅ Strong |
| Courses (Syllabi) | Permanent Notes | 21 | ✅ Good |
| Work Knowledge | Permanent Notes | 0 | ❌ Missing |
| Quests | Permanent Notes | 0 | ❌ Missing |
| Work Notes (08) | Troubleshooting Logs | 1 | 🟡 New — growing |
| _reference/Work | Work Knowledge | ~5 | 🟡 Partial |
| Daily Notes | Zettelkasten | ~5 | 🟡 Light |

---

## Improvement recommendations (prioritized)

### Priority 1 — High value, low effort

**1a. Add `08-Work-Notes` to the dashboard**
Add one row to the Navigation table in `00-Home.md`:
```
| Work Notes | [[08-Work-Notes/08-Work-Notes]] | 08-Work-Notes |
```
Also consider embedding `![[08-Work-Notes/work-notes.base]]` as a panel showing open work notes.

**1b. Fix `_reference/backup-status` transclusion**
Create `_reference/backup-status.md` with a one-line status: `Last backup: check _scripts/vault-backup.bat log`. The current missing transclusion produces a visible error panel on the dashboard.

**1c. Assign a hotkey to Work Note creation**
`Ctrl+Shift+G` is free. Settings → Hotkeys → search "QuickAdd: Work Note" → assign. Document in Master Guide Part 5.

---

### Priority 2 — Workflow improvements

**2a. Link quests to relevant permanent notes**
Each active quest should have a "Permanent notes" section linking to relevant PN stubs. For New Role Integration, this means linking to the Instrumentation, OT Networking, PLC Architecture, and Process Safety stubs. This closes the loop between learning and doing.

**2b. Add PN cross-links to Work Knowledge notes**
At minimum, add a `**Permanent note:**` link at the bottom of each Work Knowledge note that has a corresponding PN stub. This makes the knowledge graph coherent and lets graph view reveal knowledge clusters.

**2c. Add an "Open Work Notes" query to Weekly Review Section 9b**
Currently Section 9b is free-form. Add a Dataview query pulling all `08-Work-Notes` notes with `status: open` or `status: in-progress` so they surface automatically during the weekly review for promotion or closure decisions.

Suggested query for `_templates/Weekly Review Template.md` Section 9b:
```dataview
TABLE WITHOUT ID
  link(file.path, file.name) AS "Note",
  date AS "Date",
  equipment AS "Equipment",
  status AS "Status"
FROM "08-Work-Notes"
WHERE type = "work-note" AND (status = "open" OR status = "in-progress")
SORT date DESC
```

**2d. Weekly review: add fleeting note age indicator**
The current Section 8a Dataview query shows the 5 oldest fleeting notes. Add a second query showing the count of fleeting notes older than 14 days — the ones that should be processed or discarded per the processing rule.

---

### Priority 3 — Content work backlog

**3a. Fill 22 permanent note stubs (Explanation section)**
22 of 34 permanent notes are empty below the Claim. Target: 1 completed PN per week (current). At that rate, backfill takes ~22 weeks. Alternatively: spend one focused 2-hour session filling 5–6 Explanation sections using the claim text as the entry point — each stub already has the thesis, just needs the body.

**3b. Process fleeting notes: target 20/week for 6 weeks**
At 10/week the backlog drains in ~9 weeks. Doubling to 20/week during the Q3 push gets to <50 in ~6 weeks. The oldest fleeting notes (Books to Read, Basic Steps in Research, Atomic Ideas, Opinionated Obsidian Guide, 12 Zettelkasten Principles) are directly relevant to the PKM MOC and could each become a quick Literature note.

**3c. Create `MOC — AVEVA Platform` stub**
The OT Networking MOC links to it. AVEVA Historian / System Platform is likely relevant to Argenta's OT infrastructure. Even a 10-line stub removes the broken link and establishes the topic anchor.

---

### Priority 4 — Housekeeping

**4a. Clean up `_scripts/_docs/`**
Move unique content to proper locations:
- `reMarkable Integration — Complete Procedure.md` → `_docs/`
- `Device Workflows — Complete Guide.md` → `_docs/` or `_reference/Personal/`
- `Android Shortcuts`, `Galaxy Watch Ultra`, `Bixby Routines`, `Google Keep Workflow` → `_reference/Personal/` (device-specific setup, not vault docs)
- Delete pure duplicates of `_docs/` content already properly placed there.

**4b. Add banner image**
Place any `.jpg` at `_attachments/my-banner.jpg`. Update `_templates/Folder Note Template.md` to reference `_attachments/my-banner.jpg` (adding the underscore). This fixes broken image in all card views.

**4c. Update Vault State — June 2026**
Stats are from Eval 14 (~460 notes). Current state: 584 notes, W24, Eval 15, quest progress updated. Run the monthly health check queries to refresh.

---

## Files changed this session

| File | Change |
|---|---|
| 36 course/work files | Renamed `ΓÇö`→`—`, `ΓÇô`→`–` |
| `00-Home/00-Home.md` | Fixed 2 Vault Quick Reference links |
| `05-Resources/Books/Feel Good Productivity.md` | Fixed literature note link |
| `05-Resources/Books/The ARRL Handbook Vol 1.md` | Fixed literature note link |
| `05-Resources/Books/The ARRL Handbook Vol 3.md` | Fixed literature note link |
| `05-Resources/Books/The ARRL Operating Manual.md` | Fixed literature note link |
| `06-Zettelkasten/Permanent/*.md` (28 files) | Cleared `[[PN — ]]` placeholder links |
| `.obsidian/plugins/templater-obsidian/data.json` | Added 08-Work-Notes folder rule |
| `_docs/_docs/Slip Box Master Guide.md` | Added Table of Contents |
| `_reference/Work/` | Built People/Locations/Systems/Equipment subfolders + 18 entity notes |
| `_templates/` | Added Argenta-Person/Location/System/Equipment templates |

---

**Links:** [[_docs/Evaluations/Evaluations|Evaluations]] · [[_docs/Vault State - June 2026|Vault State]] · [[_docs/Slip Box Master Guide|Master Guide]]
