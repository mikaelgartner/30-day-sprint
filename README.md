# 🟧 Day 1: Semantic HTML Profile Page

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

# 🟧 Day 3: Layouts — Flexbox & Git Mastery

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

# 🟧 Day 4: Responsive Design

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

# 🟧 Day 5: JavaScript Basics & Calculator Project

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

# 🟧 Day 6: DOM Manipulation & History Log Upgrade

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



# 🟧 Day 11: Forms & Validation


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

# 🟧 Day 16: Transitions & Animations — Summary

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

# 🟨 Day 17: Learnings & Achievements

### 📘 What I Learned
- 🎨 How to define and use **CSS custom properties** (`--variable-name`) for colors, fonts, spacing, and transitions
- 🧠 The power of scoping variables inside `:root` for global control across components
- 🛠️ How to refactor existing styles to use variables for better maintainability and theme flexibility
- 🌗 How to implement a **light/dark theme toggle** using CSS variables
- 🔍 How to debug visual issues caused by overlapping layers (`body::before`) and gradients

### 🚀 What I Built
- 🧠 A fully themed **Neural Command Console dashboard** using CSS variables
- 📡 An interactive **“Boost Signal” feature** that updates the signal strength dynamically
- 💥 A glowing `.boosted` state with pulsing animation, scale transform, and neon border
- ⚡ A visual effect that feels like the signal is overclocked and surging with energy

### 🏁 Bonus Wins
- 🧪 Experimented with animation timing (`0.0001s`) to simulate a critical overload flicker
- 🔧 Used `!important` and `classList.add()` to override default styles and trigger visual upgrades
- 🎯 Created a system that can be expanded with cooldowns, warnings, or toggles later

> ✅ **Day 17 complete. Signal boosted. Dashboard alive.**


# 🟨 Day 18: Accessibility Basics — Learnings & Achievements

---

### 🧠 What I Learned

- 🔍 Accessibility is more than ARIA — it’s about inclusive design, structure, and empathy.
- 🎯 ARIA roles and labels help screen readers interpret purpose and relationships.
- ⌨️ Keyboard navigation is essential — `tabindex`, focus styles, and skip links matter.
- 🗣️ Screen readers rely on system language, voice settings, and semantic markup.
- 🧪 Lighthouse audits reveal hidden accessibility issues and quantify progress.
- 🎧 Auditory clarity is a real challenge — especially with mismatched language settings.

---

### 🏆 What I Achieved

- ✅ Implemented ARIA roles: `tab`, `tablist`, `tabpanel`, `status`, `complementary`, `banner`
- ✅ Enabled full keyboard navigation with `tabindex="0"` and visible neon focus styles
- ✅ Added a skip link for fast navigation to main content
- ✅ Used `aria-live="polite"` for non-disruptive dynamic updates
- ✅ Ran a Lighthouse audit and scored **94/100** in Accessibility
- ✅ Tested with NVDA screen reader and confirmed tab flow and announcements
- ✅ Reflected on real-world usability for users with auditory impairments
- ✅ Styled accessibility features to match the dashboard’s cyberpunk theme

---

### 🌟 Bonus Wins

- 💡 Thought critically about screen reader pronunciation and language mismatches
- 🧘 Recognized cognitive load and designed with empathy
- 🧠 Internalized accessibility as a mindset, not just a checklist

---

# 🧠 Day 19 Portfolio Planning and Execution: Learnings & Achievements

- 🧩 Sketched wireframe and defined layout structure for portfolio site
- 🎨 Selected a clean, professional color palette and font pairing
- 🔗 Linked Google Fonts and scoped CSS variables in `style.css`
- 🧾 Created `README.md` to track sprint learnings and achievements
- 🧠 Reflected on design tone and adjusted visual theme to suit professional goals
- 🧱 Scaffolded `index.html` with semantic structure and planned section content
- ✅ Prepared for build phase with organized folder and planning notes

---

## 📌 Sprint Status  
- ✅ Wireframe sketched and saved  
- ✅ HTML scaffold complete  
- ✅ Fonts and color scheme chosen and scoped  
- ✅ Planning notes and `README.md` created  
- 🔜 Ready to begin build phase on **Day 20**


