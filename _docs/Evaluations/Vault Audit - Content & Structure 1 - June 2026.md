---
tags: [vault-meta]
date: 2026-06-04
type: vault-audit
---

# Vault Audit — Content & Structure
*June 4, 2026 · Full read of every folder, file, and template*

> This audit is separate from the configuration evaluation already in [[_docs/Evaluations/Vault Evaluation 1 - June 2026]]. That document covers plugins, hotkeys, and settings. This one covers the *content and structure* — what's working, what's broken, and what's missing.

---

## Overall assessment

The vault's architecture is genuinely strong. The folder hierarchy, template quality, dashboard design, and Todoist integration are all well above average. The system *as designed* is coherent and capable. The problem is that it's been built but not yet activated — particularly the Zettelkasten layer, which has 307 collected notes and zero processed ones.

**Scorecard**

| Area | Score | Status |
|---|---|---|
| System architecture | 🟢 Excellent | Clear hierarchy, good naming, coherent design |
| Templates | 🟢 Excellent | All 12 templates are thorough and well-structured |
| Dashboard (00-Home) | 🟢 Strong | Embedded bases, Tasks, Dataview tables all set up |
| Vision layer | 🟡 Partial | Future Vision good; Life Compass has blank sections |
| Quest system | 🟡 Partial | One strong quest; Work rated 2/5 but no Work quest |
| Daily notes | 🟡 Partial | Template excellent; 0 focus minutes logged in any note |
| Weekly reviews | 🔴 Not started | Zero actual review notes written |
| Zettelkasten | 🔴 Critical | 307 fleeting / 0 permanent / 0 literature / 0 MOCs |
| Fleeting folder | 🔴 Needs triage | Duplicates, misplaced files, sensitive data |

---

## Critical issues

### 1. The Zettelkasten has never been used

The numbers:

| Layer | Count |
|---|---|
| Fleeting notes | 307 |
| Literature notes | 0 |
| Permanent notes | 0 |
| MOCs | 0 |

All 307 fleeting notes are in a permanent holding pattern. Nothing has been processed into a permanent note — the slip box has no slips. This is the system's central gap because the entire value chain flows through this layer: Fleeting → Literature → Permanent → MOC. The dashboard's Zettelkasten widget, the "review queue," and the "notes needing links" view all show empty because there's nothing to show.

The irony: the fleeting folder itself contains a captured note titled *"Defeat the Collector's Fallacy."* The vault has been collecting notes *about* not collecting notes.

**Fix:** Start with one permanent note. Not a batch processing session — one note. Good candidates already in the fleeting folder:
- *"Habits require a floor before structure"* — directly from the Health Reset quest insight
- *"Atomic Habits"* has highlights from Readwise that could generate 2–3 permanent notes
- *"Conditions of Flow"* — connects to focus tracking already in the vault

---

### 2. 294 of 307 fleeting notes are invisible to Dataview

Every fleeting note has `dataview-ignore: true` in its frontmatter. The Zettelkasten index page queries `FROM "06-Zettelkasten/Fleeting" WHERE type = "fleeting"` — which returns nothing because Dataview ignores those files entirely. The "Fleeting inbox" queue on the index page has always shown zero items.

**Fix:** Remove `dataview-ignore: true` from fleeting notes, or change the Zettelkasten index query to not filter by `type`. The `dataview-ignore` tag is correctly set on *templates* to prevent them from appearing in queries — it shouldn't be on actual notes.

---

### 3. Sensitive credentials stored in plain text

Two fleeting notes contain information that shouldn't be in a note-taking vault:

- **Argenta.md** — Contains an RDP access point IP (`10.78.45.8`) and an admin CWID (`SHA-MFG\SHWCQ`)
- **Add a new user to OT Domain.md** — Contains domain admin process details

Plain text Obsidian vaults sync to cloud, get backed up, and may be shared. Credentials belong in a password manager (1Password, Bitwarden, etc.), not a markdown file.

**Fix:** Delete the credential content from these notes immediately. Move credentials to a password manager. Keep process notes (how to add a user) but remove actual usernames and access points.

---

### 4. ~40 duplicate notes in the Fleeting folder

Import collisions have created duplicates with suffixes like `(1)`, `2`, `3`. Examples:
- `Atomic Habits.md` and `Atomic Habits (1).md`
- `Evergreen notes should be atomic.md`, `Evergreen notes should be atomic 2.md`, and `Evergreen notes should be atomic 3.md`
- `How to Take Smart Notes.md`, `(1)`, and `(2)`

These are not different notes — they're the same source material imported multiple times. They inflate the fleeting count and create confusion about which version to process.

**Fix:** Delete the duplicates. Keep whichever version has more content. See the list below for all confirmed duplicates.

<details>
<summary>Full duplicate list (40 files)</summary>

