#!/usr/bin/env python3
"""
vault-zip-export.py — Create a portable ZIP of the Slip Box vault with correct UTF-8 filenames.

WHY THIS EXISTS:
  Windows built-in "Send to Compressed folder" and PowerShell Compress-Archive both
  write ZIP local-file headers using cp437 encoding. If your vault has em dashes (—),
  smart quotes ('), or emoji in filenames, those characters get mojibake'd when the ZIP
  is extracted by unzip on Linux/macOS or uploaded to tools like Claude.

  Python's zipfile module sets the UTF-8 flag (bit 11) in BOTH the local and central
  directory headers, which is the correct per-spec behaviour. 7-Zip with -mcu=on does
  the same thing. Nothing else on Windows does.

USAGE (from Command Prompt or PowerShell, run from C:\Vault\):
  python "Slip Box\_scripts\vault-zip-export.py"

  Optional output path:
  python "Slip Box\_scripts\vault-zip-export.py" "D:\exports\my_vault.zip"

OUTPUT:
  Slip_Box_export_YYYY-MM-DD.zip next to the vault folder (C:\Vault\)
  or at the path you specify.
"""

import zipfile
import os
import sys
import pathlib
from datetime import date

# ── Config ────────────────────────────────────────────────────────────────────
# Adjust VAULT_PATH if your vault is not at C:\Vault\Slip Box
VAULT_PATH = pathlib.Path(__file__).resolve().parent.parent  # _scripts/../ = vault root

# Patterns to exclude (same as typical .gitignore for Obsidian vaults)
EXCLUDE_DIRS = {'.obsidian', '.git', '__pycache__', '.trash'}
EXCLUDE_SUFFIXES = {'.tmp', '.log'}
EXCLUDE_NAMES = {'desktop.ini', 'Thumbs.db', '.DS_Store'}

def should_exclude(path: pathlib.Path) -> bool:
    """Return True if this path should be skipped."""
    for part in path.parts:
        if part in EXCLUDE_DIRS:
            return True
    if path.name in EXCLUDE_NAMES:
        return True
    if path.suffix.lower() in EXCLUDE_SUFFIXES:
        return True
    return False

def main():
    # Determine output path
    if len(sys.argv) > 1:
        output_zip = pathlib.Path(sys.argv[1])
    else:
        # Default: sibling of vault folder, dated
        today = date.today().isoformat()
        output_zip = VAULT_PATH.parent / f"Slip_Box_export_{today}.zip"

    vault_name = VAULT_PATH.name  # "Slip Box"
    output_zip.parent.mkdir(parents=True, exist_ok=True)

    print(f"Vault:  {VAULT_PATH}")
    print(f"Output: {output_zip}")
    print()

    file_count = 0
    skip_count = 0

    # allowZip64=True handles vaults larger than 4 GB
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED, allowZip64=True) as zf:
        for abs_path in sorted(VAULT_PATH.rglob('*')):
            if not abs_path.is_file():
                continue

            rel_path = abs_path.relative_to(VAULT_PATH.parent)  # keeps "Slip Box/..." prefix

            if should_exclude(rel_path):
                skip_count += 1
                continue

            # ZipInfo with a str arcname — Python 3 sets the UTF-8 flag automatically
            # when the arcname contains non-ASCII characters.
            arc_name = str(rel_path)
            zf.write(abs_path, arc_name)
            file_count += 1

            if file_count % 50 == 0:
                print(f"  {file_count} files added...", end='\r')

    size_mb = output_zip.stat().st_size / (1024 * 1024)
    print(f"\nDone — {file_count} files, {skip_count} skipped, {size_mb:.1f} MB")
    print(f"ZIP:    {output_zip}")

if __name__ == '__main__':
    main()
