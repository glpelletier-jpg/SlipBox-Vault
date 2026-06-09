---
type: vault-audit
title: Vault Evaluation 14 — June 2026
date: 2026-06-08
vault_version: 1.4.0
tags: [vault-audit, evaluation]
---

# Slip Box — Vault Evaluation 14
*Audit date: June 8, 2026 · Vault version: 1.4.0 · Total notes: 508 .md files*

---

## Executive Summary

| Dimension | Score | Finding |
|---|---|---|
| Filename encoding | 🔴 Critical | 34 files with ΓÇö corruption — fix from Eval 13 was NOT applied |
| Broken wikilinks | 🔴 Critical | MOC cross-links all broken (naming mismatch) |
| Dataview queries | ✅ Fixed | `focus_hours` → `focus_minutes` corrected in Jun monthly + Q2 quarterly reviews |
| .base files | 🟡 Medium | `vitals.base` filter syntax suspect; orphan formula in `focus-log.base` |
| Frontmatter | 🟡 Medium | 1 type mismatch, quest notes missing `type:` field |
| Templates | 🟡 Medium | Typo in template filename; orphan formula refs in monthly template |
| QuickAdd config | 🟡 Medium | `data.json` is truncated (malformed JSON) |
| Documentation | 🟢 Low | `_reference/Work` described as empty but has 5 notes |
| Duplicate notes | 🟢 Low | 26 book titles exist in both Books and Literature (by design, but ambiguous) |
| Structure | 🟢 Good | All folder notes present, templates wired correctly, homepage config correct |

---

## 🔴 CRITICAL — Fix Immediately

### 1. Filename encoding corruption — 34 files (RECURRING)

**Status:** Evaluation 13 reported this fixed. It was NOT applied. All 34 files still have `ΓÇö` (U+0393 U+00C7 U+00F6) where `—` (em dash, U+2014) belongs.

**Affected files:**
```
_docs/ (11 files)
  Commander ΓÇö Quick Reference.md
  Life Compass ΓÇö Complete Procedure.md
  Zettelkasten ΓÇö Complete Procedure.md
  Vault Systems ΓÇö Complete Procedure.md
  reMarkable Integration ΓÇö Complete Procedure.md
  Reviews & Planning ΓÇö Complete Procedure.md
  Android Shortcuts ΓÇö Setup Guide.md
  Bixby Routines ΓÇö Setup Guide.md
  Device Workflows ΓÇö Complete Guide.md
  Galaxy Watch Ultra ΓÇö Personalized Setup.md
  Google Keep ΓÇö Vault Workflow.md

05-Resources/Courses/ (23 files — all Overview/Progress/Reference/Resources/Syllabus for):
  HAM Radio General License ΓÇö (3 files)
  Instrumentation ΓÇö (5 files)
  OT Networking ΓÇö (5 files)
  PLC Architecture ΓÇö (5 files)
  Process Safety (IEC 61511) ΓÇö (5 files)
```

**Impact:** Every wikilink to these files is broken. Links in `life-compass.md`, `06-Zettelkasten.md`, `reMarkable.md`, `Procedure Evaluation - June 2026.md`, and all course Overview/Progress files that cross-link between their own course set.

**Root cause:** Confirmed in Eval 13 — your zip/archive tool double-encodes UTF-8 em-dash bytes. The fix was documented but the rename script was not run.

