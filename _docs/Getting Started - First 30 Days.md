---
type: guide
created: 2026-06-05
updated: 2026-06-08
tags: [guide, onboarding]
---

# Getting Started — First 30 Days

> The vault is built, audited, and fully wired. Every system is working. The only thing left is the habit.
> This guide gives you a concrete checklist for the first 30 days — what to do, when, and why it matters.
> Work through it top to bottom. Check things off as you go.

---

## What's been set up for you

Before you start, here's what the vault contains and what's already working:

**Structure:**
- 8 numbered folders (00-Home through 07-Work-Knowledge) with folder notes and linked indexes
- `_templates/` — 18 templates, all wired to auto-fire via Templater when you create notes in the right folders
- `_scripts/` — weekly and next-week calendar fetchers, plus maintenance scripts
- `_attachments/` — Rockwell PDF manuals with companion notes and a catalog

**Knowledge base:**
- `07-Work-Knowledge/` — 38 notes including automation, networking, processes, troubleshooting, and CAP certification
- `06-Zettelkasten/Literature/` — 49 literature notes (38 originals + 11 IA/OT reference stubs)
- `06-Zettelkasten/Permanent/` — 28 permanent notes (6 originals + 22 IA/OT domain stubs across Instrumentation, PLC Architecture, OT Networking, Process Safety)
- `06-Zettelkasten/MOC/` — 8 Maps of Content: Automation Engineering, HAM Radio, PKM & Zettelkasten, Personal Growth, Instrumentation, OT Networking, PLC Architecture, Process Safety
- `05-Resources/Courses/HAM-Radio/` — complete General License study system: Master Reference, Syllabus, Study Resources

**Reviews:**
- 4 weekly reviews (W20–W23) fully updated with auto-pulling focus minutes (Section 3) and Zettelkasten processing queue (Section 8)
- Weekly Review Template Section 3 pulls `focus_minutes` from your daily notes automatically — no manual tallying
- Weekly Review Template Section 8 shows the 5 oldest fleeting notes for processing, permanent notes written this week, and a live inbox health meter

**Maintenance:**
- `_docs/Vault State - June 2026.md` — monthly orphan detector, fleeting inbox trend, permanent note health, and quarterly audit queries all built and ready

**Known remaining work (from you):**
- Fill in the blank fields in `01-Vision/life-compass.md` — 4 values sections + 3 role sections
- Update `progress:` in quest notes (both currently early stage)
- Build the fleeting notes backlog down (~150 notes — target 10/week via weekly review)
- Fill in the 22 IA/OT permanent note stubs — each has a Claim and empty body sections; write 1 per week

---

## Week 1 — foundation habits

### Day 1: Tonight

- [ ] **Open today's daily note** (`Ctrl+D`). Write your `focus_intention:` for today in the Properties panel (⊞ icon). One sentence — what would make today a win?

- [ ] **Write your first `end_of_day:`** — in the same Properties panel, find `end_of_day` and type one honest sentence about what actually happened. This is the first data point for the daily-focus tracker. Takes 30 seconds.

- [ ] **Rate your energy** — enter a number 1–5 in the `energy:` field. End of day. Don't overthink it.

- [ ] **Log today's vitals** — BP, pulse, glucose if you have it, steps from your phone or watch. This starts the vitals baseline.

---

### Before Sunday (Day 1–6): small setup tasks

- [ ] **Fill in the Life Compass energy audit** — open [[01-Vision/life-compass|Life Compass]], scroll to the energy audit table, and rate each of the 6 life areas 1–5. One number, one honest sentence each. Takes 5 minutes. This baseline makes every future review meaningful.

  The six areas: Work & career · Health & energy · Relationships · Personal growth · Fun & creativity · Money & finances

