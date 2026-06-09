# Vault Evaluation 1 — June 2026

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

The calendar fetches directly from your Google Calendar ICS feed. No API needed.

| | |
|---|---|
| `Ctrl+Shift+K` | This week → `00-Home/Weekly Calendar.md` |
| `Ctrl+Shift+J` | Next week → `00-Home/Next Week Calendar.md` |

**What events show:** time or all-day range · 👤 attendees · 📍 location · event description · `← today` marker · multi-day events span all days they cover.

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
1. **Complete the Life Compass energy audit** — rate each of the 6 life areas 1–5 right now. Takes 5 minutes and makes every review more useful.
2. **Fix the Future Vision stray questions** — three development questions at the bottom of `future-vision.md`. Move them to a `## Questions to develop` section.

### This week
3. **Start the Zettelkasten with one note.** Press `Ctrl+Shift+P`. Pick one claim:
   - *"Habits require a floor before structure"* — from Health Reset Month 1 philosophy
   - *"Motivation troughs are predictable and can be planned around"* — from quest obstacles
   - *"Health is a multiplier, not a separate domain"* — core logic of the quest

4. **Log vitals daily.** You have 2 days of data. The weekly average tables on the dashboard activate at 7+ days. Steps every day is the easiest habit.

---

## Configuration reference — all confirmed correct ✅

| Item | Status |
|---|---|
| 15 community plugins installed and enabled | ✅ |
| Linter: force-yaml-escape OFF | ✅ |
| Linter: _templates excluded | ✅ |
| Tasks: 00-Home + _templates in excludedFolders | ✅ |
| Dataview: _templates in excludeFolders | ✅ |
| Homepage: refreshDataview True | ✅ |
| Homepage: opens 00-Home/00-Home on startup | ✅ |
| Templater: 12 folder templates assigned | ✅ |
| QuickAdd: Weekly Calendar macro with inline UserScript | ✅ |
| Hotkey Ctrl+Shift+K → Weekly Calendar | ✅ |
| Hotkey Ctrl+Shift+J → Next Week Calendar | ✅ |
| Hotkey Ctrl+Shift+F → New Fleeting Note | ✅ |
| Hotkey Ctrl+Shift+P → New Permanent Note | ✅ |
| Hotkey Ctrl+Shift+C → Add to Daily Capture | ✅ |
| Hotkey Ctrl+D → Open today's daily note | ✅ |
| Hotkey Ctrl+Shift+W → Open weekly review | ✅ |
| Dataview JS enabled | ✅ |
| Periodic Notes: daily/weekly/monthly/quarterly configured | ✅ |
| Daily Note Template: `energy:` frontmatter field | ✅ |
| daily-focus.base: intention vs. reflection tracker | ✅ |
| All templates: dataview-ignore: true | ✅ |
