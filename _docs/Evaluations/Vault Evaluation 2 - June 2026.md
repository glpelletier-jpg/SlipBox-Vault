---
tags: [vault-meta]
date: 2026-06-04
type: vault-audit
---

# Vault Evaluation 2 — June 4, 2026

> Second full evaluation. First audit is at [[_docs/Evaluations/Vault Audit - Content & Structure 1 - June 2026]]. This document covers what's changed, what's still missing, and what to do next.

---

## What's been built since the first audit

In one session, the vault went from an unconfigured inbox to a functioning system:

| Area | Before | Now |
|---|---|---|
| Plugins | 16 + BRAT + Excalidraw | 15 clean, focused plugins |
| Fleeting folder | 307 notes (40 duplicates, CSVs, credentials) | 162 notes, unique, clean |
| Literature folder | 0 notes | 38 reformatted literature notes |
| Permanent notes | 0 | 1 |
| MOCs | 0 | 1 (Automation Engineering) |
| Work knowledge | Scattered in Fleeting | 07-Work-Knowledge/ — 35 notes across 5 subfolders |
| Quests | 1 (Health Reset) | 2 (Health Reset + New Role Integration) |
| Weekly reviews | 0 | 4 (W20–W23) |
| Monthly reviews | 0 | 2 (May, June) |
| HAM Radio | 4 scattered notes | Master Reference, Syllabus, Study Resources, 10-week Todoist project |
| PDF workflow | Not configured | _attachments/ with Work subfolders, Obsidian configured |
| Attachment folder | Not set | _attachments/ — drag-and-drop saves here |
| Reference material | In Fleeting | _reference/Personal/ + _reference/Work/ |
| Archive | None | _archive/ with Quests/, Daily-Notes/, Fleeting/ |
| Calendar | Google Calendar only | Google Calendar + Todoist iCal merged in weekly script |
| Documentation | Partially outdated | Master Guide updated throughout, plugin count corrected |

---

## Current scorecard

| Area | Score | Notes |
|---|---|---|
| System architecture | 🟢 Excellent | Structure is clean and complete |
| Plugin set | 🟢 Lean | 15 well-chosen plugins, no bloat |
| Work knowledge | 🟢 Strong | 35 notes, 5 subfolders, CAP roadmap, Automation MOC |
| HAM Radio study | 🟢 Complete | Best-documented area in the vault |
| Quests | 🟢 Good | 2 active, well-written, linked to Life Compass |
| PDF workflow | 🟢 Configured | _attachments/ set up and structured |
| Literature notes | 🟡 Thin | 38 notes but all missing "key ideas in your own words" |
| Permanent notes | 🔴 Critical | 1 note — and it has significant quality issues |
| Focus logging | 🔴 Not started | All daily notes show focus_minutes: 0 |
| Life Compass | 🟡 Partial | 4 of 5 "How I want to show up" fields blank |
| Weekly reviews | 🟡 Empty shells | W20–W23 created but all blank |
| Fleeting inbox | 🟡 Large | 162 notes, many processable |
| Books folder | 🔴 Unused | 1 book entry; 38 literature notes with no matching book cards |

---

## Issues found

### 1. The one permanent note needs fixing

The sole permanent note — *"Organizing my life"* — violates its own template rules:

- **Title is a topic, not a claim.** "Organizing my life" describes a subject. A permanent note title must be a complete claim: *"Capturing ideas immediately prevents compounding loss"* or *"A trusted system replaces the cognitive load of remembering."*
- **The idea section is too vague.** "Take the ideas in your head and write them down before you lose them" — this is a reminder, not an insight.
- **Only 1 of 2 required links is filled in.** The second and third link slots are empty.
- **Counterarguments section is blank.**

This note should be rewritten with a claim title, or deleted and started fresh. One strong permanent note is worth more than ten weak ones.

---

### 2. Literature notes have quotes but no synthesis

All 38 literature notes were reformatted and the Readwise highlights preserved — but the critical section "Key ideas in your own words" is blank in every note. Quotes are someone else's words. The synthesis is yours. Without it, the literature notes are just highlight archives, not knowledge.

The five most worth doing first: *Atomic Habits*, *How to Take Smart Notes*, *Getting Things Done*, *A Guide to the Automation Body of Knowledge*, and *Circuit Analysis for Complete Idiots*. Each has direct connections to your active quests and CAP study.

---

### 3. Focus minutes have never been logged

Every daily note still has `focus_minutes: 0` in frontmatter. The heatmap calendar on the dashboard is completely empty. The focus log calculation works (fixed earlier) — the habit of logging hasn't started.

Even a rough daily estimate (90 min for a workday) is enough to make the system useful. The heatmap becomes motivating once there are 7+ days of data.

---

### 4. Life Compass still has 4 blank sections

The "How I want to show up" field is empty for Integrity, Creation, Foundation, and Deliberateness. Only Presence is filled in. Every quarterly review, monthly values check, and weekly "did you live your values?" table references these — blank fields make those sections meaningless.

---

### 5. Weekly reviews W20–W23 are empty templates

