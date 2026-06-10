# 08-Work-Notes — System Guide

**Purpose:** Capture fast, structured working notes while evaluating, operating, or troubleshooting plant production systems and OT infrastructure. This is your field scratchpad — not a formal report, not a polished document. Write messy, write fast, write complete.

---

## 1. When to Use Work Notes

Use a Work Note any time you are:

- Investigating an alarm or fault on the production floor
- Evaluating a piece of equipment or control system during commissioning or PM
- Troubleshooting an OT network issue (switch, VLAN, PLC comms, HMI connectivity)
- Performing a walkthrough or field survey and capturing observations
- Working through a task you will need to hand off or reference later

**Not a replacement for:** the formal Troubleshooting Log (use that when you have a confirmed fault with root cause and resolution). Work Notes are the informal working layer — graduate a Work Note to a Troubleshooting Log when the issue is fully resolved and the formal record is worth keeping.

---

## 2. Folder Structure

```
08-Work-Notes/
├── 08-Work-Notes.md          ← Folder index (auto-generated cards view)
├── work-notes.base           ← Bases dashboard — 7 views
├── Work-Note-Template.md     ← Templater template (do not rename)
├── Work-Notes-Guide.md       ← This file
└── WN-YYYYMMDDHHmm.md        ← Auto-named notes created from template
```

Notes are auto-named `WN-YYYYMMDDHHmm` (e.g., `WN-202606091430`) by the Templater move script at the bottom of the template. The timestamp in the filename gives you a permanent, sortable, collision-free ID.

---

## 3. Frontmatter Properties Reference

These properties drive all Bases dashboard filters, views, and formulas. Fill them in accurately.

| Property | Type | Purpose | Example values |
|---|---|---|---|
| `building` | text | Physical building / facility | `SHA 1`, `SHA 2` |
| `area` | text | Room, zone, or suite within the building | `Filling Suite A`, `Utility Room`, `MCC Room 2` |
| `system` | text | The plant system category | `production`, `OT-network`, `utilities`, `HVAC` |
| `equipment` | text | Equipment system or machine name | `CP 12 Bottom Agitator`, `Water System`, `Conveyor Line 3` |
| `device` | text | Specific device within the equipment | `PowerFlex 753`, `FT-201`, `L85E PLC`, `SW-103` |
| `status` | select | Current state of the note / issue | `open`, `in-progress`, `on-hold`, `closed` |
| `priority` | select | Urgency | `high`, `normal`, `low` |
| `linked_todoist` | text | Todoist task ID that created or tracks this work | `8456123890` |
| `work_order` | text | CMMS work order number | `WO-2026-0412` |
| `promoted_to` | wikilink | Link to the formal Troubleshooting Log if escalated | `[[07-Work-Knowledge/Troubleshooting/CP12 PowerFlex Fault]]` |

### System values

| Value | Use for |
|---|---|
| `production` | Production line equipment — fillers, agitators, conveyors, packaging |
| `OT-network` | Switches, PLCs, HMIs, SCADA, VLANs, comms failures, OT domain |
| `utilities` | Water systems, compressed air, HVAC utilities, electrical distribution |
| `HVAC` | Heating, ventilation, environmental controls — especially cleanroom |

### Status definitions

- **open** — Just created; work not yet started or actively being worked
- **in-progress** — You are actively working this right now
- **on-hold** — Blocked; waiting on parts, vendor, access, or another team
- **closed** — Work complete; issue resolved or evaluation finished

### Priority definitions

- **high** — Production impact, safety concern, or time-sensitive deadline
- **normal** — Standard work; no immediate production threat
- **low** — Minor observation, future-state note, or low-urgency follow-up

---

## 4. Creating a Work Note

### Method A — QuickAdd (Recommended)

1. Press your QuickAdd hotkey (`Ctrl+Shift+W` recommended)
2. Enter a descriptive title when prompted
3. Template fires; file is created and auto-moved to `08-Work-Notes/`
4. Fill in frontmatter properties — building, area, system, equipment, device
5. Add Todoist task ID and/or Work Order number if applicable
6. Write the **Issue** section — what are you looking at and why
7. Work. Update the **Note** section as you go

### Method B — Manual (Templater)

1. Create a new note anywhere in the vault
2. Command Palette → `Templater: Open Insert Template Modal`
3. Select `Work-Note-Template`
4. Fill frontmatter and start writing

### Title naming convention

Pattern: `[Building] [Area] - [Equipment/Device] [Brief description]`

Good examples:
- `SHA1 MCC Room 2 - PowerFlex 753 Fault Code 12`
- `SHA2 Utility Room - Water Pump P-104 Cavitation`
- `SHA1 OT Network - Switch SW-103 Port Flapping`
- `SHA2 Filling Line - HMI Comms Loss to L85E`

This makes the Bases dashboard immediately readable without opening individual notes.

---

## 5. The Bases Dashboard (`work-notes.base`)

Open `work-notes.base` from the `08-Work-Notes` folder. It has seven views:

| View | Filter / Purpose |
|---|---|
| **All** | Every work note across all buildings, sorted newest first |
| **SHA 1** | `building == "SHA 1"` — all notes for SHA 1 |
| **SHA 2** | `building == "SHA 2"` — all notes for SHA 2 |
| **OT Network** | `system == "OT-network"` — cross-building OT/network issues |
| **Open / High Priority** | `status != closed AND priority == high` — your hot list |
| **Escalated** | `promoted_to != ""` — notes that became formal Troubleshooting Logs |
| **Has Work Order** | `work_order != ""` — notes tied to a CMMS work order |

