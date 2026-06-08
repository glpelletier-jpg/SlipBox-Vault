---
title: "An Opinionated Guide to Obsidian for Studying & Research"
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting]
---

# An Opinionated Guide to Obsidian for Studying & Research

---

date: 2025-11-05 10:17:20
created: 2025-11-05 10:12:02
categories:

- Zettlekasten

---

# An Opinionated Guide to Obsidian for Studying & Research

This guidev1.1.0 presents an approach to using Obsidian. It is focused on studying & research, but should be useful beyond these contexts — the main restriction is that it is *not* dedicated to task/project management. In this way, and also in many other ways, it is basically a digital take on the *Zettelkasten*[2](https://obsidian-guide.neocities.org/guide#footnote-2), i.e. focused on knowledge and idea generation, and on helping to create writing output. This guide is partly the result of engagement with literature & debates on personal knowledge management systems,[3](https://obsidian-guide.neocities.org/guide#footnote-3) and partly the result of me using Obsidian actively since 2020 to support my philosophy studies. The system I present here has been very valuable to me over the past few years, so I hope that it can also be for others.

This guide aims to not just offer some ways of doing things and presenting them as *the one way to do it*. Instead, it aims to explain & justify its recommendations, and to generally offer ways of thinking about how to use Obsidian. In this way, it hopefully helps you build a vault that fits the way you think. Don't be intimidated by the guide's length — the system I propose is not complicated to use. I think this is important — the system is a tool that has value insofar as it is useful to you, and if it gets too complicated, its value will likely decrease.[4](https://obsidian-guide.neocities.org/guide#footnote-4)

The guide's structure:

- [Section 1](https://obsidian-guide.neocities.org/guide#obsidian-basics) presents some Obsidian basics for beginners — skip this if you're not a beginner.

- [Section 2](https://obsidian-guide.neocities.org/guide#approach-philosophy) lays out & explains the general approach to building the vault & writing notes.

- [Section 3](https://obsidian-guide.neocities.org/guide#practical-implementation) discusses various aspects of practically implementing the system.

- [Section 4](https://obsidian-guide.neocities.org/guide#technical-implementation) discusses plugins, AI integration, and some further advanced topics.

## 1. Obsidian Basics

### 1.1 What is Obsidian?

Obsidian is a note-taking & knowledge management application that works on local folders. It allows your notes to form a network rather than just living in a hierarchical set of folders. There are a lot of things you can do with Obsidian, but the core is:

- **Plain text storage**: Your notes are stored as Markdown (.md) files on your device. These are simple & future-proof & can be ported to other applications than Obsidian.

    - But your Obsidian vault can also contain other files such as images, pdfs, mindmaps, code.

- **Local-first**: Your data remains on your devices by default, and is thereby entirely under your control.

- **Links between notes**: Notes can link to one another (think: Wikipedia). This is probably the most important feature of Obsidian, and allows for the creation of linked networks of knowledge.

- **Extensibility**: Obsidian has a vast plugin ecosystem that allows customization for different workflows.

### 1.2 Quick Start

#### 1.2.1 Installation and Setup

1. Download Obsidian from [www.obsidian.md](https://www.obsidian.md/)

2. Create a vault (a folder on your computer)

3. Start creating notes

#### 1.2.2 Basic Markdown

Obsidian uses Markdown for formatting notes:

```text
# Heading 1
## Heading 2
...
**Bold text** //note that hotkeys like ctrl-b also work
*Italic text* //note that hotkeys like ctrl-i also work
- Bullet points
- Like this
1. Numbered lists
2. Like this
> Blockquotes like this
[](Internal%20links) to other notes (!)
[Alias](Internal%20links%20with%20alias) //the link is displayed with alias text rather than original text
[External links](https://example.com)
![Images](path/to/image.jpg)

> [!callout type] Callout Title
> Callout content
—- horizontal dividing lines
```

More Markdown

This covers the basics, but Obsidian supports extended Markdown including tables, code blocks, task lists, and more. See [Obsidian's Help Documentation](https://help.obsidian.md/syntax) for details.

#### 1.2.3 Some Pointers

If you're new to Obsidian, I'd recommend clicking around the interface and the settings a bit (the settings are now hidden at the bottom of the left sidebar). The core parts of the interface are:

- Editor

    - You write and read notes in here

- Left sidebar & right sidebar

    - You can pin various panels (files panel, search panel, ...) & notes into these

- Ribbon menu

    - A customisable ribbon with command buttons on the left

When clicking through the settings, it's worth knowing that most of Obsidian's features can be found and turned on/off in "Core plugins" (I discuss some core plugins in 4.1.1). If you don't like the way Obsidian looks, you can browse through alternate themes in "Appearance". You can deal with community plugins later (I discuss them in 4.1.2). Generally, look through the settings when you feel like it, you don't have to optimise everything straight away.[5](https://obsidian-guide.neocities.org/guide#footnote-5)

## 2. Approach & Philosophy

### 2.1 Central Questions

Central questions you will ask yourself as you use Obsidian are:

- What should my notes look like?

- How should I structure my vault?

- What should my workflow with Obsidian look like?

- What sorts of tips & tricks, technical implementations, plugins etc. should I use and implement?

To answer these questions, we should look at what it is we want out of Obsidian.

### 2.2 Vault Goals

The ultimate goal is to create a knowledge system that:

- ***(G1)*** *You actually keep using* - Any system, no matter how clever, fails if abandoned.

- ***(G2)*** *Creates value* - The system should be valuable to you — otherwise, why use it?

- ***(G3)*** *Creates that value reliably, over time* - The system should become more valuable as you add notes, and it should be robust when parts of your approach evolve & change.

### 2.3 Vault Roles

Let's first think about how your Obsdian vault can create value for you (G2). Here are some valuable roles it can play (when focusing on research and studying):

1. ***(R1)*** *Central storage & collection* - The vault can be a place to collect all sorts of notes & documents.

    - E.g. course notes, paper & book notes, talk notes, handouts, excerpts, web clippings, designs, formulas, code pieces, random ideas & thoughts, etc.

    - *How this is valuable*: Things don't get lost, are in one place, can easily be found (contrast this with physical notes spread across notebooks, or digital notes spread across apps and documents). This allows old notes to resurface, and allows you to link diverse kinds of notes & documents. Also, it allows you to update existing notes rather than having to make new notes.

2. ***(R2)*** *Look-up* - The vault can be a place to look up all sorts of knowledge & information.

    - *How this is valuable*: You can quickly answer your questions & find things. Is this still valuable in the age of AI/LLMs? Yes.

        - First, this is your own knowledge, much of which is not contained in the datasets LLMs are trained on. E.g. your own ideas, or notes about a talk you heard, or notes about books and academic articles (most of which are paywalled), or code you wrote, or the syllabus of a course you took, or the recipe of a friend.

            - If you write good notes, you also e.g. rarely have to read a paper a second time — you can look up the note instead.

        - Second, since you wrote these notes, they are written in a way (/frame things in a way) that is uniquely relevant to you. And, within your vault, they are interlinked and contextualised.

        - Third, and this may just be a temporary advantage, but one important to academics, is that in your own notes, you can keep track of the sources of ideas and quotes.

    - However, AI can still be useful, and be a supplementary rather than a parallel system to your Obsidian vault. For more on this see section 4.2.

3. ***(R3)*** *Deep thinking & understanding & discovery* - The vault can be a place in which you think.

    - Writing (notes) is a way to think & understand & work through problems & solidify knowledge (both in your notes and in your head). As much as this is probably no news, this is central to why note-taking, and doing so in a systematic way, is valuable.

    - (Thinking about) linking notes can solidify your knowledge and help you generate new connections and insights. E.g.: *oh this problem works the same way as this other problem in this other debate*, or: *oh this author treats this subject from a very different angle than this other author*, etc.

        - In other words, putting notes "into conversation" with each other allows for surprise and discovery. The notes might challenge each other or interact in interesting ways. Luhmann emphasised this as one of the most valuable aspects of his Zettelkasten.

    - Browsing through & revising notes is valuable in much of the same ways. Also: you can see how your knowledge & opinions about things have changed, or identify knowledge gaps.

    - *How this is valuable*: That the above is valuable is hopefully self-evident — it's arguably the most valuable of the roles your vault can play.[6](https://obsidian-guide.neocities.org/guide#footnote-6)

4. ***(R4)*** *Writing output* - The vault can help with producing writing output.

    - Well-kept personal notes can be invaluable help in writing for others (i.e. in writing papers, books, blog posts, etc.). You don't start at zero, but already pre-processed (/wrote) lots of things in your notes which you can then use. Obsidian is also great for planning papers — with the Canvas feature, you can even do so visually (see 4.1.1).

    - Note: You can also do the writing itself within Obsidian rather than in a dedicated word processor. Obsidian has most features needed for writing (a weakness might be text rendering), and even has great LaTeX-writing functionalities (with the right plugin). Note that many still use Word, Overleaf, Google Docs, Scrivener etc. for actually writing down the text — this comes down to preference.

These are the most important ways the vault can create value when focusing, broadly, on research and studying. Some use it in other ways and the vault thus plays other valuable roles for them — some e.g. use Obsidian for broadly diaristic purposes, some for world-building & TTRPGs, some for task management etc.

### 2.4 Principles

The goals in 2.2 and the ways in which the vault can create value (2.3) inform principles about how one should approach building the vault. Here are some important ones:

- ***(P1)*** *Minimize friction and effort* - The system should require the smallest amount of possible extra work.

    - This is mainly because of (G1): any system that requires too much extra work will be abandoned. Also, less added work means higher productivity (that is: higher value / time).

    - Ideally, in some areas, the system should even reduce the amount of work you have to do (via automation, clear procedures etc.).

- ***(P2)*** *Start simple, add complexity as needed* - The system should be as simple as possible, as complex as necessary.

    - Superfluous complexity decreases the system's robustness & adaptability (see G3). Also, it is extra work in setting up and/or in regular usage (see P1).

    - Note: Some sorts of complexity can be fun and motivating, which is great. But the important point here is not to engage in sophisticated procrastination[7](https://obsidian-guide.neocities.org/guide#footnote-7), and not to spend a lot of time on building a "perfect" system rather than actually doing the work, and rather than building the system actually most valuable to you.

- ***(P3)*** *Integrate Obsidian into your broader workflow* - The system should have a set place in your day-to-day work.

    - It might take some time to figure out what that place is, but this is the goal. This is presumably obvious — this way you use Obsidian regularly, use it where it is most useful to you, don't do double work, etc.

    - Part of making this work is to find a way to make the day-to-day work with Obsidian feel rewarding.

- ***(P4)*** *Integrate your knowledge, don't silo it* - The system should not artificially separate different kinds of knowledge — it should help connect ideas rather than separating them.

    - For one, this is because part of the system's value comes from it being a central storage & collection point (R1) and a central look-up point (R2). Further, this is because of the value of linking seemingly disparate ideas (R3) — one should not abstain from making an interesting connection simply because two notes are from "different realms of knowledge" or such. Also, every silo adds potential friction & complexity (P1 & P2) — you have to ask yourself "in which silo does this piece of knowledge belong?", and when you want to change the way you silo knowledge, it's a big hassle.

        - Let's make it less abstract. Imagine you use Obsidian for philosophy. Now why would you have a different vault/silo for metaphysics than for moral philosophy? One might think it's "clean", but really it just separates knowledge that can benefit from connection. What do you do when you need to discuss the property of goodness, or the metaphysical assumptions underlying some moral first order theory? Maybe this is obviously too narrow, so lets broaden it — should one not at least separate philosophy and economics and literature? But then where does one put the philosophy of economics, or Adam Smith, who was both a philosopher and the first economist? And what about literature which treats philosophical questions or which makes observations about the consequences of some historical economic policy — would one not want to here be able to interlink ideas from these different domains?

    - Another way to put this is: categories are limiting; don't limit yourself.

- ***(P5)*** *Allow organic structure to emerge* - The system should not impose a rigid top-down structure, but it should not be complete unstructured chaos, either.

    - *Overstructuring:*

        - Higher effort & friction (P1): Higher overhead when writing notes ("where do i put this", "first lets fill in a dozen tags", "this note should fit template 12b", ...).

        - Higher complexity (P2) & more structure = more hassle when shifting approach.

        - Some kinds of structure silo knowledge (P4).

        - Top-down structure applies your preconceived notions of how things should be structured. But it is often better not to restricts things based on your preconceptions, and to instead let the structure emerge in the process of working.[8](https://obsidian-guide.neocities.org/guide#footnote-8)

    - *Understructuring:*

        - When a vault is small, its structure hardly matters. You can navigate it and find everything easily, regardless of organization. But as your vault grows to hundreds or thousands of notes, thoughtful organization becomes crucial.

        - Understructuring leads to less coherence & consistency. Among other things, this can increase the cognitive load when reading and writing.

    - *Striking balance:*

        - Minimal top-down structure, and instead organic, emerging structure & some guiding principles/conventions.

        - How? Practical advice is given in section 3.

- ***(P6)*** *Allow for evolution* - Allow your vault and conventions to evolve based on your experience and needs.

    - The vault exists to create value for you. So if modifying some aspect of the vault makes it more valuable to you, do it. Don't be afraid to experiment, and strive to review & refine.

    - When changing conventions, don't feel obligated to update all old notes — focus on forward compatibility rather than perfect consistency. Otherwise, you'll get stuck once your vault is large enough.

Before moving on to what these principles mean for a practical Obsidian implementation, let's examine how to write notes.

### 2.5 Note-Writing

One of the central questions when you use Obsidian is: *What should my notes look like?* There are three difficulties in answering the question: (i) You'll have to find your own way of writing notes so they are most useful to you, (ii) note-writing is a skill that you (only) improve over time, and (iii) there are different types of notes (see 3.5), which are written in different ways. However, there are some general note-writing principles worth keeping in mind — these apply to most notes. They form a consistent package with 2.2 - 2.4.

#### 2.5.1 Note-Writing Principles

- ***(N1)*** *Atomicity* - Notes should be relatively atomic, i.e. focused on *one unit of knowledge.*

    - For a discussion of atomicity, see below.[9](https://obsidian-guide.neocities.org/guide#footnote-9)

- ***(N2)*** *Originality* - Notes should be relatively original, i.e. contain information processed by & for *you*.

    - So: express things in your own words rather than copying source material, and don't just gather information without processing (so: interpreting/reframing/etc.) it (see *collector's fallacy* below). "Relatively" because striving for full originality is (i) a way of striving for perfection (N5), and (ii) *some* information is worth referencing as is.

        - The collector's fallacy, in brief, is: You think you *understood* something simply because you *copied/collected* it. But really, there is no value in (the collection of) raw information itself — the value emerges in the processing.[10](https://obsidian-guide.neocities.org/guide#footnote-10)

        - Different notes have different originality/processing standards. Notes for a math class, for example, might primarily aim at helping you remember & understand & apply formulas (rather than at generating original ideas about them). The processing here consists of the annotation, contextualisation and interlinking that serves these goals.

- ***(N3)*** *Context-Independence* - Notes should be designed to remain valuable in both their form and their content.

    - So: they (i) should be written so that your future self can understand them outside the context you are in now, and they (ii) should not have something as their content that will likely be of no value to you outside the context you are now.

- ***(N4)*** *Dynamicity* - Notes should not be set in stone once they are written. Instead, they should be open to evolution, growth, change, development.[11](https://obsidian-guide.neocities.org/guide#footnote-11)

    - So: Notes aren't static documents but evolve as understanding develops. A lot of work/thought in Obsidian consists of revisiting and improving notes.

    - Conversation with yourself: If, after a while, you disagree with one of your notes, it is sometimes better to not just overwrite it, but rather to edit it in a way which preserves your old thoughts next to your new ones (or to create a new note linking the old note). This way you can trace the evolution of your thoughts.[11A](https://obsidian-guide.neocities.org/guide#footnote-11A)

- ***(N5)*** *Non-Perfectionism* - Notes don't have to be "perfect", especially not from the outset.

    - Striving for perfection will only suck the fun out of note-taking and burn you out. Having something half-baked is better than having nothing, and notes can improve over time.

- ***(N6)*** *Connection* - Notes should relate to and connect with other notes.

    - So: write notes with connections to other notes in mind. See (R3), but also 3.3 & the discussion of the value of structural notes (3.5.1).

#### Atomicity — Discussion

The core idea of atomicity is that one of these notes should not be like, e.g., a book chapter, and contain many different interlacing thoughts. Instead, it should isolate a single thought. This allows for more fruitful connections — the isolated thought might be present in many book chapters, and might connect to many more thoughts than present in that book chapter. Differently put, webs of atomic notes better reveal thought structures and thus (i) lead to more precision, specificity, etc., and (ii) allow for better interlinking.[12](https://obsidian-guide.neocities.org/guide#footnote-12)

(N1) says "Notes should be *relatively* atomic" — why not *maximally* atomic? Sometimes things just naturally fit together, and it is nice to have a more complete picture within one note. In those cases, separating the note feels artifical and creates more work on both the writing and the navigation side. And Obsidian has some advantages over analogue implementations here: You can format notes with sub-headings, which you can link to.

#### What is a Unit of Knowledge?

If you're not interested in a deeper look at atomicity, you can head straight to section 3. But I find the distinction between thought- & concept-atomicity interesting for my own note-taking.

Can we be more precise about what a unit of knowledge is?

- One idea: a **thought** like e.g. *notes-should-be-atomic*, *abductive-inference-relies-on-selection*, *trust-is-encapsulated-interest*, *LLMs-are-hurting-education*, etc.[13](https://obsidian-guide.neocities.org/guide#footnote-13)

- Another idea: a **concept** like *Note Atomicity*, *Abductive Inference*, *Trust*, *Trust as Encapsulated Interest* (or: *Encapsulated Interest Definition of Trust*), etc. One then relates concepts rather than thoughts, and the thoughts are either subsumed under the concept, or present in the references/links between the concepts.

Does this make a difference? Yes:

- It does somewhat change the intuitive approach to notes, as relating thoughts and relating concepts are two different things.

- While thoughts can include multiple concepts (e.g., above, abductive inference & selection), concepts tend to agglomerate more thoughts than vice versa. So: thought atomicity is, in some sense, more granular than concept atomicity.

- Relatedly: If one uses concept atomicity, one has to pay attention not to treat one's notes as encyclopedic entries. The *Abductive Inference* note, for example, should not aim to be exhaustive & impersonal and to contain all the information and sub-headings found in the Wikipedia article on it. Wikipedia exists, you don't have to create a local copy. Rather, the note should focus on the information about abduction that is *relevant to you*, i.e. *processed* versions (see N2) of interesting information about it that you came across and your own thoughts on it (these often meld).

However:

- Thoughts & (sub-/specific) concepts can be really close together & intertranslatable. See e.g. above: *trust-is-encapsulated-interest* & *Encapsulated Interest Definition of Trust*. This suggests that, at least partly, and probably mostly, it is note *granularity* that matters rather than the thought-concept distinction.

- While I do think that it is worth thinking about how one wants to write ones notes, one can do both within a vault.[14](https://obsidian-guide.neocities.org/guide#footnote-14)

## 3. Practical Implementation

Having laid out and explained the approach to building the vault & writing notes, let's move down the ladder of abstraction, and go to a practical implementation inspired by the goals & principles laid out in the previous section.

### 3.1 Vaults

Default to a single vault

For the reasons given above (see esp. P4 & P5), default to a single vault unless you have specific compelling reasons for separation.

**Cases for multiple vaults**:

- Completely separate contexts (e.g. personal vs. strictly professional)

- Having a collaborative vault in addition to your personal one

    - Note: You can also have the collaborative vault as a sub-folder in your personal vault so that they are not completely separate. However: there might be a bit of separation since you might not want to link from the collaborative vault to the personal vault as your collaborators would otherwise see links that don't lead anywhere for them. See 4.4 for discussion of collaborative vaults.

### 3.2 Folders

Don't use folders to structure content

For the reasons given above (in brief: it's additional work, and potentially even detrimental), use folders sparingly, and don't use them to structure content. Instead, create structure more organically, e.g. through links (3.3), tags (3.4) & note-types (3.5).

What this means:

- Don't use folders to separate areas of knowledge like "philosophy" and "economics".

    - What if a note really belongs into both? What if those folders don't end up making sense as your vault develops? Etc.

- Don't use folders to separate notes by course or date or similar.

    - Outside of an exam context, it's not really important where you, e.g., learned about a concept. Should the "Affect" note be in "Pyschology 101" rather than in "Philosophy of Mind" just because that's where you heard about it first? Or should you have two notes on affect? *No* — just don't put the note in a folder, and tag it if the course is relevant for an exam or such. On sorting notes by date-folders: This might make sense for diaries, but most knowledge is not chronological in this way.

Use folders functionally

Use few folders, and use them primarily for functional reasons. For example:

- A template folder

- An attachement/file folder

- A folder with meta-information about the vault

- Folders you want to be able to open as their own vaults (e.g. a recipe folder which you collaborate on)

- There may be other use cases for adding folders (e.g. project folders with notes you always want to look at together). Of course, do so when this makes sense to you. Just think about whether adding the folder is really beneficial.

### 3.3 Linking

Link generously

Link abundantly — it connects ideas and is core to making your Obsidian vault valuable. Link notes that are obviously connected, and link notes that are less obviously, but interestingly, connected (surprising connections can be very valuable, see (R3)). Since you link while you work on notes, and since links represent actual relationships between ideas, linking allows organic structures to emerge. Additionally, notes that are not connected to other notes tend to fall into obscurity.

### 3.4 Tagging

Tag as is useful to you, but don't make it a chore

In my experience, tagging can quickly create extra work if not kept in check. So, in keeping with (P1) & (P2), figure out what you want to use tags for, and then use them for that (note: figuring this out might take a while, and that's okay).

Here are some kinds of tags for inspiration:

- **Content tags** indicate something about the note's content. E.g. or or. Can e.g. be useful to later gather all notes on a certain topic. But: Obsidian contains search functions and such, so don't have to overdo it with these kinds of tags (I use these rather sparingly).

- **Note type tags** indicate note type (see 3.5). Among other things these can be used to colour your graph. If you use templates (see 3.5.2), you don't even have to apply them manually, so this is no work.

- **Status tags** can e.g. track work-in-progress notes (#wip), so you know which notes still need work. Some do this in a more fine-grained manner:

    - seedling -> budding -> evergreen[15](https://obsidian-guide.neocities.org/guide#footnote-15)

    - bean -> brewing -> brewed -> overbrewed[16](https://obsidian-guide.neocities.org/guide#footnote-16)

    - **Epistemic status tags** indicate one's certainty about / confidence in a note.[17](https://obsidian-guide.neocities.org/guide#footnote-17)

    - These more detailed status tags might be especially useful for vaults which are other-facing (public digital gardens or shared collaborative vaults). In my vault, I only use — it does its job for me.

- **Person tags** enable finding all notes related to an individual (e.g. an author).

- **Course tags** indicate which course this note is relevant to (as dicussed in 3.2 — I don't use these).

- If you have a collaborative vault, you can use a **request tag** to request someone else to have a look at the note and add their comments etc.

Tip: nesting tags

You can nest tags like so:. This is useful for some tag implementations.

### 3.5 Note Types

Why note types?

The idea is that note types make both (i) writing & maintaining and (ii) navigating & reading notes easier by introducing conventions like: how notes should be written, what elements notes should contain, what function notes should fulfil, which standards notes should meet, etc. Further, note types helpe organic structure to emerge in your vault.

How many note types?

Why have more than one note type? Well, chances are not all your notes should fulfil the same role. Most vaults focused on research should at least contain: fleeting notes, regular notes, structural notes and reading notes.

How many note types is too many? This depends a lot on your vault, and on how many things it is supposed to do. Note types add complexity, and as always, too much complexity is detrimental — it adds work and makes systems less flexible. So the best approach is probably to start simple and add note types as the need arises.

#### 3.5.1 Some Note Types

#### Fleeting Notes (or: Capturing Notes)

Let's start with the popular distinction between *fleeting notes* & *permanent notes*.[18](https://obsidian-guide.neocities.org/guide#footnote-18) The broad idea is:

- Fleeting notes are rough & quick & low effort: they exist to jot down observations, to get ideas out of your head, to capture interesting passages you want to look at again later, etc.

- Fleeting notes are temporary & intermediate notes, and meant to be processed at a later point in time. Bits you still find interesting while processing are transformed or integrated into permanent notes, other bits are discarded.[19](https://obsidian-guide.neocities.org/guide#footnote-19)

There are many ways this can look like in implementation:

- Some store their fleeting notes in Obsidian, others record their fleeting notes in a physical notebook, or dictate them, or note them down in whatever app or medium is convenient to them at the moment.

- Some make many fleeting notes, a new one per idea/observation/etc.; others use daily notes (to paste in all fleeting notes that come to them during the day); others keep one long note into which they keep adding things, and which they cyclically process; others write their fleeting notes into what will later be the permanent note, and convert as they go (or: as they process from wip to non-wip).

How do you choose? Do whatever is convenient to you, and gets you good results without creating undue work. My own implementation is mixed:

- When working on my laptop, I:

    - Write directly into permanent notes and convert as I go *if* I already know what note my fleeting notes belong to

    - Write into one big file if I don't

- When on the move:

    - Text myself the idea, or use the Obsidian webclipper plugin if I am reading an article in a browser and want to save a passage for later processing. Then later either move them into permanent notes or into the big file.

Some might not find this *clean* enough — you will, at least temporarily, and sometimes permanently, end up with permanent notes that contain unprocessed fleeting bits. But I find this to optimise value / time. Of course it is usually better not to just have a lengthy quoted passage in your note, but to instead have a sentence describing its essence in your own words. But sometimes you don't have the time for processing the passage, or want to continue with other notes right away in order to keep your flow. And until you have time for processing it (or even if you never end up doing it), it is better to have the lengthy but interesting passage in your note than not having it visible at all.

- By this I do not mean to downplay the importance of processing. I do believe that the *collector's fallacy* is a real danger to your vault, and that you should not just gather mountains of information without processing it (see N2).

Onto (the many variants of) permanent notes.

#### Regular Notes

I will admit that this is not a very descriptive name. But most vaults will have a kind of standard or main note type in which most of the work is done. In the Zettelkasten tradition, these are just called *Zettel*.[20](https://obsidian-guide.neocities.org/guide#footnote-20) What exactly this note type looks like (i) depends on the purpose of your vault, and (ii) is also defined in opposition to your other note types. For now, note that these are usually notes to which (N1) - (N6) apply — so they should be atomic, original, etc.

#### Structural Notes

The core function of these is to think about & add structure to the vault. If regular notes are the trees, structural notes allow you to understand the topography of the forest. Another fitting name would be *higher-order* notes, as they have other notes, and the relations between them, as their objects. As such, their main characteristic is containing many outgoing links. But how these links are embedded into the note & what is done with them can vary significantly.

#### Variants

Because of this, structural notes have many variants and even more names: Indexes, Hub Notes, Maps of Content (MOCs), Structure Notes etc.[21](https://obsidian-guide.neocities.org/guide#footnote-21) Let's look at the main variants (with an attempt at rather neutral/descriptive naming):

- **Indexes/Registers:** These are entry points to the system, and enable navigating through it just by using links. This is crucial for analogue systems which don't have a search function. I would argue that comprehensive indexes are usually wasted effort in digital systems like Obsidian, but more focused & selective registers like the one used by Luhmann might be useful for making the system's broad structure explicit. Luhmann's *Schlagwortregister* only listed central notes which served as entry points to the areas of knowledge most relevant to his research.[22](https://obsidian-guide.neocities.org/guide#footnote-22)

- **Topical link lists:** In their simplest form, these are just lists of links to notes related to a topic. For example, one might have a "Strength Training" note, which links to notes that discuss individual exercises. Or a "Transitivity" note, which links to all kinds of notes which discuss aspects of transitivity. But these link lists can also be structured (*Strength Training* -> 1. Biceps, 2. Calves, ...), and annotated.

    - Annotation can be very valuable, as it can contain thinking *about* the structure — about how there is a pattern in the notes, or about how two notes are in tension, or about how one note extends another note by offering a different perspective, etc.[23](https://obsidian-guide.neocities.org/guide#footnote-23)

- **Developed overview notes:** These are polished notes that often begin as regular notes but gain structural importance as they evolve. For example, one might write a "Conditionals" note, which is initially of peripheral importance. But as one dives into the topic, more and more notes start attaching to it: notes about the conditional in propositional logics, about the truth conditions of natural language conditionals, about the different conditionals used in definitions, etc. At some point, it becomes structurally central, and it makes sense to to turn the *Conditionals* note into a polished note giving an overview over the different kinds and theories of conditionals (so: into a well-annotated list of links to its children).[24](https://obsidian-guide.neocities.org/guide#footnote-24)

Note that structural notes only become relevant as the vault becomes bigger, and that, as the vault becomes big enough, it can also be beneficial to have structural notes which have other structural notes as their objects. The local hierarchy that structural notes introduce does not have to be artificially limited in its depth.

#### Functions

The functions of structural notes include:

- **Navigation:** They serve as entry points to different areas of knowledge, making it easier to traverse your vault through links. Even when you have a search function, navigating via links is valuable — there are obvious advantages to (a) opening the *Conditionals* note and hopping to related notes based on the information contained in the link's context over (b) scrolling through the list of notes containing "conditional" in their title.

- **Thinking about & creating structure:** Beyond just containing links, structural notes enable you to actively think about how notes relate to each other. This has many benefits, some of which are:

    - **Adding hierarchy to a flat network:** They prevent your vault from becoming a flat, one-dimensional sea of notes by introducing local hierarchical structures. They provide organizational scaffolding and conceptual integration. They do some of the work that folders do in other systems.

    - **Enabling pattern recognition:** They help you see emergent patterns across your knowledge base that might otherwise remain hidden in isolated notes. They help you to see the bigger picture, and thereby create knowledge.

    - **Tackling bigger concepts:** They allow you to address larger, more complex ideas by connecting multiple atomic notes in meaningful arrangements.

    - **Promoting note interaction:** They bring your notes into conversation, so that the notes can support, challenge, extend etc. each other.[25](https://obsidian-guide.neocities.org/guide#footnote-25)

My implementation combines developed overview notes & annotated topical link lists.

#### Reading Notes

Elsewhere, these are also called source, literature, or bibliographical notes. These notes exist to document/process engagement with sources such as books, papers and talks. In their most minimal form, these only contain:

- Bibliographic information;

- Links to other notes (mostly regular notes which discuss ideas from the source).

This is how Luhmann did it. If you do it this way, all you have to do is:

- Name reading notes consistently (e.g. *Surname, Name (Year) - "Title"* or *surname_year*);

- Use a plugin to link to Zotero or similar if you use a bibliography manager.

My implementation is less minimal. I like to put notes about the paper into the reading note (sometimes while I read, fleetingly).[26](https://obsidian-guide.neocities.org/guide#footnote-26) This includes stuff like: what is the paper about, what is its main point, what are interesting arguments in it, where do I disagree, what are random thoughts I have on it, what are crucial passages I might want to cite later, etc. This makes my reading notes non-atomic, but this way I am provided with everything I need to know about the paper when I open the note. And, of course, I still separate concepts & thoughts that deserve it into their own notes.

#### Other Note Types

Regular, structural and reading notes should be part of nearly every vault. But there are many more types of notes that can make sense depending on use case. Here are some. Note that some of these are not atomic or original or fully permanent — while I take these to be important attributes of some notes, I don't think every use case calls for them. Some will probably disagree.

- **Clippings Notes**: Notes containing verbatim clippings & citations from the web or books. One can think of these like parts of [common-place books](https://en.wikipedia.org/wiki/Commonplace_book) like the one kept by John Locke. While there is great value in processing information, it can sometimes be valuable to have writing in its original phrasing.

- **Course Notes**: It can be valuable to have a note for a course you're taking or teaching. Partly fleeting note, partly targeted entry to vault, partly a place to collect handouts or similar.

- **Character Notes**: If you're writing fiction. Also other notes for world-building etc.

- **Diary Notes**

- **Meta Notes**: Notes about the vault. Fix goals & conventions of the vault, have a dashboard that monitors statistics, discuss the vault's development with your collaborators, etc.

- **People Notes**

- **Project Notes**: Fleeting notes related to an active project. Mostly ditched (or processed) when the project is over.[27](https://obsidian-guide.neocities.org/guide#footnote-27)

- **Recipe Notes**

- **Wiki Notes**: Reference-oriented collections of rather unoriginal information on a topic. E.g. lists of theorems to be referenced in other notes.

- ...[28](https://obsidian-guide.neocities.org/guide#footnote-28)

Out of these, I use clipping notes (rarely), course notes, meta notes (the project of writing this guide originated with some meta notes), project notes (for writing papers) and recipe notes. Maybe a wholly different note type is useful to you. What I'd recommend is to base note types on function and not on some content-based categorisation like "Economics Note".

#### 3.5.2 Note Templates

There are some additional ways in which note types help make Obsidian easier to use:

- You can use note-type-tags to colour nodes in the graph. This way, you can visually discern the different types of notes in the graph.[29](https://obsidian-guide.neocities.org/guide#footnote-29)

- Similarly, you can use them to colour links & notes (within text, in the quick switcher, etc.) using plugins (see 4.1.2 -> Supercharged Links). So looking at, e.g., a link, you instantly know whether it points to a reading note or a regular note, even if the link is aliased.

- You can use different templates to start off your writing of different types of notes (using the "Templates" core plugin).[30](https://obsidian-guide.neocities.org/guide#footnote-30)

Let's look at the two main templates I use. I simplified my templates over time and ended up with these rather minimal ones. I put all of my tags at the top, except when I tag authors within a note (e.g. "This idea is from").

**For Regular & Structural Notes**:[31](https://obsidian-guide.neocities.org/guide#footnote-31)

```text
Type: #  //e.g. #note (my tag for regular notes) or #structural
Status: # //e.g. #wip
Tags: #   //e.g. #PKM or other content-related tags
___
## Overview
>[! Abstract] In a Nutshell
> >

___
## References
```

I fill in a few tags, write the key idea of the note into the "In a Nutshell"-callout, and add references at the bottom. The note body goes below the callout, and I add sub-headings when appropriate.

For structural notes I often add callouts that contain clusters of related notes (marking them as subconcepts, opposing concepts, debate positions, examples etc.).

**For Reading Notes**:

```text
Type: #reading_note
Author: # 
Tags: #
___
## Reference
___
## Notes
```

The main difference is that these have an author-tag at the top, and that reference (bibliographical information) is front-loaded. I go back and forth about adding a Nutshell-callout, and I sometimes add chapter overviews or handouts.

Using Callouts

Callouts (like this info box) make notes more scannable. Consider standardising certain callout types for different content. E.g.:

- Abstract callouts for summaries

- Info callouts for key concepts

- Example callouts for examples

- Question callouts for open questions

## 4. Technical Implementation & Enhancement

So much for the core practical implementation. This section looks at the more technical side of implementation, including plugins & AI integration. It also discusses some more advanced topics.

### 4.1 Essential Plugins

#### 4.1.1 Core Plugins

Obsidian has many core "plugins" at this point, and I will not here offer a recommended list (you can look through them and try them out). Instead, I want to briefly highlight three plugins whose usefulness is maybe underestimated by (new) users.

#### Quick Switcher

The quick switcher allows you to jump to other notes by title. You press cmd-O, start typing, and results appear. This is useful in two ways:

1. It offers really quick global navigation. That is, you can jump to any file in your vault, and can do so more quickly & conveniently than via the file browser or with traditional search.

2. If you press shift-enter, it will create a note with your search term as the title. For one, this is really quick. Further, this makes it easy to ensure that you are not recreating another note under a similar title.

#### (Local) Graph View

The graph view visualises your vault as a graph — your notes are vertices (dots), your links are edges (lines connecting the dots). This graph can be very pretty, and is the first thing you show your non-Obsidian friends to convert them. But it can also be useful, especially in its *local* form, i.e. in the form that shows just your note and its surrounding notes. Its use is offering a visual way to navigate locally, to see which notes are close by. Exploring the context of a note can give you a better picture, and local navigation is generally valuable in exposing you to more notes than targeted global navigation (and part of your vault's value comes from notes being in conversation, see sections 2 & 3). The local graph also has a depth-setting, which on depth 2 allows you to also see *the neighbours of* the neighbours of the selected note (and so on at higher depths). This shows you more of the selected note's context.[32](https://obsidian-guide.neocities.org/guide#footnote-32)

Other ways to locally navigate:

- Manual link hopping

- *Backlinks* pane & *Outgoing Links* pane

A note on the global graph: Looking at the global graph in its entirety can be useful to understand the relative weight of different topics in your vault, or to understand its structure better. But most of the time the global graph is more useful if you use the search-box, and e.g. only look at the graph of notes that discuss 'justice'.

#### Canvas

Canvas allows you to work visually, and to e.g. create mind maps and similar. I just want to highlight that it can be a useful tool for planning papers if you like being free of the constraints of a linear outline for a while. Canvas allows you to just drag in notes, write comments, connect stuff, move everything around, etc.

#### 4.1.2 Community Plugins

Next to the core "plugins", Obsidian has thousands of actual plugins written by the community. Chances are that even if you are looking for some rather specific functionality, someone made a plugin for it. While plugins are useful and/or fun, I'd generally recommend not cluttering up your Obsidian with more plugins than you need. That being said, let's dive into some recommendations.

Let's start with two plugins I would recommend nearly unconditionally:

#### Omnisearch (& Text Extractor)

*Omnisearch* (and its companion plugin *Text Extractor*) significantly improves over two inbuilt Obsidian features:

- It improves over *regular search* by:

    - Allowing you to also search through PDFs, images, Word/Excel documents;

    - Having a better search algorithm, with better (and customisable) weighing of search-results.

- It improves over the *quick switcher* by:

    - Not only searching through note titles, but also through sub-headings, tags and text — so you actually find all relevant notes;

    - Being more typo-resistant ("pluhin" will still find "plugin" search results).

#### Supercharged Links (& Style Settings)

*Supercharged Links* (which requires *Style Settings*) allows you to style your links based on your notes' metadata. I use this to colour links based on the note type of the linked note. This way, I can instantly see if the link leads to a regular, structural or reading note. While this might seem like a small improvement, I find it consistently helps with scanning notes, and has no drawbacks.

There are many settings, and you can:

- Style in more ways than colouring: One can e.g. also underline or change font weight or add pre- or suffixes (including emojis);

- Style more than just links: One can e.g. also style note titles in the quick switcher, tab headers, the backlink pane or the file browser.

Let's continue with more specific plugins that I use:

#### Dataview (or: Datacore)

*Dataview* (or *Datacore*, which is the newer version but still in beta) turns your vault into a database that can be queried. It allows you to, for example, write a small query which shows you a list with all your notes taged as. With this, you can create an automated dashboard for your vault, or put automated queries into your structural notes. Note that the query language is similar to, but different from, SQL. See [this documentation](https://blacksmithgu.github.io/obsidian-dataview/) for more informaton.

I use Dataview for my central vault dashboard (see 4.3), but would advise against completely automatising all your structural notes by just creating dataview link lists — the active part of maintaining structural notes has a lot of value.

#### Obsidian Charts

If you want to turn your dataview queries into charts, *Obsidian Charts* is the plugin for you. I use it for my central vault dashboard.

#### Sync Graph Settings

If you use the local graph, this plugin is very useful — it syncs graph settings between global and local graphs so you don't have to re-adjust the settings (e.g. the graph colouring) every time.

#### Fullscreen Focus Mode

If you enjoy writing without interface cluttering, this plugin is for you. Press the fullscreen hotkey to have your note fill the entire screen, press escape to exit again.

#### Vertical Tabs

Have persistent tabgroups, declutter tabs. Also has tab browsing history & can effectively replace bookmarks. I had to play around with settings a bit to make it work well for me (I didn't enjoy "Show active tabs only" or "Zen mode").

#### More Plugins

Some plugins I am trying out right now:

- LaTeX Suite

    - Speeds up LaTeX writing a lot.

- Lazy Plugin Loader

    - For faster Obsidian startup. Does save ~2 seconds on start-up on my macbook, and doesn't seem to have a cost.

- PDF++

    - Obsidian-optimised PDF viewer with *dozens* of features. You can e.g. deep link to a specific part of a PDF, or directly copy quotes to notes, or embeds parts of a pdf (e.g. diagrams) in a note. And it does a lot of useful things, like fix bad concatenation, and auto-recognise page number.

    - However, I am not yet sure if I personally like the workflow of reading/annotating PDFs in PDF++. I have experimented a lot, and could write a lengthy article about this, but I'll here just say: My suspicion is that most people will prefer reading their PDFs externally, unless they really profit from deep linking & quoting & embedding capabilities.[33](https://obsidian-guide.neocities.org/guide#footnote-33)

- Strange New Worlds

    - Shows how often a note is linked to next to links to that note. Not sure yet how useful this actually is.

- VSCode Editor

    - Basically VSCode in Obsidian. Allows you to save & look at code in Obsidian. Useful if you work with a lot of code and want to link it in your notes.

- Workbench

    - Have a "workbench" note to play around and take quick notes in. I currently use this for my master fleeting note.

There are a lot more plugins that are great for certain use cases — if you need something, just look for it (be it: Kanban boards, spaced repetition, math functionalities, adding icons all around Obsidian etc.). And even if you don't *need* something, some plugins are just fun — e.g. *Path Finder*, which finds all / the shortest path(s) between two notes.[34](https://obsidian-guide.neocities.org/guide#footnote-34)

### 4.2 AI Integration

Two points on AI integration:

1. I am a bit wary of AI community plugins for privacy reasons — I don't want my note content to be used as training data or to be saved on some server. Maybe some of the AI community plugins are privacy-friendly in this way, but I here prefer to err on the side of caution, and to use code I understand.

    - Note: There are some community plugins which allow you to connect to a local LLM. This is obviously the best option privacy-wise. My machine isn't powerful enough to run one, so I use Claude with an integration that is as privacy-focused as possible with a non-local LLM.

2. *I believe AI integration can be very harmful if done wrong.* As discussed above, a lot of the vault's value comes from your active engagement with it (be it in the form of you thinking or writing or linking or navigating or ...). If you outsource this work to an AI, and let it generate text and propose links and structure things for you, you are effectively outsourcing your thinking and thereby minimising the vault's value to you.[35](https://obsidian-guide.neocities.org/guide#footnote-35)

    - For this reason, my AI integration is read-only, and I strongly recommend thinking about how exactly you want to use AI. It should function to assist your thinking, not to replace it.

That being said, there can be great value in an AI integration. You can e.g.:

- Use notes as background knowledge in a conversation with Claude, increasing conversation quality a lot. Conversation quality increases because:

    - AIs don't know your thoughts or work on a topic otherwise;

    - AIs often lack specialised knowledge (such as knowledge about specialised philosophical debates);

    - AIs often tend to be overly focused on certain parts of knowledge (in philosophy, for example, they love jumping to consequentialism or Kantian deontology, even when these matter less to the question at hand than other parts of philosophy).

- Use natural language for search, and search your notes semantically. So you can e.g. ask "what was that book about X that I read called again?", and it can find the information. And it can do so even if the exact term 'X' doesn't actually appear anywhere in your notes. This is because LLMs "understand" that, e.g., 'puppies' is semantically close to 'dog'.

- And much more: Use Claude to find to-dos from your notes; or to list all your notes related to a certain topic; or to synthesise your knowledge on a certain topic; or to compare your note to Claude's general knowledge to check for different interpretations or knowledge gaps etc.; or to get creative and create a little game based on some of your notes; etc.

#### 4.2.1 Technical Implementation Details

My AI integration connects Claude to Obsidian via MCPs. It only works with Claude Desktop, and is based on [this repository](https://github.com/smithery-ai/mcp-obsidian). But it expands upon that implementation:

- **read_notes** (found in original implementation)

    - reads full content of notes to Claude

- **search_notes** (found in original implementation)

    - search for a note by its title

        - I added a tag-filter parameter so it is possible to e.g. only return notes tagged as_note.

- **read_metadata** (added)

    - retrieve metadata of notes (including tags & outlinks/backlinks)

- **semantic_search** (added)

    - hybrid search:

        - search for notes based on semantic similarity to the query

        - search for notes by title *or sub-headings* (exact matches only)

            - including this balances out weaknesses that pure semantic search can have in some cases.

    - with optional parameters:

        - similarity threshold (how similar does a note have to be to be returned)

        - link expansion depth (next to the directly found notes, also return notes connected to them via N links)

        - filter by tag

    - and ability to search through other filetypes than .md by using *Text Extractor*'s cache.

To enable semantic search, two further things are needed:

- A script to generate a semantic embedding of the vault notes;

- A script to start a local server, so that the sentence transformer model doesn't have to be reloaded with every request by Claude.

To finish off the implementation, create a Claude project, where you add some information:

1. A brief explanation of how the tool works, and instructions for how Claude should use it. Can even add syntax to make Claude into a more efficient interface:

    - E.g. specifying shorthands for where Claude should search: -V (vault only), -C (Claude's general knowledge only), -VC (both); or for how extensive its search should be, etc.

2. Optionally: A brief explanation of how your vault works / is structured.

Regarding privacy:

- Claude has to send requests to you to be able to read your notes. You can always deny these, and you can also rather easily section off parts of your vault completely.

- Claude does by default not use your data as training data.

- At least under the current privacy policy, your data is only saved for the purposes of saving your chats. You can delete the chats, and 30 days later the data will disappear from all servers.

If you want more information on this implementation, drop me a question!

### 4.3 Dashboard

Dashboards can mean/be different things in the context of Obsidian. Some use it as a project management page, some as a starting page, some as a collection of the highest-order structural notes, some to track statistics, some to collaborate, etc. If you build one, just build the kind of dashboard most useful *to you*.

I personally have a central dashboard, which (using Dataview and Obsidian Charts) I use to monitor:

- Vault Activity

    - This is especially useful for collaborative vaults, and you can e.g. see:

        - Recently created notes

        - Recently edited notes

        - Notes tagged with a request tag

        - Overall note creation activity over time

- Vault Health

    - You can e.g. monitor how many (and which) notes...

        - are tagged as wip

        - are orphans (don't have any links)

        - are missing a note type

        - are (near-)empty

    - Displaying a random selection of wip or orphan notes can also be helpful, as you can from time to time pick one of them and fix it up

- Vault Statistics

    - I monitor broad development in my vault, such as:

        - Distribution of note types

        - Distribution of note lengths

        - Median note lengths per note type

Note: This is a dashboard which is not designed to be visited daily — looking at Vault health & statistics that often would be a waste of time. Other kinds of dashboards might justify & request more traffic.

### 4.4 Collaborative Vaults

Collaborative vaults can be valuable & fun, but also have some dangers and drawbacks. Chief among them the following: An Obsidian vault as described in this guide is not like Wikipedia — the principle is not *the more people the better*. Rather, a lot of the value will disappear as the vault becomes less personal (see section 2). So, for a vault of this kind unrestricted collaboration between, say, ten people just won't work well. This means that you have to restrict either the amount of people or the scope of the collaboration:

- The highest number of people I've tried large-scale collaboration with (so: genuinely shared most of the vault with) was one other person. This worked really well; I had enough authorship for the vault to still feel like it was mine. But there are some *buts*:

    - It would not have worked this well with most people — we were quite in sync, both studied philosophy, etc.

    - I was a bit more active in the vault than my collaborator, which probably made it easier for me to integrate their knowledge than for them to integrate mine.

    - I can't be sure because I haven't tried, but even with people I'd really gel with, Obsidian-wise, more people would have quickly been to many. Is 30% authorship of a vault still enough for it to offer personal-based value? Is 20%? I can't be sure, but I am skeptical.

        - Of course, you could have "one vault" where everyone works on rather separate topics with few interconnections. But then, the others' notes would not really be part of *your* system, and rather serve as your system's environment. Your system can have connection points to this environment, and integrate some of it, but will ultimately remain its own thing. The point here is rather that if you work on densely interconnected (or even the same) notes, then it will quickly not be *yours* enough to work as a Zettelkasten.

- A way to maintain most of the authorship while working with multiple other people is to reduce the scope of collaboration. So only collaborating on specific parts of the vault with others. E.g. for a certain project, or on a certain topic, or such.

Some general tips for collaborative vaults:

- Establish clear conventions (around note types, form, naming, etc.). Otherwise, each other's notes might be less valuable to you, and the vault might become a chaotic mess. The risk certainly increases with more people.

- Have your own personal folder as a parent-folder of the shared vault. Often, having a space that's completely your own will be useful. By having it as a parent-folder, it remains one vault for you.

- A collaboration-focused dashboard can be useful. It allows you to see what the other person is/was working on; it allows you to discuss ideas for the vault; it allows you to see request tags; etc.

So why even try collaborative vaults, if all these drawbacks and risks exist?[36](https://obsidian-guide.neocities.org/guide#footnote-36) Well, it can also have some upsides:

- Forcing conventions & conversations about them can be useful. As can accountability to someone else more generally.

    - The meta notes which form this guide's oldest kernel were notes written to improve collaboration by fixing conventions.

- A second pair of eyes is often useful, and with request tags you can summon it.

- You can profit off of someone else's notes and attempts at knowledge integration. You don't know anything about X? You can read their notes on it to get an angle on it. You are wondering whether paper Y is worth reading? Look at their note on it and decide. And if you end up reading it, you maybe already have some objections to keep in mind while doing so.

- As discussed above, some of the value of the vault comes from surprise, from conflict between notes, etc. Having another person collaborate on the vault will provide these things.[37](https://obsidian-guide.neocities.org/guide#footnote-37)

There are multiple ways to technically implement a collaborative vault:

- Official solution: Use [Obsidian Sync](https://obsidian.md/sync) (monthly subscription);

- Various community plugins;

- Shared folders in cloud without plugin (iCloud, OneDrive, etc.).

### 4.5 Misc

There is more this guide could cover, but I feel like this covers the most important things. Here are just some more things:

- **Backups**: Back up your vault regularly! You don't want to lose it for no good reason. There are plugins that help you do this, or you can do it manually from time to time.

- **Themes**: There are hundreds of custom themes to change Obsidian's appareance.

- **Custom CSS**: There are also loads of custom css snippets floating around which change individual things. And you can always make your own. For example, I use a wide page snippet I found somewhere on the Obsidian forum to make some specific pages (e.g. the dashboard) wider.

- **Obsidian Web Clipper**: Want to clip articles you read in your browser, and have the clippings appear in a specified folder in your vault? There's an [official plugin](https://obsidian.md/clipper) for that!

- ...

## 5 Conclusion

This guide is a living document and might update as my understanding changes. To this end I would be very happy about feedback & discussion — feel free to drop a comment in [this Obsidian forum thread](https://forum.obsidian.md/t/how-do-you-organize-academic-work-in-obsidian-heres-my-approach-after-4-years/100587)! Further, I might add some more things to this guide that I haven't covered yet. And I could, for example, also add a little starter vault at some point if people would find this useful.

But for now: Thank you for reading, and I hope this guide was helpful to you.

he form of my note titles is partly dependent on note type:

- My reading note titles have a fixed form: *Surname, Name (Year) - “Title”* (I prefer having more information in the title than just surname & year)

- My regular & structural notes I just try to name descriptively; and I mostly use concept-titling (“Note Atomicity”), and sometimes thought-titling (“notes-should-be-atomic”). Still experimenting with which I like more when.

- For some note types that I use a lot more rarely, I prefix the note type in the title: “Course Notes - *Course name*” for course notes, and another prefix for my meta notes about the vault itself.

But now I’m very interested in how you’re approaching note titles if you find them to be important structural elements – does your titling have something to do with note type, or does it encode different information like how they’re connected to other notes?

Regarding “conversation with yourself”: It makes a lot of sense to me to not delete all your notes you now disagree with, but to preserve the evolution of your thoughts! But two thoughts:

- I suppose how exactly I deal with the note depends on the circumstances?

    - If something was just factually wrong, I might edit it without a trace, or, if it’s an error I see myself doing again, edit and put a callout warning me of the error? (I’ve done this a couple of times with concepts I was prone to confusing; apologies if this is an obvious/boring distinction)

    - If it’s my thoughts on something that changed, either create a new note or edit the note in a way that preserves my old thoughts too (I suppose the decision depends on note granularity / vibe considerations?)

- In the way I set it up, I’m wondering whether this would maybe best be integrated into note dynamicity rather than being its own principle?

Adding keywords after tough searches sounds like a good simple trick, and I’ll implement it myself.

Thanks for sharing – I’ll integrate some of this into the guide with my next edit!

