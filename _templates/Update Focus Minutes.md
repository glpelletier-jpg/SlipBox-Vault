<%*
// ── Update focus_minutes in today's daily note ───────────────────
// Run this from any daily note at end of day via:
//   Ctrl+P → "Templater: Insert Template" → Update Focus Minutes
// Or assign a hotkey to it in Settings → Hotkeys.
//
// What it does:
//   1. Reads all [duration:: N] inline fields from the current note's list items
//   2. Sums them
//   3. Writes the total to focus_minutes: in the note's frontmatter
//   4. Shows a confirmation notice

// ── Step 1: read and sum duration entries ────────────────────────
const content = tp.file.content;

// Match all [duration:: N] patterns anywhere in the note body
const durationRegex = /\[duration::\s*(\d+)\]/g;
let match;
let total = 0;
while ((match = durationRegex.exec(content)) !== null) {
  total += parseInt(match[1], 10);
}

// ── Step 2: update frontmatter ───────────────────────────────────
// Replace the existing focus_minutes: value (whatever it is) with the new total.
// Handles: "focus_minutes: 0", "focus_minutes: 596", "focus_minutes: " (blank)
const updatedContent = content.replace(
  /^(focus_minutes:\s*).*$/m,
  `$1${total}`
);

// ── Step 3: write back to the file ───────────────────────────────
const tfile = app.workspace.getActiveFile();
await app.vault.modify(tfile, updatedContent);

// ── Step 4: notify ───────────────────────────────────────────────
const hrs  = Math.floor(total / 60);
const mins = total % 60;
const label = hrs > 0 ? `${hrs}h ${mins}m (${total} min)` : `${mins} min`;

new Notice(`✅ focus_minutes updated → ${label}`, 4000);

// Return empty string so nothing is inserted at the cursor
tR = "";
%>
