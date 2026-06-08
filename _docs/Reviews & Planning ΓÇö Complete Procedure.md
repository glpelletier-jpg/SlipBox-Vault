---
doc_type: procedure
purpose: "Daily note through quarterly review and planning — section-by-section cheat sheet"
title: Reviews & Planning — Complete Procedure
date: 2026-06-07
tags: [vault-meta, procedures, reviews, planning]
---

# Reviews & Planning — Complete Procedure

*How the daily note, weekly review, monthly review, quarterly review, and quarterly planning work together as a single system. Each layer feeds the next.*

---

## The hierarchy at a glance

```
QUARTERLY PLANNING  ─── sets quests, focus areas, calendar intent for 90 days
        ↑ ↓
QUARTERLY REVIEW    ─── looks back on 90 days, updates Life Compass + Future Vision
        ↑                    └── Plan vs. Actual (quarterly) ─── diagnoses planning patterns
MONTHLY REVIEW      ─── 30-day check-in, course-corrects quests, plans next month
        ↑                    └── Plan vs. Actual (monthly) ──── surfaces month-level drift
WEEKLY REVIEW       ─── tactical reset, processes Zettelkasten, sets next week
        ↑                    └── Plan vs. Actual (weekly) ───── explains week-level divergence
DAILY NOTE          ─── captures focus, habits, vitals, and work sessions
```

Every layer feeds the layer above it. The quarterly planning sets the direction for everything below. Plan vs. Actual notes run alongside each review level to diagnose *why* planning and reality diverge — these accumulate in `03-Reviews/Plan-Actual/` and surface in the Planning Diagnosis view on the dashboard.

---

## Data flow: what feeds what

| Field captured in… | Feeds… |
|---|---|
| Daily `focus_minutes:` | Weekly Section 3 Dataview → copy to weekly `focus_minutes:` |
| Weekly `focus_minutes:` | Monthly Section 2 Dataview |
| Monthly `focus_minutes_total:` | Quarterly Section 2 Dataview + `monthly-reviews.base` dashboard |
| Quarterly `focus_minutes_total:` | `quarterly-reviews.base` dashboard |
| Daily vitals (`bp_systolic`, `pulse`, etc.) | Weekly Section 2 health table |
| Daily `sleep_hours:` | Weekly Section 2 health table (Sleep column) |
| Daily `energy:` | Weekly Section 2 + `daily-focus.base` dashboard view |
| Quest `progress:` | Weekly Section 5, Monthly Section 4, Quarterly Section 3, `quests.base` |
| Monthly `rating:` | `monthly-reviews.base` dashboard |
| Quarterly `rating:` | `quarterly-reviews.base` dashboard |
| Life Compass values | Weekly reflection prompt, Monthly values check, Quarterly identity check |
| Plan vs. Actual `planning_accuracy:` | `plan-actual.base` Planning Diagnosis dashboard |
| Plan vs. Actual `key_shift:` | `plan-actual.base` Key shift column |
| Plan vs. Actual `over_planned:` | `plan-actual.base` Over-planned indicator |

**Critical chain:** If you skip copying `focus_minutes_total:` to the monthly review frontmatter, the quarterly Dataview shows dashes for that month. If you skip the monthly, the quarterly total is incomplete.

---

## Cadence calendar

| Review | When | Duration | Trigger |
|---|---|---|---|
| Daily note | Every morning | 5–10 min | `Ctrl+D` |
| Weekly review | Sunday | 30–40 min | `Ctrl+Shift+W` |
| Monthly review | Last Sunday of month | 45–60 min | `Ctrl+P` → "Periodic Notes: Open Monthly Note" |
| Quarterly review | Last weekend of quarter | 60–90 min | `Ctrl+P` → "Periodic Notes: Open Quarterly Note" |
| Quarterly planning | Same day or day after quarterly review | 60–90 min | `Ctrl+P` → "QuickAdd: New Quarterly Plan" |

**Quarter end dates:** Q1 = Mar 31 · Q2 = Jun 30 · Q3 = Sep 30 · Q4 = Dec 31

---

## Part 1: Daily Note

**Purpose:** The atomic unit. Captures what actually happened — focus, habits, health, intentions. Everything meaningful about a day lives here.

