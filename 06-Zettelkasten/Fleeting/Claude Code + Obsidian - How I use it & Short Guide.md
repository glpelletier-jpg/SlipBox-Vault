---
title: "Claude Code + Obsidian - How I use it & Short Guide"
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, PKM, HowTo]
---

# Claude Code + Obsidian - How I use it & Short Guide

---

## date: 2026-02-14 21:34:48
created: 2026-02-14 21:33:36

# Claude Code + Obsidian - How I use it & Short Guide

# Claude Code + Obsidian - How I use it & Short Guide

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-jsgje5a9jggg1.gif?width=1440&auto=webp&s=37112c47735fc0eabe1d1961da21db97180bda65](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-jsgje5a9jggg1.gif?width=1440&auto=webp&s=37112c47735fc0eabe1d1961da21db97180bda65)Cluade Code <3 Obsidian

I've spent the last year trying to solve a problem that's been bugging me since I started taking notes seriously.

You capture information. Meetings, ideas, project details, random thoughts. It all goes somewhere and then... it kind of disappears into the void. You know it's there. You just can't find it when you need it or worse, you forget it exists entirely.

I tried tagging systems. Folder structures. Daily notes. Weekly reviews. Some of it helped. Most of it became another thing to maintain.

Then I connected Claude Code to my Obsidian vault and I didn't just connect it, I built a system around it. Custom skills. Session memory. Automatic syncing. The whole package.

Now when I start a work session, my AI assistant already knows what I was doing yesterday. It can search through months of notes in seconds. It creates and organises files without me touching anything and when I'm done, it saves everything we discussed so future me (or future AI) can pick up exactly where I left off.

Here's how to build one.

# Part 1 - The Philosophy

Before we get into setup, I want to explain the thinking behind it. Because the tools only matter if the structure makes sense.

# Write Once, Surface Everywhere

Here's the core idea:

You should never have to enter the same information twice.

When you create a meeting note, you add some basic info at the top such as date, attendees, which project it relates to. That's it.

From that moment, the note automatically shows up in:

- The project's page (under "Related Meetings")

- Your daily note (under "Today's Meetings")

- The person's profile if you track stakeholders

- Any dashboard that queries for meetings

You didn't link anything manually. You didn't copy and paste. The structure does the work.

Write once. Surface everywhere

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-uf0u3augjggg1.gif?width=1440&auto=webp&s=40a17aa1e24c2464a8a7d96a776d9f3cf9e00872](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-uf0u3augjggg1.gif?width=1440&auto=webp&s=40a17aa1e24c2464a8a7d96a776d9f3cf9e00872)Write once. Surface everywhere.

This is called a **"proactive vault"**. Instead of you organising information, the vault organises itself based on metadata you add once.

# The Three Layers

The system has three layers:

- **Capture** - Where content lands first. Inbox folder, quick note, voice memos

- **Process** - Where content gets structured. Project folders, meeting notes with proper metadata

- **Surface** - Where the content appears when needed. Dashboard, projects hubs, search results

Most people only think about capture. They get content in, but never build the processing and surfacing layers. So their notes become a graveyard.

# Part 2 - The Physical Setup

Now let's make it real. Two places, two purposes, your Desktop for speed, your Obsidian vault for search. Here's how they fit together.

# Your Desktop (Quick Access)

I keep a working folder on my Desktop for active projects. This is where files such as screenshots, exports, meeting recordings etc land during the day.

```text
Desktop/
├── +Inbox/                    # Quick drop-off (process daily)
├── Projects/
│   ├── Project-Alpha/
│   │   ├── UI-Design/21_01_26/
│   │   ├── Meetings/20_01_26/
│   │   └── Ready-to-Dev/
│   └── Project-Beta/
├── Meetings/
│   ├── Team-Standups/
│   └── Client-Calls/
└── Voice-Notes/
```

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-udgx3ecmjggg1.gif?width=1440&auto=webp&s=333d14b9fbf3867c8bfa2eedfc9e90c0a0bac713](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-udgx3ecmjggg1.gif?width=1440&auto=webp&s=333d14b9fbf3867c8bfa2eedfc9e90c0a0bac713)One folder per project.

One folder per project.

# Your Obsidian Vault (Searchable Archive)

The vault mirrors this structure but adds the magic such as metadata, queries, and connections.

```text
Vault/
├── +Inbox/                    # Quick capture
├── Areas/
│   ├── Work/
│   │   ├── Projects/
│   │   │   ├── Project-Alpha/
│   │   │   │   ├── Project-Alpha.md    # Main project file
│   │   │   │   ├── Assets/
│   │   │   │   └── Meetings/
│   │   │   └── Project-Beta/
│   │   ├── Meetings/
│   │   ├── Session-Logs/       # AI conversation history
│   │   └── _Index.md           # Area hub with queries
│   ├── Personal/
│   └── Health/
├── Calendar/
│   ├── Daily/                  # YYYY-MM-DD.md
│   ├── Weekly/
│   └── Monthly/
├── System/
│   ├── Templates/
│   └── Dashboards/
└── CLAUDE.md                   # Project memory file
```

