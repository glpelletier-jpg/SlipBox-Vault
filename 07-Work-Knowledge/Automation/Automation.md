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

# Automation

> PLC programming, electrical fundamentals, industrial protocols, instrumentation.

## Key topics

- **Electrical fundamentals** — DC theory, Ohm's Law, power, current, sources/loads
- **PLC programming** — ladder logic, arrays, data looping, documentation standards
- **Industrial protocols** — CIP (Common Industrial Protocol), IO-Link
- **Instrumentation** — sensors, transmitters, control elements

## CAP domain mapping

Maps to **CAP Domain 1 (Measurement)** and **Domain 3 (Control Systems)**.
See [[07-Work-Knowledge/CAP-Certification/CAP-Certification|CAP Certification]] for full domain breakdown.

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]