**File location:** `04-Daily-Notes/YYYY-MM-DD.md`  
**Template:** `_templates/Daily Note Template.md` (auto-applied by Templater + Periodic Notes)  
**Creation:** `Ctrl+D`

### Morning sequence (10 min total)

1. **Morgen first** — open before Obsidian. See the day's shape. How much unstructured time actually exists?
2. **Todoist Today view** — are today's tasks realistic given the calendar? Reschedule anything that won't happen.
3. **`Ctrl+D` → daily note** — Templater auto-prompts "Today's focus — what would make today a win?" Type your intention and press Enter. It populates both `focus_intention:` frontmatter and the **Today's focus** line in the note body in one step. Informed by steps 1–2.
4. **Morgen** — block time for your 1–2 most important tasks if not already blocked.

### During the day

- **Log focus sessions:** After each focused block, add `- [duration:: 90]` to the Focus log section. Replace 90 with actual minutes.
- **Check quest habits** as you complete them — the six checkboxes in Quest habits section.

### End of day (5 min)

- Enter vitals: BP, pulse, glucose, weight, steps, sleep hours, energy (1–5).
- `Ctrl+P` → "Update Focus Minutes" — copies the sum of all `[duration:: N]` entries to `focus_minutes:` frontmatter automatically.

### What the daily note produces

| Field | Used by |
|---|---|
| `focus_minutes:` | Weekly Section 3 Dataview |
| `bp_systolic`, `bp_diastolic`, `pulse`, `glucose`, `weight`, `steps`, `sleep_hours` | Weekly Section 2 vitals table |
| `energy:` | Weekly Section 2 + `daily-focus.base` |
| `focus_intention:` | `daily-focus.base` embedded in Weekly Section 4 |
| Quest habit checkboxes | Your own weekly review evidence |

---

## Part 2: Weekly Review

**Purpose:** Tactical reset. Look back at what happened, look forward at next week. Process the Zettelkasten. Takes ~30 min if done consistently; longer if delayed.

**File location:** `03-Reviews/Weekly/gggg-[W]ww.md` (e.g. `2026-W24.md`)  
**Template:** `_templates/Weekly Review Template.md`  
**Creation:** `Ctrl+Shift+W`

### When to do it

Sunday. Non-negotiable. A skipped weekly review means the monthly review loses one week of data and the weekly Zettelkasten processing falls behind.

### Section by section

**Section 1 — Clear the decks (5 min):** Email to zero, calendar check, sweep task inbox, file loose notes. This is not optional — it's what makes the rest of the review possible.

**Section 1b — This week's calendar:** Press `Ctrl+Shift+K` → open `00-Home/Weekly Calendar.md` → select all → copy → paste into the `<details>` block. **Important:** paste from Reading view (`Ctrl+E` to toggle) to avoid accidentally copying the frontmatter as body text. Next Sunday you compare planned vs. actual.

**Section 2 — Life area check-in:** Rate all 6 areas 1–5. The Dataview table auto-populates this week's daily vitals. Copy the overall rating to `rating:` frontmatter.

**Section 3 — Focus hours:** Dataview auto-shows each day's focus time with 🟢/🟡/🔴 status (🟢 ≥ 240 min · 🟡 ≥ 120 min · 🔴 < 120 min). DataviewJS renders a progress bar vs. 1,200 min weekly target. **Copy the total to `focus_minutes:` in frontmatter.**

**Section 4 — Three wins:** Pull from the `daily-focus.base` embedded above the input fields — it shows this week's daily intentions. Name 3 things that actually landed.

**Section 5 — Quest progress:** Dataview shows all active quests with health indicators. Fill in the manual table. Then **open each quest note** and update `progress:` in frontmatter. The dashboard and all future reviews read this number.

**Section 6 — Reflection prompts:** Pick 2–3 that feel relevant. Write the first true answer without polishing.

**Section 7 — Next week intention:** One sentence intention. Three specific priorities. One quest milestone. Then open Morgen and block time for the priorities. Press `Ctrl+Shift+J` to fetch next week's calendar.

**Section 8 — Zettelkasten inbox:** Work through fleeting notes oldest-first. Write 2–3 permanent notes (`Ctrl+Shift+P`). Add at least one link to an existing permanent note. This is how the knowledge base compounds.

**Section 9 — Brain dump:** Everything still in your head. Process anything actionable into Todoist after the review closes.