- [ ] **Write your first permanent note** — `Ctrl+Shift+P`. Pick one thing you now believe based on building this vault or from recent reading. State it as a claim:
  - *"A system only compounds when the daily habit feeds it"*
  - *"Health is a multiplier, not a separate life category"*
  - *"Electrical resistance is friction — V=IR makes every circuit calculable"*

  Write one paragraph. Link it to at least one other note (Life Compass, a quest, an existing permanent note). The Zettelkasten starts building density one note at a time.

- [ ] **Check your HAM Radio study schedule** — `05-Resources/Courses/HAM-Radio/General License Syllabus.md` has the full week-by-week study plan. Week 1 starts Jun 8: G1 Commission's Rules. Set up your HamStudy.org account before Monday.

---

### Sunday Week 1 — first weekly review

The vault earns its keep in the weekly review. Without it, data accumulates but never closes the loop.

- [ ] **Run `Ctrl+Shift+W`** to create the weekly review
- [ ] **Work through all 9 sections** with a 20-minute timer
- [ ] **Section 1b** — use `Ctrl+Shift+K` to pull this week's calendar into the note
- [ ] **Section 3** — Focus hours now auto-populate from your daily notes. Check the progress bar. Copy the total to `focus_minutes:` frontmatter.
- [ ] **Section 7** — use `Ctrl+Shift+J` to pull next week's calendar for the intention section
- [ ] **Section 8** — work through the 5 oldest fleeting notes in the Dataview queue. Decide each: promote to permanent / archive to literature / delete
- [ ] **Copy overall rating** (1–5) to `rating:` frontmatter
- [ ] **Update quest progress** — did the Health Reset habits get hit? Move `progress:` in the quest note if any movement happened

The first review will feel mechanical. By week 4 it will feel essential.

---

## Week 2 — building consistency

- [ ] **Daily notes every day** — just `Ctrl+D`, write `focus_intention:` in the morning and `end_of_day:` in the evening. 3 minutes maximum. The habit matters more than completeness right now.

- [ ] **Log focus sessions** — in the daily note's Focus Log section, log each work block in minutes:
  ```
  - [duration:: 90] HAM Radio study — G1 Commission's Rules
  - [duration:: 60] Automation — reviewed a permanent note stub
  ```
  The `Total today:` line sums automatically. Copy to `focus_minutes:` at end of day.

- [ ] **Add "Update quest progress" as a recurring Todoist task** — every Sunday, Personal project. The Health Reset dashboard health indicator stays red until you update `progress:` in the quest note.

- [ ] **Fill in a permanent note stub** — open any of the 22 IA/OT stubs in `06-Zettelkasten/Permanent/`. Each has a Claim already written. Write the Explanation, Evidence, Conditions, and Cross-links sections. One per week is the target.

- [ ] **Second weekly review (Sunday)** — same process. This time check Section 3 — do the focus hours feel accurate? Are all your daily `focus_minutes:` values filled in?

---

## Week 3 — Zettelkasten activation

- [ ] **Third weekly review** — by now the Section 8 Dataview queue is your main mechanism for reducing the 150-note backlog. Process 10, write 1 permanent note.

- [ ] **Look at the daily-focus base** — open `00-Home/daily-focus.base` on "Last 7 days" view. Your `focus_intention:` and `end_of_day:` entries from the past two weeks are there. Is there a gap between what you intended each day and what happened? That gap is data. It becomes a permanent note.

- [ ] **Update Health Reset quest progress** — even partial milestone completion deserves moving `progress:` from 0. Each of the 4 top-level milestones = 25 points. Did you move consistently? Sleep target hit? Dietary drain avoided?

- [ ] **Install Obsidian Web Clipper** (browser extension) — the Articles folder and template are ready. The Web Clipper fills the Article template from any webpage in one click. Feeds `05-Resources/Articles/` without friction.

- [ ] **Check the Automation Engineering MOC** (`06-Zettelkasten/MOC/Automation Engineering MOC.md`) — review the full structure including Electrical Fundamentals and IA/OT linked stubs. If you've been reading automation material, add a reaction or question to the MOC's "Core tensions" section.

