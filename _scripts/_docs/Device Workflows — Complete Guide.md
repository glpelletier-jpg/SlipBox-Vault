---
doc_type: guide
purpose: "Per-device capture and review workflows — what to do on desktop vs tablet vs phone"
title: Device Workflows — Complete Guide
date: 2026-06-07
tags: [guide, devices, workflow, automation]
---

# Device Workflows — Complete Guide

> The role, daily routine, automations, and capture rules for each of your five devices. Every device has a defined lane — crossing lanes creates friction.

**Companion documents:**
- [[_docs/Bixby Routines — Setup Guide|Bixby Routines — Setup Guide]]
- [[_docs/Android Shortcuts — Setup Guide|Android Shortcuts — Setup Guide]]
- [[_docs/Slip Box Integrated Workflow|Integrated Workflow]]
- [[_docs/Multi-Device Setup Sync and Mobile|Multi-Device Setup]]

---

## Device roles at a glance

| Device | Primary role | Vault access | Key apps |
|---|---|---|---|
| Windows 11 Desktop | All serious vault work | Full Obsidian desktop | Obsidian, Morgen, Todoist |
| Android Tablet | Zettelkasten processing, reading | Obsidian mobile (Sync) | Obsidian, Morgen |
| reMarkable Paper Pro | Handwritten capture and thinking | None (PDF export) | reMarkable OS |
| Samsung Galaxy S25 Ultra | Quick capture on the go | Obsidian mobile (Sync) | Morgen, Todoist, Obsidian, Samsung Health |
| Samsung Galaxy Watch Ultra | Health tracking, wrist capture | None | Todoist (Wear OS), Samsung Health |

---

## 1 — Windows 11 Desktop

### Role
The primary vault. All serious work — quest notes, Zettelkasten processing, Work Knowledge, troubleshooting logs, system development, weekly/monthly/quarterly reviews. The only device where the full Obsidian desktop experience runs.

### Automations

| Automation | How | Status |
|---|---|---|
| Weekly calendar auto-fetch on startup | Settings → Templater → Startup templates → add `_scripts/weekly-calendar.js` | Set up manually once |
| Nightly git backup | Windows Task Scheduler → run `_scripts/vault-backup.bat` at 11pm | Set up via Task Scheduler |
| Daily note schedule auto-populate | Templater fires `daily-schedule.js` when daily note is created | Already active ✅ |
| Vault tasks → Morgen | Morgen Tasks plugin syncs on startup and change | Already active ✅ |

#### Setting up the nightly backup (Task Scheduler)

1. Press `Win + R` → type `taskschd.msc` → Enter
2. Action menu → **Create Basic Task**
3. Name: `Slip Box Nightly Backup` → Next
4. Trigger: **Daily** → set time to **11:00 PM** → Next
5. Action: **Start a program**
6. Program/script: `C:\Vault\Slip Box\_scripts\vault-backup.bat`
7. Start in: `C:\Vault\Slip Box`
8. Finish → the task runs silently every night

#### Setting up the weekly calendar startup template

1. Obsidian → Settings → Templater
2. Scroll to **Startup templates**
3. Click **+** → select `_scripts/weekly-calendar.js`
4. Done — Obsidian now fetches the week's calendar every time it opens

### Daily workflow

**Morning (10 min):**
1. Open Morgen (or it opens automatically at startup) — review calendar + tasks
2. `Ctrl+D` → open today's daily note (schedule already populated)
3. Write `focus_intention:` in Properties
4. Log morning vitals (BP, glucose, weight, pulse)

**During the day:**
- `Ctrl+Shift+C` → daily capture (thoughts, insights)
- `Ctrl+Shift+F` → new fleeting note (ideas needing their own note)
- Focus log: `- [duration:: 90] Description of session`
- Todoist for non-vault tasks

**Evening (8 min):**
1. Morgen → check tomorrow's shape, time-block priorities
2. Todoist → reschedule undone tasks, process inbox
3. Daily note → log `steps:`, `energy:`, `end_of_day:`, copy focus total to `focus_minutes:`

**Sunday (45 min):**
See [[_docs/Slip Box Integrated Workflow|Integrated Workflow]] for the full Sunday reset procedure.

---

## 2 — Android Tablet

### Role
Zettelkasten processing and reading. The tablet's larger screen makes sustained reading and note-writing more comfortable than the phone, and it's more portable than the desktop. Use it specifically for processing the fleeting note backlog, writing permanent notes, and reading literature notes.

### Setup checklist

- [ ] Install Obsidian from Google Play
- [ ] Settings → Sync → connect to Slip Box remote vault (same encryption password as desktop)
- [ ] Wait for sync to complete (~2–5 min)
- [ ] Settings → Community Plugins → install any plugins flagged as needing installation
- [ ] Configure mobile toolbar (Settings → Mobile → Toolbar):
  - Open today's note (Periodic Notes: Open daily note)
  - New Fleeting Note (QuickAdd: New Fleeting Note)
  - Add to Daily Capture (QuickAdd: Add to Daily Capture)
  - Open dashboard (Homepage: Open homepage)