**After review — Quest–Todoist sync (5 min):** If any quest milestones completed this week, create the next milestone's key action in Todoist with a due date.

**Optional — Plan vs. Actual (10 min):** If this week's plan and reality diverged significantly, create a Plan vs. Actual note: navigate to `03-Reviews/Plan-Actual/` → new note → Templater applies the weekly template automatically. Fill in what was planned, what happened, and the root cause. Quick notes can also be jotted in the `<details>` block within the weekly review itself.

### What the weekly review produces

| Field | Used by |
|---|---|
| `focus_minutes:` | Monthly Section 2 Dataview |
| `rating:` | Monthly Section 2 Dataview |
| `week:` | Monthly + Quarterly Dataview |
| Quest `progress:` (updated in quest notes) | Monthly Section 4, Quarterly Section 3, `quests.base` |
| Plan vs. Actual `planning_accuracy:`, `key_shift:` | `plan-actual.base` Planning Diagnosis view |

---

## Part 3: Monthly Review

**Purpose:** One level above weekly — zoom out to 30-day patterns, check quest trajectory, set next month's direction. The monthly review is where you catch a struggling quest before it fails.

**File location:** `03-Reviews/Monthly/YYYY-MM.md`  
**Template:** `_templates/Monthly Review Template.md`  
**Creation:** `Ctrl+P` → "Periodic Notes: Open Monthly Note" (no hotkey assigned by default)

### When to do it

Last Sunday of the month. Read back through ALL weekly reviews from the month first — this takes 10–15 min and is the only way to write a monthly review that synthesizes rather than just duplicates.

### Section by section

**Section 1 — Clear and capture:** Weekly reviews read? Calendar checked for next month?

**Section 2 — Month in numbers:** The Dataview table auto-shows each week's rating and focus minutes. Fill in the summary row manually. **Copy `focus_minutes_total:` to frontmatter** — this is the value the quarterly review Dataview reads. Skip it and the quarterly shows dashes.

**Section 3 — Life area check-in:** Rate all 6 areas again with direction of travel vs. last month. Look for consistent ↓ arrows — those are structural problems, not bad weeks.

**Section 4 — Quest progress:** Dataview shows all active quests. The mid-quarter view. A quest at 15% in month 2 is in trouble. Decide now whether to push, adjust scope, or abandon.

**Section 5–8 — Wins, reflection, values check, learning:** Synthesize the best from weekly reviews. Don't write fresh — pull and elevate.

**Section 9 — Next month intention:** This is your monthly planning. Write one sentence of intention. Name 3 focus areas. Identify the one quest that must move significantly. Name one relationship to invest in and one habit to build or break. These carry you into next month's daily notes and weekly reviews.

*Note: There is no separate monthly planning template. Section 9 handles monthly planning within the review. This is intentional — keeping review and planning in one note reduces overhead and ensures planning is grounded in what you just reviewed.*

**Copy `rating:` to frontmatter** — feeds `monthly-reviews.base` dashboard.

**Section 10b — Plan vs. Actual (optional, 10–15 min):** Quick notes in the `<details>` block for what shifted this month. For a full diagnosis, create `YYYY-MM Plan vs. Actual` in `03-Reviews/Plan-Actual/` using `Ctrl+P` → "Templater: Open insert template modal" → **Plan vs Actual Monthly Template** (the folder auto-template is weekly — you must select the monthly manually).

### What the monthly review produces

| Field | Used by |
|---|---|
| `focus_minutes_total:` | Quarterly Section 2 Dataview + `monthly-reviews.base` |
| `rating:` | `monthly-reviews.base` |
| Section 9 next month intention | Your own context for next month's daily notes |
| Plan vs. Actual `planning_accuracy:`, `key_shift:` | `plan-actual.base` Planning Diagnosis view (monthly filter) |

---

## Part 4: Quarterly Review

**Purpose:** Strategic retrospective. 90 days of data. Update the Life Compass and Future Vision. This is the highest-altitude review — it shapes who you decide to be next quarter, not just what you'll do.

**File location:** `03-Reviews/Quarterly/YYYY-QQ-review.md`  
**Naming example:** `2026-Q3-review.md`  
**Template:** `_templates/Quarterly Review Template.md`  
**Creation:** `Ctrl+P` → "Periodic Notes: Open Quarterly Note"

### When to do it

