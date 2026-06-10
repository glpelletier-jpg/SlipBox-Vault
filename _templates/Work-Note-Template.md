---
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
type: work-note
building: ""
area: ""
system: ""
equipment: ""
device: ""
status: open
priority: normal
linked_todoist: ""
work_order: ""
promoted_to: ""
tags: [work-note]
---

# <% tp.file.title %>

**Date:** <% tp.date.now("dddd, MMMM D, YYYY · HH:mm") %>
**Building:** *(fill in — SHA 1 / SHA 2)*
**Area:** *(fill in — room, zone, suite)*
**System:** *(fill in — production / OT-network / utilities / HVAC)*
**Equipment:** *(fill in — machine or system name)*
**Device:** *(fill in — specific instrument, drive, PLC, switch, etc.)*
**Work Order:** *(CMMS WO# if applicable)*
**Todoist Task:** *(task ID if applicable)*

---

## Issue

> *Describe the issue, observation, or task that triggered this note. Be specific — system state, alarm text, visual condition, reported symptom, or evaluation scope.*

**Observed condition:**

**Process impact:** *(running / degraded / stopped / no impact / evaluation only)*

---

## Note

> *Working notes — what you did, what you found, what you're thinking. Update this as work progresses. It's okay to be messy here — this is your field scratch pad.*

### Observations



### Actions taken



### Measurements / readings

| Point | Expected | Actual | Notes |
|---|---|---|---|
| | | | |
| | | | |

### Next steps

- [ ] 
- [ ] 

---

**Links:** [[08-Work-Notes/08-Work-Notes|Work Notes]] | [[07-Work-Knowledge/Troubleshooting/Troubleshooting|Troubleshooting]]
<%*
// Auto-move: names file WN-YYYYMMDDHHmm and places it in 08-Work-Notes
await tp.file.move("08-Work-Notes/WN-" + tp.date.now("YYYYMMDDHHmm"))
%>
