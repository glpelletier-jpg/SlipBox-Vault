---
title: Vault Systems — Complete Procedure
date: 2026-06-06
tags: [procedure, workflow, systems]
---

# Vault Systems — Complete Procedure

> Step-by-step procedures for everything in the vault not covered by the Life Compass and Zettelkasten guides. This document covers: daily notes, focus logging, vitals tracking, weekly reviews, monthly reviews, quarterly reviews, quest management, resource management, the three-tool system, attachments, and the backup system.

**Companion documents:**
- [[_docs/Life Compass — Complete Procedure|Life Compass — Complete Procedure]]
- [[_docs/Zettelkasten — Complete Procedure|Zettelkasten — Complete Procedure]]

---

## Part 1: The Daily Note

### What it is

The daily note is the operational layer of the vault — the place where each day is planned, worked, and closed. It tracks your focus intention, quest habits, focus time, vitals, and end-of-day reflection. Over time these notes feed the dashboard charts, weekly reviews, and vitals tracker.

**Location:** `04-Daily-Notes/YYYY-MM-DD.md`
**Hotkey:** `Ctrl+D` — opens or creates today's note from anywhere

---

### Step 1: Open today's daily note

Press `Ctrl+D`. If today's note doesn't exist, Obsidian creates it automatically and Templater applies the Daily Note Template.

**If the note already exists:** It opens directly. Scroll to wherever you are in the workflow.

---

### Step 2: Morning — write your focus intention (2 min)

**What it is:** One sentence that answers: "What would make today a win?" This is not a task list — it's an intention. One thing that, if it happened, would make the day feel worthwhile.

**How to do it:**
1. Open today's note (`Ctrl+D`)
2. Find the "Today's focus" section at the top
3. Click in the `>` blockquote after "Today's focus:"
4. Write one complete sentence. Examples:
   - "Complete the Powerflex 753 fault investigation and document the root cause."
   - "Get through Week 1 of the HAM Radio syllabus and hit >80% on HamStudy."
   - "Be fully present with the kids this evening."
5. Copy this sentence to the `focus_intention:` field in the Properties panel (⊞ icon at top of note)

**Why copy it to frontmatter:** The `focus_intention:` field feeds the `daily-focus.base` view on the dashboard and in every review. This is what shows your planned vs. actual pattern over time.

---

### Step 3: Morning — check quest habits

**What it is:** Three checkboxes at the top of the daily note corresponding to the Health Reset daily habits. Check the ones you've done or commit to the ones you'll do today.

**How to do it:**
1. Find the "Quest habits" section
2. Three checkboxes:
   - `🏃 Moved for 30+ min`
   - `😴 In bed by target time`
   - `🥗 Avoided main dietary drain`
3. Check the boxes as you complete each habit during the day
4. The Sunday weekly review Section 5 (Quest progress) will ask if the quest moved forward — having these checked is your evidence

---

### Step 4: During the day — log focus sessions

**What it is:** Every time you complete a focused work session, log it in the Focus log section with the number of minutes. This builds the focus data that feeds the heatmap calendar and weekly reviews.

**How to do it:**
1. Find the "Focus log" section in the daily note
2. After each session, add a new line:
   ```
   - [duration:: 90]
   ```
   Replace 90 with the actual minutes.
3. The DataviewJS block above automatically calculates the running total and displays it.

**Quick reference:**
- 30 min = 30
- 1 hour = 60
- 90 min = 90
- 2 hours = 120
- 2.5 hours = 150

**For multi-session days:** Add one line per session. Each line is one block of focused work.

---

### Step 5: Evening — copy focus total to frontmatter

**What it is:** The `focus_minutes:` frontmatter field is what the dashboard, weekly reviews, and heatmap calendar read. It must be a number, not a formula.

**The fast way (recommended):**
1. At end of day, press `Ctrl+Shift+M` (if hotkey assigned) OR `Ctrl+P` → "Update Focus Minutes"
2. The Templater script reads all `[duration:: N]` entries, sums them, and writes the total to `focus_minutes:` automatically
3. A notification confirms: "✅ focus_minutes updated → 9h 45m (585 min)"

