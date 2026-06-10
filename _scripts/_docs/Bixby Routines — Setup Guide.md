---
doc_type: guide
purpose: "Samsung Bixby routines for automating vault-related phone actions"
title: Bixby Routines — Setup Guide
date: 2026-06-07
tags: [guide, automation, android, samsung]
---

# Samsung Routines — Setup Guide

> Automated morning and evening triggers for the S25 Ultra and Android tablet. Routines replace manual "remember to open X" steps with automatic app launches and reminders.

**Applies to:** Samsung Galaxy S25 Ultra · Android Tablet

**Where to find Routines:**
- **S25 Ultra (One UI 6+):** Settings → **Modes and Routines** → **Routines** tab
- **Older Samsung devices:** Settings → Advanced Features → Bixby Routines
- **Can't find it?** Pull down the Settings search bar and type `Routines`

---

## Routine 1 — Morning: Auto-open Morgen

**What it does:** Opens Morgen automatically at the start of your day so it's ready when you pick up your phone — no hunting for the app.

### Setup steps

1. Open **Settings → Modes and Routines → Routines** tab
2. Tap **+** (Add routine)
3. Tap **Add condition** (the IF part)
4. Choose **Time** → set to your typical wake time (e.g. 6:00 AM)
   - Set **Repeat:** Mon, Tue, Wed, Thu, Fri (weekdays only — or all days if you want it on weekends too)
   - Alternatively use **"First phone unlock"** as the trigger instead of a fixed time — more flexible
5. Tap **Next** → **Add action** (the THEN part)
6. Choose **Apps** → **Open app** → select **Morgen**
7. Optional: add a second action → **Sound & vibration** → **Notification sound** → pick a subtle chime so you know the routine fired
8. Tap **Save** → name it **"Morning — Open Morgen"**

### Tablet version

Repeat the same steps on the Android tablet, but set the trigger to **"Connected to Wi-Fi"** (your home network) instead of a time. This means whenever you pick up the tablet at home, it opens Obsidian automatically — useful for Zettelkasten processing sessions.

1. **Add condition** → **Wi-Fi** → select your home network
2. **Add action** → **Apps** → **Open app** → **Obsidian**
3. Name it **"Tablet — Open Obsidian at Home"** → **Save**

---

## Routine 2 — Evening: Vitals Reminder

**What it does:** Sends a notification at 8:30pm reminding you to check Samsung Health for your step count and log your end-of-day vitals in Obsidian.

### Setup steps

1. In Routines, tap **+**
2. **Add condition** → **Time** → **8:30 PM**
   - Repeat: Every day (vitals logging is a daily habit, weekends included)
3. **Add action** → **Notifications** → **Send notification**
   - Title: `Log vitals`
   - Message: `Check Samsung Health for steps → open Obsidian → daily note → Properties`
4. Add a second action → **Apps** → **Open app** → **Samsung Health**
   - This opens Samsung Health immediately when you tap the notification — skips a step
5. Name it **"Evening — Vitals Reminder"** → **Save**

### What you do when the notification fires

1. Tap the notification → Samsung Health opens
2. Note your **step count** from today
3. Switch to **Obsidian** → today's daily note → tap `⊞` Properties
4. Fill in: `steps:`, `energy:` (1–5), `end_of_day:` (one sentence)
5. Done — takes under 60 seconds

---

## Routine 3 — Work Mode (optional, S25 Ultra)

**What it does:** Activates a focus profile when you arrive at Argenta — silences personal notifications so you're not distracted while on the plant floor.

### Setup 


1. **Add condition** → **Location** → search for or drop a pin on your Argenta facility address
   - Set radius to ~200m (enough to catch the building but not the parking lot)
2. **Add action** → **Sound & vibration** → **Do not disturb** → On
3. Add action → **Notifications** → **Block notifications from:** select social apps, personal email (keep Todoist and work apps unblocked)
4. **Add a reverse action** (runs when you leave): toggle Do Not Disturb off, restore notifications
5. Name it **"Work Mode — Argenta"** → **Save**

---

## Routine 4 — Study Mode (optional, S25 Ultra)

**What it does:** When you start a HAM Radio or course study session, activate a focus mode that reduces interruptions.

### Setup steps

1. **Trigger:** Make this a **manual routine** (no automatic trigger — you start it intentionally)
   - In the routine editor, look for a **"Run manually"** or **"Start manually"** toggle at the top
2. **Actions:**
   - Sound & vibration → Do not disturb → On (allow alarms)
   - Display → Screen timeout → 10 minutes (prevents screen sleep mid-reading)
   - Optional: Bluetooth → connect to your preferred headphones
3. Name it **"Study Mode"** → **Save**
4. Add it to your home screen: in Routines, tap the routine → three-dot menu → **Add to Home screen**

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Can't find Routines | Settings search bar → type "Routines" — it appears immediately |
| Routine doesn't fire at the set time | Battery optimization may be blocking it. Settings → Battery and device care → Battery → Background usage limits → find Routines app → set to "Unrestricted" |
| Morgen doesn't open, just the lock screen | Add a second condition: "Screen state → Unlocked" so the routine only fires when the phone is already in use |
| Notification doesn't appear | Settings → Notifications → find Modes and Routines → ensure notifications are allowed |
| Location trigger fires too early | Increase the radius or switch from "Arrival" to "During time at location" (minimum 5 minutes) |

---

**Links:** [[_docs/Device Workflows — Complete Guide|Device Workflows]] · [[_docs/Slip Box Integrated Workflow|Integrated Workflow]] · [[_docs/Multi-Device Setup Sync and Mobile|Multi-Device Setup]]
