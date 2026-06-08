// create-course.js — Templater user script
// Creates a complete course folder with all 5 standard files.
// Usage in a template: <%* await tp.user.create_course(tp) %>

async function create_course(tp) {
  const { Notice } = require('obsidian');

  // ── Prompts ───────────────────────────────────────────────────────────────
  const displayName = await tp.system.prompt(
    "Course display name (e.g. 'HAM Radio General License')",
    "",
    true
  );
  if (!displayName) { new Notice("⚠️ Course creation cancelled."); return; }

  const slug = await tp.system.prompt(
    "Folder name / slug (e.g. 'HAM-Radio', 'CAP-Certification')",
    displayName.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-]/g, ""),
    true
  );
  if (!slug) { new Notice("⚠️ Course creation cancelled."); return; }

  const credential = await tp.system.prompt(
    "Target credential or goal (e.g. 'General Class License', or leave blank)",
    "",
    false
  );

  const targetDate = await tp.system.prompt(
    "Target completion date (YYYY-MM-DD, or leave blank)",
    "",
    false
  );

  const effortHours = await tp.system.prompt(
    "Estimated effort in hours (e.g. 40, or leave blank)",
    "",
    false
  );

  // ── Setup ─────────────────────────────────────────────────────────────────
  const today    = tp.date.now("YYYY-MM-DD");
  const folder   = `05-Resources/Courses/${slug}`;
  const courseId = slug;

  // ── File content builders ─────────────────────────────────────────────────

  function overviewContent() {
    return `---
title: ${displayName} — Overview
date: ${today}
type: course-overview
course: ${courseId}
status: active
credential: ${credential || ""}
target_date: ${targetDate || ""}
effort_hours_estimated: ${effortHours || ""}
effort_hours_completed: 0
tags: [course, courses]
---

# ${displayName} — Overview

> *One sentence: what is this course and what does passing/completing it get you?*

---

## Goal

**Credential / outcome:** ${credential || "*(fill in)*"}
**Why this matters:**
**Connection to vault:** [[01-Vision/future-vision|Future Vision]] · [[02-Quests/|Quests]]

---

## Timeline

| Item | Detail |
|---|---|
| Start date | ${today} |
| Target completion | ${targetDate || "*(fill in)*"} |
| Estimated effort | ${effortHours ? effortHours + " hours" : "*(fill in)*"} |
| Daily commitment | *(fill in, e.g. 30 min/day)* |
| Exam / assessment date | *(fill in when scheduled)* |

---

## What's in this folder

| File | Purpose | When to use |
|---|---|---|
| **This file** | Entry point — goal, timeline, connections | Read first |
| [[05-Resources/Courses/${slug}/${displayName} — Syllabus|Syllabus]] | Week-by-week study plan | Your daily study guide |
| [[05-Resources/Courses/${slug}/${displayName} — Resources|Resources]] | Books, links, tools | When you need a specific resource |
| [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]] | Session log + score tracking | After every study session |
| [[05-Resources/Courses/${slug}/${displayName} — Reference|Quick Reference]] | Compact formulas, key facts, tables | Active recall between sessions |

---

## Exam / assessment overview

| Item | Detail |
|---|---|
| Format | *(e.g. 35 multiple choice, open book, project)* |
| Pass threshold | *(e.g. 74%)* |
| Duration | *(e.g. 35 minutes)* |
| Question pool / scope | *(fill in)* |
| Registration link | *(fill in)* |

---

## Topics / modules

| Module | Topic | Weight / Questions |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

---

## Connections to vault knowledge

| Course topic | Related vault notes |
|---|---|
| | |

---

## Quick-start checklist

- [ ] Locate all resources in [[05-Resources/Courses/${slug}/${displayName} — Resources|Resources]]
- [ ] Set a daily calendar block for study sessions
- [ ] Open [[05-Resources/Courses/${slug}/${displayName} — Syllabus|Syllabus]] → start Week 1 / Module 1
- [ ] Log first session in [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]]

---

**Links:** [[05-Resources/Courses/Course Study Workflow|Course Study Workflow]] | [[01-Vision/future-vision|Future Vision]]
`;
  }

  function syllabusContent() {
    return `---
title: ${displayName} — Syllabus
date: ${today}
type: course-syllabus
course: ${courseId}
total_weeks:
tags: [course, courses, syllabus]
---

# ${displayName} — Syllabus

> **Pace:** *(fill in)* · **Total effort:** ${effortHours ? "~" + effortHours + " hours" : "*(fill in)*"} · **Target:** *(fill in passing score)*

---

## Before you start

- [ ] Complete the quick-start checklist in [[05-Resources/Courses/${slug}/${displayName} — Overview|Overview]]
- [ ] Set your target exam/completion date: _______________
- [ ] Schedule your daily study block in Google Calendar

---

## Milestone checklist

- [ ] Week 2 — First practice assessment completed (baseline score recorded in [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]])
- [ ] Midpoint — All modules at >75% accuracy on practice tools
- [ ] Week N-1 — Scoring consistently at or above target
- [ ] Final — Scoring target on three consecutive practice assessments
- [ ] Assessment scheduled
- [ ] Assessment passed ✅

---

## Week 1 — [Topic Name]

*Module:* · *Questions in pool:* · *Questions on exam:*

### Topics
- **1A** —
- **1B** —

### Daily plan

| Day | Task |
|---|---|
| Mon | |
| Tue | |
| Wed | |
| Thu | |
| Fri | Practice exam + log in [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]] |

### Key things to know
-
-

---

## Week 2 — [Topic Name]

*(Copy Week 1 block — add as many weeks as needed)*

---

## Final Review Week

| Day | Task |
|---|---|
| Mon | Full review — complete 3 practice assessments |
| Tue | Drill all modules below 85% |
| Wed | Final practice assessment |
| Thu | Review weak areas only |
| Fri | If at target → schedule the real assessment |

---

**Links:** [[05-Resources/Courses/${slug}/${displayName} — Overview|Overview]] | [[05-Resources/Courses/${slug}/${displayName} — Resources|Resources]] | [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]] | [[05-Resources/Courses/Course Study Workflow|Study Workflow]]
`;
  }

  function resourcesContent() {
    return `---
title: ${displayName} — Resources
date: ${today}
type: course-resources
course: ${courseId}
tags: [course, courses, resources]
---

# ${displayName} — Resources

> Curated resources ranked by usefulness.

---

## Start here (highest ROI)

1. **[Resource name](URL)** — why it's the best starting point
2. **[Resource name](URL)** —

---

## Primary study materials

### Books / manuals

| Title | Author | Notes | In vault? |
|---|---|---|---|
| | | | No |

### Online courses / video

| Resource | URL | Notes | Free? |
|---|---|---|---|
| | | | Yes |

---

## Practice and assessment tools

| Tool | URL | What it does |
|---|---|---|
| | | Flashcards / spaced repetition |
| | | Full practice exams |

**Strategy:** Take a baseline exam before studying. Drill each module to >85% accuracy. Take full practice exams weekly from Week 2 — log scores in [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]].

---

## Official resources

| Resource | URL | Use for |
|---|---|---|
| Official syllabus | | |
| Question pool | | |
| Registration | | |

---

## Vault literature notes

- [[06-Zettelkasten/Literature/|]]

---

**Links:** [[05-Resources/Courses/${slug}/${displayName} — Overview|Overview]] | [[05-Resources/Courses/${slug}/${displayName} — Syllabus|Syllabus]] | [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]]
`;
  }

  function progressContent() {
    return `---
title: ${displayName} — Progress
date: ${today}
type: course-progress
course: ${courseId}
status: active
target_score:
exam_date:
tags: [course, courses, progress]
---

# ${displayName} — Progress

> Log every study session here. One line per session with \`[duration:: N]\` (minutes) and \`[score:: N%]\` (practice exam score, if taken).

---

## Dashboard

\`\`\`dataviewjs
const page = dv.current();
const lists = page.file.lists.array();
const sessions = lists.filter(l => l.duration != null);
const scored   = lists.filter(l => l.score  != null);

const totalMin = sessions.reduce((s, l) => s + (Number(l.duration) || 0), 0);
const hrs      = Math.floor(totalMin / 60);
const mins     = totalMin % 60;
const estHrs   = ${effortHours || 40};
const pctTime  = Math.min(Math.round((totalMin / (estHrs * 60)) * 100), 100);
const barTime  = "▓".repeat(Math.round(pctTime / 5)) + "░".repeat(20 - Math.round(pctTime / 5));

dv.header(3, "📊 Study hours");
dv.paragraph(\`**Total:** \${hrs}h \${mins}m (\${totalMin} min)  ·  **Estimated:** \${estHrs}h  \\n\\\`\${barTime}\\\` \${pctTime}%\`);

if (scored.length > 0) {
  const scores = scored.map(l => Number(String(l.score).replace("%", "")));
  const latest = scores[scores.length - 1];
  const best   = Math.max(...scores);
  const avg    = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const target = page.target_score ? Number(String(page.target_score).replace("%", "")) : 74;

  dv.header(3, "🎯 Score trend");
  dv.paragraph(
    \`**Latest:** \${latest}%  ·  **Best:** \${best}%  ·  **Average:** \${avg}%  ·  **Target:** \${target}%\n\n\` +
    scores.map((s, i) => {
      const bar = "█".repeat(Math.round(s / 5));
      const flag = s >= target ? "✅" : s >= target - 10 ? "🟡" : "🔴";
      return \`Session \${i + 1}: \\\`\${bar}\\\` \${s}% \${flag}\`;
    }).join("\\n")
  );
}

dv.header(3, "📅 Sessions");
dv.paragraph(\`**Total sessions:** \${sessions.length}  ·  **Scored:** \${scored.length}\`);
\`\`\`

---

## Session log

*Format: \`- YYYY-MM-DD · [Topic] · [duration:: N] · [score:: N%] · Notes\`*
*Omit \`[score:: N%]\` on sessions where no practice exam was taken.*

### Week 1

- ${today} · [Module 1] · [duration:: 0] · Notes: *first session*

### Week 2

-

---

## Weak areas

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
| | **Official** | % | |

---

**Links:** [[05-Resources/Courses/${slug}/${displayName} — Overview|Overview]] | [[05-Resources/Courses/${slug}/${displayName} — Syllabus|Syllabus]] | [[05-Resources/Courses/${slug}/${displayName} — Reference|Reference]]
`;
  }

  function referenceContent() {
    return `---
title: ${displayName} — Reference
date: ${today}
type: course-reference
course: ${courseId}
tags: [course, courses, reference]
---

# ${displayName} — Reference

> Compact reference card for active recall. Add to it as you study each module. Use for quick review between sessions and last-minute exam prep.

---

## Key formulas

| Formula | What it calculates | Notes |
|---|---|---|
| | | |

---

## Key values to memorise

| Item | Value | Context |
|---|---|---|
| | | |

---

## Module 1 — [Topic]

**Core concept in one sentence:**
>

**Must-know facts:**
-
-

**Common exam traps:**
-

---

## Module 2 — [Topic]

*(Copy module block above — add one per module as you study)*

---

## Mnemonics and memory aids

| What to remember | Memory aid |
|---|---|
| | |

---

## Commonly confused pairs

| Concept A | Concept B | Key difference |
|---|---|---|
| | | |

---

## Last-minute review checklist

- [ ] All formulas recalled without looking
- [ ] All key values recalled without looking
- [ ] Commonly confused pairs — can state the difference
- [ ] Scored at target on a fresh practice exam this week

---

**Links:** [[05-Resources/Courses/${slug}/${displayName} — Overview|Overview]] | [[05-Resources/Courses/${slug}/${displayName} — Syllabus|Syllabus]] | [[05-Resources/Courses/${slug}/${displayName} — Progress|Progress Tracker]]
`;
  }

  // ── Create files ──────────────────────────────────────────────────────────
  const files = [
    { name: `${displayName} — Overview`,   content: overviewContent()   },
    { name: `${displayName} — Syllabus`,   content: syllabusContent()   },
    { name: `${displayName} — Resources`,  content: resourcesContent()  },
    { name: `${displayName} — Progress`,   content: progressContent()   },
    { name: `${displayName} — Reference`,  content: referenceContent()  },
  ];

  let created = 0;
  for (const file of files) {
    const path = `${folder}/${file.name}.md`;
    try {
      const existing = app.vault.getAbstractFileByPath(path);
      if (!existing) {
        // Ensure folder exists
        const folderObj = app.vault.getAbstractFileByPath(folder);
        if (!folderObj) await app.vault.createFolder(folder);
        await app.vault.create(path, file.content);
        created++;
      } else {
        new Notice(`⚠️ Already exists — skipped: ${file.name}`);
      }
    } catch (e) {
      new Notice(`❌ Failed to create: ${file.name} — ${e.message}`);
    }
  }

  new Notice(`✅ Course package created: ${created}/5 files in ${folder}`);

  // Open the Overview note
  const overviewPath = `${folder}/${displayName} — Overview.md`;
  const overviewFile = app.vault.getAbstractFileByPath(overviewPath);
  if (overviewFile) {
    await app.workspace.getLeaf().openFile(overviewFile);
  }
}

module.exports = create_course;
