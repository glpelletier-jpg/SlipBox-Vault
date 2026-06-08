---
title: CP 12 Bottom Agitator - PowerFlex 753 Fault
date: 2026-06-05
time: 
type: troubleshooting
equipment: PowerFlex 753 VFD
system_area: CP 12 Bottom Agitator
fault_type: 
status: open
time_to_resolve: 
recurrence: first-occurrence
tags: [troubleshooting, work, VFD, powerflex, argenta]
---

# CP 12 Bottom Agitator — PowerFlex 753 Fault

**Date:** June 5, 2026
**Equipment:** PowerFlex 753 VFD — CP 12 Bottom Agitator
**Location:** *(fill in — area/room in Argenta facility)*
**Status:** 🔴 Open — *Gary Tebow departed June 5; capture everything you know*

> **Context:** Gary Tebow was the previous automation engineer and held knowledge about this issue. He left June 5, 2026. Capture all known details now before memory fades.

---

## 1. Symptom

> *What did you observe? Be specific — alarm codes, readings, behaviors. What triggered the call?*

-

**Fault code / alarm:** *(fill in — e.g., "Fault 12 — HW OC" or similar PowerFlex fault)*
**Process impact:** *(line down / degraded / no immediate impact)*

---

## 2. Equipment details

| Field | Value |
|---|---|
| Equipment name | CP 12 Bottom Agitator |
| Drive model | PowerFlex 753 |
| Drive catalog number | *(fill in — e.g., 20F1AND077AA0NNNNN)* |
| Serial number | *(fill in from drive nameplate)* |
| Location / tag | *(fill in — panel/MCC location)* |
| Motor nameplate HP | *(fill in)* |
| Motor nameplate FLA | *(fill in)* |
| Drive parameter file | *(file location or "not backed up")* |
| Last known good | *(fill in — when was it last running normally?)* |

---

## 3. Initial observations

> *What do you know from Gary or from your own observations?*

-
-
-

**What Gary said before leaving:**

> *(Write anything Gary communicated about this issue — verbally or in writing)*

**Measurements taken:**

| Measurement | Expected | Actual | Status |
|---|---|---|---|
| Output current | | | |
| DC bus voltage | | | |
| Motor resistance L1-L2 | | | |
| Motor resistance L2-L3 | | | |

---

## 4. Diagnostic steps

> *Number each step. Record what you did AND what you found.*

1. **Checked:** → **Found:**
2. **Checked:** → **Found:**
3. **Checked:** → **Found:**

**PowerFlex 753 — Quick fault diagnosis reference:**
- Parameter 951 (Fault 1 — most recent) → read and record
- Parameter 952–960 (Fault history 2–10) → check for pattern
- Parameter 81 (Output Current) → at fault vs. normal
- Parameter 6 (Output Voltage) → at fault vs. normal

---

## 5. Root cause

> *(Leave blank until diagnosed)*

**Root cause:**

**Contributing factors:**
-

---

## 6. Fix applied

> *(Leave blank until resolved)*

**Actions taken:**

**Parts replaced / changed:**

| Part | Part number | Quantity |
|---|---|---|
| | | |

---

## 7. Verification

- [ ] Drive runs through full speed range without fault 🆔 IPOTFN
- [ ] Motor current within nameplate limits 🆔 LIZj1V
- [ ] No fault codes in fault history after verification run 🆔 eeid4A
- [ ] Parameter file backed up to *(location)* 🆔 H326Xw

**Confirmed working at:**
**Confirmed by:**

---

## 8. Time log

| Phase | Start | End | Duration |
|---|---|---|---|
| Arrived / assessed | | | |
| Diagnostics | | | |
| Repair | | | |
| Verification | | | |
| **Total** | | | |

---

## 9. Root cause category

- [ ] Component failure (wear / age / defect) 🆔 0iRVt9
- [ ] Installation / wiring issue 🆔 4YOfhu
- [ ] Software / configuration error 🆔 PxbR0X
- [ ] Process / operator error 🆔 5n2rHB
- [ ] Environmental (heat, vibration, contamination) 🆔 1Ko4TC
- [ ] Maintenance gap (PM not done / overdue) 🆔 FiBp8m
- [ ] Design limitation 🆔 YFh69D
- [ ] Unknown / intermittent 🆔 CjPuyF

---

## 10. Lessons learned

**Key insight:**

**What to check first next time:**

**Documentation gap identified:** Parameter backup may not exist — add to immediate action list.

---

## 11. Prevention recommendations

- [ ] Back up drive parameters to file: *(save to `_attachments/Work/Automation/`)* 🆔 TrbuqI
- [ ] Add to PM checklist: check drive fault history monthly 🆔 oTq4Nq
- [ ] Verify motor insulation resistance annually (megger test) 🆔 S2OIkY
- [ ] *(Other — fill in after root cause known)* 🆔 tzAgke

---

## 12. Follow-up actions

- [x] Read and record fault history (parameters 951–960) 📅 2026-06-06 ✅ 2026-06-06
- [x] Pull drive parameter backup — if none exists, create one 📅 2026-06-06 ✅ 2026-06-06
- [x] Check with maintenance/operations for incident history on this drive 📅 2026-06-06 ✅ 2026-06-06
- [ ] Update [[_reference/Work/Key Systems|Key Systems]] with drive details once known 🆔 suxUAq
- [ ] Update quest progress for New Role Integration Q3 🆔 3XaiNY

---

## 13. Related documentation

- [[07-Work-Knowledge/Troubleshooting/Troubleshooting|Troubleshooting folder]]
- [[_reference/Work/Key Systems|Key Systems — Argenta]]
- [[_attachments/Work/Automation/|Rockwell manuals — check for PowerFlex 753 user manual]]
- *PowerFlex 753 User Manual: Pub 750-UM001 (Rockwell)*

---

**Links:** [[07-Work-Knowledge/Troubleshooting/Troubleshooting|Troubleshooting]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]
