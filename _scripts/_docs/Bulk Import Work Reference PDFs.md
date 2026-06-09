---
doc_type: guide
purpose: "How to batch-import work PDFs (manuals, SOPs, datasheets) into the vault"
---

# Bulk Importing Work Reference PDFs

> How to bring a batch of vendor manuals, SOPs, datasheets, and validation docs into your Slip Box vault so they appear in the Attachment Catalog and all subfolder views automatically.

---

## Before you start

You need two things in place:
- The **Attachment Note Template** (already in `_templates/`) — creates the companion `.md` note each PDF requires
- The **Templater** plugin (already installed) — fires the template automatically

The catalog (`_attachments/catalog.base`) only shows files that have a companion `.md` note with `type: attachment` in frontmatter. Every PDF you import needs one.

---

## Step 1 — Sort your PDFs into named groups

Before dragging anything into Obsidian, sort your files on your desktop into folders by category. This maps directly to the vault's subfolder structure:

| Your folder | Drops into vault subfolder | Category tag |
|---|---|---|
| Vendor manuals, PLC docs, schematics | `_attachments/Work/Automation/` | `work-automation` |
| Network diagrams, server docs | `_attachments/Work/Networking/` | `work-networking` |
| SOPs, IOQ/OQ/PQ docs, batch records | `_attachments/Work/Processes/` | `work-processes` |
| Incident reports, RCA, repair records | `_attachments/Work/Troubleshooting/` | `work-troubleshooting` |
| ISA standards, CAP exam prep | `_attachments/Work/CAP-Certification/` | `work-cap` |
| Rockwell, E+H, Siemens datasheets | `_attachments/Work/Vendor-Specs/` | `work-vendor` |

---

## Step 2 — Rename files before importing

Rename every PDF using the convention **before** it enters Obsidian. Renaming after the fact breaks any links that already reference it.

**Pattern:** `Vendor-Product-DocType-Version.pdf`

```
Rockwell-Powerflex-755-User-Manual-v7.pdf
Endress-Hauser-Promag-W-Datasheet-2024.pdf
Argenta-Water-Production-SOP-v4.pdf
ISA-88-Batch-Control-Standard.pdf
CCPC-1250-IOQ-2026.pdf
Pepperl-Fuchs-FB-Series-Safety-Manual.pdf
```

**Rules:**
- Hyphens between words, no spaces or underscores
- All caps for acronyms (IOQ, SOP, PLC)
- Add version or year at the end when it matters
- No parentheses, no `(1)` suffixes — resolve duplicates by adding a version

---

## Step 3 — Drop PDFs into Obsidian

**Method A — Drag into a folder (recommended for batches)**
1. Open Obsidian's file panel (left sidebar)
2. Navigate to the target subfolder, e.g. `_attachments/Work/Automation/`
3. Drag all PDFs for that category from your desktop onto the folder in the panel
4. Obsidian saves them there directly — no auto-link insertion since you dropped on the folder, not into a note

**Method B — Drag into an open note**
1. Open the relevant folder note (e.g. `_attachments/Work/Automation/Automation.md`)
2. Drag PDFs from your desktop into the editor
3. Obsidian saves to `_attachments/` and inserts `[image: filename.pdf]` at your cursor
4. Delete those embed lines after — you'll link them properly from knowledge notes later

> **Settings check:** Confirm `Settings → Files & Links → Default location for new attachments` is set to **In the folder specified below** → `_attachments`. This ensures drag-and-drop always lands here, not in a random folder.

---

## Step 4 — Create companion notes (the catalog entry)

Each PDF needs one `.md` companion note in the same subfolder. This is what the catalog reads.

**For a single file:**
1. In the file panel, right-click the subfolder → **New note**
2. Name it identically to the PDF, without the extension:
   `Rockwell-Powerflex-755-User-Manual-v7`
3. `Ctrl+P` → **Templater: Insert Template** → **Attachment Note Template**
4. Fill in the frontmatter fields (see table below)