**Fix — run this PowerShell from the vault root:**
```powershell
# Paste into PowerShell, run from C:\Vault\Slip Box
$pairs = @(
  @("_docs\Commander #U0393#U00c7#U00f6 Quick Reference.md",         "_docs\Commander — Quick Reference.md"),
  @("_docs\Life Compass #U0393#U00c7#U00f6 Complete Procedure.md",   "_docs\Life Compass — Complete Procedure.md"),
  @("_docs\Zettelkasten #U0393#U00c7#U00f6 Complete Procedure.md",   "_docs\Zettelkasten — Complete Procedure.md"),
  @("_docs\Vault Systems #U0393#U00c7#U00f6 Complete Procedure.md",  "_docs\Vault Systems — Complete Procedure.md"),
  @("_docs\reMarkable Integration #U0393#U00c7#U00f6 Complete Procedure.md", "_docs\reMarkable Integration — Complete Procedure.md"),
  @("_docs\Reviews & Planning #U0393#U00c7#U00f6 Complete Procedure.md",     "_docs\Reviews & Planning — Complete Procedure.md"),
  @("_docs\Android Shortcuts #U0393#U00c7#U00f6 Setup Guide.md",     "_docs\Android Shortcuts — Setup Guide.md"),
  @("_docs\Bixby Routines #U0393#U00c7#U00f6 Setup Guide.md",        "_docs\Bixby Routines — Setup Guide.md"),
  @("_docs\Device Workflows #U0393#U00c7#U00f6 Complete Guide.md",   "_docs\Device Workflows — Complete Guide.md"),
  @("_docs\Galaxy Watch Ultra #U0393#U00c7#U00f6 Personalized Setup.md", "_docs\Galaxy Watch Ultra — Personalized Setup.md"),
  @("_docs\Google Keep #U0393#U00c7#U00f6 Vault Workflow.md",        "_docs\Google Keep — Vault Workflow.md")
)
foreach ($p in $pairs) {
  if (Test-Path $p[0]) { Rename-Item -LiteralPath $p[0] -NewName (Split-Path $p[1] -Leaf); Write-Host "Fixed: $($p[1])" }
  else { Write-Host "Not found (already fixed?): $($p[0])" }
}
# Then do the same for all 23 course files — replace ΓÇö with — in folder 05-Resources/Courses/
Get-ChildItem "05-Resources\Courses" -Recurse -Filter "*#U0393*" | ForEach-Object {
  $newName = $_.Name -replace [char]0x0393+[char]0x00C7+[char]0x00F6, [char]0x2014
  Rename-Item -LiteralPath $_.FullName -NewName $newName
  Write-Host "Fixed: $newName"
}
```

> **Permanent fix:** After renaming, do NOT use Windows Explorer's built-in zip. Use 7-Zip → Add to archive → check "UTF-8 filenames". Or rename all em-dash files to use ` - ` (space-hyphen-space) to eliminate the problem entirely.

---

### 2. MOC cross-links broken — naming convention mismatch

**Files with broken links:** `MOC Instrumentation.md`, `MOC OT Networking.md`, `MOC PLC Architecture.md`, `MOC Process Safety (IEC 61511).md`, `Automation Engineering MOC.md`, and the Master Guide.

**Problem:** The MOC files contain cross-links like `[[MOC — PLC Architecture]]`, `[[MOC — Process Safety (IEC 61511)]]` etc. But the actual files are named `MOC PLC Architecture.md` (no em dash). The `fix-moc-names.ps1` script in the vault root was supposed to rename `MOC --- PLC Architecture.md` → `MOC — PLC Architecture.md`, but the source files already had the dashes stripped — so the script did nothing.

**Fix:** Either rename the 4 MOC files to add the em dash, or update the cross-links to remove the em dash. Renaming is cleaner:
```powershell
# From vault root
Rename-Item "06-Zettelkasten\MOC\MOC Instrumentation.md"             "MOC — Instrumentation.md"
Rename-Item "06-Zettelkasten\MOC\MOC OT Networking.md"               "MOC — OT Networking.md"
Rename-Item "06-Zettelkasten\MOC\MOC PLC Architecture.md"            "MOC — PLC Architecture.md"
Rename-Item "06-Zettelkasten\MOC\MOC Process Safety (IEC 61511).md"  "MOC — Process Safety (IEC 61511).md"
```
Then let Obsidian auto-update all links on next vault open.

---

## 🟠 HIGH — Fix Soon

### 3. Monthly and quarterly review queries use wrong field name ✅ FIXED

**Affected files:**
- `03-Reviews/Monthly/2026-06.md`
- `03-Reviews/Quarterly/2026-Q2-review.md`

**Was:** `focus_hours AS "Focus hrs"` — field does not exist on weekly-review notes.
**Fixed:** Changed to `focus_minutes AS "Focus (min)"` in both files. Template was already correct.

### 4. ~~QuickAdd `data.json` is truncated~~ — RETRACTED

