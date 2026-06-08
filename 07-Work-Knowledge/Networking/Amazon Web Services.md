---
title: Amazon Web Services
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting]
---

# Amazon Web Services

---

date: 2025-06-04 14:06:03
created: 2024-08-25 17:10:30
categories:

- Obsidian Files

---

## Amazon Web Services

[image: AWS-Logo-150.png] `BUTTON[sysengwiki]` `BUTTON[newawsnote]`

## Search 🔍

```text
INPUT[text:searchTerm]
```

## Results

```text
TABLE without id file.link as "List from Vault", 
tags as Tags, 
summary as Notes,
Date-Added as "Date Added",
source as "Source URL" 
FROM "03 Spaces/System Engineer Wiki/Amazon Web Services" OR #AWS
WHERE this.searchTerm != null AND 
this.searchTerm != "" AND 
(contains(lower(file.name), lower(this.searchTerm)) 
OR contains(lower(file.content), lower(this.searchTerm)) 
OR contains(lower(file.tags), lower(this.searchTerm))) 
SORT file.name ASC
```

## Full Directory

```text
TABLE 
tags as Tags, 
summary as Notes,
Date-Added as "Date Added",
source as "Source URL" 
FROM "03 Spaces/System Engineer Wiki/Amazon Web Services" OR #AWS
WHERE file.name !="Powershell Script Template" AND 
file.name !="Powershell Directory" 
SORT file.name ASC
LIMIT 20
```

```text
label: "⬅️ System Engineer Wiki"
icon: ""
hidden: true
class: ""
tooltip: ""
id: "sysengwiki"
style: default
actions:
  - type: open
    link: "System Engineer Wiki"
```

```text
label: "📥New AWS Note"
icon: ""
hidden: True
class: ""
tooltip: ""
id: "newawsnote"
style: default
actions:
  - type: templaterCreateNote
    templateFile: 06 Toolkit/Templates/SysAdmin AWS Template.md
    folderPath: 03 Spaces/System Engineer Wiki/Amazon Web Services
    fileName: "AWS - "
    openNote: true
```

