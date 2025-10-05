# 🧠 Neural Command Console — Cyberpunk Dashboard UI

A modular, responsive HUD-style dashboard built with CSS Grid and glowing cyberpunk aesthetics. Designed as part of a 30-day front-end sprint, this interface simulates a mission terminal for a futuristic game environment.

---

## 🎯 Purpose

To create a **game-ready dashboard UI** that showcases advanced layout techniques, responsive design, and immersive styling. This project serves as a foundation for future components like mission logs, inventory systems, and hacking interfaces.

---

## 🚀 Features

- 🧩 **Modular Grid Layout** — Header, sidebar, and main content areas
- 🧠 **Stat Cards** — Display metrics like Neural Sync, Cred Balance, and Signal Strength
- 🕵️‍♂️ **Mission Terminal UI** — Tabbed interface with dynamic mission alerts
- 🌌 **Cyberpunk Styling** — Neon glow, dark theme, flicker and pulse animations
- 📱 **Responsive Design** — Mobile-friendly layout with smart reordering
- 🎛️ **Interactive Tabs** — JavaScript-powered content switching
- 🛰️ **Sidebar Navigation** — Glowing nav items with hover effects

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and layout |
| **CSS Grid** | Responsive dashboard layout |
| **CSS Animations** | Flicker, pulse, and hover transitions |
| **JavaScript (Vanilla)** | Tab switching and interactivity |
| **Orbitron Font** | Futuristic typeface for cyberpunk vibe |

---

# 🟨 Day 15: CSS Grid

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


# 🟨 Day 16: Transitions & Animations — Summary

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


## 🟨 Day 18: Accessibility Basics — Learnings & Achievements

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