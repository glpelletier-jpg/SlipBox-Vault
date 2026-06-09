---
title: Vault Evaluation 8 — June 2026
date: 2026-06-05
tags: [vault-meta, evaluation]
---

# Vault Evaluation 8 — June 2026

*Full audit — structure · scripts · templates · documentation · daily notes · workflows*

**Previous:** [[_docs/Evaluations/Vault Evaluation 7 - June 2026|Evaluation 7]] | **State doc:** [[_docs/Vault State - June 2026|Vault State]]

---

## Snapshot

| Metric | Count |
|---|---|
| Total notes | ~415 |
| Daily notes | 17 (May 21 – Jun 5) |
| Fleeting notes | 150 (unprocessed) |
| Literature notes | 38 |
| Permanent notes | 6 |
| Scripts (active) | 4 |
| Templates | 18 |
| Active quests | 2 |
| Weekly reviews completed | W20 · W21 · W22 (W23 blank — due Jun 7) |

---

## 🔴 Errors — fix immediately

### 1. `2026-05-23.md` — NUL bytes at end of file

**What:** The file ends with two NUL bytes (`\x00\x00`) at positions 3403–3404. `grep` flags it as binary. Obsidian renders it fine, but any script or tool that reads the file as text may fail or produce garbled output.

**Fix:** Strip the trailing NUL bytes.

```bash
python3 -c "
with open('2026-05-23.md', 'rb') as f: d = f.read()
with open('2026-05-23.md', 'wb') as f: f.write(d.rstrip(b'\x00'))
"
```

---

### 2. `_templates/Update Focus Minutes.md` — broken Templater API call

**What:** The script calls `tp.file.find_tfile(tp.file.path(true))`. In Templater, `tp.file.path` is a **property** (a string), not a function. Calling `tp.file.path(true)` throws a TypeError. The template will silently fail when run.

**Fix:** Replace the modify call:

```javascript
// BROKEN:
await app.vault.modify(tp.file.find_tfile(tp.file.path(true)), updatedContent);

// CORRECT:
const tfile = app.workspace.getActiveFile();
await app.vault.modify(tfile, updatedContent);
```

---

### 3. `_templates/Weekly Calendar Template.md` — completely broken, wired in Templater

**What:** This template tries to call `https://api.anthropic.com/v1/messages` directly from inside Obsidian with `mcp_servers` in the request body. This approach does not work — Obsidian cannot make authenticated Anthropic API calls, and the `mcp_servers` parameter is not part of the standard Messages API. Every run of this template would fail with a network or auth error.

**Worse:** It is wired in Templater's template hotkeys list (`.obsidian/plugins/templater-obsidian/data.json`), so it could be accidentally triggered.

**Fix:** Remove this template from Templater's hotkey list (Settings → Templater → Template Hotkeys). The actual weekly calendar is produced by `weekly-calendar.js` via QuickAdd (`Ctrl+Shift+K`) — that is the working path, and it does not use this template at all.

---

## 🟡 Stale content — fix soon

### 4. `_docs/Claude Project Instructions.md` — 2 stale references

- Says "Evaluations (6)" in the folder map — should be **7** (Eval 7 exists, Eval 8 is now being written)
- References Vault Evaluation 6 as "Latest audit (Jun 6, 2026)" — should reference **Evaluation 7** (or 8)

---

### 5. `_docs/Getting Started - First 30 Days.md` — wrong path for Vault State

References `00-Home/Vault State - June 2026.md` in two places. The file actually lives at `_docs/Vault State - June 2026.md`. The links are broken.

---

### 6. `06-Zettelkasten/Permanent/` — one note with double-period filename

`Capturing ideas at point of contact prevents the compounding loss of fleeting insights..md` ends with two periods. Should be one. All other permanent notes use kebab-case; this one still has the prose-title format from before the rename pass.

**Fix:** Rename to `capturing-ideas-at-point-of-contact-prevents-compounding-loss.md` (or equivalent kebab-case claim title).

---

### 7. `04-Daily-Notes/2026-06-03.md` and `2026-06-04.md` — missing `dataview-ignore: true`

