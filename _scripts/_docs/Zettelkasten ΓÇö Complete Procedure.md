---
doc_type: procedure
purpose: "Fleeting → Literature → Permanent note workflow and triage system"
title: Zettelkasten — Complete Procedure
date: 2026-06-05
tags: [procedure, zettelkasten, pkm]
---

# Zettelkasten — Complete Procedure

> A step-by-step guide to every aspect of the Zettelkasten system — how to capture, process, write, link, and navigate. The Zettelkasten is the thinking layer of the vault. Everything else in the system is infrastructure. This is where knowledge actually compounds.

**Location:** [[06-Zettelkasten/06-Zettelkasten|06-Zettelkasten/]]
**Current state:** 150 fleeting · 38 literature · 6 permanent · 4 MOCs

---

## What the Zettelkasten is — and why it works differently

Most note-taking systems are filing cabinets. You store things in them so you don't lose them. The Zettelkasten is not a filing cabinet — it's a thinking partner.

The difference: in a filing cabinet, notes are passive. In a Zettelkasten, notes are connected to each other through deliberate links. When you connect Idea A to Idea B, you often discover Idea C that you didn't know you had. That's not retrieval — it's generation. You're producing new thinking, not just storing old thinking.

This only happens if you follow the rules. The rules are not bureaucratic — every rule exists because skipping it eliminates the benefit.

**The four rules:**
1. One idea per note
2. Every permanent note title is a complete claim, not a topic
3. Every permanent note links to at least 2 other permanent notes
4. Notes are written in your own words — no copy-paste

---

## The four note types

| Type | Folder | Purpose | Lifespan |
|---|---|---|---|
| **Fleeting** | `06-Zettelkasten/Fleeting/` | Quick capture — don't lose the idea | 48 hours maximum |
| **Literature** | `06-Zettelkasten/Literature/` | What a source says, in your words | Permanent reference |
| **Permanent** | `06-Zettelkasten/Permanent/` | One atomic idea you actually believe | Permanent, grows with links |
| **MOC** | `06-Zettelkasten/MOC/` | Navigation map for a cluster of permanent notes | Created when needed |

---

## Part 1: Fleeting notes

### What they are

A fleeting note is a quick capture. Its only job is to preserve an idea long enough for you to process it. It is NOT a note you will keep — it is a staging area.

Think of it like a sticky note you write on your hand: valuable for the next few hours, worthless after that.

---

### Step 1: Create a fleeting note

**When to use it:** Any time a thought occurs that you don't want to lose but can't process right now. A book passage, a shower thought, a connection you noticed, a question that came up at work.

**How to create it:**

**Option A — Hotkey (fastest):**
Press `Ctrl+Shift+F` from anywhere in Obsidian. A new note is created in `06-Zettelkasten/Fleeting/` with the current timestamp as the filename. Start typing immediately.

**Option B — Daily note capture (for small captures):**
Press `Ctrl+Shift+C`. Type the thought. It appends to the Capture inbox in today's daily note without opening it. Use this for single sentences or fragments.

**Option C — In the Zettelkasten index:**
Open `06-Zettelkasten/06-Zettelkasten.md` → click "New fleeting note" in the Quick actions table.

---

### Step 2: Write the fleeting note

The bar for a fleeting note is extremely low. Just get the idea down. You don't need complete sentences. You don't need context. You need enough to reconstruct the idea when you come back to it.

**What to write:**
- The idea itself (even just a phrase)
- Where it came from (source, book, conversation, your own thinking)
- Which processing destination makes sense (permanent note? literature note? idea? delete?)

**Example of a good fleeting note:**
```
Struggling with the Powerflex 753 fault — the drive keeps faulting on overcurrent 
during ramp-up. Checked wiring, looks clean. Maybe accel time too aggressive? 
→ Process to: Troubleshooting log
```

**Example of a bad fleeting note:**
```
interesting idea
```

That second one is unprocessable. Future you has no idea what it means.

---

### Step 3: Process the fleeting note within 48 hours

This is the most important rule in the entire system. Fleeting notes that aren't processed within 48 hours become permanent clutter. You will look at them weeks later and have no idea what they meant.

**Processing means making one of five decisions:**

