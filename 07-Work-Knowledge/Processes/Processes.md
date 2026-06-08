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

# Processes

> Argenta-specific manufacturing processes, documentation standards, SOPs.

## Key topics

- **Pharmaceutical manufacturing** — Solid Dose, Sterile Filling, Sterile Packaging, Water Production
- **PLC documentation** — how to document PLC programs, IOQ/OQ/PQ validation
- **SOPs** — adding users to OT domain, system workflows

## Note on credentials

Any note containing usernames, passwords, or access keys should have those values removed and stored in a password manager. See `_reference/Work/⚠️ Credentials go in password manager.md`.

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]
