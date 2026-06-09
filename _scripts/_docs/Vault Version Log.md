---
doc_type: reference
purpose: "Semantic version history of the Slip Box vault — what changed, when, and why"
title: Vault Version Log
vault_version: 1.4.0
date: 2026-06-07
tags:
  - vault-meta
  - versioning
---

# Vault Version Log

> **Current version: v1.4.0** — June 7, 2026

---

## Versioning Convention

The vault uses **semantic versioning**: `MAJOR.MINOR.PATCH`

| Digit | When to bump | Examples |
|---|---|---|
| **MAJOR** | Structural overhaul — new top-level folder, complete system rebuild, breaking change to core workflow | Adding a new top-level folder, replacing the review system entirely |
| **MINOR** | New capability added — template, base file, script, significant workflow or doc | New workout log system, Plan vs. Actual system, new script |
| **PATCH** | Bug fix, content update, documentation update, field addition | Fixing a Dataview query, correcting a template field, updating a doc |

**Who bumps the version:** You or a Cowork session, at the end of any session that makes changes.

**Where to update:**
1. `version:` in this file's frontmatter
2. `vault_version:` in `_docs/Vault State - June YYYY.md` frontmatter
3. `_version` file at vault root (read by `_scripts/vault-backup.bat` for commit messages)
4. The "Current version" line at the top of this document

---

## Version History

| Version | Date | Type | Summary |
|---|---|---|---|
| v1.4.0 | 2026-06-07 | Minor | Galaxy Watch Ultra integration, workout log, vitals energy_score, weekly review fixes |
| v1.3.1 | 2026-06-07 | Patch | Docs index system, dashboard base fixes, procedure cheat sheet updates |
| v1.3.0 | 2026-06-07 | Minor | Plan vs. Actual three-tier planning system |
| v1.2.1 | 2026-06-07 | Patch | Full audit — template fixes, daily note consistency, plugin configs |
| v1.2.0 | 2026-06-07 | Minor | Navigation redesign — Commander ribbon + toolbar + CSS snippet |
| v1.1.0 | 2026-06-05 | Minor | Daily schedule automation, Morgen integration, script cleanup |
| v1.0.0 | 2026-06-05 | Major | First fully operational vault — Commander fixed, dashboard rebuilt |
| v0.2.0 | 2026-06-02 | Minor | Work Knowledge populated, quest system, Zettelkasten foundation |
| v0.1.0 | 2026-05-21 | Major | Vault initialized |

---

## Changelog

### v1.4.0 — June 7, 2026

**Galaxy Watch Ultra integration**
- `_docs/Galaxy Watch Ultra.md` — comprehensive 693-line guide (all settings, health, workouts, outdoor, safety, vault integration)
- `_docs/Galaxy Watch Ultra — Personalized Setup.md` — 479-line step-by-step personalized setup tied to active quests

**Health tracking improvements**
- `energy_score:` field added to daily note template (Galaxy Watch readiness score 0–100, separate from self-rated `energy:` 1–5)
- `vitals.base` updated with `energy_score` formulas, status indicators (🟢≥70 / 🟡40–69 / 🔴<40), and summary average
- `glucose_context:` now prompted via `tp.system.suggester` with 6 standard values at note creation

**Workout log system**
- `_templates/Workout Log Template.md` — Templater prompts for type, duration, HR zone, feel
- `03-Reviews/Workouts/` folder created and wired to Templater (15 folder templates total)

**Weekly review improvements**
- Section 9b "Work captures — Todoist → vault" added with live Dataview query (shows `07-Work-Knowledge/` + `_reference/Work/` notes touched during the week)
- Broken Dataview health query replaced with vitals.base link + manual summary table

**New reference files**
- `_reference/Work/Field Notes.md` — Todoist→vault capture landing for plant-floor observations
- `_reference/Personal/Body Composition Log.md` — weekly BIA scan tracking

**Vault Versioning system** (this document)
- `_docs/Vault Version Log.md` created
- `_version` file at vault root (read by backup script)
- `vault_version:` added to Vault State frontmatter
- Vault version badge added to dashboard

**Bug fixes**
- `sleep_hours: "6"` → `6` in Jun 6 and Jun 7 daily notes
- `glucose_context: Fasting` → `fasting` in Jun 7 daily note

*Evaluation reference: [[Evaluations/Vault Evaluation 12 - June 2026|Eval 12]] (session 4)*

---

### v1.3.1 — June 7, 2026

