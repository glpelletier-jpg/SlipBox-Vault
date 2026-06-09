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
