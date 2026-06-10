---
type: argenta-system
name: InBatch
system_type: Batch Management
vendor: Rockwell Automation
model: FactoryTalk Batch (InBatch)
version: 
building: SHA-2
location: 
ip_address: 
hostname: 
status: Active
updated: 2026-06-10
tags: [work, argenta, system, batch, rockwell, SCADA]
---

# InBatch (FactoryTalk Batch)

**Type:** Batch Management System  
**Vendor:** Rockwell Automation  
**Building:** SHA-2 (primary)

---

## Identity

| Field | Detail |
|---|---|
| IP Address | *(fill in)* |
| Hostname | *(fill in)* |
| Version | *(fill in)* |
| Server location | *(fill in)* |

---

## Access

| Field | Detail |
|---|---|
| Login method | OT Domain account |
| User groups | `InBatch_CompOperator`, `InBatch_CompOperatorLevel2` |
| Remote access | *(fill in)* |

---

## Architecture

Rockwell FactoryTalk Batch (formerly InBatch) manages batch recipes for compounding operations. Controls transfer recipes between vessels — e.g., `12V03_XFER2_BS` transfers from [[_reference/Work/Equipment/Tank-12V03|Tank 12V03]] to [[_reference/Work/Equipment/BS-Filler|B&S Filler]].

User access controlled via OT domain groups — see [[_reference/Work/Systems/OT Domain Controllers|OT Domain Controllers]].

---

## Program / Config location

| Item | Path / Location |
|---|---|
| Recipe files | *(fill in)* |
| Batch server | *(fill in)* |
| Last backed up | *(fill in)* |

---

## Known issues / history

- 

---

## Documentation

- [[07-Work-Knowledge/Processes/CCPC-1250 Q-26-0012-0198-00 B&S XFER Recipe 12V03_XFER2_BS IOQ|IOQ — B&S XFER Recipe 12V03]]
- [[_reference/Work/Systems/OT Domain Controllers|OT Domain Controllers]]

---

**Links:** [[_reference/Work/Systems/Systems|Systems Index]] | [[_reference/Work/Argenta-Site-Index|Site Index]]
