---
tags: [vault-meta]
date: 2026-06-05
type: vault-audit
---

# Vault Evaluation 5 — June 5, 2026

> Fifth full diagnostic evaluation. Previous: [[Vault Evaluation 4 - June 2026|Evaluation 4]].

---

## Snapshot

| Metric | Value |
|---|---|
| Total notes | 403 |
| Vault size | 18MB (PDFs added — expected) |
| Plugins | 14 (clean, stable set) |
| Daily notes | 16 · 10 with focus · 3 with energy |
| Weekly reviews | 4 · W20–W22 filled · W23 in progress |
| Permanent notes | 6 (5 with excellent claim titles) |
| MOCs | 4 (Automation, PKM, Personal Growth, HAM Radio) |
| Literature notes | 38 |
| Fleeting notes | 150 |
| Attachments | 7 PDFs · 7 companion notes · perfectly matched |
| Quest: Health Reset | progress: 15% |
| Quest: New Role Integration | progress: 10% |
| Life Compass | ✅ Fully complete — 0 blank fields |
| Git backup | ✅ Active |

---

## Major progress since last evaluation

**Life Compass is fully complete.** Every value, every role, every "how I want to show up" field is filled in. This is the most significant content milestone since the vault was built — every review, every quest check-in, and every values reflection now has real material to work with.

**Permanent notes are being written.** 6 notes exist, 5 with proper claim titles. The Zettelkasten is genuinely activating.

**4 MOCs** — the HAM Radio MOC was added alongside the three existing ones.

**Weekly reviews are being completed.** W20, W21, W22 all have ratings (3.13, 3.0, 3.2) and focus minutes (blank, 300, 400). This data is now feeding the dashboard charts.

**Strong focus discipline in June.** June daily notes show 620, 468, 450, 596, and 662 focus minutes logged — averaging over 9 hours of tracked focus per day. This is exceptional.

**User-built "Update Focus Minutes" template.** A Templater script was created that automatically reads all `[duration:: N]` entries in the current note, sums them, and writes the total to `focus_minutes:` in frontmatter. This eliminates manual copying and is the best improvement made to the daily workflow. It's documented below.

**7 PDFs with matched companion notes** — the attachment catalog is clean and functional.

---

## Issues found and fixed in this session

### 1. ✅ `steps:` field was being quoted as strings
**Problem:** Linter was converting `steps: 3758` to `steps: "3758"` on save. String values fail silently in numeric comparisons — the vitals.base step count column and step goal indicators were returning blank.
**Fixed:** Removed quotes from `steps:` in all 16 daily notes. Disabled `force-yaml-escape` in Linter settings to prevent recurrence.

### 2. ✅ CIP filename had encoded em dash
**Problem:** `CIP #U2013 The Common Industrial Protocol.md` — the `#U2013` is a URL-encoded em dash that got embedded in the filename, making searches unreliable.
**Fixed:** Renamed to `CIP – The Common Industrial Protocol.md`.

### 3. ✅ Obsidian startup pointing to empty file
**Problem:** `openBehavior` in app.json was set to `file:00-Home/dashboard` — pointing to an empty `dashboard.md` file instead of the real dashboard at `00-Home/00-Home.md`. Obsidian was opening a blank note on startup.
**Fixed:** Corrected to `file:00-Home/00-Home`. Deleted the empty `dashboard.md`.

---

## Remaining issues

### 1. "Organizing my life.md" permanent note — weak title
The only permanent note without a proper claim title. `title: Orgainizing my life` (also misspelled) violates the core permanent note rule. The other 5 notes are well-titled claims. This one should be renamed to a specific claim like *"Capturing ideas at point of contact prevents the compounding loss of fleeting insights."*

### 2. Energy field only logged 3/16 daily notes (3/5 in June)
June 1 and June 2 are missing `energy:` despite having focus minutes and steps. Energy is the key subjective complement to the objective vitals — without it, the pattern-finding value of the tracker is reduced. It takes 5 seconds at end of day.

### 3. W23 weekly review blank
The current week's review. Expected since the week isn't over — complete it Sunday.