Last weekend of the quarter (Mar/Jun/Sep/Dec). Read back through all weekly AND monthly reviews first. Allow 90 min with no interruptions. Do the review before planning — looking back clears your head for looking forward.

### Section by section

**Section 1 — Set the scene:** Ground yourself. Note where you are and how you feel. Confirm you've read everything.

**Section 2 — Quarter in numbers:** Dataview auto-populates weekly data. Fill in the summary metrics table manually. **Copy `focus_minutes_total:` to frontmatter.** Also fill `quests_completed:` and `quests_total:` — these feed the `quarterly-reviews.base` quest percentage formula.

**Sections 3–5 — Quest retrospective, life area deep-dive, ten wins:** Be specific and honest. Pull the best from monthly reviews. The 10 wins list is not optional — it counteracts the natural tendency to remember only what went wrong.

**Sections 6–8 — What drained me, values check, vision check:** Re-read Life Compass before Section 7. Re-read Future Vision before Section 8. Update both if they need it — don't carry forward values or a vision that no longer fits.

**Sections 9–13 — Learning, relationships, letting go, paragraph summary, score:** The paragraph summary (Section 12) is the most valuable thing in the quarterly review. One paragraph that a future-you can read in 30 seconds and know what this quarter was.

**Section 14 — Plan vs. Actual:** Quick notes in the `<details>` block for what shifted this quarter — milestones that got done, milestones that kept slipping, biggest unplanned time consumers, and recurring patterns from the monthly reviews. For a full diagnosis, create `QQ-YYYY Plan vs. Actual` in `03-Reviews/Plan-Actual/` using `Ctrl+P` → "Templater: Open insert template modal" → **Plan vs Actual Quarterly Template**.

**Section 15 — Ready for next quarter?** Check the boxes. The last one triggers the planning session: `Ctrl+P` → "QuickAdd: New Quarterly Plan"

### What the quarterly review produces

| Field | Used by |
|---|---|
| `focus_minutes_total:` | `quarterly-reviews.base` |
| `quests_completed:`, `quests_total:` | `quarterly-reviews.base` quest % formula |
| `rating:` | `quarterly-reviews.base` |
| Updated Life Compass | All subsequent weekly + monthly reflection sections |
| Updated Future Vision | Quarterly Planning Part 1 |
| Plan vs. Actual `planning_accuracy:`, `key_shift:` | `plan-actual.base` Planning Diagnosis view (quarterly filter) |
| Section 15 trigger | Starts Quarterly Planning |

---

## Part 5: Quarterly Planning

**Purpose:** Design the next 90 days. Create quests. Set month-by-month focus. Block calendar. Commit to the review cadence. This is the only place in the system where you deliberately choose what to pursue — everything else reviews, reflects, and adjusts.

**File location:** `03-Reviews/Quarterly/YYYY-QQ-plan.md`  
**Naming example:** `2026-Q3-plan.md`  
**Template:** `_templates/Quarterly Planning Template.md`  
**Creation:** `Ctrl+P` → "QuickAdd: New Quarterly Plan"

*Both the review and plan live in `03-Reviews/Quarterly/`. The `quarterly-reviews.base` shows both, using a 📋 Review / 🎯 Plan type label.*

### When to do it

Immediately after the quarterly review, or the following day at the latest. Do not let days pass between review and planning — the clarity from the review fades quickly.

### Part by part

**Part 1 — Quarter in review (20 min):** Quick synthesis of what to carry forward. What was the biggest learning? What do you want more of / less of? This is a bridge from the review — not a repeat of it.

**Part 2 — Life Compass check (10 min):** Re-read Life Compass and Future Vision (just updated in the review). Rate all 6 life areas again. Which 1–2 need the most attention this quarter? These are your design constraints.

**Part 3 — Quest design (30 min):** Design 1–3 quests for the quarter. Each quest must pass the checklist: specific, 90-day completable, connects to Life Compass, has 4 clear milestones (each worth 25 pts), and genuinely motivates you.

For each quest:
1. Write the name and Life Compass connection in the planning table
2. Press `Ctrl+P` → "QuickAdd: New Quest" — OR navigate to `02-Quests/` and create a note there (Templater applies the Quest Template automatically)
3. Fill in the quest note: title, area, start date, due date, milestones
4. Set `status: Active` and `progress: 0` in frontmatter
5. Update `quests_planned:` in this planning note's frontmatter with the count