# ✨ Day 20: Portfolio Execution: Learnings & Achievements

## 🧠 What I Learned
- 🧩 How to structure a professional homepage using semantic HTML (`<header>`, `<section>`, `<footer>`)
- 🎨 How to apply scoped CSS variables for consistent color, typography, and spacing
- 📐 How to use Flexbox to center and align content in the hero section
- 🧱 How to build and style reusable components like `.project-card` and `.cta-button`
- 📝 How to create and validate a contact form using HTML5 and JavaScript
- 🚨 How to display custom error messages and success alerts for form submissions

## 🛠️ What I Built
- 🏠 A fully scaffolded homepage with sections for Hero, About, Projects, and Contact
- 💡 Styled header and hero section with responsive layout and call-to-action button
- 📦 Project cards with titles, descriptions, and placeholder images
- 📬 A contact form with labeled input fields, styled layout, and client-side validation
- ✅ Error handling and feedback using JavaScript and accessible markup

## 🚀 Bonus Wins
- 🔍 Used semantic tags and scoped styles for clean, maintainable code  
- 📧 Added a regex pattern for email validation  
- 🎉 Included a success alert to confirm form submission  
- 🧑‍💻 Maintained consistent design language across all sections

---

# 🟨 Day 21: Portfolio Build Day 2 — Learnings & Achievements

## 🚀 What I Built
- 🧱 Added **About**, **Projects**, and **Contact** sections to my portfolio page
- 🎨 Styled each section with a consistent theme using CSS variables and semantic structure
- 📱 Made the layout **responsive** with media queries for mobile and tablet views
- 📸 Included screenshots and alt text for each project to enhance accessibility
- 🔗 Linked to GitHub, LinkedIn, and Email for easy contact

---

## 🧠 What I Learned
- ✅ How to structure a multi-section portfolio using semantic HTML
- 🎯 How to apply consistent styling across components using CSS variables
- 📐 How to scope responsive styles properly inside media queries
- 🧪 How to test layout across screen sizes and refine spacing for mobile
- 🧵 How to maintain design cohesion across About, Projects, and Contact sections

---

## 🏆 Achievements Unlocked
- 🌟 Built a fully responsive and interactive portfolio page
- 🔍 Passed accessibility checks with descriptive alt text and ARIA labels
- 💬 Created a contact form with real-time validation and custom alert messaging
- 📁 Organized code and assets cleanly for future updates
- 🚢 Ready to push final version to GitHub and write a polished `README.md`

---

# 🟩 Day 22: Portfolio Day 3: Portfolio Polish - Learnings & Achievements

## ✅ Achievements
- Refined layout and design for visual consistency across all sections
- Implemented smooth animations and transitions for interactive polish
- Verified full responsiveness across desktop, tablet, and mobile devices
- Added favicon and comprehensive meta tags for SEO and social sharing
- Finalized a professional `README.md` with tech stack, features, setup instructions, and author credit
- Prepared for GitHub deployment with all assets and polish complete

## 🧠 Learnings
- How to use CSS transitions and keyframes to enhance user experience
- Importance of semantic structure and accessibility in portfolio presentation
- How meta tags and Open Graph properties improve discoverability and link previews
- Best practices for writing a clear, informative `README.md` that reflects your skills and personality
- How to audit and polish a project with a critical eye for detail and consistency

---

# 📦 Day 23: Git & Deployment — Learnings & Achievements

- 🚀 Deployed the portfolio using GitHub Pages and verified live functionality  
- 🧪 Ran a full Lighthouse audit and diagnosed contrast issues  
- 🎨 Refactored CSS variables for improved contrast and readability  
- 💯 Achieved a perfect **100/100** score across all Lighthouse categories:  
  - ⚡ Performance  
  - ♿ Accessibility  
  - ✅ Best Practices  
  - 🔍 SEO  
- 🧼 Maintained clean Git workflow with structured commits  
- 🧠 Demonstrated strong debugging, testing, and iterative refinement skills  
- 💡 Showed thoughtful design thinking and empathy for user experience

