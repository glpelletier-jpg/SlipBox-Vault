---
title: Vault Evaluation 7 — June 2026
date: 2026-06-05
tags: [evaluation, vault-maintenance]
---

# Vault Evaluation 7 — June 2026

> Evaluation #7. Conducted June 5, 2026. Full structural audit, script audit, Zettelkasten health check, documentation update.

---

## Vault snapshot

| Metric | Count | Change from Eval 6 |
|---|---|---|
| Total notes | 411 | — |
| Daily notes | 16 (May 21 – Jun 5) | — |
| Fleeting notes | 150 | 🔴 Unchanged — no triage has happened |
| Literature notes | 38 | — |
| Permanent notes | 6 | — |
| MOCs | 4 | — |
| Active quests | 2 | — |
| Weekly reviews | 4 (W20–W23) | W23 blank |
| Monthly reviews | 2 (May, June) | Both partially filled |
| Templates | 18 | Daily Note updated |
| Work Knowledge notes | 38 | — |
| Resources notes | 62 | — |
| Scripts | 11 | +1 (daily-schedule.js added) |
| Attachments with companion notes | 17 | — |

---

## New since Evaluation 6

### ✅ Daily schedule auto-population in daily notes

The biggest workflow improvement since Eval 6. Two new items were added:

**`_scripts/daily-schedule.js`** — A Templater user script that:
- Reads the Google Calendar ICS URL already stored in QuickAdd settings (no extra configuration needed)
- Also reads Todoist ICS if configured
- Fetches and parses today's events from the ICS feed on note creation
- Returns a formatted list of today's schedule as checkboxes

**`_templates/Daily Note Template.md`** — Updated to include a `### 📅 Today's schedule` subsection in the `## Today` section, populated automatically by the script. Events render as:
```
- [ ] `9am – 10am` — **Standup**
- [ ] `2pm – 3pm` — **PLC Review** 📍 Conference Room
- [ ] `All day` — **National Holiday**
```

This closes the gap between Google Calendar and the vault — daily notes now open with today's schedule visible, eliminating the manual step of checking Google Calendar separately before writing the focus intention.

### 🔄 Items in flight (git uncommitted)

The following files are modified but not yet committed to git:
- `.obsidian/plugins/cmdr/data.json` (Commander config)
- `_docs/Slip Box Master Guide.md`
- `_docs/Vault State - June 2026.md`
- `_docs/Vault Systems — Complete Procedure.md`
- `_docs/_docs.md`
- `_templates/Daily Note Template.md`
- `_scripts/daily-schedule.js` (new, untracked)
- `_docs/Claude Project Instructions.md` (new, untracked — AI context file)

**Action:** Run `_scripts/vault-backup.bat` immediately after this evaluation session.

---

## Issues found

### 🔴 High priority

**1. Fleeting notes backlog: 150 — still unchanged**
Zero triage has happened since Eval 6 flagged this. The fleeting folder has been stuck at 150 notes for multiple evaluation cycles. Many have unicode-encoded filenames from Readwise import that indicate they've never been reviewed. At the current trajectory the backlog will grow, not shrink.

The 5 oldest notes (by creation order) include PKM articles, a CaseyNeistat video, and evergreen note concepts — these are processable today.

*Fix: Triage minimum 10 notes every Sunday review — non-negotiable. Set a Todoist recurring task: "Triage 10 fleeting notes" every Sunday.*

**2. W23 Weekly Review is blank**
W23 (Jun 1–7) ends this Sunday. All sections are empty. This review captures the first full week at Argenta as the primary automation engineer — worth filling thoroughly.

*Fix: Complete June 7 before end of day.*

**3. HAM Radio study not started — begins June 8**
Zero sessions logged. The General License Syllabus has 11 items, all unchecked. Resources and MOC are in place. The study system is built — action is the only missing piece.

*Fix: Open syllabus Sunday. Create recurring Todoist tasks: Wednesday evening + Saturday morning, 45–60 min each.*

---

### 🟡 Medium priority

**4. Permanent note naming inconsistency**
Five of six permanent notes use generic numbered names (`permanent-note-01` through `permanent-note-05`) instead of the claim-based kebab-case convention the guide specifies. Only the sixth note uses a proper claim title (`capturing-ideas-at-point-of-contact...`). This makes the notes less discoverable and contradicts the documented naming standard.

*Fix: Rename permanent-note-01 through 05 in Obsidian (F2) to their claim titles:*
- `permanent-note-01` → `one-idea-per-note-lets-knowledge-compound-non-linearly.md`
- `permanent-note-02` → `knowledge-work-output-should-build-on-itself.md`
- `permanent-note-03` → `longevity-is-stronger-evidence-of-future-value-than-novelty.md`
- `permanent-note-04` → `flow-requires-challenge-calibrated-just-above-current-skill.md`
- `permanent-note-05` → `small-consistent-actions-compound-into-disproportionate-outcomes.md`

**5. _scripts/ folder has 7 dead-weight files**
Of the 11 scripts in `_scripts/`, only 4 are active:
- `weekly-calendar.js` — wired to QuickAdd, used daily
- `next-week-calendar.js` — wired to QuickAdd, used weekly
- `daily-schedule.js` — wired to Templater, used daily (new)
- `vault-backup.bat` — run manually for git backup

