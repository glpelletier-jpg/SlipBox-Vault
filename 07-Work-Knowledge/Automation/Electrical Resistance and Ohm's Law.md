---
title: "Electrical Resistance and Ohm's Law"
id: 20260225081600
date: 2026-02-25
type: reference
source: "Lessons in Industrial Automation — control.com"
source-link: "https://control.com/textbook/dc-electricity/electrical-resistance/"
tags: [work, automation, electrical-fundamentals, CAP-prep, HAM-prep]
---

# Electrical Resistance and Ohm's Law

> **The central insight:** Resistance is friction in an electrical circuit. Voltage forces current through that friction. Ohm's Law quantifies the relationship between all three — making it the master equation for circuit analysis in both industrial automation and amateur radio.

---

## Navigation

**Electrical fundamentals sequence:**
[[07-Work-Knowledge/Automation/Basic Direct Current (DC) Theory - Overview|① DC Theory Overview]] → [[07-Work-Knowledge/Automation/Basics of Electrical Current|② Basics of Electrical Current]] → **③ Electrical Resistance & Ohm's Law** ← *you are here* → [[07-Work-Knowledge/Automation/What is Electrical Power|④ Electrical Power]] → [[07-Work-Knowledge/Automation/Electrical Sources and Electronic Load|⑤ Sources and Loads]]

---

## What is electrical resistance?

Resistance is the opposition that a material presents to the flow of electric current — the electrical equivalent of friction. When electrons drift through a conductor, they collide with atoms and lose energy. That lost energy becomes heat (or light, or motion in load devices).

**Key facts:**
- Resistance is measured in **ohms (Ω)** — named for German physicist Georg Simon Ohm
- Symbol in formulas: **R**
- Components designed to provide precise resistance are called **resistors**
- Resistors are the load devices that accomplish the real work: turning electricity into motion, heat, light

**The resistance reference table:**

| Quantity | Symbol | Unit | Abbreviation |
|---|---|---|---|
| Voltage | V (or E) | Volt | V |
| Current | I | Ampere (Amp) | A |
| Resistance | R | Ohm | Ω |

---

## Ohm's Law

Ohm's Law states that **voltage equals current multiplied by resistance**. It is the most fundamental formula in electrical science.

### The three forms — solve for any variable

$$V = I \times R \quad\quad I = \frac{V}{R} \quad\quad R = \frac{V}{I}$$

| Form | Solve for | Use when you know... |
|---|---|---|
| V = I × R | Voltage | Current + Resistance |
| I = V / R | Current | Voltage + Resistance |
| R = V / I | Resistance | Voltage + Current |

### Plain-English reading

> "Resistance is how much voltage it takes to force a given rate of current through a material."

---

## Worked example — simple series circuit

**Problem:** A circuit has a 25 V source and a total resistance of 3,500 Ω. Find the current.

$$I = \frac{V}{R} = \frac{25\text{ V}}{3{,}500\text{ Ω}} = 0.00714\text{ A} = 7.14\text{ mA}$$

---

## Series resistors — the critical context rule

When a circuit has **multiple resistors**, you must keep all variables in context — voltages, currents, and resistances must all refer to the same portion of the circuit.

**Two resistors in series (R₁ = 3,500 Ω, R₂ = 1,500 Ω, V_total = 25 V):**

**Step 1 — Find total resistance:**
$$R_{total} = R_1 + R_2 = 3{,}500 + 1{,}500 = 5{,}000\text{ Ω}$$

**Step 2 — Find circuit current** (same everywhere in a series circuit):
$$I = \frac{V_{total}}{R_{total}} = \frac{25}{5{,}000} = 0.005\text{ A} = 5\text{ mA}$$

**Step 3 — Find voltage drop across each resistor:**
$$V_1 = I \times R_1 = 0.005 \times 3{,}500 = 17.5\text{ V}$$
$$V_2 = I \times R_2 = 0.005 \times 1{,}500 = 7.5\text{ V}$$

**Sanity check:** V₁ + V₂ = 17.5 + 7.5 = 25 V ✓

> **The context rule:** Never mix variables from different parts of a circuit. R_total, V_total, and I_total belong together. V₁ and R₁ belong together. Mixing them produces meaningless results.

