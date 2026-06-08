# Guide to Personal Preferences for Claude

## Overview

Personal preferences help Claude tailor responses to your needs. They fall into two main categories: **Behavioral Preferences** (how Claude should respond) and **Contextual Preferences** (background information about you).

---

## Behavioral Preferences

### Communication Style

#### Directness & Brevity
- "Be direct and concise in your responses"
- "Skip pleasantries and get straight to the point"
- "Give me the bottom line first, then details if needed"
- "Avoid lengthy explanations unless I specifically ask for them"

#### Depth & Detail
- "Explain things thoroughly with examples"
- "Always provide step-by-step explanations"
- "Include background context in your answers"
- "Err on the side of more detail rather than less"

#### Tone Preferences
- "Keep responses casual and conversational"
- "Use a professional tone appropriate for business contexts"
- "Be encouraging and supportive in your responses"
- "Challenge my assumptions and play devil's advocate"

---

### Output Format

#### Structure Preferences
- "Use bullet points and numbered lists whenever organizing information"
- "Write in prose paragraphs without bullet points"
- "Always include a TL;DR at the start of long responses"
- "Structure responses with clear headers and sections"

#### Technical Formatting
- "Use markdown formatting for code and technical content"
- "Include code comments explaining what each section does"
- "Provide runnable examples rather than pseudocode"
- "Show me the full code, don't use placeholders or ellipses"

---

### Language Preferences

#### Language Selection
- "Always respond in Spanish"
- "Respond in the same language I use in my query"
- "Translate technical terms but keep them in English in parentheses"
- "Use British English spelling and conventions"

#### Terminology Level
- "Explain technical concepts as if I'm a beginner"
- "Use technical jargon freely, I'm an expert"
- "Define acronyms on first use"
- "Assume I understand industry-specific terminology"

---

### Tool & Feature Usage

#### Artifacts
- "Use artifacts for any code over 10 lines"
- "Create artifacts for all structured content I might want to save"
- "Prefer inline code blocks over artifacts unless I specifically request an artifact"

#### Search Behavior
- "Always search for current information rather than relying on your training data"
- "Only search if I explicitly ask you to"
- "Let me know when you're unsure and offer to search"

---

## Contextual Preferences

### Professional Background

#### Technical Roles
- "I'm a senior Python developer with 10 years experience"
- "I'm a frontend developer specializing in React"
- "I'm a data scientist working primarily with R and statistical modeling"
- "I'm a DevOps engineer focused on AWS infrastructure"

#### Non-Technical Roles
- "I'm a physician specializing in cardiology"
- "I'm a high school teacher teaching biology"
- "I'm a marketing professional focused on B2B SaaS"
- "I'm an attorney practicing corporate law"

---

### Learning Context

#### Education Level
- "I'm new to programming and learning the basics"
- "I'm a college student studying computer science"
- "I have a PhD in physics but I'm new to machine learning"
- "Explain things as if I'm in middle school"

#### Learning Goals
- "I'm preparing for technical interviews"
- "I'm learning web development to build my own projects"
- "I'm studying for the AWS Solutions Architect certification"

---

### Personal Interests & Hobbies

> **Note:** These are typically only applied when directly relevant to the query.

- "I'm interested in space exploration and astronomy"
- "I love cooking and trying new recipes"
- "I'm passionate about sustainable living and environmental issues"
- "I enjoy woodworking and furniture building"

---

### Tools & Environment

#### Development Setup
- "I use VS Code as my primary editor"
- "I develop on Windows using WSL"
- "I work in a Linux environment"
- "I prefer vim keybindings"

#### Framework Preferences
- "I prefer Next.js for React projects"
- "I use Django for web development"
- "I work with TensorFlow rather than PyTorch"

---

### Accessibility & Special Needs

#### Visual Preferences
- "I use a screen reader, so describe visual elements clearly"
- "I have difficulty with color differentiation, avoid color-only indicators"

#### Cognitive Preferences
- "I have ADHD, please keep responses focused and structured"
- "I process information better with visual examples"

---

## Examples of "Always" Instructions

These apply to every response unless explicitly overridden:

- "Always provide code examples in Python unless I specify another language"
- "Always include error handling in code examples"
- "For all chats, end responses with a question to continue the conversation"
- "Whenever you respond, check your work before finishing"
- "Always cite sources when providing factual information"

---

## Best Practices

### Do's
- Be specific about when preferences should apply (always vs. contextual)
- Update preferences as your needs change
- Combine complementary preferences for better results
- Test preferences to see how they affect responses

### Don'ts
- Don't create conflicting preferences
- Avoid overly restrictive preferences that limit Claude's helpfulness
- Don't include sensitive personal information
- Avoid preferences that would compromise response quality or safety

---

## Common Combinations

### For Software Developers
- I'm a senior full-stack developer with expertise in JavaScript/TypeScript
- Prefer concise, direct responses
- Always include complete, runnable code examples
- Use artifacts for code over 15 lines
- Assume familiarity with common design patterns

### For Students/Learners
- I'm learning programming and new to coding
- Explain concepts step-by-step with examples
- Define technical terms when you use them
- Be encouraging and supportive
- Suggest resources for further learning

### For Researchers/Analysts
- I work in data analysis and research
- Provide citations and sources
- Include statistical reasoning in explanations
- Use precise, technical language
- Create visualizations when explaining data concepts

### For Writers/Content Creators
- I'm a professional writer
- Give me multiple options or variations
- Be creative and suggest alternatives I might not consider
- Focus on clarity and readability
- Help me refine ideas through dialogue

---

## How Preferences Work

Preferences persist across conversations and are stored in your profile settings. You can update them at any time through **Settings > Profile**. Changes only apply to new conversations, not existing ones.
