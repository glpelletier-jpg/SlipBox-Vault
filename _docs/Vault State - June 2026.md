---
tags: [vault-meta, state]
date: 2026-06-08
---

# Vault State — June 2026

> Living snapshot. Update "what needs attention" after each weekly review.

---

## Stats (June 8, 2026)

| Area | Count | Notes |
|---|---|---|
| Total notes | ~460 | All folders |
| Daily notes | 19 | May 21 – Jun 8 · all filled |
| Focus minutes logged | All 19 | Strong habit — vitals + energy filled every day |
| Weekly reviews | 4 | W20–W23 complete |
| Monthly reviews | 2 | May (partial) · June (fill at month end) |
| Active quests | 2 | Health Reset (15%) · New Role Integration (10%) |
| Life Compass | ✅ Complete | All values, roles, energy audit filled |
| Literature notes | 49 | 38 original + 11 IA/OT reference stubs (June 2026) |
| Permanent notes | 28 | 6 original + 22 IA/OT domain stubs (June 2026) |
| MOCs | 8 | Automation · HAM · PKM · Personal Growth · Instrumentation · OT Networking · PLC Architecture · Process Safety |
| Fleeting notes | ~150 | 🔴 Critical backlog — triage 10/week, target <50 by Q3 end |
| Work Knowledge | 38 notes | 5 subfolders populated |
| Attachments | 17 companion notes | Rockwell PDFs + HAM Radio resources |
| Git backup | ✅ Active | Remote: github.com/glpelletier-jpg/slip-box-vault · current as of Jun 9 |
| Community plugins | 15 | All enabled |
| Commander | ✅ Configured | Ribbon + Toolbar wired, all buttons working (mode: any) |
| Dashboard | ✅ Live | Base file transclusions — all panels populate |
| Templates | 18 | Including Automation-Permanent and Automation-Literature templates |
| Evaluations | 14 | Full audit history in `_docs/Evaluations/` |

---

## What's active right now

### Quests
- [[02-Quests/Health-Reset-Q3-2026|Health Reset Q3]] — 15% · 3 daily habits active · tracking in daily notes
- [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Q3]] — 10% · Learning systems · Primary automation engineer at Argenta as of Jun 5

### Study
- **HAM Radio General License** — started Jun 8, Week 1: G1 Commission's Rules
- Open [[05-Resources/Courses/HAM-Radio/General License Syllabus|General License Syllabus]] for week-by-week schedule

### Permanent note stubs to fill
- 22 IA/OT stubs in `06-Zettelkasten/Permanent/` — each has a Claim and empty body sections
- Fill 1 per week from the stub's Claim: write Explanation, Evidence, Conditions, Cross-links

---

## What's working well

- **Daily schedule in daily notes** — `_scripts/daily-schedule.js` auto-populates Google Calendar events on note creation
- **Commander toolbar** — Dashboard, Today's Note, Weekly Review, New Permanent Note, New Troubleshooting Log, Daily Capture — all one-click, all buttons have `mode: any`
- **Daily note system** — 19/19 days complete with vitals, focus log, habits, tasks, and end-of-day reflection
- **Dashboard** — live base views for quests, vitals, focus, Zettelkasten, reviews
- **Git backup** — restored and pushed Jun 9 after repo re-initialization
- **Work Knowledge** — 38 notes across 5 subfolders, 4 automation-domain MOCs fully linked
- **Documentation** — consolidated into single Master Guide; `_docs/` fully restored

---

## What needs attention

| Priority | Item | Action |
|---|---|---|
| 🔴 1 | Fleeting notes backlog (~150) | Triage 10/week during Sunday review — process or delete |
| 🟡 2 | Fill PN stub Explanation sections | 1 per week — open the stub, write Explanation + Evidence + Cross-links |
| 🟡 3 | Fill LIT stub summaries | 11 new IA/OT literature stubs need Summary + Key concepts |
| 🟡 4 | `_reference/Work` is empty | Add contacts, site access notes, credential hints, SOPs |
| 🟢 5 | June monthly review | Fill at month end — template is ready |
| 🟢 6 | Quarterly planning (Q3) | After June monthly review — design Q3 quest milestones |

