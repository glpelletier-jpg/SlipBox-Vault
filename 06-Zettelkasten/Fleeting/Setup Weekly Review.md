---
title: Setup Weekly Review
id: 20260528183830
date: 2026-05-28
type: fleeting
tags: [fleeting, AutomationEngineering, PKM, HowTo]
---

# Setup Weekly Review


Setting up a weekly review in Capacities involves creating a dedicated "Weekly Review" object type, designing a structured template with embedded queries, and making it a recurring practice. This workflow centralizes your task management, reflection, and notes for a seamless process.


Here is the step-by-step setup process:

# 
Step 1: Create a Weekly Review Object

1. Go to the left-hand sidebar and click the + button next to Object Types (available in Capacities Pro).

2. Name it Weekly Review and choose an icon.

3. Set the calendar property to Date so each review is tied to a specific week.


# Step 2: Build a Recurring Template


1. In your new Weekly Review object, click the Template option.

2. Create a checklist for your review process. Common steps include:

    1. Review your week: What went well? What didn't?
    

     2. Process your inputs: Review your previous week's Daily Notes, highlighted articles, or meeting notes.
    

    3. Task Management: Clear out old tasks and establish 1-3 primary goals for the upcoming week.

3. Add a date property to your template and set it to repeat every week on your preferred day.

# 
Step 3: Embed Dynamic Queries


Maximize your review by pulling in content automatically using Capacities' Query feature:


1. Type /query into your template.


