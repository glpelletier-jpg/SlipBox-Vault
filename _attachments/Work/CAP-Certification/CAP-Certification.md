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

# CAP-Certification

> ISA CAP study guide, practice exams, and standards documents: ISA-5.1 (Instrumentation Symbols), ISA-88 (Batch Control), ISA-95 (Enterprise-Control Integration).

**Links:** [[_attachments/Work/Work|Work Attachments]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
