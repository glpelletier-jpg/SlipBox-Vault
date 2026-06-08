---
id: "MOC-20260608-02"
created: 2026-06-08
type: moc
domain: ia-ot
topic: Process Safety (IEC 61511)
maturity: active
tags: [safety, SIS, SIL, LOPA, functional-safety, IEC-61511, safety-lifecycle]
---

## What this is
Hub for process functional safety — the engineering discipline of designing Safety Instrumented Systems (SIS) to reduce process risk to tolerable levels. Anchored to IEC 61511 (process sector) and its parent IEC 61508 (generic). Directly relevant to CCPC-1250 validation documentation and any Argenta line with SIS requirements.

## Mental model
Risk reduction is layered: **BPCS (basic process control) → Alarms → SIS → Mechanical protection → Emergency response**. IEC 61511 governs the SIS layer. Each Safety Instrumented Function (SIF) is assigned a Safety Integrity Level (SIL 1–4) via LOPA or risk graph, then designed and verified to meet that SIL's required PFD (Probability of Failure on Demand).

## Core concepts
- [[PN — SIL is a discrete risk-reduction target, not a product rating — it applies to a SIF, not a device]]
- [[PN — IEC 61511 safety lifecycle has 16 phases from hazard analysis through decommissioning]]
- [[PN — LOPA quantifies risk reduction by multiplying IPL failure probabilities along a demand scenario]]
- [[PN — PFDavg must be verified over the proof-test interval — testing too infrequently inflates actual PFD]]
- [[PN — 61511 Clause 11.9 requires prior-use justification for devices not certified to IEC 61508]]
- [[PN — Dangerous Detected vs Dangerous Undetected failures drive SFF calculation and architecture requirements]]
- [[PN — SIS must be functionally and physically separated from BPCS to prevent common cause failures]]

## Standards and references
| Standard / Doc | Scope | Notes |
|---|---|---|
| IEC 61511-1 | Framework, definitions, requirements | Primary process safety standard |
| IEC 61511-2 | Guidelines for IEC 61511-1 | Informative annex with worked examples |
| IEC 61511-3 | Guidance for determining SIL | Risk graph and LOPA methodology |
| IEC 61508 (parts 1–7) | Generic functional safety | Parent standard; governs device manufacturers |
| ISA-84.00.01 | US adoption of IEC 61511 | ANSI equivalent |

## Literature processed
- [[LIT — IEC 61511-1 Standard (2016 Edition)]]
- [[LIT — CCPC-1250 Validation Plan]]

## Open questions / seedlings
- What proof-test interval is assumed in the CCPC-1250 SIL verification?
- Which Endress+Hauser devices used at Argenta carry IEC 61508 SIL certification?
- Clarify architectural constraints for SIL 2 with 1oo2 vs 2oo3 voting

## Related MOCs
- [[MOC — PLC Architecture]]
- [[MOC — Instrumentation]]
- [[MOC — OT Networking]]
