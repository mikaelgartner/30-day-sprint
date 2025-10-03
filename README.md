# 🧑‍💻 Day 1: Semantic HTML Profile Page

Welcome to Day 1 of my 30-Day Front-End Developer Sprint! This project kicks off the challenge with a simple but meaningful milestone: building a personal profile page using semantic HTML.

## 🚀 What I Built

A clean, accessible profile page that includes:
- My name and a short bio
- A profile image
- Contact links (email, GitHub, LinkedIn)
- Semantic HTML structure using `<header>`, `<main>`, `<section>`, `<footer>`

## 💡 What I Learned

- How to use semantic HTML tags to improve structure and accessibility
- How to preview changes instantly using Live Server in VS Code
- How to initialize Git and push code to GitHub (with a few bumps along the way 😅)

## 📁 Folder Structure
30-day-sprint/ └── week-1/ └── day-1/ ├── index.html └── style.css  ← coming on Day 2

# 🎨 Day 2: Profile Page with CSS Styling

This is my Day 2 project from the 30-Day Front-End Developer Sprint. I built a personal profile page using semantic HTML and styled it with external CSS.

## ✅ Features

- Clean layout with centered headings and links
- Custom fonts for headings and paragraphs
- Styled images with rounded corners and shadows
- Link hover effects with smooth transitions
- Bullet-free lists and centered navigation
- CSS variables for theme colors

## 📁 Files

- `index.html` — HTML structure of the profile page
- `style.css` — External stylesheet with all styling rules

## 🚀 Live Preview

Coming soon — stay tuned!

## 🛠️ What I Learned

- How to link external CSS
- How to use CSS variables for cleaner styling
- How to style text, images, and links
- How to push changes to GitHub using Git

---
Next up: **Day 3 — Flexbox Layouts!**

# 🟥 Day 3: Layouts — Flexbox & Git Mastery

Today’s Wins:
- 🎨 Built a responsive card layout using Flexbox
- 🖼️ Styled cards with gradients, shadows, and hover effects
- 📱 Added media queries for mobile responsiveness
- 🔀 Resolved a Git merge conflict between main and master
- 🧹 Cleaned up duplicate assets and organized image files
- 🚀 Successfully pushed Day 3 work to the main branch on GitHub
- ✅ Verified layout integrity and responsiveness in browser

Reflection:
Today wasn’t just about layout — it was a deep dive into real-world Git challenges. I learned how to merge branches, resolve conflicts, and keep my repo clean. The card layout now looks sharp and adapts beautifully across screen sizes. 

Feeling proud and ready for Day 4!

# 🟥 Day 4: Responsive Design

Today I focused on making my Flexbox card layout responsive across different screen sizes. I used media queries to adapt the layout for mobile, tablet, and desktop views.
Key updates:
- Added media queries for max-width: 600px and max-width: 768px to stack cards vertically and center them on smaller screens
- Added a min-width: 1200px media query to switch to a desktop layout using width: 30% for each card
- Preserved Flexbox behavior globally with flex: 3 1 250px on .card, which ensures cards grow and shrink smoothly across breakpoints
- Used max-width: 600px to prevent cards from stretching too wide
- Moved transition: transform 0.3s ease to the base .card class for consistent hover animation
- Fixed a typo in the HTML and cleaned up redundant CSS declarations
- Verified layout behavior using DevTools and device emulation

This was a deep dive into how Flexbox and media queries interact — and how combining flex-basis with percentage-based widths can give you precise control over layout across screen sizes.

# 📅 Day 5: JavaScript Basics & Calculator Project

## What I Learned
- JavaScript variables: `let`, `const`, `var`
- Data types and how to use `parseFloat()` and `isNaN()`
- Functions and how to trigger them with buttons
- How to build a calculator using HTML, CSS, and JavaScript
- Input validation using `.classList` and error styling
- Reset functionality
- Animated result display using CSS and JavaScript

## What I Built
✅ A working calculator with:
- Buttons for +, −, ×, ÷
- Input validation and red highlights
- Reset button
- Green flash animation for correct results
- Clean code and smart error handling

