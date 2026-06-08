---
title: How I Keep My Onyx Boox in Sync Without Losing My Mind
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting]
---

# How I Keep My Onyx Boox in Sync Without Losing My Mind

---

date: 2025-12-04 21:20:04created: 2025-12-04 21:19:38categories:

- Zettelkasten

---

# **How I Keep My Onyx Boox in Sync Without Losing My Mind**

## Onyx Cloud, WebDAV, Tailscale, and Zotero — yes, it’s a Frankenstein, but it works.

Press enter or click to view image in full size

[https://miro.medium.com/v2/resize:fit:1050/1*HA6wWxpLYr5gLfSwC5rlXQ.png](https://miro.medium.com/v2/resize:fit:1050/1*HA6wWxpLYr5gLfSwC5rlXQ.png)

You know that moment when you finish annotating a paper on your Onyx Boox, feel like an absolute academic beast, and then — bam — you can’t figure out how to get the file off your device without emailing it to yourself three times and accidentally exporting the wrong version?

Yeah. That was my life for a while.

Boox devices are amazing for distraction-free reading, handwriting, and academic work. But syncing? Let’s just say… it’s a bit of a patchwork. The options are *there*, but no one really tells you how they all work together — or how to build a system that doesn’t collapse every time your Wi-Fi sneezes.

So in this article, I’ll walk you through the various syncing options for the Boox Onyx ecosystem, including **Onyx Cloud**, **WebDAV**, **Tailscale FileDrop**, **Google Drive**, and **Zotero**. I’ll also share my own syncing setup, which combines **Nextcloud (via WebDAV)**, **Tailscale FileDrop**, and **Zotero** for a setup that’s private, reliable, and low-maintenance.

Let’s get into it.

 

## Onyx Cloud: Easy, but Limited

Let’s start with the built-in option. Onyx Cloud is the default syncing system that comes pre-installed on Boox devices. It does the job — for the most part.

**Pros:**

- Super easy to set up (just log in with your Boox account).

- Automatically syncs your handwritten notes across devices.

- You can view and manage notes online via the Boox Assistant or their web portal.

- It can sync reading progress, annotations, and even highlights in supported formats.

**Cons:**

- Limited storage (the free plan gives 10GB, which sounds like a lot until it isn’t).

- Sync speed is occasionally… mysterious.

- No granular control over what syncs or where.

- Not great if you want your files accessible via desktop apps or integrated into your wider file workflow.

If you’re just getting started, it’s a great out-of-the-box solution. But if you’re like me — paranoid about backups and fussy about folder structure — you’ll eventually want more control.

 

## WebDAV: Self-Hosting Nirvana (with a Learning Curve)

Enter WebDAV.

This is where my inner tinkerer comes alive. WebDAV (Web Distributed Authoring and Versioning) is an open protocol that lets your Boox sync with third-party cloud services — **like Nextcloud, ownCloud, or even a plain WebDAV server**.

**My Setup:**

- I run a self-hosted **Nextcloud** instance on a Raspberry Pi (I know, I know, very cliché).

- Boox connects to it via WebDAV credentials.

- I set up my “Sync” folder on the Boox to point to my Nextcloud WebDAV path.

**What this gives me:**

- Files sync directly to my private cloud — no third-party servers.

- I can access notes, PDFs, and documents on all my devices.

- If I edit a file on my laptop, it syncs back to Boox (with a bit of patience).

- And I can organize everything *my* way: thesis notes in `/Research/PhD/`, scanned documents in `/Inbox/`, etc.

**What to watch out for:**

- WebDAV syncing is **manual**. You need to hit the sync button yourself.

- Conflict resolution is a bit crude — it’ll often just save a copy.

- Initial setup requires correct URLs, usernames, and possibly some trial and error.

Still, once you have it going, it feels amazing. You’re no longer tied to proprietary clouds. Your Boox becomes part of your self-hosted academic fortress.

 

## Tailscale FileDrop: Fast, Secure, Magical

Sometimes you just need to throw a file from your Boox to your laptop without the overhead of syncing, URLs, or clouds. That’s where **Tailscale FileDrop** shines.

If you’re not familiar, **Tailscale** is a mesh VPN built on WireGuard. It creates a secure private network between your devices — no port forwarding, no pain. FileDrop is a bonus feature that lets you send files directly between them.

**How I use it:**

- My Boox, laptop, and phone all run Tailscale.

- When I finish reading a paper, I long-press the PDF and hit “Share” → “Send via FileDrop”.

- My laptop instantly receives it. No middleman, no cables, no email drafts titled “important-final2.pdf”.

I also use it the other way: if I need to send a research article or ePub to my Boox, I drag it into FileDrop and it shows up instantly in my Downloads folder.

**Why I love it:**

- **Blazingly fast.**

- Works even if Boox and laptop are on different networks (as long as both are online).

- No file size limits or weird formatting issues.

It’s not syncing per se, but it solves the **just-get-this-damn-file-on-my-device** problem elegantly.

 

## Google Drive & Dropbox: It Kinda Works

Boox officially supports syncing with **Google Drive** and **Dropbox**, both via the built-in app and third-party tools like the file manager.

You can:

- Log in and access your cloud folders.

- Open PDFs, ePubs, or docs directly from Drive.

- Save files back into those services after annotating.

But to be honest? I don’t love it. Here’s why:

- The file browser inside Boox is clunky and slow, especially for big folders.

- If you’re working offline, access becomes hit-or-miss.

- Syncing is not as seamless as it sounds. Sometimes, annotations don’t carry over well.

That said, if you already use Google Drive for your academic stuff, it might be *just enough*. And it’s easy to set up.

I keep my Drive integration enabled for quick access to non-sensitive files, but I don’t rely on it for day-to-day research notes.

 

## Zotero: Academic Syncing, But Smarter

And now for the scholar’s secret weapon: **Zotero**.

Zotero is *not* a sync tool in the traditional sense, but hear me out. With a little bit of setup, it becomes an **ideal bridge** between your Boox annotations and your citation management system.

**How I use it:**

- I download PDFs of academic papers via Zotero on my laptop.

- Zotero syncs these files to my Nextcloud storage (via Zotfile or Zotero Storage).

- On my Boox, I open the synced folder via WebDAV and annotate the paper.

- After reading, I export the annotated PDF back into the Zotero-linked folder.

- Zotfile then detects the changes and extracts the highlights/notes into Zotero as metadata.

The result?

- I read on Boox, annotate naturally.

- Zotero stays up-to-date with my reading.

- I can search, cite, and build bibliographies *without touching Word* until I have to.

**Pro tip:** If you annotate in Xodo (available via Play Store on Boox), you can export annotations as text, which is Zotero-friendly. But the built-in NeoReader also does a decent job with this — especially if you stick to highlights and margin notes.

 

## Summary: How My Frankenstein Setup Actually Works

Let’s tie it all together. Here’s a peek into **my current Boox syncing workflow**:

- **Self-hosted Nextcloud via WebDAV** for daily notes, PDFs, and document sync. Private, structured, and stable.

- **Tailscale FileDrop** for one-off sends when I don’t want to mess with folders. Fast, magical, and perfect for conferences or urgent file transfers.

- **Zotero** for academic PDFs, annotations, and citation magic.

It’s not perfect. But it works. And it’s mine.

 

## Some Final Thoughts from a Sync-Hardened PhD Brain

Look, syncing Boox with your research ecosystem is not one-click magic. But the tools are all there — you just have to choose your combination. For me, **control, privacy, and interoperability** mattered most. That’s why I leaned toward self-hosting and lightweight tools like Tailscale.

But maybe you’re different. Maybe Google Drive is your jam, or you’re deep in the Apple ecosystem and want to AirDrop everything (in which case… I admire your courage).

The point is: Boox gives you *enough openness* to build a workflow that fits your needs. Whether you’re deep in thesis writing or just trying to keep track of annotated journal articles without losing your mind, syncing doesn’t have to be chaos.

And if you figure out an even better setup? Please tell me. I’m still chasing that sweet, sweet frictionless sync.

 

