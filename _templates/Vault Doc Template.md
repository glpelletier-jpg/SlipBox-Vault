---
doc_type: <%* 
const types = ["guide", "procedure", "reference", "master", "state", "meta"];
const chosen = await tp.system.suggester(types, types, false, "Select doc_type");
tR += chosen || "guide";
%>
purpose: "<%* tR += await tp.system.prompt("One-line description of this document's purpose") || ""; %>"
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - vault-meta
---

# <% tp.file.title %>

> *One sentence: what is this document and when should someone read it.*

---

## Overview

*(What this document covers and who it is for.)*

---

## *(Section 1 — rename to fit your doc type)*

*(Content here. Use `##` for main sections, `###` for subsections.)*

---

## *(Section 2)*

*(Content here.)*

---

## *(Section 3)*

*(Content here.)*

---

## Reference

*(Optional: tables, quick-lookup checklists, key file paths, or links.)*

| Item | Detail |
|---|---|
| | |

---

*See also:* [[_docs/_docs|Docs Index]] · [[_docs/Slip Box Master Guide|Master Guide]]
