---
title: Windows 11 Power Automate
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, AutomationEngineering, HowTo, computer]
---

# Windows 11 Power Automate

---

date: 2025-09-16 22:59:22
created: 2025-09-06 00:06:21
categories:

- General Stuff

---

## Windows 11 Power Automate

### Quick Links

- [Automatically Move Downloaded Files](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/#automatically-move-downloaded-files)

- [Automatically Rename Files with Date & Time](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/#automatically-rename-files-with-date-amp-time)

- [Close Select Apps](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/#close-select-apps)

- [Automatically Empty the Recycle Bin](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/#automatically-empty-the-recycle-bin)

- [Automatically Archive Old Files](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/#automatically-archive-old-files)

- [How to Manage and Schedule Flows in Power Automate](https://www.howtogeek.com/best-power-automate-flows-for-windows-11/#how-to-manage-and-schedule-flows-in-power-automate)

Power Automate is a free app that allows you to automate many tasks on your Windows 11 PC. From automatically emptying Recycle Bin to archiving old files, you can do many things with this app. I’ll show you some useful flows to use with the app.

## Automatically Move Downloaded Files

If you save all downloaded files in [the default Downloads folder](https://www.howtogeek.com/273618/how-do-you-change-windows-default-download-path/), the folder is bound to get cluttered. You can get around that by automating the task of moving your downloaded files. You can choose which folder to move your files to, so your Downloads folder is always neat and clean.

To make that flow, launch Power Automate and select New > Flow in the top-left corner. On the Create a Flow screen, select the "Flow Name" field and type a descriptive name. This could be something like **Move Downloaded Files**. Then, click "Create."

[✕Remove Ads](https://www.howtogeek.com/premium/?ref=ad_removal)

["Flow Name" and "Create" highlighted on the "Create a Flow" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/1-create-move-files-flow.jpg?q=49&fit=crop&w=825&dpr=2)

On the open window, in the left sidebar, expand "File" and double-click "Move File(s)." On the Move File(s) window, select the "File(s) to Move" field and type the following. Replace "Username" with your username.

I have added *.* at the end to ensure all files in the folder are selected. If you only want to move certain file types, say EXE, type *.exe, and so on.

```text
C:\Users\Username\Downloads\*.*
```

Click the "Destination Folder" field and choose the folder you want to move files to. Select the "If File Exists" drop-down menu and choose what happens if the file to move already exists in the destination folder. Your options are "Do Nothing" and "Overwrite." Then, choose "Save."

[Various options highlighted on the "Move File(s)" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/2-configure-move-files-flow.jpg?q=49&fit=crop&w=825&dpr=2)

[✕Remove Ads](https://www.howtogeek.com/premium/?ref=ad_removal)

To test your flow (which will actually move your files from the Downloads folder), click "Run" at the top. Then, save the flow by clicking "Save" (the floppy disk icon) at the top.

## Automatically Rename Files with Date & Time

You can [rename multiple files](https://www.howtogeek.com/111859/how-to-batch-rename-files-in-windows-4-ways-to-rename-multiple-files/) and add the current date and time to them using Power Automate. This [makes file organization easier](https://www.howtogeek.com/windows-file-organization-tips/) and helps with version control. To do that, open Power Automate and select New > Flow. Click the "Flow Name" field and type something like **Rename Files**. Then, choose "Create."

["Flow Name" and "Create" highlighted on the "Create a Flow" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/3-create-rename-files-flow.jpg?q=49&fit=crop&w=825&dpr=2)

In the left sidebar, expand "Folder" and double-click "Get Files in Folder." Choose the "Folder" field and select the folder in which the files to rename are located. Leave the "File Filter" field as is if you want to include all files. Then, click "Save."

[✕Remove Ads](https://www.howtogeek.com/premium/?ref=ad_removal)

[Various options highlighted on the "Get Files in a Folder" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/4-get-files-to-rename.jpg?q=49&fit=crop&w=825&dpr=2)

From the left sidebar, expand "Loops" and double-click "For Each." Select the "Value to Iterate" field and add the "Files" variable. Then, click "Save."

["Value to Iterate" and "Save" highlighted on the "For Each" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/5-rename-each-file.jpg?q=49&fit=crop&w=825&dpr=2)

In the left sidebar, expand "File" and double-click "Rename File(s)." Select the "File to Rename" field and choose the "CurrentItem" variable. Choose the "Rename Scheme" field and select "Add Datetime." To add a custom date and time, turn on "Use Custom Datetime." The rest of the fields are self-explanatory. Then, click "Save."

[Various options highlighted on the "Rename File(s)" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/6-rename-files.jpg?q=49&fit=crop&w=825&dpr=2)

You can now run the flow using the "Run" button at the top.

## Close Select Apps

You can make a flow that automatically closes your chosen apps, eliminating the need for you to close each app manually. You can select as many apps as you want to be closed at once.

This method force-closes your apps. Make sure to save your unsaved work in your apps before running this flow.

First, find the process names of the apps you want to close. To do that, [open Task Manager](https://www.howtogeek.com/898233/open-task-manager-in-windows-11/) by right-clicking the Windows taskbar and choosing "Task Manager." Open the "Details" tab and note the process name for each app you want to close. The process names look like chrome.exe, slack.exe, and so on.

[The process names highlighted in Task Manager.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/7-task-manager-process-names.jpg?q=70&fit=crop&w=825&dpr=1)

Launch Power Automate and choose New > Flow. Click the "Flow Name" field and type something like **Close Apps**. Choose "Create" to begin making the flow.

["Flow Name" and "Create" highlighted on the "Create a Flow" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/8-create-close-apps-flow.jpg?q=49&fit=crop&w=825&dpr=2)

From the left sidebar, expand "System" and double-click "Terminate Process." Click the "Specify Process By" drop-down menu and choose "Process Name." Click the "Process Name" field and type the process name you noted earlier. Then, choose "Save."

[Various options highlighted on the "Terminate Process" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/9-terminate-process.jpg?q=49&fit=crop&w=825&dpr=2)

Repeat the above process to add the Terminate Process action for each app you want to close. After you’ve added all your apps, click "Run" at the top to test the flow.

## Automatically Empty the Recycle Bin

The default file removal behavior in Windows 11 is to send the file to Recycle Bin. This causes Recycle Bin to get cluttered. You can fix that by [emptying it on a regular basis](https://www.howtogeek.com/763443/how-to-automatically-empty-the-recycle-bin-in-windows-11/), and you can create a Power Automate flow to automate that task.

Make sure you don’t want to recover any deleted files from Recycle Bin. If you do, recover the files now, as running the following flow will delete all the files in Recycle Bin for good.

Open Power Automate and click New > Flow. Select the "Flow Name" field and type something like **Empty Recycle Bin**. Then, choose "Create."

["Flow Name" and "Create" highlighted on the "Create a Flow" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/10-create-empty-recycle-bin-flow.jpg?q=49&fit=crop&w=825&dpr=2)

In the left sidebar, expand "Scripting" and double-click "Run PowerShell Script." Click the "PowerShell Code to Run" box and type the following code. This code empties the contents of Recycle Bin. Then, at the bottom, choose "Save."

```text
Clear-RecycleBin -Force -ErrorAction Ignore
```

["PowerShell Code to Run" and "Save" highlighted on the "Run PowerShell Script" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/11-type-powershell-script.jpg?q=49&fit=crop&w=825&dpr=2)

To run the flow, click "Run" at the top. It will immediately clear Recycle Bin.

## Automatically Archive Old Files

You can automatically archive files older than the specified number of days, making it easier to find fresh files. You can archive your files by moving them to a different folder or [adding them to a ZIP archive](https://www.howtogeek.com/749206/how-to-zip-and-unzip-files-on-windows-11/). I’ll show you how to do the former.

To start, launch Power Automate and select New > Flow. Click the "Flow Name" field and type **Archive Old Files**. Then, choose "Create."

["Flow Name" and "Create" highlighted on the "Create a Flow" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/12-create-archive-files-flow.jpg?q=49&fit=crop&w=825&dpr=2)

In the left sidebar, expand "Folder" and double-click "Get Files in Folder." Choose the "Folder" field and select the folder from which you want to archive files. Keep the "File Filter" field as is to include all files. Turn on "Include Subfolders" to include subfolders from your selected folder. Then, click "Save."

[Various options highlighted on the "Get Files in a Folder" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/13-get-files-to-archive.jpg?q=49&fit=crop&w=825&dpr=2)

From the left sidebar, expand "Loops" and double-click "For Each." Select the "Value to Iterate" field and choose the "Files" variable. Then, click "Save."

["Value to Iterate" and "Save" highlighted on the "For Each" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/14-archive-each-file.jpg?q=49&fit=crop&w=825&dpr=2)

In the left sidebar, expand "Date Time" and double-click "Get Current Date and Time." Then, choose "Save."

["Save" highlighted on the "Get Current Date and Time" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/15-get-current-date-time.jpg?q=49&fit=crop&w=825&dpr=2)

On the left, in the Date Time section, double-click "Subtract Dates." Click the "From Date" field and select "CurrentDateTime." Choose the "Subtract Date" field and select CurrentItem > CreationTime. In the "Get Difference In" field, choose "Days." Then, select "Save."

[Various options highlighted on the "Subtract Dates" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/16-find-date-difference.jpg?q=49&fit=crop&w=825&dpr=2)

In the left sidebar, expand "Conditionals" and double-click "If." Click the "First Operand" field and select the "TimeDifference" variable. Click the "Operator" drop-down menu and choose "Greater Than." Select the "Second Operand" field and type the number of days after which a file is ready to be archived. Then, click "Save."

[✕Remove Ads](https://www.howtogeek.com/premium/?ref=ad_removal)

[Various options highlighted on the "If" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/17-check-if-files-are-old.jpg?q=49&fit=crop&w=825&dpr=2)

Expand "File" in the left sidebar and double-click "Move File(s)." Select the "File(s) to Move" field and choose the "CurrentItem" variable. Select the "Destination Folder" field and choose the folder where you want to save the archived files. Select the "If File Exists" drop-down menu and choose what to do if the file to archive already exists in the destination folder. Then, select "Save."

[Various options highlighted on the "Move File(s)" window.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/18-archive-old-files.jpg?q=49&fit=crop&w=825&dpr=2)

Click "Run" at the top to run the flow.

## How to Manage and Schedule Flows in Power Automate

After creating your flows, you’ll find them all on the main interface of Power Automate. It’s from here that you can edit your flows, delete your flows, and run your flows.

[✕Remove Ads](https://www.howtogeek.com/premium/?ref=ad_removal)

To run a flow, in Power Automate’s left sidebar, click "Flows." Find the flow to run, right-click it, and choose "Run." Feel free to select any other action you want to perform on your flow.

["Flows" and "Run" highlighted in Power Automate.](https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/19-run-flow-power-automate.jpg?q=49&fit=crop&w=825&dpr=2)

Power Automate doesn’t offer the feature to schedule flows, but you can [use this app in conjunction with Task Scheduler to schedule your flows](https://www.howtogeek.com/123460/htg-explains-how-windows-uses-the-task-scheduler-for-system-tasks/). This allows you to run your created flows at the specified date and time automatically.

---

And that’s how you use Power Automate to automate various tasks on your Windows 11 PC. You can play around with many other flow variations to create just the kind of flow you want. And like that, you can also [use batch files to automate many tasks on your PC](https://www.howtogeek.com/useful-batch-files-you-can-create-to-automate-tasks-on-windows-11/).

