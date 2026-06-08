---
title: I Built a 5 Portable Raspberry Pi Homelab
id: 20260412045034
date: 2026-04-12
type: fleeting
tags: [fleeting, SingleBoardComputer, computer, AutomationEngineering, curiosity]
---

# I Built a 5 Portable Raspberry Pi Homelab

43,105 views  Premiered Mar 9, 2026
I've been experimenting with travel routers, but I wanted to take it to the next level by creating a portable homelab that can travel too. In this video, I'll be showing you how I designed and built a 5-inch rack that can hold a Raspberry Pi-based OpenWrt router, a network switch, a NAS with an OLED stats display, and a Docker server.

## ADDITIONAL INFORMATION

Visit my blog for the project write-up - [https://the-diy-life.com/i-built-a-5-](https://the-diy-life.com/i-built-a-5-)...

Download the 5" Lab Rax 3D Print files - [https://makerworld.com/en/models/2499](https://makerworld.com/en/models/2499)...

## PURCHASE LINKS

DFRobot CM4 Router Board - [https://amzn.to/3NeG3qN](https://amzn.to/3NeG3qN)
Raspberry Pi Compute Module 4 - [https://amzn.to/4uh36C3](https://amzn.to/4uh36C3)
TPLink Litewave 5 Port Switch - [https://amzn.to/4b3xzus](https://amzn.to/4b3xzus)
Raspberry Pi 5 - [https://amzn.to/4bxwexq](https://amzn.to/4bxwexq)
Pi 5 Active Cooler - [https://amzn.to/47selO7](https://amzn.to/47selO7)
Pimoroni NVMe Base - [https://amzn.to/4beIT7c](https://amzn.to/4beIT7c)
Pimoroni NVMe Base Duo (optional for 2 drives) - [https://amzn.to/4rgkfsL](https://amzn.to/4rgkfsL)
Lexar NM620 drive - [https://amzn.to/4ugGZLV](https://amzn.to/4ugGZLV)
I2C OLED display - [https://amzn.to/4aZkZhl](https://amzn.to/4aZkZhl)
M3 Brass Inserts - [https://amzn.to/4udMRG5](https://amzn.to/4udMRG5)
M3x8mm Button Head Screws - [https://amzn.to/4spV2wY](https://amzn.to/4spV2wY)

Tools & Equipment Used:
H2D 3D Printer - [https://bambulab.com/](https://bambulab.com/)
Hakko Soldering iron - [https://amzn.to/4srzW1k](https://amzn.to/4srzW1k)
Brass Insert Tool Tips - [https://amzn.to/4bm1deW](https://amzn.to/4bm1deW)
USB C Pencil Screwdriver - [https://amzn.to/4lWg5Ec](https://amzn.to/4lWg5Ec)

Some of the above parts are affiliate links. By purchasing products through the above links, you'll be supporting this channel, at no additional cost to you.

## CHAPTERS

00:00 Intro
01:03 Designing The 5" Rack
03:21 Assembly
05:33 Installing The Hardware
06:58 What Can It Do?

If you've got any ideas for Raspberry Pi, Arduino, or other Electronics projects or tutorials you'd like to see, let me know in the comments section.
This project involves 3D printing and assembling a 50% scale version of a 10-inch home lab rack. The build features a Raspberry Pi-based router, a NAS, and a Docker server, all housed in a compact unit designed for portability.
Summary

How this was made
Auto-dubbed
Audio tracks for some languages were automatically generated. Learn more
Ask
Get answers, explore topics, and more

Ask questions
Chapters

View all
Transcript
Follow along using the transcript.

Show transcript

Michael Klements
121K subscribers
Videos
About

Facebook

Instagram
97 Comments
Guy Pelletier
Add a comment...

@nikobellic570
1 day ago
Aesthetics are an underappreciated aspect of the tech maker scene.

3

Reply

@JeffGeerling
7 days ago
Okay, now we need a 3" microcontroller-based rack.

57

Reply

2 replies

@HelloHelloXD
8 days ago
Great video as always. Thanks for linking the oled stats display article in the post as well

2

Reply

@zubrkabbi
6 days ago
Oh my god it's so cute! Printing one immediately

1

Reply

@ZeekSecLab
4 days ago
Can't wait ti build out of this! Loved my 10" LabRax Build. Thank you so much 🙏🏾

Reply

@makerbymistake
7 days ago
That looks so tiny and so awesome

Reply

@peterraeth4963
5 days ago
Well Done!! Completely Explained. Contains no hype. Nice.

Reply

@QuietDeep974
8 days ago
Mais non ! Comme c'est trop mignon, j'adore !

Reply

@michaelcooper5490
7 days ago
Great video! Thank you again for an awesome tool for us homelabbers.

1

Reply

@deechvogt1589
8 days ago
Okay Michael we need to have the bench marks and a real world travel log!  Love the build!  Thanks for sharing!

2

Reply

@riffdex
7 days ago
Honey, I shrunk the rack

5

Reply

@Sanddancer75
8 days ago
That's really cute.  The original Lab Rax is too big for my current printer, but this might be a handy little Stopgap.

9

Reply

@kenrq65
8 days ago
Very nice, Michael, well done

2

Reply

@madcatta
5 days ago
100% printing this! With some modifications, I have a couple of OrangePiZeros, old GL.inet travel router and a basic 100mbps switch all unused and i was looking for a project for them, this seems like a great way to get them all together for some sort of doomsday lab that runs off 5V!

Reply

@Ermuggo
6 days ago
you should add a foldable screen and keyboard to it, also maybe a x86 processor with some sodimm ram. Maybe make the design more slim so it fits in a backpack.

1

Reply

@Mr.BuckshotFTW
6 days ago
I'd like to see how you're powering all these devices in such a small rack. And if you can make all the power supplies for the items fit inside the rack.

Reply

@captainmcadams
8 days ago
I love this! I know it’s all in jest and a bit of fun, but you know someone’s going to try and push this as far as they can!

Reply

@auger2012
8 days ago
thanks for sharing, very nice build. could do with a draw for patch cable management while travelling.but otherwise nice. no idea you could get sparkle filament   look forward so seeing how it progresses

1

Reply

@jjolleta
8 days ago
Fantastic little rack !!!!

Reply

@pfabiszewski
8 days ago
Cute :D

Reply

In this video

Chapters

Transcript
Chapter 1: Intro
0:00Travel routers are great, they let you take your network with you anywhere, but what if you could take your entire Homelab with you instead?
0:077 secondsA router, NAS and Docker server all inside a rack that's small enough to fit into your backpack.
0:1212 secondsSo I tried shrinking my 10-inch Lab Rax design down to the smallest size that could still run a real Homelab stack.
0:1919 secondsAnd this is the result, a 5-inch rack.
0:2222 secondsThis is a 50% scale version of my 10-inch Lab Rax design, but still fits a Raspberry Pi based OpenWrt router, a network switch, a NAS with an OLED stats display and a Docker server with a Grafana monitoring dashboard.
0:3737 secondsSo in this video I'm going to print and assemble the rack, install the hardware and see if a portable Raspberry Pi based Homelab actually works.
0:4646 secondsTo start out I opened up the original model for my 10-inch rack and then made some changes to scale it down and still keep it easy to print and assemble.
0:5454 secondsIt keeps a lot of the same proportions of the racks too, so one new 10-inch model can be shrunk down to 50% scale and should then fit into this rack.
Chapter 2: Designing The 5" Rack
1:031 minute, 3 secondsSo let's get the rack printed out as a start. Because it's been shrunk down, it's actually really easy to print.
1:091 minute, 9 secondsThe whole print fits onto a single build plate and uses just 220g of filament.
1:201 minute, 20 secondsI printed it out in grey sparkle filament with translucent yellowish green accents.
1:251 minute, 25 secondsI also separated the bulk colours over two build plates which makes printing a bit faster.
1:321 minute, 32 secondsI think the parts have come out really nicely.
1:371 minute, 37 secondsThis design uses M3x8mm screws to hold everything together and I'm using some M3 brass inserts in the top and the base instead of having to press nuts into pockets.
1:471 minute, 47 secondsI think these make a stronger and easier to assemble build.
1:511 minute, 51 secondsThese are just pressed into place using a soldering iron, four for the vertical posts and four for the feet and handles.
1:581 minute, 58 secondsAnd then the same for the opposite side. For the holes on the vertical posts to mount the racks onto I also used M3 brass inserts.
2:072 minutes, 7 secondsI used slightly shorter ones for these because I had a box of them lying around, but they're the same diameter as the longer ones and both work just fine.
2:162 minutes, 16 secondsI'm only putting them into the top and bottom hole for each rack unit rather than all three.
2:222 minutes, 22 secondsWith the inserts installed, assembly only takes a couple of minutes.
2:292 minutes, 29 secondsWe start by installing the four posts on the base with a single M3x8mm screw holding each one in place.
2:432 minutes, 43 secondsThe two side panels then slide down into recesses in the posts.
2:462 minutes, 46 secondsI've kept this design feature in the 5 inch rack as it makes it easy to customise with open sides or add a fan or even a cable entry cutout.
2:562 minutes, 56 secondsThen the top cover can go on with four screws holding that onto the top of the posts.
3:043 minutes, 4 secondsThe tiny handles can then be screwed onto the top, each with two M3 screws.
3:103 minutes, 10 secondsAt this scale, the handles are more decorative than functional, but I think they serve their purpose.
3:173 minutes, 17 secondsLastly, the four feet on the bottom finish it off.
Chapter 3: Assembly
3:213 minutes, 21 secondsAs with my previous build, you can also print these out in TPU for a more flexible finish.
3:303 minutes, 30 secondsAnd that's the rack complete.
3:323 minutes, 32 secondsHonestly, because it's been scaled down from the original LabRacks model, it's difficult to tell how much smaller it is.
3:403 minutes, 40 secondsBut it is quite noticeable alongside the original. It's actually now 8 times smaller in volume.
3:473 minutes, 47 secondsSo what does that mean for components that we can fit into it? Well at 5 inches, we can still comfortably fit a Raspberry Pi into a single unit.
3:563 minutes, 56 secondsAnd by trimming some fat off a 5 port switch, we can build one of those in too. So there's still potential for a decent setup.
4:044 minutes, 4 secondsSo to turn this into a real portable home lab, here's what I'm installing.
4:084 minutes, 8 secondsA 5 port gigabit ethernet switch, which has been stripped of its TP-Link plastic housing to save on space.
4:164 minutes, 16 secondsThis now easily fits into a single rack unit.
4:204 minutes, 20 secondsThen I've got this little board with dual ethernet ports and a Raspberry Pi Compute Module 4 on the bottom.
4:264 minutes, 26 secondsIt's also got a USB-C port for power on the front, and another on the side for peripherals.
4:324 minutes, 32 secondsI'm going to load OpenWRT onto this board as the router for my home lab.
4:374 minutes, 37 secondsI don't need it at this stage, but WiFi can also be added through the USB port on the side.
4:434 minutes, 43 secondsThen I've got a single Raspberry Pi 5 with an active cooler on it, which I'm going to install Pi OS Lite onto, and then run Docker on it for all of my network services and for monitoring.
4:544 minutes, 54 secondsAnd lastly, my setup wouldn't be complete without a Raspberry Pi based NAS. And this takes up two rack units.
5:035 minutes, 3 secondsSo I've got a Pimoroni NVMe base with a Lexar NM620 drive for storage. Alongside that's an I2C OLED display which will display my stats script.
5:135 minutes, 13 secondsYou could also use a dual NVMe base for two storage drives. And these are both connected to an 8GB Raspberry Pi 5.
5:235 minutes, 23 secondsAnd I swapped this small heatsink out for an active cooler too. Now let's get those installed in the rack.
Chapter 4: Installing The Hardware
5:335 minutes, 33 secondsFrom the top down, I'm installing the router, then the switch, then the Pi NAS, and lastly
5:405 minutes, 40 secondsthe Pi running Docker at the bottom.
5:495 minutes, 49 secondsAnd my mini travel home lab is now complete.
6:006 minutesThere looks like there's lots of room around components for airflow.
6:036 minutes, 3 secondsI'll keep an eye on the temperatures, and if they become an issue, it'll probably be best to install a 60mm fan on the side panel blowing across the racks.
6:136 minutes, 13 secondsIt's actually a really powerful little stack for its size.
6:166 minutes, 16 secondsHaving its own OpenWrt router means that I can do anything I could have done with a travel router, but now automatically apply it to my little home lab.
6:256 minutes, 25 secondsI can create advanced firewall rules and have full control over my network's DHCP and DNS settings.
6:326 minutes, 32 secondsI've also got network attached storage that allows me to share files and folders across all devices on the network.
6:396 minutes, 39 secondsAnd it can do automated backups and even cloud backups when the router is connected to the internet.
6:456 minutes, 45 secondsAnd the Docker Pi is available to run any other services that I need local when traveling.
6:506 minutes, 50 secondsSo I could have a completely offline and portable local network with all of my files, a media server and automated backups.
Chapter 5: What Can It Do?
6:586 minutes, 58 secondsIt's even got some cool monitoring dashboards available through a browser on the local network.
7:067 minutes, 6 secondsThis one's through Netdata, and I've got another one running Prometheus and Grafana.
7:177 minutes, 17 secondsSo that's my new 5-inch portable home rack.
7:197 minutes, 19 secondsIt's small enough to travel with, but still powerful enough to run a full Pi-based home lab stack.
7:297 minutes, 29 secondsI'm curious though, what would you put into a rack this small?
7:327 minutes, 32 secondsLet me know in the comments section, because I'm already thinking about some upgrades for version 2.
7:477 minutes, 47 secondsThanks for watching, please remember to like this video if you enjoyed it, and subscribe for more tech and electronics projects, tutorials and reviews.

Sync to video time

All

From Michael Klements

raspberrypi.com

Computer Hardware

8:53:24
Satisfactory 1.2 Release Day! - Day 1
Bitz
15K views
•
Streamed 3 hours ago
New

This $216 AliExpress Homelab Sounds Too Good To Be True
162K views

Some devs knew exactly what players were going to do
9M views

With all the reasons to hate JD Vance, Padma Lakshmi didn't think we needed a culinary one
1.7M views

How do Xenomorphs grow so fast without eating?
718K views

Taylor Tomlinson on How Feeling Fulfilled Can Make Dating Harder |
317K views

The Struggle of Wearing Heavy Armor and Overcoming Challenges: Aliens (1986)
803K views

11:14
Trump Calls Newsom’s Learning Disability “Political Suicide”
Late Night with Seth Meyers
21K views
•
23 minutes ago
New

23:01
Project MINI RACK - a Homelab Revolution!
Jeff Geerling
934K views
•
1 year ago

13:34
I made my network 10X FASTER for $10
jakkuh
289K views
•
6 days ago
New

9:00
Trump issues SHOCK announcement amid BOMBSHELL resignation
Brian Tyler Cohen
365K views
•
4 hours ago
New

16:30
Captain of Industry Update 4 - 10 Tips I Wish I Knew Before Mid-Game
UnjustOdin
5.6K views
•
5 days ago
New

14:24
Switchberry: Sometimes a good time costs extra
Level 2 Jeff
33K views
•
1 day ago
New

25:20
When German POWs Tried American Hot Dog For The First Time — They Couldn't Believe What Happened
WW2PowDiaries
20K views
•
4 months ago

2:18
Taylor Tomlinson Resents Hot Chicks | Netflix Is A Joke
Netflix Is A Joke
3.5M views
•
6 years ago

10:52
I Built A Secret Server No One Can Trace
Cyb3rMaddy
74K views
•
1 month ago

14:17
This isn't a normal mini PC... and I love it.
Hardware Haven
915K views
•
1 year ago

13:10
Satisfactory 1.2 EXP Patch Notes Video
Coffee Stain Studios
163K views
•
9 hours ago
New

38:23
THE MARTIAN 2 - Stonehenge Was First Discovered on Mars
Red Horizon
17K views
•
11 hours ago
New

17:20
Trump Brags About Killing, Attacks “Late Night Morons” and Iran War Coverage & Jimmy Recaps Oscars
Jimmy Kimmel Live
2.8M views
•
21 hours ago
New

18:58
iMac is Back: Fixing one of Apple's mistakes
Geerling Engineering
39K views
•
5 days ago
New

6:44:17
Bitz Plays: Captain Of Industry Update 4 - Day 3
Bitz
2.5K views
•
Streamed 6 days ago
New

11:24
WHOA: Republicans take LEGAL ACTION against Pam Bondi
Brian Tyler Cohen
39K views
•
42 minutes ago
New

20:25
3D-Printed Mini Racks are GREAT... but which one?
Hardware Haven
214K views
•
5 months ago

23:38
A Homelabbers Networking Playground with Opnsense, Proxmox, VLANs and Tailscale
Tailscale
110K views
•
2 years ago

5:00
Trump Gasps as Barack Obama Flips Barron’s Insult in 8 Seconds
Political Sparks
17K views
•
7 hours ago
New

30:52
Automating Excess Materials & Concrete Slabs | Captain Of Industry Update 4 - Ep.4
Bitz
1.7K views
•
4 days ago
New

4:33
Is MacBook Neo "The One"?
Level 2 Jeff
105K views
•
5 days ago
New

13:41
Trump Says Iran War Will End When He Feels It in His Bones
Late Night with Seth Meyers
384K views
•
16 hours ago
New

20:14
So, you want to start self-hosting? Part 1 - How to install Proxmox and pick your hardware.
Tailscale
367K views
•
9 months ago

They say TV is a dying medium, but wait til you tune in for the daily Pledge of Allegiance!
571K views

Rolling Stone’s | Musicians of Musicians | Good Ol’ Days |
1.3M views

"I'm starting to wonder if Kristi Noem shot her dog by accident while taking a family photo."
3.6M views

3D Print Your NAS In A 10" Rack Format
58K views

Theon KiIIed Ramsey's Lover, Saved Sansa & Escaped Winterfell with Her
18M views

Historian Jill Lepore on how women pushed for women's rights during the writing of the Constitution
146K views

1:16
Connect the Dots
The Lincoln Project
325K views
•
2 weeks ago

4:47
2026 Project - Networx 12U Wall Mounted Rack for Network Equipment.
Bill White
23K views
•
1 month ago

23:08
I almost quit YouTube....
NetworkChuck
658K views
•
6 days ago
New

9 videos
Raspberry Pi 5
ExplainingComputers
•
Playlist
View full playlist

24:26
Keep Your Home Lab Online With a UPS, NUT, ...and wolnut?
Hardware Haven
161K views
•
8 months ago

12:58
Why did Raspberry Pi make their own SSD?
Level 2 Jeff
430K views
•
1 year ago

8:44
Confused Trump EMBARRASSES himself with OFF THE WALLS claim | Another Day
Brian Tyler Cohen
301K views
•
21 hours ago
New

27:30
I Sent My Last Signal from Mars — and I Was Seen
Red Horizon
96K views
•
1 month ago

48:51
OIL PRODUCTION!!! | Captain Of Industry Update 4 - Ep.5
Bitz
1K views
•
1 day ago
New

9:31
Rustdesk and Tailscale is a remote desktop access dream team
Tailscale
192K views
•
8 months ago

13:02
Pretty Fly for a Spy Pi
Jeff Geerling
259K views
•
2 weeks ago

17:09
Building A DIY NAS On A Budget - TrueNAS Scale
Hardware Haven
1.7M views
•
3 years ago

11:04
I Created an Offline AI Server for When SHTF Happens
Crosstalk Solutions
117K views
•
5 days ago
New

8:48
Vance SQUIRMS when called out IN FRONT OF TRUMP
Brian Tyler Cohen
366K views
•
23 hours ago
New

42:30
Automating Tier 2 Construction Parts | Captain Of Industry Update 4 - Ep.3
Bitz
1.5K views
•
5 days ago
New

