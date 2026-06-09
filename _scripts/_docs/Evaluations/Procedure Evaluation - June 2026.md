---
title: Procedure Evaluation — June 2026
date: 2026-06-05
tags: [vault-meta, evaluation, procedures]
---

# Procedure Evaluation — June 2026

*Full cross-reference audit of the three core procedure documents against actual vault configuration, templates, scripts, and plugin settings.*

**Documents evaluated:**
- [[_docs/Life Compass — Complete Procedure|Life Compass — Complete Procedure]]
- [[_docs/Zettelkasten — Complete Procedure|Zettelkasten — Complete Procedure]]
- [[_docs/Vault Systems — Complete Procedure|Vault Systems — Complete Procedure]]

**Audit method:** Every procedure step, every hotkey claim, every field reference, and every section description was verified against the actual template files, `hotkeys.json`, QuickAdd `data.json`, the `.base` formula files, and the Zettelkasten index.

---

## Summary scorecard

| Document | Accuracy | Completeness | Gaps found |
|---|---|---|---|
| Life Compass Procedure | 🟢 High | 🟡 Partial | 3 gaps |
| Zettelkasten Procedure | 🟡 Medium | 🟡 Partial | 5 errors + 3 gaps |
| Vault Systems Procedure | 🟡 Medium | 🔴 Incomplete | 8 errors + 5 gaps |

---

## Life Compass Procedure

### Errors

**1. `Ctrl+H` does not open the Life Compass**

Step 1 says: `"Open 01-Vision/life-compass.md (press Ctrl+H or click Life Compass on the dashboard)"`

`Ctrl+H` is wired to `homepage:open-homepage` — it opens `00-Home/00-Home.md`, the dashboard. It does not open the Life Compass directly. The correct path is: press `Ctrl+H` to open the dashboard → click the Life Compass link in the Navigation table.

**Fix:** Change Step 1 to: *"Press `Ctrl+H` to open the dashboard, then click Life Compass in the Navigation section — or navigate directly to `01-Vision/life-compass.md` in the file panel."*

---

### Gaps

**2. Life Compass frontmatter not documented**

The procedure guides you through filling in the note body but never specifies what the frontmatter contains. The actual frontmatter is:

```yaml
tags: [vision]
last_reviewed: YYYY-MM-DD
```

The `last_reviewed` field is referenced in Steps 8 and 13 but the document never explains that it's the only dynamic frontmatter field, or what Obsidian uses it for (it's currently not queried by any Dataview or base — it's a personal timestamp only).

**3. No "Future Vision" cross-reference procedure**

The Life Compass Procedure references Future Vision in Parts 4 and 5 but there is no step describing when or how to update `01-Vision/future-vision.md`. The quarterly review (Step 8 of the quarterly review template) has a Vision Check section, but the Life Compass Procedure never connects to it or explains what the Future Vision is.

**4. Weekly review section numbering mismatch**

Part 5 says: *"Section 6 of the weekly review asks: 'Did you act in line with your core values?'"*

The weekly review template Section 6 is "Reflection prompts" — which does include the values prompt. This is technically accurate. However the procedure does not acknowledge that the weekly review template only has 6 sections (1, 1b, 2, 3, 4, 5, 6). The Vault Systems Procedure documents Sections 7, 8, and 9 but these do not exist in the actual template (see Vault Systems section below).

---

## Zettelkasten Procedure

### Errors

**1. Step 8 references the old "numbered" permanent note naming convention (stale)**

Step 8 says: *"Or the numbered approach already in use: `permanent-note-06 - Flow requires challenge...`"*

All permanent notes were renamed to full kebab-case claim titles in the June 2026 cleanup. There is no `permanent-note-06` in the vault. The numbered approach no longer exists and should not be offered as a current option.

**Fix:** Remove the second paragraph entirely. The only naming convention is kebab-case claim titles: `flow-requires-challenge-calibrated-just-above-current-skill.md`

---

**2. Step 13 — "QuickAdd: New MOC" does not exist**

Step 13 says: *"`Ctrl+P` → 'QuickAdd: New MOC'"*

There is no "New MOC" choice in QuickAdd. The six QuickAdd choices are:
- New Fleeting Note
- New Permanent Note
- Add to Daily Capture
- Weekly Calendar
- Next Week Calendar
- New Troubleshooting Log

Creating a MOC is done via the Zettelkasten index Quick actions table (an Advanced URI link to `06-Zettelkasten/MOC/New MOC.md`). Templater then applies the MOC Template automatically.

