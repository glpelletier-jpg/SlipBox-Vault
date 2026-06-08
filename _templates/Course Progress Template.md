---
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: course-progress
course: <% tp.file.title.replace(" — Progress", "").replace(/\s+/g, "-") %>
status: active
target_score: 
exam_date: 
tags: [course, courses, progress]
---

# <% tp.file.title %>

> Log every study session here. One line per session with `[duration:: N]` and `[score:: N%]` inline fields. The dashboard below auto-updates from these entries.

---

## Dashboard

```dataviewjs
// ── Course Progress Dashboard ─────────────────────────────────────────────
const page = dv.current();
const lists = page.file.lists.array();

// Parse sessions: lines with [duration:: N]
const sessions = lists.filter(l => l.duration != null);
const scored   = lists.filter(l => l.score  != null);

// ── Hours ─────────────────────────────────────────────────────────────────
const totalMin = sessions.reduce((s, l) => s + (Number(l.duration) || 0), 0);
const hrs      = Math.floor(totalMin / 60);
const mins     = totalMin % 60;
const estHrs   = 40; // ← change to match your course's estimated effort
const pctTime  = Math.min(Math.round((totalMin / (estHrs * 60)) * 100), 100);
const barTime  = "▓".repeat(Math.round(pctTime / 5)) + "░".repeat(20 - Math.round(pctTime / 5));

dv.header(3, "📊 Study hours");
dv.paragraph(`**Total:** ${hrs}h ${mins}m (${totalMin} min)  ·  **Estimated:** ${estHrs}h  \n\`${barTime}\` ${pctTime}%`);

// ── Score trend ───────────────────────────────────────────────────────────
if (scored.length > 0) {
  const scores = scored.map(l => Number(String(l.score).replace("%", "")));
  const latest = scores[scores.length - 1];
  const best   = Math.max(...scores);
  const avg    = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const target = page.target_score ? Number(String(page.target_score).replace("%", "")) : 74;

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

// ── Sessions count ────────────────────────────────────────────────────────
dv.header(3, "📅 Sessions");
dv.paragraph(`**Total sessions logged:** ${sessions.length}  ·  **Scored sessions:** ${scored.length}`);
```

---

## Session log

*Add one line per study session. Format:*
`- YYYY-MM-DD · [Topic / Module] · [duration:: N] · [score:: N%] · Notes`

*`[duration:: N]` = minutes studied. `[score:: N%]` = practice exam score (omit if no exam taken that session).*

---

### Week 1

- <% tp.date.now("YYYY-MM-DD") %> · [Module 1 - topic] · [duration:: 0] · Notes: *starting out*

---

### Week 2

- 

---

### Week 3

- 

---

### Week 4

- 

---

### Week 5

- 

---

### Week 6

- 

---

### Week 7

- 

---

### Week 8

- 

---

### Week 9

- 

---

### Week 10

- 

---

## Weak areas to revisit

*Running list of topics that keep coming up wrong in practice exams. Clear items as you master them.*

- [ ] 
- [ ] 
- [ ] 

---

## Spaced repetition queue

*Concepts that need revisiting — add them here when they're not fully solid, remove when memorised.*

| Concept | Last drilled | Next review |
|---|---|---|
| | | |
| | | |

---

## Exam log

*Record every official practice exam or actual exam taken.*

| Date | Type | Score | Notes |
|---|---|---|---|
| | Practice | % | |
| | Practice | % | |
| | **Official exam** | % | |

---

**Links:** [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Progress", "") %> — Overview|Overview]] | [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Progress", "") %> — Syllabus|Syllabus]] | [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Progress", "") %> — Reference|Quick Reference]]
