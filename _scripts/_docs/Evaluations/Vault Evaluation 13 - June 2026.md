# Slip Box — Evaluation & Improvement Report
*Audit date: June 8, 2026 · Vault version: 1.4.0*

---

## 🔧 Bugs Fixed This Session

### 1. Unicode filename corruption — 26 files (new encoding variant)
The filenames corrupted again after re-zipping, this time with a **different encoding pattern**: `#U0393#U00c7#U00f6` instead of `#U2014`. This is a Windows CP437/mojibake chain — your zip tool is double-encoding the UTF-8 bytes of the em dash. Every file with `—`, `–`, or `'` in its name was affected.

**Root cause:** Your zip/archive tool on the source machine is not preserving UTF-8 filenames correctly. This will keep happening unless you fix it at the source. See **Persistent Fix** below.

**Fixed:** All 26 files renamed back to proper UTF-8 characters.

### 2. Stray empty `120.md` at vault root
An empty file appeared at the vault root. Deleted.

### 3. Templater `script_files_folder` was NULL
**Critical.** The `_scripts/` folder was not configured in Templater's settings, meaning `daily_schedule.js`, `fleeting-triage.js`, `create-course.js`, and `vault_backup_qa.js` would all silently fail. The daily note's "Today's schedule" section would show the fallback error message instead of your calendar.

**Fixed:** `script_files_folder` set to `_scripts` in Templater's `data.json`.

### 4. Homepage not refreshing Dataview on open
`refreshDataview` was `false`, meaning the dashboard base views (vitals, quests, focus log) showed stale data when you first opened Obsidian each day.

**Fixed:** `refreshDataview` set to `true`.

---

## ⚠️ Persistent Fix Required (Do This Once)

The unicode filename corruption will keep coming back every time you zip and re-upload. The fix depends on how you're creating the zip:

**If using Windows Explorer right-click → "Send to → Compressed folder":** This tool does not preserve UTF-8 filenames. Use **7-Zip** instead — right-click → 7-Zip → Add to archive → set "UTF-8 filenames" option.

**If using the `vault-backup.bat` script:** Add the `-tzip` and `-mcu=on` flags to your 7-Zip command, or switch to `robocopy` for the backup and only zip for sharing.

**Long-term:** The cleanest fix is to stop using em dashes (`—`) in filenames entirely and use ` - ` (space-hyphen-space) instead. That's universally safe across all OS/zip tools. However this would require renaming your `_docs/` procedure files and HAM Radio course files — a bigger change that may not be worth it given you have the fix scripted now.

---

## 📊 Vault Health Scorecard

| Dimension | Status | Score |
|---|---|---|
| Frontmatter consistency | All 19 daily notes complete with all 16 fields | 🟢 Excellent |
| Broken links | 72 found → resolved by filename fixes | 🟡 Good (residual cosmetic only) |
| Plugin configuration | Script folder null fixed; dataview refresh fixed | 🟡 Fixed |
| Zettelkasten pipeline | 136 fleeting : 46 literature : 6 permanent | 🟠 Needs attention |
| Focus minutes habit | 11/19 active days, avg 471 min on active days | 🟢 Strong |
| Weekly reviews | W20–W23 filled; W24 blank (current week) | 🟢 Good |
| Work Knowledge | 38 notes, 5 subfolders, troubleshooting logs active | 🟢 Solid |
| Quest progress | Health Reset 25% · New Role 12% | 🟡 Early stage |
| Script health | 6 scripts present, triage script well-built | 🟢 Good |
| Template coverage | 30 templates covering all note types | 🟢 Comprehensive |

---

## 💡 Improvement Recommendations

### Priority 1 — Zettelkasten Bottleneck

The pipeline ratio is **1 permanent note for every 22 fleeting notes**. The collection habit is excellent (136 fleeting, 46 literature), but the synthesis step is not happening. This is the single highest-leverage improvement available.

**The problem isn't discipline — it's friction.** The fleeting-triage script exists and works well. The gap is between triaging a fleeting note (archiving/promoting) and writing a permanent note claim. That step has no script assistance.

**Recommended fix — a "Claim Extraction" prompt in the triage script:**
When promoting a fleeting note to Literature, the script could auto-extract a suggested atomic claim from the note's first paragraph and pre-fill the permanent note title field. One extra suggester step in `fleeting-triage.js` would close this gap.

**Interim target:** Write 2 permanent notes per week during Sunday review. Starting material: the 6 books already in the Vault State's Tier 1 list (Feel Good Productivity, Deep Work, Stolen Focus, Atomic Habits — all have literature notes).

---

### Priority 2 — HAM Radio Study Habit Not Started

The Vault State says "Week 1 starts June 8" but today is June 8 and no study session has been logged. The infrastructure is excellent (5-file course structure, syllabus, progress tracker) — the habit itself needs to start.