**Fix:** *"1. Use the [New MOC](obsidian://advanced-uri?vault=Slip%20Box&filepath=06-Zettelkasten%2FMOC%2FNew%20MOC.md) link in the Zettelkasten index Quick actions table — OR navigate to `06-Zettelkasten/MOC/` and create a new note there. Templater applies the MOC Template automatically."*

---

**3. Step 9 Method 2 command palette instruction is misleading**

Step 9 says: *"Method 2 — Command palette: `Ctrl+P` → 'QuickAdd: New Permanent Note' → enter the claim as the filename."*

The command palette name is `QuickAdd: choice: New Permanent Note` not `QuickAdd: New Permanent Note`. More importantly, QuickAdd template choices prompt for a filename automatically — you don't "enter the claim" separately, you enter it when QuickAdd asks "Enter file name." This is a minor clarity issue but causes confusion for first-time use.

**Fix:** *"Method 2 — Command palette: `Ctrl+P` → type 'New Permanent Note' → press Enter → type the claim title when QuickAdd prompts for a filename → Enter."*

---

**4. Step 3 claims `Ctrl+Shift+T` creates a troubleshooting log — verified correct**

✅ Confirmed: `quickadd:choice:6a34ec86-7258-422d-95a1-322854a1f19c` (New Troubleshooting Log) is wired to `Ctrl+Shift+T`. This is accurate.

---

**5. Step 14 "change its `type:` to something other than `fleeting`" — ambiguous**

The instruction says processed fleeting notes can have their `type:` changed instead of being deleted. This works (Dataview filters on `type = "fleeting"`), but it leaves processed notes sitting in `06-Zettelkasten/Fleeting/` as untyped or retyped files — orphaned, not in any proper folder.

**Fix:** Make the instruction explicit about the two valid outcomes: *"Delete the note (most common — a processed fleeting note has served its purpose) OR move it to `_archive/Fleeting/` if you want to keep the original capture for reference. Do not simply change the `type:` and leave it in the Fleeting folder — it creates clutter that isn't captured by any Dataview query."*

---

### Gaps

**6. Literature note hotkey not documented**

Step 4 says to create a literature note via the Zettelkasten index or by navigating to the folder. There is no QuickAdd choice and no hotkey for "New Literature Note." The procedure should explicitly state: *"There is no hotkey for literature notes. Create them by clicking 'New literature note' in the Zettelkasten index Quick actions table, or by navigating to `06-Zettelkasten/Literature/` and creating a note there."* The current wording implies a hotkey might exist.

**7. The Dataview stats table in the Zettelkasten index is not explained**

The index shows a live stats table (Fleeting / Literature / Permanent / MOC counts) via a Dataview `GROUP BY true` query. Neither the Zettelkasten Procedure nor the Master Guide explains what drives these numbers or that the counts will only update when notes have the correct `type:` frontmatter field. If a note is missing `type:`, it won't be counted.

**8. `dataview-ignore: true` on fleeting notes creates a gotcha**

All fleeting notes have `dataview-ignore: true` in their template (verified in `_templates/Fleeting Note Template.md`). However, the Zettelkasten index uses a Dataview query to populate the Fleeting inbox. **This is a contradiction**: Dataview should ignore notes with `dataview-ignore: true`, yet the fleeting inbox query works because the Dataview-ignore flag applies to queries *outside* the note's own folder in some configurations, or the plugin respects a folder-level override.

This should be documented. The current procedure says nothing about this and users who see `dataview-ignore: true` in a fleeting note may wonder why it still shows in the index.

---

## Vault Systems Procedure

### Errors

**1. Weekly review template has 6 sections — Procedure describes 9**

The Vault Systems Procedure documents Sections 7 (Next week intention), 8 (Zettelkasten inbox), and 9 (Capture anything else) in detail. These sections **do not exist in the actual weekly review template**. The template ends at Section 6 (Reflection prompts).

This is the most significant error in any of the three documents. Someone following the procedure would open their weekly review note and find Sections 7, 8, and 9 missing.

**Resolution options:**
- **Option A (recommended):** Add Sections 7, 8, and 9 to the weekly review template to match the procedure
- **Option B:** Remove Sections 7, 8, 9 from the procedure and clarify that next week intention, Zettelkasten inbox, and brain dump are done separately

**2. Step 3 (Quest habits) says "three checkboxes" — now six**

