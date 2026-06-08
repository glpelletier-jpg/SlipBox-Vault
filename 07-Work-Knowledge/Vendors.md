---
title: Vendor Index
id: 20260605000011
date: 2026-06-05
type: reference
project: 
tags: [reference, vendors, automation, work]
---

# Vendor Index

> Every vendor you work with at Argenta — equipment, software, support contacts, and documentation links. One note; find anything fast.

---

## How to use this note

- **Finding a manual:** check the vendor's row → attachment subfolder link → open the `.base` view
- **Troubleshooting a product:** use the vault search or grep for the vendor name across `07-Work-Knowledge/`
- **Adding a new vendor:** copy any row below and fill it in; add PDFs using the [[_attachments/Work/Bulk Import Work Reference PDFs|Bulk Import guide]]

---

## Control Systems & PLCs

### Rockwell Automation / Allen-Bradley

> **Primary PLC vendor.** ControlLogix, CompactLogix, Powerflex VFDs, Point I/O, Studio 5000, FactoryTalk.

| | |
|---|---|
| **Products at Argenta** | ControlLogix 5580, CompactLogix 5380, Powerflex 755 VFDs, Point I/O modules |
| **Primary software** | Studio 5000 Logix Designer, FactoryTalk View SE/ME |
| **Documentation** | [[_attachments/Work/Automation/Automation|Automation attachments]] |
| **Vendor portal** | [rockwellautomation.com/support](https://www.rockwellautomation.com/en-us/support.html) |
| **Tech support** | 1-440-646-3434 |
| **Download center** | [compatibility.rockwellautomation.com](https://compatibility.rockwellautomation.com) |
| **Relevant notes** | [[07-Work-Knowledge/Automation/Controlers|Controllers]] · [[07-Work-Knowledge/Automation/CIP – The Common Industrial Protocol|CIP Protocol]] · [[07-Work-Knowledge/Automation/Working With Data Looping Through Arrays In A PLC|PLC Arrays]] |

**Key manuals to have on hand:**
- Powerflex 755 User Manual (1203-UM002)
- ControlLogix System User Manual (1756-UM001)
- Studio 5000 Logix Designer Programming Manual

---

### Siemens

> **BAS (Building Automation System) — Insight server, APOGEE controllers.**

| | |
|---|---|
| **Products at Argenta** | APOGEE BAS, Insight Server, SentinelLM license manager, InfoCenter |
| **Documentation** | [[_attachments/Work/Automation/Automation|Automation attachments]] |
| **Vendor portal** | [siemens.com/us/en/products/buildingtechnologies](https://www.siemens.com/us/en/products/buildingtechnologies.html) |
| **Relevant notes** | [[07-Work-Knowledge/Troubleshooting/Insight (BAS) License Repair|Insight BAS License Repair]] |

**Known issues / procedures:**
- License repair: [[07-Work-Knowledge/Troubleshooting/Insight (BAS) License Repair|Insight BAS License Repair]] — APOGEE license re-application via ApogeeLicense batch file

---

## Instrumentation & Field Devices

### Endress+Hauser

> **Primary instrumentation vendor.** Flow meters, level transmitters, pressure transmitters, temperature sensors.

| | |
|---|---|
| **Products at Argenta** | Promag flow meters, Cerabar pressure transmitters, iTHERM temperature, Liquipoint level |
| **Documentation** | [[_attachments/Work/Vendor-Specs/Vendor-Specs|Vendor Specs attachments]] |
| **Vendor portal** | [endress.com/en/contact](https://www.endress.com/en/contact) |
| **Product finder** | [portal.endress.com](https://portal.endress.com) |
| **Relevant notes** | [[07-Work-Knowledge/Automation/Instruments in Automation|Instruments in Automation]] |

**Key document types:**
- Technical Information (TI) — product specifications
- Operating Instructions (BA) — installation and commissioning
- Brief Operating Instructions (KA) — quick reference

---

### Pepperl+Fuchs

> **IO-Link masters, proximity sensors, safety sensors, fieldbus infrastructure.**

| | |
|---|---|
| **Products at Argenta** | IO-Link masters, inductive proximity sensors, photoelectric sensors |
| **Documentation** | [[_attachments/Work/Vendor-Specs/Vendor-Specs|Vendor Specs attachments]] |
| **Vendor portal** | [pepperl-fuchs.com](https://www.pepperl-fuchs.com/usa/en/index.htm) |
| **IO-Link product catalog** | [pepperl-fuchs.com/io-link](https://www.pepperl-fuchs.com/usa/en/products/io-link.htm) |
| **Relevant notes** | [[07-Work-Knowledge/Automation/IO-Link|IO-Link]] |

---

### SICK

> **Safety systems, light curtains, laser scanners, encoder feedback.**

| | |
|---|---|
| **Products at Argenta** | Safety light curtains, laser scanners |
| **Documentation** | [[_attachments/Work/Vendor-Specs/Vendor-Specs|Vendor Specs attachments]] |
| **Vendor portal** | [sick.com/us/en](https://www.sick.com/us/en) |
| **Product portal** | [productselection.sick.com](https://productselection.sick.com) |

---

## Networking & Infrastructure

### Cisco

> **OT/IT network infrastructure — managed switches, routers, access points.**

| | |
|---|---|
| **Products at Argenta** | Industrial Ethernet switches (IE series), managed switches |
| **Documentation** | [[_attachments/Work/Networking/Networking|Networking attachments]] |
| **Vendor portal** | [cisco.com/go/industrial](https://www.cisco.com/c/en/us/solutions/internet-of-things/industrial-networking.html) |
| **Relevant notes** | [[07-Work-Knowledge/Networking/IT and OT Networks|IT and OT Networks]] |

---

### Microsoft

> **Windows Server, Active Directory, OT domain, Power Automate.**

| | |
|---|---|
| **Products at Argenta** | Windows Server (OT domain), Active Directory, Windows 11 endpoints, Power Automate |
| **Documentation** | [[_attachments/Work/Networking/Networking|Networking attachments]] |
| **Relevant notes** | [[07-Work-Knowledge/Networking/Windows Server|Windows Server]] · [[07-Work-Knowledge/Networking/Windows 11 Power Automate|Power Automate]] · [[07-Work-Knowledge/Networking/Windows 11 Clean installation|Win11 Clean Install]] |

---

### Amazon Web Services

> **Cloud infrastructure — any cloud-connected systems or SCADA offsite components.**

| | |
|---|---|
| **Relevant notes** | [[07-Work-Knowledge/Networking/Amazon Web Services|Amazon Web Services]] |
| **Console** | [console.aws.amazon.com](https://console.aws.amazon.com) |

---

## Validation & Calibration

### Beamex / Fluke / Other Calibration Vendors

> **Calibration equipment for instrumentation validation (IQ/OQ/PQ).**

| | |
|---|---|
| **Documentation** | [[_attachments/Work/Processes/Processes|Processes attachments]] |
| **Relevant notes** | [[07-Work-Knowledge/Processes/Processes|Processes]] · [[07-Work-Knowledge/CAP-Certification/CAP-Certification|CAP Certification]] |

---

## Software

### AVEVA / Wonderware

> **SCADA / HMI software — InTouch, System Platform, Historian.**

| | |
|---|---|
| **Vendor portal** | [aveva.com/en/products](https://www.aveva.com/en/products/) |
| **Documentation** | [[_attachments/Work/Automation/Automation|Automation attachments]] |

---

## Dataview — vendor notes across the vault

```dataview
TABLE
  title AS "Note",
  file.folder AS "Location",
  tags AS "Tags"
FROM "07-Work-Knowledge"
WHERE contains(tags, "vendor") OR contains(tags, "hardware") OR contains(tags, "manual")
SORT file.mtime DESC
```

---

## Adding a vendor

When you work with a new vendor for the first time:

1. Add a row to the relevant section above (or create a new section)
2. Drop any PDFs from them into `_attachments/Work/Vendor-Specs/` using the [[_attachments/Work/Bulk Import Work Reference PDFs|Bulk Import guide]]
3. Add `vendor: [VendorName]` to the frontmatter of any attachment companion notes for their products
4. If the product is significant, create a dedicated note in `07-Work-Knowledge/Automation/` or `07-Work-Knowledge/Networking/` with `tags: [vendor, hardware]` so the Dataview query above picks it up

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] · [[_attachments/Work/Work|Work Attachments]] · [[06-Zettelkasten/MOC/Automation Engineering MOC|Automation MOC]]
