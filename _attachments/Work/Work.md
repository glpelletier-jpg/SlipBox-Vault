---
dataview-ignore: true
cover: "[[attachments/my-banner.jpg]]"
---


```base
layout: cards
imageProperty: cover
imageFit: cover
filters:
  and:
    - file.folder == this.file.folder
    - file.path != this.file.path
    - file.ext == "md"
views:
  - type: cards
    name: Cards
  - type: table
    name: Table
    order:
      - file.name
      - file.ctime
      - tags

```

---

# Work Attachments

> PDFs and binary files for work-related knowledge. Mirrors the structure of [[07-Work-Knowledge/07-Work-Knowledge|07-Work-Knowledge]].
> Every PDF here should be linked from the corresponding note in `07-Work-Knowledge/`.

---

## Folder map

| Folder | What goes here | Links to |
|---|---|---|
| Automation/ | Equipment manuals, PLC documentation, electrical schematics, instrument datasheets | [[07-Work-Knowledge/Automation/Automation|Work Knowledge / Automation]] |
| Networking/ | Network diagrams, server configs, Windows Server docs, IT/OT architecture docs | [[07-Work-Knowledge/Networking/Networking|Work Knowledge / Networking]] |
| Processes/ | IOQ/OQ/PQ validation docs, SOPs, batch records, pharmaceutical process specs, work instructions | [[07-Work-Knowledge/Processes/Processes|Work Knowledge / Processes]] |
| Troubleshooting/ | Incident reports, root cause analysis docs, vendor service reports, repair records | [[07-Work-Knowledge/Troubleshooting/Troubleshooting|Work Knowledge / Troubleshooting]] |
| CAP-Certification/ | ISA study guides, CAP exam prep PDFs, standards documents (ISA-5.1, ISA-88, ISA-95) | [[07-Work-Knowledge/CAP-Certification/CAP-Certification|CAP Certification]] |
| Vendor-Specs/ | Rockwell, Siemens, Allen-Bradley, Endress+Hauser, and other vendor product documentation | Both Automation and Processes |

---

## How to link a PDF to a work knowledge note

1. Drag the PDF into Obsidian — it saves here automatically
2. Move it to the correct subfolder (drag in the file explorer panel)
3. Open the relevant `07-Work-Knowledge/` note and add:

```
## Reference documents
- Descriptive name
```

---

## Naming convention for work PDFs

```
[Vendor]-[Product]-[Doc type]-[Version].pdf

Examples:
  Rockwell-Powerflex-753-User-Manual-v3.pdf
  Argenta-Water-Production-SOP-v4.pdf
  CCPC-1250-IOQ-2026.pdf
  Endress-Hauser-Promag-Datasheet.pdf
  ISA-88-Batch-Control-Standard.pdf
```

---

**Links:** [[_attachments/_attachments|Attachments]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
