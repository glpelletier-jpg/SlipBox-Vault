---
title: I Set Up My PC to Auto-Organize My Messy Desktop
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, AutomationEngineering, HowTo, computer]
---

# I Set Up My PC to Auto-Organize My Messy Desktop

---

date: 2025-09-05 23:48:25
created: 2025-09-05 23:39:45
categories:

- General Stuff

---

# I Set Up My PC to Auto-Organize My Messy Desktop

I tend to download stuff and work on my desktop by default. So like most people, my desktop (and even the downloads folder) is almost always a mess with just random icons, files and folders everywhere. So I set up an automation system that automatically clears up that clutter by sorting and organizing my files every hour.

## Get Power Automate

You need just one app for this, and it’s built into Windows 11. It’s called [Power Automate](https://www.howtogeek.com/automate-repetitive-tasks-with-power-automate-for-desktop/). If you’re running Windows 10, you can install from the Microsoft Store.

If you’re new to automation, and the idea of automating desktop cleanup conjures up images of complicated code or [bash scripts](https://www.howtogeek.com/devops/bash-automation-scripting-basics-part-1/), don’t worry. You don’t need to run any code or learn anything complicated to make this work. Power Automate makes it pretty simple, and once you can set up this decluttering automation flow, you can learn to make your own too.

Let’s first get familiar with Power Automate. Open the Start menu and search **power automate** and launch the app. On the first launch, the app will greet you with a welcome tour, which you can skip if you like. Now you’re on the dashboard.

Power Automate is built on two things: flows and actions. Flows are a bunch of actions strung together that execute an automated task. And the Power Automate editor gives you access to a ton of actions and lets you string them together in very specific ways in loops or conditionals to get things done.

We’ll jump into it and figure out what that means in action. Let’s create a new flow.

## Step 1: Create a New Flow

Click “New Flow” at the top, or switch to the Flows tab and click “New Flow.” Give the flow a name and then click create. Once it’s created, it’ll open in the Power Automate editor. The editor has an Actions pane, and a tab for the main flow and a tab for subflows.

../_resources/image 5.png

## Step 2: Folder Watcher

We’ll create a routine that watches the Desktop (which is just another folder on your drive) or your downloads folder for changes. The action for this is called “Get Files in Folder,” which grabs files in the target folder and then lets you decide what to do with them.

../_resources/image 6.png

../_resources/image 7.png

In the Actions pane, search for **get files in folder** and double-click it. It’ll open a window where you can choose the folder you’re retrieving the files. Click the Folder field and then click the blue folder icon to pick your Desktop location.

You’ll notice that the first action is now in the Main flow, which is storing its output in the “Files” variable. Retrieving the files is step one. The next step is rerouting the files to their relevant folders. Let’s do that now.

## Step 3: Send Files to the Right Destination

We’ll set up a loop that automatically identifies a file by its extension on the desktop and sends it to a preset folder.

The loop here is called For Each. Look up “for each” in the Actions pane and double-click it. It’ll ask which value you want to iterate. The blue X icon next to it lets you pick the variable you want to loop. In our case, our variable is “Files” from the previous step. It saves the current file the loop is working on as “CurrentItem.”

../_resources/image 8.png

In plain words, Power Automate is looking at each file on the desktop, and for each file, it is plugging it into the whatever loop logic we assign it.

Let’s make that [loop logic](https://www.howtogeek.com/devops/primer-bash-loops-for-while-and-until/).

Once again, go to the Actions pane and this time search “if” which brings up the If conditional. Double-click “if” and next to the First Operand click the blue X icon and choose “CurrentItem.”

../_resources/image 9.png

Now we want to tell Power Automate to look at all the files on the desktop and pick the right ones. We can do so by telling it to note the extension. For example, an image file will have the extension .jpg, .jpeg, .png, or .webp at the end. So for the operator, we pick “Ends With.”

Finally, we specify the Second Operand, which is the file extension in our case. I’ll choose .jpg.

What happens when Power Automate finds a JPG file on the desktop? We’ll set that up next. The action is Move File. This part is straightforward. If a file name ending with .jpg is found, then move the file to the following destination.

../_resources/image 10.png

In the Actions pane, search **move file** and double-click it. The Move Files action demands two things: it wants to know which files you want to move and where you want to move them. The file name will be stored in the “CurrentItem” variable that we have already set up. And we can move it to any folder we like.

There you have it. Our first Power Automate flow, which scans all files on the desktop, looks for JPG files and automatically moves them to the Pictures folder.

../_resources/image 11.png

You can test it by selecting the very first action, and clicking the play button. You’ll see Power Automate run through the flow in real time and move all your files in seconds.

## Step 4: Add More File Types

The next part is easy. We can now copy-paste the if-then action within the same For Each loop and replace .jpg with other file extensions as well as the destination for moved files. 

Select the three blocks: If, Move Files, and End, and right-click and choose Copy. Then select the very last End tag and click Paste. This ensures that the copied block is pasted within the main For loop.

../_resources/image 12.png

Then you just change the extension and the destination in the If and Move blocks as needed. You can always edit the flow later to add more files and destinations. For example, if you're trying to automatically send screenshots on the desktop to a dedicated Screenshots folder, you can edit the If conditional to look for the word "screenshot" in the file name, and then have it sent to a specified directory.

The same works for file types. In this flow, I set up [PDF files](https://www.howtogeek.com/360744/what-is-a-pdf-file-and-how-do-i-open-one/) to be rerouted to the Documents folder. You can set up similar automation for documents you typically work with. I'd go for .md, .odt, .txt, .doc, and .docx to cover the basics. Software files like .exe or .msi could go to an Apps folder.

../_resources/image 13.png

../_resources/image 14.png

Lastly, save the flow by clicking the Save icon on the top.

## Step 5: Set Up a Keyboard Shortcut

At this point, you can launch Power Automate at any time and click the play button to declutter your desktop in one-go. If you want to go a step further, you can set up a keyboard shortcut for running this automation in the background.

Go to the flows tab and select your decluttering flow. Click the three-dots and then Properties.

../_resources/image 15.png

You’ll see a field labeled “Run with keyboard shortcut.” Click it and press a key combination like Ctrl+Shift+Backspace to trigger the flow.

---

With that, you can now magically clean up your desktop or downloads folder, no matter how cluttered, with a single shortcut. Power Automate can do a lot more than simple file sorting, and if you're interested, you can [check out more flows](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/).

