---
title: Process Safety (IEC 61511) — Progress
date: 2026-06-08
type: course-progress
course: Process-Safety-IEC-61511
status: active
target_score: 75%
exam_date:
tags: [course, courses, progress, ia-ot, safety, cap]
---

# Process Safety (IEC 61511) — Progress

> Log every study session here. `[duration:: N]` = minutes. `[score:: N%]` = practice quiz score.

---

## Dashboard

```dataviewjs
const page = dv.current();
const lists = page.file.lists.array();
const sessions = lists.filter(l => l.duration != null);
const scored   = lists.filter(l => l.score != null);
const totalMin = sessions.reduce((s, l) => s + (Number(l.duration) || 0), 0);
const hrs = Math.floor(totalMin / 60), mins = totalMin % 60, estHrs = 50;
const pctTime = Math.min(Math.round((totalMin / (estHrs * 60)) * 100), 100);
const barTime = "▓".repeat(Math.round(pctTime / 5)) + "░".repeat(20 - Math.round(pctTime / 5));
dv.header(3, "📊 Study hours");
dv.paragraph(`**Total:** ${hrs}h ${mins}m  ·  **Estimated:** ${estHrs}h  \n\`${barTime}\` ${pctTime}%`);
if (scored.length > 0) {
  const scores = scored.map(l => Number(String(l.score).replace("%", "")));
  const latest = scores[scores.length - 1], best = Math.max(...scores);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  dv.header(3, "🎯 Score trend");
  dv.paragraph(`**Latest:** ${latest}%  ·  **Best:** ${best}%  ·  **Avg:** ${avg}%  ·  **Target:** 75%\n\n` +
    scores.map((s, i) => `Session ${i + 1}: \`${"█".repeat(Math.round(s/5))}\` ${s}% ${s>=75?"✅":s>=65?"🟡":"🔴"}`).join("\n"));
}
dv.header(3, "📅 Sessions");
dv.paragraph(`**Total:** ${sessions.length}  ·  **Scored:** ${scored.length}`);
```

---

## Permanent notes created

```dataview
TABLE maturity, subdomain, created
FROM "06-Zettelkasten/Permanent"
WHERE contains(moc, "[[06-Zettelkasten/MOC/MOC — Process Safety (IEC 61511)]]")
SORT created ASC
```

---

## Session log

### Module 1 — Risk Concepts & Lifecycle
- 2026-06-08 · [Module 1 - starting out] · [duration:: 0] · Notes: *first session*

### Module 2 — HAZOP & LOPA
-

### Module 3 — SIL Determination
-

### Module 4 — SIS Design
-

### Module 5 — Verification & Validation
-

### Module 6 — Proof Testing
-

---

## Weak areas to revisit
- [ ]
- [ ]

## Exam log

| Date | Type | Score | Notes |
|---|---|---|---|
| | Practice | % | |

---

**Links:** [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Overview|Overview]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Syllabus|Syllabus]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Reference|Quick Reference]]