**The manual way:**
1. Look at "Focus total" in the Focus log section — note the number
2. Open the Properties panel (⊞ icon)
3. Find `focus_minutes:` and type the number

---

### Step 6: Evening — log vitals

**What it is:** Health measurements entered into the note's frontmatter. The vitals tracker on the dashboard reads these fields and produces daily logs, weekly averages, monthly averages, and color-coded status indicators.

**How to do it:**
1. Open the Properties panel (⊞ icon at the top of the note)
2. Find and fill in the fields you measured today:

| Field | What to enter | When to measure |
|---|---|---|
| `bp_systolic` | Top number of BP (e.g., 118) | Morning, before activity |
| `bp_diastolic` | Bottom number of BP (e.g., 76) | Same time as systolic |
| `pulse` | Heart rate in BPM (e.g., 68) | Same time as BP |
| `glucose` | Fasting blood glucose mg/dL (e.g., 95) | Before breakfast |
| `glucose_context` | Text tag if reading is unusual | When glucose is affected by medication/illness |
| `weight` | Body weight in lbs (e.g., 326.4) | Morning, after bathroom, before eating |
| `steps` | Total steps for the day (e.g., 3758) | End of day from watch/phone |
| `energy` | Subjective energy 1–5 (e.g., 3) | End of day — how you felt overall |

**You don't need to measure everything every day.** Leave any field blank on days you skip it. Blank days are invisible to the tracker — they don't pollute averages.

**The `glucose_context` field:** Use plain text tags like `steroid-affected`, `post-meal`, `ill`, `exercise-affected`. This appears as a ⚠️ flag in the weekly review vitals table so you remember why an unusual reading occurred.

**The `energy` field:** This is the most important and easiest to forget. It takes 5 seconds. Rate your overall energy for the day 1–5: 1 = depleted, 3 = functional, 5 = excellent. Enter it before closing Obsidian for the day.

---

### Step 7: Evening — write the end-of-day note

**What it is:** One honest sentence about what actually happened today. Not a report. Not a summary. One sentence that captures the truth of the day.

**How to do it:**
1. Find the "End-of-day note" section at the bottom of the daily note
2. Click in the `>` blockquote
3. Write one sentence. Examples:
   - "Got the Powerflex sorted — overcurrent on ramp-up, extended the accel time and it cleared."
   - "HAM study went well, G1 sections done, hit 84% on HamStudy."
   - "Didn't make it to the gym — back was hurting, took a walk instead."
4. Copy this sentence to the `end_of_day:` field in the Properties panel

**Why copy to frontmatter:** Same reason as `focus_intention:` — it feeds the `daily-focus.base` view and appears in all reviews as the "what actually happened" column alongside your morning intention.

---

## Part 2: The Weekly Review

### What it is

The weekly review is the most important recurring event in the system. It's where the data collected during the week becomes meaning. Without the weekly review, daily notes are just records. With it, they become pattern recognition.

**When:** Every Sunday. Budget 20–30 minutes minimum.
**How to create:** `Ctrl+Shift+W` — creates the weekly review note in `03-Reviews/Weekly/` with filename `YYYY-WXX`

---

### Section 1: Clear the decks (5 min)

**Purpose:** Empty all inboxes so the review starts with a clean mind.

**How to do it:**
1. Process email/messages to zero — reply, delegate, or file. Don't leave anything unread.
2. Review calendar — look at last week and confirm everything that needed follow-up got it. Look at next week and confirm there's nothing you need to prepare for.
3. Sweep Todoist inbox — go to `todoist://inbox`. Every item gets a project and a date, or gets deleted. Nothing stays in the inbox.
4. File loose notes — any browser tabs, sticky notes, or paper notes that haven't been captured. Either put them in Obsidian (fleeting note) or Todoist (task) or throw them away.

---

### Section 1b: This week's calendar

**Purpose:** Create a record of what was actually on your calendar this week, and compare it to what actually happened.

**How to do it:**
1. Press `Ctrl+Shift+K` to refresh the Weekly Calendar note
2. Open `00-Home/Weekly Calendar.md`
3. Select all (`Ctrl+A`) and copy (`Ctrl+C`)
4. Paste into the "📅 Planned week" collapsed section
5. After pasting, expand the "📝 Planned vs. actual" section and write 2–3 sentences: what shifted, what got added, what surprised you

