# Zettelkasten

> The thinking layer of this vault. Ideas compound here.  
> Doing happens in `02-Quests`. Thinking happens here.

**Current state — June 2026:** 150 fleeting · 38 literature · 6 permanent · 4 MOCs
The infrastructure is built. 6 permanent notes written — target is 1/week. 150 fleeting notes need triage: process the valuable ones, delete the rest.

**Active MOCs:**
- [[06-Zettelkasten/MOC/Automation Engineering MOC|Automation Engineering MOC]] — 18 notes linked
- [[06-Zettelkasten/MOC/PKM and Zettelkasten MOC|PKM and Zettelkasten MOC]] — 45+ fleeting notes linked
- [[06-Zettelkasten/MOC/Personal Growth MOC|Personal Growth MOC]] — Dr K, habits, flow, focus

---

## Quick actions

| | |
|---|---|
| [New fleeting note](obsidian://advanced-uri?vault=Slip%20Box&filepath=06-Zettelkasten%2FFleeting%2FNew%20Fleeting.md) | Quick capture — process within 48h |
| [New literature note](obsidian://advanced-uri?vault=Slip%20Box&filepath=06-Zettelkasten%2FLiterature%2FNew%20Literature.md) | From a book, article, video |
| [New permanent note](obsidian://advanced-uri?vault=Slip%20Box&filepath=06-Zettelkasten%2FPermanent%2FNew%20Permanent.md) | One atomic claim |
| [New MOC](obsidian://advanced-uri?vault=Slip%20Box&filepath=06-Zettelkasten%2FMOC%2FNew%20MOC.md) | When a cluster gets too large |

---

## Slip box stats

```dataview
TABLE WITHOUT ID
  length(filter(rows, (r) => r.type = "fleeting")) AS "🗒 Fleeting",
  length(filter(rows, (r) => r.type = "literature")) AS "📖 Literature",
  length(filter(rows, (r) => r.type = "permanent")) AS "💡 Permanent",
  length(filter(rows, (r) => r.type = "moc")) AS "🗺 MOCs"
FROM "06-Zettelkasten"
WHERE type
GROUP BY true
```

---

## Fleeting inbox

> Process these or delete them. None should stay here longer than a week.

```dataview
TABLE WITHOUT ID
  link(file.path, file.name) AS Note,
  date AS Captured
FROM "06-Zettelkasten/Fleeting"
WHERE type = "fleeting"
SORT date ASC
```

---

## Review queue — revisit these ideas

> Permanent notes not touched in 30+ days. The slip box only compounds if you revisit and relink.

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Note,
  dateformat(file.mtime, "yyyy-MM-dd") AS "Last touched",
  length(file.outlinks) AS "Links out",
  length(file.inlinks) AS "Links in"
FROM "06-Zettelkasten/Permanent"
WHERE type = "permanent" AND date(file.mtime) <= date(today) - dur(30 days)
SORT file.mtime ASC
LIMIT 8
```

---

## Recent permanent notes

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Note,
  dateformat(date, "MMM d") AS Date,
  length(file.outlinks) AS "Links out"
FROM "06-Zettelkasten/Permanent"
WHERE type = "permanent"
SORT date DESC
LIMIT 10
```

---

## Notes needing links

> Permanent notes with fewer than 2 outbound links. Link them or rethink them.

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Note,
  length(file.outlinks) AS "Links out",
  length(file.inlinks) AS "Links in"
FROM "06-Zettelkasten/Permanent"
WHERE type = "permanent" AND length(file.outlinks) < 2
SORT length(file.outlinks) ASC
```

---

## Maps of Content

```dataview
LIST
FROM "06-Zettelkasten/MOC"
WHERE type = "moc"
SORT file.name ASC
```

---

## Literature notes

```dataview
TABLE WITHOUT ID
  link(file.path, title) AS Note,
  source-author AS Author,
  source-type AS Type,
  dateformat(date, "MMM d") AS Date
FROM "06-Zettelkasten/Literature"
WHERE type = "literature"
SORT date DESC
```

---

**Links:** [[00-Home/00-Home|Dashboard]]


**Procedure:** [[_docs/Zettelkasten — Complete Procedure|📋 Step-by-step guide]]