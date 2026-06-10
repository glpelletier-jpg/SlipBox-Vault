---
title: Instrumentation — Syllabus
date: 2026-06-08
type: course-syllabus
course: Instrumentation
total_weeks: 16
tags: [course, courses, syllabus, ia-ot, instrumentation, cap]
---

# Instrumentation — Syllabus

> **Pace:** 30 min/day, 3 days/week · **Total effort:** ~45 hours · **Target:** Argenta-Water commissioning confidence + CAP measurement domain readiness

---

## Module 1 — 4–20 mA Signal Standard (Weeks 1–2 · 6 hrs)

*The foundation of analog instrumentation — live zero, loop power, wiring, and fault detection.*

### Topics
- **1A** — 2-wire vs. 4-wire transmitter wiring
- **1B** — Loop power: 24VDC, current source, load resistance
- **1C** — Live zero: 4 mA = 0% span; 0 mA = wire break
- **1D** — NAMUR NE 43 fault signal levels
- **1E** — Signal scaling: raw counts to engineering units

### Key things to know
- Live zero = 4 mA, not 0 mA; allows wire-break detection
- NAMUR NE 43: <3.6 mA = underrange/broken wire; >21 mA = overrange/fault
- 2-wire: loop-powered; 4-wire: externally powered; check transmitter spec

### Vault connections
- [[06-Zettelkasten/Permanent/PN — 4–20 mA loops provide live-zero detection|PN — 4–20 mA]]

---

## Module 2 — HART Protocol (Weeks 3–5 · 8 hrs)

*Digital communication superimposed on the 4–20 mA loop — diagnostics, configuration, and multivariable access.*

### Topics
- **2A** — HART FSK: 1200 Hz = logic 1 (mark), 2200 Hz = logic 0 (space)
- **2B** — HART commands: universal, common practice, device-specific
- **2C** — Multivariable access: PV, SV, TV, QV
- **2D** — HART infrastructure: field communicator, HART modem, multiplexer, host
- **2E** — Pepperl+Fuchs HART isolators and infrastructure

### Key things to know
- HART operates at 1200 baud — does not interrupt 4–20 mA output
- Point-to-point (FSK on 4–20 mA loop) vs. multidrop (all 4 mA, HART only)
- Field communicator (Emerson 475 or FC100) works on any HART device regardless of brand

### Vault connections
- [[06-Zettelkasten/Permanent/PN — HART superimposes 1200/2200 Hz FSK digital signal on the 4–20 mA loop without disrupting analog output|PN — HART]]
- [[06-Zettelkasten/Permanent/PN — Pepperl+Fuchs isolators galvanically decouple field devices from control system to prevent ground loops|PN — P+F isolators]]

---

## Module 3 — IO-Link (Weeks 6–7 · 6 hrs)

*Point-to-point digital I/O protocol — parameterization, diagnostics, and smart sensor integration.*

### Topics
- **3A** — IO-Link vs. 4–20 mA and discrete wiring
- **3B** — IO-Link master, device, and port types (A, B, C)
- **3C** — Process data, service data, events
- **3D** — IODD files and device parameterization
- **3E** — P+F IO-Link masters in OT architecture

### Vault connections
- [[06-Zettelkasten/Permanent/PN — IO-Link is a point-to-point digital protocol replacing discrete and analog signals with parameterizable smart I/O|PN — IO-Link]]

---

## Module 4 — Flow Measurement (Weeks 8–10 · 8 hrs)

*Endress+Hauser flow technologies — Coriolis, magnetic, vortex, differential pressure.*

### Topics
- **4A** — DP flow: orifice plate, venturi, ISO 5167 — ΔP = k × Q²
- **4B** — Magnetic flowmeter: conductive fluids, grounding, lining selection
- **4C** — Coriolis: mass flow, density, Promass series — field of view for Argenta-Water
- **4D** — Vortex: steam and gas, Prowirl series
- **4E** — E+H Heartbeat Technology: continuous verification without process interruption

### Vault connections
- [[06-Zettelkasten/Permanent/PN — Endress+Hauser Heartbeat Technology provides continuous self-monitoring and on-demand verification without process interruption|PN — Heartbeat Technology]]

---

## Module 5 — Level, Pressure, Temperature (Weeks 11–13 · 8 hrs)

*The three most common process variables — E+H device families and selection criteria.*

### Topics
- **5A** — Level: guided wave radar (Levelflex), free-space radar (Micropilot), ultrasonic
- **5B** — Pressure: gauge vs. absolute vs. differential; Cerabar series
- **5C** — Temperature: thermocouple vs. RTD, transmitter vs. direct wiring, head-mount vs. DIN rail
- **5D** — Process connections, materials selection, wetted parts for water/chemical service

---

## Module 6 — Safety and Optical Sensors (Weeks 14–15 · 5 hrs)

*SICK safety light curtains, laser scanners, and photoelectric sensors.*

### Topics
- **6A** — Safety light curtain types: finger, hand, body detection; resolution and MPSD
- **6B** — Minimum safety distance calculation (ISO 13855)
- **6C** — Proof test requirements for SICK safety devices
- **6D** — Standard photoelectric: diffuse, retro-reflective, through-beam

### Vault connections
- [[06-Zettelkasten/Permanent/PN — SICK safety light curtains require annual proof testing and defined minimum object detection size per ISO 13855|PN — SICK light curtains]]

---

## Module 7 — SIL-Rated Instruments (Week 16 · 4 hrs)

*SIL certification, proof test documentation, and what IEC 61511 Clause 11.9 requires.*

### Topics
- **7A** — IEC 61508 SIL certification: what it means and what it does not mean
- **7B** — Clause 11.9 prior-use justification for non-certified devices
- **7C** — Proof test procedures for SIL-rated transmitters
- **7D** — Applying to CCPC-1250 SIS instrument list

### Vault connections
- [[06-Zettelkasten/Permanent/PN — SIL-rated transmitters require documented proof-test procedures to maintain PFDavg over the safety lifecycle|PN — SIL transmitters]]

---

**Links:** [[05-Resources/Courses/Instrumentation/Instrumentation — Overview|Overview]] · [[05-Resources/Courses/Instrumentation/Instrumentation — Resources|Resources]] · [[05-Resources/Courses/Instrumentation/Instrumentation — Progress|Progress Tracker]] · [[05-Resources/Courses/Course Study Workflow|Study Workflow]]
