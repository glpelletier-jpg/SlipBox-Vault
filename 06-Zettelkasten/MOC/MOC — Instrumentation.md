---
id: "MOC-20260608-04"
created: 2026-06-08
type: moc
domain: ia-ot
topic: Instrumentation
maturity: active
tags: [instrumentation, sensors, transmitters, 4-20mA, HART, IO-Link, Endress-Hauser, Pepperl-Fuchs, SICK, calibration, measurement]
---

## What this is
Hub for field instrumentation — how process variables (flow, level, pressure, temperature, pH, conductivity) are measured, transmitted, and validated. Covers signal standards (4–20 mA, HART, IO-Link, Fieldbus), device selection, installation, calibration, and SIL certification for safety applications. Vendors in scope: Endress+Hauser, Pepperl+Fuchs, SICK.

## Mental model
Every measurement chain has three failure modes worth designing against: **sensor drift** (calibration), **signal integrity loss** (wiring/EMC), and **transmitter failure** (diagnostics/redundancy). HART lets you interrogate all three from the control room without breaking the 4–20 mA loop.

## Core concepts
- [[PN — 4–20 mA loops provide live-zero detection — a 0 mA signal indicates a wire break, not zero process value]]
- [[PN — HART superimposes 1200-2200 Hz FSK digital signal on the 4–20 mA loop without disrupting analog output]]
- [[PN — IO-Link is a point-to-point digital protocol replacing discrete and analog signals with parameterizable smart I-O]]
- [[PN — Endress+Hauser Heartbeat Technology provides continuous self-monitoring and on-demand verification without process interruption]]
- [[PN — Pepperl+Fuchs isolators galvanically decouple field devices from control system to prevent ground loops]]
- [[PN — SICK safety light curtains require annual proof testing and defined minimum object detection size per ISO 13855]]
- [[PN — SIL-rated transmitters require documented proof-test procedures to maintain PFDavg over the safety lifecycle]]

## Standards and references
| Standard / Doc | Scope | Notes |
|---|---|---|
| IEC 61784 | Fieldbus communication profiles | PROFIBUS, FOUNDATION Fieldbus, etc. |
| IEC 62591 | WirelessHART | Mesh wireless for process instruments |
| ISO 5167 | Flow measurement (differential pressure) | Orifice plates, venturis |
| NAMUR NE 43 | 4–20 mA fault signal levels | <3.6 mA / >21 mA = fault state |
| NAMUR NE 107 | Device self-monitoring symbols | Failed / Check Function / Out of Specification / Maintenance |
| IEC 61508 | Device functional safety | Governs SIL-rated transmitter manufacturers |

## Literature processed
- [[LIT — Endress+Hauser — Heartbeat Technology White Paper]]
- [[LIT — Pepperl+Fuchs — HART Infrastructure Design Guide]]
- [[LIT — NAMUR NE 107 Recommendation]]

## Open questions / seedlings
- Which E+H devices on Argenta-Water are HART-enabled and currently polled by the AVEVA historian?
- What is the calibration interval policy for SIL-rated instruments on CCPC-1250?
- Evaluate IO-Link vs HART for next-generation sensor integration on water line

## Related MOCs
- [[MOC — PLC Architecture]]
- [[MOC — Process Safety (IEC 61511)]]
- [[MOC — OT Networking]]
