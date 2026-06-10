---
title: Vault Evaluation 9 — June 2026
date: 2026-06-09
tags: [vault-meta, evaluation]
---

# Vault Evaluation 9 — June 2026

> Evaluation #9. Conducted June 9, 2026 (automated scheduled run). Focus: course structure, quarterly planning, Reviews & Planning procedure, Vault Quick Reference, dashboard integrity, quest progress, HAM Radio Week 1.
>
> **Note on numbering:** The Evaluations folder currently contains evals 1–7, 14, and 15. Evaluations 8–13 are missing from the folder (likely intermediate automated runs that were not saved, or naming drift). This evaluation is filed as #9 per the scheduled task definition. _docs.md has been updated to reflect this as the new "Latest."

---

## Executive summary

The vault is in good operational health. Daily note habit is strong (20 consecutive days), the HAM Radio course 5-file structure is fully built and correct, quarterly planning infrastructure is wired, and both quests are active with updated progress values. Three issues require action: (1) `Reviews & Planning — Complete Procedure` is linked from the dashboard footer but the file does not exist — a broken link every session; (2) `quarterly-reviews.base` is built and populated but not transcluded in the dashboard; (3) the HAM Radio Progress file has only a placeholder entry (duration:: 0) for the first session — real study time from June 8–9 needs to be logged. The Vault State "What needs attention" table has stale quest percentages.

---

## Scorecard

| Area | Status | Notes |
|---|---|---|
| Dashboard integrity | 🟡 | quarterly-reviews.base missing; broken Reviews & Planning link; Version Log link broken |
| HAM Radio course structure | 🟢 | All 5 standard files present and correct |
| Quarterly planning system | 🟡 | Template + QuickAdd wired ✅ — but base not in dashboard |
| Reviews & Planning procedure | 🔴 | File referenced everywhere, does not exist |
| Vault Quick Reference (Commander) | 🟢 | Accurate, complete, all IDs match actual QuickAdd config |
| Quest progress — Health Reset Q3 | 🟡 | Active · progress: 25 in frontmatter · Vault State still shows 15% |
| Quest progress — New Role Q3 | 🟡 | Active · progress: 12 in frontmatter · Vault State still shows 10% |
| HAM Radio study progress | 🟡 | Week 1 started · G1A–G1D studied Jun 9 · Progress file placeholder only |
| Daily notes habit | 🟢 | 20/20 days complete · vitals filled · energy field used |
| Vault State currency | 🟡 | Quest % stale; eval count stale |
| Zettelkasten | 🟡 | 28 PNs (22 stubs) · 150 fleeting · no triage yet |

---

## Findings by area

### 1. Dashboard (00-Home/00-Home.md)

**What was checked:** All `![[]]` transclusions, footer links, navigation table, Quick Reference placement.

**Results:**

✅ **Quick Reference link is near the top** — `[[_docs/Commander — Quick Reference|⌨️ Quick Reference]]` appears immediately below the H1 heading.

✅ **courses.base is present and transcluded** — `![[00-Home/courses.base]]` renders under "Active courses."

✅ **All other base panels present:** quests, daily-focus, vitals, zettelkasten, fleeting-backlog, troubleshooting-recent, work-reference-activity, weekly-reviews, monthly-reviews, plan-actual.

🔴 **quarterly-reviews.base is NOT transcluded in the dashboard.** The base file exists at `00-Home/quarterly-reviews.base` and is correctly built (filters `type == "quarterly-review"` OR `type == "quarterly-planning"`), but there is no `![[00-Home/quarterly-reviews.base]]` line in `00-Home.md`. The "Reviews" section ends at `![[00-Home/monthly-reviews.base]]`. Add a "Quarterly planning" panel.

🔴 **`Reviews & Planning — Complete Procedure` is a broken link.** The dashboard Procedures footer reads:
```
[[_docs/Reviews & Planning — Complete Procedure|Reviews & Planning]]
```
No file by that name exists in `_docs/`. This generates an unresolved link on every dashboard open. Either create the file or remove the link.

