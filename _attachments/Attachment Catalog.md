---
title: Attachment Catalog
date: 2026-06-04
tags: [catalog, attachments, reference]
---

# Attachment Catalog

> Live catalog of all PDFs and binary files in the vault. Powered by companion notes — one `.md` note per file.
> This page shows the master view. Each subfolder also has its own `.base` view.

---

## How to add a file

**Step 1 — Drop the file**
Drag the PDF (or other file) into any open Obsidian note. It saves to `_attachments/` automatically. Move it to the correct subfolder in the file panel.

**Step 2 — Create a companion note**
In the same subfolder, create a new note using the **Attachment Note Template** (`Ctrl+P` → "Templater: Insert Template" → Attachment Note Template). Name it identically to the file (without the extension):

```
PDF:           Rockwell-Powerflex-753-Manual.pdf
Companion note: Rockwell-Powerflex-753-Manual.md
```

**Step 3 — Fill in the frontmatter**
Open the companion note and fill in these fields in the Properties panel:

| Field | What to enter | Example |
|---|---|---|
| `title` | Full descriptive title | `Rockwell Powerflex 753 User Manual` |
| `type` | Always `attachment` | `attachment` |
| `category` | See categories below | `work-automation` |
| `file_link` | Filename with extension | `Rockwell-Powerflex-753-Manual.pdf` |
| `vendor` | Manufacturer or publisher | `Rockwell Automation` |
| `description` | One sentence | `VFD user manual — installation, parameters, faults` |
| `added` | Date added | `2026-06-04` |
| `source` | Where you got it | `Rockwell website / vendor / Argenta drive` |
| `linked_note` | Vault note this connects to | `[[07-Work-Knowledge/Automation/Automation]]` |
| `status` | `active` or `archived` | `active` |

**Categories:**
`work-automation` · `work-networking` · `work-processes` · `work-troubleshooting` · `work-cap` · `work-vendor` · `courses` · `books` · `personal` · `remarkable-work` · `remarkable-fleeting` · `remarkable-reference`

The companion note appears in the catalog automatically once saved.

---

## Master catalog — all attachments

![[catalog.base]]

---

## By subfolder

Each subfolder has its own live base view. Open the subfolder in Obsidian to see it, or use these links:

| Subfolder | Base view | What's here |
|---|---|---|
| Work / Automation | [[_attachments/Work/Automation/automation|automation.base]] | Equipment manuals, PLC docs, schematics, datasheets |
| Work / Networking | [[_attachments/Work/Networking/networking|networking.base]] | Network diagrams, server docs, IT/OT architecture |
| Work / Processes | [[_attachments/Work/Processes/processes|processes.base]] | IOQ/OQ/PQ docs, SOPs, batch records, pharma specs |
| Work / Troubleshooting | [[_attachments/Work/Troubleshooting/troubleshooting|troubleshooting.base]] | Incident reports, RCA docs, repair records |
| Work / CAP Certification | [[_attachments/Work/CAP-Certification/cap-certification|cap-certification.base]] | ISA study guide, standards (ISA-88, ISA-95, ISA-5.1) |
| Work / Vendor Specs | [[_attachments/Work/Vendor-Specs/vendor-specs|vendor-specs.base]] | Product datasheets from Rockwell, E+H, Pepperl+Fuchs, etc. |
| reMarkable | [[_attachments/reMarkable/reMarkable|reMarkable folder]] | Auto-synced PDFs from reMarkable Paper Pro — Work, Fleeting, Reference |
| Courses | [[_attachments/Courses/courses|courses.base]] | HAM radio PDFs, study guides, course materials |
| Books | [[_attachments/Books/books|books.base]] | Book PDFs and ebooks |
| Personal | [[_attachments/Personal/personal|personal.base]] | Insurance, medical, tax, legal documents |

---

## Naming convention

`Vendor-Product-DocType-Version.pdf`

| Example | Breakdown |
|---|---|
| `Rockwell-Powerflex-753-Manual-v3.pdf` | Vendor · Product · Type · Version |
| `Argenta-Water-Production-SOP-v4.pdf` | Company · Process · Type · Version |
| `KB6NU-General-Class-Guide-2023.pdf` | Author · Subject · Type · Year |
| `ISA-88-Batch-Control-Standard.pdf` | Publisher · Standard number · Name |

---

## Catalog maintenance

**Monthly:** Open this page and scan for companion notes missing a `linked_note`. Find the relevant vault note and add the link.

**Quarterly:** Filter by `status: archived` to review old versions. Delete superseded files and archive companion notes.

**Finding orphaned files:** `Ctrl+P` → "Find orphaned files" — any result in `_attachments/` without a companion note needs one added or should be deleted.

---

**Links:** [[_attachments/_attachments|Attachments folder]] | [[00-Home/00-Home|Dashboard]]
