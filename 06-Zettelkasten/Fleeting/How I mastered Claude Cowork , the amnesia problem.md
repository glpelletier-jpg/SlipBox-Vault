---
title: "How I mastered Claude Cowork , the amnesia problem"
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, PKM, AutomationEngineering, HowTo]
---

# How I mastered Claude Cowork , the amnesia problem

---

date: 2026-02-17 11:35:39
created: 2026-02-17 11:34:56
categories:

- Obsidian Assembly

---

# **How I mastered Claude Cowork , the amnesia problem**

**
**

## **The Frustrating Pattern**

**In my** [first article](https://medium.com/ai-in-plain-english/how-claude-cowork-helped-me-build-my-second-brain-88261b6baeba)**, I built a Second Brain with Claude Cowork. In the** [second](https://medium.com/ai-in-plain-english/teaching-ai-to-plan-better-a-second-brain-follow-up-ca97af3be178)**, I taught it how to plan better by creating skills , procedural memory that persists across sessions.**

**I had built a system. AGENT.md described my vault, my methodology, my preferences. CLAUDE.md held the priority rules and skills architecture. Seven custom skills encoded specific workflows for vault maintenance, content integration, and more.**

**Sounds great on paper. Here’s what actually happened every time I started a new session:**

**Me:** **“What are the next steps for the vault?”**

**Claude:** **“I’d be happy to help! Could you tell me more about your vault structure?”**

***Every. Single. Time.***

**Total amnesia. Like onboarding a new employee who’s never heard of the company. The system I’d spent weeks building? Invisible. The skills, the methodology, the context? Gone.**

**I’d sigh, type** ***“Read AGENT.md first”*****, wait, then repeat** ***“Now read CLAUDE.md”*****, wait again, and finally , five minutes later , Claude would understand what I was talking about.**

**Five minutes doesn’t sound like much. But do that five times a week for a month and you’ve burned over an hour of pure friction. Worse than the time: the frustration. Every session started with the feeling that none of my previous work mattered.**

## **What I’d Built (and What Got Ignored)**

**To understand why this was so maddening, let me recap what I’d set up:**

**AGENT.md** **(vault root) , My vault’s identity card:**

- **Who I am, what I do, how I work**

- **Vault structure and folder organization**

- **Tag taxonomy and knowledge management philosophy**

- **How AI agents should interact with this vault**

**CLAUDE.md** **(.claude folder) , Technical operating manual:**

- **Priority rules (session summaries are source of truth, not static docs)**

- **Skills architecture and how to load them**

- **Session resumption protocol**

- **File naming conventions**

**Seven custom skills** **(.claude/skills/) , Procedural workflows:**

- **vault-maintenance, vault-refactoring-planning, obsidian-markdown, obsidian-bases, json-canvas, vault-assistance, authenticated-browser-access**

**All documented. All organized. All completely ignored at session start.**

## **The Investigation**

**I started a session specifically to figure out what was going wrong. Not to work on the vault , to debug the process itself.**

**The diagnosis was painfully simple.**

**Cowork sessions don’t automatically read your** `**.claude/CLAUDE.md**` **or** `**AGENT.md**` **at startup. The custom skills in** `**.claude/skills/**` **aren't loaded either , not until you explicitly tell Claude about them. All the context files I'd carefully populated? They sit there, waiting to be read. But nobody reads them.**

**The initialization protocol** ***existed*****. It was right there in CLAUDE.md:**

```text
MANDATORY FIRST STEP FOR EVERY SESSION:
1. Read AGENT.md from the vault/folder root
2. Read .claude/CLAUDE.md
3. Check for custom skills in .claude/skills/
4. Check the latest session summary for current progress
```

**Good instructions. Correct instructions. Completely useless instructions , because they lived inside the file that Claude wasn’t reading.**

## **The Chicken-and-Egg Problem**

**This is where it clicked.**

**I had an initialization protocol that said “Read AGENT.md first.” That protocol was stored** ***inside*** **the vault. But Claude had no reason to look inside the vault before receiving its first instruction from me.**

**The protocol that tells Claude to load context… required Claude to already have context.**

**Classic bootstrapping problem. The instructions were at the wrong architectural level.**

**Think of it like this: you can write the most detailed onboarding document in the world. Pin it to the office wall. But if the new hire doesn’t know to look at the wall, it doesn’t matter how good the document is.**

**I needed the instruction to come from** ***outside*** **the vault. From somewhere Claude already looks before the first message.**

## **The Fix**

**The solution was embarrassingly simple.**

**Claude Desktop App → Settings → Personal Preferences.**

**That’s it.** ***Personal Preferences*** **are injected into every session at the system level , before any user message, before any file is read, before anything happens. It’s the one place where instructions are guaranteed to reach Claude at the very start.**

**Here’s what I added:**

```text
MANDATORY FIRST STEP FOR EVERY SESSION:
When a folder is selected/mounted, BEFORE responding to any request:
1. Read AGENT.md from the vault/folder root
2. Read .claude/CLAUDE.md
3. Check for custom skills in .claude/skills/ and note their purposes
4. Check the latest session summary for current progress
Only AFTER loading this context, proceed with my request.
If AGENT.md doesn't exist in the folder, skip this protocol and work normally.
```

**Same instructions I’d had before. Different location. That’s the entire fix.**

**The fallback line is important , it means this works universally. If I open a random folder without an AGENT.md, Claude just proceeds normally. No errors, no confusion. But when I open my vault? Automatic initialization.**

## **The Proof**

**The same session that diagnosed the problem also proved the fix.**

**After updating Personal Preferences, I tested it. Fresh context window. No manual priming.**

**Me:** **“What are the next steps?”**

**Claude:** ***[reads AGENT.md, CLAUDE.md, latest session summary]*** **“Based on your session from yesterday, you processed 11 clippings and created 22 permanent notes. You have 30 clippings remaining in the backlog. The next scheduled review is February 13…”**

**Context. Methodology. Awareness of recent work. All from the first message. No manual loading. No five-minute warm-up.**

**It just worked.**

## **What Goes Where**

**The real insight wasn’t just the fix , it was understanding** ***why*** **the fix was in the wrong place to begin with.**

**Every piece of context has a correct architectural level:**

**Personal Preferences** **, Universal behavior across all folders. System-level, always loaded first. This is where bootstrap instructions live.**

**AGENT.md** **, Vault-specific identity and structure. Describes** ***this*** **vault to any AI agent: who you are, how the vault works, what the philosophy is.**

**CLAUDE.md** **, Technical rules and skills architecture. The operating manual for** ***this*** **vault: priority rules, file naming, session resumption protocol.**

**Skills** **, Reusable procedural workflows. Triggered when specific work is needed: vault maintenance, content integration, canvas creation.**

**Session Summaries** **, Historical progress. Tracks what happened and what’s next. The source of truth for where things stand.**

**Before the fix, I had a system-level instruction living at the vault level. That’s like putting your computer’s boot sequence on a USB drive that only gets mounted after boot.**

**The lesson:** **Recurring problems need to be solved at the right architectural level.** **Session-level fixes don’t solve system-level problems. I know this from DevOps , it’s the same reason you don’t put infrastructure config inside the application. But I had to learn it again in a new context.**

## **The Numbers**

**Before the fix:**

- **Context loading per session: 3–5 minutes (manual)**

- **Sessions per week: ~5**

- **Weekly waste: 15–25 minutes**

- **Annual waste: ~13–22 hours**

- **Frustration level: High**

**After the fix:**

- **Context loading per session: 0 minutes (automatic)**

- **Setup time: 15 minutes (one-time)**

- **Annual savings: 13–22 hours**

- **Quality improvement: Better first response, fewer mistakes, smoother workflow**

**The ROI is absurd. Fifteen minutes of work, permanently saving 15–25 minutes every week. The payback period is literally one week.**

**But the real value isn’t the time. It’s the** ***friction*****. Starting every session ready to work instead of explaining yourself changes how the collaboration feels. It goes from “new employee, every day” to “colleague who remembers yesterday.”**

## **What I Learned**

**1. System-level problems need system-level solutions**

**The problem occurred every session. That makes it systemic. Solving it inside the vault (session-level) was like putting a band-aid on an architecture problem. Personal Preferences (system-level) was the right place.**

**2. Bootstrapping matters**

**The chicken-and-egg problem is real. If your instructions require the AI to already know something it doesn’t know yet, those instructions will never execute. Think about where your AI first looks , that’s where your bootstrap instructions need to live.**

**3. The right location matters more than the right content**

**My initialization protocol was perfect. It had been perfect for weeks. The content wasn’t the problem , the location was. Same instructions, different home, completely different result.**

**4. Meta-improvements compound the hardest**

**This session was 15 minutes of meta-work. That 15 minutes will save time on every future session, improve every future collaboration, and make every future skill more effective , because the skills now actually get loaded from the start.**

**In my Second Brain article, I talked about compound knowledge. In the planning article, compound workflows. This one is compound infrastructure: fixing the foundation that everything else sits on.**

**5. Document the fix, not just the system**

**I had great documentation about my vault system. But I hadn’t documented** ***how the system bootstraps itself*****. That’s a gap worth closing. The system isn’t just the vault , it’s the initialization, the preferences, the architectural decisions about what lives where.**

## **What’s Next**

**The amnesia problem is solved. But the broader challenge continues.**

**Personal Preferences handle the bootstrap. But what about the skills themselves? Currently, my seven custom skills aren’t in Claude’s available skills list , they have to be manually read with the Read tool. That works now because the Personal Preferences protocol triggers the reading. But it’s still indirect.**

**The ideal future:**

- **Custom skills recognized and loaded automatically like built-in skills**

- **Session summaries used to pre-populate context without explicit file reads**

- **A single “vault profile” that encapsulates everything Claude needs to know**

**We’re not there yet. But the amnesia problem , the one that made every session feel like starting over , that one’s fixed.**

**And honestly? Fixing it felt like the biggest win since building the vault itself.**

## **Technical Details**

**Tools Used:**

- **Obsidian (personal knowledge base)**

- **Claude Cowork (AI collaboration partner)**

- **Claude Desktop App → Personal Preferences (system-level configuration)**

**The Problem:**

- **Cowork sessions don’t auto-read** `**.claude/CLAUDE.md**`**,** `**AGENT.md**`**, or custom skills**

- **Context initialization protocol existed but at the wrong architectural level**

- **Every session required 3–5 minutes of manual context loading**

**The Solution:**

- **Moved initialization protocol to Personal Preferences (system-level)**

- **Protocol reads vault context files before first response**

- **Includes fallback for non-vault folders**

- **One-time setup: 15 minutes**

**Impact:**

- **Immediate: Zero manual context loading**

- **Weekly: 15–25 minutes saved**

- **Annual: 13–22 hours recovered**

- **Quality: Better first response, automatic skills awareness, session continuity**

***Author’s Note: This article was written with assistance from Claude (Anthropic). The experience, frustration, investigation, and solution are entirely my own. The irony is not lost on me: I used the tool that had the amnesia problem to write about solving the amnesia problem. At least this time, it remembered my preferences.***

**About the Author****Oliver Eichler is a DevOps Engineer at ORCAYA GmbH (part of DigitalNativeAlliance) based in Germany, specializing in e-commerce infrastructure and cloud platforms. He’s currently transitioning toward a GenAI Solution Engineering role, exploring how AI can enhance traditional DevOps workflows. When not solving infrastructure problems or teaching AI to remember things, he’s building systems that make sure he never has to explain himself twice.**

**Connect:** [LinkedIn](https://www.linkedin.com/in/oeichler/) **|** [Medium](https://medium.com/@oeichler)

## **Related Reading**

- [How Claude Cowork Helped Me Build My Second Brain](https://medium.com/ai-in-plain-english/how-claude-cowork-helped-me-build-my-second-brain-88261b6baeba) **, Article #1: Building the system**

- [Teaching AI to Plan Better: A Second Brain Follow-up](https://medium.com/ai-in-plain-english/teaching-ai-to-plan-better-a-second-brain-follow-up-ca97af3be178) **, Article #2: Skills and procedural memory**

- [Building Your AI-Powered Second Brain](https://medium.com/vibe-coding/building-your-ai-powered-second-brain-how-claude-code-obsidian-changed-everything-about-my-37dc3bdd199e) **, Alek Dobrohotov’s methodology that inspired the approach**

- [Introduction to the Zettelkasten Method](https://zettelkasten.de/introduction/) **, Networked thinking fundamentals**

