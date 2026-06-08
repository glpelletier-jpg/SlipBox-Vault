---
title: (S)(YouTube) Lec 01. Introduction to Deep Learning - MIT OpenCourseWare
id: 20260215060000
date: 2026-02-15
type: fleeting
tags: [fleeting]
---

# (S)(YouTube) Lec 01. Introduction to Deep Learning - MIT OpenCourseWare

**Cover**

[https://img.youtube.com/vi/https://www.youtube.com/watch?v=6FkRvTtUc-o/hqdefault.jpg](https://img.youtube.com/vi/https://www.youtube.com/watch?v=6FkRvTtUc-o/hqdefault.jpg)

**Source**

[https://www.youtube.com/watch?v=6FkRvTtUc-o](https://www.youtube.com/watch?v=6FkRvTtUc-o)

**Content**

[https://www.youtube.com/watch?v=6FkRvTtUc-o](https://www.youtube.com/watch?v=6FkRvTtUc-o)

## Summary

## Transcript

Search in video
0:00
[SQUEAKING] [RUSTLING] [CLICKING]
0:05
0:13
SARA BEERY: So why are we all here? Deep learning has clearly been exploding in society.
0:21
Machine learning generally is something that, when I started studying it about 13 years ago, didn't work,
0:28
and now it works. So how many of you here in this room used AI in the last week?
0:35
Yeah, almost everybody, probably everybody. And we're seeing massive advances in everything from
0:43
AI-assisted text generation to 3D reconstruction,
0:49
things like NeRF, things like AlphaGo, generating images,
0:55
helping with writing code, playing games.
1:00
This has really started to touch almost every dimension of society, and it's definitely very exciting to see.
1:08
And I think that hopefully, all of us will learn a lot more about what that means in this course.
1:14
So what is deep learning? First, I would argue that one necessary component
1:22
of deep learning is the idea of neural networks. And these are a class of machine learning architectures
1:28
that basically use stacks of linear transformations interleaved with pointwise non-linearities.
1:35
And these have really been a building block for a lot of the progress that we saw in the last slide.
1:43
But the other really important dimension of deep learning is the idea of differential programming.
1:48
And this is essentially a programming paradigm where we parameterize parts of the program
1:53
and then let gradient-based optimization tune the parameters to basically optimize that program
1:59
or find some of, at least, local optimal for that program. And these two things together is what
2:06
we posit make up deep learning. And we're really going to dig into both of them in this course.
2:11
So our philosophy for this is that breakthroughs in deep learning have been driven by a mixture of theory
2:18
and practice, and both dimensions are really vital for future progress in the field.
2:24
And so along those lines, this course should hopefully provide both a theoretical grounding
2:30
in important deep learning building blocks, as well as give you practice implementing, understanding,
2:37
and using those blocks. OK, there's still a lot of people in the back who are packed in.
2:44
I don't know if there's any way to come further forward. If not, we'll do our best.
2:51
So the class's coursework is going to be 65% problem sets. You'll have five psets.
2:57
Each will be about one to two weeks long. And then there will be some combination of pen and paper
3:02
or, more realistically, maybe Overleaf, as well as code that you will need to do and submit.
3:07
And then 35% of the grade will be a final project. And this is a research project that's focused on deeper understanding of some of the topics
3:13
that we cover in the course. You'll be asked to propose something for that project.
3:18
So there'll be an initial project proposal. And then the final project will be a blog post
3:24
that's going to demonstrate novel experimentation and visualization. And the hope here is that I don't know,
3:29
many of you-- how many of you are machine learning researchers who have already written a machine learning paper,
3:35
as first author, or anywhere on the author list? OK, so some. These days, when you write a machine learning paper,
3:41
more often than not, you also have to write a blog post about that paper. And that's intended to be catchy, make
3:47
people understand the material, but really get them engaged. And so one of the reasons that we have this
3:54
as the format of our final project is to reflect on the fact that this is the reality we live
3:59
in today, that in machine learning research, being able to write a blog-style description of the work
4:05
that you're doing and not reduce any of the technical complexity or the information that's given across, but just do this in this slightly
4:13
more visual and maybe even interactive format is a really valuable skill, and one that we hope this can help us
4:20
think about. And we'll allow groups, but only up to two.
4:25
And another important component-- we are not able to provide compute. We may be able to provide some very limited compute,
4:32
but that's TBD. So do not plan your final project to be something where you need to get state of the art
4:39
by crunching a huge architecture on a bunch of huge data sets, because it's just not going to work.
4:46
You're not going to be able to outcompete OpenAI on this research project. [LAUGHS] So this does not mean you can't do good research.
4:54
And it's important to get creative here. And I think it's actually a really valuable skill, particularly as certain types of large-scale deep learning become
5:03
more and more centralized, to think about how you can still do impactful machine learning research in a way that is not
5:09
just "bigger is better." All right, any questions about coursework or logistics?
5:18
Yeah. AUDIENCE: Is the final project expected to be a mix of practical and theoretical research?
5:24
SARA BEERY: So the question was, is the final project expected to be a mix of practical and theoretical research?
5:30
I think it depends. It depends on what you want to propose as your final project. But I think we're pretty open.
5:37
What we want is for them to be innovative, but that innovation can be in an applied sense,
5:42
or it can be in a more theoretical sense. OK, so I'm going to do a really high-level overview of the schedule, just to give you a rough sense.
5:50
So today, we're really covering basic interest stuff-- course overview, a rough introduction to what neural networks are
5:57
and basic building blocks, and, particularly in the context of signposting, what we expect you've seen before, because this is not an intro
6:03
to deep learning class. This is advanced graduate-level deep learning.
6:08
And then we're going to go into how you actually train a neural net, then approximation
6:14
theory, some different architectures, things like grids, graphs.
6:19
Then we'll hear from Jeremy about scaling rules for optimization. And then we'll look at generalization theory, more
6:26
architectures, getting into transformers. We'll do a really fun lecture by Phil called the hacker's guide
6:32
to deep learning that I think is quite useful. And then we'll talk about memory.
6:37
And then we'll get into representation learning. So there, we're going to look at reconstruction based and then similarity based and then theory of representation learning.
6:45
Then we'll have a little bit of a series on generative models, the basics, how representation learning interacts
6:51
with generative modeling, thinking about conditional models. Then we'll talk about generalization, and particularly
6:57
out-of-distribution generalization. We'll touch on transfer learning, both from a models and a data perspective.
7:04
We'll hear about large language models. We'll have some guest lectures towards the end of the semester,
7:09
and those are TBD. Then we'll hear about scaling laws, automatic gradient descent, and potentially the past and future
7:16
of deep learning, though I think there's some discussion as to whether that's going to be a different lecture.
7:22
And then, I think kind of importantly, right towards the end, we will have class-wide project office
7:28
hours where we'll have a bunch of the TAs and the instructors all come, and we can do open discussion around projects before they're due.
7:36
So the next thing is that we're going to host PyTorch tutorials. This is intended for if you're not familiar with PyTorch,
7:43
and you think you need a refresher. And we strongly recommend that if this is the case, or if you even think it might be the case, that you attend
7:50
one of the two PyTorch tutorials we're going to offer next week. So the question is if PyTorch is a requirement, or you're allowed to use any other frameworks.
7:56
So you're probably welcome to use any other frameworks in your final project, but some of the problem sets specifically will have code that's
8:03
already built into PyTorch, and you're filling parts of that in. So unless you want to rewrite all of it
8:08
in JAX or something, which more power to you, I would recommend that you definitely make sure that you are familiar with PyTorch.
8:17
OK. Cool, so I'm going to talk about course policies. And this stuff is important.
8:23
And it's also all on the web page. But I think essentially, what we want to touch on
8:28
is what our collaboration policy is first. So everyone is required to write an individual pset.
8:34
So when you're actually working on your problem sets, do not work on something together and then both submit the exact same thing.
8:41
You can work on the actual-- the content,
8:46
you can discuss that with peers, TAs, and instructors, but the problem sets you submit need to be your own independent and individual work.
8:53
And that also applies to the code that you write. So you can discuss the code with others, but you need to each write your own code separately.
8:59
There was some confusion about this in the past. Just make sure that you're not taking the code someone else wrote, running it, and then submitting a pset on it.
9:08
You should absolutely not copy or share complete solutions, and you also should not ask someone else, hey, this
9:14
is my solution, is it right? And you shouldn't do that in person, and you also shouldn't ask, Is this
9:20
correct? on Piazza or Canvas. So again, the idea is, it's your independent work, your independent thought.
9:26
And I think it matters more that you've gone through that process independently than actually getting it correct
9:31
because you'll learn from the feedback on your psets better if you submit something that you came up with yourself
9:37
and get feedback on it than if you copy somebody. And then if you work with anyone on the pset other than TAs
9:44
and instructors, we ask that you write their names at the top of the pset. So if you have a study group, you're all working together-- we don't care if this is 10 people.
9:50
We don't care if it's, in this class, 100 people. But we just want to know who was working together. I'd be impressed if you managed to come up with a 100-person
9:58
collaborative group. So AI assistance-- we take the exact same policy
10:06
about things like ChatGPT or other AI assistants that we do with humans. So it's a deep learning class.
10:13
You should be trying out the latest technology. The idea is not that we're teaching you to ignore what's happening.
10:20
But we do want you to treat them like a human collaborator. Don't ask them to answer the question for you.
10:27
Just try to imagine from an ethics perspective that this is like a peer in the class.
10:33
So don't say, what is the solution to this? Don't say, write the code for me, because you wouldn't go to your friend
10:38
and say, please write my code for me. But you're super welcome to use them as a discussion partner.
10:45
Ask them questions that are contextual. Go back and forth. That's all fine.
10:51
But don't treat AI collaboration as if they're not
10:56
a human collaborator. Think of it that way first. Is this something I would ask my friend in the class?
11:02
And then just like you can come to office hours and ask a human questions about the lecture material, clarifications about questions, tips
11:09
for getting started, you're welcome to do the same with AI assistants. Again, you're not allowed to ask an expert friend
11:16
to do your homework for you. Don't ask AI to do your homework for you. If you're ever unclear, imagine the AI is a human
11:24
and apply that same norm. And if you work with any AI on a pset, similarly to the fact
11:30
that we're writing with humans we collaborated with, please write down which AI and how you used it.
11:36
And, of course, this is a bit vague, but again, just kind of honor code.
11:41
Any questions about AI collaboration, or is that reasonably clear?
11:48
Yeah. AUDIENCE: I had a question on the last page. So can we show our work to the TAs to [INAUDIBLE]?
11:55
SARA BEERY: Yes. You're very welcome to show your work to the TAs. The TAs are not going to tell you
12:00
how to answer the question, though, but they will work with you to help you hopefully figure it out on your own.
12:06
Why are we here? [LAUGHS] What's the goal? So what do we want to do?
12:12
Why are we all interested in things like deep learning? One perspective is that we're interested in modeling
12:20
complex phenomena in the real world. What are complex phenomena?
12:26
Well, you interact with them every day, things like natural language, images, or visual data in general, videos.
12:33
DNA, ecosystems are complex phenomena. Climate change is a complex phenomenon.
12:40
Why is it hard to model complex phenomena in the real world? They're complex.
12:46
[LAUGHS] And so maybe one existence proof for deep learning as a solution to modeling complex phenomena--
12:54
possibly, we could talk about the human brain. All of you are here at MIT, which means you're pretty good at modeling complex phenomena
13:01
in your brain, I'm guessing. So first, today, I'm going to just briefly go over
13:10
how we got where we are today. This is a brief history of the field of AI, deep learning in general.
13:17
And then I'm going to go over what we expect you have already seen before. It's OK if you haven't seen these things before,
13:23
but we would expect you then to go and brush up on them. So if there's anything that I talk about, and you're like,
13:28
oh, I have never seen that, we expect that. That's something you can go look at some of the OpenCourseWare
13:34
courses at MIT, go find lots of resources online, and pick it up before you go into this class.
13:40
And then I'll also talk about what we actually cover in the class. So a brief history of neural networks--
13:47
and I think a fun way to go through this is looking at this on a plot of enthusiasm
13:52
for neural networks over time. So if we go way back to 1958, Rosenblatt
13:58
introduced the perceptron in Psychological Review.
14:04
And the perceptron was the first neural network, arguably.
14:09
And what this was intending to do was recognize or categorize images.
14:15
And the idea was essentially that you could take some combination of representations--
14:22
in this case, particularly pixels-- sum them, put them through some non-linearity,
14:28
and get out a categorization. And really, we'll see throughout the course and even today, this idea still forms the building block
14:37
for most of the deep learning that we do. And these perceptrons are components
14:42
in many, many, many different types of capacities within things like ChatGPT.
14:48
When this paper came out back in 1958, people were incredibly enthusiastic. It made waves.
14:55
And then in 1972, Minsky and Papert wrote a book called Perceptrons, Expanded Edition.
15:03
And this book takes a very critical lens to the idea that a perceptron could be seriously considered
15:09
a model of the brain. And it also carefully and mathematically describes
15:14
and characterizes the limitations of what a perceptron can model. And it did so, so carefully and so critically
15:22
that all of a sudden, enthusiasm for machine learning really took a dip.
15:27
So in the '70s, we were not excited about neural networks.
15:32
But then in 1986, this book came out called Parallel Distributed
15:37
Processing. And this was fundamental because it introduces the concept of backpropagation.
15:45
And this was really the thing that enabled multilayer perceptrons, so not just a single perceptron, but actually
15:51
multiple perceptrons stacked on top of each other to actually be reasonably trained, reasonably fit,
15:57
this concept of being able to backpropagate a gradient through multiple layers of perceptrons.
16:03
And what this enabled you to solve were things like the XOR problem. For the first time, you could reasonably
16:09
solve categorization problems that were not separable from a linear classifier.
16:14
They pointed to backpropagation as a breakthrough. It led us actually handle things where
16:20
you need multiple different boundaries and these nonlinear
16:25
boundaries to be drawn, which is only possible if you have multiple layers of a perceptron. You'll never be able to solve the XOR
16:32
problem with a single-layer neural network. And everyone got really excited again.
16:38
So in the '80s, yet again, machine learning was something that people were pumped about, and particularly this deep
16:44
learning neural network perspective on machine learning. In 1998, Yann LeCun put out convolutional neural networks.
16:54
There's an awesome demo that he has on his web page. I'm sure many of you have heard of Yann LeCun.
17:00
And this seems like it would mean that everyone was really excited about neural networks again.
17:07
But if you go to NeurIPS in 2000, this is the premier conference on machine learning.
17:14
It evolved from an interdisciplinary conference, which was on basically the science of the brain
17:22
and machine learning to specifically just a machine learning conference. If you look at that conference in 2000,
17:31
the most predictive words in papers in the title for acceptance were "belief propagation" and "Gaussian."
17:39
And the title words most predictive of paper rejection were "neural" and "network."
17:45
[LAUGHTER] So this is what we called the AI winter. And one of the reasons it was called
17:51
the AI winter is because even though we had the theory, we had the building blocks, we didn't actually
17:56
have the ability to train them efficiently.
18:01
We didn't have the right programming perspective, and we didn't have the right hardware.
18:07
But then in 2012, Alex Krizhevsky and his co-authors
18:12
published AlexNet. And AlexNet was also another convolutional neural network.
18:20
But importantly, Alex Krizhevsky was a brilliant programmer, and Alex Krizhevsky figured out how
18:26
to program GPUs, graphics processing units, that have been developed to handle massive-scale parallel
18:33
multiplications for graphics, for video games, and for high-resolution images.
18:44
But he figured out how to program those and repurposed that hardware for the training of neural networks.
18:50
And I can't tell you how much of a shot heard around the world this was in our field.
18:55
But this, for the first time, outperformed every single other possible method
19:03
that was out there on ImageNet. ImageNet-- how many of you have heard of ImageNet?
19:09
Yeah. ImageNet was the first very large-scale data set of its kind. And I actually think that this is
19:16
an important component, what made machine learning start to work. And I would argue that, of course,
19:22
it was the theory and the programming, the ability to actually efficiently fit these things.
19:29
But the other really vital component was the data. Machine learning does not work without large-scale, curated,
19:37
labeled data in many capacities still, though we're getting better and better at self-supervised learning.
19:44
But so all of a sudden, we were back. Everyone was enthusiastic again.
19:50
And actually, if you look, these were hype cycles of about 28 years, both of them.
19:56
And so the question is, where are we going to be in 2028? So it's 2024 now.
20:04
It's 2024, so in four years, where are we going to be? So one argument would be, OK, we're in another hype cycle.
20:11
But I would actually argue that that's probably not true. Another one would be that we're just way
20:17
off the deep end in terms of enthusiasm, and by 2028, we'll be in some-- out in the stratosphere.
20:23
Or possibly we're doing something like this. Maybe in 2028, we're going to hit some new plane of enthusiasm, and then
20:31
we'll start to realize limitations, and we'll oscillate again. Yeah? AUDIENCE: Could AI take over society by 2028?
20:38
SARA BEERY: [LAUGHS] So the question is, will AI take over society by 2028? My answer is, let's see.
20:44
[LAUGHS] So what's deep learning today? What are the components that make it up?
20:51
First, I think a really important one is Autograd. These are coding languages like PyTorch and TensorFlow
20:58
that give us a really clever way to do things like implement the chain rule in software, making
21:04
good use of available hardware. And this has enabled us to do things
21:09
like approximate the gradient of any function, even if it's an approximation. These are a really important component of deep learning.
21:17
And if you do anything with deep learning, I doubt that you're doing what Krizhevsky did. I doubt that you're programming these things from scratch.
21:23
You're almost certainly working with existing programming languages that are built for machine learning.
21:28
Its billion-plus data point datasets, things like LAION. So that scale of data that I talked about before,
21:34
this is an incredibly important component of all of this. Parallel training on thousands of GPUs--
21:41
again, this is what we're looking at today-- billion-plus parameter architectures,
21:46
and this number just keeps increasing, million-plus dollar training costs.
21:52
So, of course, it's not public knowledge how much it costs to train something like GPT 4.0.
21:57
But I would bet it's definitely in the many millions.
22:03
Shockingly good results-- I don't know about any of you. I mean, I've been working in this field now for a while, and I think we've been seeing results recently that I didn't
22:13
anticipate seeing in my lifetime from when I started, back when things didn't work. So that's been both exciting to see,
22:20
and also sometimes, I think, for many of us a bit overwhelming, because you're like, oh, gosh, the problems I thought
22:25
were problems aren't problems anymore. So what are the problems? Of course, I work in the world of--
22:33
I work a lot on biodiversity loss at a global scale using machine learning.
22:38
And I would say that biodiversity loss is definitely still a problem, and one that machine learning is sometimes helping, but often also hurting, because the carbon
22:46
costs of actually training these models is significant.
22:52
But all of these massive things-- massive isn't necessary.
22:57
So things like Stable Diffusion are actually pretty lightweight and were incredibly impactful. So things don't always need to be big to be good.
23:06
And then I think another really important component of deep learning today is the idea that it is primarily
23:11
an open source community where we have what we call modular reuse. So people take weights that were trained by one person with one
23:19
architecture. They might take that and use that entire thing as a module within another, larger system that
23:24
has many different components that are being pulled from different things. Now, I think that this open source perspective is really
23:32
something that's driven a lot of progress in machine learning. But also one of the things that we have been seeing in the last few years
23:38
is that things are less and less likely to be open source. You might have an API, but you aren't necessarily
23:45
going to get the weights and the architecture for something like GPT 4.0.
23:50
So for the rest of the lecture, this is the signposting I'm going to use. Looking back, this is what we expect you've seen before.
23:58
The green looking forward, that's what we're going to cover in this class. All right, pretty straightforward.
24:05
I expect you have seen gradient descent before you come to this class. So gradient descent essentially is the idea
24:13
that we're trying to optimize some cost function. And the way we're going to do that is we're
24:19
finding some minimum over a set of all of our training data, some minimum set of parameters, where then the loss is actually
24:27
minimized for all of those different data points. So what this actually looks like in practice,
24:33
you're trying to find some theta star, which is like your optimal set of model parameters that minimize your cost function.
24:39
And so maybe you start somewhere random, and then you calculate your gradient.
24:44
Now you update the weights of that model in the direction of the gradient, and you step through,
24:50
et cetera, et cetera. And I think many of you have probably seen this before,
24:56
and we'll talk in an upcoming lecture, cover some of the different dimensions of things like stochastic gradient descent, et cetera.
25:03
But we're assuming that you've seen this idea before, probably in intro to ML lecture, for example.
25:12
Covering in this class, we'll go into a little bit more detail, backprop and specifically this idea of differential programming.
25:19
So what does it actually look like to build programming languages that are structured around the idea of optimality
25:26
and optimizing through gradient descent for different components of that architecture?
25:32
And I think one of the things that's fun is thinking about what are you actually optimizing for,
25:37
and what are you pushing the gradients through to? So here, one iteration of gradient descent
25:47
is essentially something like this, and we have some learning rate.
25:54
And all of that, we're going to go into in a lot more detail next Tuesday where we're going to be talking about,
26:00
where does this actually come through, how do we think about what some of these choices are,
26:05
and how we actually build out the learning structure for backprop.
26:11
I do expect that you've seen things like multilayer perceptrons and nonlinearities, things like ReLUs, before.
26:18
So computational neural network is often some form of vector in, vector out.
26:23
And this arrow that goes from vector in to vector out is a lot of what we're going to be talking about in this class.
26:30
What computation does that cover? How does that actually build out? So one cool thing about neural networks
26:36
is that they often are reusing the same simple computational units over and over again.
26:42
So there's often a lot of the same kinds of computation that are being repeated and reused.
26:49
And what these actually look like, these building blocks that are being used over and over again, they're often some combination of a linear layer.
26:57
So here-- and we will be sticking with this type of notation for the rest of the class-- what we call z sub j, so some component of this output
27:05
representation in that linear layer, that would be a sum over i of some weight times each
27:13
of those input components-- basically, pretty simple.
27:18
And that can also be written essentially this way, where you have some set of weights, and then you also incorporate a bias term.
27:25
And this is a term that does not actually take in any of those input components. It's just a bias.
27:31
And that can also be written in a vectorized notation, which makes everything much more simple.
27:36
So again, just with a focus on the notation, that output unit z sub j is x, that input vector, transposed times
27:46
w sub j, so the set of weights that correspond to that output component and that bias term.
27:52
And then what we consider theta-- so that's all the parameters of the model-- that's the set of all the weight terms and all the bias terms.
28:01
So what actually makes a neural net a neural net is the fact that it's not just linear combinations of inputs.
28:06
You also have some sort of nonlinear function that is mapping your outputs.
28:12
And that's something like g sub z. And in this case, that's something like a pointwise non-linearity.
28:18
So that's an important dimension that these non-linearities are usually pointwise. So one possible non-linearity would be this one.
28:25
g sub z would be 1 if z is greater than 0, or 0 otherwise. Is this a good choice of non-linearity for a neural net?
28:32
AUDIENCE: No. SARA BEERY: Why not? AUDIENCE: It's not differentiable? SARA BEERY: Yeah, so it's not differentiable, exactly.
28:39
And why is the fact that it's not differentiable not good? Yeah.
28:44
AUDIENCE: Because it hinders backpropagation. SARA BEERY: It hinders backpropagation. Why?
28:51
AUDIENCE: It makes the [INAUDIBLE] set harder [INAUDIBLE]. SARA BEERY: Yeah, so the directionality.
28:57
If you're anywhere on this graph, you don't know which way to go, essentially.
29:04
The gradient is zero. So you can try to take a gradient ascent step. You're not going to move because the gradient is zero, exactly.
29:13
So this roughly is called a perceptron, this linear input
29:18
plus a pointwise non-linearity. And you actually can arguably do linear classification
29:26
with a perceptron. So if you take a really simple version of this where your input is just two-dimensional, x1, x2,
29:34
and you have some w1/w2 learned weight terms that you use to combine to get z, which is your hidden unit,
29:39
and then you map that via a function to y, you then define z as x transpose w plus b.
29:46
And y is now some function g of z. What this looks like for any set of values
29:54
will be something like this, where you essentially have almost a ramp. It's a clear and standard gradient across.
30:04
Why would it look like this? So why is it smooth and reasonably straight?
30:10
I maybe didn't pose that question super clearly.
30:17
So essentially, the reason that mapping it looks like this is because it's a plane.
30:24
So any two-dimensional version of this is going to be a plane with some orientation.
30:33
And then very straightforward, actually, to turn that into a linear classifier, because all you're doing is taking
30:39
some threshold on that plane. So even a single-layer neural network can perform linear classification
30:46
because now this threshold, that's basically what that stepwise non-linearity is giving you. It's giving you something that is thresholded at some value.
30:55
And so even with something quite simple, you can do classification. Now, that's assuming that your data is linearly separable.
31:02
So if you have training data like this, which is linearly separable, and now you want to find some
31:08
optimal set of weights and biases that will minimize some loss term where now, again, this loss is the difference between
31:16
the true value-- so here, the true value is 1 or 0-- and the functional mapping of the inputs to something
31:23
like that value. If you have something like this, this is what we'd call a bad fit. You have 7 misclassifications.
31:31
You're wrong about more things than you're right. And all of those red values, those are going to give you a high value in your loss function.
31:38
Or you could find something that's like an OK fit, less misclassifications.
31:45
And maybe this is something that your model updates to after a single gradient step.
31:50
Your decision surface is linear, and now you're fiddling around with what that classifier is--
31:56
basically, which values of weights and biases you need. And then maybe after a few steps,
32:02
you would find something that is a good fit, where you're not actually misclassifying anything. So it is possible to do classification
32:09
of linear things, linearly separable things, even with something like a perceptron that's doing these really simple thresholding-based
32:16
non-linearities. But like we said, this actually would
32:21
be really difficult to learn. So instead, maybe you would try something like a tanh.
32:29
So this is another pointwise non-linearity. And it was one of the earliest ones that people looked at.
32:38
The things that are nice about this is it's bounded between minus 1 and 1, so none of the values are super huge.
32:44
And you get saturation of the gradient for super large or super small inputs. You're not getting explosions necessarily.
32:51
But also, if you start out somewhere that's really far from the center, you don't have a lot of training signal because we're getting close to 0
32:58
in our gradient. And so those gradients do go to 0 as we go to infinity in either direction.
33:04
The outputs are centered at 0. So the tanh of z can also be written as 2 times the sigmoid
33:12
of 2z minus 1. So let's look at what that sigmoid function looks like. So in this case, this is a sigmoid, 1 over 1
33:19
plus e to the minus h or e to the minus--
33:25
the notation is wrong. It should be minus z. This can be interpreted as the firing rate of a neuron.
33:31
That was one interpretation of it initially. It's bounded between 0 and 1, so it's not ever negative.
33:38
Again, you have saturation of that gradient for super large or super small inputs. And all those gradients go to 0.
33:46
And the outputs themselves are centered around 0.5. So this is kind of poor conditioning. It's slightly biased.
33:52
In practice, we don't actually use this. So instead, in practice, what we often
33:57
use is something called a rectified linear unit, or a ReLU. And this is just the max of 0 and z.
34:05
And this is unbounded on the positive side, so it can go all the way to infinity, which can result in,
34:12
for example, sometimes things like exploding gradients, because the values can get very large. But it's super efficient to implement.
34:18
Essentially, the derivatives are just that step function. And it also seems to help speed up convergence.
34:25
So in that Krizhevsky paper, they showed that they got something like a 6x speed-up using a ReLU over using
34:32
something like a tanh in terms of converging that model and learning. The drawback is that if you're strongly in the negative region,
34:39
the unit's what we call dead. There is no gradient, and so you essentially
34:44
have this gradient collapse, where you can no longer learn from that component of the vector.
34:51
But this is our default choice, and it's widely used in current models. There's lots of slight tweaks to this,
34:56
but this is really, really common. So then the last thing I want to talk about in this section
35:02
is stacking layers. So we talked about a single version of this, where you have your linear projection,
35:09
and then you have a non-linearity. But now you can take that, and you can just stack another one on top of it.
35:14
So now both z and h are hidden units. They're somewhere in the middle of the model.
35:20
We don't necessarily-- they're not seen at the inputs or the outputs.
35:25
And essentially, then, you can also remember that all of these things are stacked on top of each other, almost in parallel
35:32
as well, because all of these inputs are mapping to the different components of the output vector. And so you have weights for all of those different dimensions.
35:40
So this means that h, our output of the first layer, is going to be g, that pointwise non-linearity, applied
35:48
to now instead of vectorized w transpose x sub j to give us
35:54
the individual j-th component, you can actually just think of this now as a matrix multiplied by a vector,
35:59
all of the weights for all of those different dimensions multiplied by the vector x plus the vector of all your biases,
36:06
b1. So now you have this cleaner notation. And then now y is again g, that same pointwise non-linearity
36:15
applied on top of your outputs of your first thing, but now with h, multiplied by that vector of all
36:23
your second-layer weights and added with your second-layer bias term. And so now, your set theta, your model representation,
36:31
is the set of all of the different weights from all the different layers, as well as all the different biases in all the different layers.
36:36
Oh, thank you. Oh, yeah. Thank you. AUDIENCE: Based off your application, how do you choose your activation function?
36:42
What are the parameters of what might be considered a good model or, I guess, a good activation function
36:49
based off of what you want to use your model for? SARA BEERY: So you're asking, in practice,
36:54
are there any best practices for choosing the non-linearity based on different types of data.
37:02
I think in the literature, there's maybe-- you can see it coming out. But often, people really do use ReLU quite a lot.
37:12
But I wouldn't say that there's any great general rules of thumb there.
37:17
And often-- yeah.
37:25
I would say there's different things that people have converged upon based on experimental success. So you'll see in the literature like, oh, yeah,
37:33
everything in this line of work on these data sets with these things, they're always using one or the other component.
37:40
And then people build on that. Sometimes that's called grad student gradient descent [LAUGHS] because you're essentially
37:47
writing research papers and learning from those research papers what parameters in terms of things like your activation
37:53
functions make sense. But yeah, I don't know that I have great rules of thumb of, oh, for this type of application,
37:59
you should always use this or that. Do you? AUDIENCE: Yeah, it's not a hard science.
38:05
SARA BEERY: Yeah. AUDIENCE: But it's usually about what makes the network more trainable rather than trying to model
38:10
a certain kind of data. There are a couple of examples, like using a sinusoidal non-linearity to pick out some for you,
38:18
if you'd like. There are a few examples that do but usually not. And [INAUDIBLE] does deep learning has a great answer
38:25
to that question. SARA BEERY: Yeah. So what Jeremy was saying is basically, it's not a hard science. We don't have theoretical guarantees
38:31
of this is what you should do. But in practice, there are-- yeah, there's counterexamples to that.
38:38
So if you know, for example, that your features are sinusoidal, it maybe makes sense to try to pick out
38:43
Fourier representations. You're working in the Fourier space, then maybe you should use a sinusoidal activation.
38:49
Anyway, but yes, I wish that we better understood it. And that's, I think, why we need a lot more research
38:55
on the theoretical side of understanding, how do we actually choose these things appropriately
39:02
instead of maybe learning everything from scratch or doing it experimentally, burning all those trees?
39:07
Cool. So the parameters of our model are now
39:12
all the different layers of weights and all the different layers of biases. And so like we said, you can do linear classification
39:20
with a perceptron. But the fun thing is-- oops-- you can do non-linear classification with a deep net,
39:25
even if that deep net is just a two-layer perceptron. So here, now we've built a double-layer model, still
39:33
only in two dimensions. So now we have mapped through essentially just this simple non-linearity in between these two
39:40
different layers. Now if we look at what this looks like, that first layer is giving us one kind of ramp.
39:48
The second layer gives us a different ramp because it's a different linear model. And now if you do this non-linear combination of them,
39:55
essentially what you get out is you can actually map-- it's almost like think about the intersection of one ramp
40:01
with another ramp. You get a kind of triangular, almost a pyramidal component
40:07
that will be higher than everything else. And so now you can still take a simple threshold of that,
40:13
and now you can get out a non-linear classification. And, of course, you can expand this into many more dimensions.
40:18
But this is, I think, some nice, simple intuition building as to why you start getting non-linear models when you're
40:25
taking linear combinations, but with these non-linearities. Cool.
40:31
So another-- so we expect that you've seen a lot of that before. But moving forward, one of the things
40:37
we are going to cover in this class is what we can approximate. So what do we know about what is possible to
40:44
approximate with deep learning? So one dimension of that is representational power.
40:50
So you have a single layer. You can do any linear decision surface.
40:55
If you have 2-plus layers, in theory, you can actually represent any function.
41:01
And this is assuming, of course, that you have some non-trivial non-linearity between those layers because if you don't
41:06
have that non-linearity, it turns out that a linear layer and another linear layer, this is just a linear combination.
41:13
It's still linear. So you need that non-linearity. But doing that, you can actually approximate anything.
41:18
And one way to think about it is, given some amount of capacity, some number
41:24
of different dimensions that you can do, you can actually approximate any function.
41:30
This is a rough, hand-wavy intuition thing. But as you're shrinking the size of these different vertical
41:44
things, you're getting something like a Riemann sum. You can approximate any integral as long as you have enough capacity in terms
41:50
of the number of small things that you're building up. So this gets at basically one of the issues, which is efficiency.
41:57
So in theory, you could approximate any complicated function with a sufficiently wide
42:03
two-layer network. So this means not two dimensions, maybe thousands or millions of dimensions.
42:09
But in practice, that's actually very inefficient. So a narrow deep model, maybe something
42:16
that only has much fewer dimensions in terms of the size of each vector or each input and output,
42:22
but now many, many, many more stacked layers, you might be able to, with a lot less parameters,
42:27
approximate the same complex function. In practice, we do find that's true. More layers helps.
42:34
And we'll get into this a little bit in lecture 3, which is about approximation theory, the theory of what it is possible to approximate.
42:41
And then the other thing that we're going to cover in this class is architectures. So when we talk about deep networks,
42:47
really, often, we're talking about something that's roughly like this, some cascade of repeated simple computations,
42:54
each of these linear and then linear models with a non-linearity. And then with every increasing layer,
43:00
we're getting more abstracted representations. You're getting a higher capacity model.
43:05
And this means it can form more complex and abstract calculations. Whereas a shallow network, if it's not sufficiently wide,
43:13
it could maybe only efficiently compute simple things like maybe finding edges, a deep network
43:19
could efficiently compute harder things like recognizing this clownfish or translating English
43:24
to Chinese. And so this classification of complex things,
43:29
essentially, your whole function f of x is now this stacked or almost chain-like
43:36
mapping from your final layer, which is then a functional mapping of your previous layer,
43:42
and in and in and in and in, all the way back to that input. And there's a lot of different ways
43:47
that we've learned to build these mappings for different types of problems and based on the structure of the data we're trying to model.
43:54
And we'll get into that. We'll talk about CNNs, GNNs, transformers, and RNNs, so convolutional neural networks, graph neural networks,
44:01
transformers, and recurrent neural networks. And then the other thing that we're
44:06
going to be talking about in this class is when and why we can generalize.
44:12
So why do deep nets generalize? Essentially, deep nets have so many parameters, they could just act like lookup tables.
44:18
They would just regurgitate the training data. But instead, they seem to learn rules that generalize. And this actually defies classical theory.
44:25
So the classical theory basically says that if your model is overparameterized,
44:31
it will overfit. There's this capacity versus risk or error curve
44:37
where if you don't have enough capacity, you're going to underfit the model. And then with too much capacity, you're going to overfit.
44:44
But in practice-- and this is from this paper "Double Descent"-- what we see is that in this modern interpolating regime,
44:53
we go past that point of being overparameterized, and we're actually then able to actually pass
44:59
some interpolation threshold or ability to have enough capacity in the model to interpolate between the data points.
45:05
We're actually able to then potentially get even better, even though the models are massively overparameterized.
45:10
Yeah. AUDIENCE: What do you mean by capacity? SARA BEERY: Capacity is the number of parameters in the model. So that's both the width and the depth,
45:17
basically how many values are captured in those model weights? Yeah.
45:23
Yeah. Yes, thank you. AUDIENCE: And how does that relate to the size of the data
45:31
samples that you're passing? SARA BEERY: Yeah. So that is not a dimension on this plot,
45:38
but it definitely is also related. So if you have-- but it's related in a different dimension.
45:44
If you're learning from fewer data points, it's very easy to learn to maybe overfit to those data points.
45:51
So you could think of that honestly, in another way, maybe as being a different dimension of capacity here,
45:57
where it's like almost the capacity of your training data. But, of course, there's not a direct translation.
46:02
But so if you don't have enough training data, you also can't learn to interpolate between those data points because you don't have enough coverage of the data
46:09
distribution. I live in that world a lot. We often don't have enough data to learn
46:16
a general representation without a lot of handy tricks. We will talk about some of those different tricks
46:22
in this class, some of the different ways that we try to convince models not to overfit to data and try to learn to generalize beyond maybe what
46:30
is captured in the data. But I think that dimension is really important, and it's one of the reasons that none of this
46:36
was possible until we started building big enough data sets, where you had enough coverage of the space
46:41
that you wanted to model in your data to be able to start interpolating between them.
46:46
Yeah. AUDIENCE: Can you just clarify the difference between overfitting and overparameterized?
46:51
SARA BEERY: Oh, yeah. So, I mean, I think this paper would be great to read to be able to really get into it.
46:58
But essentially, the idea here is that in the previous literature, we said that at some point, if you had too many parameters,
47:06
you were going to overfit and learn a model that actually generalized worse because based on the amount of data that you
47:12
had, it was going to-- there's a classical example where you have three data points.
47:18
And if you try to learn a 12-dimensional function,
47:23
it will learn something like this to fit those data points perfectly. But actually, it's not likely to generalize
47:28
because it's basically too spiky or too peaky. So that's the idea of overfitting.
47:34
But this idea of overparameterized is basically instead of saying underfitting and overfitting,
47:39
now we're saying that the new paradigm is underparametrized and overparameterized. And what they're basically saying
47:45
is that you maybe can't be too overparameterized, though this perspective is one that doesn't
47:53
take into account resources. So there's many, many people and places and places
48:00
that are at MIT, but even actually in this class, where we don't have infinite compute resources. So actually, what you really want
48:06
is some optimal point on this curve where you get good performance, but you're not maybe
48:12
using resources that you don't have, super, super large memory GPUs.
48:17
Yeah? AUDIENCE: When you gave the example of using two very wide layers versus multiple narrow ones,
48:24
[INAUDIBLE] there's a rule of thumb about which is better for about the interpretability
48:30
between the two? SARA BEERY: Yeah. OK, we're definitely going to get into this a lot more in some of the later lectures,
48:38
these choices between breadth versus depth in models.
48:44
But at a very high level, your intuition, I think, that you're getting at is correct.
48:50
If you have only two layers-- actually, maybe not, because if you
48:56
have two almost infinite parameter layers, really, really high dimensional space is hard to interpret.
49:02
If you have lower dimensional space over many, many different now stacked versions of these layers,
49:09
it's also hard to interpret. So I would say like in ecology, for example, people often
49:14
still use just generative additive models of a bunch of different linear things because they need the interpretability,
49:20
or they feel like they do. And anytime you get to larger numbers
49:25
of parameters in either dimension, that interpretability gets more difficult.
49:31
AUDIENCE: I was just going to add that even in, let's say OpenAI, it's a closely guarded secret
49:38
what recipe of width versus depth that they use in GPT whatever.
49:43
If you can come up with a really scientific way to answer that question, you could go and get a job there and--
49:49
SARA BEERY: Make 7 figures. [LAUGHS] AUDIENCE: [INAUDIBLE] SARA BEERY: Yeah, so what Jeremy is saying is,
49:54
there's no perfect prescription or recipe for width versus depth and what's optimal. Yeah.
50:02
So the simplicity hypothesis in classical theory basically says that big models learn complicated functions
50:08
and overfit the data. And the emerging theory is that deep networks actually learn simple functions that generalize.
50:16
And we're going to talk about this a lot more in a theoretical and a more experimental lecture around generalization,
50:21
both in and out of distribution. So again, what I've expected you to see before-- softmax, cross-entropy loss-- basically,
50:29
we have this model that we're trying to use to learn to classify something like clownfish. And we assume that we've seen some of these really basic loss
50:37
functions that we use for this. So for example, if you have this as your last layer,
50:43
and now you have some set of categories you're trying to learn to categorize over, the simple version of this is you take the argmax,
50:49
and you say, OK, well, the thing that's darkest on here is clownfish. And then the loss that you would calculate
50:57
is, OK, the actual correct ground truth label is clownfish, and then the error between those two, in this case, is zero.
51:04
So it's small. So you've gotten the correct prediction. And then maybe, actually, the real ground truth label
51:12
is grizzly bear, and you've said clownfish. Now what you'd want is for your loss to be large. So you want some loss function that
51:18
does a good job of punishing you when you're wrong and not punishing you when you're right.
51:24
And the way we actually do this often is if you assume the net output is some normalized vector,
51:31
then you can think of this as a probability distribution over different possible object classes.
51:37
And so what you want this loss function on the right, this is called cross-entropy loss. This essentially indicates the distance
51:43
between what the model believes the output distribution should be and what the input distribution actually is,
51:50
which in this case is what we call a one hot encoding, or essentially a vector that's 0 everywhere except for the place
51:56
where it's correct, where it's 1. And so essentially, it's just telling the network to maximize the probability of the training data, which
52:04
forces the output to be a reasonably good probability model of the object class, given the image,
52:09
assuming you have enough training data. So what this looks like in practice, you say clownfish,
52:15
the ground truth label is clownfish. Maybe this is your prediction, so now the score
52:22
is basically saying, this is how much better you could have done-- how much better you could have done,
52:28
which is the difference between the amount of probability you gave the class clownfish. I'm putting probability in quotes here.
52:34
It's super important to know that these are not true probabilities. They're scores. And then that red is the dimension
52:42
that you could do better. And that's telling you the direction of the gradient you want to go in.
52:47
So maybe grizzly bear, you got it correct. It's grizzly bear. Now the amount that's left over is small versus actually
52:58
if it's chameleon, and you're saying iguana. Essentially, this thing is normalized,
53:04
so if you put a lot more probability on one thing, then the correct answer, then you end up with a much smaller amount that now you're looking
53:10
at the difference between it. And basically, the idea with all of this in deep learning
53:16
is you're taking all these different weights in your massive model, and then you're fiddling around with them
53:23
until you match the desired output for all your training data. You're basically just wiggling around all
53:29
these different weights. So you're going through your training data, you're predicting something, you're calculating a loss,
53:36
and you're doing this for many different data samples. And you're doing it over and over and over again until the model gets everything
53:42
right, or as close to everything right as possible. We also expect that you've seen some amount
53:48
of parallel processing and the idea of tensors before this. So this is the idea that a lot of this stuff,
53:54
because it's repeated calculations, you can be done in batch. So each of these individual losses for the individual data
54:01
points, well, it's all going to be summed anyway. So you can do it in parallel, and now you can take these batches and more efficiently calculate that sum.
54:09
And so look, you take the same layer for all three of these, you can stack them, and now essentially you
54:16
get this matrix that's features multiplied by images. And so that's what your tensors are.
54:22
They're these multi-dimensional arrays, and every single layer is some representation of the input data.
54:29
And actually, everything is a tensor. A tensor is just a multi-dimensional matrix. So you can say, OK, here's our mathematical representation
54:36
of this model. But you can also just represent it this way. You have these vectors of your different input values,
54:44
and now you have your batch dimension, which is now this vertical stacking of all those layers. And now you multiply that by your weights matrix,
54:52
and you get out your output, and then you run that through a pointwise non-linearity, and then again, just another matrix multiplication.
54:58
And then you get your output z2, and then you take that non-linearity, and you get y. So this is why the fact that GPUs
55:05
can do so many multiplications in parallel was important, because we can rewrite all of these models
55:10
as just essentially sets of multiplications. And we'll go into this in a lot more detail as well in the future.
55:16
So what we're going to cover in this class is how deep networks represent data. So essentially, it's this idea, where
55:29
deep networks are a more compact way of representing knowledge in data.
55:34
And previous methods we saw were more like lookup tables. But there's other and maybe better ways
55:41
to learn a mapping between input and output that basically assume that there are these lower-level building
55:47
blocks that are useful for many different possible downstream tasks. So one nice example is the idea of trying
55:53
to learn a classifier for the letter T. So if you want to learn to classify the letter T, you could try to build a classifier just for the letter
56:00
T. Or you could take a classifier that classifies lines, and you could say, OK, here's a line,
56:06
and then you could rotate, have a rotation of that classifier, and you'd say, here's a line. And now all you have to do is understand the connection point
56:13
between these two lines. So that line classifier is reusable in some combination
56:19
to get a T classifier. And that's the basic idea here. And actually in this post hoc way,
56:27
we've analyzed what is learned in layers of things like convolutional neural networks. And we do see that you'll get low-level representations
56:34
in the earlier layers. Then they get combined into more and more complex representations in those later layers.
56:42
And you can actually see this as well. If you take an input image, and you take those,
56:48
and you cluster them in some low-level representation of the space for each layer, the layers earlier on in the network
56:56
are not going to cluster well by category, because they're really just categorizing things like, does it have directional orientations of light and dark gradients
57:04
in the pixels? But actually, when you get towards the end of the network, it's learning more concepts, and that's
57:09
where you start getting these clusters of different things like fish. And we will talk about actually how that representation learns
57:19
and is structured through space in a bunch of different lectures on representation learning, where we talk about
57:25
reconstruction, similarity, and theory. We're also going to cover generative models going forward
57:32
in the class. And this is things like text-based and image-based generation.
57:37
And we'll cover basics, representations, and conditional models.
57:42
And then we're going to cover in this class how to think about weight reuse and some of the efficiencies in terms of training
57:48
if you're able to reuse components of previously trained models.
57:53
So here, again, this idea that, all right, well, you learned this thing to categorize pictures of animals,
58:02
and now maybe you want to categorize some sort of satellite imagery, well, actually, a lot of those initial components about lines
58:10
and orientations and structures, those are useful for both of these. So what do we really need to learn from scratch versus what
58:19
is generally useful in terms of the representations that are learned?
58:24
And this is really valuable if you don't have big data or big compute, if you can pre-generate representations that then you
58:31
can learn on top of without needing to learn everything from scratch.
58:36
And so we'll get into whether or not these things are generalizable or transferable
58:42
in these transfer learning lectures, where we talk about models and data. And then finally, we'll talk about scaling.
58:49
So when you think about the scale of a brain, something like this little worm only has 302 neurons,
58:57
so you can think of that as 302 different values in its neural network.
59:03
A fruit fly is 15,000. Human beings have 100 billion, roughly.
59:09
Elephants have 250 billion neurons in their brains. I work with elephants a lot. They're amazing.
59:15
And we'll talk about scale and deep learning
59:21
and what this means, and actually get into some of the really great questions that different people asked in terms of, how does maybe scaling rules change when you're thinking
59:30
about optimization, what are the laws of scaling, and how do we think about something like automatically learning how to best optimize a model?
59:38
Great. So I tried to cover today how we got where we are today, basically just honestly mostly joking,
59:46
but definitely a brief history of these fluctuation and hype cycles. I would say that everyone's pretty clear
59:53
that we're currently in a really hypey part of the hype cycle. What we expected you maybe saw before and also very high level,
1:00:03
some of the things we're going to cover in this class. So I'm happy to, if anyone has any final questions--
1:00:11
yeah. AUDIENCE: Slightly underweighted, but would you be willing to share
1:00:17
an estimate for how many data it will take this first lecture to get a million views?
1:00:22
SARA BEERY: How long it'll take the first lecture to get how many views? AUDIENCE: Let's say a million. SARA BEERY: Well, I mean, honestly, the intro lecture
1:00:28
is probably going to be the least watched of all the lectures [LAUGHS] because it's just a bunch of course logistics.
1:00:34
We might even edit those out. But great question. I have no idea.
1:00:39

