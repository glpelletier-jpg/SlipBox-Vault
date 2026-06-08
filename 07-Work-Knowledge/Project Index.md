---
title: Project Index
id: 20260605000012
date: 2026-06-05
type: reference
tags: [reference, projects, work]
---

# Project Index

> All work knowledge notes and attachments organized by project. Add `project: ProjectName` to any note's frontmatter to make it appear here.

---

## How the project field works

Every note in `07-Work-Knowledge/` can optionally carry a `project:` frontmatter field:

```yaml
---
title: CCPC-1250 IOQ
project: CCPC-1250
tags: [validation, IOQ]
---
```

Use the exact project name strings from the **Project list** section below — consistent naming is what makes the Dataview queries work.

---

## Project list

Add a row here when a new project begins. The Dataview views below pull from `project:` frontmatter automatically.

| Project name | Description | Status | Folder primary |
|---|---|---|---|
| `CCPC-1250` | B&S Filler Transfer Recipe — Tank 12V03 IOQ | Active | Processes |
| `Argenta-Water` | Water production line — instruments, controls, SOPs | Active | Processes / Automation |
| `OT-Network` | IT/OT network infrastructure and domain management | Active | Networking |
| `CAP-Cert` | Certified Automation Professional exam preparation | Active | CAP-Certification |
| `HAM-General` | General class license study | Active | — |

---

## Active projects

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  project AS "Project",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge"
WHERE project != null AND project != ""
SORT project ASC, file.name ASC
```

---

## CCPC-1250

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge" OR "_attachments/Work"
WHERE project = "CCPC-1250"
SORT file.mtime DESC
```

---

## Argenta-Water

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge" OR "_attachments/Work"
WHERE project = "Argenta-Water"
SORT file.mtime DESC
```

---

## OT-Network

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge" OR "_attachments/Work"
WHERE project = "OT-Network"
SORT file.mtime DESC
```

---

## CAP-Cert

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge"
WHERE project = "CAP-Cert"
SORT file.mtime DESC
```

---

## Notes without a project assigned

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge"
WHERE project = null OR project = ""
AND file.name != "07-Work-Knowledge"
AND !contains(file.name, "Automation.md")
AND !contains(file.name, "Networking.md")
AND !contains(file.name, "Processes.md")
AND !contains(file.name, "Troubleshooting.md")
AND !contains(file.name, "CAP-Certification.md")
SORT file.mtime DESC
LIMIT 20
```

*Use this list to backfill `project:` on notes you want to track. Folder index notes (Automation.md, etc.) intentionally have no project.*

---

## Backfilling existing notes

To add `project:` to an existing note:

1. Open the note
2. Open the Properties panel (⊞ icon top-right, or `Ctrl+;`)
3. Click **Add property** → type `project` → enter the project name from the list above
4. Save — the note appears in the project view above immediately

For a batch of notes in the same project, open each one in sequence and add the field — takes about 15 seconds per note.

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] · [[07-Work-Knowledge/Vendors|Vendor Index]] · [[06-Zettelkasten/MOC/Automation Engineering MOC|Automation MOC]]
