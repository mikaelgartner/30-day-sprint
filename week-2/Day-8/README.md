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