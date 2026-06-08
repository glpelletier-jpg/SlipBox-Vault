---
title: HAM Radio General License — Reference
date: 2026-06-06
type: course-reference
course: HAM-Radio
tags: [course, courses, reference, HAM-radio]
---

# HAM Radio General License — Reference

> Compact reference card for active recall. Use between sessions and the night before the exam. Add to it as you study each week.

---

## Key formulas

| Formula | What it calculates | Notes |
|---|---|---|
| `468 / f(MHz)` | Half-wave dipole length in feet | f = frequency in MHz |
| `234 / f(MHz)` | Quarter-wave vertical length in feet | |
| `f = 1 / (2π√LC)` | Resonant frequency | L = henries, C = farads |
| `Z = √(R² + X²)` | Impedance magnitude | R = resistance, X = reactance |
| `P = I² × R` | Power from current and resistance | |
| `P = V² / R` | Power from voltage and resistance | |
| `dB = 10 × log(P₂/P₁)` | Power ratio in decibels | |
| `dB = 20 × log(V₂/V₁)` | Voltage ratio in decibels | |

---

## Key values to memorise

| Item | Value | Context |
|---|---|---|
| Exam pass score | 26/35 (74%) | 35 questions, need 26 correct |
| General HF power limit | 1500W PEP | Most HF bands |
| 60-meter power limit | 200W ERP | Special 5-channel arrangement |
| Station ID interval | Every 10 min + end of QSO | Phone and digital |
| Half-wave dipole at 14 MHz | ~33 feet | 468 / 14 = 33.4 ft |
| +3 dB | Doubles power | Key dB rule |
| +10 dB | 10× power | Key dB rule |
| −3 dB | Halves power | |
| SWR danger zone | > 3:1 | May damage transmitter |

---

## G1 — Commission's Rules

**Core concept:** FCC rules govern frequency privileges, power limits, and station operation.

**Must-know facts:**
- General class gets full HF privileges except some Technician-only segments
- 60-meter band (5 MHz): 5 specific channels, USB only, 200W ERP max
- Station ID: every 10 minutes and at end of transmission; in English
- Power limit: 1500W PEP on most HF; 200W on 60m
- Volunteer Examiner (VE) must hold General or higher to administer General exam

**Common exam traps:**
- Power limits are PEP (Peak Envelope Power), not average power
- 60-meter rules differ from all other HF bands — memorise separately

---

## G2 — Operating Procedures

**Core concept:** How to operate on HF — phone, CW, digital, DX, emergency.

**Must-know facts:**
- USB above 10 MHz (20m, 17m, 15m, 12m, 10m); LSB below 10 MHz (40m, 80m, 160m)
- CW prosigns: AR = end of message · SK = end of contact · BT = paragraph break · KN = specific station only
- Q-signals: QRM = interference · QRN = static · QSB = fading · QRP = reduce power · QRZ = who is calling? · QSL = confirm · QSY = change frequency · QTH = location
- FT8: 15-second TX cycles · 50Hz bandwidth · weak-signal digital mode
- Calling frequency is not a working frequency — move off after contact is established

**Common exam traps:**
- 10 MHz (30m) uses USB even though it's below 10.1 MHz — exception to the rule
- Q-signals can be used on phone, not just CW

---

## G3 — Radio Wave Propagation

**Core concept:** How the ionosphere bends radio waves back to Earth — and when it doesn't.

**Must-know facts:**
- **D layer**: lowest, absorbs HF during day, disappears at night → why 40m/80m open up at night
- **E layer**: sporadic-E (Es) → sudden short-range HF openings, unpredictable
- **F1/F2 layers**: highest, most important for long-distance HF, strongest in daylight
- Higher sunspot numbers → better high-band propagation (10m, 15m, 17m)
- MUF (Maximum Usable Frequency): highest frequency that reflects off ionosphere for a given path
- Skip zone: region where ground wave is too weak and sky wave overshoots

**Common exam traps:**
- F2 provides the longest paths — NOT F1
- Solar flux index (SFI) > 150 generally means good HF conditions

---

## G4 — Amateur Radio Practices

**Core concept:** Station operation, test equipment, interference suppression.

**Must-know facts:**
- ALC (Automatic Level Control): prevents overdriving power amplifier → keep ALC meter in proper range
- Dummy load: use when testing transmitter off-air — dissipates RF as heat, no radiation
- SWR meter: measures impedance mismatch; 1:1 = perfect; > 3:1 = potential transmitter damage
- Noise blanker: reduces pulse noise (ignition, power line)
- RF gain: adjusts receiver sensitivity — reduce in strong-signal environments

---

## G5 — Electrical Principles

**Core concept:** Ohm's Law, impedance, resonance, decibels, power calculations.

**Must-know facts:**
- V = IR · P = IV · P = I²R · P = V²/R
- Reactance (XL = 2πfL, XC = 1/(2πfC)): inductive reactance increases with frequency, capacitive decreases
- At resonance: XL = XC → impedance is purely resistive (minimum or maximum depending on circuit type)
- PEP (Peak Envelope Power): what matters for SSB transmitters
- RMS voltage = peak voltage × 0.707

**⚡ Cross-reference:** Overlaps with [[07-Work-Knowledge/Automation/Basic Direct Current (DC) Theory - Overview|DC Theory]] and CAP exam Domain 1/3.

---

## G6 — Circuit Components

**Core concept:** Passive and active components and what they do.