🟡 **`Vault Version Log` is a broken link.** The footer version line reads:
```
`v1.4.0` · [[_docs/Vault Version Log|Version Log]] · ...
```
The `_version/` folder exists but is empty — no version log file. Either create `_docs/Vault Version Log.md` or remove the link from the footer.

✅ **`08-Work-Notes` navigation entry is valid.** The folder exists at `08-Work-Notes/` with `08-Work-Notes.md`, `Work-Notes-Guide.md`, and `work-notes.base`.

---

### 2. HAM Radio course structure

**What was checked:** All files in `05-Resources/Courses/HAM-Radio/`, the 5-file standard, Progress Tracker inline fields, Dashboard DataviewJS block.

**Results:**

✅ **All 5 standard files present:**
| File | Type field | Status |
|---|---|---|
| `HAM Radio General License — Overview.md` | `course-overview` | ✅ |
| `General License Syllabus.md` | (tags only) | ✅ |
| `General License Study Resources.md` | — | ✅ |
| `HAM Radio General License — Progress.md` | `course-progress` | ✅ |
| `HAM Radio General License — Reference.md` | `course-reference` | ✅ |

✅ **Progress Tracker inline fields correctly documented.** The session log format `[duration:: N]` and `[score:: N%]` is documented in the file header. The DataviewJS dashboard correctly sums duration, computes percentage of 40h estimated effort, and renders a score trend chart.

🟡 **Week 1 session is a placeholder.** Current session log entry:
```
- 2026-06-08 · Week 1 / G1A-G1B · [duration:: 0] · Notes: *first session — starting G1*
```
Duration is 0. The June 9 daily note confirms G1A, G1B, G1C, and G1D were all studied that day (tasks marked ✅), but no session entry for June 9 exists in the Progress file. The Progress file needs real session entries logged.

✅ **Overview correctly maps all supplemental files** in a table — the additional files (Ham radio.md, Ham radio digital modes.md, Portable Operating, POTA guide, Master Reference) are explained with context for when to use them. These are extras beyond the 5-file standard, handled correctly.

---

### 3. Quarterly planning

**What was checked:** Template, QuickAdd wiring, quarterly-reviews.base, Quarterly folder.

**Results:**

✅ **Quarterly Planning Template exists** at `_templates/Quarterly Planning Template.md` with correct frontmatter (`type: quarterly-planning`, `quests_planned: 0`, `tags: [review/quarterly]`).

✅ **QuickAdd "New Quarterly Plan" is wired.** QuickAdd config shows:
```
New Quarterly Plan | a4f7c2e1-8b3d-4f9a-b621-7e5d0c3a1f84
```
This is a new choice not documented in Commander Quick Reference — update that file to include this choice ID.

✅ **quarterly-reviews.base correctly handles both types.** The base file filters `type == "quarterly-review"` OR `type == "quarterly-planning"` and renders both in one table. The `2026-Q2-review.md` file in `03-Reviews/Quarterly/` will appear here correctly.

🔴 **quarterly-reviews.base is not in the dashboard** (see Dashboard section above). The base is built but invisible until the transclusion is added.

---

### 4. Reviews & Planning procedure

**What was checked:** Whether `_docs/Reviews & Planning — Complete Procedure.md` exists.

🔴 **File does not exist.** The dashboard footer links to it, and the task description for this evaluation listed it as a new addition from June 6, but no such file is present in `_docs/`. The existing `Vault Systems — Complete Procedure.md` covers daily notes, focus log, vitals, weekly/monthly/quarterly reviews, and quest management — it likely covers the same ground this file would. Two options:

- **Option A (recommended):** Create `Reviews & Planning — Complete Procedure.md` as a focused extract covering only the review and planning workflow (weekly → monthly → quarterly → planning loop). Link to Vault Systems as the parent.
- **Option B:** Remove the broken link from the dashboard and _docs.md, and update Vault Systems to ensure the review/planning loop is well-documented.

---

### 5. Vault Quick Reference (Commander — Quick Reference.md)

**What was checked:** Hotkeys vs actual hotkeys.json, QuickAdd choice IDs vs actual QuickAdd config, Commander button IDs.

