---
title: PLC Architecture — Syllabus
date: 2026-06-08
type: course-syllabus
course: PLC-Architecture
total_weeks: 20
tags: [course, courses, syllabus, ia-ot, plc, cap]
---

# PLC Architecture — Syllabus

> **Pace:** 30 min/day, 4 days/week · **Total effort:** ~60 hours · **Target:** CAP exam-ready on Design domain by Q2 2027

---

## Before you start

- [ ] Complete the quick-start checklist in the [[05-Resources/Courses/PLC Architecture/PLC Architecture — Overview|Course Overview]]
- [ ] Set your study block in Morgen Calendar: _______________
- [ ] Open a Fleeting note with `Automation-Fleeting-Template` for each study session

---

## Milestone checklist

- [ ] Module 2 — First IEC 61131-3 practice problem completed in ST
- [ ] Module 3 — Built working AOI in Studio 5000 from scratch
- [ ] Module 4 — Navigated TIA Portal OB/FB/FC hierarchy without reference
- [ ] Midpoint (Week 10) — All modules 1–4 reviewed; created 10+ Permanent notes
- [ ] Module 8 — Successful implicit EtherNet/IP messaging between two controllers (sim)
- [ ] Week 18 — CAP practice domain quiz scoring >75% on Design questions
- [ ] Week 20 — Ready to schedule CAP exam

---

## Module 1 — PLC Scan Cycle and Execution Model

**CAP domain:** Design · **Est. hours:** 6 · **Weeks:** 1–2

*Understand how a PLC actually executes — the deterministic scan loop, task types, and how timing affects output response. This is the mental model everything else builds on.*

### Topics
- **1A** — Input scan, program execution, output scan, housekeeping phases
- **1B** — Continuous, periodic, and event-driven tasks in ControlLogix
- **1C** — Scan time, watchdog timers, and worst-case response time calculation
- **1D** — How task overlap and overruns are handled

### Daily plan

| Day | Task |
|---|---|
| Mon | Read: Rockwell Logix Designer User Manual — Task Configuration chapter |
| Tue | Create [[06-Zettelkasten/Fleeting/|Fleeting note]] on scan cycle observations; sketch the loop |
| Wed | Promote to [[06-Zettelkasten/Permanent/PN — PLC scan cycle determines worst-case response time for safety-critical outputs|Permanent note]] |
| Fri | Practice: Set up periodic vs. continuous tasks in Studio 5000 emulator; log session |

### Key things to know
- Scan time = input scan + program execution + output scan + overhead
- Event tasks interrupt continuous tasks — response time is deterministic
- Watchdog triggers a major fault if scan time exceeds configured limit

### Vault connections
- [[06-Zettelkasten/MOC/MOC — PLC Architecture]]
- [[_reference/Work/Key Systems]]

---

## Module 2 — IEC 61131-3 Languages

**CAP domain:** Design · **Est. hours:** 10 · **Weeks:** 3–5

*The five standard languages and when to use each. Ladder Diagram for discrete logic, Function Block for process control, Structured Text for math and strings, Sequential Function Chart for batch/state machines.*

### Topics
- **2A** — Ladder Diagram (LD): contacts, coils, function blocks
- **2B** — Function Block Diagram (FBD): signal flow, PID, analog conditioning
- **2C** — Structured Text (ST): syntax, data types, loops, conditionals
- **2D** — Sequential Function Chart (SFC): steps, transitions, actions
- **2E** — Instruction List (IL): legacy; recognize, don't write

### Daily plan

| Day | Task |
|---|---|
| Mon | Read IEC 61131-3 language chapter for that week's language |
| Tue | Write a small program in that language in Studio 5000 or TIA Portal |
| Wed | Fleeting note → what surprised you or tripped you up |
| Fri | Practice quiz + log session in Progress Tracker |

### Key things to know
- LD and FBD are graphical; ST and IL are textual; SFC is flow-based
- Studio 5000 supports LD, FBD, ST, SFC natively
- TIA Portal adds SCL (Structured Control Language) ≈ ST

### Vault connections
- [[06-Zettelkasten/Permanent/PN — IEC 61131-3 defines five standard languages — LD, FBD, ST, IL, SFC — for portability across vendors|PN — IEC 61131-3]]

---

## Module 3 — Rockwell Studio 5000 Deep Dive

**CAP domain:** Design · **Est. hours:** 12 · **Weeks:** 6–9

*Tag-based architecture, UDTs, AOIs, produced/consumed tags, and the ControlLogix hardware ecosystem.*

### Topics
- **3A** — Controller tags vs. program tags; base, alias, and produced/consumed types
- **3B** — User-Defined Types (UDTs): design, nesting, reuse
- **3C** — Add-On Instructions (AOIs): structure, local tags, parameters, documentation
- **3D** — Produced and consumed tags: peer-to-peer data over EtherNet/IP
- **3E** — ControlLogix chassis, backplane, and I/O tree organization
- **3F** — Phase and equipment faceplates (ISA-88 integration)

### Key things to know
- Tag-based addressing removes slot dependency — move I/O without rewriting logic
- AOI encapsulation: all logic inside; only public params visible to caller
- Produced tag = publisher; consumed tag = subscriber (no MSG instruction needed)

### Vault connections
- [[06-Zettelkasten/Permanent/PN — Allen-Bradley Studio 5000 AOIs encapsulate reusable logic with local tags and parameters|PN — AOIs]]
- [[06-Zettelkasten/Permanent/PN — Produced-consumed tags in Logix enable peer-to-peer data sharing over EtherNet/IP without explicit messaging|PN — Produced-consumed tags]]