---

### Section 2: Life area check-in

**Purpose:** Rate your week across the same 6 life areas as the Life Compass energy audit. This builds weekly data that feeds monthly and quarterly trend analysis.

**How to do it:**
1. Rate each of the 6 areas 1–5 based on how the week *felt*:
   - Work & career
   - Health & energy
   - Relationships
   - Personal growth
   - Fun & creativity
   - Money & finances
2. Add a one-word note for each (e.g., "productive", "depleted", "steady")
3. Calculate your overall week rating: this can be an average of the 6 scores, or just your gut feel for the week
4. **Critical step:** Copy the overall rating number to `rating:` in the Properties panel (⊞ icon)

**Why the frontmatter matters:** The `rating:` field is what the dashboard's "Recent weekly reviews" base reads. Without it, the dashboard shows nothing.

**The Health & energy vitals table:** This section includes a Dataview table that auto-populates your daily vitals for the week. It just works — no action needed. But if it shows dashes across the board, check that you've been entering vitals in your daily notes.

---

### Section 3: Focus hours

**Purpose:** Total your focus time for the week and connect it to the review record.

**How to do it:**
1. Add up the `focus_minutes:` values from each daily note this week. The Dataview table in this section may show them automatically.
2. Write the total at the top of the section: "Total this week: 540 min (9h 0m)"
3. **Critical step:** Copy the total minutes to `focus_minutes:` in the Properties panel
4. Fill in the day-by-day breakdown table if useful — it only takes a minute and shows the shape of your week

**The 1,200 min / 20 hr weekly target** is a suggested baseline. Track the trend, not just the number.

---

### Section 4: Three wins this week

**Purpose:** Identify what actually went well. This is harder than it sounds — most people default to what went wrong. Force yourself to find three genuine wins, however small.

**How to do it:**
1. Look at your daily notes' `focus_intention:` entries for the week — what did you set out to do?
2. Look at your `end_of_day:` entries — what actually happened that was good?
3. Look at your quest habits checkboxes — how many days did you hit all three?
4. Write three wins. They don't need to be impressive. "Finished the Powerflex documentation" is a win. "Went to bed by 10pm four nights" is a win.

The `daily-focus.base` embedded in this section shows your intentions and reflections side by side. This is your raw material for identifying wins.

---

### Section 5: Quest progress

**Purpose:** Check whether your quests moved forward this week and update the progress numbers in the quest notes.

**How to do it:**
1. The Dataview table shows all active quests with their current progress percentage and health indicator (🟢/🟡/🔴)
2. For each quest in the manual table below it, answer:
   - Did it move forward? What specifically happened?
   - Was it blocked? What blocked it?
3. **After filling in the table:** Open each quest note that made progress
4. In the quest note Properties panel, update `progress:` (the number 0–100)
5. Each quest's milestones are worth 25 points each when fully complete

**Current quests:**
- Health Reset Q3: open `02-Quests/Health-Reset-Q3-2026.md` → update `progress:`
- New Role Integration Q3: open `02-Quests/New-Role-Integration-Q3-2026.md` → update `progress:`

---

### Section 6: Reflection prompts

**Purpose:** Answer 2–3 questions honestly without editing. These are for you, not for an audience.

**How to do it:**
1. Read each prompt
2. Pick 2–3 that feel most relevant to this specific week
3. Write the first true answer that comes to mind. Don't polish it.

The prompts:
- "What drained my energy most this week?" — look for patterns across multiple weeks
- "What gave me the most energy?" — these are signals about what to do more of
- "Did I spend time on what actually matters to me?" — honest answer
- "Stop / start / continue" — one thing to stop doing, one to start, one to keep
- "Did I act in line with my core values?" — reference your Life Compass
- "One thing I'm grateful for" — anchor the review in something positive

---

### Section 7: Next week intention

**Purpose:** Set the direction for next week before it starts, not during it.

