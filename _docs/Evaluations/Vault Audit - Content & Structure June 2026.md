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

| Layer | Count |
|---|---|
| Fleeting notes | 307 |
| Literature notes | 0 |
| Permanent notes | 0 |
| MOCs | 0 |

All 307 fleeting notes are in a permanent holding pattern. Nothing has been processed into a permanent note. The dashboard's Zettelkasten widget, the "review queue," and the "notes needing links" view all show empty because there's nothing to show.

The irony: the fleeting folder itself contains a captured note titled *"Defeat the Collector's Fallacy."* The vault has been collecting notes *about* not collecting notes.

**Fix:** Start with one permanent note. Good candidates already in the fleeting folder:
- *"Habits require a floor before structure"* — directly from the Health Reset quest insight
- *"Atomic Habits"* has highlights from Readwise that could generate 2–3 permanent notes
- *"Conditions of Flow"* — connects to focus tracking already in the vault

---

### 2. 294 of 307 fleeting notes are invisible to Dataview

Every fleeting note has `dataview-ignore: true` in its frontmatter. The Zettelkasten index page queries `FROM "06-Zettelkasten/Fleeting" WHERE type = "fleeting"` — which returns nothing. The "Fleeting inbox" queue has always shown zero items.

**Fix:** This is intentional on daily notes but incorrect on fleeting notes. Dataview queries for the Zettelkasten index should query by folder, not by `type` field.

---

### 3. Sensitive credentials stored in plain text

Two fleeting notes contain information that shouldn't be in a note-taking vault:
- **Argenta.md** — Contains an RDP access point IP and admin CWID
- **Add a new user to OT Domain.md** — Contains domain admin process details

Plain text Obsidian vaults sync to cloud and may be shared. Credentials belong in a password manager.

**Fix:** Delete the credential content from these notes immediately. Move to a password manager.

---

### 4. ~40 duplicate notes in the Fleeting folder

Import collisions created duplicates with suffixes like `(1)`, `2`, `3`. Examples:
- `Atomic Habits.md` and `Atomic Habits (1).md`
- `Evergreen notes should be atomic.md`, `...2.md`, and `...3.md`

**Fix:** Delete the duplicates. Keep whichever version has more content.

---

### 5. No weekly reviews have ever been written

The `03-Reviews/Weekly/` folder contains only the folder note. No actual weekly reviews exist. The dashboard's "Recent weekly reviews" widget shows nothing.

**Fix:** Write even a minimal review for last week (W23). Use `Ctrl+Shift+W` to create it.

---

## Medium issues

### 6. Life Compass has blank sections

- **Integrity, Creation, Foundation, Deliberateness** — "How I want to show up" blank for all four values
- **Parent, Professional, Builder/Creator roles** — "Where I'm falling short" and "One thing to do differently" blank for all three
- **Energy audit** — "Last updated" field is blank

These aren't cosmetic — every quarterly review, monthly values check, and weekly "did you live your values?" section references these fields.

---

### 7. Focus time is not being logged

Every daily note has `focus_minutes: 0`. The focus heatmap calendar is completely empty. Even a rough estimate at end of day (`[duration:: 120]` for 2 hours) is enough to make the system meaningful.

---

### 8. 13 CSV files in the Fleeting folder

`Argenta.csv`, `HAM Radio.csv`, `Productivity.csv`, etc. These can't be linked to, queried, or turned into permanent notes.

**Fix:** Move to `05-Resources/` in an appropriate subfolder, or delete if not actively useful.

---

### 9. No Work quest despite Work being rated 2/5

The Life Compass rates Work & Career at **2/5**. The Health Reset quest addresses the 3/5 health area. But there's no quest for the lowest-rated area.

**Fix:** Create a "New Role Integration" quest to track onboarding milestones at Argenta.

---

## Enhancement opportunities

### A. Create a Work Knowledge folder

Automation knowledge is scattered through the Fleeting folder: PLC programming, CIP protocol, IO-Link, OT networks, industrial instruments, Six Sigma. A `07-Work-Knowledge/` with subfolders for `Automation/`, `Networking/`, `Processes/`, `Troubleshooting/` would give this a structure — and double as foundation for CAP certification.

### B. HAM Radio belongs in the vault properly

Your Future Vision names HAM radio explicitly as a 3-year knowledge goal. Options:
- A `05-Resources/` subfolder for HAM Radio study
- A Quest: "Get HAM License"
- At minimum, a MOC linking the existing notes

### C. Add an `_archive` folder

There's no exit path for notes. An `_archive` folder gives old/processed material a home without deletion.

### D. Add a second quest

Only one quest exists. A second quest around professional integration (Work quest) or a hobby goal (HAM license) would use the system more fully.

---

## Recommended action sequence

**This week (highest ROI):**
1. Remove credentials from Argenta notes → password manager
2. Delete the 40 duplicate fleeting notes
3. Write one permanent note
4. Write one weekly review for last week

**This month:**
5. Complete the blank sections in Life Compass
6. Start logging focus minutes daily
7. Create a Work quest
8. Move CSV files out of Fleeting

**This quarter:**
9. Create `07-Work-Knowledge/` and migrate automation knowledge
10. Set up HAM Radio resource or quest
11. Create the first MOC

---

## What's working well (don't change)

- The folder numbering scheme (`00-Home` through `06-Zettelkasten`)
- The dashboard design — embedded bases and Dataview tables are well-integrated
- The Daily Note template — the combination of vitals, focus log, quest habits, and focus intention
- The Health Reset Quest — well-written, realistic, with honest obstacles section
- The Todoist integration — clearly defines what each tool owns
- The plugin selection — 16 coherent, non-overlapping plugins
- The template library — all 12 templates are thorough

---

*Audit complete. See [[_docs/Evaluations/Vault Evaluation 1 - June 2026]] for the configuration and settings reference.*

**Links:** [[00-Home/00-Home|Dashboard]] | [[01-Vision/life-compass|Life Compass]] | [[06-Zettelkasten/06-Zettelkasten|Zettelkasten]]