The key insight:

**Desktop is for speed, Vault is for search.**

They stay synced.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-lbzdcftvjggg1.gif?width=1440&auto=webp&s=f0e968276bfbcdb152d0ef14e67c743b3776deb2](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-lbzdcftvjggg1.gif?width=1440&auto=webp&s=f0e968276bfbcdb152d0ef14e67c743b3776deb2)Your knowledge, organized.

Your knowledge, organised.

# Part 3 - Setting Up Claude Code

Alright, the structure's in place. Time to bring in the AI. This part's quick, install, connect, confirm. You'll be talking to your vault in ten minutes or less.

# Installation

You need **Node.js** first. Check if you have it:

```text
npm install -g /claude-code
```

If you see a version number (like v20.11.0), you're set. If you get an error grab it from [nodejs.org](http://nodejs.org/)

Then install Claude Code:

```text
npm install -g u/anthropic-ai/claude-code
```

Launch it with by typing **claude**. First time, it'll open a browser for authentication. One time occurrence.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-whfgn4wyjggg1.gif?width=1440&auto=webp&s=e1c2966fe2928743272ff86d180e60ccde334ba8](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-whfgn4wyjggg1.gif?width=1440&auto=webp&s=e1c2966fe2928743272ff86d180e60ccde334ba8)One command. Ready to go.

One command. Ready to go.

# Connecting to Obsidian

Obsidian needs a plugin to let Claude Code talk to it.

1. Open Obsidian → Settings → Community Plugins

2. Search for **"Local REST API"** → Install → Enable

3. In plugin settings, generate an API key (copy it)

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-nkg0qi24kggg1.gif?width=1440&auto=webp&s=b78508a3397b17dd5f93d8d60e67f8acc7e2e277](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-nkg0qi24kggg1.gif?width=1440&auto=webp&s=b78508a3397b17dd5f93d8d60e67f8acc7e2e277)Connect your tools.

Connect your tools.

Now tell Claude Code about it. Create or edit this file:

- **Mac/Linux:** ~/.claude/settings.json

- **Windows:** %USERPROFILE%\.claude\settings.json

{ "mcpServers": { "obsidian": { "command": "npx", "args": ["-y", "obsidian-mcp"], "env": { "OBSIDIAN_API_KEY": "your-api-key-here" } } } }

Restart Claude Code. Ask "Can you see my Obsidian vault?" and it should confirm.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-ggpocbq6kggg1.gif?width=1440&auto=webp&s=710bbe1c8a19149ec50f9e13078e9a715d6cb6c5](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-ggpocbq6kggg1.gif?width=1440&auto=webp&s=710bbe1c8a19149ec50f9e13078e9a715d6cb6c5)Your AI, connected.

Your AI, connected.

# Part 4: The Memory System

Here's the problem with AI assistants: context fades. Start a new session, and you're back to explaining your project from scratch.

Had a great session solving a complex problem? You remember it. The AI doesn't. Figured out how something works? Made important decisions? Unless you wrote them down somewhere and remember to paste them in next time, that context is gone.

I fixed this with three custom skills.

# Skill 1: /resume - Load Context

When I start a new session, I don't start from zero. I run **/resume** and Claude immediately knows:

- What I was working on recently

- Key decisions I've made

- The current state of my projects

- Any pending tasks

It reads from two places:

1. [CLAUDE.md](http://claude.md/) - A file in my vault that stores permanent project memory

2. **Session logs** - Saved summaries of recent conversations

Here's the logic:

**/resume** is project-aware. It detects which project folder you're in and loads the right context. Working on Project Alpha? It loads that [CLAUDE.md](http://claude.md/) and those session logs. Switch to a different project? Different context.

And it gets better. You can search by topic:

- **/resume** - Load last 3 sessions

- **/resume 10** - Load last 10 sessions

- **/resume auth** - Load recent sessions + search for anything about "auth"

- **/resume 5 jira** - Last 5 sessions + search for "jira" mentions

So when you're picking up work from two weeks ago, you don't scroll through logs. You just ask for what you need.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-zkccm0abkggg1.gif?width=1440&auto=webp&s=a02b556835704bfe5a6c3423cdc150180d974f57](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-zkccm0abkggg1.gif?width=1440&auto=webp&s=a02b556835704bfe5a6c3423cdc150180d974f57)Your AI remembers

# Skill 2: /compress - Save Session

Before ending a productive session, I run **/compress** to:

