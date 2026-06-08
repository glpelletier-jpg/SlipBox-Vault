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

# Troubleshooting

> Incident reports, root cause analysis documents, vendor service reports, repair records. Name files with equipment and date: `CP12-Agitator-Troubleshooting-2026-06.pdf`.

**Links:** [[_attachments/Work/Work|Work Attachments]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