*Max 1–3 active quests. If life is busy (new job, major life change, health challenges), start with 1.*

**Part 4 — Quarterly calendar (15 min):** Write a focus theme for each month. Month 1 is usually foundation-setting. Month 2 builds momentum. Month 3 is where you either finish strong or discover what you overcommitted to.

Note all known constraints: travel, busy periods, scheduled medical appointments, family obligations. These are inputs to quest milestone timing.

**Part 5 — Review cadence commitments:** Check the boxes. Schedule the mid-quarter check (week 6) in Morgen now, not later. If weekly reviews aren't happening consistently, identify why and fix it here.

### What quarterly planning produces

| Output | Where it goes |
|---|---|
| New quest notes (1–3) | `02-Quests/` → `quests.base` dashboard immediately |
| `quests_planned:` frontmatter | `quarterly-reviews.base` |
| Month-by-month focus | Your context for monthly Section 9 intentions |
| Review cadence schedule | Morgen calendar blocks |
| Mid-quarter check date | Morgen |

### After planning

1. Open Morgen — block protected time for your Month 1 quest milestones
2. In Todoist: create the first action for each quest milestone with a due date
3. On your next `Ctrl+D` daily note: the new quests will appear in the quest progress Dataview immediately

---

## Part 6: The monthly planning question

**Why there is no separate monthly planning template:**

The Monthly Review Section 9 (Next month intention) handles monthly planning inline with the review. This is intentional:

- Monthly planning grounded in the review you just finished is more honest than planning in a vacuum
- Two notes per month (review + plan) adds overhead that erodes consistency
- The 30-day horizon is short enough that the Section 9 structure — intention + 3 focus areas + 1 quest + 1 relationship + 1 habit — is the right level of detail
- The quarterly planning session does the deep strategic work; the monthly review adjusts course

*If your monthly practice evolves to the point where Section 9 feels insufficient, splitting into a separate monthly planning note is straightforward — create `_templates/Monthly Planning Template.md` and add a QuickAdd choice pointing to `03-Reviews/Monthly/` with naming `YYYY-MM-plan`. The infrastructure is ready for it.*

---

## Part 7: Infrastructure reference

### File locations

| Note type | Folder | Naming | Template |
|---|---|---|---|
| Daily note | `04-Daily-Notes/` | `YYYY-MM-DD.md` | Daily Note Template |
| Weekly review | `03-Reviews/Weekly/` | `gggg-[W]ww.md` (e.g. `2026-W24.md`) | Weekly Review Template |
| Monthly review | `03-Reviews/Monthly/` | `YYYY-MM.md` | Monthly Review Template |
| Quarterly review | `03-Reviews/Quarterly/` | `YYYY-QQ-review.md` | Quarterly Review Template |
| Quarterly plan | `03-Reviews/Quarterly/` | `YYYY-QQ-plan.md` | Quarterly Planning Template |
| Plan vs. Actual | `03-Reviews/Plan-Actual/` | `gggg-[W]ww Plan vs. Actual.md` / `YYYY-MM Plan vs. Actual.md` / `QQ-YYYY Plan vs. Actual.md` | Plan vs Actual Template (weekly auto) · Monthly/Quarterly via insert modal |

### Creation methods

| Note type | Primary | Fallback |
|---|---|---|
| Daily | `Ctrl+D` | Periodic Notes plugin |
| Weekly | `Ctrl+Shift+W` | Periodic Notes plugin |
| Monthly | `Ctrl+P` → "Periodic Notes: Open Monthly Note" | Navigate to `03-Reviews/Monthly/` |
| Quarterly review | `Ctrl+P` → "Periodic Notes: Open Quarterly Note" | Navigate to `03-Reviews/Quarterly/` |
| Quarterly plan | `Ctrl+P` → "QuickAdd: New Quarterly Plan" | Navigate to `03-Reviews/Quarterly/` |
| Plan vs. Actual (weekly) | Navigate to `03-Reviews/Plan-Actual/` → new note (template auto-applies) | — |
| Plan vs. Actual (monthly/quarterly) | Navigate to `03-Reviews/Plan-Actual/` → new note → `Ctrl+P` → "Templater: Open insert template modal" → select monthly or quarterly template | — |

### Frontmatter fields that must be filled manually

These are not auto-populated — missing any of the