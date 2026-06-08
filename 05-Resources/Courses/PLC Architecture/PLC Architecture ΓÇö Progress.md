---
title: PLC Architecture — Progress
date: 2026-06-08
type: course-progress
course: PLC-Architecture
status: active
target_score: 75%
exam_date:
tags: [course, courses, progress, ia-ot, plc, cap]
---

# PLC Architecture — Progress

> Log every study session here. One line per session with `[duration:: N]` and `[score:: N%]` inline fields. The dashboard below auto-updates from these entries.

---

## Dashboard

```dataviewjs
const page = dv.current();
const lists = page.file.lists.array();
const sessions = lists.filter(l => l.duration != null);
const scored   = lists.filter(l => l.score != null);

const totalMin = sessions.reduce((s, l) => s + (Number(l.duration) || 0), 0);
const hrs      = Math.floor(totalMin / 60);
const mins     = totalMin % 60;
const estHrs   = 60;
const pctTime  = Math.min(Math.round((totalMin / (estHrs * 60)) * 100), 100);
const barTime  = "▓".repeat(Math.round(pctTime / 5)) + "░".repeat(20 - Math.round(pctTime / 5));

dv.header(3, "📊 Study hours");
dv.paragraph(`**Total:** ${hrs}h ${mins}m (${totalMin} min)  ·  **Estimated:** ${estHrs}h  \n\`${barTime}\` ${pctTime}%`);

if (scored.length > 0) {
  const scores = scored.map(l => Number(String(l.score).replace("%", "")));
  const latest = scores[scores.length - 1];
  const best   = Math.max(...scores);
  const avg    = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const target = 75;
  dv.header(3, "🎯 Score trend");
  dv.paragraph(
    `**Latest:** ${latest}%  ·  **Best:** ${best}%  ·  **Average:** ${avg}%  ·  **Target:** ${target}%\n\n` +
    scores.map((s, i) => {
      const bar = "█".repeat(Math.round(s / 5));
      const flag = s >= target ? "✅" : s >= target - 10 ? "🟡" : "🔴";
      return `Session ${i + 1}: \`${bar}\` ${s}% ${flag}`;
    }).join("\n")
  );
}
dv.header(3, "📅 Sessions");
dv.paragraph(`**Total sessions logged:** ${sessions.length}  ·  **Scored sessions:** ${scored.length}`);
```

---

## Permanent notes created

```dataview
TABLE maturity, subdomain, created
FROM "06-Zettelkasten/Permanent"
WHERE contains(moc, "[[06-Zettelkasten/MOC/MOC — PLC Architecture]]")
SORT created ASC
```

---

## Session log

*Format: `- YYYY-MM-DD · [Module N - topic] · [duration:: N] · [score:: N%] · Notes`*
*`[duration:: N]` = minutes. `[score:: N%]` = practice quiz score (omit if no quiz).*

### Module 1 — Scan Cycle

- 2026-06-08 · [Module 1 - starting out] · [duration:: 0] · Notes: *first session*

### Module 2 — IEC 61131-3

-

### Module 3 — Studio 5000

-

### Module 4 — TIA Portal

-

### Module 5 — I/O Modules

-

### Module 6 — Motion & Drives

-

### Module 7 — Diagnostics

-

### Module 8 — Communications

-

---

## Weak areas to revisit

- [ ]
- [ ]
- [ ]

---

## Spaced repetition queue

| Concept | Last drilled | Next review |
|---|---|---|
| | | |

---

## Exam log

| Date | Type | Score | Notes |
|---|---|---|---|
| | Practice | % | |
| | **CAP Exam** | % | |

---

**Links:** [[05-Resources/Courses/PLC Architecture/PLC Architecture — Overview|Overview]] · [[05-Resources/Courses/PLC Architecture/PLC Architecture — Syllabus|Syllabus]] · [[05-Resources/Courses/PLC Architecture/PLC Architecture — Reference|Quick Reference]]