1. **Write a permanent note** — The idea is worth keeping as an atomic claim. Go to Part 3.
2. **Add to a literature note** — The idea came from a specific source. Find or create that literature note and add it there.
3. **Create a troubleshooting log** — The idea is a work incident. Use `Ctrl+Shift+T` to create a log.
4. **Move to Ideas** — The idea is project-shaped ("build a GPS tracker"). Move it to `05-Resources/Ideas/`.
5. **Delete** — The idea was a passing thought that doesn't have real value. Delete without guilt.

**When to process:** Sunday weekly review, Section 8 (Zettelkasten inbox). This is the built-in processing cadence. Every Sunday, open `06-Zettelkasten/Fleeting/`, work through what's there, and make a decision on each note.

**The fleeting inbox queue** in `06-Zettelkasten.md` shows all unprocessed fleeting notes sorted by date. The oldest ones at the top are your priority.

**The stats table** at the top of the Zettelkasten index shows live counts of Fleeting / Literature / Permanent / MOC notes. These counts are powered by a Dataview `GROUP BY type` query — they only count notes that have the correct `type:` frontmatter field. If a note is missing `type:` or uses a non-standard value, it won't appear in the count. The Zettelkasten templates pre-fill the correct `type:` value for each note type automatically.

---

## Part 2: Literature notes

### What they are

A literature note captures what a specific source (book, article, video, podcast) says — in your own words. One literature note per source.

The critical rule: **no copy-paste.** Copying highlights into a note feels like learning. It isn't. When you restate an idea in your own words, your brain has to actually process it. That processing is what creates understanding.

---

### Step 4: Create a literature note

**When to use it:** When you've read, watched, or listened to something and want to capture what it said in a way that's useful for future thinking.

**How to create it:**
1. Open `06-Zettelkasten/06-Zettelkasten.md` → click "New literature note"
2. OR navigate to `06-Zettelkasten/Literature/` and create a new note there (Templater applies the template automatically)

**How to name it:** The book or source title. Keep it simple and findable.

---

### Step 5: Fill in the literature note

The literature note has six sections:

**Section 1: The source in one sentence**
Before doing anything else, write one sentence that captures what the entire source is about. This forces you to understand the big picture before getting into details. If you can't write this sentence, you don't understand the source well enough to take notes from it.

**Section 2: Key ideas in your own words**
This is the most valuable section. Write 3 key ideas from the source — but not as the author said them. As *you* would explain them to someone who hasn't read it. No quotes allowed here.

Test: could you explain each idea to someone in a conversation? If yes, write it as you'd say it out loud. If no, you don't understand it yet — go back and read the relevant section again.

**Section 3: Quotes worth keeping**
Paste quotes *sparingly* — only 2–3 lines you would actually re-read. Not every highlight. Not every good sentence. The ones you'd want to show someone.

**Section 4: My reaction**
Do you agree with this? Does it change anything you believed? What questions does it raise? This section is where you start thinking for yourself about the source, not just summarizing it.

**Section 5: Permanent notes spawned**
After writing the key ideas section, you'll have ideas that belong as permanent notes. List them here as you create them — `[[permanent-note-filename]]`. This is the connection between the literature layer and the permanent note layer.

**Section 6: Connections**
Other notes, quests, or ideas this source connects to. Does the source connect to your Health Reset quest? Your automation work? A question you've been thinking about? Write those links here.

---

### Step 6: Link the literature note to its source book

If the source is a book you're tracking in `05-Resources/Books/`, open that book's note and link to the literature note in the "Linked notes" section:
```
**Literature note:** [[06-Zettelkasten/Literature/Atomic Habits]]
```

This keeps the reading list and the knowledge layer connected.

---

## Part 3: Permanent notes

### What they are

Permanent notes are the core of the Zettelkasten. Everything else exists to serve them. A permanent note is one atomic idea that you actually believe, written in a way that stands completely on its own.

The permanent note layer is where knowledge compounds. When you have 50 permanent notes linked together, reading one note surfaces connections to 10 others. Ideas from different domains start connecting in ways you didn't plan. This is the "conversation with yourself across time" that Luhmann described.

---

### Step 7: Recognize when to write a permanent note