This finding was a false positive. The Linux filesystem mount had a stale cache of the file. Reading directly from the Windows host confirms the file is complete and valid JSON (421 lines, closes cleanly with `}`). No action needed.

---

## 🟡 MEDIUM — Address in Next Review

### 5. `vitals.base` filter uses string literal instead of expression

The filter entry `- "!pulse.isEmpty()"` in `vitals.base` is a YAML string, not a Bases filter expression. Valid syntax would be `- pulse != null` (or `- pulse > 0` to also exclude blank entries). Depending on how Obsidian Bases handles unrecognised filter strings, this either silently fails (shows all daily notes including those without vitals data) or errors.

**Fix in `00-Home/vitals.base`:**
```yaml
# Change this:
    - "!pulse.isEmpty()"
# To this:
    - pulse > 0
```

### 6. `focus-log.base` has orphan `Untitled` formula and column

In `00-Home/focus-log.base`, the formula `Untitled: ""` generates an empty string and is included as a visible column in the "Focus log (last 14 days)" view. It produces a blank column with no label. Cosmetic issue only.

**Fix:** Remove both the formula definition and the `formula.Untitled` entry from the view `order:` list.

### 7. `quests.base` will include the folder note

`02-Quests/02-Quests.md` has no `status:` field. The filter `status != "Abandoned"` evaluates as true for null (undefined != "Abandoned"), so the folder note appears in quest views. It also references `[[attachments/my-banner.jpg]]` (missing file — see item 11).

**Fix:** Add `- file.name != "02-Quests"` to the `quests.base` filters.

### 8. `type: literature-note` inconsistency

One literature note uses the wrong type value:
- `06-Zettelkasten/Literature/Ali Abdaal - The 3 Energy Menus (LifeOS).md` → `type: literature-note`

Standard is `type: literature`. Any base or Dataview query filtering `type == "literature"` will miss this note. The `zettelkasten.base` doesn't query literature notes, but future queries might.

**Fix:** Change `type: literature-note` → `type: literature` in that file's frontmatter.

### 9. Quest notes missing `type:` field

The two active quest notes (`Health-Reset-Q3-2026.md`, `New-Role-Integration-Q3-2026.md`) and the folder note have no `type:` field. The Quest Template has `dataview-ignore: true` (which was correctly NOT inherited by the actual quest files since they were created separately), but it also lacks `type: quest`. The `quests.base` queries by folder so this doesn't break anything currently, but it's inconsistent.

**Fix:** Add `type: quest` to both active quest files' frontmatter.

### 10. `weekly-reviews.base` unused formula

The formula `in_current_quarter` is computed but never referenced in any view filter. Dead weight.

**Fix:** Remove `current_q_start` and `in_current_quarter` from `weekly-reviews.base` formulas, or use `in_current_quarter` as a filter on the "This quarter" view (which currently has an inline date formula for the same purpose).

---

## 🟢 LOW / INFORMATIONAL

### 11. Missing files causing broken links

The following files are genuinely missing (not encoding issues, not template placeholders):

| Missing file | Referenced from |
|---|---|
| `attachments/my-banner.jpg` | `02-Quests/02-Quests.md` cover property |
| `Pasted image 20260608162228.png` | Unknown note (pasted image never saved) |
| `MOC — AVEVA Platform` | Unknown source — no AVEVA MOC exists or is planned |

### 12. 28 PN permanent notes referenced in MOC files but not yet written

The 4 technical MOC files (Instrumentation, OT Networking, PLC Architecture, Process Safety) contain `[[PN — ...]]` cross-links to permanent notes that don't exist yet. These are intentional forward-references to notes on your writing backlog, but they show as broken links in Obsidian's graph view and link pane. This is expected given you have 70+ claims ready in the Literature Processing Guide — not a defect, but worth noting.

### 13. 11 LIT literature notes referenced but not yet created

Same situation as above — MOC files reference `[[LIT — IEC 61511-1]]`, `[[LIT — NIST SP 800-82 Rev 3]]`, etc. that don't exist. These are the technical reference documents from your _attachments folder that haven't been processed into literature notes yet.

### 14. Template filename typo

`_templates/Automation-Liturature-Template.md` — "Liturature" should be "Literature". This template is not wired to any Templater folder rule (the Literature folder uses `Literature Note Template.md`), so it's effectively unused. The typo makes it harder to find.

