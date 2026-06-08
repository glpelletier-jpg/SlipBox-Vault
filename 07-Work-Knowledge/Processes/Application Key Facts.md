---
title: Application Key Facts
id: 20260217060000
date: 2026-02-17
type: fleeting
tags: [fleeting]
---

# Application Key Facts

**Cover**

[https://miro.medium.com/v2/resize:fit:1024/1*uIS0z6x041ioIhxFHN8TrQ.jpeg](https://miro.medium.com/v2/resize:fit:1024/1*uIS0z6x041ioIhxFHN8TrQ.jpeg)

**Content**

![Untitled](https://miro.medium.com/v2/resize:fit:1024/1*uIS0z6x041ioIhxFHN8TrQ.jpeg)
[[Rockwell-Compact-5000-EtherNetIP-Adapters-User-Manual-January-2022|Untitled - Notes]]

## Summary

## Key Takeaways

## Transcript

[Sitemap](https://medium.com/sitemap/sitemap.xml)

![Untitled](https://miro.medium.com/v2/resize:fit:640/format:webp/1*uIS0z6x041ioIhxFHN8TrQ.jpeg)
[Untitled - Notes](../Images/Untitled%20(1).md)

Image generated with Mistral AI

With some free time on my hands during the Christmas holidays, I decided to put Claude Code to the test. My goal was simple yet ambitious: build a complete, functional time tracking application from scratch — and let an AI agent do the heavy lifting.

This wasn’t just about getting a working app. I wanted to answer a question that’s been on every developer’s mind: *How capable are agentic coding tools at the end of 2025?* Can they truly handle a full software project — from initial specification to a polished, working product? I was about to find out.

## The Starting Point

From the very beginning, it was clear that I needed two key documents:

- `SPECS.md`: The specification of what I wanted to implement

- `TASKS.md`: The milestones and progress tracker for the implementation

Initially, I made the mistake of putting the complete specification into `CLAUDE.md`, which technically worked — but was terribly inefficient for context management.

To write the `SPECS.md`, I started a project in Claude Chat with the following sessions:

**Tech stack selection for MVP development**:

```c
Analyse the given key facts and propose some tech stack for implementation:
∙ Start with some simple RDBMS like SQLite
∙ Use some ORM with appropriate Migration management
∙ What server framework is suited best for the MVP
∙ What client framework is suited best for the MVP
```

**Creating CLAUDE.md with tech stack integration**:

```c
Help me with creating a CLAUDE.md file to tell Claude Code what it shall implement.
Start with the Application Key facts and enhance it with the findings from our Tech Stack selection.
(See last chat in the project) The local system has some \`nvm\` installed.
Remember this fact when the implementation shall start in Claude Code.
```

To give both sessions the necessary context, I created some *project instructions* with:

```c
# Application Key Facts
* Implementation using TypeScript
* Running on latest Node.js v24 (Krypton) LTS
* MVP Key Features
    * Time tracking of daily working hours with begin, end and rest period triggered by a start/stop button
    * Creating daily task reports to book times on with progress report (Granularity: min. 30 minutes)
    * Every task matches a Jira task and project
* Client/Server architecture with API-first approach
* Web Client
* MVP shall run on localhost
```

The Claude project turned out to be extremely helpful for this first phase. But the real kicker was the following prompt:

```c
You are a critical reviewer of the specification (CLAUDE.md) we wrote for this project:
- Are the business specifications we made sound and consistent?
- Are the implementation specifications consistent and can Claude Code produce code from this information? Or is any vital information missing?
- Are the Tech-Stack specifications appropriate:
    - We want an MVP first
    - We want to be able to enhance the implementation without complete re-factoring
    - We don't want overly complex solutions
Write only a report with your findings. Do NOT modify the CLAUDE.md document!
```

This prompt revealed several critical inconsistencies and ambiguities that needed resolution before implementation could begin. After addressing them, I had my final `SPECS.md` (initially named `CLAUDE.md`).

With the specification in hand, I switched over to Claude Code and instructed it to create the `TASKS.md` file:

```c
Analyse the specs and break them down into a task list that can be implemented step by step.
Create a TASKS.md file to track the tasks and the progress we make.
Start with some general rules we want to follow when processing the tasks:
- Document all progress in TASKS.md
- If more context needs to be persisted, create an additional file in the context folder and reference it in TASKS.md
- Always plan first and ask for approval before performing any modifications.
```

This process worked fairly well. Later, through some research, I discovered that what I had been doing aligns closely with *Spec Driven Development*. There are already established frameworks for this approach, like [GitHub Spec Kit](https://github.com/github/spec-kit). As a software engineer I know about the importance of thinking before coding. Its basically the same approach you have to take if you want to implement some App with the help of some coding agent.

From this point on, I had the foundation to start with the actual implementation.

## Implementation

### The Process

During the implementation, I tested several Claude Code approaches:

- The *Claude Code CLI*

- The *Claude Desktop App:*[Claude Code on desktop](https://code.claude.com/docs/en/desktop)[Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web)

These approaches differ in where the code is developed:

- **CLI**: Code is written on your local machine in the current branch. You’re responsible for branching yourself (e.g., opening a feature branch).

- **Desktop App**: Code is written on your local machine but in a separate *Git worktree*. A button lets you open the code in VS Code to see what’s happening. At the end, you trigger a PR to merge your work back into your codebase.

- **Web App**: Claude opens a session on their servers and does the development there in full isolation. At the end, a PR is created to merge the results back into your codebase.

Each approach has its pros and cons.

**Working on the web** is remarkably convenient — you can kick off the agent and simply walk away. There’s no fear of an accidental `rm -rf .` either; the worst that can happen is burning through tokens and time before starting fresh. The downside is that you always begin with a clean environment, and the agent doesn't always configure it correctly. In my case, Node v22 was the default, but my project required Node v24 — something you can work around with hooks and scripts. Another limitation: you have no direct access to the running application, so QA has to happen through the agent as well. This makes web mode ideal for isolated tasks like initial setup or data model preparation, but for anything UI-related, working locally is the better choice.

*Side note:* The branches created by the web app follow a strict naming convention: `claude/<SESSIONNAME>-<ID>`. Having an existing branch simply named `claude` will cause havoc.

**Working locally** gives you the choice between the *Desktop App* and the *CLI*, depending on your workflow. One thing to note: sessions currently don’t transfer between the two. If you start a session from the Desktop App, you can’t pick it up in the CLI, and vice versa — likely because the Desktop App runs its own separate installation.

Regardless of which tool you use, you always have direct access to your codebase and can inspect what the agent has produced. This is invaluable for frontend work that needs testing in a real browser. One piece of advice: commit to git frequently. Claude Code does have sophisticated checkpointing built in, but having known-good states on git can be a lifesaver when things go sideways.

For frontend work specifically, another Claude Code tool proved incredibly helpful: the [Claude Code with Chrome extension](https://code.claude.com/docs/en/chrome). It gives Claude Code direct access to your browser, allowing it to perform visual tests and apply fixes on the fly. Under the hood, it’s implemented as an MCP server. I did notice that the process can be a bit slow — likely because the extension relies on vision-based understanding to interpret what’s on screen.

## The Journey

The implementation followed nine phases:

![Untitled](https://miro.medium.com/v2/resize:fit:640/format:webp/1*zxYn4TtJZRmFkK1F6LqXHw.png)
[Untitled - Notes](../Images/Untitled%20(2).md)

### Phase 0: Project Setup & Foundation

Timeline: 2025–12–18 to 2025–12–20Effort: ~5 hours

Commits:

- `b4e1ca4` 2025-12-18 17:39 - Initial commit

- `51b90a1` 2025-12-19 18:07 - Initial specification

- `526fc9f` 2025-12-19 22:13 - feat: initialize project foundation and development environment

- `01f158a` 2025-12-20 14:00 - fix(typescript): resolve all type checking errors

What was done:

- Created monorepo structure with server, client, and shared packages

- Configured TypeScript strict mode for all packages

- Setup Fastify server with Zod environment validation

- Setup Vite + React client with Mantine UI and TanStack Query

- Configured development tools with hot reload (tsx watch, Vite HMR)

- Created npm scripts for concurrent dev server startup

Problems encountered:

- TypeScript errors with @types/node missing and Zod schema PORT type

- Needed placeholder in shared/types to prevent tsc errors

### Phase 1: Database Layer & Core Models

Timeline: 2025–12–20 (14:06–16:20)Effort: ~2.5 hours

Commits:

- `1088530` 2025-12-20 14:06 - feat(database): implement phase 1 database layer and core models

- `d68e867` 2025-12-20 14:56 - fix(database): resolve Prisma Client initialization timing issue

- `6f6c4fb` 2025-12-20 15:16 - docs(phase1): document phase 1 completion and architectural discoveries

What was done:

- Created Prisma schema with 5 models (WorkDay, TrackingEvent, TimeEntry, JiraTask, JiraProject)

- Implemented automatic migration deployment on server startup

- Created Prisma middleware for calculated field updates

- Added metrics calculator for WorkDay calculations

- Created seed data script with sample projects and tasks

Problems encountered:

- Git branch namespace conflict: Could not have both `claude` branch and `claude/feature` branches. Solution: Renamed to `claude-main`.

- Prisma version compatibility: Prisma 7.x had breaking changes for SQLite. Solution: Downgraded to Prisma 5.22.0 LTS.

- SQLite type limitations: No native enum support. Solution: Use String type with application-level validation.

- Prisma Client initialization timing: ES6 static imports resolve before runtime generation. Solution: Generate at build-time via postinstall hook, not runtime.

### Phase 2: Server — Core Business Logic

Timeline: 2025–12–21 (15:44–17:00)Effort: ~1.5 hours

Commits:

- `4e35d56` 2025-12-21 15:44 - feat(server): implement Phase 2 service layer business logic

What was done:

- Created complete IJiraService interface (110 lines)

- Created complete ITimeTrackingService interface (181 lines)

- Implemented JiraManualService for manual project/task CRUD (299 lines)

- Implemented TimeTrackingService with event sequencing, mismatch calculations, and finalization logic (594 lines)

- Created comprehensive type definitions and DTOs (134 lines)

- Fixed TypeScript errors in calculated-fields.ts and migrate.ts

Problems encountered:

- None significant. Clean implementation following defined interfaces.

### Phase 3: Server — API Endpoints & Testing

Timeline: 2025–12–21 (16:12–19:22)Effort: ~3 hours

Commits:

- `f5cd2b7` 2025-12-21 16:12 - feat(server): implement Phase 3 API endpoints with validation and error handling

- `a4d5f44` 2025-12-21 16:27 - fix(server): configure Fastify Zod type provider for schema validation

- `4b2bfa8` 2025-12-21 16:38 - fix(server): resolve Zod type provider schema validation issues

- `39adcc2` 2025-12-21 17:04 - fix(typescript): resolve all TypeScript compilation errors in API routes

- `db7282b` 2025-12-21 17:23 - fix(api): implement proper Fastify Zod schema validation for all routes

- `415f30e` 2025-12-21 17:38 - test(server): add comprehensive API endpoint tests with Supertest

What was done:

- Implemented 35 RESTful API endpoints across 5 route modules

- Created comprehensive error handler supporting Zod and Prisma errors

- Added timestamp validation middleware for production vs development

- Configured Zod validatorCompiler and serializerCompiler

- Created 26 test cases covering all endpoints with Jest + Supertest

Problems encountered:

- Fastify Zod type provider issues: Multiple attempts to configure schema validation correctly.

- First attempt: “data/required must be array” error

- Second attempt: Routes worked but validation disabled

- Final solution: Proper validatorCompiler + serializerCompiler configuration

- ESM/CommonJS conflict with Faker: @faker-js/faker is ESM-only, incompatible with Jest CommonJS. Solution: Created custom test data generation functions.

### Phase 4: Client — Foundation & State Management

Timeline: 2025–12–21 (19:22–22:04)Effort: ~2.5 hours

Commits:

- `c94e4dc` 2025-12-21 21:53 - feat(client): implement Phase 4 - client foundation & state management

- `07ad2ed` 2025-12-21 22:04 - fix(deps): resolve npm install failure with workspace dependencies

What was done:

- Created shared TypeScript types matching API contracts (6 files)

- Built API client layer for all 35 endpoints (7 files)

- Implemented 34 TanStack Query hooks with optimistic updates

- Created utility functions for dates, time formatting, mismatch calculations

- Created custom hooks (useWorkDayState, useSimulation)

Problems encountered:

- npm install failure with workspace dependencies after restructuring. Fixed with proper workspace configuration.

### Phase 5: Client — Time Tracking Components

Timeline: 2025–12–21 22:04 to 2025–12–22 00:50Effort: ~3 hours

Commits:

- `dc817b7` 2025-12-21 22:34 - feat(client): implement Phase 5 - time tracking components and fix workday creation

- `4900718` 2025-12-22 00:34 - feat(client): implement Phase 5 - client time tracking components with simulation mode

- `d8ed5ef` 2025-12-22 00:48 - docs(readme): add Phase 5 completion status and simulation mode testing guide

What was done:

- Built 6 React components: StartStopButton, TrackingEventTimeline, WorkDayMetrics, NeedsCorrectionBanner, ManualCorrectionModal, SimulationControls

- Implemented real-time timer during RUNNING state

- Created simulation mode with 60x time acceleration

- Added auto-page reload with localStorage state persistence

- Fixed `/api/workdays/date/:date` endpoint to auto-create workday

Problems encountered:

- Break time calculation race condition: Server’s restDuration field wouldn’t update immediately after resuming work. Solution: Calculate break time client-side from events.

- Simulation state persistence: Page reload cleared startTime, causing timer desync. Solution: Save exact startTime to localStorage before reload.

- Time multiplier math errors: Initial “Auto-Stop In” showed wrong values due to calling hook which created new Date(). Solution: Only manage localStorage, don’t call hook’s startSimulation().

### Phase 6: Client — Time Entry & Reporting

Timeline: 2025–12–31 (21:32–23:21)Effort: ~2 hours

Commits:

- `ea39f56` 2025-12-31 21:32 - feat(client): implement Phase 6 - time entry & reporting components

- `80b8987` 2025-12-31 22:04 - feat(client): add weekly day selection to time reporting dashboard

- `dd5d56e` 2025-12-31 22:09 - fix(client): fetch correct workday entries when selecting weekly date

- `d3b6368` 2025-12-31 22:36 - feat(client): improve time entry edit UX and block day switching during edit

- `41909db` 2025-12-31 23:10 - feat: prevent duplicate time entries with database constraint and frontend filtering

- `8736948` 2025-12-31 23:21 - docs: update Phase 6 completion and add duplicate entry prevention documentation

What was done:

- Built 6 components: TimeEntryStateIndicator, MismatchIndicator, TimeEntryList, TimeEntryForm, MismatchDashboard, FinalizeButton

- Implemented draft/finalized workflow with state management

- Added daily and weekly mismatch tracking with color-coded indicators

- Created weekly day selection for filtering time entries

- Added duplicate entry prevention with database constraint and frontend filtering

- Created 7 new tests for duplicate prevention (33 total tests)

Problems encountered:

- Wrong entries shown when selecting weekly date: Initially only filtered client-side. Solution: Fetch the workDay for selected date using useWorkDayByDate hook.

- Form not syncing with edit entry: Form fields didn’t populate when entering edit mode. Solution: Add useEffect to sync form with editingEntry prop.

- Day selection during edit: Users could switch days while editing, causing confusion. Solution: Block day selection (faded, disabled) while editing.

### Phase 7: Client — Jira Management UI

Timeline: 2026–01–03 (14:59–18:33)Effort: ~3.5 hours

Commits:

- `b6d53e0` 2026-01-03 17:47 - feat(client): implement Phase 7 Jira Management UI with full CRUD

- `cee71c4` 2026-01-03 17:57 - test(server): add deletion protection tests for jira projects and tasks

- `2500342` 2026-01-03 18:11 - docs: update Phase 7 completion status and test coverage details

- `78a452d` 2026-01-03 18:30 - docs: enhance README with TypeScript troubleshooting and MIT license details

What was done:

- Built 9 new components: ProjectManager, TaskManager, ProjectSelector, TaskSelector, JiraProjects, JiraTasks, DeleteTaskModal

- Implemented dual-mode forms (create/edit) with proper state management

- Added jira-validation.ts utility for format validation (Project Key: 2–10 uppercase, Task Key: PROJECT-123)

- Implemented delete protections: projects with tasks cannot be deleted, tasks with time bookings cannot be deleted

- Display time booked per task with entry counts

- Integrated with Tab navigation in App.tsx

- Added 6 new test cases for deletion protection (39 total tests)

- Enhanced README with TypeScript troubleshooting and MIT license

Problems encountered:

- None significant. Clean implementation following established patterns from Phase 6.

### Phase 8: Integration & Polish

Timeline: Not started

Planned work:

- End-to-end testing of complete user journeys

- UI/UX polish (loading states, error handling, accessibility)

- Documentation (README, API docs, architecture)

- Final code quality checks

### Summary Statistics

Total: ~23.0 h

Total commits: 38Phases completed: 8 of 9 (89%)API endpoints: 35React components: 21+TanStack Query hooks: 34Test cases: 39TypeScript errors: 0

## Lessons Learned

**Think before you code — even with AI.** The most valuable time I spent was upfront: writing specifications, selecting the tech stack, and breaking the project into phases. This aligns with *Spec Driven Development*, and it turns out AI agents benefit from it just as much as human developers do. A well-structured `SPECS.md` and `TASKS.md` gave the agent clear guardrails to work within.

**Let the AI review its own work.** One of the most effective prompts I used was asking Claude to *critically review* the specification it had helped create. It caught inconsistencies and ambiguities I would have missed — and it did so before a single line of code was written.

**Context management matters.** Initially, I stuffed everything into one large `CLAUDE.md` file. It worked, but was terribly inefficient. Splitting into focused documents (`SPECS.md` for requirements, `TASKS.md` for progress) made the agent more effective and kept token usage in check.

**Choose the right model for the task.** For drafting specifications and planning, Sonnet or Opus excels — they reason well and structure complex requirements. For implementation, Haiku 4.5 proved more than capable and kept costs down.

**Match the tool to the task.** Web mode is ideal for isolated, well-defined work like initial setup or data modeling — you can kick it off and walk away. But for UI work that needs real browser testing, local mode is essential. The Chrome extension bridges the gap for visual QA, though it’s noticeably slower due to its vision-based approach.

**Commit early, commit often.** Claude Code has built-in checkpointing, but nothing beats having known-good states on git. When things go sideways — and they will — those commits are a lifesaver.

**Patterns compound — but you have to set them.** The agent doesn’t inherently know how to do things *right*. In the early phases, I had to guide it constantly: correcting architectural decisions, pointing out better approaches, and steering it toward patterns that made sense for this project. It also doesn’t recognize its own mistakes — when something was off, the agent would happily continue down the wrong path unless I intervened. Spotting these issues required the kind of intuition you only develop through years of software development experience. But here’s the payoff: once those patterns were established, the agent started picking them up. By Phase 7, it was replicating the structures from Phase 6 almost flawlessly — zero significant problems. The human in the loop isn’t optional; it’s what makes the difference between a mess and a working product.

## Outlook

This isn’t the end of the journey — it’s the beginning. I now have a working local solution, but it lacks user management. For anything beyond personal use, proper authentication and a switch to PostgreSQL as the database foundation would be essential. Once those pieces are in place, deployment to a hosted platform becomes the natural next step.

That said, I’m genuinely impressed. I had never touched TypeScript or this particular tech stack before, yet with the help of an AI agent, I built a functional application in just a few hours. That alone speaks volumes about where we are today.

What’s next:

- Evaluate Google’s [Stitch](https://stitch.withgoogle.com/) to polish the GUI

- Add user management and authentication

- Switch to PostgreSQL

- Prepare for deployment on the web

## More from Oliver Eichler

## Recommended from Medium

[

See more recommendations

]([https://medium.com/?source=post_page---read_next_recirc--97eeba250581---------------------------------------](https://medium.com/?source=post_page---read_next_recirc--97eeba250581---------------------------------------))

