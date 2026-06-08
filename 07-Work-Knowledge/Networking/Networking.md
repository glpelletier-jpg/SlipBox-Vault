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

# Networking

> OT/IT network architecture, Windows Server administration, Linux, cloud.

## Key topics

- **OT/IT convergence** — network segmentation, security zones, industrial communication
- **Windows Server** — domain administration, user management
- **Linux** — command line, shell scripting (see also [[05-Resources/Courses/MIT-CS/MIT-CS|MIT Missing Semester]])
- **Cloud** — AWS fundamentals

## CAP domain mapping

Maps to **CAP Domain 5 (System Integration)** — network architecture and industrial communication.

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[05-Resources/Courses/MIT-CS/MIT-CS|MIT CS Courses]]
