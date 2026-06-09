---
doc_type: guide
purpose: "Galaxy Watch Ultra complete guide — all settings, health features, safety, workouts, and vault integration"
title: Galaxy Watch Ultra
date: 2026-06-07
tags:
  - guide
  - watch
  - health
---

# Galaxy Watch Ultra

The Galaxy Watch Ultra is Samsung's flagship rugged smartwatch — titanium frame, 1.5″ sapphire crystal display, 10 ATM water resistance (100m), dual-band L1/L5 GPS, 590 mAh battery, 2 GB RAM, 32 GB storage, running One UI Watch on Wear OS. This document covers every settings area, health feature, and how to log data into your vault.

---

## Contents

1. [[#1. First Setup — Priority Order]]
2. [[#2. Buttons & Gestures]]
3. [[#3. Display & Watch Faces]]
4. [[#4. Notifications & Sound]]
5. [[#5. Connectivity (LTE, Wi-Fi, Bluetooth, NFC)]]
6. [[#6. Health & Sensors — Complete Reference]]
7. [[#7. Workouts & Exercise]]
8. [[#8. Outdoor & Navigation Features]]
9. [[#9. Safety Features]]
10. [[#10. Battery & Power Management]]
11. [[#11. Apps, Tiles & Assistant]]
12. [[#12. General Settings & Maintenance]]
13. [[#13. Vault Integration]]

---

## 1. First Setup — Priority Order

Do these in order the first week. Many health features need baseline data before they're useful.

| Day | Action |
|---|---|
| Day 1 | Pair via Galaxy Wearable app · activate LTE (NumberShare/Digits) · curate notifications · set Quick Button |
| Day 1 | Enable Water Lock tile · enable Siren · configure emergency contacts |
| Day 1–3 | Wear continuously so Energy Score and sleep baselines establish |
| Day 3–5 | Do one 10+ min high-intensity effort outdoors to auto-calibrate HR zones |
| Day 7 | Calibrate Blood Pressure with arm cuff (required before BP monitoring works) |
| Day 14 | Check Sleep Apnea data (requires two consecutive full nights of wear) |

---

## 2. Buttons & Gestures

### Physical buttons

The watch has three physical buttons on the right side:

| Button | Default action | Where to change |
|---|---|---|
| **Home button** (top) | Wake / go home | Galaxy Wearable → Watch settings → Buttons and gestures |
| **Back button** (middle) | Go back one screen | Not remappable |
| **Quick Button** (bottom, orange dot) | Customizable (see below) | Galaxy Wearable → Watch settings → Buttons and gestures → Quick button |

### Customizing the Quick Button

Go to **Galaxy Wearable → Watch settings → Buttons and gestures → Quick button**.

You can assign separate actions to:
- **Single press** — launch an app or function
- **Double press** — launch a different app or function
- **Press and hold (5 sec)** — activates Siren (can be disabled here if not needed)

Available Quick Button assignments:
- Samsung Health (default — opens workout selection)
- Flashlight
- Stopwatch
- Water Lock
- Workout shortcut (specific exercise type)
- Any installed app

### Customizing the Home button (Press and hold)

**Settings → Buttons and gestures → Home button → Press and hold**

Options: **Bixby** (default) or **Google Gemini**. Change to Gemini if that's your preferred assistant.

### Gesture controls

**Settings → Buttons and gestures → Gestures** (on watch) or Galaxy Wearable → Watch settings → Buttons and gestures

| Gesture | Action |
|---|---|
| **Double pinch** | Answer/end calls · dismiss alarms · stop stopwatch · control media playback |
| **Wrist shake** | Dismiss incoming calls or alarms |
| **Knock (tap watch face twice)** | Launch Camera Controller app |
| **Raise to wake** | Wake display on wrist raise |

Enable/disable each gesture individually. Double Pinch is the most useful — enable it on Day 1.

---

## 3. Display & Watch Faces

### Display settings

**On watch: Settings → Display** (or Galaxy Wearable → Watch settings → Display)

| Setting | Recommendation | Notes |
|---|---|---|
| **Brightness** | Auto or level 4/5 outdoors | Adjust via slider; auto adapts to ambient light |
| **Always On Display (AOD)** | Off for daily use | Drains ~15% extra per day; enable for specific contexts (desk work, meetings) |
| **Screen timeout** | 15 seconds | Shorter = better battery |
| **Wake-up gesture** | On | Raise wrist to wake |
| **Touch sensitivity** | High | Enable if using gloves or with wet hands |
| **Font size** | Personal preference | Large recommended for workout glances |

### Watch faces

Swipe and hold on the watch face → tap the edit icon, or use Galaxy Wearable → Watch faces.

**Ultra-exclusive faces:**
- **Ultra Analog** — supports Night Mode (dims for sleep hours automatically)
- **Simple Ultra** — minimal; also supports Night Mode
- Both support the **Energy Score** complication

**Recommended complications to add:**
- Energy Score (top)
- Battery percentage (bottom or side)
- Steps (secondary)
- Heart Rate (secondary)

**Night Mode on watch faces:** Tap the watch face name → Edit → toggle Night Mode. Set a start/end time. Suppresses wrist-raise activation and dims screen during sleep hours.

---

## 4. Notifications & Sound

### Notification management

**Galaxy Wearable app → Watch settings → Notifications**

- Turn on only the apps that need your immediate attention
- Recommended: Phone calls, SMS, Messaging apps, alarm apps — **everything else off**
- Enable **Advanced notification settings** to control whether notifications show full content or just app name

**On watch:** Swipe down from watch face to see notification panel. Swipe left on a notification to dismiss; tap to expand.

**Smart Relay:** When both watch and phone are unlocked, notifications route to phone screen automatically — reduces watch buzzing while you're at your desk.

### Sound & vibration settings

**On watch: Settings → Sounds and vibration**

| Option | Notes |
|---|---|
| **Vibration intensity** | Adjust separately for calls, notifications, alerts |
| **Vibrate with sound** | Toggle — good default to keep on |
| **Volume** | Slider for call audio, media, notifications |
| **Ringtone** | Choose or set to silent |
| **System sounds** | Button presses, keyboard clicks |

**Vibration patterns:** Set custom patterns for calls vs. notifications so you can tell them apart by feel.

### Do Not Disturb

**Settings → Connections → Do Not Disturb** or swipe down for quick tile.

- Schedule DND for sleep hours
- Allow calls from starred contacts even during DND
- Automatically enabled by **Sleep Mode** (see Battery section)

---

## 5. Connectivity (LTE, Wi-Fi, Bluetooth, NFC)

### LTE

The Watch Ultra is LTE-only (no Wi-Fi-only model). Setup:

1. Ensure carrier has enabled **Samsung NumberShare** or **Digits** — the watch shares your phone's number
2. **Galaxy Wearable → Watch settings → Mobile networks → Auto LTE** — set to **Auto** so LTE only activates when phone is out of range
3. When Auto LTE is on: watch uses Bluetooth when phone is nearby (saves battery), switches to LTE automatically when you leave the phone

Without phone (LTE mode): calls, texts, streaming, and app notifications all work independently.

### Wi-Fi

**Settings → Connections → Wi-Fi** — only activates when needed (sync, app updates). No persistent drain when not in use.

### Bluetooth

Stays connected to your phone continuously when in range. Range: ~10 meters reliably. Connection is automatic after initial pairing.

### NFC & Google Wallet

**Settings → Connections → NFC** — enable if using contactless payments.

To set up Google Wallet:
1. Install Google Wallet app on watch (Play Store on watch or Galaxy Wearable)
2. Add a payment card
3. To pay: double-press Home button (or configure Quick Button) → hold watch near payment terminal

Samsung Pay also works if preferred — same NFC hardware.

### Bluetooth audio

Connect Bluetooth headphones directly to the watch when running LTE without your phone. **Settings → Connections → Bluetooth** → pair headphones → stream Spotify, podcasts, etc. directly to earbuds.

---

## 6. Health & Sensors — Complete Reference

All health data lives in **Samsung Health** on your S25 Ultra. The watch collects; the app analyzes.

### Energy Score

Daily readiness number (similar to Garmin's Body Battery). Combines sleep quality, HRV, activity, and resting HR.

- **Where:** Samsung Health home screen, or watch face complication
- **Reliable after:** 1 week of consistent wear (requires sleep tracking)
- **How to use:** Check before deciding workout intensity. Score 70+ → full effort; 40–70 → moderate; <40 → recovery

### Heart Rate Monitoring

Continuous optical HR tracking. Checks every 10 minutes at rest, continuously during workouts.

**Settings:** Samsung Health → Heart Rate card → three dots → Settings
- **High heart rate alert:** On — set threshold (e.g., 150 BPM for desk/stress context)
- **Low heart rate alert:** Optional — useful during sleep
- **Abnormal HR notification:** Alerts for irregular patterns

**Personalized HR Zones (5 zones):** Calculated automatically after 10+ continuous minutes of high-intensity outdoor effort with GPS active.
- View/adjust: Samsung Health → Exercise → any workout → three dots → Target Heart Rate Zone
- Zones 1–5: Light → Easy → Aerobic → Threshold → Maximum
- Use real-time zone indicator during workouts: swipe watch screen during activity

### Irregular Heart Rhythm (AFib) Notification

Runs passively in background. Alerts you if it detects signs of atrial fibrillation. Not a medical diagnosis — prompts you to seek professional evaluation.

**Setup:** Samsung Health Monitor app → Irregular Heart Rhythm → follow one-time setup.

### ECG

Take a single-lead ECG on demand.

1. Open **Samsung Health Monitor** app on watch
2. Tap **ECG**
3. Rest arm on flat surface, place finger on top Digital Crown/bezel
4. Hold still for 30 seconds
5. Results show in Samsung Health Monitor: Normal sinus rhythm / Atrial fibrillation / Inconclusive

Results are logged and shareable with a doctor as a PDF from the Samsung Health Monitor app on your phone.

### Blood Pressure Monitoring

**Requires calibration every 28 days with a standard arm cuff (sold separately).**

Initial calibration:
1. Take 3 arm cuff readings within 30 minutes
2. Open Samsung Health Monitor → Blood Pressure → Calibrate → enter your readings

After calibration:
- Open Samsung Health Monitor on watch → Blood Pressure → tap measure
- Rest 5 minutes before measuring
- Sit with arm at heart level
- Tracks relative changes (not absolute values without recalibration)

### Sleep Tracking & Sleep Apnea

**Sleep tracking:** Wear watch to bed with at least 50% battery. Automatically detects when you fall asleep. Tracks: stages (light/deep/REM), sleep score, disturbances, blood oxygen, and breathing rate.

**Sleep Apnea Detection:** FDA-authorized. Requires 2+ consecutive nights of wear. Detects moderate-to-severe obstructive sleep apnea.

- Enable: Samsung Health → Sleep → Sleep coaching → Sleep apnea detection → toggle on
- Results available after second consecutive night — check Samsung Health → Sleep → Sleep Apnea tab
- If flagged: consult a doctor; the app includes a report you can share

**Sleep coaching:** Samsung Health → Sleep → Sleep coaching — Galaxy AI gives weekly personalized improvement suggestions based on your patterns.

**Bedtime guidance:** Alerts you when it's time to sleep based on your set wake time and your sleep debt.

### Body Composition (BIA)

1. Place watch 2–3 cm higher than normal on your wrist
2. Press Home button and Back button simultaneously
3. Hold still ~15 seconds
4. Measures: body fat %, skeletal muscle mass, BMI, body water %

Best practices:
- Measure at same time each week (morning, before eating)
- Don't measure after exercise (sweat affects results)
- Avoid if you have a pacemaker or implanted device (BIA uses mild electrical signal)

### Stress & Breathing

**Stress monitoring:** Continuous background tracking. Swipe to Stress tile on watch for real-time index. When high stress is detected, watch vibrates and suggests a breathing exercise.

**Breathing exercise:** Available as tile or in Samsung Health. Guided 1–5 minute breathing session. Calms HRV in real time.

### Blood Oxygen (SpO2)

Measured automatically during sleep. Can also measure on demand: Samsung Health → Body Measurements → Blood Oxygen → measure now.

Normal range: 95–100%. If consistently below 94%, consult a doctor.

### Skin Temperature

Measured continuously during sleep. Shows overnight temperature variation. Used to inform Energy Score and is a component in Cycle Tracking for users who need it.

### AGEs Index & Antioxidant Index

Advanced biomarkers measured via optical sensor:
- **AGEs Index:** Advanced Glycation End-products — proxy for metabolic health risk. Lower is better. Measured via Samsung Health → Body Measurements.
- **Antioxidant Index:** Measures carotenoid levels as antioxidant proxy. Improve by eating more fruits and vegetables.

Both require a 30-second scan. Press Home + Back buttons, select the measurement type.

### Cycle Tracking

Samsung Health → Cycle tracking — uses skin temperature, HR, and HRV to predict cycle phases. Enable in app and wear watch to bed for data collection.

---

## 7. Workouts & Exercise

### Starting a workout

**On watch:** Home button → swipe to Samsung Health tile → tap Workout → select type → tap Start.

**Or:** Quick Button (if assigned to Samsung Health or a specific workout).

The watch tracks GPS, HR zone, pace/speed, elevation (via barometer), and calories automatically.

### Auto-workout detection

The watch detects 100+ workout types automatically after ~10 minutes of continuous activity. If you forget to start manually, it will prompt you to save the auto-detected session.

**Toggle:** Galaxy Wearable → Watch settings → Samsung Health → Auto workout detection → On

### Workout types (major categories)

| Category | Examples |
|---|---|
| Running | Outdoor run, indoor run, trail run |
| Cycling | Outdoor, indoor, mountain bike |
| Swimming | Pool (set lane length), open water |
| Walking | Outdoor walk, hiking, treadmill |
| Strength | Weight training (rep/set counting) |
| HIIT | Circuit training, Tabata |
| Water sports | Kayaking, surfing, rowing |
| Others | Yoga, pilates, stretching, golf, tennis |

For strength/rep-counting: the watch auto-counts reps using motion sensor. Review and correct counts after each set.

### Multisport tile (Triathlon mode)

Customize via Galaxy Wearable → Watch settings → Tiles → Multisport:
1. Select your 3 disciplines (e.g., Swim + Cycle + Run)
2. Set targets for each leg
3. Start from the Multisport tile on the watch
4. Press Quick Button to transition between legs

### Exercise Power Saving mode

Extends GPS workout tracking to up to 48 hours by reducing sensor frequency.

Enable per workout: **Samsung Health → Workout settings → (any workout) → Exercise power saving**

Tradeoffs: GPS accuracy reduced, HR measured less frequently, no Bluetooth, no LTE. Good for ultra-endurance events.

### Functional Threshold Power (FTP)

For cycling. The watch estimates your FTP from cycling workout data. Used to set power-based training zones.

**Samsung Health → Exercise → Cycling → FTP** — review after several outdoor rides.

### Running Coach

Galaxy AI-powered. Analyzes your cadence, pace, stride length, and HR over multiple runs. Gives post-run and weekly recommendations.

**Samsung Health → Running Coach** — activate and complete 3+ outdoor runs to receive first coaching session.

### Post-workout summary

After ending a workout: watch shows summary (time, distance, avg HR, calories, zone distribution). Full details in Samsung Health on phone including map, HR graph, and recovery recommendation.

---

## 8. Outdoor & Navigation Features

### Dual-Band GPS (L1 + L5)

The watch uses both L1 and L5 GPS frequency bands simultaneously (also supports BeiDou, GLONASS, Galileo). Benefits:
- ~60% more accurate than single-band GPS
- Maintains lock under heavy tree canopy and in urban canyons
- Reliable for route recording and distance measurement

GPS locks in ~10–15 seconds outdoors. For best accuracy: stand still briefly before starting a workout.

### Track Back

**When to use:** Any time you leave a known area on foot or bike.

1. Before starting: swipe to **Track Back tile** and tap Start (or it begins automatically when you start a GPS workout)
2. During activity: the tile records your GPX path and altitude continuously
3. To return: open Track Back tile → tap Navigate back → follow on-screen arrow and distance indicator
4. Voice/vibration cues alert you to direction changes

Works without phone via onboard GPS + LTE map data.

### Compass

**Tiles → Compass** — tap to open a live compass. Calibrate by moving the watch in a figure-8 pattern if it shows a calibration prompt. Also available as a complication on supported watch faces.

### Barometer & Altimeter

The barometer provides real-time altitude and atmospheric pressure. Altitude data overlaid on workout maps in Samsung Health. Useful for hike elevation tracking.

**Tiles → Barometer** — shows current atmospheric pressure trend (rising/falling). Useful for weather change prediction on multi-day trips.

### Weather

**Tiles → Weather** — shows current conditions pulled from phone/LTE. Temperature, humidity, UV index, hourly forecast.

---

## 9. Safety Features

### Emergency Siren

**Activation:** Long-press the Quick Button for 5 seconds.

The siren emits an 86-decibel tone audible up to 180 meters. Designed for emergency signaling in outdoor environments.

**To enable/disable siren assignment:** Galaxy Wearable → Watch settings → Buttons and gestures → Quick button → Press and hold → Siren toggle.

**Note:** The siren does NOT automatically call 911 — it is an audible alert only. Use Emergency SOS (below) to contact emergency services.

### Emergency SOS

**Activation:** Press Home button 5 times rapidly.

Triggers: vibration alert, countdown, then automatically calls your emergency contact and sends GPS location via SMS.

**Setup:** Samsung Health → Emergency → Emergency contacts — add at least one contact.

### Fall Detection

Detects hard falls during workouts. If triggered:
1. Watch vibrates and plays alarm
2. 60-second countdown to respond (tap "I'm OK" to cancel)
3. If no response: auto-calls emergency contact + sends GPS location

**Enable:** Galaxy Wearable → Watch settings → Advanced features → Fall detection → On (enabled by default during workouts; can also enable during daily activities)

### Water Lock

**Activation:** Swipe down quick panel → tap Water Lock icon (droplets).

Locks touchscreen to prevent accidental input during swimming. After swimming:
1. Press and hold the Home button to exit Water Lock
2. Watch vibrates to expel water from speakers

Enable before: pool swimming, ocean swimming, heavy rain, car washing.

### Water resistance limits

| Standard | Rating | What it means |
|---|---|---|
| IP68 | 1.5m for 30 min fresh water | Safe for rain, sweat, pool |
| ISO 22810 | 100m / 10 ATM | Recreational surface diving, snorkeling |
| MIL-STD-810H | Military drop/temp/humidity | Extreme environment durability |

**Not rated for:** scuba diving with tanks, high-pressure water jets (power washing), or saltwater immersion without rinsing after.

---

## 10. Battery & Power Management

### Battery life reference

| Mode | Estimated life |
|---|---|
| Normal (AOD off) | ~48 hours |
| Normal (AOD on) | ~30 hours |
| Power saving mode | Up to 7 days |
| Continuous GPS workout | ~8 hours |
| Continuous GPS (exercise power saving) | Up to 48 hours |
| LTE active, no phone nearby | ~18–20 hours |

### Charging

Magnetic wireless charger. **Not compatible** with standard Qi pads — requires the Samsung puck. Charges 0–100% in ~85 minutes.

**Wireless PowerShare:** Place watch on the back of your Galaxy S25 Ultra (enable Wireless PowerShare in phone quick settings). Emergency top-up only — slow and drains phone.

### Power Saving mode

**Settings → Battery → Power saving** (or swipe down → Power saving tile)

What it disables:
- AOD
- Wi-Fi
- Wake-up gesture
- Background app refresh

What it limits:
- CPU performance
- Screen brightness cap
- Location / GPS
- Sync frequency

Use for: end-of-day stretch when battery is <20%.

### Exercise Power Saving mode

For workouts only. See [[#7. Workouts & Exercise]] above.

### Sleep mode

**Settings → Battery → Sleep mode** — schedule for sleep hours. Disables AOD, wake gesture, raises DND, and restricts most background sensors. Preserves 8–12% overnight vs. default settings.

### Battery optimization tips

1. Turn off **AOD** — single biggest drain savings
2. **Screen timeout** → 15 seconds
3. **Auto LTE** → on (LTE off when phone is nearby)
4. Reduce **notification volume** (processing vibrations uses power)
5. Schedule **Sleep mode** for your sleep window
6. Disable unused tiles (each active tile has a background polling interval)

---

## 11. Apps, Tiles & Assistant

### Managing tiles

Tiles are the cards you swipe through from the watch face. Keep only tiles you use daily.

**Edit tiles:** Swipe to any tile → scroll to bottom → tap Edit tiles. Or: Galaxy Wearable → Watch settings → Tiles.

**Recommended tile order:**
1. Samsung Health (heart rate / energy score quick view)
2. Workout (quick start)
3. Weather
4. Notifications summary
5. Track Back (if outdoors frequently)
6. Barometer
7. Compass

Remove: anything you haven't used in a week.

### Installing apps

**On watch:** Press Home button → swipe to Play Store → search and install.

**From phone:** Galaxy Wearable → Manage apps → install from phone.

Useful apps to add:
- **Spotify** — offline playback on watch, stream via LTE without phone
- **Google Maps** — turn-by-turn navigation on wrist
- **Strava** — workout sync if you use Strava alongside Samsung Health
- **Calculator / Flashlight** — utilities

### Assistant

**Default (Bixby):** Press and hold Home button → speak command. Bixby reads notifications aloud when Bluetooth headphones are connected.

**Switch to Gemini:** Settings → Buttons and gestures → Home button → Press and hold → Google Gemini. Gemini supports natural language queries, can interact with Google apps, and gives more capable responses for general queries.

**Using assistant:** After switching to Gemini, press and hold Home button and speak. Works on watch via LTE without phone.

### Galaxy AI features on watch

| Feature | Where |
|---|---|
| Running Coach | Samsung Health → Running Coach |
| Sleep Coaching | Samsung Health → Sleep → Sleep coaching |
| Energy Score insights | Samsung Health → Energy Score → tap for AI analysis |
| Personalized HR zones | Auto-calculated during workout (see Health section) |
| Stress management | Stress tile → tap for guided session |
| Bedtime guidance | Samsung Health → Sleep → Bedtime guidance |

---

## 12. General Settings & Maintenance

### Software updates

**On watch: Settings → About watch → Software update → Download and install**

Or: Galaxy Wearable app → About watch → Software update.

Keep watch updated — health feature improvements and Galaxy AI updates roll out via OTA.

### Reset options

**Settings → General → Reset** — factory reset. Use only if troubleshooting a persistent issue. All health data synced to Samsung Health cloud is preserved. Local workout data not yet synced is lost.

### Storage & Memory

- **32 GB storage** — for apps, offline music (Spotify), and cached maps
- **2 GB RAM** — manages multitasking between apps and sensors

Check usage: **Settings → Battery and device care → Storage**

### Language & Input

**Settings → General → Language** — independent from phone language.

**Keyboard:** On watch keyboard, use swipe-to-type for faster input. Alternatively, dictate with Bixby/Gemini for longer texts.

### Accessibility

**Settings → Accessibility:**
- **High contrast** — enhances display legibility outdoors in bright light
- **Large text** — useful for workout glances while running
- **Touch sensitivity** — enable for gloves or wet-hand use
- **Interaction control** — disable specific button functions if needed

### Wearing detection

**Settings → Advanced features → Wearing detection** — when enabled, watch detects when it's been removed and automatically locks for security.

### Find My Watch

If you misplace the watch: **Galaxy Wearable app → Find My Watch** — plays an alarm on the watch remotely.

Or: **Samsung Find** app (SmartThings Find) — shows last known GPS location.

---

## 13. Vault Integration

### What the watch feeds into your vault

The watch does not connect directly to Obsidian. Data flows: **Watch → Samsung Health → you → daily note frontmatter**.

| Daily note field | Samsung Health source | Where to find it |
|---|---|---|
| `steps:` | Activity card | Samsung Health home → Activity |
| `resting_hr:` | Heart Rate graph | Samsung Health → Heart Rate → morning reading |
| `sleep_hours:` | Sleep card | Samsung Health → Sleep → today's summary |
| `energy_score:` | Energy Score | Samsung Health home → Energy Score card |
| `weight:` | Body Composition | Samsung Health → Body Composition (if logging) |

### End-of-day logging routine

1. Open **Samsung Health** on S25 Ultra — check all cards
2. Open **today's daily note** in Obsidian (`Ctrl+D`)
3. Fill vitals in frontmatter: `steps:`, `resting_hr:`, `sleep_hours:`, `energy_score:`
4. Note any significant health events in reflection section (high stress alert, fall detection, unusual HR)

**Tip:** Prop your phone next to your computer and use split screen — Samsung Health on the left, Obsidian on the right — for end-of-day entry.

### Weekly health review note

When writing your weekly review, pull from Samsung Health's weekly summaries:
- Samsung Health → Activity → Weekly view (steps/active minutes trend)
- Samsung Health → Sleep → Weekly view (average sleep score, pattern)
- Samsung Health → Heart Rate → Weekly resting HR trend

Note patterns and anomalies in the weekly review **Habits & Vitals** section. Compare Energy Score trends with quest progress and workload.

### Useful habits to track from watch data

Add these as checkboxes to your daily note template if you want habit accountability:
- `- [ ] Wore watch to bed (sleep tracking)`
- `- [ ] Hit step goal (10,000+)`
- `- [ ] Logged vitals in Obsidian`

---

## Quick Reference Card

| Task | How |
|---|---|
| Start workout | Quick Button (if set) or Home → Samsung Health → Workout |
| Check energy score | Watch face complication or Samsung Health app |
| Activate siren | Long-press Quick Button 5 seconds |
| Emergency SOS | Press Home button 5 times |
| Water Lock | Swipe down → Water Lock tile |
| Track Back | Track Back tile → Start before leaving |
| ECG | Samsung Health Monitor app → ECG |
| Blood pressure | Samsung Health Monitor app → Blood Pressure |
| Body composition | Home + Back buttons simultaneously |
| Google Pay | Double-press Home → hold near terminal |
| Find watch | Galaxy Wearable app → Find My Watch |
| Factory reset | Settings → General → Reset |

---

*See also:* [[_docs/Device Workflows — Complete Guide|Device Workflows]] · [[_docs/Multi-Device Setup Sync and Mobile|Multi-Device Setup]] · [[_reference/Personal|Personal Reference]]
