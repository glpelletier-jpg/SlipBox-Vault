#!/usr/bin/env python3
"""
fix-orphaned-links.py  —  Slip Box vault repair
================================================
Converts orphaned wikilinks (links to notes that don't exist) to plain text.

Rules applied:
  [[Missing Note]]               → Missing Note
  [[Missing Note|Alias]]         → Alias
  [[path/to/Missing Note]]       → Missing Note   (basename only)
  [[path/to/Missing Note|Alias]] → Alias
  ![[missing-image.png]]         → [image: missing-image.png]
  ![[missing-note]]              → Missing Note   (plain text)

Links that resolve to existing notes are left untouched.
.base files are treated as resolvable (Bases plugin objects).

Usage:
  python fix-orphaned-links.py                    # uses current directory
  python fix-orphaned-links.py "/path/to/vault"   # explicit vault path
  python fix-orphaned-links.py --dry-run          # preview, no writes

IMPORTANT — run fix-gps-links.py first to fix the backslash-pipe issue,
then run this script. Running in the wrong order is safe but less clean.
"""

import os, re, sys, shutil, glob

VAULT   = next((a for a in sys.argv[1:] if not a.startswith('--')), os.getcwd())
DRY_RUN = '--dry-run' in sys.argv

# ── Unicode escape normalisation ──────────────────────────────────────────────
# Some filenames use literal "#U2014" where links use "—" (em dash), etc.
# Build a normalised lookup that maps both forms.
_UNICODE_ESCAPES = re.compile(r'#U([0-9A-Fa-f]{4})')

def normalise(s):
    """Lower-case + replace #UXXXX escape sequences with actual Unicode chars."""
    def repl(m):
        return chr(int(m.group(1), 16))
    return _UNICODE_ESCAPES.sub(repl, s).lower()

# ── Build the index of existing notes ─────────────────────────────────────────
def build_index(vault):
    idx = set()
    for f in glob.glob(vault + '/**/*.md',   recursive=True):
        name = os.path.splitext(os.path.basename(f))[0]
        idx.add(name.lower())        # raw lowercase
        idx.add(normalise(name))     # unicode-decoded lowercase
    for f in glob.glob(vault + '/**/*.base', recursive=True):
        name = os.path.splitext(os.path.basename(f))[0]
        idx.add(name.lower())
        idx.add(normalise(name))
    return idx

# ── Stubs we never touch ───────────────────────────────────────────────────────
SKIP_NAMES = {'my-banner', 'filename.pdf', 'file-link', 'author - title',
              'quest-name', 'note-name'}

def is_skip(target):
    name = normalise(os.path.splitext(os.path.basename(target.strip()))[0])
    if name in SKIP_NAMES:
        return True
    if target.strip().endswith('/'):   # folder-only links like [[02-Quests/]]
        return True
    return False

# ── Replacement logic ──────────────────────────────────────────────────────────
def make_replacement(target, alias, is_embed, existing):
    target = target.strip()
    alias  = alias.strip() if alias else ''

    if is_skip(target):
        return None

    name     = os.path.splitext(os.path.basename(target))[0]
    name_key = normalise(name)

    if name_key in existing:
        return None   # resolves — leave alone

    # Orphaned — convert to plain text
    if is_embed:
        ext = os.path.splitext(target)[1].lower()
        if ext in ('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.excalidraw', '.pdf'):
            return f'[image: {name}{ext}]'
        return alias if alias else name
    else:
        return alias if alias else name

# ── Regex patterns ─────────────────────────────────────────────────────────────
EMBED_RE = re.compile(r'!\[\[([^\]|#]+)(?:[|#]([^\]]*))?\]\]')
LINK_RE  = re.compile(r'\[\[([^\]|#]+)(?:[|#]([^\]]*))?\]\]')

def fix_content(content, existing):
    changes = []

    def replace_embed(m):
        target, alias = m.group(1), m.group(2) or ''
        rep = make_replacement(target, alias, is_embed=True, existing=existing)
        if rep is None:
            return m.group(0)
        changes.append((m.group(0), rep))
        return rep

    def replace_link(m):
        target, alias = m.group(1), m.group(2) or ''
        rep = make_replacement(target, alias, is_embed=False, existing=existing)
        if rep is None:
            return m.group(0)
        changes.append((m.group(0), rep))
        return rep

    fixed = EMBED_RE.sub(replace_embed, content)
    fixed = LINK_RE.sub(replace_link,  fixed)
    return fixed, changes

# ── Main ───────────────────────────────────────────────────────────────────────
print(f"Vault : {VAULT}")
print(f"Mode  : {'DRY RUN — no files written' if DRY_RUN else 'LIVE — files will be modified'}")
print()

existing = build_index(VAULT)
md_files = sorted(glob.glob(VAULT + '/**/*.md', recursive=True))

results = []
for fp in md_files:
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        original = f.read()
    fixed, changes = fix_content(original, existing)
    if changes:
        rel = fp.replace(VAULT + os.sep, '').replace(VAULT + '/', '')
        results.append((fp, rel, original, fixed, changes))

if not results:
    print("No orphaned links found. Vault is clean.")
    sys.exit(0)

total_changes = sum(len(r[4]) for r in results)
print(f"Found {total_changes} orphaned link(s) across {len(results)} file(s):\n")

for fp, rel, original, fixed, changes in results:
    print(f"  {rel}  ({len(changes)} change(s))")
    for before, after in changes[:5]:
        print(f"    {before}  →  {after}")
    if len(changes) > 5:
        print(f"    ... and {len(changes)-5} more")
print()

if DRY_RUN:
    print("Dry run complete. No files were written.")
    print("Run without --dry-run to apply.")
    sys.exit(0)

confirm = input(f"Apply {total_changes} change(s) to {len(results)} file(s)? [y/N] ").strip().lower()
if confirm != 'y':
    print("Aborted.")
    sys.exit(0)

for fp, rel, original, fixed, changes in results:
    shutil.copy2(fp, fp + '.bak')
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(fixed)
    print(f"  Fixed: {rel}")

print(f"\nDone. {total_changes} link(s) converted in {len(results)} file(s).")
print("Backups saved as <file>.md.bak — delete once verified in Obsidian.")