### 15. `_reference/Work` documentation is stale

`_docs/Vault State - June 2026.md` and the Master Guide describe `_reference/Work` as "empty — needs population." It actually has 5 notes: `Contacts.md`, `Field Notes.md`, `Key Systems.md`, `Site Map.md`, `Work.md`. Update the documentation to reflect current state.

### 16. `fix-moc-names.ps1` at vault root — should be archived

After the MOC rename is complete (item 2 above), move this script to `_archive/scripts/` to keep the vault root clean. Same for `fix-moc-names.ps1`.

### 17. Duplicate note stems (Books + Literature)

26 book titles exist in both `05-Resources/Books/` and `06-Zettelkasten/Literature/` with identical filenames (e.g. `Atomic Habits.md`, `How to Take Smart Notes.md`). This is by design — the Book note is the reading tracker, the Literature note is the processed notes. However, Obsidian's link resolver uses shortest unambiguous path. A bare `[[Atomic Habits]]` link could resolve to either. Use full paths `[[05-Resources/Books/Atomic Habits|...]]` or `[[06-Zettelkasten/Literature/Atomic Habits|...]]` where the distinction matters.

### 18. Git working tree has 30+ uncommitted changes

`git status` shows modifications across .obsidian config files, base files, quest notes, home dashboard, and weekly calendar files — none of it committed. The last commit was June 5. Run `vault-backup.bat` to commit and push.

---

## ✅ CONFIRMED WORKING

- **Homepage:** `refreshDataview: true` — confirmed ✅
- **Templater:** `user_scripts_folder: "_scripts"` — confirmed ✅
- **Commander:** All 6 ribbon + 6 page header buttons have `mode: any` — confirmed ✅
- **QuickAdd IDs:** All 5 documented choice IDs present in config — confirmed ✅
- **Daily note frontmatter:** All 20 daily notes have complete schema (type, date, steps, focus_minutes, dataview-ignore) — confirmed ✅
- **Permanent notes:** All 6 have `type: permanent` — confirmed ✅
- **Weekly reviews:** W20–W24 have correct `type: weekly-review` and `focus_minutes` field — confirmed ✅
- **All .base files referenced in 00-Home.md exist** — 8/8 confirmed ✅
- **Course Overview files:** All 5 active courses have `type: course-overview` — confirmed ✅
- **"Binary file" grep warnings** on W24 and a few other files are false positives — all files are valid UTF-8 (emoji causes grep to flag them) — confirmed ✅
- **Vault structure:** All 15 folder notes present (`00-Home.md` through `_docs.md`), Templater folder rules wired to correct templates — confirmed ✅
- **`_scripts/`:** All expected scripts present (`create-course.js`, `weekly-calendar.js`, `next-week-calendar.js`, `vault-backup.bat`, `daily_schedule.js`, `fleeting-triage.js`) — confirmed ✅

---

## Action Priority Queue

| Priority | Action | Effort |
|---|---|---|
| 🔴 1 | Run PowerShell to fix 34 corrupt em-dash filenames | 5 min |
| 🔴 2 | Rename 4 MOC files to add em dash | 2 min |
| ✅ | ~~Fix `focus_hours` → `focus_minutes`~~ — done | — |
| 🟡 5 | Fix `vitals.base` filter: `"!pulse.isEmpty()"` → `pulse > 0` | 1 min |
| 🟡 6 | Fix `focus-log.base`: remove orphan `Untitled` formula and column | 1 min |
| 🟡 7 | Add `- file.name != "02-Quests"` filter to `quests.base` | 1 min |
| 🟡 8 | Fix `type: literature-note` → `type: literature` in Ali Abdaal LIT note | 1 min |
| 🟡 9 | Add `type: quest` to active quest files | 1 min |
| 🟢 10 | Run vault-backup.bat to commit 30+ pending changes | 2 min |
| 🟢 11 | Update _reference/Work entry in documentation | 5 min |
| 🟢 12 | Move `fix-moc-names.ps1` to `_archive/scripts/` | 1 min |

---

*Previous evaluation: [[Vault Evaluation 13 - June 2026]]*
