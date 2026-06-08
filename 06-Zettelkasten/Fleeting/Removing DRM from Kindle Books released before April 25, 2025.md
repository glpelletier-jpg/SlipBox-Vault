---
title: "Removing DRM from Kindle Books released before April 25, 2025"
id: 20260430184342
date: 2026-04-30
type: fleeting
tags: [fleeting, Book, computer, learning]
---

# Removing DRM from Kindle Books released before April 25, 2025

1. Install an Older Version of Kindle for PC
You can download the older versions of the app from my eBook-DRM-Tools repo.

Download the v1.0 release

After installing, open the app and log in with your Amazon credentials.

Immediately go to Tools>Options and uncheck the box to automatically install updates.

You can also go to Tools>Options>Content and specify the folder you want your downloaded books to go. It should default to /Documents/My Kindle Content/

Download the books you want to add to Calibre.

UPDATE: Some people find that turning off your wifi when you install the Kindle for PC app ensures that the app doesn't automatically update before you can uncheck the box.

1. Install the KFX Input Plugin
In Calibre, click the dropdown next to Preferences and then "Get plugins to enhance calibre".

Filter by ‘KFX’ and install the KFX Input plugin.

Restart Calibre

1. Set Up DeDRM for Kindle Books
In Calibre, go to Preferences > Plugins > File Type Plugins > DeDRM

Click "Customize Plugin"

Select "Kindle for PC" and click the "+" button

1. Confirm DRM is Removed
Add a book from your "My Kindle Content" folder, located here: C:\Users<YourUsername>\Documents\My Kindle Content\ (unless you changed the folder earlier, then navigate to that folder to add your books).

Double-click to open it in the Calibre e-book viewer

If the book opens successfully, the DRM is removed, and you can add all of your downloaded Kindle books.

UPDATE: DeDRM only removes the DRM when the book is first added to Calibre. If you've tested and it didn't work, remove the book and re-add when trying again.

UPDATE #2: When you open "My Kindle Content," each book has its own folder with several files in it. Make sure you add the .azw file. It should be marked as "Kindle Content" for the Type.

UPDATE #3: If you suddenly start getting books that are KFX-ZIP, your Kindle for PC app more than likely updated to a newer version. Revert back to the old one and you should be able to download the .azw file again.

1. Convert Your Kindle eBooks to ePub
In Calibre, right-click the book you want to convert > Convert books > convert individually

Choose EPUB on the upper right, then click OK to export



About 2 weeks ago I followed this method and worked flawlessly for some books bought on Amazon. 2 days ago it didn't worked, no matter what. Finally found out that the kindle desktop app updated itself to a newer version even if the box was unchecked. So keep that in mind if it ever happens to you.

Upvote10DownvoteReplyAwardShare

2 more replies



Yeah - I ran it last night and so far it's not attempted to update (both about an hour after I ran the fix and this morning). Before it appeared to patch within a couple of runs of the kindle app, so fingers crossed it really fixes it :)

Here's the forum post the video I saw had a link to: [https://www.mobileread.com/forums/showthread.php?t=361503](https://www.mobileread.com/forums/showthread.php?t=361503) - in first post by odamizu under the section Method 2 Kindle for PC/Mac has a link to DNSB's tool (his/her post is only about setting up calibre and kindle, not nook or kobo books).

And this was the video I stumbled on that got me to that download: [https://www.youtube.com/watch?v=TIjvNB2Ojk0](https://www.youtube.com/watch?v=TIjvNB2Ojk0) - just want to give full credit to where I got it and how I found it :)