**How to do it:**
1. Write one sentence: "Next week I want to..." — an intention, not a task list
2. Write 3 specific priorities — things that, if completed, would make next week a success. Be specific enough that you'll know Sunday whether they happened.
3. Open Morgen Calendar: block time for your 3 priorities. If you don't block it, it won't happen.
4. Press `Ctrl+Shift+J` to fetch next week's calendar. Review the blocks.
5. Under "One quest milestone I will complete:" — name the specific milestone, not just the quest.

---

### Section 8: Zettelkasten inbox

**Purpose:** Process the Zettelkasten's fleeting inbox and write 2–3 permanent notes.

**How to do it:** See the full Zettelkasten Procedure document, Part 5 (Weekly Processing Workflow). In brief:
1. Open `06-Zettelkasten/06-Zettelkasten.md`
2. Work through fleeting notes oldest-first — process or delete each one
3. Open the Literature Processing Guide → pick the top Tier 1 claim
4. Write 2–3 permanent notes using `Ctrl+Shift+P`
5. Check the review queue — add at least one link to an old permanent note

---

### Section 9: Capture anything else

**Purpose:** Brain dump anything that didn't fit the other sections.

**How to do it:** Write anything still on your mind. Questions, observations, ideas, things to research, things to say to people. Get them out of your head and into the note. Process anything actionable into Todoist after the review.

---

### After the weekly review: Quest–Todoist sync (5 min)

After completing the review:
1. Look at your quest milestones — did any complete this week?
2. If yes: create the next milestone's key action in Todoist with a due date
   - Health Reset milestones → Personal project
   - New Role Integration milestones → Work project
3. This ensures quest milestones have real Todoist tasks driving them, not just checklist items in a note

---

## Part 3: The Monthly Review

### What it is

The monthly review zooms out from the weekly tactical level to the strategic level. It's where you check whether the month's activity added up to progress on what matters. Budget 30–45 minutes.

**When:** Last Sunday of each month.
**How to create:** Dashboard → "New monthly review" link, OR `Ctrl+P` → "Periodic Notes: Open Monthly Note"

---

### Section 1: Clear and capture (5 min)

Read back through ALL weekly reviews from the month first. This takes 10–15 minutes but is essential — the monthly review should synthesize the weekly reviews, not duplicate them.

Then:
1. Collect any loose tasks or ideas still floating
2. Check calendar for next month — anything to plan ahead?

---

### Section 2: Month in numbers

**How to fill it in:**
1. **Focus time total:** Sum all `focus_minutes:` from each weekly review, or add up all daily notes. Copy the total to `focus_minutes_total:` in Properties.
2. **Weekly reviews completed:** Count how many of the 4–5 Sundays this month had completed reviews with a rating. Note the count (e.g., "3/4")
3. **Quest milestones hit:** Count milestones completed this month across both quests
4. **Books finished:** Any books whose status changed to `done` this month
5. **Overall month rating:** 1–5 gut feel for how the month went. Copy to `rating:` in Properties.

The Dataview table in this section auto-populates each week's rating and focus hours — this is your summary at a glance.

---

### Section 3: Life area check-in

**How to fill it in:**
1. Rate all 6 life areas 1–5 for the month as a whole (not just the most recent week)
2. For each area, note the direction: ↑ (better than last month), → (same), or ↓ (worse)
3. Write the key insight — not a judgment, an observation. "Started Argenta, still learning the ropes" not "work is hard."
4. Answer: Which area improved most? Which needs most attention next month?

---

### Section 4: Quest progress

The Dataview table shows live quest status. The manual table below it is where you write context:
- What actually moved the quest forward?
- What blocked it?
- Is any quest at risk of not completing by Q3?

---

### Sections 5–10

**Section 5 (Wins):** Pull 3–5 things worth remembering from the month. Pull from your weekly reviews' "three wins" sections.

**Section 6 (What drained me):** Patterns across the month. If the same thing drained you 3 weeks in a row, it's not a bad week — it's a structural problem.

**Section 7 (Values check):** Re-read your Life Compass values. For each one, write how you lived it and where you fell short this month. One honest sentence each.

**Section 8 (Learning and growth):** Best book/article/video. Most useful insight. Skill to develop next month.