All four weekly review notes were created but never filled in. Even rough retroactive ratings (a number out of 5 for each life area) would give the dashboard and quarterly review something to work with.

---

### 6. Books folder doesn't match Literature folder

There are 38 literature notes but only 1 Book entry (Tom Sawyer). Books you're actively studying — Atomic Habits, GTD, the ARRL handbooks — don't have Book cards. The `reading-list.base` on the dashboard shows nothing because no books have `status: reading`.

---

### 7. Articles folder is completely unused

`05-Resources/Articles/` contains only the empty "New Article.md" placeholder. This folder is either used (by adding an article capture workflow like Obsidian Web Clipper) or it's dead weight. Make a decision.

---

### 8. Remaining duplicate in Fleeting

Two notes with nearly identical names still exist in Fleeting:
- `(Executable strategy for writing).md`
- `Executable strategy for writing.md`

One should be deleted.

---

### 9. Ideas folder has one stale unprocessed note

`05-Resources/Ideas/Vault version 4.0.md` has been sitting at `status: raw` since June 3. It contains meta-notes about vault improvements — most of which have now been implemented. It should be updated to `status: promoted` or deleted.

---

## Recommendations

### Do this week

**1. Fix the permanent note** — Open *"Organizing my life"*, give it a claim title (e.g., *"Capturing ideas at point of contact prevents compounding loss"*), rewrite the idea section as a concrete position, add 2 outbound links. Takes 15 minutes and makes the Zettelkasten real.

**2. Log focus minutes daily** — At end of day, open today's daily note, add `[duration:: 90]` (or whatever's realistic) to the Focus log section. Copy the total to `focus_minutes:` in frontmatter. The heatmap activates at 7 days of data.

**3. Fill in Life Compass** — Complete "How I want to show up" for Integrity, Creation, Foundation, and Deliberateness. 20 minutes, not 2 hours. One sentence per value is enough.

**4. Delete the duplicate** — Delete either `(Executable strategy for writing).md` or `Executable strategy for writing.md` from Fleeting.

**5. Add 3 Book entries** — Create Book notes in `05-Resources/Books/` for Atomic Habits, GTD, and How to Take Smart Notes. Set `status: reading` so they appear on the dashboard reading list.

### Do this month

**6. Fill in "Key ideas in your own words"** in 5 literature notes — start with Atomic Habits and How to Take Smart Notes. Each section takes 10 minutes and produces 2–3 permanent note seeds.

**7. Write 3–5 permanent notes** — The Fleeting folder has rich source material. Three ready-to-promote clusters:
- *PKM/Zettelkasten methodology* — 20+ notes on evergreen notes, permanent notes, fleeting notes
- *Habit formation* — Atomic Habits highlights, "Important habits preserve mental clarity," Understanding the habit cycle
- *Flow and focus* — Conditions of Flow, Balancing Challenge and Skill, Compounding

**8. Fill in weekly reviews W20–W23** — Rough ratings only. Even 5 minutes per review creates a data baseline.

**9. Decide on Articles folder** — Either install Obsidian Web Clipper to make it useful, or delete the folder and route articles directly to Fleeting/Literature.

**10. Archive or promote "Vault version 4.0.md"** — Most of what it captured has been implemented. Update `status: promoted` and add a note about what was done.

### Structural improvements to consider

**11. Create a PKM/Productivity MOC** — The Fleeting folder has 30+ notes on note-taking methodology (Zettelkasten principles, evergreen notes, progressive summarization, etc.). A MOC would make this cluster navigable and seed 5–10 permanent notes.

**12. Create a Personal Growth MOC** — Dr K videos (anxiety, overthinking, passion, journaling), habit formation notes, and flow/focus notes form a natural cluster with direct connection to the Health Reset quest.

**13. Add a Raspberry Pi resource note** — Multiple Raspberry Pi notes exist across Courses/GPS-Tracker-Project and Fleeting. A single resource note linking them would make this interest area navigable.

**14. Consider Obsidian Web Clipper** — A browser extension (not a community plugin) that captures articles directly into `05-Resources/Articles/` using your Article template. Free, official Obsidian product. Makes the Articles folder functional. Install at [obsidian.md/clipper](https://obsidian.md/clipper).

---

## Plugin set — current state (15 plugins)

The removal of Excalidraw and BRAT is a good call. Both added complexity without adding daily-use value. The current 15-plugin set is lean and coherent — every plugin earns its place.

No additions recommended at this time. The system's constraint is not missing features; it's missing *usage*.

---

## The honest summary

The vault's infrastructure is now genuinely excellent — better designed than most vaults that have been running for years. The system knows what to do. The gap is entirely in content: the Zettelkasten has 1 permanent note, focus minutes have never been logged, and the Life Compass is half-filled.

None of the remaining gaps require more setup. They require 15 minutes a day of actually using the system — logging focus time, writing one permanent note per week, filling in the weekly review on Sunday.

The vault is ready. The question is whether the habit follows.

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Evaluations/Vault Audit - Content & Structure 1 - June 2026|First Audit]] | Configuration Evaluation
