---
dataview-ignore: true
cover: ""
---

```base
layout: cards
filters:
  and:
    - file.folder == this.file.folder
    - file.path != this.file.path
    - file.ext == "md"
    - file.name != "Work-Note-Template"
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
