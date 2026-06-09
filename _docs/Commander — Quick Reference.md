---
title: Commander — Quick Reference
date: 2026-06-06
tags: [procedure, commander, navigation]
---

# Commander — Quick Reference

> Commander adds custom action buttons to Obsidian. This vault uses three Commander surfaces — all pointing to the same 5 core actions.

---

## Configured buttons

| Button | Action | Command ID |
|---|---|---|
| 🏠 Dashboard | Opens `00-Home/00-Home.md` | `homepage:open-homepage` |
| 📅 Today's Note | Opens or creates today's daily note | `periodic-notes:open-daily-note` |
| 📆 Weekly Review | Opens this week's review | `periodic-notes:open-weekly-note` |
| 💡 New Permanent Note | QuickAdd → Permanent Note template | `quickadd:choice:13aab76c-...` |
| 🔧 New Troubleshooting Log | QuickAdd → Troubleshooting Log template | `quickadd:choice:6a34ec86-...` |
| ⏱ Daily Capture | QuickAdd → appends to today's note capture inbox | `quickadd:choice:73fd090a-...` |

---

## Where buttons appear

| Surface | Setting | Buttons |
|---|---|---|
| **Toolbar** (top of every note) | Always on — no setting needed | All 5 action buttons |
| **Left Ribbon** (vertical sidebar strip) | Settings → Appearance → Show ribbon = ON | Dashboard (🏠) only |
| **Tab Bar** (above open tabs) | Settings → Appearance → Show tab title bar = ON | All 5 action buttons |

The Toolbar is the most reliable surface — it appears in every open note with no extra settings required. If you don't use the Tab Bar or Ribbon, the Toolbar alone covers everything.

---

## How to edit buttons

1. Settings → Commander
2. Select the surface tab (Ribbon / Tab Bar / Toolbar)
3. Click a button to rename it or change the icon
4. Click `+ Add command` to add a new button — search by command name
5. Drag to reorder

---

## Troubleshooting

**Button shows in Commander settings but doesn't appear in the vault**

Three requirements must all be true for a button to render:
1. The `id` field in `.obsidian/plugins/cmdr/data.json` must be the Obsidian command ID (e.g. `periodic-notes:open-daily-note`), not a random UUID
2. The entry must include `"mode": "any"` (or `"desktop"` / `"mobile"`)
3. For Tab Bar: Settings → Appearance → Show tab title bar must be ON

If you edit `data.json` directly, Obsidian must be fully closed and reopened for changes to take effect.

**Button appears but click does nothing**

The command the button refers to isn't registered. This happens when:
- The plugin providing that command is disabled (e.g. QuickAdd disabled → QuickAdd buttons break)
- The QuickAdd choice was deleted or renamed (the UUID in the button ID becomes invalid)

Fix: Settings → Commander → remove the broken button → Add command → search again.

**"No commands here!" in Commander settings**

This is the display when the entries in `data.json` have invalid command IDs. Open `.obsidian/plugins/cmdr/data.json`, check that `id` fields are actual command IDs (not UUIDs), and that each entry has `"mode": "any"`.

---

## Configuration file location

`.obsidian/plugins/cmdr/data.json`

The three relevant keys and their valid entry format:

```json
{
  "leftRibbon": [
    {
      "id": "homepage:open-homepage",
      "name": "Dashboard",
      "icon": "home",
      "mode": "any",
      "color": ""
    }
  ],
  "titleBar": [
    {
      "id": "periodic-notes:open-daily-note",
      "name": "Today's Note",
      "icon": "calendar-days",
      "mode": "any",
      "color": ""
    }
  ],
  "pageHeader": [
    {
      "id": "periodic-notes:open-daily-note",
      "icon": "lucide-calendar-days",
      "name": "Today's Note",
      "mode": "any"
    }
  ]
}
```

Note: `pageHeader` (Toolbar) uses slightly different key names — `icon` uses `lucide-` prefix format and there is no `color` field. `leftRibbon` and `titleBar` entries use the same format.

---

## QuickAdd choice IDs (do not change these)

| Choice | UUID |
|---|---|
| New Permanent Note | `13aab76c-a88d-406a-9114-70aa41ad812c` |
| New Troubleshooting Log | `6a34ec86-7258-422d-95a1-322854a1f19c` |
| Add to Daily Capture | `73fd090a-a813-4765-a89d-5765fd9eb671` |
| Weekly Calendar macro | `1838ef3d-10c4-4c07-8d45-0cd2411a3411` |
| Next Week Calendar macro | `35b1ab86-bddf-46a1-a583-094c3af0ad6c` |

---

**Links:** [[_docs/Slip Box Master Guide|Master Guide]] | [[_docs/Vault Systems — Complete Procedure|Vault Systems Procedure]] | [[00-Home/00-Home|Dashboard]]
