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

# HAM Radio

> Study notes and resources toward the HAM license goal in the [[01-Vision/future-vision|Future Vision]].

## Goal

Get the **Technician class license** — the entry-level US amateur radio license. ~35 question exam, no Morse code required. Target: Q4 2026.

Study free at [HamStudy.org](https://hamstudy.org) · Official question pool at [ncvec.org](http://www.ncvec.org)

---

## Notes in this folder

- [[05-Resources/Courses/HAM-Radio/Ham radio|Ham radio]] — general overview
- [[05-Resources/Courses/HAM-Radio/Ham radio digital modes|Ham radio digital modes]] — FT8, WSPR, JS8Call
- [[05-Resources/Courses/HAM-Radio/Portable Operating for Amateur Radio|Portable Operating for Amateur Radio]] — field ops, POTA
- [[05-Resources/Courses/HAM-Radio/Get Started with POTA (Parks On The Air) – Beginners Guide!|Get Started with POTA]] — Parks on the Air beginner guide

## Literature in vault

- [[06-Zettelkasten/Literature/Ham Radio for Dummies|Ham Radio for Dummies]]
- [[06-Zettelkasten/Literature/The ARRL Handbook for Radio Communications 100th Edition; Volume 1|ARRL Handbook Vol 1]]
- [[06-Zettelkasten/Literature/The ARRL Handbook for Radio Communications 100th Edition; Volume 3|ARRL Handbook Vol 3]]
- [[06-Zettelkasten/Literature/The ARRL Operating Manual for Radio Amateurs; Volume 1 and 2|ARRL Operating Manual]]
- [[06-Zettelkasten/Literature/The Fast Track to Understanding Ham Radio Propagation|Ham Radio Propagation]]
- [[06-Zettelkasten/Literature/Portable Operating for Amateur Radio|Portable Operating]]

## Technician exam topic areas

| Topic | Weight |
|---|---|
| Regulations & station operation | ~35% |
| Radio wave propagation | ~10% |
| Electrical principles | ~20% |
| Station equipment | ~20% |
| Safety | ~15% |

The electrical principles section overlaps directly with `07-Work-Knowledge/Automation/` — Ohm's Law, DC circuits, and power calculations appear on both the CAP and HAM exams.

---

**Links:** [[01-Vision/future-vision|Future Vision]] | [[05-Resources/Courses/Course Study Workflow|Course Study Workflow]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]]
