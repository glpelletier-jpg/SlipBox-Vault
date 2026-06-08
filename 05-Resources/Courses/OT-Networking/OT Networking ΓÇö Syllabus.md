---
title: OT Networking — Syllabus
date: 2026-06-08
type: course-syllabus
course: OT-Networking
total_weeks: 14
tags: [course, courses, syllabus, ia-ot, networking, cap]
---

# OT Networking — Syllabus

> **Pace:** 30 min/day, 3 days/week · **Total effort:** ~40 hours · **Target:** OT-Network project confidence by Q4 2026

---

## Module 1 — Purdue Model and Zone Architecture (Weeks 1–3 · 8 hrs)

*The conceptual framework for all OT network design decisions.*

### Topics
- **1A** — ISA-95 / Purdue levels 0–5 defined
- **1B** — Zone and conduit model (ISA/IEC 62443-3-3)
- **1C** — Traffic flow rules: upward-only, firewall-enforced cross-zone
- **1D** — DMZ design: what lives at Level 3.5 and why

### Key things to know
- Level 0 = field; 1 = control; 2 = supervisory; 3 = site ops; 3.5 = DMZ; 4 = enterprise
- DMZ prevents direct routed connections from Level 4 to Level 1/0
- Historian sits in DMZ — pulls from Level 3, pushes to Level 4

### Vault connections
- [[06-Zettelkasten/Permanent/PN — Purdue model zones define trust boundaries — cross-zone traffic requires explicit firewall rules|PN — Purdue model]]
- [[06-Zettelkasten/Permanent/PN — A DMZ between Level 3 and Level 4 prevents direct IT-to-OT routed connections|PN — DMZ]]

---

## Module 2 — EtherNet/IP and CIP (Weeks 4–6 · 8 hrs)

*Rockwell's industrial protocol — implicit I/O messaging, explicit messaging, and the ODVA device profile.*

### Topics
- **2A** — CIP overview: object model, services, device profiles
- **2B** — Implicit messaging: Class 1 connection, RPI, multicast
- **2C** — Explicit messaging: Class 3 / unconnected (UCMM), MSG instruction in Logix
- **2D** — EtherNet/IP network design: multicast, managed switches, IGMP snooping

### Key things to know
- Implicit = cyclic, real-time I/O; explicit = on-demand, config/diagnostics
- Multicast implicit traffic requires IGMP snooping on all switches — unmanaged = flood
- RPI (Requested Packet Interval) drives I/O update rate

### Vault connections
- [[06-Zettelkasten/Permanent/PN — EtherNet/IP uses CIP over standard TCP/UDP — implicit messaging for I/O, explicit for configuration|PN — EtherNet/IP]]

---

## Module 3 — PROFINET (Weeks 7–8 · 6 hrs)

*Siemens' industrial Ethernet — RT, IRT, and integration with TIA Portal.*

### Topics
- **3A** — PROFINET RT (real-time) vs IRT (isochronous real-time)
- **3B** — Device naming and GSD files
- **3C** — PROFINET topology rules: star, line, ring (MRP)
- **3D** — QoS requirements: managed switches, VLAN tagging, priority queues

### Key things to know
- PROFINET requires managed switches for QoS — unmanaged switches break determinism
- IRT requires Siemens-certified switches (SCALANCE X) for synchronized timing
- GSD file = device description file; analogous to EDS file in EtherNet/IP

---

## Module 4 — OT Network Segmentation (Weeks 9–11 · 8 hrs)

*VLAN design, firewall rules, and the practical implementation of zone separation at Argenta.*

### Topics
- **4A** — VLAN fundamentals: tagged vs. untagged, trunk ports, access ports
- **4B** — OT VLAN scheme design: Level 1, Level 2, Level 3, DMZ VLANs
- **4C** — Firewall rule design: permit by exception, OT-specific rules
- **4D** — Remote access: VPN, ZTNA, vendor jump server in DMZ
- **4E** — Applying to Argenta OT-Network project

---

## Module 5 — Cisco ICS Switching (Weeks 12–13 · 6 hrs)

*Cisco Industrial Ethernet switches — IE3400, IE4000, CIP-aware features.*

### Topics
- **5A** — IE3400 vs IE4000: specs, port counts, DIN rail vs. rack mount
- **5B** — Cisco Industrial Network Director (IND): topology discovery, device management
- **5C** — CIP-aware features: EtherNet/IP traffic prioritization
- **5D** — Ring redundancy: REP (Resilient Ethernet Protocol) for OT

---

## Module 6 — OT Cybersecurity (Week 14 · 4 hrs)

*NIST 800-82 and ISA/IEC 62443 applied to Argenta's environment.*

### Topics
- **6A** — NIST 800-82 Rev 3: risk management framework for ICS
- **6B** — ISA/IEC 62443-3-3: security levels (SL 1–4) and system requirements
- **6C** — OT-specific threats: Purdue bypass, lateral movement, supply chain
- **6D** — Practical controls: network segmentation, patch management, remote access policy

---

**Links:** [[05-Resources/Courses/OT-Networking/OT Networking — Overview|Overview]] · [[05-Resources/Courses/OT-Networking/OT Networking — Resources|Resources]] · [[05-Resources/Courses/OT-Networking/OT Networking — Progress|Progress Tracker]] · [[05-Resources/Courses/Course Study Workflow|Study Workflow]]
