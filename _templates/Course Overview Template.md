---
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: course-overview
course: <% tp.file.title.replace(" — Overview", "").replace(/\s+/g, "-") %>
status: active
credential: 
target_date: 
effort_hours_estimated: 
effort_hours_completed: 0
tags: [course, courses]
---

# <% tp.file.title %>

> *One sentence: what is this course and what does passing/completing it get you?*

---

## Goal

**Credential / outcome:**
**Why this matters:**
**Connection to vault:** [[01-Vision/future-vision|Future Vision]] · [[02-Quests/|Quests]]

---

## Timeline

| Item | Detail |
|---|---|
| Start date | <% tp.date.now("YYYY-MM-DD") %> |
| Target completion | *(fill in)* |
| Estimated effort | *(fill in, e.g. 40 hours)* |
| Daily commitment | *(fill in, e.g. 30 min/day)* |
| Exam / assessment date | *(fill in when scheduled)* |

---

## What's in this folder

| File | Purpose | When to use |
|---|---|---|
| **This file** | Entry point — goal, timeline, connections | Read first |
| [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Syllabus|Syllabus]] | Week-by-week study plan | Your daily study guide |
| [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Resources|Resources]] | Books, links, tools | When you need a specific resource |
| [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Progress|Progress Tracker]] | Session log + score tracking | After every study session |
| [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Reference|Quick Reference]] | Compact formulas, key facts, tables | Active recall between sessions |

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

*List the main topic areas and their weight or question count if known.*

| Module | Topic | Weight / Questions |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

---

## Connections to vault knowledge

*Where does this course overlap with knowledge already in the vault?*

| Course topic | Related vault notes |
|---|---|
| | |
| | |

---

## Quick-start checklist

- [ ] Create HamStudy/practice account (or equivalent)
- [ ] Locate all books and resources listed in [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Resources|Resources]]
- [ ] Set a daily calendar block for study sessions
- [ ] Open [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Syllabus|Syllabus]] → start Week 1 / Module 1
- [ ] Log your first session in [[<% tp.file.folder(true) %>/<% tp.file.title.replace(" — Overview", "") %> — Progress|Progress Tracker]]

---

**Links:** [[05-Resources/Courses/Course Study Workflow|Course Study Workflow]] | [[01-Vision/future-vision|Future Vision]] | [[02-Quests/|Quests]]
