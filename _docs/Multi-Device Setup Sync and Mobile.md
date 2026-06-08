---
doc_type: guide
purpose: "Obsidian Sync setup across desktop, tablet, and mobile — settings and known issues"
type: guide
created: 2026-06-04
updated: 2026-06-07
tags: [guide, setup]
---

# Multi-Device Setup — Sync and Mobile

> How to copy this vault to a second computer, keep both in sync, and use the vault across all devices.

---

## Part 0: Device roles — your 5-device ecosystem

Each device has a defined role. Knowing the role prevents capture from splitting randomly across devices.

| Device | Role | Vault access |
|---|---|---|
| **Windows 11 Desktop** | Primary vault. All serious work — quest notes, Zettelkasten, Work Knowledge, system development, templates. | Full Obsidian desktop |
| **Tablet** | Zettelkasten processing, reading, and lighter vault use. Better screen than phone for sustained note-writing. | Obsidian mobile via Obsidian Sync |
| **reMarkable Paper Pro** | Handwritten capture for all analog thinking — field notes at Argenta, troubleshooting sketches, meeting notes, HAM Radio study diagrams, deep thinking. **Owns all handwritten capture.** | None — PDFs exported to vault manually (plugin sync pending fix) |
| **Samsung Galaxy S25 Ultra** | Todoist quick capture, Obsidian mobile capture (`Ctrl+Shift+C` equivalent via toolbar), Morgen on-the-go. S Pen used for annotating PDFs only — not general note capture. | Obsidian mobile via Obsidian Sync |
| **Samsung Galaxy Watch Ultra** | Health metric tracking. Steps synced to daily note `steps:` field via Samsung Health at end of day. Heart rate and sleep data informs energy ratings. | None — manual data entry to daily note |

### Capture routing by device

| What you're capturing | Which device | Where it lands |
|---|---|---|
| Work task (admin, emails, calls) | Any — Todoist app | Todoist → Morgen |
| Quest milestone or study task | Desktop | Quest note → Morgen Tasks plugin |
| Quick thought or insight | S25 Ultra | Obsidian mobile toolbar → daily capture |
| Fleeting idea (needs own note) | Desktop or tablet | `Ctrl+Shift+F` → Fleeting folder |
| Handwritten field note / sketch | reMarkable | `_attachments/reMarkable/Work/` |
| Handwritten brainstorm | reMarkable | `_attachments/reMarkable/Fleeting/` → retype as vault fleeting note |
| Steps count | Galaxy Watch | Samsung Health → manual entry to daily note `steps:` |
| Morning vitals (BP, glucose, weight) | Desktop | Daily note Properties panel |

---

## Part 1: Copying the vault to a second computer

### The simple version

Copy the entire `Slip Box` folder to the same location on the second machine. Everything works — notes, templates, plugin configs, QuickAdd settings including your ICS URL, scripts, bases. The vault is fully self-contained in that folder.

**What to copy:** The entire `Slip Box/` folder including the hidden `.obsidian/` subfolder. That's the whole vault.

