#!/usr/bin/env python3
"""
fix-gps-links.py  —  Slip Box vault repair script
==================================================
Fixes the \\| (backslash-pipe) alias separator bug in Raspberry Pi.md
and any other vault notes that have the same pattern.

The problem:
  [[Some Note\\|Alias]]   ← Obsidian reads target as "Some Note\\"
  [[Some Note|Alias]]    ← Correct Obsidian wikilink alias syntax

Run from inside your vault root:
  python fix-gps-links.py

Or specify a vault path:
  python fix-gps-links.py "/path/to/Slip Box"

The script:
  1. Scans all .md files for \\| inside [[ ]] wikilinks
  2. Shows a preview of every change
  3. Asks for confirmation before writing anything
  4. Makes a .bak backup of each modified file
"""

import os
import re
import sys
import shutil

# ── Config ────────────────────────────────────────────────────────────────────
VAULT = sys.argv[1] if len(sys.argv) > 1 else os.getcwd()
DRY_RUN = "--dry-run" in sys.argv

# Matches [[anything \| alias]] — the backslash before the pipe
PATTERN = re.compile(r'(\[\[[^\]]*?)\\(\|[^\]]*?\]\])')

# ── Scan ──────────────────────────────────────────────────────────────────────
print(f"Vault: {VAULT}")
print(f"Mode:  {'DRY RUN (no files changed)' if DRY_RUN else 'LIVE (will write files)'}")
print()

md_files = []
for root, dirs, files in os.walk(VAULT):
    dirs[:] = [d for d in dirs if not d.startswith('.')]
    for name in files:
        if name.endswith('.md'):
            md_files.append(os.path.join(root, name))

changes = []  # (filepath, old_content, new_content, matches)

for filepath in sorted(md_files):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        original = f.read()

    fixed = PATTERN.sub(r'\1\2', original)

    if fixed != original:
        matches = PATTERN.findall(original)
        rel = filepath.replace(VAULT + os.sep, '')
        changes.append((filepath, rel, original, fixed, matches))

# ── Report ────────────────────────────────────────────────────────────────────
if not changes:
    print("No backslash-pipe links found. Nothing to fix.")
    sys.exit(0)

print(f"Found {len(changes)} file(s) with \\| link syntax:\n")

for filepath, rel, original, fixed, matches in changes:
    print(f"  FILE: {rel}")
    for before, after in matches:
        link_before = before + '\\' + after
        link_after  = before + after
        print(f"    BEFORE: [[{link_before}")
        print(f"    AFTER:  [[{link_after}")
    print()

# ── Confirm ───────────────────────────────────────────────────────────────────
if DRY_RUN:
    print("Dry run complete. No files were changed.")
    print("Remove --dry-run to apply fixes.")
    sys.exit(0)

total_links = sum(len(m) for _, _, _, _, m in changes)
confirm = input(f"Fix {total_links} link(s) in {len(changes)} file(s)? [y/N] ").strip().lower()
if confirm != 'y':
    print("Aborted. No files changed.")
    sys.exit(0)

# ── Write ─────────────────────────────────────────────────────────────────────
for filepath, rel, original, fixed, matches in changes:
    # Backup
    shutil.copy2(filepath, filepath + '.bak')
    # Write fix
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed)
    print(f"  Fixed: {rel}  (backup: {os.path.basename(filepath)}.bak)")

print(f"\nDone. {total_links} link(s) fixed in {len(changes)} file(s).")
print("Backups saved as <filename>.md.bak — delete them once you've verified in Obsidian.")
