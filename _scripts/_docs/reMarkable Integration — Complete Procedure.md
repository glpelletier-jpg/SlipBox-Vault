---
doc_type: procedure
purpose: "Capturing handwritten notes from reMarkable tablet into the vault via PDF export"
title: reMarkable Integration — Complete Procedure
date: 2026-06-07
tags: [procedure, remarkable, capture, attachments]
---

# reMarkable Integration — Complete Procedure

> How to connect the reMarkable Paper Pro to the Slip Box vault, configure automatic sync, and route handwritten content into the right vault workflows.

**Companion documents:**
- [[_docs/Vault Systems — Complete Procedure|Vault Systems — Complete Procedure]]
- [[_attachments/Attachment Catalog|Attachment Catalog]]

---

> [!warning] Plugin currently non-functional — awaiting update
> The **reMarkable Sync plugin** (`remarkable-sync` by TimDommett) is currently not working. The plugin is installed in the vault but the sync functionality is broken and awaiting a plugin update from the developer. **Do not attempt to use the sync workflow below until this is resolved.**
>
> **Current workaround:** Transfer notes manually from the reMarkable via USB or the reMarkable desktop app, then place PDFs in `_attachments/reMarkable/` and follow Parts 2–5 below as normal.
>
> **To check for an update:** Visit [github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases](https://github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases). When a fix is released, download the new `remarkable-sync.zip`, replace the folder in `.obsidian/plugins/`, and re-enable in Settings → Community Plugins.

---

## Part 1: One-time setup *(pending plugin fix)*

### Step 1 — Install the reMarkable Sync plugin

> **Status: Plugin installed but non-functional.** Skip this section until a working plugin release is available.

This is a community plugin not yet in the Obsidian plugin browser — install manually:

1. Go to [github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases](https://github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases)
2. Download `remarkable-sync.zip` from the latest release
3. Extract it — you get a `remarkable-sync/` folder
4. Copy that folder into `C:\Vault\Slip Box\.obsidian\plugins\`
5. In Obsidian: Settings → Community Plugins → scroll to reMarkable Sync → toggle ON

> **Desktop only.** This plugin requires Obsidian on Windows — it will not appear or work in Obsidian Mobile.

---

### Step 2 — Authenticate with reMarkable Cloud

1. On your computer, go to [my.remarkable.com/device/desktop/connect](https://my.remarkable.com/device/desktop/connect)
2. Sign in with your reMarkable account — a one-time 8-character code appears
3. In Obsidian: Settings → reMarkable Sync → paste the code → confirm
4. Auth token is stored locally at `~/.remarkable-sync/token.json` — your data stays on your machine

---

### Step 3 — Configure the sync folder

In Obsidian Settings → reMarkable Sync:

| Setting                | Value                           |
| ---------------------- | ------------------------------- |
| **Sync folder**        | `_attachments/reMarkable`       |
| **Auto-sync**          | ON                              |
| **Auto-sync interval** | 15 minutes (or your preference) |
| **File format**        | PDF (default)                   |

This directs all synced documents into the vault's existing attachment system — they appear in `_attachments/reMarkable/` alongside your other PDFs.

---

### Step 4 — Set up your reMarkable folder structure

On the reMarkable device, organize notebooks to match the vault's subfolders. This keeps the sync output easy to route:

```
reMarkable/
├── Work/           → site visits, equipment sketches, meeting notes, troubleshooting
├── Fleeting/       → quick idea captures — process and delete after syncing
└── Reference/      → handwritten reference worth keeping long-term
```

Create these folders on the reMarkable home screen before your first sync.

---

### Step 5 — Test the connection

1. `Ctrl+P` → "reMarkable Sync: Sync now"
2. Check `_attachments/reMarkable/` in the file panel — your reMarkable notebooks should appear as PDFs
3. If nothing appears: Settings → reMarkable Sync → verify the sync folder path is exactly `_attachments/reMarkable`

---

## Part 2: Daily workflow

### Current workaround (manual transfer)

Until the plugin is restored, export notes from your reMarkable manually:

1. Connect reMarkable via USB, or use the reMarkable desktop app to export notebooks as PDFs
2. Place exported PDFs into `_attachments/reMarkable/` in the appropriate subfolder (`Work/`, `Fleeting/`, or `Reference/`)
3. Continue with the companion note workflow below as normal

### When a new PDF appears

After any sync (or manual transfer), new PDFs appear in `_attachments/reMarkable/`. For each new PDF:

**Work notes and sketches:**
1. Move the PDF to `_attachments/reMarkable/Work/`
2. Create a companion note using the Attachment Note Template:
   - `Ctrl+P` → "Templater: Insert Template" → Attachment Note Template
   - Name it identically to the PDF (minus the `.pdf` extension)
3. Fill in the companion note frontmatter:

| Field | What to enter |
|---|---|
| `title` | Descriptive title, e.g. `CP-12 Agitator Seal Sketch 2026-06-08` |
| `type` | `attachment` |
| `category` | `remarkable-work` |
| `file_link` | Filename with `.pdf` extension |
| `description` | One sentence — what does this sketch or note show? |
| `added` | Today's date |
| `linked_note` | Link to the relevant Work Knowledge or Troubleshooting note |
| `status` | `active` |

4. Open the relevant Work Knowledge note and add a backlink to the companion note

**Fleeting captures (handwritten ideas):**
1. Open the PDF — read your handwritten notes
2. For each idea worth keeping: press `Ctrl+Shift+F` → create a vault fleeting note → type it up in your own words
3. Once processed, move the PDF to `_attachments/reMarkable/Fleeting/` and update its companion note `status` to `archived`
4. Do not link fleeting PDFs to permanent notes — the permanent note links to the vault fleeting note, not the PDF

**Reference material:**
1. Move to `_attachments/reMarkable/Reference/`
2. Create companion note with `category: remarkable-reference`
3. Link to the relevant vault note where this reference applies

---

## Part 3: Capture routing — what to write where

### On the reMarkable device

| What you're capturing | Which reMarkable folder | What happens to it |
|---|---|---|
| Site visit observations, equipment state, measurements | `Work/` | PDF → companion note → linked to Work Knowledge |
| Troubleshooting diagram or fault sketch | `Work/` | PDF → companion note → linked to Troubleshooting log |
| Book or article idea while reading | `Fleeting/` | PDF → retype into vault fleeting note → PDF archived |
| Brainstorm or mind map | `Fleeting/` | PDF → retype key points as fleeting note → PDF archived |
| Formula sheet or reference table you made | `Reference/` | PDF → companion note → linked to relevant vault note |
| HAM Radio study diagram | `Work/` | PDF → companion note → linked to HAM Radio course notes |

### Device capture rule

**reMarkable owns all handwritten capture** — site visits, field notes, deep thinking, HAM Radio study diagrams, troubleshooting sketches. The **S Pen on the S25 Ultra is for annotating PDFs on the phone only**, not for general note capture. This rule eliminates routing ambiguity between the two handwriting devices.

### The key principle

The reMarkable is a **capture and thinking tool** — not a storage layer. PDFs that land in the vault are evidence or reference. The knowledge extracted from them lives in vault notes. A handwritten brainstorm on the reMarkable eventually becomes a permanent note; the PDF companion note just points to where it came from.

---

## Part 4: How reMarkable fits the system

```
Capture (reMarkable)
       ↓
   Transfer to vault (_attachments/reMarkable/)
   [Manual via USB/desktop app until plugin is restored]
   [Automatic via Sync plugin once fixed]
       ↓
   Route to vault workflow:
   ├── Work observation → Work Knowledge note
   ├── Troubleshooting sketch → Troubleshooting log
   ├── Idea → Fleeting note (Ctrl+Shift+F)
   └── Reference → companion note + linked vault note
       ↓
   Process (Zettelkasten or Work Knowledge)
       ↓
   Permanent note or Work Knowledge note (long-term storage)
```

**What the reMarkable does NOT replace:**
- Todoist — tasks still go in Todoist (or vault quest notes → Morgen), not in reMarkable notebooks
- Morgen — meeting invites and time-blocks stay in Morgen
- Vault fleeting notes — handwritten ideas need to be retyped, not just synced as PDFs

---

## Part 5: Attachment Catalog maintenance

reMarkable PDFs follow the same monthly and quarterly maintenance as all other attachments. The categories added for reMarkable:

| Category | Used for |
|---|---|
| `remarkable-work` | Work sketches, site visit notes, equipment diagrams |
| `remarkable-fleeting` | Handwritten idea captures (typically archived once processed) |
| `remarkable-reference` | Handwritten reference material kept long-term |

**Monthly:** Scan `_attachments/reMarkable/Fleeting/` — any PDFs with `status: active` that are more than 2 weeks old haven't been processed yet. Process or archive them.

**Quarterly:** Archive all `status: archived` reMarkable PDFs to `_archive/reMarkable/` to keep the active folder clean.

---

## Part 6: Troubleshooting *(for when plugin is restored)*

| Symptom | Cause | Fix |
|---|---|---|
| Sync now does nothing | Auth token expired | Settings → reMarkable Sync → re-authenticate with a new code from my.remarkable.com |
| PDFs not appearing in `_attachments/reMarkable/` | Sync folder path is wrong | Settings → reMarkable Sync → confirm path is exactly `_attachments/reMarkable` (no leading slash) |
| PDFs appear in vault root | Default sync folder wasn't set | Same fix as above |
| Auto-sync not running | Plugin may need restart | Disable and re-enable the plugin in Settings → Community Plugins |
| PDF renders blank pages | Document hasn't synced from device to cloud yet | On the reMarkable, ensure Wi-Fi is connected and the document has a sync indicator (not just a local indicator) |
| "No files to sync" but new documents exist | Document is in a subfolder the plugin can't see | Move the reMarkable notebook to the root or a top-level folder on the device |

---

**Links:** [[_attachments/reMarkable/reMarkable|reMarkable folder]] · [[_attachments/Attachment Catalog|Attachment Catalog]] · [[_docs/Vault Systems — Complete Procedure|Vault Systems]] · [[_docs/Vault Quick Reference|Quick Reference]]
