---
title: The Moment Everything Changed
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting]
---

# The Moment Everything Changed

---

date: 2025-06-10 19:06:30
created: 2025-04-09 20:08:20
categories:

- Obsidian Files

---

## Automating Your Google Drive Workflow (Part 2)

## Because life’s too short to spend it renaming files

Remember that time I accidentally shared the wrong version of a document because it was buried in a maze of poorly named duplicates? Yeah, let’s fix that. After our dive into folder organization last week, many of you asked about handling the actual day-to-day mess of file management. You know, the part where we swear we’ll rename “Untitled Document (7)” later but never do.

Here’s the thing about automation: it’s not about building some complex robot assistant. It’s about teaching Google Drive to handle the small, annoying tasks that pile up when we’re too busy to deal with them. Think of it as training a very reliable intern who never gets tired of renaming files.

# The Moment Everything Changed

Last month, I opened my Drive to find seventeen files named “Untitled Document” staring back at me. Seventeen. Each one a mystery, each one potentially important, each one a testament to my “I’ll name it later” optimism. That was the day I decided to stop being the person who manually renames files one by one.

# Simple Automation That Actually Helps

Before we dive in: a crucial safety note. These scripts can make changes to multiple files at once, so ALWAYS test them on a folder with dummy files first. I learned this the hard way after accidentally renaming an entire project’s worth of files. Trust me, your future self will thank you for taking this precaution.

Here’s how to safely test any script:

1. Create a new folder called “Test_Automation”

2. Put some dummy files in it (copies of real files work great)

3. Use this folder’s ID in the script first

4. Only after testing thoroughly should you use it on your real files

The beauty of Google Drive is that it comes with Apps Script, a built-in way to automate tasks. Don’t worry if you’ve never coded before. We’re going to start with something so simple it barely feels like coding.

Let’s solve the “Untitled Document” problem first. Here’s a script that automatically adds the creation date to any untitled file in your inbox folder:

function renameUntitledFiles() {const folder = DriveApp.getFolderById('YOUR_INBOX_FOLDER_ID');const files = folder.getFiles();

while (files.hasNext()) {const file = files.next();if (file.getName().startsWith("Untitled")) {const uploadDate = file.getDateCreated().toISOString().split('T')[0];const newName = `${file.getName()}_${uploadDate}`;file.setName(newName);

```text
// Log changes for safety  
  Logger.log(`Renamed: ${file.getName()} to ${newName}`);  
}
```

}}

What this does in plain English: It looks at your Inbox folder, finds any file named “Untitled Document,” and renames it to include the date it was created. ==So “Untitled Document” becomes “Untitled Document_2025–01–30.”==

**Update**: If the “Untitled Document_2025–01–30" is still bugging you; I am trying to solve that in this new article I just posted.

[

## A Better Way to Handle Those “Untitled Document” Files in Google Drive

### Because we all have that moment when we need to write something NOW and forget to name it

spencerabrahams.medium.com

]([https://spencerabrahams.medium.com/a-better-way-to-handle-those-untitled-document-files-in-google-drive-f32457f2a982?source=post_page-----5b38cd2a3dce---------------------------------------](https://spencerabrahams.medium.com/a-better-way-to-handle-those-untitled-document-files-in-google-drive-f32457f2a982?source=post_page-----5b38cd2a3dce---------------------------------------))

# Real-World Automation Examples

Different workflows need different kinds of automation. Here’s how various people are using these scripts:

For Freelancers:

function organizeClientFiles() {const inboxFolder = DriveApp.getFolderById('YOUR_INBOX_FOLDER_ID');const files = inboxFolder.getFiles();

while (files.hasNext()) {const file = files.next();const fileName = file.getName();const prefix = "[ClientName]_";

```text
// Add client prefix if missing  
if (!fileName.startsWith(prefix)) {  
  file.setName(prefix + fileName);  
}  
  
// Move invoices to accounting folder  
if (fileName.toLowerCase().includes('invoice')) {  
  const accountingFolder = DriveApp.getFolderById('YOUR_ACCOUNTING_FOLDER_ID');  
  file.moveTo(accountingFolder);  
}
```

}}

For Students:

function organizeCourseFiles() {const inboxFolder = DriveApp.getFolderById('YOUR_INBOX_FOLDER_ID');const files = inboxFolder.getFiles();

// Define course foldersconst courseFolders = {'MATH101': 'MATH_FOLDER_ID','HIST201': 'HISTORY_FOLDER_ID'// Add more courses as needed};

while (files.hasNext()) {const file = files.next();const fileName = file.getName().toUpperCase();

```text
// Sort files based on course prefix  
for (let course in courseFolders) {  
  if (fileName.includes(course)) {  
    const courseFolder = DriveApp.getFolderById(courseFolders[course]);  
    file.moveTo(courseFolder);  
    break;  
  }  
}
```

}}

# Setting Up Error Notifications

Nobody likes silent failures. Here’s how to get notified if something goes wrong:

function notifyOnError(error) {GmailApp.sendEmail('[your.email@example.com](mailto:your.email@example.com)','Drive Automation Alert',`Script encountered an error: ${error.toString()}\n\n` +`Time: ${new Date().toISOString()}`);}// Wrap any function with error notificationfunction safeRenameFiles() {try {renameUntitledFiles();} catch (error) {notifyOnError(error);}}

# Making It Work For You

Now, I know what you’re thinking: “Spencer, this looks like code, and code is scary.” I get it. But here’s the thing: you don’t need to understand every line. You just need to know where to put it and how to customize the folder IDs.

Here’s how to get your folder IDs:

1. Right-click any folder in Drive

2. Click “Get link”

3. Look for the long string of letters and numbers in the URL: `[https://drive.google.com/drive/folders/**1a2b3c4d5e...**](https://drive.google.com/drive/folders/1a2b3c4d5e...)`

# Setting Up Automatic Running

The real magic happens when you set these scripts to run automatically:

1. In your script editor, click the clock icon (Triggers)

2. Click “Add Trigger”

3. Choose your function and how often to run it

4. I recommend:

- Rename script: Daily at midnight

- Sort script: Weekly on Sunday night

- Client prefix script: Hourly during work days

# When Things Go Wrong (And How to Fix It)

Automation can be scary, but we’ve built in some safety nets:

1. Every script logs its actions (check View > Execution log)

2. You’ll get email notifications if something fails

3. Files are never deleted, only moved or renamed

If something does go wrong:

function undoLastChanges() {const logFile = DriveApp.getFileById('YOUR_LOG_FILE_ID');const changes = logFile.getBlob().getDataAsString().split('\n');

changes.forEach(change => {// Parse the log and revert changes// Details of what was renamed/moved});}

# Your Next Step

Start small. Here’s your homework:

1. Set up the rename script first

2. Create a test folder with dummy files

3. Run the script manually to see what happens

4. Once comfortable, set up automatic running

Next week, we’ll talk about maintaining this system without losing your mind. Because the best automation in the world doesn’t help if you can’t remember how it works three months later.

