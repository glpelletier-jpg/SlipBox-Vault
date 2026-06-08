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

# Work Knowledge

> Professional domain knowledge — automation engineering, OT systems, processes, troubleshooting.
> This folder doubles as a CAP exam study base and a professional reference library.

## Subfolders

| Folder | What lives here |
|---|---|
| Automation/ | PLC programming, electrical fundamentals, IO-Link, CIP, instruments |
| Networking/ | OT/IT networks, Windows Server, Linux, AWS |
| Processes/ | Argenta-specific processes, documentation standards, pharmaceutical manufacturing |
| Troubleshooting/ | Incident logs, root cause analyses, repair records |
| CAP-Certification/ | Certified Automation Professional exam prep |

## How to use this folder

**Adding new knowledge:** When you learn something at work — from a manual, a troubleshooting session, a colleague — capture it here, not in Fleeting. Work knowledge is reference material, not a processing inbox.

**Connecting to Zettelkasten:** When a work concept becomes a genuine insight (not just a fact), write it as a permanent note in `06-Zettelkasten/Permanent/` and link back here. Example: *"PLC arrays reduce ladder logic complexity by an order of magnitude"* is a permanent note. The syntax reference lives here.

**Connecting to quests:** This folder feeds the [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]] and the CAP certification goal in the [[01-Vision/future-vision|Future Vision]].

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]] | [[07-Work-Knowledge/CAP-Certification/CAP-Certification|CAP Certification]]
