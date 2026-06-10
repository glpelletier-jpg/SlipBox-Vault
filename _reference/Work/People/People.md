---
type: reference
tags: [work, argenta, people, reference]
updated: 2026-06-09
---

# Argenta — People

> One note per person. Create new: `Ctrl+P` → "New note" in this folder, then apply **Argenta-Person** template.

---

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

**Links:** [[_reference/Work/Argenta-Site-Index|Site Index]] | [[_reference/Work/Systems/Systems|Systems]] | [[_reference/Work/Locations/Locations|Locations]] | [[_reference/Work/Equipment/Equipment|Equipment]]
