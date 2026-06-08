---
title: (S)(YouTube) Lecture 1 Course Overview + Introduction to the Shell - Missing Semester
id: 20260215060000
date: 2026-02-15
type: fleeting
tags: [fleeting, learning, computer, KnowledgeWork]
---

# (S)(YouTube) Lecture 1 Course Overview + Introduction to the Shell - Missing Semester

**Cover**

[https://img.youtube.com/vi/https://www.youtube.com/watch?v=MSgoeuMqUmU/hqdefault.jpg](https://img.youtube.com/vi/https://www.youtube.com/watch?v=MSgoeuMqUmU/hqdefault.jpg)

**Source**

[https://www.youtube.com/watch?v=MSgoeuMqUmU](https://www.youtube.com/watch?v=MSgoeuMqUmU)

**Content**

[https://www.youtube.com/watch?v=MSgoeuMqUmU](https://www.youtube.com/watch?v=MSgoeuMqUmU)

## Summary

## Transcript

Meet the skiing community

Skip navigation
Search

Create

Avatar image
Lecture 1: Course Overview + Introduction to the Shell

Missing Semester
108K subscribers

Subscribe

1.8K

Share

Ask

Save

59,785 views  Jan 18, 2026  MASSACHUSETTS INSTITUTE OF TECHNOLOGY
You can find the lecture notes and exercises for this lecture at [https://missing.csail.mit.edu/2026/co](https://missing.csail.mit.edu/2026/co)...

0:00:00 - Introduction
0:01:20 - Motivation
0:03:50 - Class structure and logistics
0:07:06 - What is the shell?
0:11:59 - Why should you care about it?
0:14:04 - Navigating in the shell
0:28:02 - What is available in the shell?
0:58:50 - The shell language (bash)
1:14:05 - Conclusion
Missing Semester's first lecture introduces the shell, a powerful text-based computer interface. The course covers essential command-line tools and techniques, including navigation, file manipulation, and program automation. Exercises are included to solidify understanding and practical application.
Summary

Ask
Get answers, explore topics, and more

Ask questions
Chapters

View all
Explore this course

8 lessons
Missing Semester IAP 2026
Missing Semester
Course progress
0 of 8 lessons complete

Transcript
Follow along using the transcript.

Show transcript

Missing Semester
108K subscribers
Videos
About
License
Creative Commons Attribution license (reuse allowed)
54 Comments
Guy Pelletier
Add a comment...

@0xsf
3 weeks ago
This is awesome! The GOAT lecture series is back!

13

Reply

@phil85813
12 days ago
Thank you on behalf of the general public!

4

Reply

@silvenustaongambewe4745
2 weeks ago
man MIT is doing the most. university is a luxury especially in Africa, here in Zambia to be precise but you are helping us in every way possible with the knowledge. MIT is the best

4

Reply

@maou_raizen
3 weeks ago
woah. welcome back. thank you so much for this course

11

Reply

@jasperdavdson
12 days ago (edited)
Did a double take when I saw Jon here - I already know this will be an amazing course!

3

Reply

@Aurora_Maxwell
3 weeks ago
Right on cue! I'm doing an AI Master's with a non-tech background, so this is exactly what I need to catch up. Can't wait for more!

5

Reply

@MissouriClydesdales
2 weeks ago
Excellent video, tyvm!!  I'm watching/listening at 85-90% playback speed and able to follow/understand much better.

1

Reply

@tgdigital01
3 weeks ago
Hey guys,
a fellow German student here.

I honestly can’t put into words how grateful I am for this MIT course that really acts as “glue code” — connecting so many important concepts, filling the gaps between topics, and teaching things that aren’t usually covered in regular modules but are absolutely essential for a smooth workflow.

Huge respect to you for making this available for free.
Keep up the amazing work — this course has truly been a blessing in my timeline.

Cheers from Germany 🇩🇪

47

Reply

4 replies

@simrandalvi8437
3 weeks ago
Thank you so much.
i hope i stay till the end of this course.

3

Reply

@olgafatica3445
3 weeks ago
Pragmatic MIT problem solving. Thank you for this.

Reply

@captaincaption
3 weeks ago
Thank you!

1

Reply

@MeAsInBravo
3 weeks ago
Welcome back! This is so dope!

2

Reply

@PedroSalazarOrtega-tw1jt
3 weeks ago
Thank you so much

1

Reply

@mohansahu4286
3 weeks ago
Just wow

Reply

@chandanshakya
3 weeks ago
Welcome back from Nepal. Loved your past lessons. Waited since last video

1

Reply

@enohamor2107
3 weeks ago
Carret C is an interrupt signal. It is one of the standard I/Os. Others include 0, 1, 127,  and so on.

1

Reply

@GuruSankarSubramanian
3 weeks ago
For Java, there is a open source project called Jbang which lets us to run java files as scripts ( like bash )

3

Reply

@lovelytingy
2 weeks ago
Goat Lectures back again

Reply

@HungLeViet-jz8dp
2 weeks ago
GOAT!

Reply

@JiriSvoboda-de3ir
3 weeks ago
Cool

Reply

In this video

Chapters

Transcript
Search in video
Introduction
0:01
Yes, you're in the right place.
0:07
I have a fix for that. Success It is now on the screen.
0:14
Yeah, exactly. Perfect. I love that. Even better.
0:20
Cool. I guess we might as well start. It's 1:37, which is an optimal start time for first class.
0:25
So welcome to the first class of Missing Semester IAP
0:30
2026. This is a class that we originally ran in 2019,
0:35
and then we ran it again in 2020. And then we all kind of moved on to other things, but enough people seem to find this class useful.
0:42
And there are enough things that have changed since last time that we decided to run another iteration. That's what we're here for.
0:48
We were sort of co-lecturing the class together, same as we did back in 2020 and 2019. I'm John.
0:54
I am Anish. Not much left to say. Oh yeah, that's a good idea. Is this thing on? Yeah. Yeah.
0:59
I am Anish. My name is Jose. All three of us are ex-MIT students who did this class while we were doing our PhD here.
1:09
We've since sort of moved on to other things. The other things are not particularly relevant, I think, for this class. So we're not going to do a whole what else are we doing?
1:17
But enough to say that like-- We all took a bunch of classes at MIT,
Motivation
1:22
and all of us sort of fell through this pain of all of the things that you're supposed to know in some way.
1:28
Or at least the classes sort of assume that you know like Git and editors and how to get around on the terminal and what the terminal even is.
1:34
And we felt like there's sort of a superpower here in that if you know how to use these environments well,
1:40
then it makes a lot of other things in these classes easier. The problem is no one teaches it to you,
1:47
hence the name "The Missing Semester." And so the goal of this class in all past instantiations and in this one is for us to go over all of those things,
1:56
or at least as many as we can fit into the time. All the tools, techniques, concepts, ideas that sort of make up the bulk of the behind-the-scenes knowledge.
2:05
I don't know if you have other things you want to add before we dive into the first topic.
2:11
Yeah, just a little bit more on the inspiration for this class. So all three of us while we were grad students here,
2:17
teed a bunch of classes and we often found that while in office hours we'd be teaching students topics that were actually not the subject matter for the course we were teaching,
2:25
but just things like how to use the shell, how to make most effective use of the text editor, and things like that.
2:30
And so we thought let's factor out all those topics and teach a dedicated course on it so you can focus on the course material in office hours.
2:38
Yeah, I think some of it is also like repetition, like there's a lot of things We think about computers like we can write programs that automate things,
2:44
but we don't think about the fact that the computer can automate our tasks working with the computer as well. Like you have a,
2:50
I don't know, you're running the tests for some lab and you want to run them until they fail because you know that they fail if you stress test them enough.
2:57
And instead of you pressing like arrow up enter, arrow up enter to run it multiple times, how can you automate this task?
3:02
And so those kinds of things are things that students don't even know to ask questions about because they don't necessarily know that it's possible.
3:09
And those are the kinds of things we want to give the insight to in this class. Yeah, just to add to that, I feel like a bit of it is unknown unknowns.
3:18
You might not know that a lot of smart programmers have come before you already faced these frustrations and already have solved these problems.
3:28
Since these solutions are not taught in your compilers class or in your algorithms class,
3:33
you might not know about them, and I think part that we're trying to cover here is giving
3:39
awareness of the types of tools that are out there and that you should know about and reach out when the time comes.
3:49
And this relates a little bit to the logistics of the class, so they're going to be nine one-hour lectures.
Class structure and logistics
3:55
That's not a lot of time even though it might sound like it. There are so many just areas to focus on,
4:01
not to mention individual tools. We will not be able to go into all of the tools in detail or all the techniques in detail.
4:07
For a lot of this, almost what we're doing is like exposure therapy. Right? Like we're like showing you what is possible and some of the tools that you should know about.
4:15
But we might not go into detail about how they work or exactly how to use them or even like example usages of them.
4:23
The idea is that we tell you about the tools that you should then go read more about yourself or you should go experiment with on your own.
4:31
You'll find that we have exercises included with all of the lectures and And all of those exercises are intended to give you more hands-on experience with the stuff we teach in the class.
4:40
So I highly recommend that you go in and do those because that is the way that you will learn the most out of this class.
4:46
The lectures are only part of the outcome. Should we mention logistics real quick?
4:52
Like what time? Oh yeah, sure. The different time for Friday? Yeah, let's do that.
4:57
So the lectures are going to be here. at this time, so starting at 1:30 to 2:30 every day for the next two weeks,
5:05
except for on Friday. We'll be in the same room but we'll be here starting at 3 p.m.
5:10
because the room is taken at this time. And on Monday, the day's off, so we're not going to be here on Monday.
5:16
The last class, so not this coming Friday but the Friday after, is going to be a class dedicated entirely to Q&A.
5:23
So the idea is that over the course of the previous two weeks, hopefully you'll have accumulated a bunch of
5:29
"Hey, but how does this work?" Or, "Can you tell us more about this kind of stuff?" Then we're happy to use all of the time there to cover whatever you can think of.
5:37
We're also gonna record all of these lectures and put them online. They're gonna go on Panopto first and then on YouTube,
5:42
which means that this will be intended for sort of the general public to consume as well to learn these techniques.
5:48
That is also why it is so important that you ask questions both during these lectures and in the Q&A session at the end because you are,
5:55
in a sense, the voice of the people who are watching this later. The questions you have when watching this,
6:01
other people will also have. And ideally we can capture the responses so that those people get to benefit from the answers as well.
6:09
Cool I think we're ready to dive into the first class. If you find that you have questions about...oh yeah,
6:16
like that. If you find that you have
6:24
Questions about the course or even about individual topics that you forget to ask in class.
6:33
There is a way to ask questions after the fact, there are two really. One of them is there is a Discord channel,
6:38
it's linked on the website and this is part of the open source university that is specifically like a Discord for people who are learning using open source materials.
6:47
We're missing semester as a channel. There's also a forum channel there where you can ask questions and then they will show up as like
6:53
questions like forum threads, where we can sort of give official answers in there as well.
6:58
Or if you want to ask your question more privately, you can also email the instructors using the email that's on the website.
What is the shell?
7:06
Cool Let's dive into the first topic, which is dramatic effect.
7:14
The terminal, or more specifically the shell.
7:19
What is the shell? Well computers have a bunch of different interfaces you can use to interact with them right we're all familiar with graphical user interfaces or GUIs those are the ones where you move your mouse around and you click things and those are fine they work really well if they're well designed graphical user interfaces.
7:36
We have other things more recently as well we have things like agentic interfaces, we have voice interfaces,
7:42
we have like virtual reality, augmented reality type interfaces. Maybe we'll get neural interfaces at some point.
7:49
We have all of these ways to interact with the computer. But the reality is that a lot of those interfaces are sort of specialized.
7:57
They're specialized to what the author of that interface had in mind when they created the interface.
8:03
So for a GUI, for example, the only things you can do are the things that are programmed into that program to do.
8:09
Similarly, it's pretty hard to take two different programs that are doing maybe related tasks and you wish you can combine them.
8:14
To try and actually combine them is often pretty hard. It requires there to be some custom implementation of software A from vendor A with software B from vendor B so that those two can interoperate.
8:27
And sometimes you really just want to drop into one level lower where everything is just you can write whatever commands you want,
8:33
you can chain them together however you want, and that is what the shell is. It is the textual interface to the computer.
8:38
This is the thing that we sort of had from the very beginning. This is what preceded all the GUIs,
8:44
it preceded all the other interfaces, and it is in a way the sort of core language for interacting with the computer.
8:51
The shell is really a program on your computer that lets you give inputs commands and prints the outputs of those commands,
8:59
and that's how you interface with it. The shell runs in the context of a terminal. A terminal you can think of as like the GUI window that is around it.
9:07
So in this case you can see that there's sort of a border around this thing. That is my terminal. It doesn't have any UI.
9:13
Some terminals do, mine does not. And inside of that terminal runs a shell.
9:18
You can open a terminal on your computer. Most computers these days ship with some kind of terminal,
9:24
with some kind of shell. On Linux, you can usually open this with like control alt T, tends to work on most distros,
9:31
or you can open your application launcher and just search for terminal, you should probably find something. On Windows, you type the Windows key in R
9:37
And then you can type either CMD or PowerShell. Those will open the same terminal,
9:43
but with different shells. And on Mac OS, Command Space to open Spotlight, and you search for Terminal,
9:49
you get a terminal. Now, the terminal, you usually don't need to worry too much about.
9:55
It gives you things like interactions with operating system things like copy-paste or mouse-paste
10:00
movement and selection. But apart from that, most of the interesting stuff here is going to happen in the shell.
10:06
The shell that is most commonly used across the board is the born-again shell or bash.
10:12
Bash is what you're going to get on Linux usually when you start a terminal. On Mac OS it also used to be bash,
10:18
these days it's something called Zsh or ZSH. This is also now the default on some
10:24
Linux distributions as well. Zsh is a bash compatible shell. So things that are valid in Bash are usually valid in Zsh,
10:31
and Zsh has a bunch of other ergonomic improvements and feature improvements that make it easier to interface with.
10:37
You'll find that there are actually a lot of different shells that are often built for different purposes. And in fact, there are some that,
10:43
like, Bash is pretty old and has not seen significant new feature expansion since then.
10:50
Zsh does have a lot of ergonomics improvements, but there are also shells like fish that are intended to be...
10:56
written by humans on the command line rather than by programs or in programs.
11:01
And you'll find that if you talk to the instructors, like all of us use different shells for different reasons.
11:06
And this is also something where you could choose to explore your own shell down the line. But for the initial sort of investigation and for everything we cover in this class,
11:14
we're going to be focusing on bash and sort of by extension also Zsh.
11:19
On Windows, you will not get a bash compatible prompt. You will get either batch, B-A-T-C-H
11:26
or you will get PowerShell, the newer version of the shell for Windows. These have similar concepts,
11:32
so what you find in Bash and similar shells, but they are kind of different. Their syntax is kind of different, the way you invoke programs is kind of different.
11:39
We will not cover those in this class. If you're on Windows I recommend you install either the Windows subsystem for Linux,
11:46
WSL, or you install a Linux virtual machine that lets you get access to a proper shell.
11:51
PowerShell is also very good, but for very different reasons. But in this class, we'll focus entirely on Bash and its derivatives.
Why should you care about it?
11:59
Now, why should you care about the shell? Well, it's usually much faster than clicking around.
12:04
Once you get used to the shell, you can do quite a lot of things with very few keystrokes. Whereas in a GUI,
12:10
it tends to become more laborious, especially the more complicated your task is. And part of this is because in the shell,
12:16
you can automate. The shell is essentially a programming language that, you know, the command line, the prompt that you see up here
12:22
where I get to type things and they appear, that prompt is essentially the start of a file that I get to write.
12:32
That is a bash program that gets executed. Most of those programs are very simple. They're just start a program of some kind.
12:38
But you can write fairly complicated expressions here as we'll get into later. There are a couple of other reasons why the shell is useful.
12:45
One of them is this ability to combine programs. We'll see that as well. how you can take the output of one program and feed it into another program that does something else,
12:52
and then feed it into a third program that does something else. The shell is very much built for that kind of combinatorial thinking if you will.
13:00
Knowing your way around the shell is also useful for interacting with the open source community. You'll find that for almost any open source tool you find,
13:07
the instructions for building it, installing it, running it, are all going to be things that happen in your shell.
13:13
You also increasingly find things like, "How do I do this on my computer?" and you'll be told to open a terminal and type something in there.
13:20
And usually it's useful to know roughly what that command does rather than just blindly copy-pasting things from Stack Overflow and going,
13:26
"Yeah, it's probably fine." So hopefully this gives you a bit more sort of intuition and insight into what those things actually do and which things you should be worried about and which things are not.
13:35
There's also increasingly use of shell in and Bash in particular,
13:40
in configuring continuous integrations for projects. You'll find this both in the open source community and also in the closed source community if you end up taking a job at a company.
13:50
You'll find that a lot of the configuration for how the software is built behind the scenes, how it is tested,
13:56
how all of those pipelines flow together, is also all done using shell commands.
14:01
So let's then look into what is the shell? Well so as I already explained here we have the prompt.
Navigating in the shell
14:07
The prompt is the main interface you have to your shell. And it tells you,
14:13
this sort of start of the shell prompt over here, tells you that my username is John.
14:20
It tells you that the host name of the machine I'm on is XOS. The colon is the separator just like the ampersand.
14:26
And the thing after the squiggly line, the tilde, is the location I am at in my file system.
14:31
Tilde is short for my home directory. So currently I'm in my home directory. Is what this prompt is telling me the dollar is telling me that I'm not the root user I'm not the admin user in this shell usually you'll just see dollar here,
14:44
and you don't have to worry too much about it And then it's just sort of friendly waiting for me to run a command now when you run a command Why is it why does it sound double when I'm standing over here?
14:53
It's disturbing That's still on maybe
15:00
No? Weird. Is there a secret microphone? Oh, well. It'll be OK.
15:07
So on the prompt you can type commands that you want to be executed. And the simplest kind of command you can type is just the name of a program.
15:15
So for example, there's a program called date. And perhaps unsurprisingly when I run the date program,
15:23
it prints the current date to my terminal. And then I'm dropped back in a prompt where I can now type more things.
15:29
We can also execute commands with arguments. So, arguments here are things that follow the program name in the command.
15:37
So for example, the echo program is one that will take the arguments we pass to it and print them back out.
15:44
So for example if I type "hello world" here, it prints out "hello world". So hello and world here are arguments to the echo program.
15:54
It's worth spending a few seconds here on what argument parsing is. Argument parsing in Bash is that you take the string,
16:03
the text that the user gave you, and you split it at white space boundaries.
16:08
And each white space separated word is one argument, and the first argument is the command of the program to execute.
16:16
Now there are ways to say that I want an argument that has white space in it. So you can do quoting just like you can in most other programming languages.
16:25
echo prints all of its arguments, so it's not going to be particularly useful there. But I could for example say
16:31
"hello world" like this and it will print the same thing because echo defaults to printing space separated of its arguments which is the same thing I'm providing here.
16:40
But for example if I put more spaces in here you'll see that now this gets treated as one argument so it gets printed as a single thing.
16:48
If on the other hand I typed hello and then a bunch of spaces in world These are just two arguments to echo.
16:55
They get separated as two arguments. The white space is ignored, it's just a separator. And then those two arguments are provided to echo and it prints them back out.
17:04
Argument parsing is something you're going to run into a lot when you start writing command lines yourself because sometimes getting the quoting right can be quite annoying.
17:14
Okay, first of all, why don't the programmings have like .java or something?
17:19
Or do they normally have .java or do they not normally have .java or .py or something like that?
17:24
So these programs-- I'll get into where we find these programs later and where they're located. A lot of these are pre-compiled programs that are installed on your computer.
17:32
So they're not source files. They are programs that are built into your computer or that you've installed after the fact.
17:38
Okay. And... And the strings you write afterwards, if you write Java with the public static void main string args,
17:46
this is the string array? Right. So the question here is if you write, for example, a Java program and you write a sort of static main function and the args argument you get to that function,
17:57
those are exactly what these arguments turn into. And the same thing for Python. If you want to access the argv thing that you get in Python,
18:05
there is a list of arguments provided through the program. This is where those arguments come from.
18:10
You'll find that you end up running into quoting issues here once you start getting more complicated things. Like maybe you have a path that has a single quote in the name of a file.
18:21
Well now you need to use double quotes around it or you need to escape it. And escaping is simply,
18:28
Putting a backslash in front of a character, you can do this multiple times to escape multiple characters. Now you see it has the same effect as though I quoted it.
18:35
But doing this once you have a path that includes spaces and also single quotes and also double quotes,
18:41
then you might need to get creative with the quoting that you do so that the arguments end up being split in the correct way.
18:48
You will run into annoyances around this. It takes a little while to get used to but there are ways to sanely quote any argument to a command in Bash.
18:58
Semi-same. Yep? So backslashes separate the same as whitespaces?
19:05
No, backslash is an escape character that says don't treat the next character as special.
19:12
So in the case of argument parsing, backslash space means a literal space. Do not split on this.
19:17
This is not a word boundary. It is a literal space that's part of an argument.
19:25
Cool. Now, perhaps the most important command or program you will find to use in...
19:31
Yeah, you had a question?
19:41
Yeah, so if I wanted to say this would not work because it would think that this is one string
19:53
And then it would say there's a trailing single quote here that doesn't get terminated.
19:58
So it just tells me, oh, it drops Back in a continuation prompt, which is the thing you see at the bottom, we're just expecting more input.
20:04
If I put a single quote here, then if we get confused, then all the single quotes are gone. And so what you could do here is either say this,
20:14
or you could double quote the whole string. And so that way you would end up with the expected output.
20:23
Now, one of the most useful programs you'll find on here is a program called MAN, short for manual. The manual allows you to pass in the name of another program and it explains how to use that program.
20:34
So for example if I type "man echo", so echo is the argument here to man, I get a manual page.
20:40
And this says "echo displays a line of text" and then it shows me all of the options, all of the arguments that I can pass to echo.
20:48
And usually some of them will have version information at the bottom, some of them will also have usage examples. So if I look up the manual page for date,
20:54
you'll see it prints a date. And it also... Oh, this doesn't have that either. If I do bash maybe.
21:01
So the bash one is pretty extensive and it has bug reports and authors and files and restricted...
21:06
Like it has a huge manual page that explains all the various things you might want to do in bash.
21:12
So the man... program is one you will find you can use a lot in order to understand more about the commands you have and what things they can do.
21:21
Usually, you can get a short version of the manual page for a program by simply passing --help as an argument.
21:27
So in this case, when I run date with --help, it prints out the help string for date,
21:32
which is usually slightly shorter than the man page. Some commands also allow just -h as a similar thing.
21:40
After man the most important program to know about is cd for Change Directory.
21:45
Change Directory allows you to change where you currently are in the file system.
21:51
And in this case, I am currently in my home directory, and so in my home directory there are a bunch of files,
21:58
but if I wanted to operate somewhere else in the file system, I could change to be in that directory instead.
22:05
So what does that look like? Well, I type "cd" for Change Directory,
22:11
And then I type a path. So a path, in this case it's a path that starts with a slash, so it makes it an absolute path.
22:17
We'll get into other kinds of paths later. So I want to go into the bin directory under the root of my file system.
22:23
So I want to change directory into there. When I do that you'll see that my prompt has now changed.
22:28
It now says I'm in /bin instead of being in /home. I can also cd directly into the root and so on.
22:36
You'll find that there are a lot of commands that will operate in the current working directory by default,
22:42
unless you tell it something else. So that's why it is usually useful to know where you are, hence why it's in the prompt,
22:48
and to potentially change where you are. And it's particularly useful because it allows you to use relative paths.
22:56
So here I did /bin, but imagine that I have some path that's deep under my home directory.
23:02
So it's like /home/john/devversion1/ and it becomes a really long thing for me to type all the time. So instead I can change directory into the folder that I want to be operating in and then use relative paths.
23:19
Relative paths are any path that does not start with a slash, and the resolution for a relative path is in the current working directory,
23:29
look up the first path component, path component or the slash separated parts of the path,
23:35
look up the first one, and then from there traverse using slashes, rather than starting at the root of the file system.
23:42
So for example I'm now in I can type cd bin, note the lack of a slash,
23:48
to say I want to change directory into the bin folder of what are inside of the current directory.
23:56
If I'm now in bin, and I try to cd to bin again it would tell me there's no such directory because it looks for a folder called bin in
24:03
/bin. If I go back to slash and then try to cd to slash,
24:10
well that's fine. That's an absolute path. But there are a couple of other special kind of path components you can use in relative paths.
24:16
You can use them in absolute paths too but they're more common in relative paths. Which is dot and dot dot.
24:22
So dot is the current directory. It might seem weird but I can cd into dot and it cds me back into the same place I already was.
24:30
So if I cd into bin and then cd dot, I'm back into slash bin. So it's just a way to refer to where you currently are.
24:38
This can be useful, we'll see some examples of that later. The other special path is .dot and .dot refers to the parent directory of wherever we are.
24:47
So if I do cd .dot, I end up in slash. I end up one level up in my file system.
24:52
If I try .dot from slash, slash like the root of my file system is special, where .dot just goes back into slash.
24:58
But what I can do is I can change So I can say, I want to go into bin, and then I want to go back out, and then I want to go back into bin,
25:05
and then I want to go into itself, and then into itself again, and then I want to go back to the root, and then back into bin,
25:11
and I end up in /bin. You can combine these to create paths that navigate the file system however you see fit.
25:20
What's the use case of this? The use case of this is, imagine you're operating in,
25:25
I don't know a, you're working on a 6824 project. And now you want to move to working in a,
25:31
on a 6858 project. Well then, instead of typing, okay, I'm in 824,
25:36
instead of now having to use an absolute path to say, now I want to see it into home John dev 6858,
25:42
I can just do cd dot dot slash 6858 so go one up and then one down into a different directory.
25:49
This particular path you probably wouldn't use, because this is pretty useless. But you don't have to say the same path again.
25:56
You could easily-- because once you've done the dot dot, you are now in-- the reference point is one level up in the fuller hierarchy.
26:03
Tilde? Yes. So if I do cd tilde,
26:09
you'll see I end up back in my home directory. Slash is the path's component separator.
26:15
It is the thing that separates each recursive step of resolving the path.
26:21
So if I go to cd a slash b slash d, a slash b slash c,
26:26
what that means is change directory into a, after doing that, change it to b,
26:31
after doing that, change it to c. So that would go into the folder c that's inside the folder b that's inside the folder a.
26:43
And these paths also work with tilde, so I could do tilde slash dot dot and I end up in slash home.
26:49
Because it's one directory up from my home directory which is slash home slash john.
27:01
There are more efficient ways to navigate the shell as well. So you'll find, for example, in the lecture notes, there's a reference to a tool called ZOxide that remembers all the paths you've ever CD'd into,
27:11
and then gives you a more rapid way to cd into arbitrary of them rather than navigating the whole file system.
27:17
So there are tools people have built to more efficiently navigate the shell, but this will already get you there pretty quickly.
27:23
There's one more trick that's useful to know here which is tab. Tab in Bash gives you autocomplete.
27:29
And so for example, if I do CDB and then press Tab-- well, in this case,
27:34
B is ambiguous. Oh, that's because I'm in the wrong place. CDB and then press Tab. You'll see if I double-press Tab,
27:40
it gives me all the possible options. In this case, /bin and /boot are both directories I could go into.
27:46
But if I do CDBI and then press Tab, it auto completes the bin.
27:51
And so this is one way to more rapidly navigate through folders, is just type the first few letters and then type Tab.
27:57
And if those are ambiguous, TabTab will show you the options.
What is available in the shell?
28:03
So what kind of things can we execute in the shell? So we've already talked about echo, date,
28:09
man, and CD. But how do we figure out what else is available to us? And in fact, how does the shell even know when I type date which program to run?
28:18
Like where is date on my computer? The reality is that when you type a command with a program name into your shell,
28:26
what it would actually do is it will take the name of the program and it will look it up in something called "path".
28:32
Path is an environment variable. So it's a variable that's sort of set across my whole shell of variable to value mappings,
28:41
usually names to strings. And those will describe a bunch of meta information that the shell can make use of like
28:49
What user am I? What host is this? What shell is being used? That kind of stuff. And path,
28:55
and here we can use the echo tool again. If I echo my path, it will list out a sequence of paths.
29:01
They're colon separated here. And when you try to run a program in your shell,
29:06
it will walk through these folders one by one looking for a file by the name of the program.
29:13
And if it finds it, run it. Otherwise look in the next one. And we can actually introspect this.
29:18
If I run which date, so which is a program that will walk through the path list and print out the place where it first finds a given program,
29:28
it will say that the location of my date command is at this path.
29:33
So when I run date, what actually happens is my shell discovers that path slash run slash current system slash sw bin date and then runs that program,
29:43
executes that program, and that's what ends up in my terminal. And this is so that we don't have to write the full paths every time.
29:49
So I could, if I wanted to, take this path and have that be my program name,
29:56
and that will run just the same. But it's more convenient for the shell to be able to do that. discover them in this way.
30:01
Which is also just a program, so I can run which, which, and it tells me that the which program is located in the same folder as date was.
30:09
This path might be different on your host, it just depends on where software is installed on your particular operating system.
30:16
Do you have a question? Okay, so when you type it non-completely,
30:26
it searches in folders that--it searches in the parents of your current directory? No. It searches in the folders listed in my path.
30:34
So the path variable is sort of a special variable that's known by my shell and it will search through these directories in order for the program by the name that I gave.
30:46
If you have multiple programs of the same name in more than one folder that's in the path,
30:54
how does it choose which one to use? So if a particular program is present in multiple paths in my path,
31:00
like $PATH, my shell will execute the first of them that it encounters in the path order.
31:07
And you can even ask which with the -a flag, which is for all, I can ask which all the copies I have of echo.
31:15
And it will say there's only one echo for you. If I try to do something else like rustc, well,
31:20
there's also only one. Do I have anything that would be multiple of? Mmm,
31:27
SH. You'll see that there are actually two places in my path where SH appears and it will show all of them.
31:35
But your shell will normally execute the first one only. What's the minus a for?
31:41
It's an argument to which that lets it, that makes it print all of the paths rather than just the one it would have selected.
31:46
And in fact if I tap man which, you'll see that there's under options it says dash a or dash dash all prints all matching executables in path not just the first.
32:05
And this also gives us a clue for how we can figure out what all of the programs we have are.
32:10
Right? Is that you could walk through all the directories in your path, and then just list the contents of all of them.
32:18
And that is all of my programs. You might not know what all of them do, but you can do that by looking up the man pages and then explore.
32:23
So if you really want to go through this process... So in my case, for example, I could take this directory and do ls and this path.
32:32
ls is another program that is the list program. It lists the contents of a directory.
32:37
So in this case, I'm telling list, "Hey, can you go list the contents of that directory?" And if I do,
32:43
it prints out a long list of all the file names written there. And these are all programs that I could run on my command line.
32:49
One thing worth noting here is if I type ls and don't give it an argument,
32:54
then it will list the current directory. And this is what I mean by the current working directory is the thing you change with cd is often the one you want to make use of.
33:05
Because that is where many commands will operate by default.
33:11
There are a bunch of other programs that are useful to know about like this. So for example, there is one called cat.
33:18
Cat will print out the contents of a file. So if I do cat of
33:24
Stata.config, then when I cat that file, it prints out the contents of that file and dumps them into my terminal.
33:32
There are other commands like sort. Sort will take its input or the file that is referred to on its input,
33:40
and it will print out the lines in sorted order. So if for example here I create a data file and I put in A3BX14 and I type "sort data",
33:55
then it will print those out in sorted order. And in fact, if I do here-- let's say
34:02
I add 31 as well to prove a point. You'll see that it does lexiographical sorting by default.
34:09
So 3 is followed by 31 because alphabetically, that is the order. Even numerically,
34:15
that might not be correct. For example, if I wanted to add in now-- no.
34:21
If I wanted to add in 4 and I tried to sort data, then you'll see that I get 3, 31,
34:26
4 because they're ordered lexicographically not numerically. But there are arguments you can pass to sort to change this behavior.
34:32
Then we have unique. So if I here added four a bunch of times,
34:39
then if I now run--
34:45
If I now run unique on data, it will only print out lines that are unique in that file.
34:50
It only eliminates consecutive lines that are unique though. So if I go into data and I put a 3 in here and type unique data,
34:58
you'll see that I get 4, 3, 4. So it's not very smart. It doesn't remember every line it's ever seen.
35:03
It only eliminates duplicates that are consecutive. But you can imagine combining sort and unique to get the functionality you want.
35:12
Or, sort also has a flag, sort-u, which does this for you. It sorts and eliminates duplicates.
35:20
But we'll show you how to combine commands a little bit later. And then we have head and tail.
35:25
Head prints the first n lines of a file. The default n here is 10,
35:31
but you can pass -n and then a numeric argument to say how many lines to include.
35:36
So head prints from the start of the file, and then we also have tail which prints from the end of the file.
35:43
So these allow you to inspect just parts of a file rather than the full file.
35:49
And then we get into slightly more sophisticated tools. So there for example, there's a tool called grep.
35:54
Grep is a file searcher. It doesn't search for files,
36:00
it searches in files and it searches for things that match a particular pattern. So for example if I want to grep for
36:09
4 or 3 is maybe a better example. grep for 3 in data. So, grep takes two arguments: a pattern and a file or a list of files that you wanted to search in.
36:18
And it will print out all of the lines that match the pattern that you gave in. So, in this case these lines all match 3,
36:25
the other lines do not and therefore do not get printed. grep is actually much more powerful than it might look like here because the pattern that you supply is not just a standard text.
36:35
It actually was known as a regular expression. And regular expressions, we're going to touch on these later in the editor lecture,
36:42
but regular expressions allow you to express quite complicated things. We'll see an example of that in a little bit that allows you to say I want to find anything where the first letter is not an A and the next thing is any numeric digit and then I want an arbitrary number of characters until a dash.
36:59
Like those kinds of things. And again, we'll get into the details later. But you can use grep therefore to search for fairly sophisticated things inside of potentially large directories that you have.
37:12
In fact, grep also in addition to searching files can search directories. So if I cd for example into missing semester and then I want to grep for grep in this directory and I pass
37:25
-r, r for recursive so go deeply into all the nested folders you find all the way down,
37:30
search all of those files for grep starting in the current directory. Then this will now find me all of the files in the missing semester git repository that contain all the lines that contain the string grep.
37:43
You had a question? Okay.
37:50
There are also other kinds of tools that allow you to edit files. So grep only allows you to search files,
37:56
but there's a tool called sed, which is a line editor that is intended to be programmed.
38:02
Sed is interesting in that sed actually has its own programming language, the sed programming language,
38:07
that allows you to program the way that it will edit your file. Usually though, it's used for fairly simple tasks like search and replace.
38:16
So let's say I wanted to replace every instance of grep with john.
38:21
Well, I could do that by doing sed -i for in place replacement.
38:26
So I don't want to create new files that have the replacement in them. I want to replace the files where they are.
38:32
And this is where the sed program starts. That's this first quoted string. I want to substitute and then slash and then I give a pattern grep and then I want to substitute it with John.
38:44
And then I pass dash g. The g here is for global. Sed will
38:50
operate on every line one by one. It's a line editor. So when I say global,
38:55
it means across the entire line. The reason this is needed is because otherwise if I substituted grep with John without the g,
39:03
if grep appeared twice in the line, only the first one would be replaced. With -g, it's global so it replaces all the things in the line.
39:11
And then I can do Star.md,
39:17
the path specifier here is what's known as a glob. We'll talk about those in the next lecture,
39:23
but they basically allow you to give patterns for paths. So in this case I'm saying in any directory look for any file that ends with
39:30
.md which is what all our course files do. And when I run this and now run git diff you'll see that I now have a big git diff and the diff in all of them is that all instances of grep have been replaced with John.
39:45
Yeah? What's the difference between like the wild cards and how to mess up the like hats in the shelf can use for command?
40:00
that and for the regular expressions that get passed to grep?
40:05
So regular expressions and glob expressions are both ways to express patterns. But they're things that are supported,
40:12
like, they're usually things that are supported by particular programs rather than the shell itself.
40:17
So for example in this, in both the grep command that I showed and in sed,
40:22
the regular expression that you give is just a thing that's supported by grep or supported by sed.
40:28
Globs on the other hand here for specifying paths, like this one you'll notice is not quoted.
40:34
Globs are expanded by your shell. So it will look for anything any path that matches this glob and substitute that argument for all the paths that matched that argument.
40:45
But there will be programs too that allow you to give an argument that is a glob. And then the program implements the glob internally.
40:51
That can be useful for other reasons, like if you want to rewrite history in Git, for example.
40:56
You can give Git a glob for the things you want to rewrite. Yeah? Do you have regular expressions in the specification of the path?
41:06
No. So shells usually don't support regular expressions over paths. Usually over paths, you can only use globs.
41:13
Although there might be shells that allow you to write regular expressions for paths, but I don't know about them. Usually regular expressions are kind of weird for paths anyway,
41:22
because usually you want to talk about things like directories and files.
41:28
And regular expression doesn't have a concept of that. It's just matching a piece of text against a pattern.
41:33
Whereas Globs here, the slash is actually meaningful. The slash is saying the first star applies to the current directory set of paths.
41:42
And the thing after the slash is the pattern to use inside of that directory when looking for files.
41:49
Yeah? Wait, so what does set do and what does glob do again? So sed is a program that is a line editor that allows you to change the lines of a file.
41:58
Globs-- glob is a type of pattern, like this pattern over here.
42:04
And it's similar to regular expressions. It's just a way to write sort of an approximation or pattern of a path.
42:11
It is not a program in and of itself.
42:19
And in sed as well, this grep thing, this can also be a regular expression.
42:24
So here I could write things like anything that's not an A followed by any number of characters, then a dash,
42:30
followed by any digit. And I'm not expecting you to learn regular expressions right now, but I can write fairly complicated things in here and they will all be replaced by John if I wanted to.
42:41
But I don't. So it was anything that isn't a regular expression? A glob is specifically a pattern that uses a particular language for patterns.
42:51
So the language for globs are stars, question marks,
42:57
curly brackets, and I think that's it. So glob is a fairly simple pattern language.
43:02
Regular expressions are a much more complicated pattern language.
43:11
And the next program we want to talk about is Find. Find is a program that finds files.
43:18
When you run Find, you tell the Find program the kinds of files you're looking for and it will search wherever you tell it to for files that match that structure.
43:29
So for example, I could look in my downloads directory for anything that is a file,
43:35
type F for type file as opposed to a directory whose name
43:41
Ends with zip. I don't know if I have any zip files in my downloads folder, we'll find out.
43:47
That was last modified at least 30 days ago. In this case, I don't have any.
43:52
What if I remove the mtime requirement? I still don't have any. What do I have in my downloads folder?
43:59
Cool. So let's say I here replace this with mtime plus 30.
44:06
So any file that's more than 30 days old, then this file is the only one that is at least 30 days old in my downloads directory.
44:15
And again, this is just an example of the kinds of arguments that you can provide to find. Find has a huge language of arguments you can pass,
44:23
you can learn about by running man find. But you can search for all sorts of things, like files that are at least so large,
44:29
files that are at least this old or at least this recent, files that have a particular pattern in their path,
44:36
files that are directories, files that are links, whatever it could be. There's a whole host of things you can use Find4 here.
44:42
Yeah?
44:56
extension of like dot zip or a different
45:02
difference, it takes such a like not-- Yeah. So we'll talk about globs more in the next lecture. That will go more into the actual pattern language.
45:09
But there are ways to write globs for those things. But globs are fairly limited. Like they can only express a fairly small set of operations,
45:17
but very common ones. You'll find you write globs all the time, but they tend to be pretty simple. If you want something more advanced,
45:23
you tend to reach for a tool like Find or-- or some other file program that supports regular expressions for path matching.
45:33
Other cool things you could do with find, so for example I can search for anything in my downloads directory,
45:39
also a type file, whose size is at least 100 megabytes, and for each such match
45:46
I want to ls -lh. So what does this do?
45:51
This is weird. So this -exec argument to find says for each path that matches all the filters I gave,
45:59
so in this case it's a file and it's at least 100 megabytes long, run the following program.
46:05
And I'm telling you to run ls, which lists information about a file,
46:10
with the -lh argument. So I'll put this back down here at the bottom, with the -lh arguments.
46:16
-l means show me more information about the file. -h mean print the size of the file with human readable notation.
46:25
So don't print the size and number of bytes, print it with like gigabytes, megabytes, kilobytes and so on.
46:30
And then what find will do is it will do its find but instead of printing all the paths,
46:35
it will run that program with those arguments with the curly brackets replaced by the path that was found or all of the paths that were found.
46:46
And so in this case it will call ls with the path that is here,
46:52
then it will call ls with the path that's here. each time passing the -LH argument. And so that's why we get these human readable sizes here.
47:01
The backslash semicolon at the end is because imagine, I wanted to provide more arguments at the end here like mtime plus 30.
47:09
How does find know which arguments are for the command to exec and which arguments are for itself?
47:17
It doesn't. So the backslash semicolon is to say, this is the end of the list of arguments
47:23
for exec. This is a thing that's special to FIND. Not all programs do it this way, there are other ways that are more common these days,
47:31
but that's why you will often see this kind of backslash semicolon in invocations of FIND.
47:36
But as you can imagine, this is pretty powerful. This lets us combine programs, combine the programs of FIND with any other command line we might want to execute.
47:46
So instead of having this run ls, maybe I want to rm those files instead.
47:53
So that would remove them. RM is the program that removes all the paths that it's given. And maybe I also add a mtime+30.
48:02
If I ran this command right now, which I'm not going to do because I don't want to remove those files, but it would delete any file in my downloads directory that's at least 100 megabytes long and has been there for at least 30 days.
48:16
All with one command. You'll see sometimes that I
48:23
Skip a command like I don't execute it. I just moved to the next line. That's control C
48:28
Control C lets you say sort of cancel this can also apply to a program that's already running control C will terminate that program
48:37
Other things that are useful to programmers so for example, I could say find in the current directory dot
48:43
I want to look for anything that is an MD file And I want to exec grep
48:50

- L and to do in that file
48:57
So what will this do? This will search for all the markdown files in the current directory,
49:02
and for each one it will run grep. And when we run grep, we will search with a pattern todo.
49:08
And -l means print the name of the file that matched rather than the line that matched.
49:15
So this will tell me all of the markdown files in the current directory where todo is written in the file somewhere.
49:24
So this can be useful if you're programming, and you're like, oh, which things did I mean to get back to, but I never looked for them?
49:31
This particular one might seem very similar to me doing this. There's grep for todo in the current directory,
49:37
but the difference is here I got to say, find me only markdown files and only do it for those.
49:43
But again, you can make these as complicated as you want to be. And with find, of course, you can add a bunch more pattern matching to this if you wish.
49:53
Now, the syntax of find can be pretty weird. I'm not expecting you to learn find just from seeing these few examples.
50:00
Find will tell you a lot. This is also the kind of thing that it's really helpful actually to ask LLMs because there's a lot of examples online of writing find command lines and LLMs can usually spit out a thing that will do roughly the thing you asked for pretty easily.
50:14
There are also more modern tools that are more ergonomic and harder to misuse like FD that are linked in the lecture notes.
50:19
You had a question?
50:25
Find is recursive by default. So when you give it a path, it will search everywhere under that path.
50:34
Yes, so find for example has an argument called max depth.
50:39
That is the maximum depth to search down and if you say max depth one then it's only the current directory or zero,
50:48
one. Oh, right. And it complains because I put it after.
50:53
Find is a fickle beast. -maxdepth 0-- and it needs to go before the i name because it's-- yeah.
51:05
Find is annoying. So if I do -maxdepth 0, then I get no results. If I do -maxdepth 1,
51:10
I get no results. And if I do 2, then it'll find those.
51:19
Next on the docket is a program called awk. A-W-K. Awk,
51:24
like sed, is a program that has its own programming language built in. But where sed is for editing files,
51:31
awk is for parsing files. Awk is a tool that will, by default,
51:37
split a file by whitespace and by lines, and then let you write expressions over the result of parsing in that way.
51:46
So if we go back to our home directory here, where we have our data file. Let's go back and clear out that file,
51:53
and I will do A B C D E F G H I matrix, good old matrix.
51:59
And then I write awk print two of data. So the thing again in the quoted string is an awk program.
52:06
We're not gonna teach you the awk programming language here 'cause it's fairly extensive, but you can often do very simple things by just learning a couple of key bits about awk.
52:15
So this is, the curly bracket here indicates run this, that's sort of the way to express a run and execute block in awk.
52:23
And you can write a pattern before the curly brackets here to say I want to only run this expression on lines that have certain properties but in this case because I didn't specify a pattern it's all lines.
52:36
And for every line I want to print the second field.
52:42
So awk will parse the file into records so rows and fields which are columns
52:47
And so in this case I say print out the second field, and the default field separator is whitespace.
52:52
So if I do this it will print out only the second column of every row.
52:58
But I can change what the field separator is. So let's say I switch this to be comma. Well this just became a CSV parser.
53:04
Because now it splits lines by commas into columns, and the lines are records,
53:11
and the columns are colon-separated columns. that you can then print out. If I do this, there is no second column anymore,
53:18
because everything is in the first column, because there are no commas in this file.
53:25
I can also do things like-- in fact, I'll show you a more complicated awk expression later for the kinds of things it can do.
53:32
But awk is very useful tool for just pulling data out of semi-structured files very easily.
53:38
Now, putting these all together, we get some pretty cool things. So let's see if I can...
53:49
Okay, so here's a fun little command line. This command line will SSH, which is a remote connection tool we'll talk about later,
53:56
into one of my servers in the Netherlands. On that server, it will run the command journalctl,
54:02
which prints the logs for that server, for the ssh daemon, like the thing that you connect to when you remotely connect.
54:09
It will search for-- it will only print the log files from the last boot. That's -b
54:14
-1. And then it will grep, so search for, the string disconnected from.
54:21
It will take that and it will parse it to sed. Sed is going to replace in all the lines,
54:28
this regular expression with that backslash one which is a back reference, which is another thing you can do with regular expressions,
54:35
which references the parentheses enclosed expression in the search string.
54:42
So the backslash one here ends up referring to whatever this matched. This is the kind of cool search replace you can do with sed.
54:50
So in this case it strips out, the way to read this expression is any number of characters followed by the string disconnected from followed by a space,
54:59
followed by any number of characters and a space, then user, then a space, then any number of characters,
55:04
then a space, then anything that's not a space, then space, then port,
55:10
and so on. This one took me a while to get up with but you basically, as you get better at regular expressions, you learn how to write these patterns.
55:17
What this will end up doing is taking all the logs from my SSH server, disconnected from is the line that gets printed when someone tries to log in but then either ended their session or failed to log in.
55:29
and it will extract the username they tried to use, and print only that.
55:34
Then I sort all of those results. Then I pick up the unique lines from that sorted result.
55:41
The -c argument to unique prints the count of any that were duplicates.
55:46
So if the word John appears three times in a row, it will print John 3 instead of John John John,
55:52
or instead of just John. So it gives me the count. Then I sort that output
55:57
numerically -n using the first column, so the column that contains the count.
56:04
So now I have all of the usernames that we use to log in with their counts in sorted order such that the most common ones are at the bottom.
56:15
And then I use tail-n 10 to get the last 10 which are the top 10.
56:21
Then I use awk to print out only the username and not the count. And then I paste all those lines together into a single line,
56:29
dash s, that are comma separated, which is the d comma. And so this command when I run it,
56:35
if it works correctly, it will take a little while because the server has to parse all of the logs on my server,
56:41
which takes a little bit. But eventually what I'll get back...
56:48
Drumroll... Come on Come on.
56:54
Come on. Really awkward if this is like connection failed.
57:01
SSH is a way to run a command on a remote machine.
57:07
So we'll talk about that more in the next lecture. Does awk get used for tensor manipulation?
57:16
No, awk is not for tensor manipulation. Although you can kind of think of it that way, like a tensor is really rows and columns.
57:23
But I would not say that that's what it's for. Like it doesn't understand binary files at all.
57:30
Let me see if it's just failing for a different reason.
57:44
Interesting. Live demos, right?
57:50
Interesting. Let me try something else. Let me try it here.
57:55
Oh, I think I know what fails. Let me just try something real quick.
58:09
Well, maybe my server is down. That's the thing for me to fix another day. Well, just trust me that this would have printed the comma-separated list of the top 10 usernames used to try to sign into my server.
58:20
None of which are my name. They're all spam connections. Yeah? I was going to ask if this would still work if it was called unique...
58:34
Without dash C and then you didn't do the off.
58:42
And then I realized that the counts are there. Yeah, if you did unique without the dash C, you would just end up with the unique names without knowledge of their counts.
58:49
Yep. Cool. So this shows you the kind of thing that you can do with bash,
The shell language (bash)
58:56
is that you can write decently complex expressions to sort of tie all of this stuff together.
59:02
Now one of the things you'll recognize here is that I introduced a new concept: this vertical bar,
59:07
the pipe character. This is this is a construct of the bash programming language and what the pipe character does is it says run the left program and
59:18
take its output and make that be the input of the program to the right of the pipe.
59:23
So it's a way to connect programs, so that instead of the input being your keyboard and the output being your terminal,
59:30
the input is some other program or the output is some other programs. There are a bunch of these kinds of operators in bash.
59:37
So for example, you know I ran the date command. Well I can say I want to take the date and I want to write it into...
59:48
the date.text. So the angle bracket here to the right is saying take the output of this command and write it into this file instead of to my terminal.
59:56
And now if I cat, so print out the contents of this file, you'll see that that was the result. of date.
1:00:01
Similarly, you can use the angle bracket in the other direction to say instead of taking input from my terminal,
1:00:07
take the input from that location. So I can for cat, for example, say the input for cat is going to be the data text.
1:00:19
Similarly, I could do for sort. The date.txt, although for sort, when there's one line, there's nothing that happens.
1:00:25
But this allows me to redirect the input and output of programs. This can be useful, for example, to put something in a file so that you can look at it later.
1:00:33
And you can walk away from your computer, and even if it scrolled far back, you still have it in a file.
1:00:40
One thing to be aware of for the angle bracket to the right is that it overwrites the file.
1:00:46
So if I now cap the date, you'll see it only has one date entry. If I run it again, it only has one date entry.
1:00:52
You can use two of them to say append to the file instead of replacing it. And so now it has two lines instead of one.
1:01:00
There's a whole programming language here. And going into all of what bash means, we're not gonna have time for.
1:01:07
But let me give you very, very quick recap. So bash has conditionals.
1:01:14
So you can write things like if grep 2026, the date.txt,
1:01:20
then echo its 2026 fee.
1:01:26
So this will run the grep program, and if the grep program exited successfully,
1:01:32
then and only then does it run the command that's after "then" here. And I could have multiple commands here if I wanted to.
1:01:40
Hello And it will execute all the programs that are in the "then"
1:01:45
branch, only if the program exited with a success. And you'll see the syntax here is kind of archaic,
1:01:52
there's a bunch of semicolons and stuff. LLMs are very good at writing these kinds of commands if you want to. Humans less so unless you've done it a bunch of times.
1:02:00
You'll see for example that the way to end an "if" is with "fi". Because why not?
1:02:05
If you wonder how did I know that grep exits successfully when it finds something,
1:02:10
this is something that's also in the grep manual. So usually in most of the grep manuals, if you search for exit status
1:02:16
you'll find an entry that explains what this program exits with. So in the case of grep, it exits with zero if a line is selected,
1:02:23
zero is success, and it exits with one if no lines were selected and two if an error occurred.
1:02:30
And in general, zero is success and any non-zero exit status is not a success.
1:02:36
Then there are while loops. So you can say while grep 2026, the date dot text,
1:02:42
then echo, it's still 2026. and then write the date to the date.text,
1:02:51
and then done.
1:03:00
So this is a while loop. This will run this loop as long as this command remains true.
1:03:06
So this would continue to print excessively into my terminal until it was no longer 2026.
1:03:12
But I can inject, for example, here sleep 10, which is sleep for 10 seconds. And then it will run it once. And when it gets to running sleep,
1:03:19
it will wait for 10 seconds. And then we'll run the command again, see if it remains true, and keep iterating through like this.
1:03:24
So after about 10 seconds, we should see print again. There we go. There are also for loops.
1:03:30
For loops are of the form for variable name in,
1:03:35
and then a white space separated list of words. where the for loop will be executed once per word,
1:03:45
and a variable will be set by the name that you specified in the for loop on each iteration.
1:03:53
So in this case it will run once with var_name set to A, once with var_name set to B, once with var_name set to C,
1:03:59
and so on. If you're wondering "well how do I turn this into one of the for loops that I know that iterate over numbers?" Well,
1:04:05
you can use here a little trick. So if you use $ it's a way in Bash to say run the program inside the parentheses,
1:04:15
then replace this whole thing with the output of that program. Why does this work?
1:04:20
Well, the seek command prints out numbers. If I say 1-10,
1:04:26
it will print all the numbers from 1-10 in increments of 1. I could also say 2 to print them in increments of...
1:04:35
2, if I wanted to. But normally you would do something like seek 110. This then gets substituted for the seek expression in this line and then gets whitespace separated into the tokens or the words 1,
1:04:50
2, 3, 4, 5, and so on. So var name gets set to each of those values on each iteration of the for loop.
1:04:55
Yep? Does that mean you can replace the pipe operator with that? If you just nest them, nest two for loops?
1:05:02
So you couldn't quite replace the pipe operator with this, because this turns it into an argument.
1:05:08
Whereas the sort command, for example, takes its input on input, not as an argument.
1:05:13
It doesn't sort its arguments, it sorts the contents of its argument.
1:05:18
But there are ways to do that as well, but I'm not going to talk about them here, because we don't have the time.
1:05:25
But some of the lecture exercises go into some of those kinds of things that you could do.
1:05:31
Now, there are two last things I want to tell you about. One of them is when you write if expressions,
1:05:40
you might wonder, well, okay, I can do things like grep and stuff, but what if I just want to compare variables?
1:05:45
Like, what if I just want to do, like, numerical comparison, like, things that I normally do with ifs that are not related to command?
1:05:51
Well, there's a program called test. The test program, which happens to also be called open square bracket,
1:05:58
so I can actually run which test, and I can run which open square bracket. These are the same program.
1:06:04
It's just a quicker way to refer to the same thing. Well, I can run that program as my conditional in the if,
1:06:10
and its sort of contract is that it exits with a zero if the condition is true. So I can run if square bracket,
1:06:16
and then I can for example do hello equals world,
1:06:22
then echo equal else echo not equal.
1:06:30
and this will print not equal. And so this way you can write actually fairly complex expressions to test,
1:06:38
and the way you understand what you do with test is well, we run man test, it's just a program. And test explains that there's a bunch of things you could do this including things like file operations.
1:06:48
So I can do things like if dash f the date dot text then echo the date exists.
1:07:00
And the -f argument to test means that it tests whether a file by the name that you specify as the argument after
1:07:09
-f exists. And so with this, you can start to construct fairly complicated things,
1:07:15
automation around the programs you want to execute. Yep? So if this only works because there's a program that does these comparisons
1:07:28
Is if also a program? Ah, it's a great question. Is if a program?
1:07:35
Yeah, if is not a program. Pipe is not a program. cd is actually also not a program.
1:07:41
They are built into your shell and they are part of the bash programming language.
1:07:46
The reason why cd is not built into the shell is like a particularly interesting thing that we'll not get into,
1:07:51
but the lecture notes go into that exercise a little bit. But no, if is a built-in into the language,
1:07:57
same as while is. Yep? What does the caret C do?
1:08:06
Oh, this is just the symbol that gets printed into my terminal when I press control C to exit the current command.
1:08:12
It doesn't do anything in and of itself. It's just like a symbolism that I press that button.
1:08:19
Cool. So that's the test program. There's a bunch of things you'll often, often if you read bash, you'll see double square brackets instead of single ones.
1:08:26
Double square brackets are a built-in version of testing bash that is a little harder to misuse.
1:08:32
But we're not going to get into that. Its syntax is very similar. The last thing then is,
1:08:39
you could imagine that as you start writing these bash scripts, your command line gets really long. So the SSH example I gave for example,
1:08:47
is like a command that spans three lines. So me going back and edit this gets pretty annoying.
1:08:54
But what you can do is you can actually take these commands and stick them into a file, and that file is now a bash program that you can execute.
1:09:02
So for example in the lecture notes, you'll see that there is this program right here. And this is a bunch of lines of bash,
1:09:10
and when bash executes a program it will just run the lines top to bottom as if you have written them on
1:09:16
your command line at the prompt. And the language is exactly the same as what you would have on your shell prompt.
1:09:23
So this particular program that is shown in the lecture notes is one that will start a stress test of your CPUs so that they get really warm and then it will run a,
1:09:34
in this case, this is a Rust program that I'm running the test suite for and I want to run a particular test until that test fails.
1:09:41
And on each run I'm going to capture the log output and And only when the command no longer succeeds,
1:09:48
so when the test failed, only then will I kill the stress test and print out the contents of the log.
1:09:53
This is something I used in 6824 in the distributed systems class where I had a bug that only
1:10:00
Test one in every 100 runs. So instead of me sitting there like arrow up, enter, arrow up,
1:10:05
enter, arrow up, enter, I would just run this once and then walk and get coffee. And then when I come back,
1:10:11
there's a file on my disk that has the output of the failed test.
1:10:16
Now, the bit to know about here is at the very top of this line you'll see hash and an exclamation mark.
1:10:22
This is called a shebang-- hash bang-- that is special. You'll see a lot of files start with this particular instruction if they are executables.
1:10:32
This tells the shell when it runs this file, if someone asks it to run this file,
1:10:39
to take this program, execute the program at that path,
1:10:44
and give that program the contents of this file as input.
1:10:51
So what does that mean? Well, it means that if I were to run this program,
1:10:59
If I were to run this program, it is equivalent-- this won't work and I'll explain why in a second. I'll say permission denied.
1:11:05
But this is equivalent to /bin/sh with the input being lecture.sh.
1:11:13
Those two are equivalent because that is what that shebang line means. What's cool about the shebang line is that it doesn't have to be bash.
1:11:20
Bin sh here is bash but I could just as easily have said user bin python. And now I can write Python code in this file.
1:11:28
And if I try to run that file, it will run that Python program. It will start Python, take the contents of the file-- which is a valid Python program-- and give it as input to Python and then run it.
1:11:38
So you could use this for any programming language that allows textual input to be executed directly like this.
1:11:44
Also works with R, also works with Julia, also works with Ruby. There's a bunch of languages you could do this.
1:11:50
Yeah? Does it work? Java. Java does not allow you to do this,
1:11:56
because Java has a separate compile step. So there's no one program you can run and give Java input,
1:12:02
and it will compile and run it for you. But if there were, and you could write such a wrapper, then yes, you could use it with the same thing.
1:12:10
Now, the last bit before we terminate here is you'll see that I couldn't run the script. It said permission denied.
1:12:17
This is because when you run executables,
1:12:22
the shell will check that that file, that you have execute permissions on them. So if I run ls -l which emits more information about every file and I give lecture.sh,
1:12:33
you'll see at the left hand side here I get some Rs and W's and stuff. This indicates the permissions I have on this file.
1:12:39
R means read, W means write. And while there are multiple, there's an exercise on that.
1:12:45
But the idea here is that because this is my file, I can read and write it. But I haven't told the operating system that this is fine to execute,
1:12:51
that this is actually an executable program. If I want to do that, I have to chmod,
1:12:56
which changes the permissions of a file, say that it's to become executable-- so plus x,
1:13:02
I want to add execute permissions-- on this. Now if I ls it,
1:13:07
you'll see it change color because ls will color things that are executables, and I now have the execute bit,
1:13:12
the execute permission on this file. And now if I run lecture.sh, then well it'll run it and it will claim that it doesn't find my rust install and everything because this is an example script.
1:13:23
But now it did actually run that program. You'll also notice that I had to do ./.
1:13:30
If I do lecture.sh like this, it will not know that this is a program in the current directory.
1:13:36
Instead it will search my path for a program by the name of lecture.sh and it will not find any.
1:13:42
And so I have to specifically say, "I want to run the program in this directory." This is for safety reasons.
1:13:48
You don't want the shell to automatically pick up whatever program happens to be in the directory you're in,
1:13:54
just because it was named the same as a program you wanted to. Because it would mean that if I created a file called ls in my current directory,
1:14:00
my ls would no longer work because it would pick up that ls instead of the one in my path.
Conclusion
1:14:06
Cool. That's the end of what I have for you today. There are a bunch of exercises that I highly recommend you read through.
1:14:13
The lecture notes also have more detail on some of these and some other programs you might find useful.
1:14:18
I highly recommend you go take them, give a look to them. Give a look to them? I highly recommend you read through them and do the exercises,
1:14:25
we'll see you here tomorrow where we'll talk more about the command line environment but less about the shell and more about the environment in which you're operating so Jose will give that lecture tomorrow,
1:14:35
we'll see you all there thanks for coming

All

From the series

From Missing Semester

Computer programming

Learning

Related

For you

Recently uploaded

Watched

14:37
The Unreasonable Effectiveness Of Plain Text
No Boilerplate
656K views
•
2 years ago

Build AI Agents in 60 Seconds | Google ADK Tutorial
168K views

Stop Fighting Your CPU
508K views

He’s Not Needy — Just a German Shepherd in Love 🐾#GermanShepherd
2M views

This starling can copy ANY sound 🐦‍⬛
23M views

The love between dogs and children is the most precious thing💕🐶👶💕#dog
839K views

The last Starks reunite at their home winterfell
3.9M views

19:36
Obsidian Properties Full Breakdown: Every Type Explained (w/ Examples)
Mike Schmitz
3.5K views
•
3 days ago
New

4:37
BREAKING: Boebert Exposes HORRIFYING Details In Unredacted Epstein Files
The Young Turks
565K views
•
3 days ago
New

16:45
I tried Logseq DB - Here's what you need to know
CombiningMinds
2.1K views
•
2 days ago
New

3:20
She's Out of my League: She's not wearing underwear (HD CLIP)
Binge Society
11M views
•
4 years ago

19:05
Notebook Navigator + AI Tools - The Ultimate Assistant 🤖
Paul Dickson
3.6K views
•
2 weeks ago

4:18
Are You Hooking up with My Mom?
Stevie Emerson
1.1M views
•
3 months ago

8 lessons
Missing Semester IAP 2026
Missing Semester
•
Course
Updated today
View full course

9:49
New Game Mode & Next 1.2 Video Date Confirmed - Satisfactory 1.2 News
TotalXclipse
83K views
•
1 day ago
New

3:59
Cyberpunk shootout with robot geishas | Ghost In the Shell | CLIP
Boxoffice Movie Scenes
2.1M views
•
3 years ago

6:36
Pam Bondi Hearing Cold Open - SNL
Saturday Night Live
8M views
•
4 months ago

2:56
How My Husband Banged Me Stupid | Lisa Landry | Chick Comedy
ChickComedy
321K views
•
2 years ago

5:42
Hledger: The Ultimate CLI Tool for Your Personal Finances
👩‍💻 Coder Kaylee
59K views
•
3 months ago

8:15
Obsidian Just Won
Linking Your Thinking with Nick Milo
80K views
•
9 days ago

3:11
Ecstasy vs. Small Titties - Vicka Margulis Stand Up Comedy
ChickComedy
328K views
•
3 years ago

22:58
1 Minute Ago: Trump Falls Apart Staff Handling Him Legacy Panic & Black History Erasure |George Will
Politics Raw
112K views
•
5 hours ago
New

5:20
Shopping For Peggy's Favorite Bra | Married With Children
Married with Children
41K views
•
11 days ago

32:19
How the CEO of Obsidian Takes his Notes (Underrated Genius)
Karlos Obsidian Tutorials
152K views
•
2 months ago

14:30
Schiff READS Classified File LIVE — Patel's Face Goes WHITE, Security Rushes In After ONE Name
The Patel Report
943K views
•
3 weeks ago

4:12
Trump DEVASTATED BY New Jobs Numbers
Farron Balanced
24K views
•
2 hours ago
New

20:43
I Built My Second Brain with Claude Code + Obsidian + Skills (Here's How)
Cole Medin
32K views
•
2 weeks ago

15:30
Explaining Agentic AI: The Good, the Bad & the Ugly
ExplainingComputers
12K views
•
3 hours ago
New

19:20
How to Customise Your Obsidian Interface
Paul Dickson
12K views
•
1 year ago

7:58
Large Language Models explained briefly
3Blue1Brown
5.1M views
•
1 year ago

I can't believe I wrote this React code
1.4M views

The 'nice' Command In Linux
350K views

The 'yes' Command In Linux
352K views

Why Megabuildings Exist in Cyberpunk 🫨🏢
1.6M views

PUPPY 1st TIME MEETING DAD
15M views

sudo rm -rf /
2.8M views

7:39
Necessity of complex numbers
MIT OpenCourseWare
3.7M views
•
8 years ago

3:32
Sex With Young Guys vs. Bag Full Of Condoms - Kendra Cunningham Stand Up Comedy
ChickComedy
225K views
•
3 years ago

19:25
Git Tutorial For Dummies
Nick White
1.8M views
•
4 years ago

20:38
Daily Notes First and Logredis system do a Fusion-Ha.
Construct By Dee
3.8K views
•
2 years ago

1:54
Tech Employee Shares Video of Her Being Fired
Inside Edition
2.8M views
•
2 years ago

2:45
Stripping vs. Old Men Sex - Vicka Margulis (Stand Up Comedy)
Comedy Time
510K views
•
4 years ago

13:44
Obsidian + AI: How to Do It The Right Way
Linking Your Thinking with Nick Milo
78K views
•
5 months ago

6:14
Build This GORGEOUS Obsidian Library in 5 Minutes (No Coding Required)
Karlos Obsidian Tutorials
125K views
•
5 months ago

30:10
Obsidian Bases Just Changed Everything
Linking Your Thinking with Nick Milo
155K views
•
8 months ago

24:26
Never struggle on Gleba again! Master Gleba with Bots - Factorio Guide / Tutorial
AVADII Strategy
10K views
•
20 hours ago
New

9:22
*Had
Kit Betts-Masters
2.5K views
•
7 hours ago
New

3:46
Hung vs. It Doesn't Fit In - Lisa Alverado Stand Up | Comedy Time
ChickComedy
30K views
•
2 years ago

5:09
Why Microsoft KILLED Office 365
Softlinks
13K views
•
7 days ago

15:17
Boost Your Productivity with These 10 Essential Obsidian Keyboard Shortcuts
Mike Schmitz
10K views
•
1 year ago

3:15
Family Guy - Quagmire Discovers Tinder
Glenn Quagmire
2.4M views
•
8 years ago

4:23
Republicans In DIRE TROUBLE As Another Congressman QUITS
Farron Balanced
360K views
•
11 hours ago
New

Jump ahead. Shift + Enter to activate.

