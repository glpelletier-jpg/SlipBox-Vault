---
title: (S)(Article) Getting started with Cowork  Claude Help Center -
id: 20260217060000
date: 2026-02-17
type: fleeting
tags: [fleeting]
---

# (S)(Article) Getting started with Cowork  Claude Help Center -

**Cover**

[https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png](https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png)

**Content**

[https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png](https://downloads.intercomcdn.com/i/o/lupk8zyo/792494/717b10d3ebd874823db64841659b/76f3062d78ebbb04863fb1de3ef9cca0.png)

## Summary

## Key Takeaways

## Transcript

## Getting started with Cowork

This article explains how to use [Cowork](https://claude.com/product/cowork), a research preview that brings Claude Code's agentic capabilities to Claude Desktop for knowledge work beyond coding.

Cowork is available as a research preview for paid plans (Pro, Max, Team, Enterprise) on:

- **Claude Desktop for macOS**

    - [Click here](https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect) to download

- **Claude Desktop for Windows** (x64 only)

**Windows users:** Cowork requires the latest version of Claude for Windows. Download or update at [claude.com/download](https://claude.com/download).

Windows arm64 is not supported.

---

Cowork uses the same agentic architecture that powers Claude Code, now accessible within Claude Desktop and without opening the terminal. Instead of responding to prompts one at a time, Claude can take on complex, multi-step tasks and execute them on your behalf.

With Cowork, you can describe an outcome, step away, and come back to finished work—formatted documents, organized files, synthesized research, and more.

**Important:**

- Cowork is a research preview with unique risks due to its agentic nature and internet access.

- Cowork respects your current network egress permissions.

- Cowork stores conversation history locally on your computer, so is not subject to Anthropic’s [data retention timeframe](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data).

- Cowork activity is not captured in Audit Logs, Compliance API, or Data Exports. Do not use Cowork for regulated workloads.

- Please review [Using Cowork safely](https://support.claude.com/en/articles/13364135-using-cowork-safely) for more information.

For important limitations and considerations for Team and Enterprise organizations using Cowork, see [Cowork for Team and Enterprise plans](https://support.claude.com/en/articles/13455879-cowork-for-team-and-enterprise-plans).

- **Direct local file access:** Claude can read from and write to your local files without manual uploads or downloads.

- **Sub-agent coordination:** Claude breaks complex work into smaller tasks and coordinates parallel workstreams to complete them.

- **Professional outputs:** Generate polished deliverables like Excel spreadsheets with working formulas, PowerPoint presentations, and formatted documents.

- **Long-running tasks:** Work on complex tasks for extended periods without conversation timeouts or context limits interrupting your progress.

---

Cowork runs directly on your computer, giving Claude access to the files you choose to share. Code runs safely in an isolated space, but Claude can make real changes to your files.

When you start a task in Cowork, Claude:

1. Analyzes your request and creates a plan.

2. Breaks complex work into subtasks when needed.

3. Executes work in a virtual machine (VM) environment.

4. Coordinates multiple workstreams in parallel if appropriate.

5. Delivers finished outputs directly to your file system.

You maintain visibility into what Claude is planning and doing throughout the process so you can steer when it matters, or let Claude run independently.

---

- **Claude Desktop app:** Cowork requires the [desktop app](https://support.claude.com/en/articles/10065433-installing-claude-desktop) for macOS or Windows and is not available on web or mobile.

- **Paid Claude subscription:** This research preview is available to paid Claude plans (Pro, Max, Team, Enterprise) only.

- **Active internet connection:** Required throughout the session.

1. Open Claude Desktop.

2. Look for the mode selector that includes "Chat" and the Cowork tab.

3. Click the "Cowork" tab to switch modes to “Tasks”.

4. Describe the task you want Claude to complete.

5. Review Claude's approach, then let it run.

**Note:** The Claude Desktop app must remain open while Claude is working. If you close the app, your session will end.

When Claude is working on a task in Cowork:

- **Progress indicators** show what Claude is doing at each step.

- **Transparency:** Claude surfaces its reasoning and approach so you can follow along.

- **Steering:** You can jump in to course-correct or provide additional direction mid-task.

- **Parallel work:** For complex tasks, Claude may coordinate multiple sub-agents working simultaneously.

- **Deletion protection:** When using Cowork, Claude requires your explicit permission before permanently deleting any files. You will see a permission prompt and will need to select "Allow" before Claude is allowed to perform deletion tasks.

Tasks can run for extended periods depending on complexity. You can monitor progress or step away and return when Claude finishes.

---

You can give Claude standing instructions that apply to every Cowork session. Use this to specify your preferred tone, output format, or background on your role.

To set global instructions:

[https://downloads.intercomcdn.com/i/o/lupk8zyo/2050025867/7f73f533e79aa8e04bcfde9f8dbd/0101cd43-4d05-4100-ad86-c7907d189a98?expires=1771347600&signature=31b95459522acdd012277168ab240ab987c287ec8f29549f952272c0e448c62c&req=diAiFsl8mIlZXvMW1HO4zbPDHwm10V8s6VXD6BjIOEI04%2FGq4inFyWHnzoYU%0AUV6KWOhipsF8i4S87Hg%3D%0A](https://downloads.intercomcdn.com/i/o/lupk8zyo/2050025867/7f73f533e79aa8e04bcfde9f8dbd/0101cd43-4d05-4100-ad86-c7907d189a98?expires=1771347600&signature=31b95459522acdd012277168ab240ab987c287ec8f29549f952272c0e448c62c&req=diAiFsl8mIlZXvMW1HO4zbPDHwm10V8s6VXD6BjIOEI04%2FGq4inFyWHnzoYU%0AUV6KWOhipsF8i4S87Hg%3D%0A)

Folder instructions add project-specific context to Cowork when you select a local folder. Claude can also update these on its own during a session.

---

Plugins are ready-made bundles that let you customize how Claude works for your role, team, and company when using Cowork. Each plugin combines skills, connectors, slash commands, and sub-agents into a single package.

To help you get started, Cowork includes a library of plugins our team built for common knowledge work functions:

- **Productivity** — Manage tasks, calendars, and daily workflows

- **Enterprise search** — Find information across your company's tools and docs

- **Sales** — Research prospects, prep deals, and follow your sales process

- **Finance** — Analyze financials, build models, and track key metrics

- **Data** — Query, visualize, and interpret datasets

- **Legal** — Review documents, flag risks, and track compliance

- **Marketing** — Draft content, plan campaigns, and manage launches

- **Product management** — Write specs, prioritize roadmaps, and track progress

- **Biology research** — Search literature, analyze results, and plan experiments

In addition to the function plugins listed above, we provide **Plugin Create**: a plugin that helps you create custom plugins from scratch.

For the full collection of Anthropic-built plugins, visit [GitHub](https://github.com/anthropics/knowledge-work-plugins).

To add a plugin:

1. Open Claude Desktop for macOS.

2. Browse available plugins and click to install.

3. You can also click “Upload plugin” to upload a custom plugin file.

**Note:** Plugins are saved locally to your machine. Organization-wide plugin provisioning is coming in a future update.

After installing or uploading a plugin, you can customize it to better fit your workflow:

1. While viewing an installed plugin, click the “Customize” button in the upper right corner.

2. This will automatically input a Cowork prompt asking Claude to customize the plugin you chose.

3. Click “Let’s go” to start working with Claude to customize the plugin.

Each plugin you install adds commands you can invoke while using Cowork. Type / or click the “+” button to see available commands from your installed plugins.

[https://downloads.intercomcdn.com/i/o/lupk8zyo/2010180867/ea6555f889c8ae2b676b8e33214e/975b77da-9bb4-436e-bdf4-cd6318fd593c?expires=1771347600&signature=0f1b7c6ed2b1843b39abd1fb7f513894281ae99b2ad88295d4ff93ecc9975712&req=diAmFsh2nYlZXvMW1HO4zYdmTSvDZnYoRKEe0R6ky%2Bx3%2BauNaKEqhqEoXcaq%0ASVhtmkfuO7KielqLQfA%3D%0A](https://downloads.intercomcdn.com/i/o/lupk8zyo/2010180867/ea6555f889c8ae2b676b8e33214e/975b77da-9bb4-436e-bdf4-cd6318fd593c?expires=1771347600&signature=0f1b7c6ed2b1843b39abd1fb7f513894281ae99b2ad88295d4ff93ecc9975712&req=diAmFsh2nYlZXvMW1HO4zYdmTSvDZnYoRKEe0R6ky%2Bx3%2BauNaKEqhqEoXcaq%0ASVhtmkfuO7KielqLQfA%3D%0A)

---

Working on tasks with Cowork consumes more of your usage allocation than chatting with Claude. This is because complex, multi-step tasks are compute-intensive and require more tokens to execute.

If you find yourself hitting usage limits frequently when using the Cowork research preview, consider:

See [Usage limit best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) for more information.

---

Cowork is designed for complex, multi-step work that benefits from file access and extended execution time. Here are some examples:

- **Organize files:** "Organize my Downloads folder by type and date" — Claude can sort hundreds of files into categorized folders.

- **Process receipts:** Drop receipts in a folder and ask Claude to create a formatted expense report.

- **Batch rename:** Rename files with consistent patterns like YYYY-MM-DD formatting.

- **Research synthesis:** Combine information from web searches, articles, papers, and notes into coherent reports or summaries.

- **Transcript analysis:** Extract themes, key points, and action items from meeting notes, interviews, or lecture recordings.

- **Personal knowledge synthesis:** Analyze your notes, journals, or research files to surface patterns, themes, and connections you might have missed.

- **Spreadsheets with formulas:** Generate Excel files with working VLOOKUP, conditional formatting, and multiple tabs—not just CSVs that need fixing.

- **Presentations:** Create slide decks from rough notes or meeting transcripts.

- **Reports from messy inputs:** Turn voice memos and scattered notes into polished documents.

- **Statistical analysis:** Outlier detection, cross-tabulation, and time-series analysis on your data files.

- **Data visualization:** Generate charts using your data.

- **Data transformation:** Clean, transform, and process datasets.

---

Cowork runs in a virtual machine (VM) on your computer. This provides several security benefits:

- **Controlled environment:** Claude operates within defined boundaries, with controlled file and network access.

- **Isolation:** The VM environment is separate from your main operating system.

**Important:** While the VM provides isolation, Claude does have access to local files you grant it permission to access. Review Claude's planned actions before allowing it to proceed, especially when working with sensitive files.

Permissions work the same as for chat. You control:

1. Which [MCPs you connect to Claude](https://claude.ai/settings/connectors) and how often they ask for permission.

2. [Claude’s internet access](https://claude.ai/settings/capabilities)

Please carefully assess how much you trust an MCP or website before extending access beyond Claude’s default settings.

---

Cowork is a feature preview, which means some capabilities are not yet available:

- **No memory across sessions:** Claude does not retain memory from previous Cowork sessions.

- **Desktop only:** Cowork is only available in the Claude Desktop app and does not sync across devices.

- **Session persistence:** The desktop app must remain open for your session to continue. Closing the app ends the session.

---

This message is expected and indicates that Cowork is updating to the most recent version to apply any fixes and improvements.

Ensure the Claude Desktop app was open throughout the entire task. If the app was closed or your computer went to sleep, the session may have ended.

Cowork consumes more usage than standard chat. Try using standard chat for simpler tasks and reserve Cowork for complex, multi-step work that benefits from file access.

Check that you've granted Claude the appropriate file access permissions. Review the output location Claude specified when completing the task.

Did this answer your question?

