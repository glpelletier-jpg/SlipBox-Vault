// vault_backup_qa.js — QuickAdd script: run vault-backup.bat from inside Obsidian
// Triggered via QuickAdd "Vault Backup" choice or Commander button

module.exports = async function({ app }) {
  const { exec } = require('child_process');
  const bat = 'C:\\Vault\\Slip Box\\_scripts\\vault-backup.bat';

  new Notice('Vault backup starting...', 3000);

  exec(`cmd /c "${bat}"`, (err, stdout, stderr) => {
    if (err) {
      new Notice('Backup failed: ' + err.message, 8000);
    } else {
      new Notice('Vault backup complete', 4000);
    }
  });
};
