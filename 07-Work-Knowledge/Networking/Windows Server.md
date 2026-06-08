---
title: Windows Server
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting]
---

# Windows Server

---

date: 2025-06-04 14:06:03
created: 2024-08-24 22:39:46
categories:

- Obsidian Files

---

## Windows Server

[image: Server-Logo.png]

`BUTTON[sysengwiki]` `BUTTON[newservernote]`

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
FROM "03 Spaces/System Engineer Wiki/Microsoft/Windows Server" OR #WindowsServer
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
FROM "03 Spaces/System Engineer Wiki/Microsoft/Windows Server" OR #WindowsServer
WHERE file.name !="Sysadmin Windows Server Template"
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
label: "📥New Windows Server Note"
icon: ""
hidden: True
class: ""
tooltip: ""
id: "newservernote"
style: default
actions:
  - type: templaterCreateNote
    templateFile: 06 Toolkit/Templates/SysAdmin Windows Server Template.md
    folderPath: 03 Spaces/System Engineer Wiki/Microsoft/Windows Server
    fileName: "Windows Server - "
    openNote: true
```

