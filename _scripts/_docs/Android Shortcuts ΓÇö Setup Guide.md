---
doc_type: guide
purpose: "Android shortcut configuration for quick vault capture on phone"
title: Android Shortcuts — Setup Guide
date: 2026-06-07
tags: [guide, automation, android, obsidian]
---

# Android Shortcuts — Setup Guide

> One-tap home screen shortcuts that open specific parts of your Obsidian vault on your S25 Ultra and Android tablet.

**Applies to:** Samsung Galaxy S25 Ultra · Android Tablet

---

## What you get

Four shortcuts, each opens a different vault destination instantly:

| Shortcut | Icon | What it opens |
|---|---|---|
| `daily-note.html` | 📅 | Today's daily note (creates it if it doesn't exist) |
| `dashboard.html` | 🏠 | The 00-Home dashboard |
| `daily-capture.html` | ⏱ | QuickAdd daily capture (append a thought to today's note) |
| `new-fleeting.html` | 💡 | New fleeting note in the Zettelkasten |

---

## Setup — Method 1: Samsung Internet (recommended)

Samsung Internet handles Obsidian's custom URI (`obsidian://`) more reliably than Chrome.

### Step 1 — Copy shortcut files to your device

Transfer the four `.html` files from the `obsidian-shortcuts/` folder to your phone. Options:
- **Google Drive:** upload to Drive on your computer → open Drive app on phone → download to phone storage
- **USB:** plug phone into computer → copy files to `Internal Storage/Documents/Obsidian Shortcuts/`
- **Email to yourself:** attach the files → open on phone → save to Files

### Step 2 — Open each file in Samsung Internet

1. Open the **Files** app on your phone
2. Navigate to where you saved the `.html` files
3. Tap `daily-note.html` → it opens in Samsung Internet
4. The page auto-redirects to Obsidian after 0.6 seconds (Obsidian must be installed)
5. Go back to Samsung Internet after Obsidian opens

### Step 3 — Add to Home Screen

While on the shortcut page in Samsung Internet:
1. Tap the **three-dot menu** (⋮) in the browser
2. Tap **Add page to** → **Home screen**
3. Edit the name if you want (e.g. "Daily Note") → tap **Add**
4. The shortcut appears on your home screen

**Repeat for all four files.**

### Step 4 — Arrange shortcuts

Long-press the new shortcuts on your home screen and drag them to a dedicated "Vault" section or folder. Suggested layout: put Daily Note and Daily Capture on the main screen, Dashboard and Fleeting Note in a folder labeled "Vault."

---

## Setup — Method 2: Shortcut Maker app

If Method 1 doesn't work or you prefer a cleaner shortcut icon, use the free **Shortcut Maker** app from the Play Store.

### Step 1 — Install Shortcut Maker

Search "Shortcut Maker" on Google Play → install the app by **Rushikesh Kamewar** (free, no ads).

### Step 2 — Create each shortcut

1. Open Shortcut Maker
2. Tap **Activities** → search for "Obsidian" → this won't find vault-specific shortcuts — instead:
3. Tap **URL Shortcut** (or **Deep link**)
4. Paste the URI for the shortcut you want (see table below)
5. Choose an icon and label
6. Tap **Create shortcut** → it appears on your home screen

### Obsidian URIs to use

| Shortcut | URI |
|---|---|
| Today's Daily Note | `obsidian://advanced-uri?vault=Slip%20Box&commandid=periodic-notes%3Aopen-daily-note` |
| Dashboard | `obsidian://advanced-uri?vault=Slip%20Box&commandid=homepage%3Aopen-homepage` |
| Daily Capture | `obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3Achoice%3A73fd090a-a813-4765-a89d-5765fd9eb671` |
| New Fleeting Note | `obsidian://advanced-uri?vault=Slip%20Box&commandid=quickadd%3ANew%20Fleeting%20Note` |

> **Vault name is case-sensitive.** The vault must be named exactly `Slip Box` (with a space) in Obsidian for these URIs to work. Check Settings → About in Obsidian to confirm.

---

## Setup — Method 3: Google Assistant shortcut

For voice-triggered shortcuts (hands-free capture):

1. Open **Google Assistant**
2. Say: "Add a reminder" or use the Assistant shortcut creation flow
3. For Todoist: just say "Hey Google, add [task] to my Todoist" — this works natively once Todoist is linked to your Google account
4. For Obsidian: Google Assistant cannot directly trigger Obsidian URIs via voice, but you can use **Bixby** voice instead:
   - Say "Hey Bixby, open Obsidian" → opens the app
   - Then use the mobile toolbar to navigate to the daily note

---

## Recommended Home Screen Layout

### S25 Ultra — Main screen

```
[ Daily Note ]   [ Daily Capture ]
[ Morgen      ]   [ Todoist       ]
```

- Daily Note: tap every morning after Morgen
- Daily Capture: tap when you have a thought to log mid-day
- Morgen: morning calendar review
- Todoist: non-vault task capture

### S25 Ultra — Second screen or folder: "Vault"

```
[ Dashboard    ]   [ New Fleeting  ]
```

### Android Tablet — Home screen

```
[ Obsidian (app) ]   [ Dashboard    ]
[ Daily Note     ]   [ New Fleeting ]
```

The tablet is primarily used for Zettelkasten work, so Dashboard and New Fleeting are more relevant than Daily Capture.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Tapping shortcut does nothing | Obsidian is not installed, or the vault name in the URI doesn't match exactly |
| Opens Obsidian but wrong screen | The command ID may be wrong — check the Obsidian URI with Advanced URI plugin's generator: `Ctrl+P` → "Advanced URI: Copy URI for command" |
| Samsung Internet redirects to an error | Try Method 2 (Shortcut Maker) instead — it handles URIs more directly |
| "Vault not found" error | Confirm the vault is named exactly `Slip Box` in Settings → About in Obsidian |
| Auto-redirect fires before Obsidian loads | Tap the button instead of waiting for the auto-redirect |

---

**Links:** [[_docs/Device Workflows — Complete Guide|Device Workflows]] · [[_docs/Bixby Routines — Setup Guide|Bixby Routines]] · [[_docs/Multi-Device Setup Sync and Mobile|Multi-Device Setup]]
