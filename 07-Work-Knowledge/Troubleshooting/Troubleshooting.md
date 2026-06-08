---
dataview-ignore: true
cover: "[[attachments/my-banner.jpg]]"
---


```base
layout: cards
imageProperty: cover
imageFit: cover
filters:
  and:
    - file.folder == this.file.folder
    - file.path != this.file.path
    - file.ext == "md"
views:
  - type: cards
    name: Cards
  - type: table
    name: Table
    order:
      - file.name
      - file.ctime
      - tags

```

---

# Troubleshooting

> Incident logs, root cause analyses, equipment repair records.
> Every session documented here is future reference and CAP exam material.

## How to log a troubleshooting session

```
## [Equipment / System] — [Date]
**Symptom:** What was observed
**Root cause:** What actually caused it
**Fix applied:** What was done
**Time to resolve:**
**Lessons learned:** What to watch for next time
```

Maps to **CAP Domain 4 (Execution)**.

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]

---

# Troubleshooting

> Incident logs and root cause analysis for equipment and systems at Argenta.
> Every troubleshooting session documented here is future reference and CAP exam material.

---

## How to create a new log

**Method 1 — Create in this folder (recommended)**
In the file panel, right-click `07-Work-Knowledge/Troubleshooting/` → New note. Templater auto-applies the template.

**Method 2 — Command palette**
`Ctrl+P` → "Templater: Create new note from template" → select "Troubleshooting Log Template"

**Naming convention:** `YYYY-MM-DD - Equipment Description`
Example: `2026-06-05 - CP12 Agitator Powerflex 753 Fault`

---

## Log index

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Incident,
  equipment AS Equipment,
  system_area AS "System",
  status AS Status,
  time_to_resolve + " min" AS "Time",
  dateformat(date, "MMM D") AS Date
FROM "07-Work-Knowledge/Troubleshooting"
WHERE type = "troubleshooting"
SORT date DESC
```

---

## Open incidents

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Incident,
  equipment AS Equipment,
  dateformat(date, "MMM D") AS Opened
FROM "07-Work-Knowledge/Troubleshooting"
WHERE type = "troubleshooting" AND status = "open"
SORT date ASC
```

---

## Root cause patterns

```dataview
TABLE WITHOUT ID
  fault_type AS "Fault Type",
  length(rows) AS "Count",
  round(average(rows.time_to_resolve)) + " min avg" AS "Avg Time"
FROM "07-Work-Knowledge/Troubleshooting"
WHERE type = "troubleshooting" AND fault_type
GROUP BY fault_type
SORT length(rows) DESC
```

---

## Template fields reference

| Field | Options | Purpose |
|---|---|---|
| `status` | `open` / `resolved` / `monitoring` | Drives the open incidents query |
| `fault_type` | `electrical` / `mechanical` / `software` / `network` / `process` | Pattern analysis |
| `recurrence` | `first-occurrence` / `recurring` | Flags repeat problems |
| `time_to_resolve` | integer (minutes) | Feeds averages table |

---

**Links:** [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[02-Quests/New-Role-Integration-Q3-2026|New Role Integration Quest]]
