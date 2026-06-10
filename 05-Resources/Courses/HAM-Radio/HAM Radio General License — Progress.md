---
title: HAM Radio General License — Progress
date: 2026-06-06
type: course-progress
course: HAM-Radio
status: active
target_score: 74%
exam_date: 
tags: [course, courses, progress, HAM-radio]
---

# HAM Radio General License — Progress

> Log every study session here. One line per session with `[duration:: N]` (minutes) and `[score:: N%]` (practice exam score when taken).

---

## Dashboard

```dataviewjs
const page = dv.current();
const lists = page.file.lists.array();
const sessions = lists.filter(l => l.duration != null);
const scored   = lists.filter(l => l.score  != null);

const totalMin = sessions.reduce((s, l) => s + (Number(l.duration) || 0), 0);
const hrs      = Math.floor(totalMin / 60);
const mins     = totalMin % 60;
const estHrs   = 40;
const pctTime  = Math.min(Math.round((totalMin / (estHrs * 60)) * 100), 100);
const barTime  = "▓".repeat(Math.round(pctTime / 5)) + "░".repeat(20 - Math.round(pctTime / 5));

dv.header(3, "📊 Study hours");
dv.paragraph(`**Total:** ${hrs}h ${mins}m (${totalMin} min)  ·  **Estimated:** ${estHrs}h  \n\`${barTime}\` ${pctTime}% of estimated effort`);

if (scored.length > 0) {
  const scores = scored.map(l => Number(String(l.score).replace("%", "")));
  const latest = scores[scores.length - 1];
  const best   = Math.max(...scores);
  const avg    = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const target = 74;

  dv.header(3, "🎯 Score trend (74% to pass)");
  dv.paragraph(
    `**Latest:** ${latest}%  ·  **Best:** ${best}%  ·  **Average:** ${avg}%  ·  **Target:** ${target}%\n\n` +
    scores.map((s, i) => {
      const bar  = "█".repeat(Math.round(s / 5));
      const flag = s >= target ? "✅" : s >= 64 ? "🟡" : "🔴";
      return `Session ${i + 1}: \`${bar}\` ${s}% ${flag}`;
    }).join("\n")
  );
}

dv.header(3, "📅 Sessions");
dv.paragraph(`**Total sessions logged:** ${sessions.length}  ·  **Practice exams taken:** ${scored.length}`);
```

---

## Session log

*Format: `- YYYY-MM-DD · [Week N / Subelement] · [duration:: N] · [score:: N%] · Notes`*
*Omit `[score:: N%]` on sessions where no practice exam was taken.*

### Week 1 — G1 Commission's Rules (starts Jun 8)

- 2026-06-08 · Week 1 / G1A-G1B · [duration:: 0] · Notes: *first session — starting G1*
- 2026-06-09 · Week 1 / G1A-G1D · [duration:: 45] · Notes: G1A–G1D read; all four sub-elements covered — update duration if you tracked actual minutes

### Week 2 — G2 Operating Procedures

-

### Week 3 — G3 Propagation

-

### Week 4 — G4 Amateur Radio Practices

-

### Week 5 — G5 Electrical Principles

-

### Week 6 — G6 Circuit Components

-

### Week 7 — G7 Practical Circuits

-

### Week 8 — G8 Signals & Emissions

-

### Week 9 — G9 Antennas & Feed Lines

-

### Week 10 — G0 Safety + Final Review

-

---

## Permanent notes extracted

*Any claim from HAM study strong enough to stand alone as a permanent note. One claim, one note — `Ctrl+Shift+P`.*

| PN title | Subelement | Date | Status |
|---|---|---|---|
| | | | |

---

## Weak areas to revisit

*Add topics here as you find them in practice exams. Remove when mastered.*

- [ ]
- [ ]

---

## Spaced repetition queue

*Concepts that need revisiting — not fully solid yet.*

| Concept | Subelement | Last drilled | Next review |
|---|---|---|---|
| General class HF frequency privileges table | G1A | | |
| Ionospheric layer behaviours (D/E/F) | G3C | | |
| dB rules (+3dB, +10dB, −3dB, −10dB) | G5B | | |
| Class A/B/C/D amplifier characteristics | G7B | | |
| Half-wave dipole length formula | G9B | | |

---

## Exam log

| Date | Type | Score | Notes |
|---|---|---|---|
| | Practice — baseline | % | First exam before studying |
| | Practice | % | |
| | Practice | % | |
| | **Official exam** | % | |

---

**Links:** [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Overview|Overview]] | [[05-Resources/Courses/HAM-Radio/General License Syllabus|Syllabus]] | [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Reference|Quick Reference]] | [[05-Resources/Courses/HAM-Radio/General License Study Resources|Study Resources]]