### Formula columns

- **Location** — `Building › Area` combined; degrades gracefully if either is empty
- **System** — icon + system name (🌐 OT-network, ⚙️ Utilities, 💨 HVAC, 🏭 Production)
- **Equipment / Device** — `Equipment / Device` combined
- **Status** — icon + label; `🔗 Escalated` fires when `promoted_to` is set
- **Priority** — 🔴 High / 🟡 Normal / 🟢 Low
- **Age (days)** — days since note was created; stale open notes are immediately visible
- **WO#** — `📋 WO-number` if `work_order` is set
- **Todoist** — `✔ task-id` if `linked_todoist` is set

### Adding a building view

Copy this block into `work-notes.base` under `views:` and change the name and filter value:

```yaml
  - type: table
    name: SHA 3
    filters:
      and:
        - building == "SHA 3"
    order:
      - file.name
      - note.area
      - formula.system_icon
      - formula.device_display
      - formula.status_icon
      - formula.priority_icon
      - note.date
      - formula.age_days
      - formula.has_wo
    sort:
      - property: date
        direction: DESC
```

---

## 6. Linking to Todoist

When a Todoist task drives your work, capture its ID in the `linked_todoist` field.

**Finding the task ID:** In Todoist, right-click any task → `Copy link`. The URL is `https://app.todoist.com/app/task/XXXXXXXXXX` — the number at the end is the ID.

The `linked_todoist` field is informational — it surfaces in the **All** and **Has Work Order** views as `✔ ID` so you can see which notes have backing tasks. This closes the loop between Todoist task queue and the field note you took while doing the work.

Your Todoist Work project ID: `6gj9XJ56ccgp93vg`

---

## 7. Linking to CMMS Work Orders

When a CMMS (Computerized Maintenance Management System) work order number exists for the job, put it in `work_order`. Use your site's existing WO format exactly (e.g., `WO-2026-0412`, `WO12345`).

The **Has Work Order** view in the dashboard surfaces all notes with a WO number, making it easy to cross-reference notes against your maintenance records.

---

## 8. Escalating to a Troubleshooting Log

When a Work Note matures into a formal incident record:

1. Create a Troubleshooting Log from `_templates/Troubleshooting Log Template`
2. In the Troubleshooting Log's **Related documentation** section, link back: `[[08-Work-Notes/WN-202606091430]]`
3. In the Work Note frontmatter, set `promoted_to` to the wikilink of the new log:
   ```yaml
   promoted_to: "[[07-Work-Knowledge/Troubleshooting/CP12 PowerFlex Fault]]"
   ```
4. Set `status: closed` on the Work Note

The Work Note's status formula will automatically display `🔗 Escalated` in all dashboard views, and the **Escalated** view will surface it so you can see every note that became a formal record.

---

## 9. Closing a Work Note

1. Set `status: closed` in frontmatter
2. Confirm the **Note** section captures the final state — what you found, what you did
3. If this was a significant fault: escalate per Section 8 above
4. Optionally add tags: `resolved`, `handed-off`, `no-fault-found`, `deferred`

Work Notes are **never deleted** after closing — they are a permanent, searchable history of work performed at the plant.

---

## 10. Linking to Other Vault Systems

| Link to | When |
|---|---|
| `[[07-Work-Knowledge/Troubleshooting/...]]` | When promoting to a formal Troubleshooting Log |
| `[[02-Quests/New-Role-Integration-Q3-2026]]` | When the work advances your new role integration quest |
| `[[07-Work-Knowledge/Processes/...]]` | When the issue relates to a documented process or SOP |
| `[[04-Daily-Notes/YYYY-MM-DD]]` | When you want today's daily note to reference the field work |
| `[[07-Work-Knowledge/07-Work-Knowledge/Project Index]]` | When the work is project-related |

---

## 11. Setting Up QuickAdd (One-Time Configuration)

1. Open **Settings → QuickAdd**
2. Click **Add Choice** → **Template**
3. Name: `Work Note`
4. Template Path: `_templates/Work-Note-Template`
5. File Name Format: `WN-{{DATE:YYYYMMDDHHmm}}`
6. Create in Folder: `08-Work-Notes`
7. Enable **Open**: ✅
8. **Settings → Hotkeys** → search `QuickAdd: Work Note` → assign `Ctrl+Shift+W`

---

## 12. Commander Toolbar Button

1. **Settings → Commander** → toolbar section → `+`
2. Command: `QuickAdd: Work Note`
3. Icon: `clipboard-list` or `wrench`
4. Label: `Work Note`

---

## 13. Mobile / NFC Quick Capture (Android)

Your vault already has Bixby and Android shortcut guides in `_scripts/_docs/`. For fastest field capture:

1. Get a pack of NFC stickers (Type 2 or Type 4, NTAG213 minimum)
2. Place one sticker on each MCC room door, panel door, or key equipment location
3. Program each NFC tag with an Intent URL:
   ```
   obsidian://quickadd?name=Work%20Note&vault=Slip%20Box
   ```
4. Phone tap → Obsidian opens → QuickAdd fires → title prompt → you're capturing in under 10 seconds

Alternatively, use a Bixby Routine triggered by NFC tag scan to launch the same URI. See `_scripts/_docs/Bixby Routines — Setup Guide.md` for the Routine structure.

---

**Links:** [[08-Work-Notes/08-Work-Notes|Work Notes Folder]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[_docs/Slip Box Master Guide|Master Guide]] | [[_docs/Vault Systems — Complete Procedure|Vault Systems]]
