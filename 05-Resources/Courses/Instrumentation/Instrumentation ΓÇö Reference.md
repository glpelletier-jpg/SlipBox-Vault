---
title: Instrumentation — Reference
date: 2026-06-08
type: course-reference
course: Instrumentation
tags: [course, courses, reference, ia-ot, instrumentation, cap]
---

# Instrumentation — Reference

---

## 4–20 mA signal levels

| Signal | Value | Meaning |
|---|---|---|
| Underrange fault | < 3.6 mA | NAMUR NE 43 — broken wire or transmitter fault |
| Live zero | 4.0 mA | 0% of span |
| Midscale | 12.0 mA | 50% of span |
| Full scale | 20.0 mA | 100% of span |
| Overrange fault | > 21.0 mA | NAMUR NE 43 — overrange or transmitter fault |
| Wire break (live zero) | 0 mA | Detected because 4 mA ≠ 0 mA |

---

## Signal scaling formula

```
EU = EU_min + ((mA - 4) / 16) × (EU_max - EU_min)

Example: 12 mA → 0–100 psi range
  EU = 0 + ((12 - 4) / 16) × 100 = 50 psi
```

---

## NAMUR NE 107 device status symbols

| Symbol | Meaning | Action |
|---|---|---|
| ✗ Failure | Device cannot measure | Replace / repair immediately |
| ! Check Function | Output may be wrong | Investigate — may be process condition |
| △ Out of Specification | Operating outside rated conditions | Review process / device selection |
| 🔧 Maintenance Required | Degradation detected | Schedule maintenance |

---

## HART protocol facts

| Item | Value |
|---|---|
| Modulation | FSK — 1200 Hz (mark), 2200 Hz (space) |
| Baud rate | 1200 baud |
| Loop current effect | None (zero average current shift) |
| Minimum loop resistance | 230 Ω (for HART communication) |
| Point-to-point address | 0 |
| Multidrop addresses | 1–15 (all at 4 mA fixed) |

---

## E+H flow technology selector

| Technology | Best for | Not for |
|---|---|---|
| Magnetic (Promag) | Conductive liquids, water, slurries | Gas, hydrocarbons, DI water |
| Coriolis (Promass) | Mass flow, density, any fluid | Very large pipes (>8"), high-vibration |
| Vortex (Prowirl) | Steam, gas, clean liquids | Viscous fluids, low velocity |
| DP (Deltapilot) | Any fluid, simple installation | High-accuracy custody transfer |

---

## SICK safety light curtain — minimum distance

```
ISO 13855 formula:
  S = K × T + C

  S = minimum safety distance (mm)
  K = hand/body approach speed (mm/s) — typically 1600 mm/s (hand), 1000 mm/s (body)
  T = total stopping time of machine (s)
  C = intrusion distance (mm) — based on MPSD (minimum object sensitivity distance)
```

---

## Commonly confused pairs

| Concept A | Concept B | Key difference |
|---|---|---|
| 2-wire transmitter | 4-wire transmitter | 2-wire = loop powered; 4-wire = separate power supply |
| HART point-to-point | HART multidrop | P-to-P uses 4–20 mA + HART; multidrop all at 4 mA, HART only |
| NAMUR NE 43 | NAMUR NE 107 | NE 43 = signal levels for faults; NE 107 = device status symbols |
| Thermocouple | RTD | TC = wider range, less accurate; RTD = narrow range, high accuracy |
| IO-Link | HART | IO-Link replaces discrete/analog wiring; HART rides on 4–20 mA |

---

## Last-minute review checklist

- [ ] 4–20 mA NAMUR NE 43 fault thresholds recalled
- [ ] Signal scaling formula applied correctly for a sample value
- [ ] HART FSK frequencies and minimum loop resistance recalled
- [ ] E+H Heartbeat Technology purpose explained in one sentence
- [ ] NAMUR NE 107 four status symbols named and described
- [ ] SICK safety distance formula stated and variables defined
- [ ] SIL-rated instrument proof test requirement explained

---

**Links:** [[05-Resources/Courses/Instrumentation/Instrumentation — Overview|Overview]] · [[05-Resources/Courses/Instrumentation/Instrumentation — Syllabus|Syllabus]] · [[05-Resources/Courses/Instrumentation/Instrumentation — Progress|Progress Tracker]]
