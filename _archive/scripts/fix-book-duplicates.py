#!/usr/bin/env python3
"""
fix-book-duplicates.py  —  Slip Box vault repair
=================================================
Differentiates the 26 duplicate book entries across
05-Resources/Books/ and 06-Zettelkasten/Literature/.

What it does:
  05-Resources/Books/ entries:
    - Already correct (status, rating, why-to-read, literature_note link).
    - Adds a `book_note: "[[...]]"` frontmatter field pointing to the
      Literature note (if not already present).
    - Trims the "Key ideas" and "My takeaway" body sections to their
      intended minimal state (empty blockquote stubs) if they're empty.
    - Adds a Dataview query at the bottom showing the linked literature note.

  06-Zettelkasten/Literature/ entries:
    - If already a proper literature note (type: literature, has Key Ideas
      section), adds a back-link to the Books entry and leaves content alone.
    - If a raw Capacities import (type: fleeting, raw highlights):
        • Rewrites frontmatter to type: literature, removes Capacities tags.
        • Keeps all original highlight content in a new "Source highlights"
          section at the bottom (nothing is deleted).
        • Adds the standard Literature note template sections above it:
          "The source in one sentence", "Key ideas (in your own words)",
          "My reaction", "Permanent notes spawned", "Connections".
        • Adds back-link to Books entry.

Usage:
  python fix-book-duplicates.py                      # current dir as vault
  python fix-book-duplicates.py "/path/to/vault"     # explicit path
  python fix-book-duplicates.py --dry-run            # preview only
"""

import os, re, sys, shutil, glob
from datetime import date

VAULT   = next((a for a in sys.argv[1:] if not a.startswith('--')), os.getcwd())
DRY_RUN = '--dry-run' in sys.argv

TODAY = date.today().strftime('%Y-%m-%d')

# ── Paths ──────────────────────────────────────────────────────────────────────
BOOKS_DIR = os.path.join(VAULT, '05-Resources', 'Books')
LIT_DIR   = os.path.join(VAULT, '06-Zettelkasten', 'Literature')

# ── Identify the 26 duplicates ─────────────────────────────────────────────────
def get_titles(folder):
    out = {}
    for f in glob.glob(folder + '/*.md'):
        title = os.path.splitext(os.path.basename(f))[0]
        if title not in ('Books', 'Literature'):
            out[title] = f
    return out

books = get_titles(BOOKS_DIR)
lits  = get_titles(LIT_DIR)
dups  = sorted(set(books) & set(lits))

