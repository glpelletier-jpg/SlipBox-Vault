---
title: Learning essential Markdown
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, learning, HowTo, resource]
---

# Learning essential Markdown

---

date: 2025-06-06 21:13:54
created: 2024-12-27 12:38:52
categories:

- Obsidian Files

---

## Learning essential Markdown

`BUTTON[Home]`

```text
[](MetaBind%20Main%20Navigation)
```

> [!example]- Part 02 Navigation - Click to Expand ^Part02

> [!info]- What is Markdown? Markdown is a lightweight markup language that allows you to format text in a way that is easy to read and write, and can be easily converted to HTML. It was created by John Gruber in 2004 as a way to make writing for the web more readable and writable.

Markdown is widely used in various applications, such as content management systems, note-taking apps, and forums, where it allows for easy formatting and readability of text. Many websites and platforms, such as GitHub, Reddit, and Slack, support Markdown formatting, making it a popular choice for writing and formatting content on the web.

This format is Universally Accepted and protects your notes in the future

---

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
Example Rendered below
```

Here is a heading: `# Heading`, **don't do this:** `#Heading` (this is a Tag)

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

#### Heading 5

#### Heading 6

---

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

```markdown
This is a paragraph
This is another paragraph
```

### Emphasis (Bold, Italics, Strikethrough)

```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~
```

### Line Breaks

```markdown
First line with two spaces after.  
And the next line.
```

### Lists

#### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
```

#### Unordered Lists

```markdown
- First item
- Second item
- Third item
```

### Links

```markdown
External Link with text: [link-text](https://www.google.com)
Internal Link with text [](What%20is%20Markdown)
Can also use CTRL + K when highlighting text
```

### Images

```markdown
You can add images with External URLS, by adding a ! symbol 
before an External Link
![John Gruber](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg)

You can change the image dimensions, by adding `|150x150` to the link destination, where 150 is the width and 150 is the height.
![John Gruber|150x150](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg)
If you only specify the width 150, the image scales according to its original aspect ratio. For example:
![John Gruber|150](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg)
```

[John Gruber](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg)

### Code Blocks

#### Inline Code Block

```markdown
Inline `code` has `back-ticks around` it.
```

#### Blocks of Code

```text
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```text
No language indicated, so no syntax highlighting. 
But let's throw in a tag.
```

```text
### Tables
There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily.
```markdown
| Heading 1 | Heading 2 | Heading 3 |
|---|---|---|
| col1 | col2 | col3 |
| col1 | col2 | col3 |
```

### Task list

To create a task list start line with square brackets with an empty space. Ex: [ ] and add text for task. To check the task replace the space between the bracket with "x".

```markdown
[x] Write the post
[ ] Update the website
[ ] Contact the user
```

---

## External References

- Link: [Markdown Guide](https://www.markdownguide.org/cheat-sheet)

- Obsidian Documentation: [https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)

- GitHub Documentation: [Writing Markdown on GitHub](https://docs.github.com/en/get-started/writing-on-github)

---

See also 

⏪Back | [[Effective Note Taking and Note Making Strategies|Next⏭️]]

> [!example] Part 02 Navigation ^Part02