### 4. June monthly review is a blank template
`2026-06.md` has a `rating:` field empty and 13 blank sections. Complete at month end or do a mid-month check-in now that W20–W22 data is available.

### 5. Articles folder still empty
No decision made on Web Clipper vs. repurposing. The `articles.base` is configured and waiting.

---

## New enhancement discovered: Update Focus Minutes template

The `_templates/Update Focus Minutes.md` template (created by you) is the best workflow improvement in the vault. It:
1. Scans the current note for all `[duration:: N]` entries
2. Sums the total minutes
3. Automatically writes the total to `focus_minutes:` in frontmatter
4. Shows a confirmation notice

**How to use:** At end of day in any daily note → `Ctrl+P` → "Templater: Insert Template" → "Update Focus Minutes". Done.

**Recommended:** Assign a hotkey. In Settings → Hotkeys, search "Update Focus Minutes" and assign something like `Ctrl+Shift+M`. This makes end-of-day closing a single keystroke.

This template has been added to the Master Guide documentation.

---

## Current scorecard

| Area | Score | Notes |
|---|---|---|
| System architecture | 🟢 Excellent | Clean, stable, well-organized |
| Life Compass | 🟢 Complete | All fields filled — major milestone |
| Quest system | 🟢 Active | Both quests with real progress numbers |
| Focus logging | 🟢 Strong | 600+ min/day in June; auto-update template built |
| Attachments | 🟢 Clean | 7 PDFs + 7 matched companion notes |
| Permanent notes | 🟡 Growing | 6 notes, 1 needs rewrite, target 15 by month end |
| MOCs | 🟡 4 active | Automation, PKM, Personal Growth, HAM Radio |
| Weekly reviews | 🟡 3/4 filled | W23 pending Sunday |
| Energy logging | 🟡 Partial | 3/16 notes — needs to become daily habit |
| Monthly review | 🔴 Blank | June 2026 template not filled in |
| Articles folder | 🔴 Empty | Decision needed: Web Clipper or repurpose |
| HAM Radio study | 🟡 Ready | Week 1 syllabus starts Monday Jun 8 |

---

## Recommendations

### Immediate (today)

**1. Rename "Organizing my life.md"** — open it, press F2, rename to a claim: *"Capturing ideas at point of contact prevents the compounding loss of fleeting insights."* Then rewrite the body to match.

**2. Assign hotkey to Update Focus Minutes** — Settings → Hotkeys → search "Update Focus Minutes" → assign `Ctrl+Shift+M` (or similar). Makes end-of-day closing automatic.

**3. Log energy daily** — one number (1–5) in the Properties panel at end of day. Takes 5 seconds. Dramatically increases the insight value of the vitals tracker.

### This week

**4. Complete W23 weekly review Sunday** — first one with both rating and focus minutes in the same week. The data is there; use it.

**5. Start HAM Radio Week 1 (Monday)** — G1 Commission's Rules. HamStudy.org account if not created yet.

**6. Write 2 more permanent notes** — target: 8 by end of next week. The Literature Processing Guide has the ready claims.

### This month

**7. Fill June monthly review** — can be done mid-month with W20–W22 data already available.

**8. Decide on Articles folder** — install [Obsidian Web Clipper](https://obsidian.md/clipper) to activate it, or rename/repurpose it.

**9. Add a Troubleshooting Log entry** — `07-Work-Knowledge/Troubleshooting/` has only one note (Insight BAS). The next time you work through a problem at Argenta, document it there. The folder earns its value through real incident logs.

---

## System health

The vault is in the best shape it has been. The Life Compass completion and the focus logging discipline are the most meaningful changes — the system now has real data flowing through it, not just infrastructure waiting to be used.

The one remaining infrastructure gap is the `Update Focus Minutes` hotkey — assigning it removes the last friction point from the daily closing routine.

---

**Links:** [[Vault Evaluation 4 - June 2026|Evaluation 4]] | [[_docs/Vault State - June 2026|Vault State]] | [[_docs/Slip Box Master Guide|Master Guide]]
