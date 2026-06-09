# Vault Evaluation 4 — June 2026

> Full independent evaluation of the Slip Box vault. Builds on Evaluations 1–3. Includes all bugs found, system improvements, and a prioritized action plan.

---

## Bugs fixed in this session

Three distinct bugs were found and corrected.

### Bug 1 — Focus log total not calculating (Daily Note Template)

**What was wrong:** The inline expression `= sum(default(this.file.lists.duration, 0))` was written as a Dataview *inline expression* (backtick syntax), but placed outside the list items it was trying to sum. In Obsidian's Dataview inline execution model, `this.file.lists.duration` reads list item inline fields correctly — but only when Dataview is actually enabled for the note. The deeper problem: `focus_minutes: 0` was never being updated because the "copy the total manually" instruction was easy to miss or skip, leaving the field at zero permanently.

**What was fixed:** The focus log section in the Daily Note Template now uses a **DataviewJS block** that reads all `[duration:: N]` list items, sums them, and displays the result with the hours/minutes broken out. The copy reminder is still there, but the total is now computed and displayed clearly. Old notes are unaffected — the fix only applies when you create a new daily note from the template.

**For existing notes:** On any daily note where you logged duration sessions but `focus_minutes` is still 0, open the note, look at the DataviewJS total, and copy the number into the `focus_minutes:` frontmatter field manually.

---

### Bug 2 — Weekly and monthly averages not rendering (00-Home)

**What was wrong:** Three issues, all in the same two Dataview queries:

1. **`steps` stored as a string** — When entering steps in the Properties panel, Obsidian sometimes wraps the value in quotes (e.g., `steps: "3758"`). Dataview's `average()` function cannot average a string — it silently returns null, so the entire Steps column shows `—` or nothing.

2. **`file.day` may be null** — Dataview's `file.day` property is only populated when the *filename itself* is a parseable date (`YYYY-MM-DD`). When it's null, `dateformat(file.day, ...)` throws an error and the GROUP BY clause breaks. Your filenames are formatted correctly, but the fallback to `dv.date(file.name)` makes this bulletproof.

3. **Dataview DQL `GROUP BY` string concatenation** — The original queries used `dateformat(rows.file.day, "YYYY-[W]WW")` inside DQL GROUP BY. This is fragile when `file.day` is null. The replacement uses DataviewJS which gives explicit control over grouping, null handling, and number coercion.

**What was fixed:** Both the weekly averages and monthly averages sections in `00-Home.md` have been rewritten as DataviewJS blocks. `steps` is now coerced to a number with `Number(p.steps) || 0`. The `file.day` fallback is in place. Grouping is done in JavaScript, not DQL.

---

### Bug 3 — Steps field sometimes saved as a quoted string

**Root cause and prevention:** When you type a number into the Properties panel's `steps` field and it was previously blank (not a number type), Obsidian may infer it as a string. 

**Fix going forward:** In the updated Daily Note Template, the `steps:` frontmatter field now has a comment reminding you to enter it as a plain number. If you already have notes with `steps: "3758"`, open each one and in the Properties panel, delete the value and retype it — Obsidian will infer the type correctly when you enter a plain number into a field that currently holds nothing.

---

## Evaluation scorecard

Compared against Evaluation 3.

| Area | Previous | Now | Change |
|---|---|---|---|
| System architecture | 🟢 Excellent | 🟢 Excellent | — |
| Focus log calculation | 🔴 Broken | 🟢 Fixed | ✅ |
| Vitals weekly/monthly averages | 🔴 Broken | 🟢 Fixed | ✅ |
| Permanent notes | 🔴 Critical (1) | 🔴 Critical (1) | — |
| Life Compass blank fields | 🔴 10 empty | 🔴 10 empty | — |
| Weekly reviews | 🟡 1 filled / 3 blank | 🟡 1 filled / 3 blank | — |
| Attachment catalog | 🟡 System built, empty | 🟡 System built, empty | — |
| Bulk import workflow | ❌ No guide | 🟢 Guide created | ✅ |
| Daily note habit | 🟡 Inconsistent | 🟡 Inconsistent | — |
| Plugin set | 🟢 Lean | 🟢 Lean | — |
| Work Knowledge | 🟢 Strong | 🟢 Strong | — |

