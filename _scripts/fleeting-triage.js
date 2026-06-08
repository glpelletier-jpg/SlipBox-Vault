/**
 * fleeting-triage.js — QuickAdd user script
 *
 * Flow:
 *   First call (non-fleeting note active): opens oldest fleeting note + shows count
 *   Second call (fleeting note active):    shows action menu → executes → opens next
 *
 * Register in QuickAdd:
 *   Add → Macro → name it "Triage Fleeting Note"
 *   Add step → User Script → select this file
 *   (Optional) Assign a hotkey in Obsidian hotkey settings
 */

const FLEETING_FOLDER = "06-Zettelkasten/Fleeting";
const ARCHIVE_FOLDER  = "_archive/Fleeting";
const LIT_FOLDER      = "06-Zettelkasten/Literature";

module.exports = async function ({ app, quickAddApi }) {

  // ── Collect current fleeting notes (oldest first) ───────────────────────
  const allFleeting = app.vault
    .getFiles()
    .filter(
      (f) =>
        f.path.startsWith(FLEETING_FOLDER + "/") && f.extension === "md"
    )
    .sort((a, b) => a.stat.ctime - b.stat.ctime);

  if (allFleeting.length === 0) {
    new Notice("🎉 No fleeting notes left to triage!");
    return;
  }

  const activeFile = app.workspace.getActiveFile();
  const isFleetingActive =
    activeFile && activeFile.path.startsWith(FLEETING_FOLDER + "/");

  // ── If a fleeting note is open → show action menu ───────────────────────
  if (isFleetingActive) {
    const remaining = allFleeting.length;
    const action = await quickAddApi.suggester(
      [
        `🗄  Archive  (done / processed)        [${remaining} remaining]`,
        `📚 Promote → new Literature note       [${remaining} remaining]`,
        `🗑  Delete  (junk / no value)           [${remaining} remaining]`,
        `⏭  Skip — keep, open next              [${remaining} remaining]`,
      ],
      ["archive", "promote", "delete", "skip"]
    );

    if (!action) return; // user pressed Escape

    const target = activeFile;
    const title  = target.basename;

    if (action === "archive") {
      await ensureFolder(app, ARCHIVE_FOLDER);
      const dest = `${ARCHIVE_FOLDER}/${target.name}`;
      await safeRename(app, target, dest);
      new Notice(`🗄 Archived: ${title}`);
      await openNext(app, allFleeting, target);

    } else if (action === "promote") {
      // Create a bare Literature note (Templater will apply the folder template)
      await ensureFolder(app, LIT_FOLDER);
      const litPath = `${LIT_FOLDER}/${title}.md`;
      const existing = app.vault.getAbstractFileByPath(litPath);
      if (!existing) {
        const snippet = await app.vault.read(target);
        const stub = buildLitStub(title, snippet);
        const newFile = await app.vault.create(litPath, stub);
        await app.workspace.getLeaf().openFile(newFile);
      } else {
        await app.workspace.getLeaf().openFile(existing);
        new Notice(`⚠️ Literature note already exists: ${title}`);
      }
      // Archive the original fleeting note
      await ensureFolder(app, ARCHIVE_FOLDER);
      await safeRename(app, target, `${ARCHIVE_FOLDER}/${target.name}`);
      new Notice(`📚 Promoted & archived: ${title}`);

    } else if (action === "delete") {
      await app.vault.trash(target, true);
      new Notice(`🗑 Deleted: ${title}`);
      await openNext(app, allFleeting, target);

    } else {
      // skip
      await openNext(app, allFleeting, target);
    }

  // ── Otherwise → open the oldest fleeting note ───────────────────────────
  } else {
    new Notice(`📋 ${allFleeting.length} fleeting notes to triage`);
    await app.workspace.getLeaf().openFile(allFleeting[0]);
  }
};

// ── Helpers ─────────────────────────────────────────────────────────────────

async function openNext(app, allFleeting, justActedOn) {
  // Remove the file we just acted on from the list
  const remaining = allFleeting.filter((f) => f.path !== justActedOn.path);
  if (remaining.length === 0) {
    new Notice("🎉 All fleeting notes triaged!");
    return;
  }
  new Notice(`📋 ${remaining.length} fleeting notes remaining`);
  await app.workspace.getLeaf().openFile(remaining[0]);
}

async function ensureFolder(app, path) {
  if (!app.vault.getAbstractFileByPath(path)) {
    await app.vault.createFolder(path);
  }
}

async function safeRename(app, file, destPath) {
  // Avoid collision — append timestamp if destination exists
  if (app.vault.getAbstractFileByPath(destPath)) {
    const ts  = Date.now();
    const ext = file.extension;
    destPath = destPath.replace(`.${ext}`, `_${ts}.${ext}`);
  }
  await app.vault.rename(file, destPath);
}

/**
 * Builds a minimal Literature note stub so the user has a starting point.
 * The first ~400 chars of the fleeting content are included as a block quote.
 */
function buildLitStub(title, fleetingContent) {
  const preview = fleetingContent
    .replace(/^---[\s\S]*?---\n?/, "") // strip frontmatter
    .trim()
    .slice(0, 400);

  return `---
type: literature
status: processing
tags: []
---

# ${title}

## Key idea

> ${preview.replace(/\n/g, "\n> ")}

## My notes

## Questions

## Links
`;
}