- [ ] Install Morgen app from Play Store
- [ ] Set up Bixby Routine: connected to home Wi-Fi → open Obsidian (see [[_docs/Bixby Routines — Setup Guide|Bixby Routines Guide]])
- [ ] Add Android home screen shortcuts (see [[_docs/Android Shortcuts — Setup Guide|Android Shortcuts Guide]])

### Automations

| Automation | Trigger | Action |
|---|---|---|
| Auto-open Obsidian | Connected to home Wi-Fi (Bixby Routine) | Opens Obsidian for processing sessions |
| Obsidian Sync | Continuous | Keeps all notes in sync with desktop and phone |

### Daily workflow (Zettelkasten processing session)

1. Pick up tablet → Obsidian auto-opens (Bixby)
2. Navigate to `06-Zettelkasten/Fleeting/` — oldest notes are at the top
3. For each fleeting note: read → decide (promote to permanent / archive to literature / delete)
4. When promoting: `Ctrl+Shift+P` equivalent via toolbar → write permanent note
5. Add ≥ 2 outbound links before closing the permanent note
6. Target: 5 notes processed per session

**Capture during processing:**
If a new idea surfaces while processing: use the daily capture toolbar button → appends to today's note without leaving the processing flow.

---

## 3 — reMarkable Paper Pro

### Role
Handwritten capture and deep thinking. The reMarkable owns all analog input — site visits, equipment sketches, troubleshooting diagrams, HAM Radio study, brainstorming, and meeting notes at Argenta. Nothing handwritten should live permanently on the reMarkable — it's an inbox, not storage.

### Folder structure on the device

```
reMarkable/
├── Work/        Site visits · equipment sketches · troubleshooting diagrams · meeting notes
├── Fleeting/    Quick idea captures · brainstorms · mind maps (process weekly)
└── Reference/   Formula sheets · reference tables you wrote yourself
```

### Sync status