---

## 🚀 Live Site

[Visit the Portfolio](https://mikaelgartner.github.io/portfolio/)

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure, accessibility
- **CSS3** — Flexbox, Grid, media queries, animations
- **JavaScript** — DOM manipulation, events, local storage
- **Git & GitHub** — version control and deployment

---

## ✨ Features

- Responsive layout across desktop, tablet, and mobile
- Smooth animations and transitions for polish
- SEO-optimized meta tags and social sharing previews
- Accessible markup with ARIA labels and keyboard navigation
- Clean, modular code structure

---

# ✅ Day 24: Learnings & Achievements – API Integration

## 🔍 What I Built
- Created **BookBuddy**, a book search app powered by the Open Library API  
- Users can search for books by title and view results with cover, author, and publish year  
- Displayed top 10 results dynamically using JavaScript and Flexbox layout  

## 🧠 What I Learned
- How to use the **Fetch API** to retrieve data from a public endpoint  
- How to handle **loading states**, **errors**, and **missing data** gracefully  
- How to dynamically generate HTML content using `.map()` and `.join()`  
- How to style responsive card layouts with **Flexbox**, hover effects, and shadows  

## 🎨 Styling Highlights
- Responsive `.book-card` layout with hover scaling and glowing shadows  
- Clean search bar alignment using Flexbox  
- Conditional rendering for missing cover images  

## 🛠️ Tech Stack
- HTML5  
- CSS3 (Flexbox, transitions, responsive design)  
- JavaScript (DOM manipulation, async/await, error handling)  
- Open Library API  

## 🚀 Next Steps (Optional)
- Add favorites with `localStorage`  
- Create a book detail view with subjects and description  
- Add a “Book of the Day” feature

---

# ✅ Day 25: Learnings & Achievements — Final Project Planning

---

### 🎯 Focus of the Day
**Strategic planning and wireframing for BookBuddy**, your final project. Today was all about laying a solid foundation before diving into code.

---

### 🧠 Key Learnings
- **Modal vs Page Navigation**: Learned why modals are ideal for quick detail views without disrupting user flow.
- **Header Layout Best Practices**: Explored horizontal nav alignment for a modern, space-efficient design.
- **Modal Sizing & UX**: Understood how modal dimensions affect usability and how to design within realistic constraints.
- **Wireframing with Purpose**: Practiced translating layout ideas into visual sketches that guide implementation.

---

### 🛠️ Achievements
- 🗂️ Created a clean folder structure for BookBuddy
- 🔄 Migrated previous project files into the new setup
- ✏️ Sketched homepage wireframe with updated header layout
- 🧩 Designed Book Detail Modal with thoughtful content hierarchy
- 💬 Iterated layout decisions through discussion and visual reasoning
- 📋 Documented next steps and feature roadmap

---


# ✅ Day 26: Learnings & Achievements – Feature Expansion & Modal System

## 🔍 What I Built
- Implemented `fetchBooksOfTheDay()` and `fetchTopRatedBooks()` using Open Library subject endpoints  
- Rendered dynamic book cards with cover, title, author, and publish year  
- Created a responsive book detail modal with dynamic content injection  
- Structured modal layout using Flexbox for side-by-side image and metadata

## 🧠 What I Learned
- How to parse Open Library’s subject-based data and handle missing fields  
- How to safely escape JSON for inline `onclick` handlers  
- How to structure modal HTML for clean Flexbox alignment  
- How to standardize metadata display using consistent paragraph formatting

## 🎨 Styling Highlights
- Side-by-side modal layout with image and metadata  
- Responsive modal design with fallback for small screens  
- Unified metadata styling using `<p><strong>Label:</strong> Value</p>` format

## 🚀 Next Steps
- Add subjects and descriptions from `/works/{id}.json`  
- Refactor inline `onclick` to use `addEventListener`  
- Implement favorites with `localStorage`  
- Add accessibility features (ARIA roles, keyboard navigation)

---

# ✅ Day 27: Learnings & Achievements – UX Feedback & Favorites System

## 🔍 What I Built
- Filtered `localStorage` keys to only show saved books (`/works/`)
- Added visual feedback to “Add to Favorites” button using `.saved` class
- Implemented floating toast notifications for saving and removing favorites
- Anchored toast inside modal and bookshelf for focused UX
- Refactored `removeFavorite()` to delay reload and show toast

## 🧠 What I Learned
- How to filter `localStorage` keys for scoped data
- How to style buttons dynamically with class toggling
- How to create reusable toast notifications with fade-in/out
- How to anchor feedback elements near user focus for better UX

## 🎨 Styling Highlights
- `.saved` button class with green background and white text
- Toast positioned inside modal and bookshelf with smooth transitions
- Unified toast styling for save/remove actions

## 🚀 Next Steps
- Add “Clear All Favorites” button
- Consider search/filter options for bookshelf
- Final polish: animations, accessibility, responsiveness

---

# ✅ Day 28: Learnings & Achievements – Theme System & Page Expansion

## 🔍 What I Built
- Refactored `style.css` to use semantic CSS variables for theme control
- Implemented light/dark mode toggle using `localStorage` and body class switching
- Prevented theme flicker by placing theme script at top of `<head>`
- Scoped dark mode overrides for key variables (`--bg-color`, `--text-color`, `--accent-color`, etc.)
- Ensured consistent theme behavior across all pages (`index.html`, `bookshelf.html`, `about.html`, `settings.html`)
- Added two new pages: `about.html` and `settings.html`
- Styled toast notifications and buttons to follow theme logic

## 🧠 What I Learned
- How to structure CSS variables for semantic clarity and scalability
- How to prevent layout flicker by applying theme early in the render cycle
- How to override variables contextually using `body.dark`
- How to ensure consistent styling across multiple pages with shared logic

## 🎨 Styling Highlights
- Semantic variables like `--header-footer-bg`, `--divider-color`, and `--accent-card-hover`
- Theme toggle styled with slider and dynamic background
- Toast and button styles refactored to follow theme variables
- Cleaned up hardcoded colors for better maintainability

## 🚀 Next Steps
- Customize toast colors for dark mode
- Refactor button styles into reusable `.btn` class
- Bundle theme logic into a shared `theme.js` file
- Final polish: transitions, accessibility, responsiveness

---

# ✅ Day 29: Learnings & Achievements – Accessibility & UX Polish

## 🔍 What I Built
- Added ARIA roles to modal (`role="dialog"`, `aria-labelledby`) for screen reader support
- Labeled search input with hidden `<label>` and `aria-label` for accessibility
- Enabled keyboard navigation: Escape key closes modal, focus set on open
- Verified toast notifications use `aria-live="polite"` for screen reader announcements
- Reorganized global event listeners for clarity and performance
- Enhanced CSS transitions and animations:
  - Fade-in effects for search results and modals
  - Smooth hover transitions on book cards and buttons
  - Responsive layout polish across mobile and desktop

## 🧠 What I Learned
- How to use ARIA roles and labels to improve accessibility
- How to manage focus for keyboard users inside modals
- How to structure event listeners for clean, maintainable logic
- How to use transitions and animations to enhance UX without overwhelming it

## 🎨 Styling Highlights
- Refined modal fade-in and backdrop transitions
- Added hover effects with subtle scaling and color shifts
- Improved layout responsiveness and spacing consistency
- Verified theme compatibility across animations and interactive elements

## 🚀 Next Steps
- Write Day 30 reflection and showcase summary
- Add final screenshots or demo link to `README.md`
- Celebrate completion of the 30-day sprint 🎉

---

# ✅ Day 30: Learnings & Achievements – Sprint Completion & Reflection

## 🔍 What I Built
- Created a reflective summary highlighting key learnings and growth during the sprint  
- Celebrated the successful completion of the 30-day sprint journey 🎉  
- The work continues on the BookBuddy application

## 🧠 What I Learned
- How consistent daily practice accelerates skill acquisition and confidence  
- The importance of accessibility and UX polish in real-world projects  
- How to manage project scope and prioritize features effectively  
- The value of reflection and documentation in solidifying learning and showcasing progress  

## 🎨 Styling Highlights
- Finalized responsive design and polished animations for a smooth user experience  
- Ensured theme consistency and accessibility across all components  
- Enhanced visual feedback with toast notifications and modal transitions  

## 🚀 Next Steps
- Continue enhancing BookBuddy with new features and improvements  
- Start new projects to diversify skills and portfolio  
- Prepare for technical interviews with coding challenges and system design practice  
- Share your journey and projects with developer communities and mentors

---

# ✅ Day 31: Learnings & Achievements – Beyond the Sprint & Continuing Growth

## 🔍 What I Built  
- Implemented a smooth Back to Top button for improved navigation on long pages  
- Enhanced user experience with responsive UI feedback and accessibility considerations  
- Continued refining BookBuddy features and UI polish  

## 🧠 What I Learned  
- The importance of maintaining momentum after a structured sprint  
- How to set realistic, motivating goals for continuous growth  
- The value of reflection in planning future development  

## 🎨 Styling Highlights  
- Integrated the new section seamlessly with existing page style  
- Used consistent formatting and tone to maintain page cohesion  

## 🚀 Next Steps  
- Begin implementing new features in BookBuddy and other projects  
- Explore new technologies and frameworks  
- Engage with developer communities for feedback and collaboration  
- Keep documenting progress and reflections beyond the sprint

---

# ✅ Day 32: Learnings & Achievements – Resilience, Modularity & Real-World Debugging

## 🔍 What I Built
- Refactored scroll-to-top functionality into a modular `utils.js` for clean reuse across pages  
- Successfully integrated the scroll button into `bookshelf.html` and `about.html` with dynamic visibility and smooth UX  
- Implemented sorting of bookshelf favorites by **title**, **author**, and **date added**, enhancing usability and control  
- Strengthened BookBuddy’s architecture by isolating page-specific logic and preventing cross-page script errors  

## 🧠 What I Learned
- How shared scripts can cause DOM errors if not scoped properly  
- The importance of `DOMContentLoaded` and null checks when working across multiple HTML pages  
- That even stable APIs like OpenLibrary can change behavior unexpectedly — and how to adapt when they do  

## 🎨 Styling Highlights
- Maintained visual consistency for the scroll button across pages  
- Ensured accessibility with clear labels and responsive behavior  
- Preserved modularity without compromising design cohesion  

## 🚀 Next Steps
- Monitor OpenLibrary’s API behavior and prepare fallback strategies (proxy, caching, or backend)  
- Continue refining BookBuddy’s sorting and UX features  
- Explore lightweight backend options to bypass CORS limitations  
- Keep documenting technical decisions and architectural improvements

---

# 📘 Day 33 – Learnings & Achievements

## ✅ Learnings

- **Modal layout alignment**
  - Used `flexbox`, `object-fit`, and `height: 100%` to align book cover with content column.
  - Discovered how `align-items: stretch` vs `flex-start` affects vertical alignment.

- **Scoped styling**
  - Learned to isolate styles using unique IDs or classes (e.g. `#bookshelf-modal-close-button`) to avoid global conflicts.
  - Preserved functionality by keeping shared classes while customizing appearance.

- **Debugging localStorage**
  - Identified why review saving failed: missing `_key` in saved book object.
  - Learned to store the key inside the book object to ensure consistent retrieval.

- **Functional vs visual separation**
  - Maintained behavior with shared class (`close-button`) while styling with a unique ID.
  - Reinforced modular design principles for scalable UI components.

- **Console-driven troubleshooting**
  - Used browser dev tools to trace warnings and verify data flow.
  - Validated form behavior and localStorage updates with targeted logging.

---

## 🛠️ Achievements

- 🎯 Aligned modal layout for visual harmony between image and content
- 🧾 Anchored book title flush with top of content container
- ❌ Replaced oversized “Close” button with a minimal × icon
- 🧩 Scoped close button styling without breaking modal functionality
- 🛠️ Debugged and fixed review form saving logic
- 💾 Ensured reviews persist in localStorage with correct key mapping
- 🧼 Improved modularity and maintainability across modal components

---
