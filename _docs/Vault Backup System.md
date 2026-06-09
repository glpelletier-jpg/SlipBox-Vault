---
title: Vault Backup System
date: 2026-06-05
tags: [vault-meta, backup, setup]
---

# Vault Backup System

> Two-layer backup: Git + Windows Task Scheduler (version history) + OneDrive (continuous cloud sync).
> No Obsidian plugins required — everything runs at the OS level.

---

## Architecture

| Layer | Tool | What it does | Cost |
|---|---|---|---|
| **1 — Version history** | Git + GitHub + Task Scheduler | Commits and pushes every hour; complete rollback history | Free |
| **2 — Continuous sync** | OneDrive | Real-time cloud copy; accessible from any device | Free (5GB with Windows) |
| **3 — Local recovery** | Obsidian File Recovery (built-in core plugin) | Restores individual notes within the last 7 days — no setup required | Free |

**Layer 1** protects against: accidental deletion, bad edits, plugin corruption, ransomware
**Layer 2** protects against: drive failure, stolen/lost laptop
**Layer 3** protects against: just deleted or overwrote a note in the last week

---

## Layer 1: Git + GitHub + Windows Task Scheduler

### One-time setup (~30 min)

**Step 1 — Install Git for Windows**
Download from [git-scm.com/download/win](https://git-scm.com/download/win) and install with all default settings.

**Step 2 — Create a free private GitHub repository**
1. Go to [github.com](https://github.com) → create a free account
2. Click **+** → **New repository**
3. Name: `slip-box-vault` · Visibility: **Private** · No README
4. Click **Create repository**
5. Copy the URL shown (e.g., `https://github.com/glpelletier-jpg/slip-box-vault.git`)

**Step 3 — Initialize Git in the vault**
Open **Command Prompt** (`Win+R` → `cmd`) and run these commands one at a time:

```
cd "C:\Vault\Slip Box"
git init
git remote add origin https://github.com/glpelletier-jpg/slip-box-vault.git
git add .
git commit -m "Initial vault backup"
git push -u origin master
```

When prompted, enter your GitHub username and password (or a Personal Access Token — GitHub will guide you).

**Step 4 — Create a `.gitignore` file**
In the vault root, create `C:\Vault\Slip Box\.gitignore` with this content:

```
.obsidian/workspace
.obsidian/workspace.json
.obsidian/workspaces.json
.trash/
.DS_Store
```

This prevents Obsidian's window layout files (which change constantly) from cluttering the backup history.

**Step 5 — The backup script is already in your vault**
A backup script was created at `_scripts/vault-backup.bat`. To test it: open Command Prompt and run:

```
"C:\Vault\Slip Box\_scripts\vault-backup.bat"
```

It will pull, commit any changes, and push to GitHub. A log is saved to `C:\Vault\backup-log.txt`.

**Step 6 — Schedule automatic hourly backups with Task Scheduler**
1. Open **Task Scheduler** (search in Start menu)
2. Click **Create Basic Task** in the right panel
3. Name: `Obsidian Vault Backup` · Description: `Hourly Git backup of Slip Box vault`
4. Trigger: **Daily** (we'll refine this) → Next → set time to now
5. Action: **Start a program** → Next
6. Program/script: `"C:\Vault\Slip Box\_scripts\vault-backup.bat"`
7. Click Finish
8. Find the task in the list → right-click → **Properties**
9. Triggers tab → Edit → change to **Repeat task every: 1 hour** for a duration of **Indefinitely**
10. Click OK

The vault now backs up automatically every hour while the computer is on.

---

## Layer 2: OneDrive (continuous cloud sync)

OneDrive is already installed on Windows 10/11 and provides real-time cloud sync.

**Option A — Move the vault into OneDrive (recommended)**
1. Sign in to OneDrive (click the cloud icon in the taskbar)
2. In File Explorer, move `C:\Vault\` to `C:\Users\[your name]\OneDrive\Vault\`
3. Update any desktop shortcuts or bookmarks to point to the new path
4. OneDrive syncs automatically from this point — you'll see a green checkmark on synced files

**Option B — Add C:\Vault as a OneDrive backup folder**
1. Right-click the OneDrive icon in the taskbar → Settings → Backup tab
2. Click **Manage backup** → add `C:\Vault`

> ⚠️ Do NOT use multiple sync services (OneDrive + Dropbox + Google Drive) on the same folder simultaneously — sync conflicts can corrupt the vault. Pick one.

---

## Layer 3: Obsidian File Recovery (already enabled)

Obsidian has a built-in **File Recovery** core plugin that saves snapshots of every note every few minutes. No setup needed — it's active by default.

**To recover a note deleted or edited within the last 7 days:**
1. `Ctrl+P` → "File recovery: Open file recovery"  
2. Find the note and the version you want
3. Click **Restore**

This is the fastest recovery tool for day-to-day accidents (deleted a paragraph, overwrote the wrong note, etc.).

---

## Obsidian Sync (optional — adds mobile access)

If you want to read and edit the vault on a phone or iPad:
- **Cost:** $8/month or $96/year
- **What it adds:** Encrypted sync across all devices, 1 year of version history, seamless mobile experience
- **What it doesn't replace:** Git backup — Obsidian Sync is not version control
- **Setup:** Obsidian → Settings → Sync

For free mobile access: the Obsidian mobile app can open a vault stored in OneDrive, though it requires manual sync and is less seamless.

---

## Recovery scenarios

| What happened | How to recover |
|---|---|
| Deleted or overwrote a note (today) | `Ctrl+P` → "File recovery: Open file recovery" |
| Deleted a note (within 7 days) | File Recovery core plugin (above) |
| Deleted or corrupted a note (any time) | GitHub → find the file in history → view/download old version |
| Entire vault corrupted or deleted | `git clone https://github.com/glpelletier-jpg/slip-box-vault.git "C:\Vault\Slip Box"` |
| New laptop / reinstall | Install Git + Obsidian → clone repo → open vault in Obsidian |
| OneDrive sync issue | Git is the backup — the truth is always in GitHub |

---

## Checking the backup is working

**Verify Git is running:**
1. Open `C:\Vault\backup-log.txt` — you should see recent timestamps
2. Or go to `github.com/glpelletier-jpg/slip-box-vault` — you should see recent commits

**Verify OneDrive is synced:**
- OneDrive icon in taskbar should show a green checkmark (not a spinning icon)

**Monthly check:** Open GitHub and confirm the latest commit is from within the last 24 hours.

---

## The backup script (`_scripts/vault-backup.bat`)

The script in your vault does the following:
1. Navigates to `C:\Vault\Slip Box`
2. Pulls any remote changes (in case you edited from another device)
3. Stages all modified notes
4. If there are changes, commits with a timestamp and pushes to GitHub
5. Logs the result to `C:\Vault\backup-log.txt`

You can run it manually any time by double-clicking it in File Explorer.

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Slip Box Master Guide|Master Guide]]