> ⚠️ **reMarkable Sync plugin is currently non-functional.** Use manual export until fixed.
> Monitor: [github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases](https://github.com/TimDommett/Remarkable-Sync---Obsidian-Plugin/releases)

### Manual export workflow (current)

**Weekly (Sunday, before weekly review):**
1. Connect reMarkable via USB to the desktop computer
2. Open the reMarkable desktop app or Windows Explorer
3. Export new notebooks as PDFs
4. Place PDFs in the correct subfolder:
   - Work notes → `_attachments/reMarkable/Work/`
   - Fleeting captures → `_attachments/reMarkable/Fleeting/`
   - Reference → `_attachments/reMarkable/Reference/`
5. Create companion notes for Work and Reference PDFs (Attachment Note Template)
6. Process Fleeting PDFs → retype key ideas as vault fleeting notes → archive the PDF

### When the plugin is fixed

1. Download new `remarkable-sync.zip` from the GitHub releases page
2. Replace `.obsidian/plugins/remarkable-sync/` folder
3. Re-enable plugin: Settings → Community Plugins → toggle on
4. Authenticate: Settings → reMarkable Sync → paste new 8-character code from my.remarkable.com
5. Set sync folder to `_attachments/reMarkable`, auto-sync ON, interval 15 minutes

### Capture routing

| What you're writing | Folder | Vault destination |
|---|---|---|
| Argenta site visit notes | Work/ | Companion note → linked to Work Knowledge |
| Equipment fault sketch | Work/ | Companion note → linked to Troubleshooting log |
| HAM Radio study diagrams | Work/ | Companion note → linked to HAM Radio course |
| Brainstorm or mind map | Fleeting/ | Retype key points as vault fleeting note → PDF archived |
| Formula sheet you wrote | Reference/ | Companion note → linked to relevant vault note |

**Capture rule:** The reMarkable owns all handwritten capture. The S Pen on the S25 Ultra is for annotating PDFs only — not for creating new notes. One handwriting device, one capture lane.

---

## 4 — Samsung Galaxy S25 Ultra

### Role
Quick capture on the go and mobile vault access. The phone's job is to get ideas and tasks into the system immediately, wherever you are. It is not for deep work — that happens on the desktop or tablet.

### Setup checklist

- [ ] Install Obsidian from Google Play → connect to Obsidian Sync
- [ ] Configure mobile toolbar (same as tablet setup above)
- [ ] Install Morgen from Play Store → connect Google Calendar and Todoist accounts
- [ ] Install Todoist from Play Store → connect Google Assistant (Settings → Integrations → Google Assistant)
- [ ] Add Todoist widget to home screen (long-press home → Widgets → Todoist)
- [ ] Install Android shortcuts (see [[_docs/Android Shortcuts — Setup Guide|Android Shortcuts Guide]])
- [ ] Set up Bixby Routines (see [[_docs/Bixby Routines — Setup Guide|Bixby Routines Guide]])
  - Morning: open Morgen on first unlock
  - Evening: vitals reminder at 8:30pm

### Automations

| Automation | Trigger | Action |
|---|---|---|
| Open Morgen | First unlock of day (Bixby) | Morgen opens — morning review starts immediately |
| Vitals reminder | 8:30pm daily (Bixby) | Notification + Samsung Health opens |
| Todoist voice capture | "Hey Google, add [task] to Todoist" | Task goes to Todoist inbox |
| Obsidian daily note | Tap home screen shortcut | Today's note opens directly |
| Daily capture | Tap home screen shortcut | QuickAdd prompt appears |

### Daily workflow

**Morning (30 seconds):**
1. First phone unlock → Morgen opens automatically (Bixby)
2. Quick review of the day's shape in Morgen
3. Tap Daily Note shortcut → `⊞` Properties → type `focus_intention:`
4. Done — phone goes back in your pocket

**During the day:**
- Work task: Todoist widget → quick add (or "Hey Google, add to Todoist")
- Thought/insight: Daily Capture shortcut → type it → done
- Fleeting idea: New Fleeting shortcut → opens Obsidian to new note
- S Pen: annotating PDFs in Samsung Notes or Obsidian only — not for capture

**Evening (60 seconds):**
1. 8:30pm notification fires → Samsung Health opens
2. Note today's step count
3. Tap Daily Note shortcut → `⊞` Properties → fill `steps:`, `energy:`, `end_of_day:`
4. Done

### Home screen layout

**Main screen:**
```
[ Daily Note  ]  [ Daily Capture ]
[ Morgen      ]  [ Todoist widget             ]
```

**Vault folder:**
```
[ Dashboard  ]  [ New Fleeting ]
[ Obsidian   ]
```

---

## 5 — Samsung Galaxy Watch Ultra

### Role
Passive health tracking and wrist-based task capture. The watch runs in the background all day, continuously logging steps, heart rate, and sleep. You don't interact with it much — it feeds data to Samsung Health, which you read at the end of the day.

### Setup checklist

- [ ] Install Todoist from Galaxy Store (or via Galaxy Wearable app on phone)
- [ ] Add Todoist as a watch tile: Galaxy Wearable → Watch face & style → Edit tiles → add Todoist
- [ ] Samsung Health: confirm step counting and heart rate tracking are enabled
- [ ] Enable sleep tracking: Samsung Health → Sleep → toggle On (wear watch to bed)

### Automations

| What runs automatically | Where it goes |
|---|---|
| Step count | Samsung Health on phone → check nightly → log to `steps:` in daily note |
| Heart rate (continuous) | Samsung Health → review weekly for energy correlation |
| Sleep tracking | Samsung Health → informs `energy:` rating in daily note |
| Workout detection | Samsung Health → optional: log major workouts in Health Reset quest |

### Daily workflow

**No active workflow required during the day.** The watch tracks passively.

**Evening (part of the Bixby-triggered routine):**
1. Bixby notification fires at 8:30pm
2. Samsung Health opens → check **Today's steps**
3. Also note sleep quality from last night if relevant
4. Log to daily note via phone

**Wrist capture:**
- Swipe to Todoist tile → tap "Add task" → speak or type the task
- Goes directly to Todoist inbox
- Best for: "Remember to [x]" moments when the phone isn't handy

### Health data → vault connection

The watch tracks exactly what the vault's vitals system is designed to receive:

| Watch data | Daily note field | How to transfer |
|---|---|---|
| Steps | `steps:` | Samsung Health → read nightly → type value |
| Resting HR | *(optional — informational)* | Samsung Health → Wearable data |
| Sleep hours | *(informs `energy:` rating)* | Use as context when rating 1–5 |
| Calories burned | *(not tracked in vault — skip)* | — |

---

## Automation summary — all devices

| Automation | Device | Trigger | Manual setup required? |
|---|---|---|---|
| Weekly calendar fetch | Desktop | Obsidian startup | Yes — add to Templater startup templates |
| Daily note schedule | Desktop | New daily note created | Already active ✅ |
| Vault tasks → Morgen | Desktop | File change / startup | Already active ✅ |
| Nightly git backup | Desktop | 11pm daily | Yes — Task Scheduler |
| Open Morgen at morning | S25 Ultra | First unlock (Bixby) | Yes — Bixby Routines |
| Evening vitals reminder | S25 Ultra | 8:30pm (Bixby) | Yes — Bixby Routines |
| Open Obsidian at home | Tablet | Home Wi-Fi connect (Bixby) | Yes — Bixby Routines |
| Home screen shortcuts | S25 Ultra + Tablet | Tap icon | Yes — Android Shortcuts guide |
| Todoist voice capture | S25 Ultra + Watch | "Hey Google / Bixby" | Yes — Google Assistant + Todoist link |
| Todoist wrist tile | Watch | Swipe to tile | Yes — Galaxy Wearable app |
| Health auto-tracking | Watch | Always on | Already active ✅ |
| reMarkable auto-sync | reMarkable | Every 15 min | Pending plugin fix ⚠️ |

---

**Links:** [[_docs/Bixby Routines — Setup Guide|Bixby Routines]] · [[_docs/Android Shortcuts — Setup Guide|Android Shortcuts]] · [[_docs/Slip Box Integrated Workflow|Integrated Workflow]] · [[_docs/Multi-Device Setup Sync and Mobile|Multi-Device Setup]] · [[00-Home/00-Home|Dashboard]]
