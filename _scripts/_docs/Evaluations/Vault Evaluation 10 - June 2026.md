---
title: Vault Evaluation 10 — June 2026
date: 2026-06-07
tags: [vault-meta, evaluation]
---

# Vault Evaluation 10 — June 2026

*Full vault audit — templates, queries, plugins, scripts, daily notes, reviews, dashboard, base files*

**Previous:** [[_docs/Evaluations/Vault Evaluation 9 - June 2026|Evaluation 9]] | **State doc:** [[_docs/Vault State - June 2026|Vault State]]

---

## Snapshot

| Metric | Count | Delta since Eval 9 |
|---|---|---|
| Daily notes | 18 | +1 (Jun 7 added) |
| Fleeting notes | 150 | No change |
| Literature notes | 38 | No change |
| Permanent notes | 6 | No change |
| Weekly reviews | 5 | +1 (W24 created) |
| Templates | 25 | No change |
| Scripts (active) | 6 | No change |
| Community plugins | 17 | No change |
| Active quests | 2 | Health Reset (20%) · New Role Integration (10%) |

---

## Work completed this session (June 7 — continued)

### Weekly review fixes

| Issue | Fix applied |
|---|---|
| Periodic Notes "Unable to create new file" on Sunday | Root cause: ISO week format (`YYYY-[W]WW`) and locale week start (Sunday) produced divergent lookup keys. Fixed by switching format to `gggg-[W]ww` (locale-aware tokens) in `periodic-notes/data.json` and the Weekly Review Template. |
| Template duplicate content (sections 6–9 appeared twice) | Removed duplicate block from `_templates/Weekly Review Template.md` |
| `mod()` unrecognized in Dataview DQL | Replaced `string(mod(focus_minutes, 60))` with `string(focus_minutes % 60)` in W20, W21, W22, W23, W24, and the Weekly Review Template |
| Date range queries showing wrong week in W24 | Flipped range from `date - 6 days → date` (ISO week end) to `date → date + 6 days` (Sunday-start week) in W24 and the template |
| Date range header missing | Added `*MMM D – MMM D, YYYY*` subtitle to Weekly Review Template and hardcoded in W24 |

### Week-start change: implications

The weekly note format changed from ISO (`YYYY-[W]WW`, Monday start) to locale (`gggg-[W]ww`, Sunday start). Effects:

