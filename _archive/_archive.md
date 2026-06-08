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

# Archive

> Completed, processed, or outdated material that's worth keeping but no longer active.
> Nothing here should appear in Dataview queries or dashboard widgets.

---

## Subfolders

| Folder | What goes here |
|---|---|
| Quests/ | Completed quests — keep for retrospectives and quarterly reviews |
| Daily-Notes/ | Daily notes older than 90 days — move here to keep the active folder clean |
| Fleeting/ | Processed fleeting notes you want to keep but not delete |

## When to archive

- **Quests:** When status changes to Completed — move the file here, update `status: Archived`
- **Daily notes:** Optionally batch-move notes older than a quarter at each quarterly review
- **Fleeting notes:** After writing a permanent note from a fleeting note — archive the source rather than deleting if you want to keep the raw capture

## What NOT to archive

Don't archive things just because they feel old. Archive when something is genuinely done and you want a record, not a reminder.

---

**Links:** [[00-Home/00-Home|Dashboard]]