---

## Week 4 — closing the first loop

- [ ] **Fourth weekly review**

- [ ] **Compare Life Compass energy audit** — open `01-Vision/life-compass.md` and re-rate the 6 life areas. Compare to your Week 1 baseline. Has Health & energy moved since starting the Health Reset quest?

- [ ] **Write a permanent note from the daily-focus data** — you have ~3 weeks of `focus_intention:` / `end_of_day:` pairs. Look at the base. What pattern do you see? There's a permanent note in there about how you actually work vs. how you intend to work.

- [ ] **Review the HAM Radio MOC** (`06-Zettelkasten/MOC/HAM Radio MOC.md`) — it cross-references the Automation MOC on electrical fundamentals. If you've been studying both, add a note about what overlapped and what surprised you.

---

## End of June — first monthly review

- [ ] **Run the monthly review** — Dashboard → New monthly review. 30–45 minutes.

- [ ] **Open Vault State** (`_docs/Vault State - June 2026.md`) and run the Monthly health check section:
  - Orphan detector — any notes with no backlinks?
  - Fleeting inbox trend — are you below 100 notes?
  - Permanent notes created this month — do they have links?
  - MOC freshness — any MOC not updated this month?

- [ ] **Look at the vitals base** — you'll have ~4 weeks of data. Average BP, glucose trend, steps per day, energy rating. First real data for your next diabetes appointment.

- [ ] **Check quest progress** — update `progress:` in both quest notes to reflect actual completion. The Health Reset milestone system: Month 1 = just show up (33%). Did you?

- [ ] **Re-rate Life Compass energy audit** — compare to Day 1 baseline. Three data points now: Day 1, Week 4, End of Month.

---

## The non-negotiable daily routine

Three things, every day, under 5 minutes total. Everything else is optional.

| Time | Action | Where |
|---|---|---|
| Morning | Write `focus_intention:` — one sentence | Properties panel in today's daily note |
| Evening | Write `end_of_day:` — one honest sentence | Properties panel in today's daily note |
| Evening | Rate `energy:` 1–5 and log steps | Properties panel in today's daily note |

The `focus_intention:` / `end_of_day:` pair is the most valuable data in the vault over time — more useful than the vitals, more useful than the focus log. It shows you the gap between who you intend to be on a given day and who you actually were.

---

## The habit that matters most: Sunday review

Every tool in this vault — the quests, the vitals, the focus hours progress bar, the Zettelkasten queue — compounds through the weekly review. Without it, data accumulates but never closes the loop.

`Ctrl+Shift+W` is the command. The template is ready. Sections 3 and 8 now do most of the heavy lifting automatically. A full review takes 20 minutes with a timer.

**The first 4 Sunday reviews will feel like work. After that they'll feel like something you don't want to skip.**

---

## Things to build in month 2+

Don't think about these now. Come back after your first monthly review.

- **HAM Radio electronics notes** — your Future Vision and HAM Radio MOC both point here. After the General License exam, the study notes convert into permanent Zettelkasten notes naturally.
- **CAP exam prep cluster** — `07-Work-Knowledge/CAP-Certification/` has the roadmap. The electrical fundamentals notes already cover Domains 1 and 3.
- **Second quest for Q4** — Health Reset is the right single focus for Q3. If it's going well by September, the quarterly planning session is the right time to think about a second 90-day arc.
- **Grow the permanent note network** — 28 stubs exist; the target is 50 fully written permanent notes by Q3 end. That's where linking starts to feel like thinking rather than filing.
- **Life Compass completion** — the blank values sections and role sections. These inform every future quest. Complete before Q4 planning.

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Slip Box Master Guide|Master Guide]] | [[01-Vision/life-compass|Life Compass]] | [[02-Quests/Health-Reset-Q3-2026|Health Reset Quest]]