✅ **All documented hotkeys appear accurate.**

✅ **All 5 QuickAdd choice IDs in the document match the actual QuickAdd config:**
| Choice | Documented UUID | Actual UUID | Match |
|---|---|---|---|
| New Permanent Note | `13aab76c-...` | `13aab76c-...` | ✅ |
| New Troubleshooting Log | `6a34ec86-...` | `6a34ec86-...` | ✅ |
| Add to Daily Capture | `73fd090a-...` | `73fd090a-...` | ✅ |
| Weekly Calendar | `1838ef3d-...` | `1838ef3d-...` | ✅ |
| Next Week Calendar | `35b1ab86-...` | `35b1ab86-...` | ✅ |

🟡 **Three new QuickAdd choices are not documented in Commander Quick Reference:**
- `New Quarterly Plan` — `a4f7c2e1-8b3d-4f9a-b621-7e5d0c3a1f84`
- `New Course Package` — `b2e9d4f7-3c1a-4e8b-a705-9f6c2d0b4e31`
- `Vault Backup` — `c7f3a2e1-5d8b-4c9a-b041-3e6f1d0a7c84`
- `Triage Fleeting Note` — `0c08f50f-d177-4ed5-b418-e89f449ed9cf`
- `Work Note` — `a3297057-51bc-44ab-a158-4d9b9b1d5b0b`

Add these to the QuickAdd choice IDs table in the reference file.

🟡 **`Ctrl+Shift+M` orphaned hotkey is documented but not fixed.** The note about it is accurate — it should be deleted in Settings → Hotkeys.

---

### 6. Quest progress

**What was checked:** Frontmatter `progress:` and `status:` fields, milestone completion state, Vault State currency.

| Quest | Frontmatter progress | Vault State says | Status |
|---|---|---|---|
| Health Reset Q3 | 25 | 15% | 🟡 Stale |
| New Role Integration Q3 | 12 | 10% | 🟡 Stale |

✅ **Both quests are Active.** Correct.

✅ **Health Reset Q3 milestone 1 (Month 1, Week 1–2 tasks) is complete** — two sub-tasks checked with ✅ 2026-06-04 and ✅ 2026-06-07. Progress 25 is consistent with completing the first Month 1 sub-milestone. The progress comment says "each of the 4 top-level milestones = 25 points" but progress is at 25 with Month 1 not fully done — this is a judgment call, may reflect partial credit.

🟡 **Vault State "What needs attention" table shows 15%/10%** — stale. Update both values to match frontmatter.

✅ **Daily note habits are being tracked.** June 9 note shows health habit checkboxes (🏃 move, 😴 bedtime, 🥗 dietary) actively used.

---

### 7. HAM Radio study progress

✅ **Week 1 started on schedule.** June 8 daily note had "Read G1A + G1B" as a task; June 9 daily note shows G1A+G1B ✅ and G1C+G1D ✅ completed.

🟡 **Progress file needs real session logging.** Current state: one placeholder entry with `[duration:: 0]`. The June 9 study session (G1A–G1D) was real work — log it:
```
- 2026-06-09 · Week 1 / G1A-G1D · [duration:: XX] · Notes: G1A-G1D read, flashcards in progress
```

No practice exam taken yet (expected — first week).

✅ **Spaced repetition queue pre-populated** with 5 key concept areas (HF privileges table, ionospheric layers, dB rules, amplifier classes, dipole formula). Good setup for later weeks.

---

### 8. Vault State currency

The Vault State file is dated June 8, 2026. The following items are stale as of June 9:

| Field | Current value | Correct value |
|---|---|---|
| Active quests — Health Reset % | 15% | 25% |
| Active quests — New Role % | 10% | 12% |
| Evaluations count | 14 | 15+ (after this eval) |
| Daily notes count | 19 | 20 |
| HAM Radio status | "started Jun 8, Week 1: G1" | G1A–G1D in progress |

---

### 9. New inconsistencies discovered

