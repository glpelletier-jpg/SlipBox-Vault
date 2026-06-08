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

> IOQ/OQ/PQ validation documents, SOPs, batch records, pharmaceutical process specs (Solid Dose, Sterile Filling, Water Production), work instructions.

**Links:** [[_attachments/Work/Work|Work Attachments]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
