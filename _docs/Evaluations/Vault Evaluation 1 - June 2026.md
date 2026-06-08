# Vault Evaluation — June 2026

*Full evaluation as of June 4, 2026. All issues below are fixed in this version.*

---

## Vault health scorecard

| Area | Status | Notes |
|---|---|---|
| Configuration | 🟢 Healthy | All plugins, hotkeys, templates correct |
| Weekly Calendar | 🟢 Working | Fetches Google Calendar via ICS — press Ctrl+Shift+K |
| Daily Focus base | 🟢 New | Intention vs. reflection tracker — in dashboard and all reviews |
| Base navigation | 🟢 New | Contextual nav bars on all 9 base embeds |
| Linter | 🟢 Fixed | force-yaml-escape OFF — numbers stay numbers |
| Homepage | 🟢 Fixed | refreshDataview True — dashboard auto-refreshes |
| Tasks plugin | 🟢 Fixed | 00-Home and _templates excluded from scanning |
| Health Reset Quest | 🟢 Strong | Well-written, realistic, habits being tracked |
| Life Compass | 🟡 Partially filled | Values written — roles and energy audit still empty |
| Future Vision | 🟡 Good | Stray questions at bottom need moving |
| Vitals tracker | 🟡 Running | 2 days of data — keep logging daily |
| Zettelkasten | 🟡 Not started | Material is ready — start with one permanent note |

---

## Weekly Calendar — current setup

The calendar fetches directly from your Google Calendar ICS feed. No API needed. See **Part 5b** of the Master Guide for full documentation.

| | |
|---|---|
| `Ctrl+Shift+K` | This week → `00-Home/Weekly Calendar.md` |
| `Ctrl+Shift+J` | Next week → `00-Home/Next Week Calendar.md` |

**What events show:** time or all-day range · 👤 attendees · 📍 location · event description · `← today` marker · multi-day events span all days they cover.

**Script version — current capabilities:**
- Multi-day events appear on every day they span (not just start day)
- Full date range label on multi-day start: `All day (Jun 11–Jun 14)`
- Continuation label: `All day (cont. day 2 of 4)`
- Attendee display names from ICS CN= field
- Gmail boilerplate descriptions filtered out
- Smart location: skips floor/suite prefixes, shows street address
- Alphabetical tiebreaker for same-time events
- Nav footer on every calendar note

**If events stop loading:** Your ICS URL is stored in QuickAdd → Manage Macros → Weekly Calendar → gear icon on weekly-calendar. The URL is valid indefinitely unless you revoked it in Google Calendar settings.

---

## Issues fixed in this evaluation

### 1. Stale QuickAdd choice ID in Weekly Review Template
The calendar link in the Weekly Review Template was pointing to an old deleted choice (`c4f399c2`). Updated to the correct working choice (`1838ef3d`).

### 2. API key stored in QuickAdd settings
Your Anthropic API key was being stored in the QuickAdd script settings alongside the ICS URL. Removed — the ICS approach doesn't need it, and API keys shouldn't live in vault files.

### 3. All previous fixes remain in place
- Linter force-yaml-escape OFF
- Tasks excludedFolders: 00-Home, _templates
- Dataview excludeFolders: _templates
- Homepage refreshDataview: True
- dataview-ignore: true on all templates

---

## Recommendations — what to do next

### Immediate
1. **Complete the Life Compass energy audit** — rate each of the 6 life areas 1–5 right now. The values section is well-written; the audit table is empty. Takes 5 minutes and makes every review more useful.
2. **Fix the Future Vision stray questions** — three development questions are sitting in the wrong section at the bottom of `future-vision.md`. Move them to a `## Questions to develop` section.

### This week
3. **Start the Zettelkasten with one note.** You have perfect source material in your quest and vision docs:
   - *"Habits require a floor before structure"* — from Health Reset Month 1 philosophy
   - *"Motivation troughs are predictable and can be planned around"* — from quest obstacles
   - *"Health is a multiplier, not a separate domain"* — core logic of the quest
   Pick one, write it as a permanent note (`Ctrl+Shift+P`), link it to the quest.

