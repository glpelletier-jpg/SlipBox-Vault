---
dataview-ignore: true
date: <% tp.date.now("YYYY-MM-DD") %>
quarter: <% tp.date.now("YYYY-[Q]Q") %>
year: <% tp.date.now("YYYY") %>
type: quarterly-review
rating: 
focus_minutes_total: 
quests_completed: 0
quests_total: 0
tags: [review/quarterly, "<% tp.date.now('YYYY-[Q]Q') %>"]
---

# Quarterly Review — <% tp.date.now("[Q]Q YYYY") %>

> Allow 60–90 minutes. Do this before planning the next quarter — looking back clears your head for looking forward. Make a coffee, close Slack, and give this the time it deserves.


## Daily intentions — this quarter

*The full picture: what did you intend each day, and what actually happened? Use the "This quarter" view.*

> **Daily Focus** · [[00-Home/00-Home|Dashboard]] · [[04-Daily-Notes|Daily Notes]] · [[00-Home/vitals.base|Vitals]] · [[00-Home/focus-log.base|Focus Log]]

![[daily-focus.base]]

---

---

## 1. Set the scene (5 min)

**Location I'm doing this review:**
**How I'm feeling right now (one word):**

Read back through:
- [ ] All weekly reviews this quarter
- [ ] All monthly reviews this quarter
- [ ] Every quest note in [[02-Quests]]

---

## 2. Quarter in numbers

```dataview
TABLE WITHOUT ID
  link(file.path, week) AS Week,
  rating AS "Rating /5",
  focus_minutes AS "Focus (min)"
FROM "03-Reviews/Weekly"
WHERE type = "weekly-review" AND date >= date(<%* tR += moment().startOf('quarter').format('YYYY-MM-DD') %>) AND date < date(<%* tR += moment().add(1,'quarter').startOf('quarter').format('YYYY-MM-DD') %>)
SORT date ASC
```

| Metric | This quarter | Last quarter | Trend |
|---|---|---|---|
| Total focus time (min) | | | ↑ / → / ↓ |
| Avg weekly rating | /5 | /5 | ↑ / → / ↓ |
| Weekly reviews completed | /13 | /13 | |
| Quests completed | | | |
| Books finished | | | |

*(Copy focus_minutes_total and quest counts into frontmatter above.)*

---

## 3. Quest retrospective

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Quest,
  area AS Area,
  progress + "%" AS Progress,
  status AS Status
FROM "02-Quests"
WHERE quarter = "<%* tR += moment().format('[Q]Q-YYYY') %>"
SORT status ASC
```

### Quest 1: [[]]

**Outcome:** Completed / Partially done / Abandoned
**What moved it forward most?**
>

**What blocked it?**
>

**What would I do differently?**
>

---

### Quest 2: [[]]

**Outcome:** Completed / Partially done / Abandoned
**What moved it forward most?**
>

**What blocked it?**
>

**What would I do differently?**
>

---

### Quest 3: [[]]

**Outcome:** Completed / Partially done / Abandoned
**What moved it forward most?**
>

**What blocked it?**
>

**What would I do differently?**
>

---

## 4. Life area deep-dive

| Area | Q rating (1–5) | Trend vs last Q | Biggest win | Biggest gap |
|---|---|---|---|---|
| Work & career | | ↑ / → / ↓ | | |
| Health & energy | | ↑ / → / ↓ | | |
| Relationships | | ↑ / → / ↓ | | |
| Personal growth | | ↑ / → / ↓ | | |
| Fun & creativity | | ↑ / → / ↓ | | |
| Money & finances | | ↑ / → / ↓ | | |

**Which area grew the most this quarter?**
>

**Which area was most neglected?**
>

**Any area appearing in "biggest gap" quarter after quarter?**
>

---

## 5. Ten wins this quarter

*Pull the best moments from your weekly and monthly reviews.*

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.

---

## 6. What drained me most?

**Biggest energy drain:**
>

**Something I kept doing that I should have stopped earlier:**
>

**An obligation I want to exit or reduce next quarter:**
>

---

## 7. Values and identity check

*Re-read [[01-Vision/life-compass|Life Compass]] before answering.*

| Value | Evidence I lived it | Where I fell short |
|---|---|---|
| | | |
| | | |
| | | |

**Who did I show up as this quarter? (honest answer)**
>

**Who do I want to show up as next quarter?**
>

**Is my Life Compass still accurate?**
- [ ] Values still accurate
- [ ] Roles still accurate
- [ ] Needs updating — changes:
>

---

## 8. Vision check

*Re-read [[01-Vision/future-vision|Future Vision]] before answering.*

**Am I moving toward my 1-year vision?**
>

**What is the gap between where I am and where I want to be in 1 year?**
>

**Does Future Vision need updating?**
- [ ] Still accurate
- [ ] Needs minor tweaks
- [ ] Major revision needed
>

---

## 9. Learning and growth

**Most impactful book / course / conversation this quarter:**
>

**Single most useful insight I'll carry forward:**
>

**Skill I developed that I'm proud of:**
>

**Skill gap I want to address next quarter:**
>

---

## 10. Relationships

**Who showed up for me that I should acknowledge?**
>

**A relationship to invest more in next quarter:**
>

---

## 11. What I want to let go of

*Habits, beliefs, commitments, obligations.*
>

---

## 12. The quarter in one paragraph

>

---

## 13. Score and close

**Overall quarter rating:** /10
**One word that captures this quarter:**

**One thing I'm most proud of:**
>

**One thing I most want to change next quarter:**
>

---

## 14. Plan vs. actual

<details>
<summary>📝 Quick notes — what shifted this quarter?</summary>

**Milestones that got done:**
> 

**Milestones that kept slipping:**
> 

**Biggest unplanned time consumers:**
> 

**Recurring pattern from the monthly reviews:**
> 

</details>

*For a full diagnosis → create [[03-Reviews/Plan-Actual/<% tp.date.now("[Q]Q-YYYY") %> Plan vs. Actual|<% tp.date.now("[Q]Q-YYYY") %> Plan vs. Actual]] in `03-Reviews/Plan-Actual/` using the **Plan vs Actual Quarterly Template**.*

---

## 15. Ready for next quarter?

- [ ] This review is complete
- [ ] Plan vs. Actual note created → `03-Reviews/Plan-Actual/`
- [ ] Life Compass updated if needed
- [ ] Future Vision updated if needed
- [ ] Quarterly Planning session started → `Ctrl+P` → "QuickAdd: New Quarterly Plan"

---

**Links:** [[01-Vision/life-compass|Life Compass]] | [[01-Vision/future-vision|Future Vision]] | [[02-Quests]] | [[_templates/Quarterly Planning Template|Quarterly Planning Template]] | [[00-Home/plan-actual.base|Planning Diagnosis]]
