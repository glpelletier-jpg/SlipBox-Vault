---
type: argenta-system
name: OT Domain Controllers
system_type: IT Infrastructure
vendor: Microsoft
model: Windows Server (Active Directory)
version: 
building: Both
location: Server room
ip_address: 
hostname: SHA-MFG_DC1, SHA-MFG_DC2
status: Active
updated: 2026-06-10
tags: [work, argenta, system, OT, domain, active-directory]
---

# OT Domain Controllers

**Type:** OT Active Directory Domain Controllers  
**Vendor:** Microsoft / Windows Server  
**Building:** Both (SHA-1 and SHA-2)

---

## Identity

| Field | Detail |
|---|---|
| Primary DC | `SHA-MFG_DC1` |
| Secondary DC | `SHA-MFG_DC2` |
| Legacy DC | `SAH2PCSDC1R2` (old — SHA-2 production, 90% of user accounts) |
| Domain name | SHA-MFG (inferred) |
| IP Addresses | *(fill in)* |

---

## Access

| Field | Detail |
|---|---|
| Login method | Windows domain admin |
| Credential hint | *(hint only)* |
| Remote access | RDP |

---

## Architecture

Two-controller redundant OT domain. `SHA-MFG_DC1` and `SHA-MFG_DC2` are the current production domain controllers. `SAH2PCSDC1R2` is the legacy SHA-2 domain controller — still used for production personnel accounts (covers ~90% of user requests).

User provisioning is governed by Production Systems Access Request Form. Groups assigned per area:
- **Operator** = `InBatch_CompOperator`
- **Operator Level 2** = `InBatch_CompOperatorLevel2`

---

## Program / Config location

| Item | Path / Location |
|---|---|
| User request form | CAF 2nd floor storage room |
| CWID Assignment Sheet | *(find location)* |

---

## Known issues / history

- Legacy DC `SAH2PCSDC1R2` still in use — migration status unknown

---

## Documentation

- [[07-Work-Knowledge/Processes/Add a new user to OT Domain|Add a new user to OT Domain (procedure)]]

---

**Links:** [[_reference/Work/Systems/Systems|Systems Index]] | [[_reference/Work/Argenta-Site-Index|Site Index]]