**Must-know facts:**
- Zener diode: voltage regulation in reverse breakdown
- MOSFET: voltage-controlled, very high input impedance
- BJT (bipolar): current-controlled
- Op-amp: very high gain, differential input — used in audio and signal processing
- Quartz crystal: very stable frequency reference (used in VFOs and filters)

---

## G7 — Practical Circuits

**Core concept:** How circuits work together — power supplies, amplifiers, receivers.

**Must-know facts:**
- Class A: most linear, least efficient (~25–30%) — for SSB linear amplification
- Class B: ~50–60% efficient, push-pull
- Class C: most efficient (~70–80%), most distortion — for FM and CW only (not SSB)
- Class D: switching, very efficient — used in modern audio and some RF
- Superheterodyne receiver: mixes incoming signal with local oscillator → produces fixed IF for filtering
- AGC (Automatic Gain Control): keeps audio output level consistent despite varying signal strength

---

## G8 — Signals & Emissions

**Core concept:** How signals are modulated and what determines bandwidth.

**Must-know facts:**
- SSB bandwidth: ~2.7 kHz · AM: ~6 kHz · FM (narrow): ~16 kHz
- Intermodulation distortion (IMD): unwanted frequencies created when two or more signals mix in a non-linear stage
- APRS: Automatic Position Reporting System — GPS + packet radio, uses 144.390 MHz in North America
- PSK31: narrow digital mode (~31 Hz bandwidth) for keyboard-to-keyboard QSOs
- FT8: 50 Hz bandwidth, 15-second cycles — extremely weak-signal capability

---

## G9 — Antennas & Feed Lines

**Core concept:** Antenna physics, feed lines, SWR, matching.

**Must-know facts:**
- Half-wave dipole: 468/f(MHz) feet total (each leg = 234/f)
- Quarter-wave vertical: 234/f(MHz) feet; needs radials
- Yagi: driven element + director(s) + reflector → forward gain; more elements = more gain + narrower beam
- Coax characteristic impedance: 50Ω (most ham coax) or 75Ω (TV/cable)
- Velocity factor: slows wave in coax vs. free space (typically 0.66–0.80)
- NVIS (Near Vertical Incidence Skywave): nearly vertical radiation → regional HF comm 0–300 miles; uses 2–10 MHz

**Common exam traps:**
- Antenna gain is measured vs. a reference (dBi = vs. isotropic; dBd = vs. dipole; 0 dBd = 2.15 dBi)

---

## G0 — Electrical & RF Safety

**Core concept:** RF exposure limits, station safety, grounding.

**Must-know facts:**
- MPE (Maximum Permissible Exposure): FCC limits based on frequency and power level
- Controlled environment (operator and informed bystanders): higher MPE limits
- Uncontrolled environment (general public): lower MPE limits — must be evaluated
- Duty cycle reduces average power exposure — affects MPE evaluation
- Always fuse at the power source, rated for the wire not the load
- Tower climbing: use safety harness, never climb alone, inspect equipment before climbing

---

## Commonly confused pairs

| Concept A | Concept B | Key difference |
|---|---|---|
| Class A amplifier | Class C amplifier | A = linear (SSB), C = efficient but non-linear (FM/CW only) |
| MUF | LUF | MUF = highest freq that reflects; LUF = lowest usable freq |
| Controlled environment | Uncontrolled | You (controlled) vs. general public (uncontrolled) RF exposure |
| PEP | Average power | PEP = peak of SSB envelope; average = what the meter shows sustained |
| dBi | dBd | dBi = vs. isotropic; dBd = vs. dipole; 0 dBd = 2.15 dBi |
| SWR 1:1 | SWR 3:1 | Perfect match vs. significant mismatch (3:1 = transmitter risk) |
| USB | LSB | USB above 10 MHz; LSB below 10 MHz (with exceptions) |

---

## Mnemonics and memory aids

| What to remember | Memory aid |
|---|---|
| USB/LSB convention | **U**p **H**igh — USB for high frequencies (≥10 MHz) |
| dB rules | +3dB = **double**, +10dB = **10×** |
| Dipole formula | **468** feet at **1 MHz** (scale from there) |
| D layer disappears at night | **D**aylight **D**layer — gone at night → low bands open up |
| Class C only for non-SSB | **C**lass **C** = **C**onstant carrier modes (FM, CW) only |
| Prosign SK | **SK** = **S**top **K**ommunicating (end of contact) |

---

## Last-minute review checklist

*Run through this the evening before the exam.*

- [ ] All formulas recalled without looking (dipole, impedance, resonance, dB, power) 🆔 OukAwJ
- [ ] All key values recalled (pass score, power limits, ID interval) 🆔 y8TEQo
- [ ] USB/LSB convention solid — can state the exception 🆔 qC6crw
- [ ] Can name all ionospheric layers and their behaviour 🆔 6DeqH0
- [ ] dB rules: +3, +10, −3, −10 all solid 🆔 cYNId2
- [ ] Amplifier classes A/B/C/D — can state efficiency and use for each 🆔 3vFogM
- [ ] Scored 30+/35 on a fresh practice exam this week 🆔 mwk7de
- [ ] Exam location and time confirmed 🆔 AlxmSy

---

**Links:** [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Overview|Overview]] | [[05-Resources/Courses/HAM-Radio/General License Syllabus|Syllabus]] | [[05-Resources/Courses/HAM-Radio/HAM Radio General License — Progress|Progress Tracker]] | [[05-Resources/Courses/HAM-Radio/General License Study Resources|Study Resources]]