- `_docs/_docs.md` rebuilt as full MOC with 6 categorised sections and evaluation history table
- `_docs/docs.base` created (5 views: All / Procedures / Reference / Guides / Evaluations)
- `doc_type:` and `purpose:` frontmatter added to all 18 `_docs/` files
- `00-Home/weekly-reviews.base` — `week_label` formula fixed (was showing duplicate "Jun 7" for W23 + W24)
- `00-Home/monthly-reviews.base` — `number()` cast added to fix "Invalid operator between String and Num"
- `03-Reviews/Monthly/2026-05.md` — `focus_minutes_total` unquoted
- `_docs/Reviews & Planning — Complete Procedure.md` — major update: Morgen fixes, Plan vs. Actual tier, section numbering

*Evaluation reference: [[Evaluations/Vault Evaluation 12 - June 2026|Eval 12]] (sessions 1–3)*

---

### v1.3.0 — June 7, 2026

- Plan vs. Actual three-tier system (weekly / monthly / quarterly)
- 3 new templates: Plan vs Actual Template, Monthly, Quarterly
- `03-Reviews/Plan-Actual/` folder with folder note
- `00-Home/plan-actual.base` — 5 views with planning accuracy status icons
- Dashboard updated with Planning Diagnosis section
- Templater folder templates expanded (14 total)
- Weekly and monthly review templates updated with Plan vs. Actual links

*Evaluation reference: [[Evaluations/Vault Evaluation 11 - June 2026|Eval 11]]*

---

### v1.2.1 — June 7, 2026

- Full vault audit (Eval 10): 18 daily notes, all templates, all plugin configs, all weekly/monthly reviews
- `_templates/Update Focus Minutes.md` fixed
- Stale template references corrected
- Daily note frontmatter consistency enforced across all 18 notes
- morgen-config.json updated — ignoreDirectories expanded, isDoneDateEnabled enabled

*Evaluation reference: [[Evaluations/Vault Evaluation 10 - June 2026|Eval 10]]*

---

### v1.2.0 — June 7, 2026

- Navigation redesign: Commander ribbon (5 buttons) + toolbar (6 buttons)
- CSS navigation snippet added (`.obsidian/snippets/navigation.css`)
- Commander Quick Reference updated

*Evaluation reference: [[Evaluations/Vault Evaluation 9 - June 2026|Eval 9]]*

---

### v1.1.0 — June 5, 2026

- `_scripts/daily-schedule.js` — auto-populates today's calendar events in daily note on creation
- Daily note focus_intention auto-prompted via Templater at creation
- Morgen Tasks plugin configured — task sync from Quests + Daily Notes + Troubleshooting
- `_scripts/fleeting-triage.js` created (QuickAdd wiring still needed)
- `07-Work-Knowledge/` populated: Processes (10 notes), Networking (9 notes)

*Evaluation references: [[Evaluations/Vault Evaluation 7 - June 2026|Eval 7]], [[Evaluations/Vault Evaluation 8 - June 2026|Eval 8]]*

---

### v1.0.0 — June 5, 2026

*First fully operational vault state.*

- Commander buttons fixed (wrong IDs, missing `mode: "any"`)
- `00-Home/00-Home.md` dashboard rebuilt with `.base` transclusions
- Homepage plugin error resolved
- `steps:` quoting bug fixed — Linter `force-yaml-escape` disabled

*Evaluation reference: [[Evaluations/Vault Evaluation 6 - June 2026|Eval 6]]*

---

### v0.2.0 — June 2–4, 2026

- `07-Work-Knowledge/` folder system created
- Quest system operational (Health Reset Q3, New Role Integration Q3)
- Zettelkasten foundation: 150 fleeting notes, 38 literature notes, 6 permanent notes
- HAM Radio course system (5-file structure)

*Evaluation references: [[Evaluations/Vault Evaluation 1 - June 2026|Evals 1–5]]*

---

### v0.1.0 — May 21, 2026

- Vault initialized
- Core folder structure created
- Initial templates, plugins, and configuration

---

## How to Cut a New Version

1. Complete your Cowork session changes
2. Update version number in three places:
   - This file's `vault_version:` frontmatter + "Current version" heading
   - `_docs/Vault State - June YYYY.md` `vault_version:` frontmatter
   - `_version` file at vault root: open it and change the number
3. Add a new changelog section above (copy the format from the most recent version)
4. Run `_scripts/vault-backup.bat` — the commit message will include the version automatically
5. Update `_docs/_docs.md` evaluation table if a new eval was written

---

*See also:* [[_docs/_docs|Docs Index]] · [[_docs/Vault State - June 2026|Vault State]] · [[_docs/Evaluations/Vault Evaluation 12 - June 2026|Latest Evaluation]] · [[_docs/Vault Backup System|Backup System]]
