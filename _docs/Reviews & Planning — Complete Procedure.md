---
title: Reviews & Planning — Complete Procedure
date: 2026-06-09
tags: [procedure, reviews, planning]
---

# Reviews & Planning — Complete Procedure

> Step-by-step guide for the full review and planning loop: weekly → monthly → quarterly → quarterly planning. Run these in sequence — each feeds the next.
>
> **Companion documents:**
> - [[_docs/Vault Systems — Complete Procedure|Vault Systems — Complete Procedure]] — covers daily notes, focus logging, vitals, quests
> - [[_docs/Life Compass — Complete Procedure|Life Compass — Complete Procedure]] — quarterly Life Compass update

---

## The review loop at a glance

```
Every Sunday:   Weekly Review   (20 min)
End of month:   Monthly Review  (30 min)
End of quarter: Quarterly Review (60 min) → Quarterly Planning (90 min)
```

Each review pulls from the level below it. Weekly reviews summarize daily notes. Monthly reviews summarize weekly reviews. Quarterly reviews summarize monthly reviews. Don't skip a level — the data won't be there when you need it.

---

## Part 1: Weekly Review

**When:** Every Sunday · **Time:** 20 min · **Hotkey:** `Ctrl+Shift+W`

### Step 1: Open this week's review

Press `Ctrl+Shift+W`. Obsidian creates the note if it doesn't exist, applying the Weekly Review Template.

**Format:** `03-Reviews/Weekly/YYYY-Www.md`

### Step 2: Work through the 8 sections

The template has 8 sections — work them in order. Don't overthink any single section.

**Section 1 — Clear the decks (5 min)**
- Process email/messages to zero
- Review Todoist inbox — add due dates, delete noise
- Close open browser tabs

**Section 2 — Last week in review (5 min)**
- What got done? (pull from daily notes or Todoist completed)
- What didn't get done and why?
- Rate the week 1–5

**Section 3 — What I learned**
- One insight, observation, or principle worth keeping. Even one sentence is enough.

**Section 4 — Focus log review**
- Check `focus_minutes` field: did you log sessions in daily notes?
- The `daily-focus.base` on the dashboard shows the week's pattern

**Section 5 — Quest habits check**
- Open each active quest (`02-Quests/`)
- Did the weekly habits move forward? Update `progress:` frontmatter if a milestone completed.
- Each top-level milestone = 25 points. Don't adjust for partial progress unless a milestone is fully done.

**Section 6 — Zettelkasten triage (non-negotiable)**
- Open `06-Zettelkasten/Fleeting/` — sort by creation date
- Process 10 notes minimum: promote to Literature/Permanent, or delete
- Target: fleeting inbox below 50 by Q3 end

**Section 7 — Next week plan**
- Identify 3 Most Important Tasks (MITs) for the week
- Add them to Todoist with due dates
- Time-block the MITs in Morgen Calendar

**Section 8 — Close**
- Fill `rating:` frontmatter (1–5)
- Fill `focus_minutes:` frontmatter (sum from daily notes for the week)
- Run `vault-backup.bat` (`_scripts/vault-backup.bat`) or `Ctrl+Shift+U` → commit

---

## Part 2: Monthly Review

**When:** Last day of month or first Sunday of next month · **Time:** 30 min

### Step 1: Open this month's review

Navigate to `03-Reviews/Monthly/YYYY-MM.md`. Create it via Periodic Notes if it doesn't exist.

### Step 2: Work through the sections

**What happened this month**
- Pull key events from the 4–5 weekly reviews
- What was shipped, completed, started, abandoned?

**Energy and focus**
- Sum `focus_minutes` across weekly reviews
- Highest energy days/periods — what drove them?
- Lowest energy days — what drained them?

**Quest progress**
- Open both active quests. Are the milestones on track for the quarter?
- Update `progress:` if a milestone just completed

**What I want to carry forward**
- One habit, one idea, one relationship to prioritize next month

**Monthly intention**
- One sentence: what would make next month a win?

### Step 3: Fill frontmatter

Ensure these fields are filled:
```yaml
rating: 4          # 1–5
focus_minutes: 0   # integer, not quoted
```

---

## Part 3: Quarterly Review

**When:** Last week of quarter (end of March, June, September, December) · **Time:** 60 min

**Hotkey:** `Ctrl+Shift+W` → navigate to Quarterly folder, or create via QuickAdd