**For a batch (faster):**
Use this checklist approach — open each PDF companion note in sequence and fill in fields. With practice each note takes under 90 seconds.

### Frontmatter field reference

| Field | Required | What to enter |
|---|---|---|
| `title` | ✅ | Full human-readable title: `Rockwell Powerflex 755 User Manual` |
| `type` | ✅ | Always `attachment` — this is what the catalog filters on |
| `category` | ✅ | One of the category tags from Step 1 |
| `file_link` | ✅ | Exact filename with extension: `Rockwell-Powerflex-755-User-Manual-v7.pdf` |
| `vendor` | ✓ | Manufacturer or publisher: `Rockwell Automation` |
| `description` | ✓ | One sentence: `VFD installation, parameter reference, fault codes` |
| `added` | ✓ | Today's date: `2026-06-05` |
| `source` | ○ | Where you got it: `Rockwell website`, `vendor email`, `Argenta network drive` |
| `linked_note` | ○ | The work knowledge note this connects to: `[[07-Work-Knowledge/Automation/Automation]]` |
| `status` | ✓ | `active` (use `archived` for superseded versions) |

**Minimal example — a Powerflex manual:**
```yaml
---
title: Rockwell Powerflex 755 User Manual v7
type: attachment
category: work-automation
file_link: Rockwell-Powerflex-755-User-Manual-v7.pdf
vendor: Rockwell Automation
description: VFD installation, parameter reference, fault codes for 755 series
added: 2026-06-05
source: Rockwell website
linked_note: "[[07-Work-Knowledge/Automation/Automation]]"
status: active
---
```

---

## Step 5 — Link the PDF from a work knowledge note

The catalog knows about the file. Now make it discoverable from the content side.

Open the relevant note in `07-Work-Knowledge/` and add a reference section:

```markdown
## Reference documents

- Powerflex 755 User Manual v7
- E+H Promag W Datasheet 2024
```

This creates a two-way connection: the catalog finds the file through its companion note, and the knowledge base finds it through the wiki link.

---

## Batch import checklist

Use this per-category when doing a large import session:

```
Category: ___________________________  Date: ___________

[ ] Renamed all PDFs to Vendor-Product-DocType-Version.pdf
[ ] Dropped PDFs into correct _attachments/Work/[subfolder]/
[ ] Verified files appear in Obsidian file panel
[ ] Created companion .md note for each PDF (same name, no extension)
[ ] Applied Attachment Note Template to each companion note
[ ] Filled in: title, type, category, file_link, vendor, description, added
[ ] Opened _attachments/Attachment Catalog — confirmed new entries appear
[ ] Added [[file-link]] references to relevant 07-Work-Knowledge/ notes
[ ] Ran Ctrl+P → "Find orphaned files" — confirmed no loose PDFs
```

---

## Handling versioned documents

When a new version of an existing document arrives (new SOP revision, updated manual):

1. Add the new PDF with the updated version in the filename: `Argenta-Water-Production-SOP-v5.pdf`
2. Create a new companion note for it
3. On the old companion note, change `status: active` → `status: archived`
4. Update the `linked_note` reference in the work knowledge note to point to the new version
5. Keep the old PDF — don't delete it. Validation docs especially may be needed for audit trails

---

## Verifying the import

After any batch import, do a 60-second sanity check:

1. Open `_attachments/Attachment Catalog` — switch to the **Work** view in the base
2. Count: does the number of rows match the PDFs you just added?
3. `Ctrl+P` → **Find orphaned files** — any PDF in `_attachments/` without a companion note shows up here
4. Click one of the new catalog entries — does the `file_link` field open the PDF?

If a PDF isn't showing in the catalog, the most common causes are:
- `type:` field is missing or misspelled (must be exactly `attachment`)
- Companion note is in the wrong subfolder (must be in the same folder as the PDF)
- Frontmatter has a YAML syntax error (check for unescaped colons or missing quotes)

---

**Links:** [[_attachments/Attachment Catalog|Attachment Catalog]] | [[_attachments/Work/Work|Work Attachments]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
