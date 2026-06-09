---
title: Vault Evaluation 12 — June 2026
date: 2026-06-07
tags: [vault-meta, evaluations]
session: cowork-2026-06-07-b
---

# Vault Evaluation 12 — June 2026

*Session: June 7, 2026 (continued from Eval 11 session)*

---

## Changes made this session

### Plan vs. Actual system (from session 11, documented here)

A three-tier planning diagnosis system was added alongside the existing review structure:

**New templates (3):**
- `_templates/Plan vs Actual Template.md` — weekly, `period: weekly`, auto-applied via folder template to `03-Reviews/Plan-Actual/`
- `_templates/Plan vs Actual Monthly Template.md` — monthly, `period: monthly`, selected via insert modal
- `_templates/Plan vs Actual Quarterly Template.md` — quarterly, `period: quarterly`, selected via insert modal

**New folder note:**
- `03-Reviews/Plan-Actual/Plan-Actual.md` — explains naming conventions and creation workflow

**New base file:**
- `00-Home/plan-actual.base` — five views: All reviews, Weekly, Monthly, Quarterly, Needs attention (≤ 3). Uses `planning_accuracy`, `key_shift`, `over_planned`, and `period` fields. Formulas produce icon-prefixed accuracy strings (🟢/🟡/🔴).

**Dashboard update:**
- `00-Home/00-Home.md` — added `## Planning Diagnosis` section with `![[plan-actual.base]]` transclusion, between Reviews and Navigation sections.

**Templater folder template wired:**
- `.obsidian/plugins/templater-obsidian/data.json` — added `{"folder": "03-Reviews/Plan-Actual", "template": "_templates/Plan vs Actual Template.md"}` (14 folder templates total).

**Review templates updated:**
- `_templates/Weekly Review Template.md` — added `<details>` quick notes block + link to create Plan vs. Actual note
- `_templates/Monthly Review Template.md` — added Section 10b with quick notes + link
- `_templates/Quarterly Review Template.md` — added Section 14 (Plan vs. Actual), renumbered old Section 14 → 15; added `plan-actual.base` footer link

**W24 weekly review fixed:**
- `03-Reviews/Weekly/2026-W24.md` — removed duplicate nav bar, removed stray `cssclasses: [weekly-calendar]` frontmatter block that had been pasted into the note body, moved calendar content inside `<details>` block
- Added "Open Morgen" fix and Plan vs. Actual quick notes block

### Documentation updates this session

**`_docs/Reviews & Planning — Complete Procedure.md`** — major update:
- Hierarchy diagram now shows Plan vs. Actual tier at all three levels
- Data flow table: added `planning_accuracy:`, `key_shift:`, `over_planned:` rows
- Part 1 morning sequence: "Google Calendar" → "Morgen"; step 3 updated to describe auto-prompted `focus_intention:`; step 4 ("Copy intention to frontmatter") removed (now automatic); step 5 "Google Calendar" → "Morgen"
- Part 2: weekly file naming corrected (`gggg-[W]ww.md`); Section 1b: Reading view paste warning added; Section 7: "open Google Calendar" → "open Morgen"; added Plan vs. Actual optional step after Section 9; what-it-produces table: added plan-actual row
- Part 3: added Section 10b description + monthly Plan vs. Actual creation instructions; what-it-produces table: added plan-actual row
- Part 4: Section 14 now Plan vs. Actual; Section 15 now "Ready for next quarter?"; what-it-produces table updated; `plan-actual.base` in footer links
- Part 5: "Google Calendar" → "Morgen" in cadence commitments, output table, and after-planning steps
- Part 7: file locations table corrected (`gggg-[W]ww.md`) and Plan vs. Actual row added; frontmatter table: added `focus_intention:` row; dashboard bases table: added `plan-actual.base` row; creation methods table: added Plan vs. Actual rows
- Footer: added Plan-Actual folder and Planning Diagnosis dashboard links

**`_docs/Vault Quick Reference.md`:**
- QuickAdd: "Google Calendar" → "Morgen/calendar" for calendar fetch commands
- File locations: corrected weekly naming to `gggg-[W]ww.md`; added Monthly, Quarterly, and Plan vs. Actual rows

---

### Dashboard base fixes (session 3)

**`00-Home/weekly-reviews.base`:**
- `week_label` formula changed from `date(date).format("MMM D, YYYY")` to `if(week, week, ...)` — fixes duplicate "Jun 7, 2026" row caused by W23 (completed Jun 7) and W24 (created Jun 7) having identical `date:` values. Labels now show `2026-W23` / `2026-W24`.

**`00-Home/monthly-reviews.base`:**
- `min_vs_goal` formula now wraps `focus_minutes_total` in `number()` cast — prevents "Invalid operator between String and Num" error when frontmatter value is quoted.

**`03-Reviews/Monthly/2026-05.md`:**
- `focus_minutes_total: "2100"` → `focus_minutes_total: 2100` (unquoted). Root cause: Linter `force-yaml-escape` was OFF but the value was manually entered with quotes.

---

### _docs/ index system (session 3)

**`_docs/_docs.md`** — completely rebuilt from stub:
- Full MOC with 6 categorised sections: Start here / Procedures / Reference / Guides & Setup / Meta / Evaluations
- Evaluation h