Step 3 says: *"Three checkboxes: 🏃 Moved for 30+ min · 😴 In bed by target time · 🥗 Avoided main dietary drain"*

The daily note template was updated June 5, 2026 to include six checkboxes — three for Health Reset Q3 and three new ones for New Role Integration Q3. The procedure does not reflect this and doesn't document the New Role Integration habits.

**Fix:** Update Step 3 to document both habit blocks:
- Health Reset Q3: 🏃 Moved for 30+ min · 😴 In bed by target time · 🥗 Avoided main dietary drain
- New Role Integration Q3: 📝 Captured one work observation or system detail · 🤝 Connected with or followed up with a colleague · 🔧 Made progress on an open technical issue or task

---

**3. `Ctrl+Shift+M` is not assigned as a hotkey**

Step 5 says: *"Press `Ctrl+Shift+M` (if hotkey assigned)"*

Verified against `hotkeys.json`: `Ctrl+Shift+M` has no assigned command. The "(if hotkey assigned)" caveat is technically accurate but unhelpful — it leaves the reader unsure whether to expect this to work. The template is invoked via `Ctrl+P` → type "Update Focus Minutes" → Enter.

**Fix:** *"At end of day, press `Ctrl+P` → type 'Update Focus Minutes' → Enter. (Optional: assign `Ctrl+Shift+M` in Settings → Hotkeys → search 'Templater: Insert template' and create a hotkey for the Update Focus Minutes template.)"*

---

**4. `sleep_hours` field missing from vitals documentation**

The daily note frontmatter includes `sleep_hours:` (verified in template). The Vault Systems Procedure's Step 6 vitals table does NOT list this field — not in the table, not in the descriptions. The weekly review Dataview vitals table also does not display `sleep_hours`.

This is both a documentation gap and a functional gap: the field is captured but never shown or used.

**Complete vitals field list (what the template actually contains):**

| Field | Documented in procedure | Shown in weekly review Dataview |
|---|---|---|
| `bp_systolic` | ✅ | ✅ |
| `bp_diastolic` | ✅ | ✅ |
| `pulse` | ✅ | ✅ |
| `glucose` | ✅ | ✅ |
| `glucose_context` | ✅ | ✅ (⚠️ flag) |
| `weight` | ✅ | ✅ |
| `steps` | ✅ | ✅ |
| `energy` | ✅ | ✅ |
| `sleep_hours` | ❌ missing | ❌ missing |

**Fix:** Add `sleep_hours` to Step 6 vitals table: *Sleep hours, e.g. `7.5` — enter hours of sleep from previous night, measured at any point during the day.* Then add `sleep_hours` to the weekly review Dataview vitals table.

---

**5. Quest health indicator — procedure and dashboard use different logic**

The Vault Systems Procedure (Section 5, quest progress) states the health thresholds as:
- ≥ 66% → 🟢 On track
- 33–65% → 🟡 Check in
- < 33% → 🔴 At risk

The weekly review template uses:
```
choice(progress >= 66, "🟢 On track", choice(progress >= 33, "🟡 Check in", "🔴 At risk"))
```
This matches the procedure.

But `00-Home/quests.base` uses a **completely different time-aware formula**:
```
on_track: if(progress >= 50 && days_left > 30, "On track", 
          if(progress < 30 && days_left < 45, "At risk", "Check in"))
```

The dashboard and weekly review show *different health statuses for the same quest at the same progress level*. A quest at 45% with 35 days left shows 🟡 Check in in the weekly review but "Check in" in the dashboard too — but the thresholds that produce each result differ. This causes confusion.

**Fix:** Standardize one formula, document it, and use it in both places. The time-aware formula in `quests.base` is more accurate (it accounts for how far through the quarter you are). Recommend updating the weekly review template Dataview to use the same logic as `quests.base`.

---

**6. Section 3 focus hours — "The Dataview table may show them automatically" understates what's there**

Step 3 says the Dataview table "may show them automatically." In reality, the weekly review template Section 3 has both a full Dataview table showing each day's focus time with 🟢/🟡/🔴 status indicators AND a DataviewJS progress bar showing weekly total vs. 1,200-minute target with a visual fill bar. This is a significant feature that's undersold by "may show them automatically."