Write a permanent note when:
- You've had an insight you want to preserve and build on
- A key idea from a literature note deserves to stand on its own
- You notice a connection between two existing ideas
- You've formed an opinion on something after reading or thinking about it
- The idea will still matter to you in 5 years

Do NOT write a permanent note for:
- Facts you can look up
- Information that's only relevant to a specific project (that goes in the project or work knowledge folder)
- Summaries of someone else's thinking (that's a literature note)
- Ideas you're not sure you believe yet (that's a fleeting note)

---

### Step 8: Title the permanent note with a claim

This is the most important skill in the entire Zettelkasten. The title must be a **complete claim** — a sentence that asserts something true. Not a topic.

**The test:** Can you agree or disagree with the title?
- "Habits" — NO (topic, can't agree or disagree)
- "Habits require identity change not just behavior change" — YES (claim, can agree or disagree)

**More examples:**

| ❌ Topic (don't use) | ✅ Claim (use this) |
|---|---|
| Flow states | Flow requires challenge calibrated just above current skill |
| PLC arrays | PLC arrays reduce ladder logic complexity by an order of magnitude |
| Sleep | Sleep deprivation degrades decision quality faster than it degrades physical performance |
| Attention | A single interruption costs 23 minutes of focus recovery |

**Why this matters:** The title forces you to have a position. A permanent note titled "Flow" could contain anything. A note titled "Flow requires challenge calibrated just above current skill" is specific enough to link to other specific claims — "Boredom signals that challenge is too low" or "Anxiety signals that challenge exceeds current skill." The connections between specific claims generate insight. The connections between topics generate filing.

**How to name the file:** Use the claim in kebab-case (lowercase, dashes between words):
`flow-requires-challenge-calibrated-above-current-skill.md`

All permanent notes use kebab-case claim titles — the numbered approach has been retired.

---

### Step 9: Create the permanent note

**Method 1 — Hotkey:**
Press `Ctrl+Shift+P`. A new note is created in `06-Zettelkasten/Permanent/`. The first thing you do is press `F2` and rename it to the claim. Do this immediately — before you write anything.

**Method 2 — Command palette:**
`Ctrl+P` → "QuickAdd: New Permanent Note" → enter the claim as the filename.

The Permanent Note Template is applied automatically. You'll see four sections to fill in.

---

### Step 10: Fill in the permanent note

The permanent note has four sections:

**Section 1: The idea**
State the claim from the title in 2–5 sentences. No hedging. No "this might be" or "I think perhaps." Commit to a position. Write as if explaining to your future self who will read this without context.

Bad: "Habits might be related to identity in some way."
Good: "Behavioral change that doesn't shift identity eventually reverts. The new behavior keeps triggering the old self-concept: 'I'm not someone who exercises regularly.' Identity change means starting with 'I am someone who moves every day' and collecting evidence for it. Once the identity is secure, the behavior maintains itself."

**Section 2: Why it matters**
So what? What changes if this is true? This forces you to understand the implications of the idea, not just the idea itself.

Example: "If identity drives behavior more than willpower, then trying harder at habits is the wrong intervention. The right intervention is acting as if the identity is already true and accumulating small pieces of evidence for it."

**Section 3: Evidence / examples**
A concrete example from your own life, from a book, or from something you observed. At least one. The example grounds the abstract claim in something real.

**Section 4: Counterarguments / limits**
Where does this idea break down or not apply? Every good claim has limits. Acknowledging them makes the note more accurate and also forces you to think more carefully about what you actually believe.

---

### Step 11: Add at least 2 outbound links

This step is non-negotiable. A permanent note with no links is an orphan — it can't contribute to unexpected connections, which is the entire point of the system.

**How to link:**
In the "Links" section of the template:
```
- [[name-of-other-permanent-note]] — *because (state the relationship)*
- [[another-permanent-note]] — *contrasts with / extends / supports*
```

The relationship text matters. "Because," "contrasts with," "extends," "supports," "depends on" — these specify how the ideas relate. Generic links ("see also") are less valuable than directional links ("this is why the previous note is true").

**Types of relationships:**
- **Supports:** "This evidence supports the claim in that note"
- **Contrasts with:** "This is the opposing view or limit case"
- **Extends:** "This takes the idea further in one direction"
- **Depends on:** "This note only makes sense if that note is true"
- **Applied in:** "This abstract claim is applied in that specific context"

**When you don't have 2 permanent notes yet:** Link to the most relevant literature note or MOC as a placeholder. Then come back when you have more permanent notes and upgrade the links.

---

### Step 12: Record the origin

In the "Origin" section, write where this note came from:
- A literature note: `[[06-Zettelkasten/Literature/Atomic Habits]]`
- A fleeting note: "Fleeting note from [date], thinking about the Health Reset"
- Your own thinking: "Emerged while writing the New Role Integration quest"

This traceability makes the note more trustworthy (you know it's not just a half-remembered idea) and lets you go back to the source if you want more context.

---

## Part 4: Maps of Content (MOCs)

### What they are

A Map of Content is a navigation note created when a cluster of permanent notes gets too large to hold in your head. It groups permanent notes by sub-theme, identifies the core tensions, and provides entry points.

A MOC is NOT:
- An outline for writing
- A folder structure
- A summary of the notes it links to
- Something you create upfront before having notes

A MOC IS:
- A navigation aid you create reactively, when you notice a cluster emerging
- A place that makes explicit what the connections between notes mean
- A note that names the open questions and tensions in a cluster

**Rule:** Create a MOC when you need one, not before. If you can hold all the notes in a theme in your head, you don't need a MOC yet.

---

### Step 13: Create a MOC

**When:** When a cluster of permanent notes around a theme gets too large to navigate mentally. Usually 8–10 related permanent notes is the signal.

**How:**
1. Navigate to `06-Zettelkasten/MOC/` and create a new note there — OR use the Quick actions table in the [[06-Zettelkasten/06-Zettelkasten|Zettelkasten index]]. Templater applies the MOC Template automatically. *(There is no "QuickAdd: New MOC" choice — MOC creation goes through folder navigation or the index link.)*
2. Name it: "Theme Name MOC" (e.g., "Automation Engineering MOC")
3. Use the MOC Template

**Sections to fill in:**
- **What this map covers** — one sentence describing the territory
- **Entry points** — the 2–3 permanent notes that are the best starting place for someone new to this theme
- **Core tensions/debates** — what are the big disagreements or open questions within this theme?
- **Note clusters** — group permanent notes by sub-theme with brief descriptions
- **Connected MOCs** — which other MOCs relate to this one?
- **Open questions** — what permanent notes still need to be written to fill gaps?

**Current MOCs in this vault:**
- [[06-Zettelkasten/MOC/Automation Engineering MOC|Automation Engineering MOC]]
- [[06-Zettelkasten/MOC/PKM and Zettelkasten MOC|PKM and Zettelkasten MOC]]
- [[06-Zettelkasten/MOC/Personal Growth MOC|Personal Growth MOC]]
- [[06-Zettelkasten/MOC/HAM Radio MOC|HAM Radio MOC]]

---

## Part 5: The weekly processing workflow

### What happens every Sunday

The Zettelkasten requires a weekly maintenance session. It's Section 8 of the weekly review: "Zettelkasten inbox." Budget 20–30 minutes.

---

### Step 14: Process the fleeting inbox

1. Open `06-Zettelkasten/06-Zettelkasten.md`
2. Look at the "Fleeting inbox" Dataview table — these are all notes with `type: fleeting`
3. Work through them oldest-first
4. For each note, make one of the five decisions (permanent note / literature note / troubleshooting log / idea / delete)
5. When a note is processed, either delete it or change its `type:` to something other than `fleeting` (if keeping for reference)

**Goal:** Inbox to zero every Sunday. Notes that are more than a week old are past the processing window — they should be ruthlessly deleted unless the idea is genuinely worth the time to process properly.

---

### Step 15: Write 2–3 permanent notes

This is the core habit. Every Sunday, write 2–3 permanent notes from whatever source material is richest — usually a literature note you've been reading or a recent insight.

**How to choose which claims to write:**
Use the [[06-Zettelkasten/Literature Processing Guide|Literature Processing Guide]] — it lists ready claims organized by Tier 1 (process now) through Tier 3 (process when ready). Pick the top item from the Tier 1 queue and write its highest-priority claim.

**Time budget:** 15–20 minutes per permanent note. Two notes = 30–40 minutes. This is the right trade-off — go slower and write notes that last, not faster and write notes that need to be rewritten.

---

### Step 16: Check the review queue

The Zettelkasten index has a "Review queue" — permanent notes not touched in 30+ days. The slip box only compounds if you revisit and relink old notes.

**How to use it:**
1. Open `06-Zettelkasten/06-Zettelkasten.md`
2. Look at the "Review queue" section
3. Pick one note from the queue
4. Read it — does it still seem true? Does a new connection to a recent note suggest itself?
5. Add at least one new link if possible

This step takes 5 minutes and directly increases the connection density of the system over time.

---

### Step 17: Check notes needing links

The "Notes needing links" section in the Zettelkasten index shows permanent notes with fewer than 2 outbound links. These are the weakest notes — they can't participate in unexpected connections.

**For each note with fewer than 2 links:**
1. Open the note
2. Read the claim
3. Think of other permanent notes it relates to — what does this note support, contrast with, or depend on?
4. Add at least one link with a relationship description

Even adding one link per note per week compounds significantly over time.

---

## Part 6: The long-term view

### How the Zettelkasten changes over time

**At 10 permanent notes:** The system feels like overhead. You're maintaining it more than getting value from it. This is normal. Keep going.

**At 25 permanent notes:** You start noticing that writing a new note naturally suggests links to 3–4 existing notes. The system is beginning to have surface area.

**At 50 permanent notes:** Reading a permanent note now surfaces unexpected connections. You discover something you believe but didn't know you'd articulated. The conversation with yourself is starting.

**At 100+ permanent notes:** The system becomes genuinely generative. You can't write a note in one cluster without it connecting to another cluster. Ideas compound non-linearly.

The vault currently has 6 permanent notes. The target is 15 by end of June, then 50 by end of Q3. The Literature Processing Guide has the material — the work is just writing.

---

### What makes a Zettelkasten fail

**Failure mode 1: Collecting without processing**
The vault started with 307 fleeting notes and 0 permanent notes. Collecting is comfortable. Processing is uncomfortable. The Zettelkasten only works if processing happens.

**Failure mode 2: Copy-pasting instead of restating**
If you copy highlights into notes, you're building a better filing cabinet, not a thinking partner. The restatement step — writing the idea in your own words — is where the understanding happens. Skip it and the value disappears.

**Failure mode 3: Topic titles instead of claim titles**
A permanent note titled "Habits" can link to anything. A permanent note titled "Habits require identity change not just behavior change" can only link to things that specifically relate to that claim. The specificity is what makes connections meaningful.

**Failure mode 4: Not linking**
Orphaned notes can't participate in the system. Before closing any permanent note, the Links section must have at least 2 entries. This is the rule that most people skip and the one that matters most.

**Failure mode 5: Treating MOCs as organization**
MOCs are navigation aids you create reactively, not an upfront folder structure. Creating MOCs before you have the permanent notes they're supposed to organize is backwards.

---

## Quick reference

| Action | Hotkey | Where it goes |
|---|---|---|
| New fleeting note | `Ctrl+Shift+F` | `06-Zettelkasten/Fleeting/` |
| Quick capture (no context switch) | `Ctrl+Shift+C` | Today's daily note capture inbox |
| New permanent note | `Ctrl+Shift+P` | `06-Zettelkasten/Permanent/` |
| New literature note | From Zettelkasten index → Quick actions | `06-Zettelkasten/Literature/` |
| New MOC | From Zettelkasten index → Quick actions | `06-Zettelkasten/MOC/` |
| Open Zettelkasten index | Click link from dashboard | `06-Zettelkasten/06-Zettelkasten.md` |
| Literature Processing Guide | Click link from index | `06-Zettelkasten/Literature Processing Guide.md` |

---

**Links:** [[06-Zettelkasten/06-Zettelkasten|Zettelkasten index]] | [[06-Zettelkasten/Literature Processing Guide|Literature Processing Guide]] | [[_docs/Slip Box Master Guide|Master Guide]] | [[06-Zettelkasten/MOC/PKM and Zettelkasten MOC|PKM MOC]]