---

## Module 4 — Siemens TIA Portal Deep Dive

**CAP domain:** Design · **Est. hours:** 10 · **Weeks:** 10–13

*TIA Portal program organization objects (OBs, FBs, FCs, DBs), S7-1500 hardware, and Safety PLC concepts.*

### Topics
- **4A** — Organization Blocks (OBs): OB1 (main), OB35 (cyclic interrupt), startup OBs
- **4B** — Function Blocks (FBs) with instance Data Blocks (DBs)
- **4C** — Functions (FCs): stateless, no instance DB
- **4D** — Global vs. instance Data Blocks
- **4E** — Hardware config: S7-1500, ET200 distributed I/O, PROFINET topology
- **4F** — Fail-safe (F) CPUs and safety program structure

### Key things to know
- FB retains state via its instance DB; FC does not retain state
- OB priority: higher OB number = higher priority in most cases
- TIA Portal PROFINET = cycle-time deterministic; compare to EtherNet/IP CIP

### Vault connections
- [[06-Zettelkasten/Permanent/PN — Siemens TIA Portal uses OB-FB-FC hierarchy for modular program organization|PN — TIA Portal hierarchy]]
- [[06-Zettelkasten/MOC/MOC — OT Networking]]

---

## Module 5 — I/O Modules

**CAP domain:** Design · **Est. hours:** 8 · **Weeks:** 14–15

*Digital, analog, and specialty I/O — signal types, wiring, scaling, and filtering.*

### Topics
- **5A** — Digital I/O: sourcing vs. sinking, 24VDC, 120VAC, relay output types
- **5B** — Analog I/O: 4–20 mA, 0–10V, ±10V, thermocouple, RTD
- **5C** — HART-enabled analog cards: reading device variables in the controller
- **5D** — High-speed counter and encoder modules
- **5E** — Scaling: raw counts to engineering units in ladder and ST

### Key things to know
- 4–20 mA live-zero: 0 mA = wire break, not zero process value
- NAMUR NE 43: <3.6 mA = underrange fault; >21 mA = overrange fault
- RTD vs. thermocouple: RTD more accurate/stable; TC wider temperature range

### Vault connections
- [[06-Zettelkasten/MOC/MOC — Instrumentation]]
- [[06-Zettelkasten/Permanent/PN — 4–20 mA loops provide live-zero detection|PN — 4-20mA live-zero]]

---

## Module 6 — Motion and Drives Integration

**CAP domain:** Design · **Est. hours:** 8 · **Weeks:** 16–17

*PowerFlex VFD configuration, Logix motion instructions, and IGBT diagnostics — ties directly to Argenta field experience.*

### Topics
- **6A** — VFD fundamentals: V/Hz, flux vector, servo modes
- **6B** — PowerFlex configuration: parameter groups, speed references, fault codes
- **6C** — Logix motion instructions: MASD, MASR, MAS, MAM
- **6D** — CIP Motion over EtherNet/IP: drive profile, cyclic data exchange
- **6E** — IGBT fault diagnostics and thermal derating

### Key things to know
- IGBT faults: overcurrent, overtemperature, undervoltage — check DC bus before replacing
- CIP Motion requires dedicated high-priority motion task in Logix
- Parameter 3 (Output Freq) and Parameter 6 (Output Current) are your first diagnostics

---

## Module 7 — Diagnostics and Fault Handling

**CAP domain:** Maintenance · **Est. hours:** 8 · **Weeks:** 18

*Controller fault logs, major vs. minor faults, I/O diagnostics, and structured troubleshooting.*

### Topics
- **7A** — Major vs. minor faults in Logix: fault type, code, address decode
- **7B** — Fault routines: program fault routine, controller fault routine
- **7C** — I/O connection loss handling: use last state, default output, hold last state
- **7D** — Structured troubleshooting: divide and conquer, signal tracing, force discipline

### Vault connections
- [[_reference/Work/Field Notes]]
- [[_templates/Troubleshooting Log Template]]

---

## Module 8 — Controller Communications

**CAP domain:** Design · **Est. hours:** 8 · **Weeks:** 19–20

*EtherNet/IP MSG instructions, produced/consumed tags, and integration with AVEVA historian.*

### Topics
- **8A** — CIP explicit messaging: MSG instruction, connected vs. unconnected
- **8B** — Produced/consumed tags vs. MSG: when to use each
- **8C** — ControlLogix to Siemens S7 via OPC UA
- **8D** — AVEVA System Platform / InTouch: tag import, I/O server architecture

---

## Key cross-topic connections

| Concept | Appears in | Related vault note |
|---|---|---|
| EtherNet/IP CIP | Modules 3, 8 | [[06-Zettelkasten/MOC/MOC — OT Networking]] |
| 4–20 mA / HART | Modules 5, 6 | [[06-Zettelkasten/MOC/MOC — Instrumentation]] |
| SIS PLC wiring | Modules 5, 7 | [[06-Zettelkasten/MOC/MOC — Process Safety (IEC 61511)]] |

---

**Links:** [[05-Resources/Courses/PLC Architecture/PLC Architecture — Overview|Overview]] · [[05-Resources/Courses/PLC Architecture/PLC Architecture — Resources|Resources]] · [[05-Resources/Courses/PLC Architecture/PLC Architecture — Progress|Progress Tracker]] · [[05-Resources/Courses/Course Study Workflow|Study Workflow]]