- See a multi-select of what to preserve: key learnings, solutions & fixes, decisions made, files modified, setup & config, pending tasks, errors & workarounds

- Create a searchable session log with a summary and the full conversation

- Save it to the right location based on which project you're in

That last point matters. For my main vault, it writes to both Desktop (quick access while working) and the Vault (searchable long-term). For other projects, it creates a **CC-Session-Logs** folder right in the project directory. No cross contamination.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-yx4y1axckggg1.gif?width=1440&auto=webp&s=fd20700ff242b4c21f0119e48119ce5b99fa5782](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-yx4y1axckggg1.gif?width=1440&auto=webp&s=fd20700ff242b4c21f0119e48119ce5b99fa5782)Your Work, preserved.

Your Work, preserved.

The session log format looks like this:

```text
# Session: 21-01-2026 14:30 - project-alpha-auth-fix
## Quick Reference
**Topics:** authentication, API integration, error handling
**Projects:** Project-Alpha
**Outcome:** Fixed auth flow, documented edge cases
## Decisions Made
- Using JWT instead of session tokens
- 15-minute expiry with silent refresh
## Key Learnings
- The API returns 403 for expired tokens, not 401
## Pending Tasks
- [ ] Add refresh token logic 🆔 dJanYf
- [ ] Update error messages 🆔 D0tMJA
---
## Raw Session Log
[Full conversation archived below for searchability]
```

The Quick Reference section is designed for AI scanning. When **/resume** runs, it reads these summaries first (fast, low token use). If it needs more detail, it can dig into the raw log.

Now when I run **/resume** next week and ask "what did we decide about authentication?", it finds this instantly.

# Skill 3: /preserve - Update Memory

Some learnings are permanent. Not session specific, but things I want Claude to always know about my project.

**/preserve** takes key insights and adds them to [CLAUDE.md](http://claude.md/) - the persistent memory file.

Things like:

- Project conventions and standards

- Architecture decisions

- Key file paths

- Common workflows

But here's the thing about memory files: they can grow forever and eventually become too big to be useful. So **/preserve** has auto-archive logic built in.

When [CLAUDE.md](http://claude.md/) exceeds **280 lines**, it kicks in:

1. Identifies what can be safely archived (completed projects, old session notes, sections marked as archivable)

2. Protects core sections that should never move (Approach, Key Paths, Skills, MCP Tools)

3. Moves old content to a separate [CLAUDE-Archive.md](http://claude-archive.md/) file

4. Keeps the main file lean and relevant

This way, Claude always has quick access to what matters now, but nothing is ever lost.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-uxcizk4hkggg1.gif?width=1440&auto=webp&s=00460cb501601499225c82bf93785ed43515bb1c](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-uxcizk4hkggg1.gif?width=1440&auto=webp&s=00460cb501601499225c82bf93785ed43515bb1c)Your AI's project memory.

# Part 5: Custom Skills for Daily Work

Beyond the memory system, I've built skills for common tasks. Here's the pattern explained.

# Creating a Skill

Skills live in ~/.claude/commands/ as markdown files. Each one is basically a prompt template which can get more complex over time, if and when you need it to.

Example of a simple **/daily-note** skill:

```text
# Daily Note Creator
Create or open today's daily note at Calendar/Daily/YYYY-MM-DD.md
Include:
- Top 3 priorities (ask me)
- Meetings scheduled today (check calendar folder)
- Links to active projects
- Quick capture section
If the note exists, open it and summarise what's there.
```

When you type **/daily-note**, Claude reads this file and executes it.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-r9gd08sjkggg1.gif?width=1440&auto=webp&s=acc690502f563a0a942ce1c8ecb10a86748c730e](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-r9gd08sjkggg1.gif?width=1440&auto=webp&s=acc690502f563a0a942ce1c8ecb10a86748c730e)Your Ai, extensible.

Your Ai, extensible.

# Skills I Use Daily

- **/resume** - Load context from memory + recent sessions

- **/compress** - Save current session before ending

- **/preserve** - Add permanent learnings to [CLAUDE.md](http://claude.md/)

- **/daily-note** - Create/open today's note with structure

- **/meeting-note** - Process a meeting transcript into structured note

- **/inbox-process** - Go through +Inbox folder, file things properly

- **/weekly-review** - Summarise the week, prep for next

You don't need all of these on day one. Start with the memory system ( /resume, /compress, /preserve ) and add others as you feel the need.

# Making Skills Project-Aware

One thing I learned the hard way: global skills can cause cross-contamination. If you have multiple projects with their own session logs and [CLAUDE.md](http://claude.md/) files, you need skills that know which project they're in. The pattern I use:

```text
# Step 1: Detect Project
Check current working directory (pwd).
If pwd starts with "/path/to/main-vault":
  → This is Main Vault mode
  → Session logs go to Desktop AND Vault
  → Use vault-specific CLAUDE.md
Otherwise:
  → This is External Project mode
  → Session logs go to {project_root}/CC-Session-Logs/
  → Use project-local CLAUDE.md
```

This way, the same **/compress** skill works correctly whether you're in your personal vault, a work project, or a side project. Each gets its own memory.

# Part 6: The Frontmatter System

This is what makes "write once, surface everywhere" work.

Every note has metadata at the top. Obsidian calls this **"frontmatter"**. It looks like this:

```text
---
type: meeting
date: 2026-01-21
project: Project-Alpha
attendees: [Sarah, Mike, Dan]
status: completed
---
```

Then in your project file, you add a query:

```text
TABLE date, attendees
FROM "Areas/Work"
WHERE project = "Project-Alpha" AND type = "meeting"
SORT date DESC
```

This automatically shows all meetings related to Project-Alpha. You never manually link them.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-yislxi0nkggg1.gif?width=1440&auto=webp&s=e9f8ede6dfb1ed7200b782d4fdc829d4c87cd766](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-yislxi0nkggg1.gif?width=1440&auto=webp&s=e9f8ede6dfb1ed7200b782d4fdc829d4c87cd766)Tag once. Query everywhere.

Tag once. Query everywhere.

# Standard Frontmatter Fields

- **type** - What kind of note. Meeting, project, note, session, daily

- **date** - When created/occurred. YYYY-MM-DD

- **project** - Which project it relates to. Project nam

- **status** - Current state. Active, completed, on-hold, archived

- **tags** - Additional categorisation. Tag1, tag2]

Once you standardise this, Claude Code can create notes with the right frontmatter automatically. And your queries just work.

# Part 7: Daily Operations

Here's what my actual day looks like with this system:

# 🌅 Morning (5 min)

**/resume**

Claude loads recent context, reminds me of pending tasks I tell it my priorities for today It updates my daily note

# 🌆 During the Day

- Files land in Desktop/+Inbox/ or I quick-capture to vault

- For focused work sessions, I talk through problems with Claude

- It creates notes, searches past work, and updates files as needed

# 🌇 Ending a Work Session

**/compress**

Claude asks what to save Creates session log I close knowing nothing's lost

# 🌃 End of Day (2 min)

- Quick look at daily note, what got done?

- Anything to carry forward to tomorrow?

# 📆 Weekly (15 min)

**/weekly-review**

Claude summarises the week from daily notes + session logs Shows what got completed Highlights decisions made Lists open items

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-at4p0a6qkggg1.gif?width=1440&auto=webp&s=83bf2472dc524422e006843fc1463f9c20466bf9](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-at4p0a6qkggg1.gif?width=1440&auto=webp&s=83bf2472dc524422e006843fc1463f9c20466bf9)Your morning routine.