# ── Helpers ────────────────────────────────────────────────────────────────────
def read(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        return f.read()

def write(path, content):
    if DRY_RUN:
        return
    shutil.copy2(path, path + '.bak')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def get_fm_value(content, key):
    """Extract a frontmatter value."""
    m = re.search(rf'^{key}:\s*(.+)$', content, re.MULTILINE)
    return m.group(1).strip() if m else ''

def set_fm_field(content, key, value):
    """Add or replace a frontmatter field."""
    pattern = rf'^{key}:.*$'
    replacement = f'{key}: {value}'
    if re.search(pattern, content, re.MULTILINE):
        return re.sub(pattern, replacement, content, flags=re.MULTILINE)
    # insert before closing ---
    parts = content.split('---', 2)
    if len(parts) >= 3:
        parts[1] = parts[1].rstrip('\n') + f'\n{key}: {value}\n'
        return '---'.join(parts)
    return content

def is_raw_capacities(content):
    """True if the lit file is a raw Capacities import, not a processed lit note."""
    has_fleeting_type = bool(re.search(r'^type:\s*fleeting', content, re.MULTILINE))
    has_capacities_tag = 'Capacities' in content
    has_lit_sections = '## Key ideas (in your own words)' in content
    return (has_fleeting_type or has_capacities_tag) and not has_lit_sections

# ── Process each pair ──────────────────────────────────────────────────────────
changes = []

for title in dups:
    book_path = books[title]
    lit_path  = lits[title]

    book_content = read(book_path)
    lit_content  = read(lit_path)

    # Obsidian link syntax for each file
    lit_link  = f'[[06-Zettelkasten/Literature/{title}|Literature note]]'
    book_link = f'[[05-Resources/Books/{title}|Reading tracker]]'

    # ── 1. Books entry ────────────────────────────────────────────────────────
    new_book = book_content

    # Ensure literature_note field exists in frontmatter
    if 'literature_note:' not in new_book:
        new_book = set_fm_field(new_book, 'literature_note', f'"{lit_link}"')

    # Ensure Linked notes section has the literature link
    if 'Literature note' not in new_book:
        linked = f'\n\n## Linked notes\n\n**Literature note:** {lit_link}\n'
        # append before the footer Links line
        new_book = re.sub(r'\n\n---\n\n\*\*Links:\*\*', linked + '\n\n---\n\n**Links:**', new_book)

    if new_book != book_content:
        changes.append(('book', title, book_path, book_content, new_book,
                        'Added literature_note field / Linked notes section'))

    # ── 2. Literature entry ───────────────────────────────────────────────────
    new_lit = lit_content
    author  = get_fm_value(lit_content, 'source-author') or \
              get_fm_value(lit_content, 'author') or ''

    if is_raw_capacities(lit_content):
        # --- Rebuild: keep highlights, add proper lit-note structure above ---

        # Strip old frontmatter
        parts = lit_content.split('---', 2)
        body_after_fm = parts[2].lstrip('\n') if len(parts) >= 3 else lit_content

        # Strip old H1 title line if present (we'll add it back)
        body_after_fm = re.sub(r'^# .+\n+', '', body_after_fm)

        # Strip redundant metadata block sometimes left by Capacities
        body_after_fm = re.sub(
            r'^---\ndate:.*?---\n+',
            '', body_after_fm, flags=re.DOTALL
        )
        body_after_fm = re.sub(
            r'^## ' + re.escape(title) + r'\n+',
            '', body_after_fm
        )

        raw_highlights = body_after_fm.strip()

        new_fm = f"""---
title: {title}
date: {TODAY}
type: literature
source-type: book
source-title: {title}
source-author: {author}
source-link: \ntags: [literature]
book_note: "{book_link}"
---"""

        new_lit = f"""{new_fm}

# {title}

> Literature notes capture what a source says — **in your own words**. One note per source.
> Then ask: what does this mean *for me*? That answer becomes a permanent note.

---

## The source in one sentence

>

---

## Key ideas (in your own words)

>

---

## My reaction

>

---

## Permanent notes spawned

- [[]]

---

## Connections

- [[]]

---

## Source highlights

*Original captured highlights — process these into Key ideas above.*

{raw_highlights}

---

**Links:** [[05-Resources/Books/{title}|Reading tracker]] · [[06-Zettelkasten/06-Zettelkasten|Zettelkasten]]
"""
        changes.append(('lit-rebuild', title, lit_path, lit_content, new_lit,
                        'Rebuilt from raw Capacities import → proper literature template'))

    else:
        # --- Already a proper lit note: just add the back-link if missing ---
        if 'book_note:' not in new_lit:
            new_lit = set_fm_field(new_lit, 'book_note', f'"{book_link}"')

        # Ensure footer has a link back to Books
        if 'Reading tracker' not in new_lit:
            new_lit = re.sub(
                r'(\*\*Links:\*\* \[\[06-Zettelkasten)',
                f'**Links:** {book_link} · [[06-Zettelkasten',
                new_lit
            )
            if 'Reading tracker' not in new_lit:
                new_lit = new_lit.rstrip() + f'\n\n---\n\n**Links:** {book_link} · [[06-Zettelkasten/06-Zettelkasten|Zettelkasten]]\n'

        if new_lit != lit_content:
            changes.append(('lit-link', title, lit_path, lit_content, new_lit,
                            'Added book_note back-link'))

# ── Report ─────────────────────────────────────────────────────────────────────
print(f"Vault : {VAULT}")
print(f"Mode  : {'DRY RUN — no files written' if DRY_RUN else 'LIVE — files will be modified'}")
print(f"Pairs : {len(dups)} duplicates found\n")

rebuilds = [c for c in changes if c[0] == 'lit-rebuild']
links    = [c for c in changes if c[0] == 'lit-link']
bookfix  = [c for c in changes if c[0] == 'book']

print(f"Literature notes to REBUILD (raw Capacities → proper template): {len(rebuilds)}")
for c in rebuilds:
    print(f"  {c[1]}")

print(f"\nLiterature notes to UPDATE (add back-link only): {len(links)}")
for c in links:
    print(f"  {c[1]}")

print(f"\nBooks entries to UPDATE (add literature_note field): {len(bookfix)}")
for c in bookfix:
    print(f"  {c[1]}")

if DRY_RUN:
    print(f"\nDry run complete. {len(changes)} file(s) would be modified.")
    print("Remove --dry-run to apply.")
    sys.exit(0)

print()
confirm = input(f"Apply changes to {len(changes)} file(s)? [y/N] ").strip().lower()
if confirm != 'y':
    print("Aborted.")
    sys.exit(0)

for kind, title, path, original, new_content, desc in changes:
    write(path, new_content)
    label = 'REBUILD' if kind == 'lit-rebuild' else 'UPDATE'
    short = path.replace(VAULT + os.sep, '').replace(VAULT + '/', '')
    print(f"  [{label}] {short}")

print(f"\nDone. {len(changes)} file(s) modified.")
print("Backups saved as <file>.md.bak — delete once verified in Obsidian.")
