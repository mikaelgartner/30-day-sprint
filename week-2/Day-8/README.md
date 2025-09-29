# 🟧 Day 8: Arrays & Loops — To-Do List App

Today I dove deep into JavaScript arrays and loop logic. I learned how to manipulate arrays using methods like `.push()`, `.splice()`, `.flat()`, `.flatMap()`, `.reduce()`, and `.reduceRight()`, and explored how loops like `forEach()` help dynamically render content in the DOM.

### ✅ Key Concepts Learned
- How to flatten arrays and why it's useful
- Difference between `.splice()` and `.toSpliced()` (mutable vs immutable)
- How `.flatMap()` combines mapping and flattening in one step
- How `.reduce()` and `.reduceRight()` process arrays in different directions
- How to use `forEach()` to loop through tasks and update the UI

### 🛠️ Project Built: To-Do List App
- Built a fully functional to-do list using HTML, CSS, and JavaScript
- Tasks are stored as objects with `text` and `done` properties
- Users can add tasks, mark them as complete with checkboxes, and remove them
- Used `forEach()` to render tasks dynamically in the DOM
- Styled the app with a clean layout and responsive design

### 🎨 Features Implemented
- Input field and “Add Task” button
- Checkbox to toggle task completion
- “Remove” button for each task
- Visual feedback for completed tasks (line-through)
- Responsive layout with Flexbox and modern styling

### 🧠 Console Practice
- Tested array methods and loop logic directly in the browser console
- Practiced manipulating task arrays and observing DOM updates

---

📁 Folder: `/30-day-sprint/week-2/day-8/`  
Files: `index.html`, `style.css`, `script.js`

Next up: Day 9 — Refactoring with objects and adding deeper task logic!

# 🟧 Day 9: Objects & Functions — Summary

### ✅ Accomplishments
- 🧠 Refactored the to-do list to use **object-oriented logic** via a `Task` constructor
- 🛠️ Implemented a `toggleDone()` method using **JavaScript prototypes**
- 🕒 Added **timestamps** for both task creation (`createdAt`) and completion (`completedAt`)
- 🧹 Split tasks into **Active** and **Completed** sections for better UX
- 👁️ Dynamically showed/hid headers and buttons based on task state
- 🧪 Logged task object changes to the console for debugging and verification

### 📚 Key Learnings
- 🧱 How to structure data using **JavaScript objects**
- 🔁 How to use **functions and prototypes** to encapsulate behavior
- 🧩 How to manage **task state** and update the DOM accordingly
- 🧼 How to build a **responsive UI** that adapts to content
- 🧠 How to think in terms of **object lifecycle** (creation, update, completion, removal)

### 🎯 Next Up: Day 10
- Refactor inline event handlers to `addEventListener`
- Add a theme toggle (light/dark mode)
- Use CSS classes to switch themes dynamically

# 🟧 Day 10: Events & DOM — Learnings & Achievements

### 📚 Key Learnings

- 🖱️ Mastered `addEventListener()` for modular event handling
- 🧱 Refactored DOM rendering using `createElement()` instead of inline HTML
- ✅ Dynamically attached behavior to checkboxes and buttons
- 🎞️ Used `animationend` events to control animation timing
- 🎨 Applied `accent-color` to theme native form elements like checkboxes
- 🌗 Implemented light/dark mode toggle using CSS classes and JS logic
- 🧠 Tracked the last added task to trigger animations selectively
- 🧼 Practiced clean separation of logic, styling, and structure

### 🏆 Achievements

- 🔧 Refactored task rendering to eliminate all inline `onclick` attributes
- ✨ Added entrance animation for newly added tasks using `@keyframes`
- 🛡️ Prevented animation replay on auto-refresh with smart flag logic
- 🌙 Built a minimal, icon-only theme toggle button with hover effects
- 🖤 Styled dark mode with consistent colors, shadows, and contrast
- 🧲 Customized checkbox appearance for dark mode using `accent-color`
- ⌨️ Made task input respond to Enter key for smoother UX
- 🧩 Created a polished, responsive, and theme-aware to-do app


# ✅ Day 11: Forms & Validation


### 📚 Key Learnings

- ✅ Native HTML5 validation (`required`) runs *before* JS — unless you intercept it  
- 🧠 Using `novalidate` disables browser checks, giving you full control but requiring thorough JS coverage  
- 🎛️ Custom JS validation lets you style, animate, and control feedback exactly how you want  
- 🧱 Error handling should be modular, intuitive, and visually tied to the input field  
- 🌒 Dark mode styling requires thoughtful contrast and glow effects for clarity  
- 🧪 UX polish matters — even small tweaks like fading out errors improve the experience  
- 🧠 Validation is not just about preventing mistakes — it’s about guiding the user clearly

---

### 🏆 Achievements

- 🧠 Built custom input validation for your to-do list using JavaScript logic  
- 🛑 Bypassed native browser validation to gain full control over UX and styling  
- 🎨 Styled error messages with custom colors, animations, and dark mode support  
- ⚡ Implemented fade-out animation for smoother error dismissal  
- 🧪 Debugged layout quirks and refined how error messages appear and disappear  
- 🧰 Used `preventDefault()` to intercept form behavior and run your own logic  
- 🧼 Cleaned up error visibility using `display: none` and conditional toggling  
- 🧩 Integrated validation into your existing task flow without breaking structure  
- 🧠 Reflected critically on browser vs JS validation and made an informed design choice

---

# 🟧 Day 12: Things I’ve Learned & Accomplishments

---

### 📚 Key learnings

- 🧠 How to use `localStorage` to persist data across sessions
- 🔄 The difference between `JSON.stringify()` and `JSON.parse()` for storing and retrieving structured data
- 🧱 How to reconstruct custom objects (like `Task`) from parsed JSON
- 🎛️ How to manage state flags like `hasUsedTasks` and `hasCelebrated` to control app behavior
- 🎨 How to combine logic and UX: triggering confetti and sound only once when the task list is cleared
- 🌗 How to persist theme preferences using `localStorage` and toggle dark mode with animation

---

### 🛠️ What I Built

- ✅ A fully functional to-do list with:
  - Task creation, completion, and removal
  - Timestamp tracking for both creation and completion
  - Persistent storage using `localStorage`
- 🎉 A celebration system that triggers confetti and sound when all tasks are completed
- 🌙 A dark mode toggle with animated icon and theme persistence
- 🧼 A reset button that clears all tasks and resets app state
- 💬 Error handling and validation for empty task input

---

### 🚀 Milestone Unlocked

> Day 12 is complete — and I’ve gone beyond the basics to build a polished, persistent, and joyful user experience.  
> This isn’t just a checklist app — it’s a celebration engine.

---