**Section 9 (Next month intention):** One sentence intention for next month. Three focus areas. One quest that must move significantly. One relationship to invest in. One habit to build or break.

**Section 10 (Anything else):** Ideas and observations to revisit at the quarterly review.

---

## Part 4: The Quarterly Review

### What it is

The quarterly review is the most important review in the system. It's where you look at 90 days of data, decide whether your quests were the right ones, update your Life Compass, and design next quarter. Budget 60–90 minutes. Do not rush it.

**When:** Last Sunday of the quarter (late September for Q3 2026).
**How to create:** Dashboard → "New quarterly review" link

**Before starting, read back through:**
- All weekly reviews from the quarter
- All monthly reviews from the quarter
- Every quest note
- Your Life Compass
- Your Future Vision

This reading takes 20–30 minutes and is not optional. The quarterly review synthesizes 90 days of data — you can't synthesize what you haven't read.

---

### The 14 sections (overview)

The quarterly review template has 14 sections. Here's what to do with each:

**Section 1 — Set the scene:** Note where you are and how you feel. Confirm you've read back through everything. This is the moment to shift from the daily operational mode to the strategic reflective mode.

**Section 2 — Quarter in numbers:** The Dataview table auto-populates all weekly data. Fill in the summary metrics manually (total focus hours, average weekly rating, quests completed, books finished). Copy `focus_hours_total` and quest counts to frontmatter.

**Section 3 — Quest retrospective:** For each quest that ran this quarter, answer: What was the outcome? What moved it most? What blocked it? What would you do differently? There's one section per quest — be honest and specific.

**Section 4 — Life area deep-dive:** Rate all 6 areas for the quarter as a whole, note the trend vs. last quarter, and identify the biggest win and biggest gap in each area.

**Section 5 — Ten wins:** Force yourself to find 10 wins from the quarter. Pull from your weekly and monthly reviews. Include small ones — this is a comprehensive accounting, not a highlight reel.

**Section 6 — What drained me most:** Not week-to-week variation — patterns that persisted all quarter. What kept coming up? What should you have exited earlier?

**Section 7 — Values and identity check:** Re-read your Life Compass before answering. For each value: evidence you lived it, where you fell short. Then: who did you show up as this quarter? Is the Life Compass still accurate? If values or roles need updating, do it now.

**Section 8 — Vision check:** Re-read Future Vision. Are you moving toward your 1-year vision? What's the gap? Does the Future Vision need minor tweaks, major revision, or is it still accurate?

**Section 9 — Learning and growth:** Most impactful source this quarter. Single most useful insight to carry forward. Skill developed. Skill gap to address next quarter.

**Section 10 — Relationships:** Who showed up for you? Who to invest in next quarter?

**Section 11 — What to let go:** Habits, beliefs, commitments, obligations that no longer serve you. The quarterly review is the right moment to formally let go of things that aren't working.

**Section 12 — The quarter in one paragraph:** Force synthesis. Write one paragraph that captures the quarter as a whole. This paragraph will matter when you read it a year from now.

**Section 13 — Score and close:** Overall rating /10. One word that captures the quarter. One thing most proud of. One thing to change next quarter.

**Section 14 — Ready for next quarter?** Checklist: review complete, Life Compass updated, Future Vision updated, Quarterly Planning session scheduled.

---

### After the quarterly review: Quarterly Planning

Immediately after completing the review, run a Quarterly Planning session using the Quarterly Planning Template (linked at the bottom of the review).

**How to do it:**
1. `Ctrl+P` → "Templater: Create new note from template" → "Quarterly Planning Template"
2. Based on the quarterly review, design 1–3 quests for next quarter
3. For each quest: create the quest note using `Ctrl+P` → "New Quest" from the dashboard
4. For each quest's first milestone: create a Todoist task with a due date
5. Update the calendar: book monthly review Sundays, the next quarterly review date, and any critical deadline blocks

---

## Part 5: Quest Management

### Creating a quest

**When:** At each quarterly planning session, or when a significant new commitment warrants a dedicated 90-day focus.

