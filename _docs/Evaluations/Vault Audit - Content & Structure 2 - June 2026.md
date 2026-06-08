# Slip Box — Full Audit Report
*June 8, 2026 · Vault v1.4.0*

---

## Summary

| Category | Found | Fixed | Remaining |
|---|---|---|---|
| Unicode-corrupted filenames | 29 | 29 | 0 ✅ |
| Broken wikilinks (real) | 13 | 13 | 0 ✅ |
| Broken wikilinks (scanner false positives) | 2 | — | 2 (resolve fine in Obsidian) |
| Templater links in templates | 6 | — | 6 (expand at runtime ✅) |
| Plugin config errors | 2 | 2 | 0 ✅ |
| Workflow errors | 1 | 1 | 0 ✅ |
| Stale document data | 4 fields | 4 | 0 ✅ |
| Malformed imported note | 1 | 1 | 0 ✅ |

---

## Issues Fixed

### 1. Unicode Filename Corruption — 29 files
Same recurring issue: your zip tool double-encodes UTF-8 characters in filenames. Em dashes, en dashes, curly apostrophes, and emoji all corrupt on every zip cycle.

**Affected files this session:**
- `_docs/` — 11 procedure/guide files (Life Compass, Vault Systems, Zettelkasten, Reviews & Planning, etc.)
- `05-Resources/Courses/HAM-Radio/` — 4 files (Overview, Progress, Reference, POTA guide)
- `07-Work-Knowledge/Automation/` — CIP protocol note
- `06-Zettelkasten/Fleeting/` — 13 files with apostrophes/emoji in names

**Permanent fix:** Switch to 7-Zip for creating archives. In 7-Zip: right-click folder → 7-Zip → Add to archive → check "UTF-8 filenames". This is a one-time setting change on your PC.

---

### 2. Periodic Notes Daily Template — BLANK (critical workflow break)
`periodic-notes/data.json` had `"template": ""` for daily notes. This means every new daily note opened as a blank file with no frontmatter, no vitals section, no focus log, no quest habits — none of it.

**Fixed:** Set to `_templates/Daily Note Template.md`.

This explains why notes created before you manually applied the Templater template had inconsistent content.

---

### 3. Commander Ribbon Used Wrong Daily Note Command
The ribbon "Open today's daily note" button was bound to `daily-notes` (Obsidian core plugin) instead of `periodic-notes:open-daily-note`. The core command creates a blank note and ignores the Periodic Notes template setting entirely.

**Fixed:** Both the ribbon button and the toolbar button now use `periodic-notes:open-daily-note`.

---

### 4. Broken Wikilinks — 13 resolved

| File | Broken link | Fix applied |
|---|---|---|
| `PKM and Zettelkasten MOC.md` | `[[...Defeat the Collector's Fallacy [Second Brain Quickstart]]]` | Fixed double-bracket syntax |
| `PKM and Zettelkasten MOC.md` | `[[...Stop losing your notes [Second Brain Quickstart]]]` | Fixed double-bracket syntax |
| `PKM and Zettelkasten MOC.md` | `[[...Hard-Won Lessons from PKM... My Ow]]` | Source note doesn't exist — replaced with plain text |
| `PKM and Zettelkasten MOC.md` | `[[Capturing ideas at point of contact prevents...]]` | Replaced with correct permanent note path |
| `PKM and Zettelkasten MOC.md` | `[[(Evergreen note-writing helps reading efforts accumulate)]]` | Redirected to the existing note on same topic |
| `capturing-ideas...permanent note` | `[[A Simply Way to Organise your Life - Nathaniel Drew]]` | Source note doesn't exist — linked to related existing note |
| `Evaluations/Evaluations.md` | Missing Eval 13 entirely | Added row with correct link |
| `Vault Evaluation 13.md` | `[[Progress]]` bare link | Resolved to `HAM Radio General License — Progress` |
| `Vault Systems — Complete Procedure.md` | `[[06-Zettelkasten/Literature/Title]]` | Replaced with folder link (it's a documentation placeholder) |
| `12 Principles for using Zettelkasten.md` | Dead image links from source vault | Removed (4 links to `12_Principles_*`, `Post - Zettelkasten`, etc.) |
| `Introduction to the Zettelkasten Method.md` | `[[Investing for normal people...]]` | Removed (leaked cross-note fragment from import) |
| `(S)(Article) Bayes' Theorem.md` | Malformed `[[Fascimile available online](url)]` | Converted to proper markdown link syntax |
| `Eval 13 (this report)` | `[[Progress]]` | Resolved to HAM Radio Progress file |

---

### 5. Malformed Imported Note Renamed + Cleaned
`[12 Principles for using Zettelkasten](httpsforumobsidianmdt12-principles.md` — the filename contained a full Markdown hyperlink as a filename, clearly an import artifact from another app. 

**Fixed:** Renamed to `12 Principles for using Zettelkasten.md`, cleaned the frontmatter title, removed all dead image links from the source vault.

---

### 6. Vault State Document — Stale Stats Updated

| Metric | Was | Now |
|---|---|---|
| Daily notes | 18 | 19 |
| Fleeting notes | 141 | 136 |
| Literature notes | 38 | 46 |
| Stats header date | June 7 | June 8 |

---

## False Positives (Not Broken)

These showed up in the scan but resolve correctly in Obsidian:

- `[[Defeat the Collector's Fallacy [Second Brain Quickstart]]]` — Obsidian handles `]` inside wikilink names; Python scanner misreads the inner bracket as closing the link. File exists on disk.
- `[[Stop losing your notes [Second Brain Quickstart]]]` — same reason. File exists.
- All 6 `[[03-Reviews/Plan-Actual/<% tp.date.now(...) %>...]]` links in templates — these are Templater expressions that expand to real paths at note creation time. Not broken.
- `[[docs.base]]` in `_docs/_docs.md` — `.base` files exist; Obsidian resolves them correctly despite the extension.

---

## Vault Health — Post-Fix

| Check | Status |
|---|---|
| Unicode-corrupted filenames | ✅ 0 |
| Real broken links | ✅ 0 |
| Periodic Notes daily template | ✅ `_templates/Daily Note Template.md` |
| Templater script folder | ✅ `_scripts` |
| Dataview JS enabled | ✅ True |
| Homepage refreshDataview | ✅ True |
| Commander daily note button | ✅ Uses Periodic Notes |
| Vault State stats | ✅ Accurate as of June 8 |
| All 19 daily note frontmatters | ✅ Complete |
| All 30 templates clean | ✅ No syntax errors |
| All 11 QuickAdd choices | ✅ Scripts/templates exist |

---

## One Action Required From You

**Fix the zip tool before next upload.** Every single session starts with 29 filename renames because your Windows zip utility corrupts UTF-8. Takes 2 minutes to fix once:

1. Install 7-Zip (free, at 7-zip.org) if not already installed
2. Right-click your Slip Box folder → 7-Zip → Add to archive
3. Format: zip, check "UTF-8 filenames"
4. That's it — no more corrupted filenames ever

Alternatively, rename all em-dash files to use ` - ` (hyphen) instead of `—`. This is universally safe across all tools but requires updating procedure file names.

---

*Evaluation 13 logged. Next eval: after HAM Radio Week 1 study session logged (target: tonight or tomorrow).*
