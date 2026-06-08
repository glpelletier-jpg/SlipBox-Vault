---
doc_type: guide
purpose: "Google Keep + Gemini AI note capture workflow with Make.com automation to Obsidian vault"
title: Google Keep — Vault Workflow
date: 2026-06-07
tags:
  - guide
  - workflow
  - google-keep
  - gemini
  - automation
---

# Google Keep — Vault Workflow

How to use Gemini AI on the Galaxy Watch Ultra to capture notes to Google Keep, then automatically route tagged notes into the vault via Make.com.

---

## System overview

```
Watch (Gemini voice) → Google Keep → Make.com (every 15 min) → Vault Inbox (Google Doc) → Weekly Review 9b → Obsidian vault
```

---

## Part 1 — Gemini + Google Keep setup (one-time)

### Connect Google Keep to Gemini

1. Open the **Gemini app** on your phone
2. Tap profile icon → **Settings** → **Extensions** (or Connected Apps)
3. Toggle **Google Workspace** ON
4. Go to [myactivity.google.com/product/gemini](https://myactivity.google.com/product/gemini) → confirm **Keep Activity** is enabled

### Set Home button to Gemini on watch

**Galaxy Wearable app → Watch settings → Advanced → Customize buttons → Home button → Gemini**

---

## Part 2 — Capture notes from the watch

Press the Home button → speak to Gemini:

| What you say | What happens |
|---|---|
| `"Save to Keep: [note]. Label it Vault."` | Creates Keep note + labels for automation |
| `"Save to Keep: [note]"` | Creates Keep note (no label — won't auto-sync) |
| `"Add [item] to my [list] list in Keep"` | Appends to existing Keep list |
| `"Create a note called [name] with [details]. Label it Vault."` | Named note + label |

**Plant floor capture example:**
> *"Save to Keep: PLC rack in panel 3 runs hot after 2 hours, check cooling fan. Label it Vault."*

---

## Part 3 — Gemini prompts for organizing Keep notes

### Find notes without remembering titles
- *"Find my Keep notes about [topic]"*
- *"Check my notes for a link I saved about [description]"*
- *"What work observations have I saved recently?"*

### Summarize and extract insights
- *"Summarize my Keep note called [name]"*
- *"Pull all my work notes from Keep and summarize the main themes"*
- *"What action items are buried in my Keep notes?"*
- *"Pull my notes about [topic] from Keep and check if the information is still accurate"* ← cross-references web

### Organize
- *"Show all my Keep notes and group them by topic"*
- *"Which Keep notes seem outdated or done?"*
- *"List all my Keep notes with titles so I can review them"*

### Create vault-ready content
- *"Summarize my Keep note called '[note name]' and format it as a troubleshooting log"*

> **Known limitation:** Gemini cannot filter Keep notes by date. Use descriptive note titles or content keywords instead.

---

## Part 4 — Make.com automation setup (one-time)

**What it does:** Every 15 minutes, Make checks Google Keep for notes labeled "Vault" and appends them to a Google Doc called "Vault Inbox."

> **Note:** IFTTT no longer supports Google Keep. Use Make.com instead.

### Prerequisites

1. **Create the Keep label**
   - Google Keep → hamburger menu (≡) → **Edit labels** → **+** → type **Vault** → Save

2. **Create the Google Doc**
   - Go to [docs.google.com](https://docs.google.com) → new blank doc → name it **Vault Inbox**

3. **Create a Make.com account**
   - Go to [make.com](https://make.com) → Get started free → sign in with glpelletier@gmail.com
   - Free plan: 1,000 operations/month, runs every 15 min — enough for ~30 notes/day

### Build the scenario

**Step 1 — Create scenario**
- Make dashboard → **+ Create a new scenario** → click the **+** circle

**Step 2 — Trigger: Google Keep**
- Search **Google Keep** → select → choose **Watch Notes**
- Connect Google account → allow access
- Configure: Watch = New notes only · Limit = 10
- Click OK

**Step 3 — Filter: Vault label only**
- Click the wrench icon on the arrow → **Set up a filter**
- Label: `Vault label check`
- Condition: `Labels > Name` **Contains** `Vault`
- Click OK

**Step 4 — Action: Google Docs append**
- Click **+** → search **Google Docs** → **Append a Paragraph**
- Connect same Google account
- Configure:
  - Document: select **Vault Inbox**
  - Append text (use variable picker):
    ```
    --- [Title] ---
    [Text Content]
    Added: [Created Time]
    ```
  - After content: **End of document**
- Click OK

**Step 5 — Activate**
- Clock icon → **Every 15 minutes**
- Save → toggle scenario **ON**

### Test it
1. On watch → Gemini → *"Save to Keep: test observation. Label it Vault."*
2. Wait up to 15 minutes
3. Check Vault Inbox Google Doc — entry should appear

---

## Part 5 — Weekly review integration (Section 9b)

During the weekly review **Section 9b** (Work captures — Todoist → vault):

1. Open **Vault Inbox** Google Doc
2. For each entry:
   - Troubleshooting note → new file in `07-Work-Knowledge/Troubleshooting/` (`Ctrl+P` → QuickAdd → New Troubleshooting Log)
   - Process or system note → add to relevant file in `07-Work-Knowledge/Processes/`
   - General observation → append to `_reference/Work/Field Notes.md`
3. Delete processed entries from the Vault Inbox doc (leave empty for next week)
4. Mark related Todoist items complete

---

## Quick reference

| Task | How |
|---|---|
| Capture work note from watch | Home button → Gemini → *"Save to Keep: [note]. Label it Vault."* |
| Query your notes | Open Gemini app → ask in natural language |
| Check automation | Open Vault Inbox Google Doc |
| Process into vault | Weekly review Section 9b |
| Make.com dashboard | [make.com](https://make.com) |
| Keep Activity setting | [myactivity.google.com/product/gemini](https://myactivity.google.com/product/gemini) |