**Fix:** Document what the Section 3 Dataview block actually produces:
- Row per day showing `focus_minutes`, hours/minutes conversion, and daily status (🟢 ≥ 240 min · 🟡 ≥ 120 min · 🔴 < 120 min · ⬜ not entered)
- Weekly total vs. 1,200-minute target with `▓░` progress bar
- Automated coaching message (✅ Target hit / 🟡 75% / 🔠 50% / 🔴 Below pace)
- Reminder to copy total to `focus_minutes:` frontmatter

---

**7. Quarterly review — procedure says `focus_hours_total` but actual field is `focus_minutes_total`**

Section 4 quarterly review says: *"Copy `focus_hours_total` and quest counts to frontmatter."*

The actual frontmatter field in both the Monthly and Quarterly Review templates is `focus_minutes_total:` (verified). There is no `focus_hours_total` field anywhere. This mismatch means the procedure tells you to copy to a field that doesn't exist.

**Fix:** Change to `focus_minutes_total` throughout.

---

**8. Backup section says "every 15 minutes" — actual schedule is hourly (if configured)**

Section 8 says: *"Every 15 minutes (configurable), the vault auto-commits to a private GitHub repository."*

`vault-backup.bat` header comment says "Scheduled via Windows Task Scheduler — runs hourly." The Vault Backup System document specifies setting up Task Scheduler to run every hour. The 15-minute figure is unsupported by any configuration.

Additionally, the Task Scheduler setup is not automatic — it requires manual setup following the Vault Backup System procedure. If the user hasn't done this, there is NO auto-backup running. The procedure should distinguish between "configured hourly backup (if Task Scheduler is set up)" and "run manually by double-clicking vault-backup.bat."

**Fix:** *"The backup runs hourly if Windows Task Scheduler has been configured (see [[_docs/Vault Backup System|Vault Backup System]] for setup). If not yet configured, the backup is manual: double-click `_scripts/vault-backup.bat` in File Explorer."*

---

**9. Recovery section uses `yourusername` placeholder**

The recovery section shows: `git clone https://github.com/yourusername/slip-box-vault.git`

The actual repository is `https://github.com/glpelletier-jpg/slip-box-vault.git`.

---

### Gaps

**10. "Today's schedule" section not documented in daily note workflow**

The daily note template now has `### 📅 Today's schedule` as the first section after the quick-links table. It auto-populates via `daily-schedule.js` when the note is created, showing today's Google Calendar events (and work calendar events, now that the work ICS is configured). 

Steps 1–7 of the daily note procedure make no mention of this section. There is no step describing:
- What it shows (calendar events from Google Calendar personal + work feeds, Todoist tasks with ✅ prefix, 🏢 for work events)
- How to interpret it (the schedule is pre-populated — you review it as part of Step 2 when writing your focus intention)
- What to do if it shows a warning (ICS URL not set → check QuickAdd settings)
- That it only populates on note creation — it does not refresh if you press Ctrl+D on an existing note

**11. Work calendar ICS configuration not documented**

Three scripts now support a `work_ics_url` setting (added June 5, 2026): `weekly-calendar.js`, `next-week-calendar.js`, `daily-schedule.js`. Work events appear with a 🏢 prefix. 

No procedure document explains how to configure this. The user needs to:
1. Open Google Calendar → Settings → the work calendar → copy "Secret address in iCal format"
2. In Obsidian: QuickAdd → Manage Macros → Weekly Calendar → ⚙️ gear icon → paste URL in "Work calendar ICS URL" field
3. Repeat for Next Week Calendar macro

