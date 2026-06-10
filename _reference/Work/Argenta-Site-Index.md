---
type: reference
tags: [work, argenta, reference, index]
updated: 2026-06-09
---

# Argenta — Site Index

*SHA 1 · SHA 2 · People · Locations · Systems · Equipment*

> **Add new entities:** Create a note in the appropriate subfolder and apply the template.
> Templates: `Argenta-Person` · `Argenta-Location` · `Argenta-System` · `Argenta-Equipment`

---

## People

```dataview
TABLE WITHOUT ID
  link(file.path, name) AS "Name",
  role AS "Role",
  department AS "Department",
  building AS "Building",
  status AS "Status"
FROM "_reference/Work/People"
WHERE type = "argenta-person"
SORT department ASC, name ASC
```

---

## Locations

### SHA-1

```dataview
TABLE WITHOUT ID
  link(file.path, name) AS "Area / Room",
  floor AS "Floor / Zone",
  function AS "Function"
FROM "_reference/Work/Locations"
WHERE type = "argenta-location" AND building = "SHA-1"
SORT name ASC
```

### SHA-2

```dataview
TABLE WITHOUT ID
  link(file.path, name) AS "Area / Room",
  floor AS "Floor / Zone",
  function AS "Function"
FROM "_reference/Work/Locations"
WHERE type = "argenta-location" AND building = "SHA-2"
SORT name ASC
```

### Unassigned (fill in building field)

```dataview
TABLE WITHOUT ID
  link(file.path, name) AS "Area / Room",
  building AS "Building",
  function AS "Function"
FROM "_reference/Work/Locations"
WHERE type = "argenta-location" AND (!building OR building = "")
SORT name ASC
```

---

## Systems

```dataview
TABLE WITHOUT ID
  link(file.path, name) AS "System",
  system_type AS "Type",
  vendor AS "Vendor",
  building AS "Building",
  location AS "Location",
  status AS "Status"
FROM "_reference/Work/Systems"
WHERE type = "argenta-system"
SORT system_type ASC, name ASC
```

---

## Equipment

```dataview
TABLE WITHOUT ID
  tag_number AS "Tag",
  link(file.path, description) AS "Description",
  equipment_type AS "Type",
  manufacturer AS "Manufacturer",
  building AS "Building",
  location AS "Location",
  status AS "Status"
FROM "_reference/Work/Equipment"
WHERE type = "argenta-equipment"
SORT tag_number ASC
```

---

## Quick nav

| Category | Folder |
|---|---|
| People | [[_reference/Work/People/People\|People →]] |
| Locations | [[_reference/Work/Locations/Locations\|Locations →]] |
| Systems | [[_reference/Work/Systems/Systems\|Systems →]] |
| Equipment | [[_reference/Work/Equipment/Equipment\|Equipment →]] |

---

**Links:** [[00-Home/00-Home\|Dashboard]] | [[_reference/Work/Contacts\|Contacts (legacy)]] | [[_reference/Work/Key Systems\|Key Systems (legacy)]] | [[_reference/Work/Site Map\|Site Map (legacy)]]
