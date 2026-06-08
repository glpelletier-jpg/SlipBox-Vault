---
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
type: troubleshooting
equipment: 
system_area: 
fault_type: 
status: open
time_to_resolve: 
recurrence: first-occurrence
tags: [troubleshooting, work]
---

# <% tp.file.title %>

**Date:** <% tp.date.now("dddd, MMMM D, YYYY · HH:mm") %>
**Equipment:** *(fill in)*
**Location:** *(fill in)*
**Status:** 🔴 Open

---

## 1. Symptom

> *What did you observe? Be specific — alarm codes, readings, behaviors. What triggered the call?*

-

**Fault code / alarm:** *(if applicable)*
**Process impact:** *(line down / degraded / no immediate impact)*

---

## 2. Equipment details

| Field | Value |
|---|---|
| Equipment name | |
| Model / part number | |
| Serial number | |
| Location / tag | |
| Last known good | |
| Hours / cycles | |

---

## 3. Initial observations

> *What did you check first? What were conditions when you arrived?*

-
-
-

**Measurements taken:**

| Measurement | Expected | Actual | Status |
|---|---|---|---|
| | | | |
| | | | |

---

## 4. Diagnostic steps

> *Number each step. Record what you did AND what you found. This is the most valuable section.*

1. **Checked:** → **Found:**
2. **Checked:** → **Found:**
3. **Checked:** → **Found:**
4. **Checked:** → **Found:**
5. **Checked:** → **Found:**

---

## 5. Root cause

> *The actual cause — not the symptom. Ask "why" at least 3 times before writing this.*

**Root cause:**

**Contributing factors:**
-
-

**Why it wasn't caught earlier:**

---

## 6. Fix applied

> *Exactly what was done to resolve it. Specific enough that someone else could repeat it.*

**Actions taken:**
1.
2.
3.

**Parts replaced / changed:**

| Part | Part number | Quantity |
|---|---|---|
| | | |

**Settings modified:**

---

## 7. Verification

> *How did you confirm the fix worked? What did you check after the repair?*

-
-

**Confirmed working at:** <% tp.date.now("HH:mm") %> *(update this)*
**Confirmed by:**

---

## 8. Time log

| Phase | Start | End | Duration |
|---|---|---|---|
| Arrived / assessed | <% tp.date.now("HH:mm") %> | | |
| Diagnostics | | | |
| Repair | | | |
| Verification | | | |
| **Total** | | | |

**Total time to resolve:** *(copy to `time_to_resolve:` frontmatter in minutes)*

---

## 9. Root cause category

*Check one — used for pattern analysis across incidents*

- [ ] Component failure (wear / age / defect)
- [ ] Installation / wiring issue
- [ ] Software / configuration error
- [ ] Process / operator error
- [ ] Environmental (heat, vibration, contamination)
- [ ] Maintenance gap (PM not done / overdue)
- [ ] Design limitation
- [ ] Unknown / intermittent

---

## 10. Lessons learned

> *What would you do differently? What should anyone know before working on this equipment?*

**Key insight:**

**What to check first next time:**

**Documentation gap identified:**

---

## 11. Prevention recommendations

> *What change would prevent recurrence? Even if you can't implement it now, write it.*

- [ ] Add to PM checklist: *(describe)*
- [ ] Update procedure / SOP: *(describe)*
- [ ] Replace proactively: *(describe)*
- [ ] Monitor / trend: *(describe)*
- [ ] No action needed — acceptable failure mode

---

## 12. Follow-up actions

*Tasks created from this incident — they will appear in Todoist/Obsidian task views*

- [ ] *(Follow-up action 1)* 📅 <% tp.date.now("YYYY-MM-DD") %>
- [ ] *(Follow-up action 2)*
- [ ] Update quest progress if this relates to New Role Integration

---

## 13. Related documentation

- [[07-Work-Knowledge/Troubleshooting/Troubleshooting|Troubleshooting folder]]
- [[07-Work-Knowledge/Automation/Automation|Work Knowledge / Automation]]
- *(Add links to relevant manuals in _attachments/Work/)*
- *(Add links to other troubleshooting logs for same equipment)*

---

**Links:** [[07-Work-Knowledge/Troubleshooting/Troubleshooting|Troubleshooting]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]