**How to do it:**
1. From the dashboard, click "New quest" OR navigate to `02-Quests/` and create a new note (Templater applies the Quest Template)
2. **Immediately rename** the file (`F2`) to a descriptive name with the quarter: `Health-Reset-Q3-2026`. The filename drives the "Weekly actions" task query inside the quest note — it must be exact.
3. Fill in frontmatter fields via the Properties panel:
   - `area:` — Work / Health / Relationships / Growth / Fun / Finance
   - `quarter:` — format `Q3-2026`
   - `due:` — end of the quarter
   - `progress:` — starts at 0
   - `status:` — Active
4. Fill in the four key sections:
   - **Why this quest:** One sentence connecting to Life Compass or Future Vision. If you can't write this sentence, reconsider the quest.
   - **Definition of done:** Specific and measurable. "Get healthier" is not a definition of done.
   - **Milestones:** 3–4 checkpoints across 12 weeks. Each should represent roughly 25 points of progress.
   - **What I'll say no to:** Explicitly name what you're de-prioritizing to make space.
5. Add a recurring Todoist task: "Update quest progress in Obsidian" → every Sunday, Personal project

---

### Updating quest progress

**When:** Every Sunday during the weekly review, after completing Section 5.

**How to do it:**
1. Open the quest note
2. Open the Properties panel (⊞ icon)
3. Find `progress:` — update the number (0–100)
4. Each top-level milestone completed = 25 points
5. Partial progress within a milestone is at your discretion — be honest

**Progress → Health indicator mapping:**
- ≥ 66% → 🟢 On track
- 33–65% → 🟡 Check in
- < 33% → 🔴 At risk

The health indicator compares progress to time elapsed in the quarter, so a quest at 40% in week 8 is behind even though it's not at 0%.

---

### Completing or abandoning a quest

**When completed:**
1. Change `status:` from `Active` to `Completed` in Properties
2. Write a reflection in the Notes section of the quest note
3. Move the file to `_archive/Quests/` if you want to clean up the active quests view
4. At the quarterly review, include this quest in the retrospective

**When abandoned (conscious decision to stop):**
1. Change `status:` to `Abandoned`
2. Write why you're stopping — this is more valuable than completed quests for understanding how you make decisions
3. Archive it if desired

---

## Part 6: Resource Management

### Adding a book

**When:** When you start reading or want to track a book.

**How to do it:**
1. From dashboard → click "New book" OR navigate to `05-Resources/Books/` and create a new note
2. **Rename immediately** to the book title
3. Fill in Properties:
   - `author:`
   - `status:` — `to-read` / `reading` / `done`
   - `date_started:` — when you started
   - `date_finished:` — when you finish
   - `rating:` — 1–5 when done

The `status: reading` drives the "Currently reading" section on the dashboard. Only notes with this status appear there.

**When you finish a book:**
1. Change `status:` to `done`
2. Set `date_finished:` and `rating:`
3. Write or update the Literature note in `06-Zettelkasten/Literature/`
4. In the book note's "Linked notes" section, add: `[[06-Zettelkasten/Literature/Title]]`

---

### Adding an article

**When:** When you save an article from the web, a blog post, documentation, or any written piece you want to read or reference.

**How to do it:**
1. Navigate to `05-Resources/Articles/` and create a new note there (Templater applies the Article Template automatically), OR use `Ctrl+P` → "Templater: Create new note from template" → "Article Template"
2. **Rename immediately** to the article title
3. Fill in the Properties panel:
   - `url:` — the full URL of the article
   - `author:` — author name if known
   - `source:` — publication, website, or origin
   - `status:` — `to-read` when saving, `reading` when actively reading, `done` when finished
   - `date_saved:` — auto-filled by Templater with today's date
   - `date_read:` — fill in when you finish it

**Filling in the article note body:**
- **Why this is worth reading** — write one sentence about what you expect to get from it *before* reading
- **Key ideas** — write the key ideas in your own words (not copy-paste)
- **Quotes worth keeping** — 1–3 lines you'd actually re-read
- **My takeaway** — after finishing: what's the single most useful thing you're taking from this?

**When you finish an article:**
1. Change `status:` to `done`
2. Fill in `date_read:`
3. Write your takeaway section
4. If the article generated an insight worth keeping: create a literature note or permanent note and link it in the "Linked notes" section