**Recommendation:** Add a daily habit checkbox to the daily note template for HAM Radio study days. Something like:
```
**HAM Radio study** (Mon/Wed/Fri)
- [ ] 📻 Completed today's study session — log in [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Progress|HAM Radio Progress]]
```

This makes the absence visible rather than invisible.

---

### Priority 3 — Body Composition Log Not Being Filled

The log has one entry (Jun 7 baseline weight only, no body fat %). The BIA scan process is documented. The watch is set up. The gap is the weekly habit of actually taking the measurement and logging it.

**Recommendation:** Add a Sunday morning reminder to the Weekly Review template — a checkbox at the very top: `- [ ] 📊 BIA scan done — log in Body Composition Log`. Friction for this is near-zero (it's on your wrist), so the blocker is the cue, not the action.

---

### Priority 4 — Work Knowledge Note Quality Variance

`Application Key Facts.md` (481 lines) is essentially a raw import dump — mostly image URLs, an empty Summary section, and a broken attachment link. It's using a `type: fleeting` tag but sitting in `07-Work-Knowledge/Processes/` where you'd expect processed reference content.

Several other Processes notes (`Solid Dose.md`, `Sterile Filling.md`, `Sterile Packaging.md`) are only 11 lines — stubs that haven't been developed.

**Recommendation:** During a slow day at work, spend 20 minutes converting `Application Key Facts.md` into an actual process reference note. Delete the image URL clutter, fill in the Summary and Key Takeaways, and change the `type` to `reference`. The content is presumably in the linked Rockwell manual — add it as a proper attachment.

---

### Priority 5 — Weekly Review W24 Incomplete

W24 has no `rating` or `focus_minutes` in its frontmatter and 141 lines of mostly template scaffolding with no filled content. This is the current week so it's expected to be in progress — but worth noting that the calendar section and life area check-in are both empty.

Since today (June 8) is a Sunday, this is a good day to fill it.

---

### Enhancement Ideas (Lower Priority)

**A. `fleeting-triage.js` enhancement — "Convert to Permanent" action**
Currently the triage script has: Archive, Promote to Literature, Delete, Skip. A fourth action, "Convert to Permanent Note," would let you write an atomic claim directly from a fleeting note without an intermediate literature note step. This is the shortest path to growing the permanent note count from 6 toward the June target of 10.

```javascript
// In the action menu, add:
"✨ Promote → new Permanent note   [${remaining} remaining]", "permanent"

// Handler:
} else if (action === "permanent") {
  const claim = await quickAddApi.inputPrompt("Permanent note claim (kebab-case title):", "");
  if (!claim) return;
  const permPath = `06-Zettelkasten/Permanent/${claim}.md`;
  // create stub, open, archive fleeting
}
```

**B. Dashboard — add a "Today at a glance" section**
The dashboard currently shows Bases views (quests, vitals, focus, reviews). Consider adding a small DataviewJS block at the very top that shows: today's `focus_intention`, today's `energy`, and the two quest daily habits as checkboxes. This gives the dashboard a "today" layer on top of the historical view.

**C. Vitals trend chart**
Now that 10+ days of blood pressure, glucose, weight, and energy data exist, a DataviewJS sparkline or mini-chart in the dashboard would show trends at a glance. This is most useful once you have 30+ days of data — add it in July.

**D. `_reference/Personal/` notes — fragmented**
You have Honda notes, BOAT notes, Home Hunting, DMV, Insurance, Jury Duty, and a Wish List all as separate files. These are fine individually but none are linked to anything else in the vault. Consider adding a `_reference/Personal/Personal Index.md` that acts as a table of contents so they're discoverable from the dashboard or Zettelkasten.

**E. `07-Work-Knowledge/Networking/` — two near-duplicate notes**
`Networks.md` (22 lines) and `Networking.md` (22 lines, folder note) appear to be duplicates. `About Server Management.md` (24 lines) is also a near-stub. These three are candidates for either merging into a single reference note or developing further as the OT-Network project progresses.

**F. Focus minutes not logged today (June 8)**
`2026-06-08` shows `focus_minutes: 0`. Given you've been working in the vault today, consider logging the session before end of day.

---

## 📈 Trend Observations

**What's genuinely working well:**
- The daily note habit is rock solid — 19 days, every field filled in recent notes, DataviewJS vitals table live
- Focus minutes are consistently 450–660 min on active days — exceptional output
- Work Knowledge is growing organically and usably — the Troubleshooting log for the PowerFlex 753 is the kind of note this system was built for
- The 5-script automation layer (calendar, backup, triage, course creation) is sophisticated and well-built
- Life Compass has real, honest personal content — not template filler

**The one structural risk:**
The vault is very good at *capturing* and *organizing* but the synthesis step (Fleeting → Permanent) is lagging. At 6 permanent notes after 3+ weeks, the Zettelkasten is functioning as an archive rather than a thinking system. The triage script is built — using it consistently during Sunday reviews would shift this.

---

*Fixes applied in this session: unicode filenames (26), stray root file, Templater script folder, homepage refresh setting.*
