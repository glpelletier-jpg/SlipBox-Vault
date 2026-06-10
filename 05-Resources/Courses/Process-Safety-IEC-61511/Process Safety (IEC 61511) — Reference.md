---
title: Process Safety (IEC 61511) — Reference
date: 2026-06-08
type: course-reference
course: Process-Safety-IEC-61511
tags: [course, courses, reference, ia-ot, safety, SIS, SIL, cap]
---

# Process Safety (IEC 61511) — Reference

---

## SIL definitions

| SIL | PFDavg | Risk Reduction Factor | Typical application |
|---|---|---|---|
| SIL 1 | 0.01 – 0.1 | 10 – 100 | Single process protective function |
| SIL 2 | 0.001 – 0.01 | 100 – 1,000 | Most common in process industry |
| SIL 3 | 0.0001 – 0.001 | 1,000 – 10,000 | High-consequence environments |
| SIL 4 | 0.00001 – 0.0001 | 10,000 – 100,000 | Nuclear / rare process applications |

---

## LOPA method — step by step

```
1. Identify the hazard scenario (from HAZOP)
2. Identify the initiating event and its frequency (per year)
3. Identify all independent protection layers (IPLs) and their PFDs
4. Calculate mitigated event frequency:
      f_mitigated = f_initiating × ∏ PFD_IPL(i)
5. Compare to tolerable risk frequency (TRF)
6. If f_mitigated > TRF: SIS required
      Required PFD_SIS = TRF / f_mitigated (before SIS)
7. Determine SIL from required PFD_SIS using the table above
```

---

## PFDavg formulas (simplified)

| Architecture | Formula |
|---|---|
| 1oo1 | PFDavg ≈ λDU × TI / 2 |
| 1oo2 | PFDavg ≈ (λDU × TI)² / 3 |
| 2oo3 | PFDavg ≈ (λDU × TI)² |

*λDU = dangerous undetected failure rate (per hour); TI = proof test interval (hours)*

---

## Safe Failure Fraction (SFF)

```
SFF = (λS + λDD) / (λS + λDD + λDU)

λS  = safe failure rate
λDD = dangerous detected failure rate
λDU = dangerous undetected failure rate
```

Higher SFF → better diagnostic coverage → can achieve SIL with lower HFT.

---

## 16-phase safety lifecycle (IEC 61511-1 Clause 6)

| Phase | Description |
|---|---|
| 1 | Hazard and risk assessment |
| 2 | Allocation of safety functions to protection layers |
| 3 | SIS safety requirements specification (SRS) |
| 4 | SIS design and engineering |
| 5 | SIS installation, commissioning, validation |
| 6 | Operation and maintenance |
| 7 | Modification |
| 8 | Decommissioning |

*(Full 16-phase breakdown per Annex A — study Clause 6 for exam)*

---

## IPL criteria (ICAR)

| Criterion | Meaning |
|---|---|
| **I**ndependent | Does not share components with initiating event or other IPLs |
| **C**apable | Physically able to prevent the consequence |
| **A**uditable | Can be tested and documented |
| **R**eliable | PFD is quantifiable and meets the required target |

---

## Commonly confused pairs

| Concept A | Concept B | Key difference |
|---|---|---|
| IEC 61511 | IEC 61508 | 61511 = process sector end users; 61508 = device manufacturers |
| Verification | Validation | Verification = built it right; Validation = built the right thing |
| 1oo2 | 2oo3 | 1oo2 better availability (less spurious); 2oo3 better safety + availability balance |
| SIL (of SIF) | SIL (of device) | SIL applies to the function, not the device alone |
| BPCS | SIS | BPCS controls; SIS protects — must be independent |

---

## Last-minute review checklist

- [ ] SIL 1–4 PFD ranges recalled without reference
- [ ] LOPA 7-step method walked through on a sample scenario
- [ ] PFDavg formula for 1oo1 and 1oo2 recalled and applied
- [ ] SFF formula stated correctly
- [ ] ICAR criteria for IPLs recalled
- [ ] Safety lifecycle phases described at a high level
- [ ] Difference between IEC 61511 and IEC 61508 explained clearly

---

**Links:** [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Overview|Overview]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Syllabus|Syllabus]] · [[05-Resources/Courses/Process-Safety-IEC-61511/Process Safety (IEC 61511) — Progress|Progress Tracker]]