**After copying:**
1. Open Obsidian on the second machine
2. Click "Open folder as vault"
3. Select the `Slip Box` folder
4. Obsidian will prompt to install community plugins — click **Trust author and enable plugins**
5. The plugins need to download their JS files fresh (they're not included in a manual copy). Wait 30–60 seconds for all plugins to install.
6. Restart Obsidian once all plugins finish installing

---

## Part 2: Obsidian Sync

Obsidian Sync is the cleanest way to keep multiple computers and your phone in sync. It's built into Obsidian, end-to-end encrypted, and handles conflict resolution automatically.

**Cost:** $10/month (or $96/year). Included in the Obsidian Catalyst or Commercial licenses if you have those.

### Setting it up

**On the first (main) computer:**
1. Settings → Sync → Create new vault
2. Give it a name (e.g. "Slip Box")
3. Set encryption password — **write this down, you cannot recover it**
4. Turn on sync — the vault uploads

**On the second computer or tablet:**
1. Install Obsidian
2. Settings → Sync → Connect → select your remote vault
3. Choose a local folder for it
4. It will download and sync automatically

**On your phone (S25 Ultra):**
1. Install Obsidian (Google Play — free)
2. Settings → Sync → Connect → same remote vault
3. Same encryption password

### What Obsidian Sync does and does not sync

By default Sync includes everything. You can exclude categories to save your 10GB quota:

| Category | Default | Recommendation |
|---|---|---|
| Notes (`.md`, `.base`) | ✅ Synced | Keep — this is the vault content |
| Main settings | ✅ Synced | Keep — themes, core plugin settings |
| Active core plugins | ✅ Synced | Keep |
| Community plugin settings | ✅ Synced | **Keep** — this includes your QuickAdd ICS URL, Morgen config, and all plugin configs |
| Community plugins (JS files) | ✅ Synced | **Exclude** — saves ~23MB of quota; plugins re-download automatically |
| Themes | ✅ Synced | Keep |
| Snippets | ✅ Synced | Keep |

To exclude plugin files: Settings → Sync → Excluded folders → add `.obsidian/plugins`

> Your **QuickAdd settings** (including the ICS URL) and **Morgen config** live in `.obsidian/plugins/` settings files — these are in the *plugin settings* category, not the plugin JS files. They sync automatically even when you exclude the plugin binaries. Your ICS URL and Morgen folder exclusions will be available on every synced device without re-entering.

---

## Part 3: Sync pitfalls to know about

### 1. Conflict resolution
Obsidian Sync handles conflicts by keeping both versions with a timestamp suffix. If you edit the same note on two devices before syncing, you'll see `Note (conflicted copy 2026-06-04).md` appear. Check these periodically and merge or delete them.

**Most common source of conflicts:** daily notes. If you open today's daily note on your phone in the morning and then on your computer later, and sync is slow, you can get a conflict. The fix is to wait a few seconds for sync to complete before editing.

### 2. Plugin installation on new devices
When Obsidian Sync delivers the vault to a new device, it syncs the plugin *settings* but the JS files don't transfer if you excluded them. Obsidian will show a notice that plugins need to be installed — click install. This is a one-time step per device.

**Note on Morgen Tasks plugin:** The `morgen-tasks` and `morgen-obsidian` plugins are not yet in the Obsidian community plugin browser — they were installed manually. On new devices, you will need to manually copy the plugin folders from `.obsidian/plugins/morgen-tasks/` and `.obsidian/plugins/morgen-obsidian/` or re-download them from [morgen.so](https://morgen.so).

### 3. The `.obsidian` folder and device-specific settings
Some settings in `.obsidian` are device-specific (window size, pane layout, workspace). Sync can overwrite your layout preferences between devices. If you want different layouts on desktop vs. phone:
- Settings → Sync → Vault configuration sync → set to "Sync" for shared settings, "Do not sync" for device-specific ones
- The safest option: sync everything, and just re-arrange your workspace panes after first sync

### 4. Hotkeys are shared but only work on desktop
Your hotkeys (`Ctrl+Shift+K`, `Ctrl+D`, etc.) sync to all devices but physical hotkeys don't fire on mobile — there's no keyboard. This is expected. The mobile toolbar (below) is the solution.

### 5. Linter on save
The Linter plugin is set to auto-lint on save. On a phone with slower processing this can cause a brief lag on every save. If it becomes annoying, disable "Lint on save" in Settings → Linter on mobile only.

### 6. Sync quota
Your vault content (notes + bases) is tiny — well under 1MB. The 23MB is all plugin JS files. If you exclude the plugin folder you'll use almost none of your 10GB quota even with years of daily notes and vitals data.

---

## Part 4: Using the vault on your smartphone (S25 Ultra) and tablet

### What works exactly the same on mobile
- All notes — reading and writing
- Frontmatter Properties panel — tap the `⊞` icon at the top of a note
- Wikilinks — tap to navigate
- Todoist `todoist://` links — open the Todoist app directly (requires Todoist installed)
- Morgen `morgen://` links — open Morgen directly (requires Morgen installed)
- Templates via Templater — creating a new daily note applies the template
- Bases — all views render and are scrollable
- Dashboard — loads and displays correctly
- `obsidian://advanced-uri` links — work on mobile

### What needs adjustment for mobile

#### Hotkeys → Mobile toolbar buttons
Your most-used hotkeys don't fire on mobile without a physical keyboard. The fix is the **mobile toolbar** — a row of buttons at the bottom of the editing screen.

**To configure it:**
Settings → Mobile → Toolbar → Manage toolbar options → add buttons for:

| What you want | Toolbar command to add |
|---|---|
| Open today's note | Periodic Notes: Open daily note |
| Fetch weekly calendar | QuickAdd: Weekly Calendar |
| Fetch next week | QuickAdd: Next Week Calendar |
| New fleeting note | QuickAdd: New Fleeting Note |
| Capture to daily note | QuickAdd: Add to Daily Capture |
| Open dashboard | Homepage: Open homepage |

You can reorder them — put the ones you'll use most (today's note, daily capture) at the left end.

#### Calendar fetch on mobile
The `requestUrl()` function used in the calendar scripts works in the Obsidian mobile app — it runs through Electron/Node on mobile just like desktop. **Your weekly and next week calendar fetches will work on mobile** once the mobile toolbar buttons are set up.

#### The daily note routine on mobile (S25 Ultra)
The most natural mobile workflow is a **capture-only** version of the daily routine:

**Morning (30 seconds):**
1. Tap "Open today's note" in the toolbar
2. Tap `⊞` Properties → type your `focus_intention:`
3. Done — keep the phone in your pocket

**Evening (60 seconds):**
1. Open today's note
2. Check Samsung Health for today's step count
3. Tap `⊞` Properties → fill `end_of_day:`, `energy:`, `steps:`
4. Done

Vitals (BP, glucose, weight) are better entered on desktop since you're likely near a computer when measuring them. Steps and energy work perfectly on mobile.

#### Tablet use — Zettelkasten processing
The tablet is best used for Zettelkasten processing sessions — reading fleeting notes, writing literature notes, and drafting permanent notes. The larger screen makes sustained writing more comfortable than the phone. Set up the mobile toolbar the same way as the phone. No special configuration needed beyond Obsidian Sync.

#### Morgen Tasks plugin on mobile
The Morgen Tasks plugin is **desktop only** for task sync — vault tasks flow to Morgen from the desktop installation. On mobile, you can view and complete vault tasks in the Morgen app (which syncs back to the desktop vault), but writing new vault tasks and having them appear in Morgen requires the desktop.

#### Plugins not available on mobile
All 17 plugins in this vault are available on mobile except the reMarkable Sync plugin, which is desktop-only and currently non-functional (awaiting plugin update). The only other limitation is hotkeys, which the mobile toolbar solves.

---

## Part 5: Galaxy Watch Ultra — health data to vault

The Galaxy Watch Ultra tracks steps, heart rate, and sleep automatically. This data feeds into your daily note vitals system.

**Daily workflow:**
1. At end of day, open Samsung Health on the S25 Ultra
2. Note today's step count and any relevant health metrics
3. Open today's daily note (Obsidian mobile) → `⊞` Properties → enter `steps:`
4. Use energy rating (1–5) to reflect how you felt, informed by sleep data from the watch

There is no automatic sync path from Samsung Health to Obsidian — manual entry takes under 30 seconds.

---

## Part 6: Recommended setup sequence

If you're doing this from scratch, here's the order that avoids headaches:

1. **Get Obsidian Sync set up on your main desktop first** — upload the vault, confirm it's syncing
2. **Install on the tablet** — connect to the same Sync remote vault, configure mobile toolbar
3. **Install on the S25 Ultra** — connect to the same Sync remote vault, configure mobile toolbar, install Morgen and Todoist apps
4. **Test the calendar fetch on mobile** — tap the Weekly Calendar toolbar button, confirm it fetches
5. **Set up daily watch routine** — check Samsung Health each evening before filling daily note vitals

The whole process takes about 30–45 minutes.

---

## Quick reference

| Question | Answer |
|---|---|
| Will my ICS URL sync? | Yes — it's in plugin settings, syncs automatically |
| Will my QuickAdd macros sync? | Yes — full plugin config syncs |
| Will my Morgen config sync? | Yes — morgen-config.json is in plugin settings |
| Do I need to re-enter passwords? | Only the Sync encryption password (once per device) |
| Will hotkeys work on mobile? | No — use mobile toolbar instead |
| Will calendar fetch work on mobile? | Yes — requestUrl() works in mobile Obsidian |
| Will Todoist links work on mobile? | Yes — if Todoist is installed |
| Will Morgen Tasks sync work on tablet? | No — desktop only for vault-to-Morgen sync |
| Can I edit notes on both devices simultaneously? | Yes, but wait for sync between edits to avoid conflicts |
| How much sync quota will I use? | ~1MB of content; exclude plugin JS files to save the 23MB they occupy |
| Can I use iCloud or Dropbox instead of Obsidian Sync? | Yes for desktop-to-desktop — but not recommended for mobile due to file locking conflicts |

---

**Links:** [[00-Home/00-Home|Dashboard]] | [[_docs/Getting Started - First 30 Days|Getting Started]] | [[_docs/Slip Box Master Guide|Master Guide]]