Your morning routine.

# Part 8: Making It Your Own

I've shown you my system. But the beauty of this approach is that it adapts to how you work.

Start Simple Don't try to build everything at once. Here's the order I'd suggest:

1. **Week 1** - Install Claude Code, connect to Obsidian, play with basic commands

2. **Week 2** - Set up the memory system (/resume, /compress, /preserve)

3. **Week 3** - Establish your folder structure and frontmatter standards

4. **Week 4** - Add custom skills based on what you find yourself doing repeatedly

# What Makes It Stick

The systems that last are the ones that reduce friction, not add it.

If capturing a meeting note takes more effort than not capturing it, you won't do it. If finding old information is harder than just figuring it out again, you'll keep reinventing wheels.

This system works because Claude handles the tedious parts. You just talk, and structured notes appear. You just ask, and past context resurfaces.

[https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-t0qfhj4skggg1.gif?width=1440&auto=webp&s=3a61a3deaa2083e095d32766a068a9d1d8cae38e](https://preview.redd.it/claude-code-obsidian-how-i-use-it-short-guide-v0-t0qfhj4skggg1.gif?width=1440&auto=webp&s=3a61a3deaa2083e095d32766a068a9d1d8cae38e)Your knowledge, accessible.

Your knowledge, accessible.

# Quick Reference

# Config Location:

- **Mac/Linux:** ~/.claude/settings.json

- **Windows:** %USERPROFILE%\.claude\settings.json

- **Skills Location:** ~/.claude/commands/

# Core Skills:

- **/resume** - Load context

- **/compress** - Save session

- **/preserve** - Update permanent memory

# What Would Help You Most?

I could go deeper on any of this. The skill templates, the Dataview queries, the folder structures, connecting to other tools like Jira or GitHub.

But I'd rather know what would actually be useful to **you**.

What's the workflow that eats your time right now? Drop it in the comments. I'll use the answers to figure out what to cover next.

If you build this system, I'd genuinely like to hear how it goes. What worked, what didn't, what you changed to make it yours.

141·51

