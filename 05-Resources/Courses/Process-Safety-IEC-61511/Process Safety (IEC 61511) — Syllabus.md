---
title: Process Safety (IEC 61511) — Syllabus
date: 2026-06-08
type: course-syllabus
course: Process-Safety-IEC-61511
total_weeks: 16
tags: [course, courses, syllabus, ia-ot, safety, SIS, SIL, cap]
---

# Process Safety (IEC 61511) — Syllabus

> **Pace:** 30 min/day, 4 days/week · **Total effort:** ~50 hours · **Target:** CCPC-1250 documentation confidence + CAP Safety domain readiness by Q1 2027

---

## Before you start

- [ ] Complete quick-start checklist in [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Overview|Overview]]
- [ ] Set study block in Morgen Calendar: _______________
- [ ] Pull CCPC-1250 SIS deliverable list for context

---

## Milestone checklist

- [ ] Module 1 — Can draw the 16-phase safety lifecycle from memory
- [ ] Module 2 — Completed a LOPA worksheet for a sample scenario
- [ ] Module 3 — Can determine SIL from a risk graph and from LOPA
- [ ] Module 4 — Can calculate PFDavg for a 1oo2 architecture
- [ ] Module 5 — Reviewed CCPC-1250 validation plan against IEC 61511 Clause 12
- [ ] Module 6 — Drafted a proof test procedure for one instrument loop
- [ ] Week 16 — CAP Safety practice quiz scoring >75%

---

## Module 1 — Risk Concepts and the Safety Lifecycle

**Weeks:** 1–2 · **Est. hours:** 6

*Why functional safety exists, how risk is defined and tolerated, and how IEC 61511 structures the work into 16 phases.*

### Topics
- **1A** — Hazard, risk, tolerable risk — definitions and relationship
- **1B** — Risk reduction layers: BPCS → alarms → SIS → mechanical protection
- **1C** — IEC 61511 scope, relationship to IEC 61508 (parent standard)
- **1D** — The 16-phase safety lifecycle — phases 1–16 mapped to project stages

### Key things to know
- SIS is the last automated layer before mechanical/physical protection
- IEC 61511 governs the process sector; IEC 61508 governs device manufacturers
- Prior-use justification (Clause 11.9) allows non-61508-certified devices with documented evidence

### Vault connections
- [[06-Zettelkasten/Permanent/PN — IEC 61511 safety lifecycle has 16 phases from hazard analysis through decommissioning|PN — Safety lifecycle]]
- [[06-Zettelkasten/MOC/MOC — Process Safety (IEC 61511)]]

---

## Module 2 — Hazard and Risk Analysis

**Weeks:** 3–5 · **Est. hours:** 10

*HAZOP methodology, consequence/likelihood matrices, and Layer of Protection Analysis (LOPA).*

### Topics
- **2A** — HAZOP: guide words, nodes, deviations, causes, consequences, safeguards
- **2B** — Risk matrix: consequence severity vs. likelihood categories
- **2C** — LOPA fundamentals: initiating event frequency, IPL PFD, mitigated event frequency
- **2D** — Identifying and quantifying independent protection layers (IPLs)
- **2E** — Determining required risk reduction from LOPA output → SIL target

### Key things to know
- LOPA multiplies failure probabilities: mitigated freq = initiating freq × ∏ IPL PFDs
- IPL must be independent, auditable, capable, and reliable (ICAR criteria)
- BPCS is not an IPL if it shares sensors, logic, or final elements with the SIS

### Vault connections
- [[06-Zettelkasten/Permanent/PN — LOPA quantifies risk reduction by multiplying IPL failure probabilities along a demand scenario|PN — LOPA]]
- [[06-Zettelkasten/Permanent/PN — SIL is a discrete risk-reduction target, not a product rating — it applies to a SIF, not a device|PN — SIL]]

---

## Module 3 — SIL Determination

**Weeks:** 6–8 · **Est. hours:** 8

*Two methods: risk graph and LOPA. Understanding SIL 1–4, risk reduction factors, and PFD ranges.*

### Topics
- **3A** — SIL 1–4: PFD ranges and risk reduction factors
- **3B** — Risk graph method: consequence, occupancy, possibility of avoiding, demand rate
- **3C** — LOPA method: required PFD = tolerable risk / (initiating freq × non-SIS IPL PFDs)
- **3D** — Documenting SIL determination — traceability to HAZOP/LOPA records

### Key things to know

| SIL | PFDavg range | Risk reduction factor |
|---|---|---|
| SIL 1 | 0.1 to 0.01 | 10 to 100 |
| SIL 2 | 0.01 to 0.001 | 100 to 1,000 |
| SIL 3 | 0.001 to 0.0001 | 1,000 to 10,000 |
| SIL 4 | 0.0001 to 0.00001 | 10,000 to 100,000 |

---

## Module 4 — SIS Design

**Weeks:** 9–12 · **Est. hours:** 12

*SIF architecture, safe failure fraction (SFF), hardware fault tolerance (HFT), and PFDavg calculation.*

### Topics
- **4A** — SIF = sensor subsystem + logic solver + final element subsystem
- **4B** — Dangerous Detected (DD) vs. Dangerous Undetected (DU) failures
- **4C** — Safe Failure Fraction (SFF) = (λS + λDD) / (λS + λDD + λDU)
- **4D** — Hardware Fault Tolerance: 1oo1, 1oo2, 2oo3 architectures
- **4E** — PFDavg calculation for 1oo1, 1oo2, 2oo3 (simplified formulas)
- **4F** — Physical and functional separation from BPCS

### Key things to know
- 1oo2 improves availability (less spurious trips) but does not automatically improve safety
- 2oo3 balances safety and availability — preferred for SIL 2 final elements
- SIS must be functionally AND physically separated from BPCS (different sensors, different logic)

### Vault connections
- [[06-Zettelkasten/Permanent/PN — Dangerous Detected vs Dangerous Undetected failures drive SFF calculation and architecture requirements|PN — DD vs DU]]
- [[06-Zettelkasten/Permanent/PN — SIS must be functionally and physically separated from BPCS to prevent common cause failures|PN — SIS separation]]

---

## Module 5 — SIS Verification and Validation

**Weeks:** 13–14 · **Est. hours:** 8

*Factory acceptance testing, site acceptance testing, and the IEC 61511 validation requirements.*

### Topics
- **5A** — Verification vs. validation: definition distinction
- **5B** — IEC 61511 Clause 12: SIS validation requirements
- **5C** — FAT scope for logic solver and field devices
- **5D** — SAT and pre-startup safety review (PSSR)
- **5E** — Applying to CCPC-1250 validation plan

---

## Module 6 — Proof Testing and Lifecycle Management

**Weeks:** 15–16 · **Est. hours:** 6

*Proof test intervals, proof test coverage, and how testing keeps PFDavg within SIL targets over time.*

### Topics
- **6A** — Proof test interval (PTI) and its effect on PFDavg
- **6B** — Proof test coverage (PTC): what fraction of DU failures the test reveals
- **6C** — Functional safety assessment and audits
- **6D** — Management of change (MOC) for SIS modifications

### Key things to know
- Extending PTI increases PFDavg — must be re-verified if interval changes
- 100% PTC assumed in most PFDavg calculations; real tests rarely achieve 100%

---

**Links:** [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Overview|Overview]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Resources|Resources]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Progress|Progress Tracker]] · [[05-Resources/Courses/Course Study Workflow|Study Workflow]]
