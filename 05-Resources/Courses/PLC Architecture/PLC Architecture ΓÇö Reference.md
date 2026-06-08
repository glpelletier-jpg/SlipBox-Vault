---
title: PLC Architecture — Reference
date: 2026-06-08
type: course-reference
course: PLC-Architecture
tags: [course, courses, reference, ia-ot, plc, cap]
---

# PLC Architecture — Reference

> Compact reference card — key facts, scan cycle, tag types, IEC 61131-3 language cheat sheet, and common exam traps. Add to it as you study each module.

---

## Scan cycle formula

```
Scan time = Input scan + Program execution + Output scan + Housekeeping
Worst-case response = Scan time × 2 (input just missed + output just sent)
```

---

## IEC 61131-3 language comparison

| Language | Type | Best for | State? |
|---|---|---|---|
| Ladder Diagram (LD) | Graphical | Discrete logic, relay replacement | No |
| Function Block Diagram (FBD) | Graphical | Analog loops, PID, signal flow | Yes (FB) |
| Structured Text (ST) | Textual | Math, strings, complex logic | Optional |
| Sequential Function Chart (SFC) | Flow | Batch sequences, state machines | Yes |
| Instruction List (IL) | Textual | Legacy only — recognize, don't write | No |

---

## Studio 5000 tag types

| Tag type | Description | Use when |
|---|---|---|
| Base | Standard controller or program tag | Default — most tags |
| Alias | Points to another tag or I/O point | Mapping I/O to named tags |
| Produced | Broadcasts data to consuming controllers | Peer-to-peer data sharing |
| Consumed | Receives data from a producing controller | Peer-to-peer data sharing |

---

## TIA Portal object hierarchy

```
OB (Organization Block) — triggered by OS (cyclic, interrupt, startup)
  └── FB (Function Block) — has instance DB, retains state
  └── FC (Function) — stateless, no instance DB
        └── DB (Data Block) — global or instance data storage
```

---

## Key values to memorise

| Item | Value | Context |
|---|---|---|
| 4–20 mA live zero | 0 mA = wire break | Not zero process value |
| NAMUR NE 43 underrange | < 3.6 mA | Fault state |
| NAMUR NE 43 overrange | > 21 mA | Fault state |
| Typical PLC scan time | 10–50 ms | Varies by program size |
| CAP exam questions | 200 questions | ~3.5 hours |
| CAP pass threshold | ~70% | ISA benchmark |
| ControlLogix max tasks | 32 | (periodic + event + continuous) |

---

## Module 1 — Scan Cycle

**Core concept:** The PLC executes a deterministic scan loop: Input → Program → Output → Housekeeping. All timing guarantees derive from this loop.

**Must-know facts:**
- Periodic tasks fire on a timer regardless of continuous task state
- Event tasks interrupt on a trigger (consumed tag, motion event, axis event)
- Watchdog fault = scan time exceeded configured limit → major fault

**Common exam traps:**
- "Scan time" ≠ response time — response time can be 2× scan time worst case

---

## Module 2 — IEC 61131-3

**Core concept:** Five standardized languages allow logic portability across compliant vendors. No vendor implements all five identically.

**Common exam traps:**
- IL is part of the standard but deprecated in IEC 61131-3 ed. 3
- SFC steps have actions (continuous, set, reset, pulse) — easy to confuse

---

## Module 3 — Studio 5000

**Core concept:** Tag-based addressing decouples logic from physical I/O location. AOIs and UDTs enforce reuse and consistency.

**Must-know facts:**
- AOI parameters: Required, Optional, Visible — control what callers see
- UDTs can nest — but circular references are not allowed
- Produced/consumed tags: no MSG instruction needed; uses implicit CIP messaging

---

## Module 5 — I/O

**Signal scaling formula:**
```
EU = EU_min + ((raw - raw_min) / (raw_max - raw_min)) × (EU_max - EU_min)
Example: 4–20 mA → 0–100 psi
  EU = 0 + ((12 - 4) / (20 - 4)) × 100 = 50 psi
```

---

## Mnemonics

| What to remember | Memory aid |
|---|---|
| IEC 61131-3 languages | **L**adder **F**unction **S**tructured **S**equential **I**nstruction → "**LFS SI**" |
| Scan cycle phases | **I**nput **P**rogram **O**utput **H**ousekeeping → "**I POH**" |
| NAMUR NE 43 faults | Under 3.6, Over 21 — "**3** strikes under, **21** is too many" |

---

## Commonly confused pairs

| Concept A | Concept B | Key difference |
|---|---|---|
| FB (Siemens) | FC (Siemens) | FB has instance DB and retains state; FC is stateless |
| Produced tag | MSG instruction | Produced/consumed = implicit, always-on; MSG = explicit, on-demand |
| Periodic task | Event task | Periodic fires on timer; event fires on trigger |
| Major fault | Minor fault | Major = controller stops; minor = logged but execution continues |

---

## Last-minute review checklist

- [ ] Scan cycle phases recalled in order without reference
- [ ] All 5 IEC 61131-3 languages named and described
- [ ] Studio 5000 tag types and when to use each
- [ ] TIA Portal OB/FB/FC/DB hierarchy explained clearly
- [ ] Signal scaling formula applied correctly
- [ ] NAMUR NE 43 thresholds recalled
- [ ] Scored >75% on a fresh CAP Design domain practice set this week

---

**Links:** [[05-Resources/Courses/PLC Architecture/PLC Architecture — Overview|Overview]] · [[05-Resources/Courses/PLC Architecture/PLC Architecture — Syllabus|Syllabus]] · [[05-Resources/Courses/PLC Architecture/PLC Architecture — Progress|Progress Tracker]]
