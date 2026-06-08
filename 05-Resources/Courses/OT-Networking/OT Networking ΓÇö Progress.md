---
title: OT Networking — Progress
date: 2026-06-08
type: course-progress
course: OT-Networking
status: active
target_score: 75%
exam_date:
tags: [course, courses, progress, ia-ot, networking, cap]
---

# OT Networking — Progress

> `[duration:: N]` = minutes. `[score:: N%]` = practice quiz score.

---

## Dashboard

```dataviewjs
const page = dv.current();
const lists = page.file.lists.array();
const sessions = lists.filter(l => l.duration != null);
const scored   = lists.filter(l => l.score != null);
const totalMin = sessions.reduce((s, l) => s + (Number(l.duration) || 0), 0);
const hrs = Math.floor(totalMin / 60), mins = totalMin % 60, estHrs = 40;
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
WHERE contains(moc, "[[06-Zettelkasten/MOC/MOC — OT Networking]]")
SORT created ASC
```

---

## Session log

### Module 1 — Purdue Model
- 2026-06-08 · [Module 1 - starting out] · [duration:: 0] · Notes: *first session*

### Module 2 — EtherNet/IP & CIP
-

### Module 3 — PROFINET
-

### Module 4 — Segmentation
-

### Module 5 — Cisco ICS
-

### Module 6 — Cybersecurity
-

---

## Weak areas to revisit
- [ ]
- [ ]

---

**Links:** [[05-Resources/Courses/OT-Networking/OT Networking — Overview|Overview]] · [[05-Resources/Courses/OT-Networking/OT Networking — Syllabus|Syllabus]] · [[05-Resources/Courses/OT-Networking/OT Networking — Reference|Quick Reference]]