## Next Steps
- Add speech synthesis
- Add keyboard support
- Add history log

# 📅 Day 6: DOM Manipulation & History Log Upgrade

## 📚 What I Learned
- DOM selection with `document.querySelector` and `getElementById`
- Event handling using `addEventListener`
- Creating and appending elements dynamically with `createElement` and `appendChild`
- Managing DOM content with `removeChild` to limit history entries
- Formatting timestamps using `new Date().toLocaleTimeString()`
- Styling inputs, buttons, and layout with modern CSS
- Writing clean, readable commits and pushing updates to GitHub 🚀

## 🛠️ What I Built
✅ A polished calculator with:
- Dynamic history log that tracks the last 5 calculations 🧮  
- Timestamps for each entry 🕒  
- Clean layout and responsive styling 🎨  
- Error handling and visual feedback  
- GitHub commit with clear message and updated README 📄

## 🔜 Next Steps
- Add keyboard support ⌨️  
- Add speech synthesis 🗣️  
- Add dark mode toggle 🌙  
- Save history to `localStorage` for persistence 💾

# 🎮 Day 7: Landing Page Project – Pixel Power

### ✅ Accomplishments

- 🧱 Built a fully responsive landing page for **Pixel Power**, a retro gaming showcase
- 🧭 Structured the page with semantic HTML: header, hero section, featured games, and footer
- 🎨 Styled the page using custom CSS variables and the `Press Start 2P` pixel font
- 📐 Implemented Flexbox layout for responsive game cards and navigation
- ✨ Added hover effects, glowing borders, and animated transitions for visual polish
- 🌈 Created a glowing banner with CRT scanline overlay and flicker animation for retro vibes
- 🖼️ Centered key elements like images and buttons for clean layout
- 🕹️ Integrated interactive elements:
  - 🎵 Background music that loops and activates on user interaction
  - 🔊 Button-triggered sound effects
  - 🎮 "Browse Games" button that scrolls to game section and fades in content
- 🧠 Used JavaScript to control audio playback, scroll behavior, and dynamic styling
- 📁 Prepared for GitHub deployment with clean file structure and modular code

### 📚 Key Learnings

- 🧩 How to structure a landing page using semantic HTML
- 🧰 How to use Flexbox for responsive layouts and card grids
- 🎯 How to center elements using CSS (`margin: auto`, `text-align`, `display: block`)
- 🖌️ How to use CSS variables for consistent theming
- ⚡ How to trigger sound and animations with JavaScript event listeners
- 🚫 How to work around browser autoplay restrictions for audio
- 🧪 How to combine design and interactivity for immersive user experience

### 📌 Next Steps

- 🧨 Add a modal or dropdown (optional stretch goal)
- 📱 Polish mobile responsiveness with media queries
- 🚀 Push project to GitHub and write final README


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

# 🟧 Day 13: JavaScript Challenges — Combat, Inventory & Shop Systems

### 🎮 Achievements Unlocked

- ✅ Built a **combat engine** with health tracking and dynamic logs
- ✅ Created an **inventory system** with item pickup and terminal-style display
- ✅ Developed a **shop mechanic** with credit deduction and item acquisition
- ✅ Used arrays, objects, conditionals, and functions in real-world game logic
- ✅ Practiced modular design and clean function architecture
- ✅ Wrote expressive, readable code with cyberpunk flavor

---

### 🧠 Key Learnings

- **State mutation**: Updating object properties like health and credits
- **Array manipulation**: Using `.push()` and `.forEach()` to track items and display logs
- **Function composition**: Writing reusable, single-responsibility functions
- **Conditional logic**: Handling purchase validation and branching outcomes
- **Object modeling**: Structuring player and item data for scalability

---

### 🧪 Challenges Completed

1. `logCombatTurn()` — Combat log with health tracking
2. `addItem()` — Inventory pickup system
3. `showInventory()` — Terminal-style inventory display
4. `buyItem()` — Shop purchase logic with credit check
5. Bonus: Refactored `credits` handling using player object for clean state updates

---

### 🧩 Systems Built