---

## Bugs fixed (history)

**June 8, 2026**
- **`_docs/` folder lost during git re-initialization** — restored from commit `355ae7f` via `git show`.
- **`index.lock` blocking git** — caused by Obsidian Git plugin holding lock. Resolved by deleting lock file and re-running `vault-backup.bat`.
- **Git `.git/` folder missing** — accidentally deleted when clearing `index.lock`. Restored via `git init` + `git reset origin/master` + push.

**June 6–8, 2026**
- **28 missing PN permanent note stubs** — created in `06-Zettelkasten/Permanent/` across 4 domains (Instrumentation, PLC Architecture, OT Networking, Process Safety). MOC links updated to use `-` for Windows-safe filenames.
- **11 missing LIT literature note stubs** — created in `06-Zettelkasten/Literature/` for key IA/OT standards and vendor references.
- **`focus_hours` Dataview field bug** — Monthly review (2026-06.md) and Quarterly review (2026-Q2-review.md) used `focus_hours` instead of `focus_minutes`. Fixed in both files.

**June 5–6, 2026**
- **Commander buttons** — wrong `id` (UUID vs command ID), missing `mode: "any"`. All fixed.
- **Dashboard missing** — `00-Home/00-Home.md` recreated with `.base` transclusions.
- **`steps:` quoted as strings** — fixed: `force-yaml-escape` disabled in Linter.

---

## Commander quick reference

| Button | What it does | Where it appears |
|---|---|---|
| 🏠 Dashboard | Opens 00-Home dashboard | Left Ribbon |
| 📅 Today's Note | Opens or creates today's daily note | Toolbar + Tab Bar |
| 📆 Weekly Review | Opens this week's review | Toolbar + Tab Bar |
| 💡 New Permanent Note | QuickAdd → new permanent note template | Toolbar + Tab Bar |
| 🔧 New Troubleshooting Log | QuickAdd → new troubleshooting log template | Toolbar + Tab Bar |
| ⏱ Daily Capture | QuickAdd → append to today's capture inbox | Toolbar + Tab Bar |

*Tab Bar requires Settings → Appearance → Show tab title bar = ON*

---

## Monthly health check queries

Run these on the first Sunday of each month. Open a note and paste the query — or build it into a Vault State template.

**Orphan detector** — notes with no backlinks:
```dataview
TABLE file.path AS Path
FROM "" WHERE length(file.inlinks) = 0 AND file.folder != "_docs" AND file.folder != "_templates"
SORT file.mtime DESC
LIMIT 20
```

**Fleeting inbox count:**
```dataview
TABLE length(rows) AS "Count" FROM "06-Zettelkasten/Fleeting" GROUP BY true
```

**Permanent notes without outlinks (< 2):**
```dataview
TABLE length(file.outlinks) AS "Outlinks"
FROM "06-Zettelkasten/Permanent"
WHERE length(file.outlinks) < 2
```

---

## Quarterly audit queries

**Fleeting notes processed this quarter** (tagged `processed`):
```dataview
TABLE file.name FROM "06-Zettelkasten/Fleeting" WHERE contains(tags, "processed")
```

**Work Knowledge coverage by subfolder:**
```dataview
TABLE length(rows) AS "Notes"
FROM "07-Work-Knowledge"
GROUP BY file.folder
```

**CAP exam prep notes:**
```dataview
TABLE file.name, file.mtime AS "Last edited"
FROM "" WHERE contains(tags, "CAP-prep")
SORT file.mtime DESC
```

**HAM Radio study progress:**
```dataview
TABLE file.name, file.mtime AS "Last edited"
FROM "05-Resources/Courses/HAM-Radio"
SORT file.mtime DESC
```

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Slip Box Master Guide|Master Guide]]
