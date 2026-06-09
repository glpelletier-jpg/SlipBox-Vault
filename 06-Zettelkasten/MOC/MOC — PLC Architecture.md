---
id: "MOC-20260608-01"
created: 2026-06-08
type: moc
domain: ia-ot
topic: PLC Architecture
maturity: active
tags: [plc, allen-bradley, siemens, studio5000, tia-portal, ladder-logic, function-blocks]
---

## What this is
The central hub for understanding how programmable logic controllers are structured, programmed, and integrated into control systems. Covers hardware architecture, IEC 61131-3 programming languages, and vendor-specific implementations across Rockwell and Siemens platforms relevant to Argenta projects.

## Mental model
A PLC is a deterministic scan-cycle machine: **Input scan → Program execution → Output scan → Housekeeping**, repeating every scan cycle (typically 10–50 ms). Everything else — tags, AOIs, UDTs, motion, comms — is layered on top of that core loop.

## Core concepts
- [[PN — PLC scan cycle determines worst-case response time for safety-critical outputs]]
- [[PN — IEC 61131-3 defines five standard languages — LD, FBD, ST, IL, SFC — for portability across vendors]]
- [[PN — Allen-Bradley Studio 5000 AOIs encapsulate reusable logic with local tags and parameters]]
- [[PN — Siemens TIA Portal uses OB-FB-FC hierarchy for modular program organization]]
- [[PN — Tag-based addressing in ControlLogix eliminates I-O slot dependency of legacy fixed-address PLCs]]
- [[PN — Produced-consumed tags in Logix enable peer-to-peer data sharing over EtherNet-IP without explicit messaging]]
- [[PN — UDTs enforce consistent data structures across AOIs and HMI faceplates]]

## Standards and references
| Standard / Doc | Scope | Notes |
|---|---|---|
| IEC 61131-3 | PLC programming languages | Five language definitions + common elements |
| IEC 61131-1 | PLC general information | Hardware, I/O, EMC requirements |
| ODVA EtherNet/IP | Industrial Ethernet protocol | CIP over TCP/UDP; used by all Rockwell PLCs |
| Rockwell Knowledgebase | Studio 5000 / Logix | Fault codes, AOI library, motion config |
| Siemens Industry Online Support | TIA Portal / S7 | Function block reference, safety PLC docs |

## Literature processed
- [[LIT — Rockwell — Studio 5000 Logix Designer User Manual]]
- [[LIT — Siemens — TIA Portal Programming Guideline]]
- [[LIT — IEC 61131-3 Standard Overview]]

## Open questions / seedlings
- How does ControlLogix handle task overlap when a periodic task overruns?
- What are the memory limits for L8x controllers vs L7x in large UDT-heavy programs?
- Compare Siemens S7-1500 response time vs ControlLogix L85 for fast analog loops

## Related MOCs
- [[MOC — Process Safety (IEC 61511)]]
- [[MOC — OT Networking]]
- [[MOC — Instrumentation]]