```
(Evergreen note-writing helps reading efforts accumulate) (1).md
A Guide to the Automation Body of Knowledge (1).md
A Practical Guide to Git and GitHub for Windows Users (1).md
A System for Writing (1).md
Atomic Habits (1).md
Circuit Analysis for Complete Idiots (1).md
Create speculative outlines while you write 2.md
Deep Dive Getting Things Done (GTD) — A Complete Guide for Beginners by Nina Ko (1).md
Evergreen note-writing as fundamental unit of knowledge work 3.md
Evergreen note-writing helps insight accumulate 2.md
Evergreen note-writing helps insight accumulate 3.md
Evergreen notes (1).md
Evergreen notes 2.md / 3.md
Evergreen notes should be atomic 2.md / 3.md
Evergreen notes should be concept-oriented 2.md / 3.md
Evergreen notes should be densely linked 2.md / (Evergreen notes should be densely linked) 2.md / 3.md
Executable strategy for writing 2.md / 3.md
Getting Things Done (1).md
How to Search Your Notes Faster in Obsidian with Meta Bind & Dataview 2.md
How to Take Smart Notes (1).md / (2).md
Introduction to the Zettelkasten Method 2.md
Knowledge work should accrete 2.md
Leaps of insight emerge from prior thought 2.md
Most people take only transient notes 2.md / 3.md
Most people use notes as a bucket for storage or scratch thoughts 2.md
Note-writing can be a virtuosic skill 2.md
Note-writing practices are generally ineffective 2.md / 3.md
Understanding Basic Electronics (1).md
Write about what you read (1).md / 3.md
```

</details>

---

### 5. No weekly reviews have ever been written

The `03-Reviews/Weekly/` folder contains one file: `Weekly.md` (the folder note). No actual weekly review exists. This means:
- The dashboard's "Recent weekly reviews" widget shows nothing
- Monthly and quarterly reviews have no weekly data to draw from
- The Dataview tables in monthly/quarterly templates (`FROM "03-Reviews/Weekly"`) return empty
- Patterns in your focus time, vitals, and life areas cannot be spotted

The Sunday review habit is in Todoist as a recurring task, but it hasn't been acted on yet.

**Fix:** Write even a minimal review for last week (W23). It doesn't have to be comprehensive — even 3 sections filled in creates the first data point. Use `Ctrl+Shift+W` to create it.

---

## Medium issues

### 6. Life Compass has blank sections

Several critical fields are empty:

- **Integrity, Creation, Foundation, Deliberateness** — "How I want to show up" is blank for all four values (only Presence is filled in)
- **Parent, Professional, Builder/Creator roles** — "Where I'm falling short" and "One thing to do differently" are blank for all three
- **Energy audit** — "Last updated" field is blank (the ratings are filled in, which is good)

These aren't cosmetic — every quarterly review, monthly values check, and weekly "did you live your values?" section references the Life Compass. Blank fields mean those reviews can't do their job.

---

### 7. Focus time is not being logged

Every daily note has `focus_minutes: 0`. The focus log section has `[duration:: ]` unpopulated. This means:
- The focus heatmap calendar on the dashboard is completely empty
- The "Focus hours — recent" base shows nothing useful
- Weekly review Section 3 (Focus hours) has no data to reference
- Monthly and quarterly "Total focus hours" metrics can't be filled

The infrastructure is there — the habit of logging isn't. Even a rough estimate at end of day (e.g., `[duration:: 120]` for 2 hours) is enough to make the system meaningful.

---

### 8. 13 CSV files in the Fleeting folder

The Fleeting folder contains 13 `.csv` files: `Argenta.csv`, `HAM Radio.csv`, `Productivity.csv`, etc. These are not processable as Zettelkasten notes and don't belong here. They can't be linked to, included in Dataview queries usefully, or turned into permanent notes.

**Fix:** Move them to `05-Resources/` in an appropriate subfolder, or delete if they're not actively useful.

---

### 9. Misplaced content in Fleeting

The Fleeting folder is being used as a general dump for content that belongs elsewhere:

| Content | Current location | Should be |
|---|---|---|
| Book captures (Atomic Habits, Getting Things Done, etc.) | Fleeting | `05-Resources/Books/` or Literature notes |
| Personal admin (DMV info, wish lists, home hunt) | Fleeting | Personal project in Todoist or a Reference folder |
| Work credentials / process docs | Fleeting | Password manager + `05-Resources/` |
| Course notes (MIT CS, GPS Tracker series) | Fleeting | `05-Resources/` study subfolder |

Fleeting is supposed to be a *temporary* capture zone (process within 48h per the Zettelkasten index description). It's functioning as permanent storage.

---

### 10. No Work quest despite Work being rated 2/5

