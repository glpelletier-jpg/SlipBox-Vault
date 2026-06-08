---
title: (S)(Article) How Claude Cowork Helped Me Build My Second Brain - Oliver Eichler
id: 20260217060000
date: 2026-02-17
type: fleeting
tags: [fleeting]
---

# (S)(Article) How Claude Cowork Helped Me Build My Second Brain - Oliver Eichler

**Cover**

[https://miro.medium.com/v2/resize:fit:1024/1*U_NP_z0ZyyUCYkTYoL_ryw.jpeg](https://miro.medium.com/v2/resize:fit:1024/1*U_NP_z0ZyyUCYkTYoL_ryw.jpeg)

**Content**

[https://miro.medium.com/v2/resize:fit:1024/1*U_NP_z0ZyyUCYkTYoL_ryw.jpeg](https://miro.medium.com/v2/resize:fit:1024/1*U_NP_z0ZyyUCYkTYoL_ryw.jpeg)

## Summary

## Key Takeaways

## Transcript

[Sitemap](https://medium.com/sitemap/sitemap.xml)## [Artificial Intelligence in Plain English](https://medium.com/ai-in-plain-english?source=post_page---publication_nav-78d064101951-88261b6baeba---------------------------------------)

[https://medium.com/ai-in-plain-english?source=post_page---post_publication_sidebar-78d064101951-88261b6baeba---------------------------------------](https://medium.com/ai-in-plain-english?source=post_page---post_publication_sidebar-78d064101951-88261b6baeba---------------------------------------)

New AI, ML and Data Science articles every day. Follow to join our 3.5M+ monthly readers.

[https://miro.medium.com/v2/resize:fit:640/format:webp/1*U_NP_z0ZyyUCYkTYoL_ryw.jpeg](https://miro.medium.com/v2/resize:fit:640/format:webp/1*U_NP_z0ZyyUCYkTYoL_ryw.jpeg)

Image generated with Mistral AI

## The Problem I Couldn’t Ignore

As a DevOps engineer, I solve problems all day long. Infrastructure issues, networking configurations, deployment pipelines — the same problem often shows up weeks or months apart. And here’s the embarrassing part: I kept solving the same problems over and over again.

*“I know I fixed this Proxmox SDN routing issue before…”*

I’d spend 30 minutes searching through Apple Notes, my Obsidian vault, scattered text files, and old chat messages. Eventually, I’d give up and just re-solve it from scratch — wasting another two hours figuring out what I’d already figured out months ago.

My knowledge was trapped. I had some notes in my Obsidian vault, but no real system. I had hundreds of Apple Notes mixing project TODOs with technical solutions. I had knowledge, but I couldn’t find it when I needed it.

The real kicker? I’d read about Zettelkasten and PARA methods. I knew better systems existed. But every time I tried to reorganize, I’d get overwhelmed by the options and analysis paralysis would set in. *Which method is right? How do I structure this? Should I reorganize everything or start fresh?*

I needed help. Not to tell me what to think, but to help me think clearly about my own knowledge.

## The Conversation That Changed Everything

On January 18, 2026, I opened a new Claude Cowork session with a simple request:

> *“Analyze my vault and propose an approach for better navigation. I’m struggling with finding information again. I’ve heard about Zettelkasten and PARA methods but don’t know how to apply them to my vault.”*

What followed was a three-hour conversation that didn’t just reorganize my notes — it redesigned how I work with knowledge entirely.

## The Problems We Uncovered

What started as “help me organize my vault” quickly revealed deeper issues:

## Problem 1: Collection vs. Connection

My vault was optimized for *collecting* information, not *connecting* it. I had folders like `KnowledgeBase/`, `Clippings/`, `Projects/`, but no way to see how a Proxmox networking note related to an active client project. Every note lived in one folder, but my work crosses folders constantly.

Claude helped me see this: *Your knowledge is a web, not a tree. Folders force hierarchy. You need Maps of Content.*

## Problem 2: Knowledge and Action Were Mixed

This was the Apple Notes problem all over again. My TODO items sat next to technical solutions, next to meeting notes, next to random ideas. When I opened my vault for work, I couldn’t tell what needed doing *today* from what I might need *someday*.

The insight: Separate action from knowledge. They serve different purposes and need different systems.

## Problem 3: No Capture Workflow

When I solved a problem, I had no systematic way to capture the solution for later. Sometimes I’d write a quick note. Sometimes I’d think “I’ll remember this.” Spoiler: I never did.

Without a capture workflow, every solution was temporary. My knowledge was stuck in my head or scattered in unmaintained notes.

## Problem 4: The Re-Solving Problem

This was the real pain point. The math is brutal:

- Solve problem: 2 hours

- Can’t find solution later: 30 minutes searching

- Give up, re-solve: 2 hours

- Total waste: 2.5 hours

And this wasn’t happening once. This was happening weekly. Sometimes multiple times per week.

## The Solution: A Hybrid System

Claude didn’t push me toward Zettelkasten OR PARA. Instead, we designed a hybrid that addressed my actual workflow:

PARA for Action (Projects, Areas, Resources, Archives)

- `1-Projects/` - Active work with deadlines (TimeTracker, VfB Shop, etc.)

- `2-Areas/` - Ongoing responsibilities (Companies, Infrastructure, Family)

- `3-Resources/` - Reference material organized by topic

- `TODO-NEW.md` - My daily command center

Zettelkasten for Knowledge (Atomic notes, linked thinking)

- `ZK/Permanent/` - Processed, reusable solutions

- `ZK/Fleeting/` - Quick captures that need processing

- `ZK/Literature/` - Processed articles and clippings

Maps of Content (MOCs) as the Bridge

- `MOC - AI Development & Automation` - Hub for my 21 AI clippings

- `MOC - Infrastructure & DevOps` - Hub for Proxmox, networking, tools

- `MOC - Knowledge Management` - Meta-knowledge about the system itself

The genius of MOCs: A note can appear in multiple maps with different contexts. My Proxmox SDN note shows up in:

- Infrastructure MOC (as core virtualization knowledge)

- Networking MOC (as SDN implementation)

- Active projects MOC (as reference for current client work)

One note. Multiple perspectives. No forced hierarchy.

## The Two-Loop Workflow

The system operates on two loops:

Loop 1: Action (Getting Work Done)

```c
Morning → Open TODO-NEW → See today's priorities → Work
During → Solve problems → Quick capture (2 min)
Evening → Update TODO → Plan tomorrow
```

Loop 2: Knowledge (Never Solving Twice)

```c
Sunday → Process captures → Create permanent notes → Link to MOCs
```

The bridge between loops: Solution capture

When I solve something now:

1. Create `Quick - [Problem].md` in `ZK/Fleeting/` (2 minutes max)

2. Write: Problem, Solution, Commands/Code, Time this saves

3. Keep working

Every Sunday:

1. Transform quick captures into proper notes in `ZK/Permanent/`

2. Add to relevant MOCs with context

3. Delete quick captures

Result: Every solution captured once, reusable forever.

## The Implementation

Claude helped me break this into three phases:

**Week 1: Reorganize Current Vault**

- Create folder structure

- Build first 3 MOCs

- Move existing notes to new homes

- Set up TODO-NEW dashboard

**Week 2–3: Migrate Apple Notes**

- Audit what’s actually valuable (top 10–20 notes)

- Migrate technical solutions (highest ROI)

- Migrate active project info

- Leave the rest (no need to migrate everything)

**Week 4+: Daily Workflow**

- Morning/evening routines (15 min/day total)

- Solution capture during work (2 min per solution)

- Sunday processing (30 min weekly)

## The Process: Human + AI

Here’s what’s important to understand: I drove this entire process.

Claude didn’t tell me how to organize my brain. I did. Claude asked questions that helped me articulate what I already knew but hadn’t organized:

*“How much time do you spend on deep thinking vs. executing projects?”**“What information do you struggle to find most often?”**“When do you capture information currently?”*

My answers revealed my actual workflow. The system we built reflects how I actually work, not some idealized productivity system.

Claude’s role was to:

- Ask clarifying questions I hadn’t considered

- Provide structure to my half-formed ideas

- Create documentation I could reference later

- Show me patterns I was too close to see

The system is mine. Claude was the thinking partner who helped me build it.

## The Artifacts

By the end of our conversation, I had:

8 new documentation files:

- Complete vault reorganization plan

- Deep-dive on Maps of Content concept

- Daily workflow system with routines

- First MOC (AI Development) with my 21 clippings organized

- Enhanced TODO dashboard

- Quick start guide with 3-phase implementation

- Visual system map

- Session summary

A CLAUDE.md memory file:So future Claude Cowork sessions understand my vault structure without re-explanation.

Most importantly: A system I could actually use.

Not aspirational. Not theoretical. Practical, implementable, and tailored to my actual work.

## The Math: Why This Works

Time Investment:

- Week 1 setup: 3–4 hours (one-time)

- Apple Notes migration: 3–4 hours (one-time)

- Daily routine: 15 minutes/day

- Weekly processing: 30 minutes

Time Saved:

- Week 1: Building (0 hours saved)

- Week 2: First reuses (2–4 hours saved)

- Week 3: Growing (4–6 hours saved)

- Month 3: Compounding (10–15 hours/month saved)

The compound effect:

- Month 1: 10 solutions captured

- Month 2: 25 solutions captured

- Month 3: 50+ solutions captured

- Each reusable indefinitely

After 3 months, I estimate saving 10–15 hours per month by never re-solving the same problems.

That’s the simple math behind.

## What I Learned

1. You can’t organize what you don’t understand

Before talking with Claude, I knew I had a problem but couldn’t articulate it clearly. The conversation forced me to think about how I actually work, not how I think I should work.

2. Hybrid systems beat pure systems

Zettelkasten alone is too theoretical for daily work. PARA alone becomes a filing system. MOCs alone are just indexes. But combined? They cover everything I need.

3. Capture is more important than organization

I spent years trying to organize perfectly. What I really needed was a 2-minute capture workflow and a weekly processing routine.

4. The system has to match your work

I’m a DevOps engineer working on AI projects. My system reflects that: infrastructure solutions, AI development knowledge, active projects. Your system should reflect your actual work, not someone else’s ideal.

5. Tools should help you think, not think for you

Claude didn’t solve my knowledge management problem. I did. But I couldn’t have done it alone. The right question at the right time unlocks thinking. That’s what AI is good for.

## The Migration Challenge

The next hurdle: my Apple Notes. Hundreds of notes mixing:

- Technical solutions I need

- Old project notes I don’t

- Random ideas from 2019

- Meeting notes from clients I no longer work with

The temptation: migrate everything.The reality: migrate the top 10–20 notes that save the most time.

Phase 2 will be selective. Only solutions to recurring problems. Only active project context. Everything else can stay in Apple Notes as archive.

## What’s Next

This week:

- Create folder structure (15 min)

- Build 3 MOCs (45 min)

- Move existing notes (2 hours)

- Test with real work (daily)

Week 2–3:

- Audit Apple Notes (30 min)

- Migrate top 10 technical solutions (1.5 hours)

- Migrate active project info (1 hour)

Week 4+:

- Daily morning/evening routines (15 min/day)

- Capture solutions as I work (2 min each)

- Weekly processing (30 min Sunday)

Month 3:

- 50+ solutions captured and reusable

- Find any solution in ❤0 seconds

- Zero re-solved problems

- Measurable time savings

## Closing Thoughts

I’ve spent the last decade solving infrastructure problems professionally. In three hours with Claude Cowork, I solved a different kind of infrastructure problem: how to build a system that makes my knowledge work for me instead of against me.

The irony isn’t lost on me. I work in DevOps — I know the importance of good systems, automation, and reducing toil. Yet my knowledge management was pure toil: manual, inefficient, and resulting in constant rework.

This isn’t about AI replacing human thinking. It’s about AI helping humans think more clearly about their own problems. Claude didn’t design my system. Claude helped me design it by asking questions I should have asked myself years ago.

The real test starts now. Building the system is one thing. Using it daily is another. But for the first time in years, I have clarity about where my knowledge goes, how to find it, and how to make it compound over time.

That’s worth far more than three hours of conversation.

## Technical Details

Tools Used:

- Obsidian (personal knowledge base)

- Claude Cowork (thinking partner & documentation)

- Apple Notes (legacy system being migrated from)

Methodologies Applied:

- PARA (Tiago Forte) — Action organization

- Zettelkasten (Niklas Luhmann) — Knowledge building

- Maps of Content (Nick Milo) — Navigation layer

Time Commitment:

- Initial conversation: 3 hours

- Documentation created: 8 files

- Setup estimated: 6–8 hours over 3 weeks

- Daily maintenance: 15 min/day + 30 min/week

Expected ROI:

- Breakeven: Week 3–4

- Savings after Month 3: 10–15 hours/month

- Compounding: Each solution reusable indefinitely

*Author’s Note: This article was written with assistance from Claude (Anthropic) as a writing tool. The experiences, problems, insights, and solutions are entirely my own. Claude helped structure and articulate ideas I had already formed through our conversation. Think of it as having an excellent editor who asks clarifying questions — the content is human, the polish is collaborative.*

**About the Author**

Oliver Eichler is a DevOps Engineer at ORCAYA GmbH (part of DigitalNativeAlliance) based in Germany, specializing in e-commerce infrastructure and cloud platforms. He’s currently transitioning toward a GenAI Solution Engineering role, exploring how AI can enhance traditional DevOps workflows. When not solving infrastructure problems, he’s trying to build systems that prevent re-solving the same infrastructure problems.

Connect: [[LinkedIn](https://www.linkedin.com/in/oeichler/)] | [[Medium](https://medium.com/@oeichler)]

## Related Reading

- [My Christmas Holiday Season Project: TimeTracker](https://medium.com/@oeichler/my-christmas-holiday-season-project-just-another-time-tracker-97eeba250581) — Building a time tracking app with Claude Code

- [Building Your AI-Powered Second Brain](https://medium.com/@aleksandardobrohotov/building-your-ai-powered-second-brain-how-claude-code-obsidian-changed-everything-about-my-37dc3bdd199e) — Alek Dobrohotov’s methodology that inspired this approach

- [Introduction to the Zettelkasten Method](https://zettelkasten.de/introduction/) — The foundation of networked thinking

- [The PARA Method](https://fortelabs.com/blog/para/) — Organizing for actionability

## More from Oliver Eichler and Artificial Intelligence in Plain English

## Recommended from Medium

[

See more recommendations

]([https://medium.com/?source=post_page---read_next_recirc--88261b6baeba---------------------------------------](https://medium.com/?source=post_page---read_next_recirc--88261b6baeba---------------------------------------))