🟡 **`_docs.md` Audit History table is truncated.** The file was read and the last visible row ends mid-sentence: `| [[_docs/Evaluations/Vault Evaluation 6 - June 2026\|Vault Eva`. This suggests the table continues but the file may have a rendering issue or partial write. Check the full file in Obsidian.

🟡 **Evaluation numbering gap.** Files in `_docs/Evaluations/` are: 1, 2, 3, 4, 5, 6, 7, 14, 15. Evaluations 8–13 do not exist as files. This evaluation is #9 by task definition. The gap suggests intermediate automated evaluations were run but not saved as files, or the numbering was incremented during sessions without writing. Going forward, use sequential numbering from the last written file (15), or accept the gap and continue with #16 after this one.

🟡 **Periodic Notes — Quarterly format** uses `YYYY-[Q]Q[-review]` which always appends `-review`. A Quarterly Planning note created via QuickAdd would use a different naming convention than a Quarterly Review note created via Periodic Notes. The `quarterly-reviews.base` handles both `type` values correctly, but the filenames will differ. Document this in the Reviews & Planning procedure when it's created.

---

## Priority action list

### 🔴 Must fix

| # | Action | Where |
|---|---|---|
| 1 | Create `_docs/Reviews & Planning — Complete Procedure.md` OR remove broken link from dashboard footer | Dashboard + _docs/ |
| 2 | Add `![[00-Home/quarterly-reviews.base]]` to `00-Home/00-Home.md` under Reviews section | 00-Home.md |
| 3 | Log real study sessions in HAM Radio Progress file (Jun 8–9, G1A–G1D) | HAM Radio General License — Progress.md |

### 🟡 Should fix this week

| # | Action | Where |
|---|---|---|
| 4 | Update Vault State quest percentages: Health Reset 25%, New Role 12% | Vault State - June 2026.md |
| 5 | Add 5 new QuickAdd choice IDs to Commander Quick Reference | Commander — Quick Reference.md |
| 6 | Create `_docs/Vault Version Log.md` OR remove broken `[[_docs/Vault Version Log\|Version Log]]` from dashboard footer | Dashboard + _docs/ |
| 7 | Delete orphaned `Ctrl+Shift+M` hotkey in Settings → Hotkeys | Obsidian settings |

### 🟢 Low priority / ongoing

| # | Action | Where |
|---|---|---|
| 8 | Triage 10+ fleeting notes during W24 Sunday review | 06-Zettelkasten/Fleeting/ |
| 9 | Fill 1 PN stub body (Explanation + Evidence + Cross-links) | 06-Zettelkasten/Permanent/ |
| 10 | Populate `_reference/Work/` (contacts, site access, key systems) | _reference/Work/ |
| 11 | Log a practice exam score baseline in HAM Radio Progress (end of Week 1) | HAM Radio General License — Progress.md |

---

## What's working well

**Daily note habit is excellent.** 20 consecutive days, vitals filled every day, energy field in use, focus log active. The habit infrastructure is fully operational.

**HAM Radio course architecture is solid.** The 5-file structure (Overview → Syllabus → Resources → Progress → Reference) is well-built. The Progress Tracker DataviewJS block is the most sophisticated piece in the vault — when sessions are logged, it will provide real visibility into study momentum.

**Quarterly planning is infrastructure-complete.** Template, QuickAdd choice, and base file are all in place. One transclusion away from appearing on the dashboard.

**Commander Quick Reference is accurate.** All documented QuickAdd UUIDs match the actual plugin config — a significant maintenance win. The troubleshooting section is practical and correct.

**Work Knowledge is substantial.** 38 notes across 5 subfolders, 4 domain MOCs, and 22 PN stubs covering the automation engineering domain. This is a strong professional knowledge base taking shape.

**08-Work-Notes folder is live.** A new folder with a guide, base view, and at least one note — the capture-and-reference system for active work is expanding correctly.

---

*Previous evaluation: [[_docs/Evaluations/Vault Evaluation 7 - June 2026|Vault Evaluation 7]] (Jun 5) · [[_docs/Evaluations/Vault Evaluation 14 - June 2026|Vault Evaluation 14]] (Jun 8)*