---

## Improvement recommendations

Organized by effort vs. impact. Do the high-impact/low-effort items first.

---

### Priority 1 — High impact, low effort (do this week)

**1.1 Write 3 permanent notes**
The vault has 38 literature notes with synthesized content. The Zettelkasten has 1 permanent note. This gap makes the entire Zettelkasten section of the dashboard functionally empty. You don't need a process — you just need to write 3 notes using the titles Evaluation 3 already gave you:

- *"Habits require a floor before structure"* — from Atomic Habits + Health Reset
- *"Open loops consume mental bandwidth proportional to emotional weight"* — from GTD
- *"Physical energy is the multiplier on all other productive capacity"* — from Feel Good Productivity

Each one takes 15–20 minutes. Three of them transforms the Zettelkasten from a demo into a working system.

**1.2 Fill the Life Compass blank fields**
Ten fields are empty. Every quarterly and weekly review prompts you for values and role intentions — currently all of those prompts return nothing. This takes one focused 30-minute session. The payoff is that reviews start generating actual insight instead of blank rows.

The ten fields to fill:
- "How I want to show up" for: Integrity, Creation, Foundation, Deliberateness (Presence is done)
- "Where I'm falling short right now" for: Parent, Professional, Builder/Creator
- "One thing I want to do differently" for: Parent, Professional, Builder/Creator

**1.3 Retroactively rate W21–W23**
Open each blank weekly review and fill in at minimum the rating, one win, one miss, and one intention. Even rough estimates are better than blank. This gives the weekly review history enough data to be useful when you look back at it during your monthly review.

**1.4 Enter steps as plain numbers going forward**
When logging steps in the Properties panel, always type a bare number (`3758`, not `"3758"`). The weekly and monthly averages now coerce strings to numbers as a fallback, but the cleanest data is a real number type. If steps is blank on a given day, leave it blank — don't enter 0, which would pull down averages incorrectly.

---

### Priority 2 — High impact, moderate effort (this month)

**2.1 Start the Attachment Catalog with your first 10 work PDFs**
The catalog system is fully built. It just needs files. Use the Bulk Import guide to bring in your most-referenced work materials — Powerflex manuals, the Argenta water production SOP, any IOQ/OQ docs you reference regularly. The goal is not completeness — it's getting the system into active use so it becomes a habit.

Suggested first batch (10 files):
- Your most-used VFD manual (Powerflex 753 or 755)
- Argenta Water Production SOP (current version)
- One IOQ or OQ document from a recent project
- The ISA-88 standard (for CAP cert)
- Any datasheets for instruments you work with regularly

**2.2 Install Web Clipper or set up an article pipeline**
The Articles folder was cleared and is now functionally empty. You have two realistic options:
- Install the **Obsidian Web Clipper** browser extension — clips articles directly into `05-Resources/Articles/` with metadata
- Use the existing **Article Template** manually for anything worth saving permanently

Without one of these, the Articles folder adds no value to the vault.