All other daily notes have this field. These two were created outside the template path (or the template wasn't applied). Inconsistent — won't break `.base` views but will expose them to any Dataview query that targets `type: daily`.

---

## 🔵 Efficiency gaps — address when capacity allows

### 8. Work calendar not in daily schedule

The `daily-schedule.js` and `weekly-calendar.js` scripts only pull from the personal Google Calendar ICS. The Argenta work calendar (`23p993q6e3iq0ptnnv1l7bel4f0pgefs@import.calendar.google.com`) is a separate feed. Work meetings and events won't appear in the daily schedule until this ICS URL is added.

**Fix:** In QuickAdd → Manage Macros → Weekly Calendar → ⚙️, there is currently one `ics_url` field. To add the work calendar: open `weekly-calendar.js` and `daily-schedule.js` and merge both ICS feeds (both scripts share the same parse/filter pattern — a second `requestUrl` call, same parse, concatenate before filter).

---

### 9. Daily note habit checkboxes — only tracks Health Reset Q3

Two quests are active (Health Reset Q3 and New Role Integration Q3) but the daily note template only has habit checkboxes for Health Reset. New Role Integration habits (onboarding tasks, knowledge capture, network building) are invisible in the daily cadence.

**Suggestion:** Add a second `## Quest habits` block (or a combined block) with habits for New Role Integration, e.g.:
- [ ] 📝 Captured one work observation or process note
- [ ] 🤝 Introduced myself to or followed up with one colleague
- [ ] 🔧 Logged equipment or system detail in _reference/Work

---

### 10. HAM Radio Week 1 begins June 8 — no study cadence in vault

Files exist (Master Reference, Syllabus, 4 resource notes) but no active study system is running. No fleeting/literature notes from the material, no Todoist tasks for weekly modules, no HAM Radio MOC linked to the study syllabus.

**Suggested action before June 8:**
- Add recurring Todoist task: "HAM Radio — G1 study session (30 min)" daily through target exam date
- Link `HAM Radio Master Reference.md` to `HAM Radio MOC.md`
- Add W1 goal to W23 review: complete G1 Commission's Rules section

---

### 11. 150 fleeting notes — no processing momentum

150 notes have been in queue since before May 21. The target is 10/week but no weekly review shows fleeting note processing as a completed item. At 10/week this takes 15 weeks (mid-September). Consider:
- Triage session: bulk-delete irrelevant/expired captures first (likely 30–40%)
- Lower target to 5/week to build the habit before increasing
- Add "Process 3 fleeting notes" as a Todoist daily task (small, completable)

---

### 12. New Role Integration quest — 10% since May 27

9 days in with minimal progress signal. The `_reference/Work/` stubs are created but empty. No troubleshooting logs yet despite the CP 12 Bottom Agitator work in progress (it appears in `Key Systems.md` as a stub). Gary Tebow's departure today (June 5) makes this urgent — knowledge transfer window has closed.

**Immediate action:** Open a Troubleshooting Log for the CP 12 Bottom Agitator situation and capture everything you know now while it's fresh.

---

## 📋 Summary action list

| Priority | Item | File | Effort |
|---|---|---|---|
| 🔴 | Strip NUL bytes from 2026-05-23.md | `04-Daily-Notes/2026-05-23.md` | 2 min |
| 🔴 | Fix `tp.file.path(true)` bug | `_templates/Update Focus Minutes.md` | 5 min |
| 🔴 | Remove Weekly Calendar Template from Templater hotkeys | Obsidian Settings | 2 min |
| 🟡 | Update Claude Project Instructions (eval count + latest link) | `_docs/Claude Project Instructions.md` | 5 min |
| 🟡 | Fix Vault State path in Getting Started | `_docs/Getting Started - First 30 Days.md` | 2 min |
| 🟡 | Rename double-period permanent note | `06-Zettelkasten/Permanent/` | 2 min |
| 🟡 | Add `dataview-ignore: true` to 06-03 and 06-04 daily notes | `04-Daily-Notes/` | 2 min |
| 🔵 | Add work calendar ICS to scripts | `_scripts/daily-schedule.js` + `weekly-calendar.js` | 30 min |
| 🔵 | Add New Role Integration habits to daily note template | `_templates/Daily Note Template.md` | 10 min |
| 🔵 | Start HAM Radio study cadence in Todoist + link MOC | Todoist + vault | 15 min |
| 🔵 | Triage fleeting notes — delete stale, process 5 | `06-Zettelkasten/Fleeting/` | 30 min/session |
| 🔵 | Create CP 12 Troubleshooting Log | `07-Work-Knowledge/Troubleshooting/` | 20 min |

---

**Links:** [[_docs/Evaluations/Vault Evaluation 7 - June 2026|Evaluation 7]] | [[_docs/Vault State - June 2026|Vault State]] | [[_docs/Slip Box Master Guide|Master Guide]]