**Format:** `03-Reviews/Quarterly/YYYY-[Q]Q[-review].md`  
**Type field:** `type: quarterly-review`

### Step 1: Gather inputs

Before writing, open and scan:
- The 3 monthly reviews for the quarter
- Both active quest files (`02-Quests/`)
- Life Compass (`01-Vision/life-compass.md`)

### Step 2: Work through the sections

**Quarter in numbers**
- Total focus minutes (sum from monthly reviews)
- Weekly review completion rate (how many Sundays had a review?)
- Quest progress change (start % → end %)

**What was done**
- Major completions, shipped work, milestones hit
- Unexpected wins

**What wasn't done — and why**
- Honest accounting of what slipped
- Was it priorities, energy, time, unclear goals?

**Biggest learning**
- The single most important thing you learned this quarter — about work, yourself, the system

**What to carry into next quarter**
- The habit, practice, or focus area that has the most leverage right now

**Life Compass check**
- Re-read all 5 values and 3 roles in Life Compass
- Which areas improved? Which declined?
- Update ratings if they've shifted

### Step 3: Fill frontmatter

```yaml
rating: 4              # 1–5 overall quarter rating
focus_minutes_total: 0 # sum of all focus minutes this quarter
quests_completed: 0
quests_total: 2
```

---

## Part 4: Quarterly Planning

**When:** Immediately after Quarterly Review — same session if energy allows, next day if not · **Time:** 60–90 min

**How to create:** QuickAdd → `New Quarterly Plan` or navigate to `03-Reviews/Quarterly/`

**Format:** filename uses the new quarter (e.g. `2026-Q3-planning.md`)  
**Type field:** `type: quarterly-planning`

> The quarterly-reviews.base on the dashboard shows both reviews and plans in one table — this is how you track the review→plan loop over time.

### Step 1: Clarify the quarter's intention

One sentence: what would make this quarter a win, looking back from the last day?

### Step 2: Design quests

- Review the active quests — are they still the right ones?
- Update milestone due dates if the quarter changed
- If a quest is complete: mark `status: Completed`, create a new one
- If a quest is stale: either re-commit or retire it. Don't carry dead quests.

### Step 3: Identify 3 focus areas

Beyond quests — what 3 areas of life need deliberate attention this quarter? Not tasks — orientations.

Examples: *relationships*, *health baseline*, *professional credibility*, *financial clarity*

### Step 4: Design the weekly rhythm

- How many times/week for each health habit?
- What's the weekly Zettelkasten target (triage, permanent notes)?
- What's the learning commitment (course modules, study sessions)?

### Step 5: Capture it

Write the plan in the note. Fill frontmatter:
```yaml
quests_planned: 2
```

Then add it to Todoist: one recurring task per quest per week ("Update quest progress in Obsidian" — Sunday, Personal project).

---

## Review cadence summary

| Review | Cadence | Template | Hotkey / Method |
|---|---|---|---|
| Weekly | Every Sunday | Weekly Review Template | `Ctrl+Shift+W` |
| Monthly | End of month | Monthly Review Template | Periodic Notes |
| Quarterly Review | End of quarter | Quarterly Review Template | Periodic Notes |
| Quarterly Planning | Start of quarter | Quarterly Planning Template | QuickAdd → New Quarterly Plan |

---

## Troubleshooting

**W23 or another weekly review is blank**  
Open the file, set a timer for 20 minutes, fill it retrospectively from memory and Todoist completed tasks. A partial review is better than none.

**monthly-reviews.base or quarterly-reviews.base shows nothing**  
Check `type:` frontmatter in the review file. Monthly reviews need `type: monthly-review`, quarterly reviews need `type: quarterly-review`, quarterly plans need `type: quarterly-planning`. The base filters on these exact strings.

**focus_minutes shows as text instead of summing**  
The value must be an unquoted integer: `focus_minutes: 180` not `focus_minutes: "180"`. Obsidian Linter with `force-yaml-escape` enabled will break this — keep that setting OFF.

---

**Links:** [[_docs/Vault Systems — Complete Procedure|Vault Systems]] · [[_docs/Life Compass — Complete Procedure|Life Compass]] · [[_docs/Zettelkasten — Complete Procedure|Zettelkasten]] · [[_docs/Slip Box Master Guide|Master Guide]] · [[00-Home/00-Home|Dashboard]]