- **W20–W23**: Existing ISO-numbered notes remain accessible via file explorer / Ctrl+O. `Ctrl+Shift+W` will not open them (they don't match the new locale-week filenames). No action needed — they are complete.
- **W24 onward**: Sunday = first day. Pressing `Ctrl+Shift+W` on any day of the week opens the correct note.
- The **Calendar plugin** (`localeOverride: "system-default"`, `weekStart: "locale"`) confirms Sunday start on US Windows — consistent with the new format.

---

## Issues found and fixed

### ✅ Fixed: `mod()` in all weekly reviews

`mod(focus_minutes, 60)` is not a valid Dataview DQL function. Replaced with `focus_minutes % 60` in all 5 weekly review notes and the template.

### ✅ Fixed: W24 date range direction

W24 template queries now correctly span `date` (Sunday) → `date + 6 days` (Saturday).

---

## 🔴 Errors — fix immediately

*(None found in this audit.)*

---

## 🟡 Stale content — fix soon

### 1. `New Course Package.md` uses deprecated Templater API

`_templates/New Course Package.md` line 6 calls `tp.file.find_tfile(tp.file.path(true))`. The `tp.file.find_tfile` method was removed in newer Templater versions. If the New Course Package workflow is used, it will fail silently or error.

**Fix:** Replace with `app.vault.getAbstractFileByPath(tp.file.path(true))` or test whether the current Templater version still supports it.

### 2. Health Reset Q3 progress updated to 20%

Quest note shows `progress: 20` but Eval 9 and Claude Project Instructions still say 15%. Update the project instructions.

### 3. `daily-focus.base` uses old ISO week format in display

The `week_num` formula uses `date(date).format("YYYY-[W]WW")`. For notes created before the week-start change (W20–W23), this matches their filenames. For W24 onward, the displayed week number will be ISO-based (W24 = ISO W24 = same number this week, but will diverge at Sunday week boundaries in future). Low impact — display only.

**Fix (optional):** Change to `gggg-[W]ww` for consistency with new format.

### 4. June monthly review date is June 3

`03-Reviews/Monthly/2026-06.md` has `date: 2026-06-03`. The monthly template places the date of creation, not the month-end. This doesn't affect Dataview queries (which filter by `month:` field, not `date:`), but may cause confusion. The May review correctly has `date: 2026-05-31`.

---

## 🔵 Efficiency gaps — address when capacity allows

### 5. Fleeting note backlog — 150, unchanged

Still 150 fleeting notes. No triage has occurred. At 10/week this clears mid-September. Recommendation: one 2-hour session to bulk-archive anything older than 60 days with no action potential.

### 6. Permanent notes stuck at 6

Literature Processing Guide has 70+ ready claims. Target was 10 by end of June — 4 more needed in 3 weeks. Tier 1 queue: Feel Good Productivity, Deep Work, Stolen Focus, Atomic Habits.

### 7. W23 weekly review has no written reflection

`2026-W23.md` has `rating: 3.7` and `focus_minutes: 3297` in frontmatter but the body sections (wins, quest progress, reflection, next-week intention) appear to be blank or minimal. This was the final ISO-format weekly review.

### 8. Work calendar still not in scripts

`weekly-calendar.js` and `next-week-calendar.js` both have a `work_ics_url` field in their CONFIG (already wired up). Just needs the Argenta calendar ICS URL entered in QuickAdd → Weekly Calendar → script settings.

### 9. New Role Integration quest at 10% — 12 days in

Quest is at risk. No new troubleshooting logs created this week. CP 12 Bottom Agitator issue remains uncaptured beyond the stub.

### 10. W23 DataviewJS block still uses old date range

W23's DataviewJS block (`&& p.date >= ... - dv.duration("6 days")`) uses the old backward range. Since W23's `date: 2026-06-07` with the old logic gives Jun 1–7, this is actually correct for that note's dates — no functional error. Documenting for completeness.

---

## Plugin / config findings

| Item | Status |
|---|---|
| Dataview JS enabled | ✅ `enableDataviewJs: true` |
| Linter force-yaml-escape | ✅ Disabled |
| CSS snippets (`nav-polish`, `bases-numeric-columns`) | ✅ Enabled in `appearance.json` |
| Calendar plugin weekStart | `locale` / `system-default` → Sunday on US Windows ✅ |
| Commander leftRibbon (5 buttons) | ✅ All correct |
| Commander pageHeader (6 buttons) | ✅ All correct |
| Periodic Notes weekly format | Updated to `gggg-[W]ww` ✅ |
| Templater folder templates (13 folders) | ✅ All mapped |
| QuickAdd choices (9) | ✅ All IDs intact |

---

## 📋 Summary action list

| Priority | Item | Effort |
|---|---|---|
| 🟡 | Fix `tp.file.find_tfile` in New Course Package template | 5 min |
| 🟡 | Update Claude Project Instructions — Health Reset progress 15%→20%, Eval count 9→10 | 5 min |
| 🟡 | Update `daily-focus.base` week_num formula to `gggg-[W]ww` | 2 min |
| 🔵 | Enter Argenta work calendar ICS URL in QuickAdd → Weekly Calendar settings | 5 min |
| 🔵 | Triage fleeting notes — one 2-hr session, target <100 | 2 hrs |
| 🔵 | Write 4 permanent notes from Lit Processing Guide Tier 1 (to hit 10 by Jun 30) | 80 min |
| 🔵 | Complete W23 weekly review body (wins, reflection, next-week intention) | 15 min |
| 🔵 | Create CP 12 Bottom Agitator Troubleshooting Log | 20 min |

---

**Links:** [[_docs/Evaluations/Vault Evaluation 9 - June 2026|Evaluation 9]] | [[_docs/Vault State - June 2026|Vault State]] | [[_docs/Slip Box Master Guide|Master Guide]]
