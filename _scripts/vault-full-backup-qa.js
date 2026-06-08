// vault-full-backup-qa.js — QuickAdd script: Git backup + ZIP export in sequence
// Triggered via QuickAdd "Full Backup" choice or Commander button.
//
// Step 1: runs vault-backup.bat  (git pull → add → commit → push)
// Step 2: runs vault-zip-export.py (UTF-8 ZIP to <vault parent>\exports\)
//
// Paths are derived from Obsidian's own vault path — no hardcoding needed.

module.exports = async function({ app }) {
  const { exec } = require('child_process');
  const path = require('path');

  // ── Derive paths from Obsidian's vault location ───────────────────────────
  // app.vault.adapter.basePath is the absolute path to the vault root on disk.
  const VAULT_ROOT  = app.vault.adapter.basePath;                  // e.g. C:\Users\Guy\Documents\Slip Box
  const VAULT_PARENT = path.dirname(VAULT_ROOT);                   // e.g. C:\Users\Guy\Documents
  const BAT         = path.join(VAULT_ROOT, '_scripts', 'vault-backup.bat');
  const ZIP_SCRIPT  = path.join(VAULT_ROOT, '_scripts', 'vault-zip-export.py');
  const ZIP_OUT_DIR = path.join(VAULT_PARENT, 'exports');

  // ── Helper: promisified exec with timeout ─────────────────────────────────
  function run(cmd, timeoutMs = 120_000) {
    return new Promise((resolve, reject) => {
      exec(cmd, { timeout: timeoutMs }, (err, stdout, stderr) => {
        if (err) reject(new Error(stderr?.trim() || err.message));
        else resolve(stdout.trim());
      });
    });
  }

  // ── Step 1: Git backup ────────────────────────────────────────────────────
  new Notice('🔄 Step 1/2 — Git backup…', 4000);

  try {
    await run(`cmd /c "${BAT}"`);
  } catch (err) {
    new Notice(`❌ Git backup failed — ZIP skipped\n${err.message}`, 10000);
    return;
  }

  new Notice('✅ Git backup done — starting ZIP export…', 3000);

  // ── Step 2: ZIP export ────────────────────────────────────────────────────
  // Ensure exports directory exists
  await run(`cmd /c mkdir "${ZIP_OUT_DIR}" 2>nul`).catch(() => {});

  // Date string for filename: YYYY-MM-DD via PowerShell (reliable across all locales)
  const dateStr = await run(`powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd'"`).catch(() => 'export');
  const zipOut  = path.join(ZIP_OUT_DIR, `Slip_Box_export_${dateStr}.zip`);

  // Try 'python' first, fall back to 'py' (Windows Python Launcher)
  async function runPython(exe) {
    await run(`cmd /c ${exe} "${ZIP_SCRIPT}" "${zipOut}"`, 180_000);
  }

  try {
    await runPython('python');
  } catch (err) {
    if (err.message.includes('not recognized') || err.message.includes('cannot find')) {
      try {
        await runPython('py');
      } catch (err2) {
        new Notice(`❌ ZIP export failed — is Python installed?\n${err2.message}`, 10000);
        return;
      }
    } else {
      new Notice(`❌ ZIP export failed\n${err.message}`, 10000);
      return;
    }
  }

  new Notice(`✅ Full backup complete\nGit pushed + ZIP → ${zipOut}`, 8000);
};