**2.3 Add `glucose_context` to the vitals display**
Your daily notes include a `glucose_context` field (you've used `normal` and `steroid-affected`). The vitals.base table doesn't show this field. Adding it would make glucose readings interpretable at a glance — a 128 on steroids reads very differently than a 128 fasting. This is a one-line addition to `vitals.base`.

Add to the `properties:` section:
```yaml
  note.glucose_context:
    displayName: Context
```
And add `glucose_context` to the `order:` list in each view after the glucose column.

**2.4 Add an `energy_notes` or `sleep_hours` field**
You track energy as a 1–5 score, which is useful for correlating with other vitals. Adding a `sleep_hours` field to the daily note and vitals tracker would let you see whether sleep predicts energy levels better than glucose or BP — which would make the health data more actionable for the Health Reset Q3 quest.

---

### Priority 3 — Moderate impact, lower urgency (this quarter)

**3.1 Create a MOC for HAM Radio**
You have a complete HAM Radio study system in `05-Resources/Courses/HAM-Radio/`. It has its own folder, a master reference note, a syllabus, and Todoist project. It deserves a proper MOC linking all the key concepts — propagation, operating procedures, equipment — so it can grow into a real reference resource as you advance beyond the General license.

**3.2 Build a Vendor Index note in Work Knowledge**
`07-Work-Knowledge` has notes for Automation, Networking, Processes, Troubleshooting, and CAP. It doesn't have a vendor index. A single `Vendors.md` note that lists every vendor you work with (Rockwell, Endress+Hauser, Siemens, Pepperl+Fuchs, etc.) with links to their attachment subfolder, your notes about their products, and key support/download URLs would be a high-value reference note.

**3.3 Automate the focus_minutes copy step**
Currently the focus log requires manually copying the DataviewJS total into `focus_minutes:` in frontmatter. This is a friction point. A Templater "update frontmatter" script could automate this — run it at end of day and it reads the total and writes it to `focus_minutes:` automatically. This is a Templater `tp.file.include()` + frontmatter write pattern. Worth building once you've established the daily note habit.

**3.4 Add a `project` tag to Work Knowledge notes**
Several Work Knowledge notes relate to specific projects (CCPC-1250, Argenta water production line, etc.). Adding a `project:` frontmatter field would let you build project-based views with Dataview — e.g., "all notes and PDFs related to CCPC-1250". This maps directly to how your actual work is organized.

---

### Priority 4 — Nice to have (backlog)

**4.1 Weekly habit tracker on the dashboard**
The health quest habits (moved 30 min, in bed on time, avoided dietary drain) are tracked as checkboxes in each daily note. A small DataviewJS block on the dashboard could show a 7-day habit completion grid — which habits you hit each day this week. This makes the quest habits visible daily instead of buried in individual notes.

**4.2 Standardize the `glucose_context` vocabulary**
You've used `normal` and `steroid-affected`. Add a few more standard values to the Daily Note Template comment: `fasting`, `post-meal`, `steroid-affected`, `ill`, `exercise-affected`. Consistent values make filtering useful later.

**4.3 Add cover images to attachment companion notes**
The `Automation.md` folder note references `cover: "[[attachments/my-banner.jpg]]"` for card view display. When the catalog grows, having cover images (vendor logos, document preview screenshots) makes the cards view much more usable. Not urgent — do this once you have 20+ files in the catalog.

---

## What's working well — keep it

These are genuine strengths of the current system. Don't change them.

**The plugin set is exactly right.** 15 plugins, no bloat. Dataview, Templater, Tasks, Calendar, Periodic Notes, QuickAdd, and Heatmap Calendar are the right core. The Notebook Navigator gives the vault a clean file browsing experience. Avoid adding more plugins — the system is already feature-complete.

**The folder structure is solid.** The numbered top-level folders (`00-Home` through `07-Work-Knowledge`) plus `_attachments`, `_reference`, `_templates`, and `_archive` is clean and won't need restructuring as the vault grows. The work folder structure mirrors real work domains, which is exactly right.

**The `.base` system for vitals and focus is well-designed.** The `vitals.base`, `focus-log.base`, and attachment catalog bases are the right tool for structured data display. They separate the view from the data, which means you can add new views without touching your daily notes.

**The Work Knowledge structure is genuinely useful.** 35+ notes covering Automation, Networking, Processes, Troubleshooting, and CAP Certification is a real knowledge base. The link structure between `07-Work-Knowledge` and `_attachments/Work` is well thought out.

**The Attachment Catalog architecture is exactly right.** Companion notes + `.base` per subfolder + master catalog is the correct design for a growing PDF library. The naming convention and category taxonomy will scale well.

---

## Summary: the three things that matter most right now

If you only do three things after reading this evaluation:

1. **Write 3 permanent notes** — the Zettelkasten is empty without them, and the content to write them already exists in your literature notes
2. **Fill the Life Compass blank fields** — this is the input that makes every review meaningful
3. **Start the Attachment Catalog** with 5–10 work PDFs using the new bulk import guide — the system is built; it just needs files

Everything else is improvement. Those three things transform the vault from impressive infrastructure into a system that actually works.

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Evaluations/Vault Evaluation 3 - June 2026|Evaluation 3]] | [[_attachments/Attachment Catalog|Attachment Catalog]]