The remaining 7 are unused:
- `open-life-compass-procedure.js`, `open-master-guide.js`, `open-vault-systems-procedure.js`, `open-zettelkasten-procedure.js` — created for QuickAdd macros never wired up; Commander now opens these docs more directly
- `fix-book-duplicates.py`, `fix-gps-links.py`, `fix-orphaned-links.py` — one-time maintenance scripts that have already run

*Fix: Move all 7 to `_archive/scripts/` or delete. They add cognitive load without providing function.*

**6. _reference/Work/ is empty**
The folder exists but `Work.md` is the only file — no actual work reference content. This was flagged in Eval 6 and is still unresolved. As the primary automation engineer, this folder should hold: key contacts, site access notes, network architecture summary, system passwords/credential hints, SOP references.

*Fix: Start with 3 notes: Contacts, Site Map, and Key Systems. Stub them out in a Sunday session.*

**7. Commander "Daily Capture" button still mislabeled**
The toolbar button is labeled "Update Focus Minutes" but triggers the "Add to Daily Capture" QuickAdd choice. Still unresolved from Eval 6.

*Fix: Settings → Commander → Toolbar → click the button → rename to "Daily Capture".*

**8. Git has uncommitted changes including new files**
See "Items in flight" above. `_scripts/daily-schedule.js` and `_docs/Claude Project Instructions.md` are untracked.

*Fix: Run vault-backup.bat after this session.*

---

### 🟢 Low priority / cosmetic

**9. `_docs/Claude Project Instructions.md` should be gitignored**
This file contains the Cowork AI assistant context — it's a working document for the AI, not vault content. It will change frequently and creates noise in git. Add it to `.gitignore`.

**10. Fleeting note filenames with encoded unicode (unchanged from Eval 6)**
Many fleeting notes have filenames like `(S)(Article) Bayes#U2019 Theorem...md`. Functional but messy. Low priority.

**11. `_archive/` is near-empty**
Only 4 files total across all archive subfolders. Correct behavior — archive destinations are in place for when Q3 ends and quests complete.

---

## Zettelkasten health

| Indicator | Status |
|---|---|
| Fleeting inbox | 🔴 150 — needs weekly triage |
| Permanent notes written this week | 🔴 0 — write one before W23 review closes |
| Permanent notes with ≥2 outlinks | ✅ All 6 pass |
| Permanent note naming | 🟡 5/6 need renaming to claim-based titles |
| Literature → permanent pipeline | 🟡 70+ claims queued, 6 written (8.5% conversion) |
| MOC freshness | Unknown — check all 4 MOCs in monthly review |

---

## Quest health

| Quest | Progress | Status |
|---|---|---|
| Health Reset Q3 | 15% | 🟡 Below midpoint for time elapsed — habits need to accelerate |
| New Role Integration Q3 | 10% | 🟡 Week 1 complete · Month 1 milestones in progress |

Both quests need a progress bump this week. Gary Tebow's departure June 5 makes the New Role quest more urgent — Guy is now the primary engineer with no handoff period.

---

## Metrics at a glance

| Area | Status |
|---|---|
| Daily note habit | ✅ Consistent — 16/16 days |
| Focus logging | ✅ Active — all 16 days |
| Vitals logging | ✅ All fields filled daily |
| Daily schedule auto-population | ✅ New — calendar populates on note creation |
| Quest tracking | ✅ 2 active, both with progress % |
| Weekly reviews | ✅ W20–W22 complete · W23 blank |
| Permanent note writing | 🟡 6 written — write 1/week |
| Permanent note naming | 🟡 5/6 need renaming |
| Fleeting note triage | 🔴 150 — no triage has occurred |
| HAM Radio study | 🔴 Starts Jun 8 · 0 sessions |
| Git backup | 🟡 Uncommitted changes — run backup |
| Scripts folder | 🟡 7 dead scripts — clean up |
| _reference/Work | 🟡 Empty — needs content |

---

## Recommended actions

**This weekend (Jun 6–8):**
1. Complete W23 weekly review (Jun 7)
2. Triage 10 fleeting notes during review (Jun 7)
3. Start HAM Radio Week 1 — G1 Commission's Rules (Jun 8)
4. Run vault-backup.bat to commit all changes

**This week:**
5. Write 1 permanent note (use Literature Processing Guide Tier 1 queue)
6. Rename permanent-note-01 through 05 to claim-based titles
7. Rename Commander "Update Focus Minutes" button to "Daily Capture"
8. Stub out 3 notes in _reference/Work/ (Contacts, Site Map, Key Systems)

**Before end of June:**
9. Archive or delete 7 dead scripts from _scripts/
10. Write 4 total permanent notes (6 → 10)
11. Add `_docs/Claude Project Instructions.md` to .gitignore

---

*Previous evaluation: [[_docs/Evaluations/Vault Evaluation 6 - June 2026|Vault Evaluation 6]]*
*Next evaluation: Recommended end of Q3 (September 2026) or after HAM Radio exam*
