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

# CAP Certification

> Certified Automation Professional — ISA credential for automation engineers.
> Targeted in the [[01-Vision/future-vision|3-year vision]] as a deliberate career milestone.

## Exam domains

| Domain | Weight | Description |
|---|---|---|
| 1. Measurement | ~17% | Sensors, transmitters, signal types |
| 2. Signal Conditioning | ~10% | Filtering, conversion, scaling |
| 3. Control | ~22% | PLC, DCS, loop tuning, control strategies |
| 4. Execution | ~20% | Installation, commissioning, troubleshooting |
| 5. System Integration | ~16% | Networks, HMI, SCADA, data integration |
| 6. Project Management | ~15% | Scope, schedule, cost, safety |

## Vault coverage by domain

| Domain | Notes in vault | Gap |
|---|---|---|
| Measurement | Instruments in Automation, Electrical fundamentals | Signal types, calibration |
| Control | CIP, IO-Link, PLC arrays, Automation BOK | Loop tuning, DCS |
| Execution | Troubleshooting log, CCPC IOQ | Commissioning procedures |
| System Integration | OT/IT Networks, networking notes | SCADA, HMI design |
| Project Management | Argenta workflow | Formal PM methodology |

## Study timeline (long-horizon goal)

1. **Q3 2026** — Build knowledge through real work (New Role Integration Quest). Don't study for CAP yet — study by doing.
2. **Q4 2026–Q2 2027** — Structured CAP prep. Work through ISA's study guide by domain.
3. **Q3 2027 target** — Sit the exam with ~12 months of Argenta experience behind you.

## Resources

- ISA CAP study guide — [isa.org/certification/cap](https://www.isa.org/certification/cap)
- [[07-Work-Knowledge/Automation/Automation Book of Knowledge (BOK)|Automation Book of Knowledge (BOK)]] — already in vault
- Key standards: ISA-5.1 (Instrumentation Symbols), ISA-88 (Batch Control), ISA-95 (Enterprise Integration)

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[01-Vision/future-vision|Future Vision]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]
