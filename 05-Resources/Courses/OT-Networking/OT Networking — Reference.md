---
title: OT Networking — Reference
date: 2026-06-08
type: course-reference
course: OT-Networking
tags: [course, courses, reference, ia-ot, networking, cap]
---

# OT Networking — Reference

---

## Purdue model levels

| Level | Name | Typical devices |
|---|---|---|
| 0 | Field | Sensors, actuators, drives |
| 1 | Control | PLCs, safety controllers |
| 2 | Supervisory | HMI, SCADA, engineering workstations |
| 3 | Site operations | Historian, OPC server, batch mgmt |
| 3.5 | DMZ | Data diode, jump server, patching server |
| 4 | Enterprise | ERP, email, corporate IT |

---

## EtherNet/IP CIP messaging types

| Type | Class | Use | Direction |
|---|---|---|---|
| Implicit (I/O) | Class 1 | Real-time cyclic I/O | Controller ↔ device |
| Explicit (connected) | Class 3 | Config, diagnostics (connected) | On-demand |
| Explicit (unconnected) | UCMM | Config, diagnostics (stateless) | On-demand |

---

## PROFINET classes

| Class | Timing | Switch requirement |
|---|---|---|
| RT (real-time) | 1–10 ms cycle | Managed switch with QoS |
| IRT (isochronous) | <1 ms, synchronized | Siemens SCALANCE X required |
| Standard | Best effort | Any switch |

---

## OT VLAN design template

| VLAN ID | Name | Devices | Firewall rule |
|---|---|---|---|
| 10 | Level-1-Control | PLCs, safety controllers | Permit to VLAN 20 only |
| 20 | Level-2-Supervisory | HMIs, engineering WS | Permit to VLAN 10, 30 |
| 30 | Level-3-Operations | Historian, OPC server | Permit to VLAN 20, DMZ |
| 40 | DMZ | Jump server, patching | Permit to VLAN 30 and VLAN 50 |
| 50 | Enterprise | IT network | Permit to DMZ only |

---

## Commonly confused pairs

| Concept A | Concept B | Key difference |
|---|---|---|
| Implicit messaging | Explicit messaging | Implicit = cyclic I/O; explicit = on-demand config |
| PROFINET RT | PROFINET IRT | IRT is synchronized (submillisecond); RT is soft real-time |
| Zone | Conduit | Zone = group of assets; conduit = communication path between zones |
| NIST 800-82 | ISA/IEC 62443 | 800-82 = US gov guidance; 62443 = international standard |

---

## Last-minute review checklist

- [ ] Purdue levels 0–5 and what lives at each recalled
- [ ] DMZ purpose and what belongs there explained
- [ ] EtherNet/IP implicit vs. explicit messaging distinguished
- [ ] PROFINET RT vs. IRT switch requirements stated
- [ ] VLAN segmentation strategy for OT described
- [ ] NIST 800-82 purpose summarized in one sentence

---

**Links:** [[05-Resources/Courses/OT-Networking/OT Networking — Overview|Overview]] · [[05-Resources/Courses/OT-Networking/OT Networking — Syllabus|Syllabus]] · [[05-Resources/Courses/OT-Networking/OT Networking — Progress|Progress Tracker]]
