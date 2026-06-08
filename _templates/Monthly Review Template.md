---
dataview-ignore: true
date: <% tp.date.now("YYYY-MM-DD") %>
month: <% tp.date.now("YYYY-MM") %>
type: monthly-review
rating: 
focus_minutes_total: 
tags: [review/monthly, "<% tp.date.now('YYYY-[Q]Q') %>"]
---

# Monthly Review — <% tp.date.now("MMMM YYYY") %>

> Allow 30–45 minutes. This sits between the weekly review (tactical) and the quarterly planning (strategic). Use it to zoom out one level, check quest progress, and course-correct before the quarter ends.

---

## 1. Clear and capture (5 min)

- [ ] Read back through this month's weekly reviews
- [ ] Collect any loose tasks or ideas into the capture inbox
- [ ] Check calendar for next month — anything to plan ahead?

---

## 2. Month in numbers

*Fill in, then copy totals to frontmatter above.*

| Metric | This month | Last month | Trend |
|---|---|---|---|
| Focus time total (min) | | | ↑ / → / ↓ |
| Weekly reviews completed | /4 | /4 | |
| Quest milestones hit | | | |
| Books finished | | | |

**Overall month rating:** /5
*(Copy to `rating:` frontmatter.)*

```dataview
TABLE WITHOUT ID
  link(file.path, week) AS Week,
  rating AS "Rating /5",
  focus_minutes AS "Focus (min)"
FROM "03-Reviews/Weekly"
WHERE type = "weekly-review" AND date >= date(<%* tR += moment().startOf('month').format('YYYY-MM-DD') %>) AND date < date(<%* tR += moment().add(1,'month').startOf('month').format('YYYY-MM-DD') %>)
SORT date ASC
```

---

## 3. Life area check-in

*Compare to last month. Note direction of travel, not just current state.*

| Area | Rating (1–5) | vs last month | Key insight |
|---|---|---|---|
| Work & career | | ↑ / → / ↓ | |
| Health & energy | | ↑ / → / ↓ | |
| Relationships | | ↑ / → / ↓ | |
| Personal growth | | ↑ / → / ↓ | |
| Fun & creativity | | ↑ / → / ↓ | |
| Money & finances | | ↑ / → / ↓ | |

**Which area improved most this month?**
>

**Which area needs the most attention next month?**
>

---

## 4. Quest progress

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Quest,
  area AS Area,
  progress + "%" AS Progress,
  due AS Due,
  choice(progress >= 66, "🟢 On track", choice(progress >= 33, "🟡 Check in", "🔴 At risk")) AS Health
FROM "02-Quests"
WHERE status = "Active"
SORT progress DESC
```

| Quest | Progress | On track? | What moved it forward? | What blocked it? |
|---|---|---|---|---|
| | % | Yes / No | | |
| | % | Yes / No | | |
| | % | Yes / No | | |

**Any quest to adjust or abandon?**
>

---

## 5. Wins and highlights

*3–5 things worth remembering from this month.*

1.
2.
3.
4.
5.

---

## 6. What drained me this month?

*Patterns, recurring friction, things to reduce or eliminate.*
>

---

## 7. Values check

*Re-read [[01-Vision/life-compass|Life Compass]] values. Did you live them this month?*

| Value | How I lived it | Where I fell short |
|---|---|---|
| | | |
| | | |
| | | |

---

## 8. Learning and growth

**Best book / article / video this month:**
>

**Most useful insight:**
>

**Skill I want to develop next month:**
>

---

## 9. Next month intention

> Next month I want to...

**3 focus areas for next month:**
1.
2.
3.

**One quest that must move forward significantly:**
>

**One relationship to invest in:**
>

**One habit to build or break:**
>

---

## 10. Anything else

*Ideas, observations, things to revisit at the quarterly review.*
>

---

## 10b. Plan vs. actual

<details>
<summary>📝 Quick notes — what shifted this month?</summary>

**Focus areas that actually got done:**
> 

**What kept getting pushed week to week?**
> 

**What consumed time that wasn't planned?**
> 

</details>

*For a full diagnosis → create [[03-Reviews/Plan-Actual/<% tp.date.now("YYYY-MM") %> Plan vs. Actual|<% tp.date.now("YYYY-MM") %> Plan vs. Actual]] in `03-Reviews/Plan-Actual/` using the **Plan vs Actual Monthly Template**.*

---

*Monthly review complete. Schedule the next one now.*

---

**Links:** [[01-Vision/life-compass|Life Compass]] | [[01-Vision/future-vision|Future Vision]] | [[02-Quests]] | [[00-Home/plan-actual.base|Planning Diagnosis]]