2. Set the rules to gather specific objects (e.g., all tasks created in the past 7 days, or all notes tagged with #review).


3. This creates an automated dashboard you can check off every single week without manual searching.


If you want to tailor this specifically to your needs, let me know:
What framework you follow (e.g., Getting Things Done, PARA method)
If you want to integrate your built-in tasks into your weekly review
What kind of metrics or goals you track

Capacities
+1
I can help you adjust your template and queries accordingly.

8 sites
4 More Ways You can Use Queries in Capacities
Capacities users can utilize queries to group content based on defined rules and reuse these created views in various locations. Q...

8:47

YouTube
·
Capacities
How I use Capacities for Task and Project management with ... - Reddit
Capacities currently only assigns dates/times to tasks, not periods (week, month, quarter, year). So I built my own system using c...

Reddit
How to Capture, Review, and Use Your Notes
This video presents a workflow for using a note-taking app consistently. The described approach serves as a foundation that can be...

13:02


To set up a weekly review based on this daily structure, you want a system that aggregates your reading metrics, resurfaces your captured thoughts, and highlights your big lessons.


Here is how to map this template into a Weekly Review Template in Capacities.


The Weekly Review Template Structure


Create a new template inside your Weekly Review object and paste this layout:
📈 Weekly Progress & Goals
Reading Progress: [Total pages read this week] / [Weekly goal]
Goal Success Rate: [e.g., Hit 5/7 days]
📥 Inbox & Capture Cleanup
Use the queries below to review your raw thoughts and links from the past 7 days. Move them into permanent objects or archive them.
[Insert Query 1: Daily Capture Blocks]
🧠 Knowledge & Idea Processing
Review the concepts you found this week. Ensure they are properly linked and developed into full Idea Objects.
[Insert Query 2: Idea Objects Created This Week]
🔋 Weekly Synthesis & Reflection
Major Themes: [What did you spend the most time learning this week?]
Key Lessons Learned: [Synthesize the "One Big Lessons" from your evening reviews]
Adjustments for Next Week: [How will you tweak your daily intentions or reading goals?]
Setting Up Your Automated Queries
To make this review low-friction, use embedded queries to pull data automatically from your daily notes.
Query 1: Fetching "Daily Capture" Blocks
Since your daily capture is text inside your daily notes, you can use a block-based query:
Type /Query in the Inbox & Capture Cleanup section.
Select Blocks as the result type.
Add a filter: Time
Created in last 7 days.
Add a text filter: Text contains
@ (or a specific tag if you tag your captures, like #capture).
Query 2: Reviewing New "Idea Objects"
Your daily template instructs you to turn insights into an "Idea Object." You can pull all of these into one list:
Type /Query in the Knowledge & Idea Processing section.
Select your Idea Object Type as the target.
Add a filter: Date Created
Within the last 7 days.
Action Plan for Your Review
When you sit down for your review, follow this 3-step workflow:
Aggregate: Check your 7 daily notes from the week to tally your reading pages and glance at your "One Big Lessons."
Process: Look at your automated queries. Open the unorganized text links or new ideas, add proper tags, or connect them to broader topics.
Plan: Fill out the Weekly Synthesis section to set up your intentions for the coming Monday.
If you want to refine this further, let me know:
Do you use a specific Tag (like #insight) for your Learning & Insights section?
Would you like help setting up a habit tracker table directly inside your weekly review?

Do you use a specific Tag (like #insight) for your Learning & Insights section?
Using a specific tag like #insight is highly recommended if you want to filter text blocks quickly, but since your daily template explicitly says to "turn it into an Idea Object," you actually have two distinct paths you can choose between.
Here is how to decide which approach fits your workflow best:
Option 1: The "Idea Object" Path (Recommended for Deep Knowledge)
Since your template already instructs you to turn insights into an Idea Object, you do not strictly need a tag. The object type itself acts as the filter.
How it works: When you highlight text in your daily note and turn it into an Idea Object, it automatically gets a creation date.
The Weekly Query: Your weekly review query simply looks for Object Type: Idea created in the Last 7 days.
Pros: Keeps your daily note clean; forces you to develop fleeting thoughts into permanent knowledge right away.
Option 2: The #insight Tag Path (Best for Fleeting Thoughts)
If you don't always have time during the day to create a full Idea Object, tagging the text block with #insight acts as a holding pen.
How it works: You type your thought in the daily note and just append #insight at the end of the block.
The Weekly Query: In your weekly review, set your query to look for Blocks containing the tag #insight created in the Last 7 days.
Pros: Faster during the day. During your weekly review, you can go through this list and decide which ones are worth upgrading to a permanent "Idea Object."
Which one should you choose?
Choose Option 1 if you prefer to do the heavy lifting of organizing daily.
Choose Option 2 if you prefer a fast daily capture and want to do the actual organizing and filtering during your weekly review.
To help you finalize this setup, let me know:
Do you prefer to process your notes daily or save the organizing for one big weekly session?
Would you like the exact steps to create a block-based query for tags in Capacities?

Do you prefer to process your notes daily or save the organizing for one big weekly session?
As an AI, I don't take notes myself, but observing note-takers reveals clear trade-offs for both approaches. Choosing between them depends entirely on your personal energy and daily schedule.
Here is how both styles play out in Capacities to help you decide what fits you best.
Option A: The Daily Processing Style
This approach focuses on organizing information while it is still fresh in your mind.
The Workflow: You convert text to Idea Objects before closing your daily note.
The Benefit: High accuracy. You remember exact context.
The Downside: It interrupts your daily focus.
Capacities Fit: Best if you love a clean, completed daily note every night.
Option B: The Weekly Batch Style
This approach prioritizes fast capturing during the week and heavy organizing later.
The Workflow: You dump everything using tags like #insight. You sort it later.
The Benefit: Maximum speed during the workday.
The Downside: The weekly review takes longer. Context can fade.
Capacities Fit: Best if your days are hectic and you need frictionless entry.
Making Your Choice
If you want to reduce friction, start with Option B (Weekly Batch). It prevents you from getting bogged down in administrative organizing during a busy workday.
Which of these two styles sounds like a better fit for your current daily routine? Once you choose, we can lock down your exact query setup.

The Weekly Batch Style
Choosing the Weekly Batch Style is an excellent choice for keeping your workdays frictionless. It means your daily notes stay fast and messy, while your Weekly Review becomes the dedicated workspace where you transform raw logs into organized knowledge.
Here is exactly how to execute this style using tags and queries in Capacities.
Step 1: Your New Daily Routine (The Capture)
During the week, do not worry about creating new objects or organizing. Just use tags at the end of your text blocks to flag items for later.
Modify the prompts in your Daily Template to look like this:
Daily Capture: "Capture raw thoughts here... #capture"
Learning & Insights: "Did you stumble upon a great concept? Write it here and add #insight"
Step 2: Set Up the Weekly Review Queries
In your Weekly Review Template, you will build two block-based queries to round up everything you tagged during the week.
Query A: Pulling your Daily Captures
In your review template, type /Query and press enter.
Select Blocks as your target.
Click Add Filter
select Tags
choose #capture.
Click Add Filter
select Time/Date Created
choose Last 7 Days.
Query B: Pulling your Insights
Below your "Knowledge Processing" header, type /Query.
Select Blocks as your target.
Click Add Filter
select Tags
choose #insight.
Click Add Filter
select Time/Date Created
choose Last 7 Days.
Step 3: Your Weekly Processing Workflow
When you open your Weekly Review, these two queries will automatically display a clean list of every single block you tagged during the week.
Run down the list and process them like an assembly line:
[Raw Insight Block] ──> Highlight Text ──> Click "Turn Into" ──> [Idea Object]
Review: Look at a block pulled in by the #insight query.
Transform: Highlight the text, click the "Turn Into" button in Capacities, and convert it into a permanent Idea Object.
Clean Up: Once an item is processed, remove the #insight tag from the original daily note block so your query stays clean for next week.
Would you like help writing out the exact step-by-step checklist to include at the top of this Weekly Review template, or would you like to explore setting up a habit tracker for your reading goals next?

Would you like help writing out the exact step-by-step checklist to include at the top of this Weekly Review template
Here is the exact step-by-step checklist to paste at the very top of your Weekly Review template. This keeps your processing fast, structured, and repeatable.
📋 Weekly Review Checklist
Tally Metrics: Check your last 7 Daily Notes and sum up your total reading pages.
Empty the Inbox: Review the #capture query below. Delete junk, complete quick tasks, or move notes to permanent pages.
Process Insights: Go to the #insight query. Highlight valuable thoughts, click Turn Into, and convert them into permanent Idea Objects.
Untag Processed Items: Remove the #insight and #capture tags from the processed blocks so they disappear from your weekly view.
Synthesize & Reflect: Fill out your "Key Lessons Learned" and set your primary focus area for the upcoming week.
To wrap up this setup, would you like to build a simple habit tracker table to log your weekly reading goals, or are you ready to test out this workflow?

build a simple habit tracker table to log your weekly reading goals
To track your reading goals alongside your review, you can embed a native table directly into your Weekly Review template.
Here is how to set up the tracker table and integrate it into your workflow.
Step 1: Create the Table in Your Template
Inside your Weekly Review template, type /table and press Enter. Create a table with 3 columns and 8 rows (one header row + 7 days).
Structure the columns like this:
Day	Pages Read	Completed?
Monday		[ ]
Tuesday		[ ]
Wednesday		[ ]
Thursday		[ ]
Friday		[ ]
Saturday		[ ]
Sunday		[ ]
Step 2: Choose Your Tracking Method
Depending on how much effort you want to spend during your weekend review, pick one of these two workflows:
The Sunday Summary (Fastest): Keep this table only in your Weekly Review. On Sunday, open your 7 daily notes from the week, glance at your reading logs, and quickly type the numbers into this table to see your weekly total.
The Daily Sync (Live Tracking): Copy this table and paste it into your Daily Template instead. Track your pages daily. During your Weekly Review, you can link to or embed those daily tracking blocks to see them all in one place.
Step 3: Link it to Your Metrics Section
Right below your new table, add a quick formula block or text line to summarize your success:
Weekly Total: [ Sum of Pages ] / [ Your Weekly Goal ]
Consistency: [ Number of Checkmarks ] / 7 Days
Your Weekly Review system is now fully complete! It handles your daily captures, filters your insights, and logs your habits in one central dashboard.
Would you like to troubleshoot how block-based queries display in Capacities, or are you ready to launch this system for your upcoming week?

launch this system for your upcoming week?
To launch this system for your upcoming week, you just need to put the pieces together inside Capacities so it is ready to use.
Follow these final 4 setup steps right now:

1. Update Your Daily Template
Go to your Daily Note settings and update your template. Ensure the prompts include your target tags:
Under your capture section, add: (Use #capture for raw notes)
Under your learning section, add: (Use #insight for key takeaways)

2. Create the Weekly Review Template
Open your Weekly Review object type.
Click Create Template and name it Weekly Review Template.
Paste the Checklist, the Habit Tracker Table, and your Reflection Headers into the body.

3. Build the Live Queries
Inside that template, create your two live queries:
Type /query under the Inbox section
Filter: Blocks + Tag: #capture + Time: Last 7 Days.
Type /query under the Insights section
Filter: Blocks + Tag: #insight + Time: Last 7 Days.

4. Schedule Your First Review
Create your very first Weekly Review object right now. Set its date property to this coming Sunday.
Your system is officially live! Run your days friction-free using your tags, and let Capacities do the heavy lifting of gathering them this weekend.
If you hit any snags while building the queries or formatting the table, just let me know and we can tweak it! How does this automation setup feel to you?

