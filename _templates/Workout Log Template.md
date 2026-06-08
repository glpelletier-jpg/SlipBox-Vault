---
type: workout
date: <% tp.date.now("YYYY-MM-DD") %>
workout_type: <%* const types = ["Outdoor walk","Indoor walk","Outdoor run","Indoor run","Bodyweight strength","Gym strength","Cycling","Swimming","HIIT","Stretching/yoga","Other"]; tR += await tp.system.suggester(types, types, false, "Workout type"); %>
duration_min: <%* tR += await tp.system.prompt("Duration (minutes)", "30") || "30"; %>
hr_avg: 
hr_zone: <%* tR += await tp.system.suggester(["1 - Light","2 - Easy","3 - Aerobic","4 - Threshold","5 - Maximum","Unknown"],["1","2","3","4","5",""],true,"Primary HR zone (or skip)") || ""; %>
feel: <%* tR += await tp.system.suggester(["1 - Rough","2 - Hard","3 - OK","4 - Good","5 - Strong"],["1","2","3","4","5"],false,"How did it feel?"); %>
quest: Health Reset Q3
tags:
  - workout
  - health
---

# <% tp.date.now("ddd MMM D") %> — <%* const types2 = {"Outdoor walk":"Walk","Indoor walk":"Walk","Outdoor run":"Run","Indoor run":"Run","Bodyweight strength":"Strength","Gym strength":"Strength","Cycling":"Cycle","Swimming":"Swim","HIIT":"HIIT","Stretching/yoga":"Stretch","Other":"Workout"}; %>Workout

**Type:** <% tp.frontmatter.workout_type %>  
**Duration:** <% tp.frontmatter.duration_min %> min  
**HR zone:** <% tp.frontmatter.hr_zone %>  
**Feel:** <% tp.frontmatter.feel %>/5

---

## What I did

*(Distance, sets/reps, route, location — whatever is relevant)*

>

---

## How it felt

*(Energy before/during/after, anything notable physically)*

>

---

## Next time

*(One thing to adjust, increase, or try differently)*

>

---

*[[02-Quests/Health-Reset-Q3-2026|Health Reset Q3]] · [[00-Home/vitals.base|Vitals]]*
