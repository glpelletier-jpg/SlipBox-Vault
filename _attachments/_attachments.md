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

> 📋 **[[_attachments/Attachment Catalog|Attachment Catalog]]** — add a row here every time you drop a file into any subfolder.


# Attachments

> Binary files — PDFs, images, spreadsheets — that are linked from notes elsewhere in the vault.
> Obsidian is configured to save all dragged/pasted files here automatically.

---

## Subfolders

| Folder | What goes here |
|---|---|
| Work/ | Argenta SOPs, equipment manuals, datasheets, IOQ/OQ/PQ validation docs, vendor specs |
| Courses/ | Course materials, study guides, syllabi PDFs (HAM radio, MIT, etc.) |
| Personal/ | Insurance policies, medical records, tax docs, vehicle titles, legal papers |
| Books/ | Book PDFs, ebooks in PDF format |

---

## How to add a PDF

**Drag and drop** — drag any PDF into an open note in Obsidian. It saves here automatically and inserts a link `[image: filename.pdf]` at your cursor. The PDF opens in a split pane.

**Link manually** — if you've already placed a PDF here, type `[[` and start typing the filename. Obsidian will autocomplete it.

**From the file explorer** — right-click any `.pdf` file in the Obsidian file panel → "Insert as attachment link" to get the embed code.

---

## How to embed a PDF in a note

Paste this anywhere in a note to display the PDF inline:

```
[image: filename.pdf]
```

Or link to it without embedding (opens in a split pane on click):

```
filename
```

To open to a specific page, append `#page=5`:

```
[image: filename.pdf]
```

---

## PDF annotation

Obsidian's built-in PDF viewer supports:
- **Highlighting** — select text → right-click → Highlight
- **Comments** — right-click highlighted text → Add comment
- **Copy text** — select and copy directly from the viewer

Annotations are saved inside the PDF file itself, so they persist if you open the file externally (in Acrobat, Preview, etc.).

---

## Naming convention

Use descriptive filenames — Obsidian's search covers filenames:

| ✅ Good | ❌ Avoid |
|---|---|
| `ARRL-General-Class-License-Manual-10th.pdf` | `scan001.pdf` |
| `Argenta-Water-Production-SOP-v2.pdf` | `document.pdf` |
| `KB6NU-No-Nonsense-General-Guide-2023.pdf` | `guide(1).pdf` |

---

## Keeping attachments linked

**Rule:** every PDF here should be linked from at least one note. Orphaned PDFs are invisible to Obsidian's graph and search.

- Work manuals → link from the relevant `07-Work-Knowledge/` note
- Course PDFs → link from `05-Resources/Courses/[course]/` note
- Book PDFs → link from `05-Resources/Books/[book].md`
- Personal docs → link from `_reference/Personal/` note

**Finding orphaned attachments:** Settings → Files & Links → look for broken links, or use `Cmd+P` → "Find orphaned files".

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[07-Work-Knowledge/07-Work-Knowledge|Work Knowledge]] | [[05-Resources/Courses/Course Study Workflow|Course Study Workflow]]
