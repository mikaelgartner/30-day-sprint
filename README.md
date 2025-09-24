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

## 🎮 Day 7: Landing Page Project – Pixel Power

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
