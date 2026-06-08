---
dataview-ignore: true
title: <% tp.file.title %>
area: Work
quarter: <% tp.date.now("[Q]Q-YYYY") %>
status: Active
due: <% tp.date.now("Q") == "1" ? tp.date.now("YYYY") + "-03-31" : tp.date.now("Q") == "2" ? tp.date.now("YYYY") + "-06-30" : tp.date.now("Q") == "3" ? tp.date.now("YYYY") + "-09-30" : tp.date.now("YYYY") + "-12-31" %>
progress: 0
tags: [quest, "<% tp.date.now('[Q]Q-YYYY') %>"]
---

# <% tp.file.title %>

**Area:** Work / Health / Relationships / Growth / Fun / Finance
**Quarter:** <% tp.date.now("[Q]Q-YYYY") %>
**Due:** <% tp.date.now("Q") == "1" ? tp.date.now("YYYY") + "-03-31" : tp.date.now("Q") == "2" ? tp.date.now("YYYY") + "-06-30" : tp.date.now("Q") == "3" ? tp.date.now("YYYY") + "-09-30" : tp.date.now("YYYY") + "-12-31" %>

---

## Why this quest

*One sentence connecting to your [[01-Vision/life-compass|Life Compass]] or [[01-Vision/future-vision|Future Vision]].*

>

## Definition of done

> I will know this quest is complete when...

---

## Milestones

- [ ] Month 1 (weeks 1–3): *(+25 pts)*
- [ ] Month 2 (weeks 4–6): *(+25 pts)*
- [ ] Month 3 (weeks 7–9): *(+25 pts)*
- [ ] Final (weeks 10–12): *(+25 pts — quest complete)*

*4 milestones × 25 points = 100. Update `progress:` in frontmatter as you complete each one.*

---

## Weekly actions

```tasks
not done
path includes 02-Quests/<% tp.file.title %>
```

---

## Obstacles and blockers

>

## What I'll say no to

>

---

## Notes and reflections

### <% tp.date.now("YYYY-MM-DD") %>

...

---

## Todoist sync

> Add this as a recurring Todoist task so quest progress stays up to date:
> **"Update quest progress in Obsidian"** — recurring every Sunday, Personal project
>
> When a milestone is completed: update `progress:` in frontmatter above (each milestone = 25 points; 4 milestones × 25 = 100).
> The dashboard health indicator only moves when this number is updated.