- 🧠 Combat Engine  
- 📦 Inventory Tracker  
- 🛒 Shop System  
- 🧮 Credit Manager  
- 🧾 Dynamic Log Formatter  

---

### 🚀 Momentum Status


# 🟧 **Day 14 Summary: Mission Generator & Modular Thinking**

---

### 🎯 **Core Achievements**
- ✅ Built a **Cyberpunk Mission Terminal** with dynamic difficulty selection
- ✅ Implemented **radio buttons** for Easy, Medium, and Hard tiers
- ✅ Styled the UI with glowing neon effects and terminal aesthetics
- ✅ Refactored JavaScript to use **modular, scalable logic**
- ✅ Debugged object access using `missions[difficulty]` — now fully understood
- ✅ Explored how to pass dynamic data into functions for flexible reuse

---

### 🧠 **Key Learnings**
- 📦 **Object Access**  
  Learned how to use bracket notation (`object[key]`) to dynamically access properties

- 🔁 **Function Parameters**  
  Refactored `missionGenerator()` to accept mission arrays and difficulty labels

- 🧩 **Modular Design**  
  Began thinking in reusable components — a foundational skill for game systems

- 🧠 **Debugging Mindset**  
  Identified and corrected logic errors by asking the right questions

---

### 🕹️ **Game Component Tag**
- 🟣 Game Component: Quest generator UI and mission logic

This module is now game-ready and could evolve into:
- A **quest board** with mission history  
- A **difficulty selector panel**  
- A **persistent mission log** using localStorage  
- A **reward system** or branching quest tree

---


# 🟧 Day 15 summary: CSS Grid

## 📚 Learnings & Achievements

- ✅ Mastered **CSS Grid** for complex layouts
- ✅ Built a fully responsive **HUD-style dashboard**
- ✅ Applied **modular design principles** for scalability
- ✅ Implemented **neon glow effects** and animations
- ✅ Used **JavaScript** to create dynamic tabbed content
- ✅ Debugged layering and stacking contexts for visual polish
- ✅ Explored **radial gradients** and pseudo-elements for immersive backgrounds

---

## 🧬 Next Steps

- Add mission log component with dynamic entries
- Animate tab transitions and mission alerts
- Integrate sound effects or loading sequences
- Modularize components for game engine integration (e.g. Phaser)

---

> Built with grit, glow, and grid power ⚡  
> Part of the [30-Day Front-End Sprint](#) by Mikael

# ✅ Day 16: Transitions & Animations — Summary

### 🎯 Focus
Enhance UI interactivity and polish using CSS transitions, animations, and JavaScript-driven effects.

---

### 🧠 Learnings

- 🔹 **CSS Transitions**
  - Applied smooth hover effects to `.card`, `.tab`, and `.sidebar-nav li`
  - Explored `transition` properties for timing and easing

- 🔹 **CSS Animations**
  - Created custom `@keyframes` for `pulse`, `flicker`, and `fadeInUp`
  - Scoped animations to specific elements for entrance effects

- 🔹 **Animation Re-triggering**
  - Used `offsetWidth` to force reflow and replay tab animations on click

- 🔹 **JavaScript Event Handling**
  - Added a “Boost Signal” button using `addEventListener`
  - Dynamically revealed a hidden `<p>` element and logged to console

- 🔹 **Refactoring for Clean Code**
  - Replaced inline `onclick` with modern JS event binding
  - Improved semantic structure and separation of concerns

- 🔹 **Design Judgment**
  - Built and tested a loader animation
  - Removed it after evaluating its fit — intentional UX decision

---

### 🛠️ Achievements

- ✅ Implemented transitions and animations across dashboard components
- ✅ Debugged and re-triggered tab content animation
- ✅ Built and refactored “Boost Signal” button logic
- ✅ Explored loader animation and made a design call to remove it
- ✅ Reflected deeply on learning process and committed to active mastery
- ✅ Completed all Day 16 checklist items

---

### 🚀 Next Up: Day 17 — CSS Variables & Theme Architecture

Ready to refactor glow colors and build a scalable theme system using custom properties.