The **Obsidian Web Clipper** browser extension (free, official — install at obsidian.md/clipper) can auto-fill the Article Template from any webpage with one click. Recommended for quick saves without leaving the browser.

---

### Adding a PDF to the vault

In brief:

1. **Drag the PDF** into any open Obsidian note — it saves to `_attachments/` automatically
2. **Move it** to the correct subfolder in the file panel (`_attachments/Work/Automation/`, etc.)
3. **Create a companion note** in the same subfolder using the Attachment Note Template. Name it identically to the PDF without the extension.
4. **Fill in the Properties panel** of the companion note: `title`, `type: attachment`, `category`, `vendor`, `description`, `added`, `linked_note`
5. The PDF appears in the Attachment Catalog automatically once the companion note is saved

---

### Adding a troubleshooting log

**When:** Any time you work through a problem at Argenta — equipment fault, software issue, process anomaly.

**How to do it:**
1. Right-click `07-Work-Knowledge/Troubleshooting/` in the file panel → New note, OR press `Ctrl+Shift+T` (if hotkey assigned), OR `Ctrl+P` → "New Troubleshooting Log"
2. Templater applies the Troubleshooting Log Template automatically
3. **Name the file:** `YYYY-MM-DD - Equipment Description` (e.g., `2026-06-05 - CP12 Agitator Powerflex 753 Fault`)
4. Fill in each section while the incident is fresh — especially Sections 1 (symptom), 4 (diagnostic steps), 5 (root cause), and 6 (fix applied)
5. Update `status:` from `open` to `resolved` in Properties when the issue is closed

---

### Adding notes to Work Knowledge

**When:** When you learn something at work from a manual, colleague, troubleshooting session, or training.

**How to do it:**
1. Navigate to the appropriate subfolder:
   - Electrical/PLC/protocols → `07-Work-Knowledge/Automation/`
   - Networks, servers, IT → `07-Work-Knowledge/Networking/`
   - Argenta processes, SOPs, pharma → `07-Work-Knowledge/Processes/`
   - Equipment incidents → `07-Work-Knowledge/Troubleshooting/`
   - CAP exam prep → `07-Work-Knowledge/CAP-Certification/`
2. Create a new note there — start with a clear heading and write what you learned
3. Link it to related notes using `[[note-name]]` syntax
4. If the note relates to a specific PDF in `_attachments/Work/`, add a link to that PDF

**Naming convention:** Use descriptive names, not topic names. "Powerflex 753 overcurrent fault during ramp-up" is better than "VFD faults."

---

## Part 7: The Three-Tool System

### How the tools divide responsibilities

| Tool | Owns | Does NOT own |
|---|---|---|
| **Obsidian vault** | Intention, reflection, quest management, knowledge, vitals, reviews | Task management with reminders, scheduling |
| **Todoist** | All actionable tasks with due dates; quick capture; reminders; notifications | Reflection, knowledge, long-form thinking |
| **Morgen Calendar** | Time-bound events; time-blocking; the daily schedule view | Task management, note-taking |

**The key rule:** If something needs to happen by a certain time, it's in Todoist. If it needs to be reflected on or built upon, it's in Obsidian. If it needs a time slot on the calendar, it's in Morgen.

---

### The morning sequence (do these in order)

**Step 1 — Morgen Calendar first (3 min)**
Open Morgen before anything else. See the shape of the day: what meetings are fixed? How much unstructured time actually exists? Planning a full task day and then losing it to meetings is the most common morning mistake.

**Step 2 — Todoist Today view (5 min)**
Open `todoist://today`. Given what you just saw in Morgen:
- Are today's tasks realistic?
- Reschedule anything that won't happen
- Process any overnight inbox items (assign project + date — 2 min max each)
- Identify your 1–2 most important tasks

**Step 3 — Obsidian daily note (5 min)**
Now open today's note (`Ctrl+D`) and write your focus intention — informed by steps 1 and 2. Also check quest habits and morning vitals.

**Step 4 — Morgen time-block (2 min)**
Back to Morgen: if any Todoist priorities need protected time, block it now. Not "I'll find time" — block it.

---