---

## Parallel resistors

When resistors are wired in parallel (same voltage across each), total resistance **decreases**:

$$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$$

For two resistors in parallel:
$$R_{total} = \frac{R_1 \times R_2}{R_1 + R_2}$$

Each parallel branch carries its own current. Total current = sum of branch currents.

---

## Industrial automation applications (CAP relevance)

| Scenario | How Ohm's Law applies |
|---|---|
| **4–20 mA current loop sizing** | Calculate loop resistance limit: V_supply / 0.020 A = max allowable loop R |
| **Voltage drop in long cable runs** | V_drop = I × R_cable — critical for field devices far from the panel |
| **Fuse and breaker selection** | Maximum current = V_source / minimum_circuit_resistance |
| **PLC input circuit design** | Resistors set safe current levels for digital inputs |
| **RTD temperature sensing** | RTD resistance changes with temperature — Ohm's Law reads the resistance via known current |
| **Analog output loading** | Ohm's Law confirms whether a transmitter can drive its specified load resistance |

**CAP exam domains:** Domain 1 (Measurement) and Domain 3 (Electrical/Electronic) both test Ohm's Law applications.

---

## HAM Radio General License connections

Ohm's Law is directly tested on the HAM General License exam (Element 3, sub-element G5).

| HAM topic | Connection to Ohm's Law |
|---|---|
| **Antenna feed-point impedance** | Impedance (AC equivalent of R) matched using Ohm's Law principles |
| **SWR and transmission lines** | Mismatch = resistance mismatch — Ohm's Law predicts reflected power |
| **Attenuator circuits** | Resistor networks designed using V = IR to set signal levels |
| **RF amplifier design** | Bias resistors calculated via Ohm's Law to set operating point |
| **Battery and power supply sizing** | I = V/R tells you how much current a 12V system will draw at given load |

> **HAM ↔ Automation overlap:** The electrical fundamentals are identical. Studying one directly reinforces the other — same physics, different application context.

---

## Memory tools

**Ohm's Law triangle:**
```
      V
    ──────
    I  │  R
```
Cover the variable you want to find; the remaining two show the operation (side-by-side = multiply, top-and-bottom = divide).

**The water pipe analogy:**
- Voltage = water pressure
- Current = flow rate (gallons per minute)
- Resistance = pipe narrowness (friction)
- Ohm's Law: more pressure + narrower pipe = less flow

---

## Key takeaways

1. **Resistance is friction** — it opposes current, converts electrical energy to heat/work
2. **Ohm's Law is V = IR** in three forms — always solve for the one unknown
3. **Keep variables in context** — never mix values from different parts of a circuit
4. **Series resistors add; parallel resistors give a result smaller than the smallest**
5. **Current is the same everywhere in a series loop** — voltage divides across resistors proportionally

---

## Connections

- [[07-Work-Knowledge/Automation/Basic Direct Current (DC) Theory - Overview|DC Theory Overview]] — voltage and potential energy foundation
- [[07-Work-Knowledge/Automation/Basics of Electrical Current|Basics of Electrical Current]] — current defined, electron drift explained
- [[07-Work-Knowledge/Automation/What is Electrical Power|Electrical Power]] — Watt's Law: P = V × I (extends Ohm's Law to power)
- [[07-Work-Knowledge/Automation/Electrical Sources and Electronic Load|Sources and Loads]] — how voltage sources drive resistive loads
- [[06-Zettelkasten/MOC/Automation Engineering MOC|Automation Engineering MOC]] — full knowledge map
- [[06-Zettelkasten/MOC/HAM Radio MOC|HAM Radio MOC]] — study map noting overlap with electrical fundamentals
- [[05-Resources/Courses/HAM-Radio/General License Syllabus|General License Syllabus]] — G5 sub-element: electrical principles
- [[07-Work-Knowledge/CAP-Certification/CAP-Certification|CAP Certification]] — exam prep roadmap

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[06-Zettelkasten/MOC/Automation Engineering MOC|Automation MOC]] | [[06-Zettelkasten/MOC/HAM Radio MOC|HAM Radio MOC]]
