---
tags: [workflow, courses, study, zettelkasten, ia-ot]
date: 2026-06-08
updated: 2026-06-08
---

# Course Study Workflow

> How to add a course to the vault, study it so the knowledge sticks, and track your progress — all from a standard folder structure that works the same every time. **Updated June 2026** to include Zettelkasten integration for IA/OT learning frameworks.

---

## Standard folder structure

Every course lives in its own folder under `05-Resources/Courses/`. Each folder contains exactly 5 standard files plus any additional notes you create while studying.

```
05-Resources/Courses/
├── Course Study Workflow.md              ← this file
├── PLC-Architecture/
│   ├── PLC Architecture — Overview.md
│   ├── PLC Architecture — Syllabus.md
│   ├── PLC Architecture — Resources.md
│   ├── PLC Architecture — Progress.md
│   └── PLC Architecture — Reference.md
├── Process-Safety-IEC-61511/
├── OT-Networking/
├── Instrumentation/
├── HAM-Radio/
└── GPS-Tracker-Project/
```

### The 5 standard files

| File | Type | Purpose | When to open it |
|---|---|---|---|
| `[Name] — Overview.md` | `course-overview` | Goal, timeline, what's in the folder, exam details | Read first |
| `[Name] — Syllabus.md` | `course-syllabus` | Module-by-module study plan | Every day — your study guide |
| `[Name] — Resources.md` | `course-resources` | All study tools, links, books, videos explained | When you need a specific resource |
| `[Name] — Progress.md` | `course-progress` | DataviewJS dashboard + session log | Log every session here |
| `[Name] — Reference.md` | `course-reference` | Compact reference card for active recall | Between sessions and before assessments |

---

## Creating a new course package

`Ctrl+P` → type **"QuickAdd: New Course Package"** → press Enter

| Prompt | Example |
|---|---|
| Course display name | `PLC Architecture` |
| Folder slug | `PLC-Architecture` |
| Credential/goal | `CAP Design Domain` |
| Target completion date | `2027-06-30` |
| Estimated effort (hours) | `60` |

---

## Daily study workflow

```
1. Open the course Syllabus → find today's module and task
2. Study (read, watch, build, configure)
3. Capture observations in a Fleeting note using Automation-Fleeting-Template
4. At end of session → log in Progress Tracker:
      - YYYY-MM-DD · [Module N - topic] · [duration:: N] · [score:: N%] · Notes
5. If a key concept crystallized → promote to Permanent note (see below)
```

---

## Zettelkasten integration — the knowledge pipeline

The IA/OT courses are designed to feed the Zettelkasten, not replace it. Every study session should produce at least one note that outlives the course.

```
Study session
    │
    ├── Quick observation, question, or surprise
    │       └── Automation-Fleeting-Template → 06-Zettelkasten/Fleeting/
    │               Process within 48h → promote or archive
    │
    ├── Processing a specific source (datasheet, standard, manual)
    │       └── Automation-Liturature-Template → 06-Zettelkasten/Literature/
    │               Extract key concepts → spawn Permanent notes
    │
    └── A concept fully understood and expressible as a claim
            └── Automation-Permanent-Template → 06-Zettelkasten/Permanent/
                    Link to MOC → cross-link to related PNs
                    Tag cap_domain: if relevant to CAP exam
```

### Which template for which moment

| Moment | Template to use |
|---|---|
| You notice something unexpected during study | `Automation-Fleeting-Template` |
| You're working through a specific source (IEC 61511, Rockwell manual) | `Automation-Liturature-Template` |
| You can state one idea as a clear, defensible claim | `Automation-Permanent-Template` |
| You're ready to organize a whole topic | `Automation-MOC-Template` |

### Where templates live and where files go

| Template | File created in |
|---|---|
| `Automation-Fleeting-Template` | `06-Zettelkasten/Fleeting/` |
| `Automation-Liturature-Template` | `06-Zettelkasten/Literature/` |
| `Automation-Permanent-Template` | `06-Zettelkasten/Permanent/` |
| `Automation-MOC-Template` | `06-Zettelkasten/MOC/` |

### Naming conventions

| Type | Pattern | Example |
|---|---|---|
| Fleeting | `FLT-YYYYMMDDHHmm` | `FLT-202606081430` |
| Literature | `LIT — Vendor/Author — Title` | `LIT — Rockwell — Studio 5000 User Manual` |
| Permanent | `PN — Claim as title` | `PN — HART superimposes FSK signal on 4–20 mA loop without disrupting analog output` |
| MOC | `MOC — Topic` | `MOC — PLC Architecture` |

---

## MOC connections — active IA/OT hubs

Each course has a corresponding MOC that organizes Permanent notes by topic. Cross-link new Permanent notes to the right MOC using the `moc:` frontmatter field.

| Course | MOC |
|---|---|
| PLC Architecture | [[06-Zettelkasten/MOC/MOC — PLC Architecture]] |
| Process Safety (IEC 61511) | [[06-Zettelkasten/MOC/MOC — Process Safety (IEC 61511)]] |
| OT Networking | [[06-Zettelkasten/MOC/MOC — OT Networking]] |
| Instrumentation | [[06-Zettelkasten/MOC/MOC — Instrumentation]] |

---

## Weekly review integration

During your weekly review, add this check to the standard review procedure:

```
Course check (5 min):
  □ Open each active course Progress Tracker
  □ Is session count on track for the week?
  □ Any Fleeting notes older than 48h waiting to be promoted?
  □ Any Permanent notes created this week? → verify MOC link is set
  □ Any weak areas added to the Progress Tracker this week?
```

---

## CAP exam tagging

Permanent notes relevant to the CAP exam should include the `cap_domain:` frontmatter field:

```yaml
cap_domain: design       # design | maintenance | operations | PM
```

Use this DataviewJS snippet in your CAP study hub to surface all tagged notes by domain:

```dataviewjs
const domains = ["design", "maintenance", "operations", "PM"];
for (const d of domains) {
  const notes = dv.pages('"06-Zettelkasten/Permanent"').where(p => p.cap_domain === d);
  dv.header(3, d.charAt(0).toUpperCase() + d.slice(1) + ` (${notes.length})`);
  dv.list(notes.map(p => p.file.link));
}
```

---

**Links:** [[05-Resources/Courses/PLC Architecture/PLC Architecture — Overview|PLC Architecture]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Overview|Process Safety]] · [[05-Resources/Courses/OT-Networking/OT Networking — Overview|OT Networking]] · [[05-Resources/Courses/Instrumentation/Instrumentation — Overview|Instrumentation]] · [[06-Zettelkasten/MOC/MOC — PLC Architecture|MOC Hub]]