This is a non-obvious setup that belongs in Vault Systems Part 7 (Three-Tool System) and in the daily note Step 1 (Today's schedule section).

**12. Monthly review `focus_minutes_total` frontmatter field not explained**

The monthly review procedure says to copy the total to `focus_minutes_total:` in Properties but does not explain that this field is what the quarterly review Dataview uses to pull monthly data automatically. Without this number in the frontmatter, the quarterly review Section 2 Dataview shows dashes.

**13. Quest milestone math inconsistency**

The quest template shows 5 milestone bullets, but the template's own Todoist sync note says "each top-level milestone = 25 points." Five milestones × 25 = 125, not 100. The Vault Systems Procedure also says 25 points per milestone.

The intent appears to be 4 substantive milestones × 25 = 100, with the "Final (week 12)" treated as the completion of Month 3's milestone, not a fifth independent milestone. This needs to be explicit in the procedure and the quest template should note the correct math: *4 milestones × 25 = 100% — the Final item marks completion of the Month 3 milestone.*

**14. `Ctrl+Shift+M` setup instruction completely absent**

`Ctrl+Shift+M` for "Update Focus Minutes" is not assigned but is listed in the quick reference hotkey table at the bottom of the Vault Systems Procedure. The procedure for assigning it is never given. A user who sees it in the hotkey table will try it, find it doesn't work, and have no path to fix it.

**Fix:** Add to the hotkey table: `Ctrl+Shift+M` *(not assigned by default — assign via Settings → Hotkeys → search "Templater: Create new note from template")* — and add a one-time setup note in Step 5.

---

## Cross-document consistency issues

**15. Weekly review sections 7, 8, 9 appear in Vault Systems but not in the template**

| Section | In Vault Systems Procedure | In Weekly Review Template |
|---|---|---|
| 1 — Clear the decks | ✅ | ✅ |
| 1b — This week's calendar | ✅ | ✅ |
| 2 — Life area check-in | ✅ | ✅ |
| 3 — Focus hours | ✅ | ✅ |
| 4 — Three wins | ✅ | ✅ |
| 5 — Quest progress | ✅ | ✅ |
| 6 — Reflection prompts | ✅ | ✅ |
| 7 — Next week intention | ✅ | ❌ MISSING |
| 8 — Zettelkasten inbox | ✅ | ❌ MISSING |
| 9 — Capture anything else | ✅ | ❌ MISSING |

Sections 7, 8, and 9 should be added to the Weekly Review Template. These are not optional — Section 8 is the entire Zettelkasten processing cadence and Section 7 is where next week's calendar blocking happens.

**16. Three procedures share the `sleep_hours` gap**

`sleep_hours:` exists in the daily note frontmatter. It is not mentioned in Life Compass (N/A), Zettelkasten (N/A), or Vault Systems (gap). It is not shown in the weekly review vitals Dataview. The field is silently being collected but never surfaced, reported on, or connected to the Health Reset quest.

---

## Recommended action list

| Priority | Item | Document | Effort |
|---|---|---|---|
| 🔴 | Add Sections 7, 8, 9 to Weekly Review Template | `_templates/Weekly Review Template.md` | 30 min |
| 🔴 | Fix quest health indicator — standardize formula between weekly review and dashboard | Template + procedure | 20 min |
| 🔴 | Fix `focus_hours_total` → `focus_minutes_total` in quarterly review section | Vault Systems Procedure | 2 min |
| 🟡 | Fix `Ctrl+H` description in Life Compass Procedure Step 1 | Life Compass Procedure | 2 min |
| 🟡 | Remove stale "numbered approach" from Zettelkasten Procedure Step 8 | Zettelkasten Procedure | 2 min |
| 🟡 | Fix "QuickAdd: New MOC" — replace with correct creation method | Zettelkasten Procedure | 5 min |
| 🟡 | Update quest habits to show 6 checkboxes (both quests) | Vault Systems Procedure Step 3 | 5 min |
| 🟡 | Add `sleep_hours` to vitals documentation and weekly review Dataview | Vault Systems Procedure + template | 15 min |
| 🟡 | Fix backup interval: "15 min" → "hourly (if Task Scheduler configured)" | Vault Systems Procedure | 5 min |
| 🟡 | Fix GitHub URL placeholder `yourusername` → `glpelletier-jpg` | Vault Systems Procedure | 2 min |
| 🔵 | Document "Today's schedule" section in daily note workflow | Vault Systems Procedure Step 1 | 10 min |
| 🔵 | Document work calendar ICS configuration | Vault Systems Procedure Part 7 | 15 min |
| 🔵 | Clarify `Ctrl+Shift+M` setup in procedure and hotkey table | Vault Systems Procedure | 5 min |
| 🔵 | Clarify quest milestone math (4 × 25 = 100) | Vault Systems + Quest Template | 5 min |
| 🔵 | Document `focus_minutes_total` role in quarterly review | Vault Systems Procedure | 5 min |
| 🔵 | Add Future Vision update procedure to Life Compass Procedure | Life Compass Procedure | 10 min |
| 🔵 | Document what drives Zettelkasten stats counts | Zettelkasten Procedure | 5 min |

---

**Links:** [[_docs/Vault Systems — Complete Procedure|Vault Systems Procedure]] | [[_docs/Zettelkasten — Complete Procedure|Zettelkasten Procedure]] | [[_docs/Life Compass — Complete Procedure|Life Compass Procedure]] | [[_docs/Evaluations/Vault Evaluation 8 - June 2026|Vault Evaluation 8]]