### Capture routing during the day

When something surfaces, route it immediately:

| What surfaced | Where it goes |
|---|---|
| Work task with a deadline | Todoist → Work project |
| Personal task or errand | Todoist → Personal project |
| Anything in your head that's not a task | `Ctrl+Shift+C` → daily note capture (no context switch) |
| Insight or idea worth developing | `Ctrl+Shift+F` → Fleeting note |
| Quest-related action | Task in the quest note: `- [ ] Action 📅 YYYY-MM-DD` |
| Meeting to schedule | Morgen Calendar directly |

**The rule:** Anything with a due date and a reminder goes in Todoist. Everything else goes in Obsidian.

---

### The weekly calendar script

**What it does:** Fetches your Google Calendar (and Todoist via iCal) for the week and writes a formatted markdown note.

**Hotkeys:**
- `Ctrl+Shift+K` → fetches current week → writes to `00-Home/Weekly Calendar.md`
- `Ctrl+Shift+J` → fetches next week → writes to `00-Home/Next Week Calendar.md`

**After fetching:**
1. Open `00-Home/Weekly Calendar.md`
2. Select all (`Ctrl+A`) and copy (`Ctrl+C`)
3. Paste into the weekly review Section 1b "Planned week" section

**If Todoist tasks don't appear:** Confirm you've added your Todoist iCal URL in QuickAdd settings (Settings → QuickAdd → Manage Macros → Weekly Calendar → ⚙️ gear → `todoist_ics_url`). Todoist tasks appear with a ✅ prefix to distinguish them from calendar events.

---

## Part 8: The Backup System

### How it works

The vault uses two-layer backup:

**Layer 1 — Git (version history):** Every hour (via Task Scheduler), the vault auto-commits to a private GitHub repository at `github.com/glpelletier-jpg/slip-box-vault`. Full history — you can roll back any note to any point in time.

**Layer 2 — OneDrive (continuous sync):** Real-time cloud copy. If your laptop dies, the vault is accessible immediately from any device via OneDrive.

### Running a manual backup

Double-click `_scripts/vault-backup.bat` in File Explorer, or open Command Prompt and run:
```
"C:\Vault\Slip Box\_scripts\vault-backup.bat"
```

A log is written to `C:\Vault\backup-log.txt` confirming what was committed and pushed.

### Verifying the backup is working

1. Open `C:\Vault\backup-log.txt` — look for recent timestamps
2. OR: go to `github.com/glpelletier-jpg/slip-box-vault` in a browser — you should see commits from today

### Recovery scenarios

| Problem | Recovery method |
|---|---|
| Accidentally deleted a note | `Ctrl+P` → "File Recovery: Open file recovery" → find the note → Restore |
| Corrupted note | Same as above — File Recovery keeps snapshots |
| Entire vault deleted or corrupted | Open Command Prompt → `git clone https://github.com/glpelletier-jpg/slip-box-vault.git "C:\Vault\Slip Box"` |
| New laptop | Install Git and Obsidian → clone the GitHub repo → open vault |

Full backup documentation: [[_docs/Vault Backup System|Vault Backup System]]

---

## Quick reference: all hotkeys

| Action | Hotkey |
|---|---|
| Open today's daily note | `Ctrl+D` |
| Open this week's review | `Ctrl+Shift+W` |
| Open dashboard | `Ctrl+H` |
| New fleeting note | `Ctrl+Shift+F` |
| Quick capture (no context switch) | `Ctrl+Shift+C` |
| New permanent note | `Ctrl+Shift+P` |
| New troubleshooting log | `Ctrl+Shift+T` *(assign in QuickAdd)* |
| Fetch weekly calendar | `Ctrl+Shift+K` |
| Fetch next week calendar | `Ctrl+Shift+J` |
| Open graph view | `Ctrl+G` |
| Open command palette | `Ctrl+P` |

---

**Links:** [[_docs/Life Compass — Complete Procedure|Life Compass Procedure]] | [[_docs/Zettelkasten — Complete Procedure|Zettelkasten Procedure]] | [[_docs/Slip Box Master Guide|Master Guide]] | [[00-Home/00-Home|Dashboard]]