4. **Log vitals daily.** You have 2 days of data. The weekly average tables on the dashboard activate at 7+ days. Steps every day is the easiest habit — takes 10 seconds at end of day.

### Enhancement recommendations

#### A. Add a "mood" or "energy" frontmatter field to daily notes
You're already tracking 6 physical health metrics. A simple `energy: ` field (1–5 number) would give you a subjective energy reading alongside the objective vitals — useful for spotting patterns (e.g., high glucose days correlate with low energy ratings). One line added to the Daily Note Template frontmatter.

#### B. Benji care tracking
Add recurring Todoist tasks for Benji's regular care (vet checkups, medications, grooming) in the Personal project under a Pets section if not already there. Pets fall through the cracks in task systems.

#### C. Weekly Calendar — next week view
Each Sunday during your weekly review, run `Ctrl+Shift+K` while in the weekly review note to fetch next week's calendar directly into it. This creates a planned vs. actual record automatically over time.

#### D. Quest progress update reminder
Your Health Reset quest has `progress: 0` and it's been running since June 3. Consider adding a recurring Todoist task: "Update quest progress in Obsidian" — due every Sunday. The dashboard quest health indicator is only useful if `progress:` gets updated as milestones are completed.

#### E. Consider adding the Obsidian Web Clipper browser extension
You have an Article template and an Articles folder set up but no easy way to capture from the browser. The Obsidian Web Clipper (official extension for Chrome/Firefox) auto-fills the Article template from any webpage — title, URL, author, source — in one click. Connects directly to your vault.

---

## Configuration reference — all confirmed correct ✅

| Item | Status |
|---|---|
| 16 community plugins installed and enabled | ✅ |
| Linter: force-yaml-escape OFF | ✅ |
| Linter: _templates excluded | ✅ |
| Tasks: 00-Home + _templates in excludedFolders | ✅ |
| Dataview: _templates in excludeFolders | ✅ |
| Homepage: refreshDataview True | ✅ |
| Homepage: opens 00-Home/00-Home on startup | ✅ |
| Templater: 12 folder templates assigned | ✅ |
| Templater: _scripts set as user_scripts_folder | ✅ |
| QuickAdd: Weekly Calendar macro with inline UserScript | ✅ |
| QuickAdd: ICS URL stored in script settings | ✅ |
| Hotkey Ctrl+Shift+K → Weekly Calendar | ✅ |
| Hotkey Ctrl+Shift+J → Next Week Calendar | ✅ |
| Calendar scripts v3 (multi-day, attendees, descriptions, smart location) | ✅ |
| Hotkey Ctrl+Shift+F → New Fleeting Note | ✅ |
| Hotkey Ctrl+Shift+P → New Permanent Note | ✅ |
| Hotkey Ctrl+Shift+C → Add to Daily Capture | ✅ |
| Hotkey Ctrl+D → Open today's daily note | ✅ |
| Hotkey Ctrl+Shift+W → Open weekly review | ✅ |
| Dataview JS enabled | ✅ |
| Periodic Notes: daily/weekly/monthly/quarterly configured | ✅ |
| vitals.base correct format | ✅ |
| 2026-06-04.md: weight 326.4 (bare number) | ✅ |
| Daily Note Template: `energy:` frontmatter field | ✅ |
| vitals.base: energy display, status, and averages | ✅ |
| daily-focus.base: intention vs. reflection tracker | ✅ |
| Daily Note Template: `focus_intention:` and `end_of_day:` frontmatter | ✅ |
| Weekly/Monthly/Quarterly Review Templates: daily-focus.base embedded | ✅ |
| All 9 base embeds: contextual nav bars | ✅ |
| 2026-06-04.md: glucose_context: steroid-affected | ✅ |
| All templates: dataview-ignore: true | ✅ |
