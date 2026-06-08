---
id: "MOC-20260608-03"
created: 2026-06-08
type: moc
domain: ia-ot
topic: OT Networking
maturity: active
tags: [networking, OT, ICS, Purdue-model, EtherNet-IP, PROFINET, firewall, DMZ, Cisco, cybersecurity]
---

## What this is
Hub for industrial networking — how field devices, PLCs, HMIs, historians, and enterprise systems communicate, and how those networks are segmented and secured. Directly maps to the active OT-Network project and the IT/OT convergence work at Argenta. Intersects with NIST 800-82 and ISA/IEC 62443 for cybersecurity.

## Mental model
The **Purdue Reference Model** (ISA-95 hierarchy) structures OT networks into levels: Level 0 (field), 1 (control), 2 (supervisory/HMI), 3 (site operations/historian), 3.5 (DMZ), 4 (enterprise IT). Traffic should generally flow upward; unidirectional gateways or firewalled DMZs prevent downward intrusion from IT into Level 1/0.

## Core concepts
- [[PN — Purdue model zones define trust boundaries — cross-zone traffic requires explicit firewall rules]]
- [[PN — EtherNet/IP uses CIP over standard TCP/UDP — implicit messaging for I/O, explicit for configuration]]
- [[PN — PROFINET uses standard Ethernet but requires managed switches with QoS and IGMP snooping]]
- [[PN — A DMZ between Level 3 and Level 4 prevents direct IT-to-OT routed connections]]
- [[PN — Unmanaged switches in OT environments eliminate VLAN segmentation and span tree visibility]]
- [[PN — Device-level firewalls on Logix controllers (CIP Security) are available from firmware v33 onward]]
- [[PN — NIST 800-82 Rev 3 extends ICS guidance to cloud-connected and remote-access scenarios]]

## Standards and references
| Standard / Doc | Scope | Notes |
|---|---|---|
| NIST SP 800-82 Rev 3 | ICS/OT cybersecurity guide | Risk management, architecture, remote access |
| ISA/IEC 62443 | OT cybersecurity standard series | Zone/conduit model, SL levels |
| ISA-95 / IEC 62264 | Enterprise-control integration | Purdue model hierarchy definition |
| Cisco ICS Security Design Guide | Cisco-specific OT reference | VLAN design, firewall rules, Catalyst IE switches |
| ODVA EtherNet/IP Spec | CIP protocol | Implicit/explicit messaging, device profiles |

## Literature processed
- [[LIT — NIST SP 800-82 Rev 3]]
- [[LIT — Cisco Industrial Network Director Design Guide]]
- [[LIT — ISA/IEC 62443-3-3 System Security Requirements]]

## Open questions / seedlings
- What VLAN scheme is currently in use at Argenta for Level 1 vs Level 2 devices?
- Does the OT-Network project include remote access (VPN/ZTNA) for vendor support?
- Evaluate Cisco IE3400 vs IE4000 for managed switching at field panel level

## Related MOCs
- [[MOC — PLC Architecture]]
- [[MOC — Process Safety (IEC 61511)]]
- [[MOC — AVEVA Platform]]