The Life Compass energy audit rates Work & Career at **2/5** ("Just started a new job with Argenta"). The Health Reset quest addresses the 3/5 health area. But there's no quest for the lowest-rated area. A "New Role Integration" quest would give the system something to track for your professional situation — onboarding milestones, skills to develop, trust to build.

---

## Enhancement opportunities

### A. Create a Work Knowledge folder

You're an automation engineer with significant domain knowledge scattered through the Fleeting folder: PLC programming, CIP protocol, IO-Link, OT networks, industrial instruments, Six Sigma, Argenta-specific processes. This knowledge deserves its own structure, not burial in a 307-note inbox.

Suggested addition: `07-Work-Knowledge/` with subfolders for `Automation/`, `Networking/`, `Processes/`, `Troubleshooting/`. This would double as a professional reference and a foundation for the CAP (Certified Automation Professional) certification mentioned in your fleeting notes.

### B. HAM Radio belongs in the vault properly

Your Future Vision names HAM radio explicitly as a 3-year knowledge goal. You have 6+ fleeting notes on it (ARRL Handbook, portable operating, GPS tracker projects, digital modes, POTA). Currently it's scattered in the Fleeting folder with no structure. Options:
- A `05-Resources/` subfolder for HAM Radio study
- A Quest: "Get HAM License — Q4 2026" (your Future Vision mentions this)
- At minimum, a MOC linking the existing notes

### C. Fix the Readwise pipeline

11 notes show Readwise-style formatting (nested frontmatter, `title::`, `producer::`, `input::`, `source::` inline fields). These were imported but formatted differently from the vault's standard, making them hard to query. A consistent import template or a triage pass to reformat them as proper Literature notes would clean this up significantly.

### D. Add an `_archive` folder

There's no exit path for notes. Once a fleeting note is processed into a permanent note, what happens to it? Once a quest is completed, where does it go? An `_archive` folder (with `_` prefix so it sorts below the numbered folders) gives old/processed material a home without deletion.

### E. Add a second quest

The system is designed for 1–3 active quests per quarter. Only one exists. Given your Life Compass ratings, a second quest around professional integration or a specific creative/hobby goal (HAM license, electronics project) would use the system more fully and address the lower-rated life areas.

### F. Consider a `_reference` folder

Some content in Fleeting is reference material that will never become a permanent note but is genuinely useful to keep (DMV address, insurance info, how-to guides for specific tasks). A `_reference/` folder gives this content a permanent home without cluttering the Zettelkasten's capture-and-process intention.

---

## Recommended action sequence

This is ordered by impact-to-effort ratio, not by size of the change.

**This week (highest ROI):**
1. Remove credentials from `Argenta.md` and `Add a new user to OT Domain.md` → password manager
2. Delete the 40 duplicate fleeting notes
3. Fix `dataview-ignore: true` on fleeting notes (so the Zettelkasten index queue works)
4. Write one permanent note — the single act that activates the entire knowledge layer
5. Write one weekly review for last week — even partial

**This month:**
6. Complete the blank sections in Life Compass (roles, "how I want to show up")
7. Start logging focus minutes daily — even an estimate
8. Triage the Fleeting folder: identify which notes to promote, which to move, which to delete
9. Create a Work quest (or at minimum a quest brainstorm note)
10. Move CSV files and misplaced reference content out of Fleeting

**This quarter:**
11. Create a `07-Work-Knowledge/` folder and begin migrating automation knowledge there
12. Set up a HAM Radio resource or quest
13. Create the first MOC (automation, PKM, or health habits are natural clusters)
14. Add an `_archive` and `_reference` folder structure
15. Run a Readwise import audit — standardize the format across the 11 imported notes

---

## What's working well (don't change)

- **The folder numbering scheme** — `00-Home` through `06-Zettelkasten` creates a clear hierarchy that matches the system's logic perfectly
- **The dashboard design** — embedded bases, Tasks query, Dataview vitals tables, and heatmap calendar are all well-integrated once data starts flowing
- **The Daily Note template** — the combination of vitals, focus log, quest habits, and focus intention is the right design; just needs consistent use
- **The Health Reset Quest** — well-written, realistic, with a good monthly arc and honest obstacles section
- **The Todoist integration** — the workflow document clearly defines what each tool owns, which is the hardest part of a multi-tool system
- **The plugin selection** — the 16 installed plugins are a coherent, non-overlapping set; no obvious gaps or redundancies
- **The template library** — all 12 templates are thorough; especially the Permanent Note template with its counterarguments section

---

*Audit complete. See [[_docs/Evaluations/Vault Evaluation 1 - June 2026]] for the configuration and settings reference.*

**Links:** [[00-Home/00-Home|Dashboard]] | [[01-Vision/life-compass|Life Compass]] | [[06-Zettelkasten/06-Zettelkasten|Zettelkasten]]
