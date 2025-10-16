# BookBuddy – Book Search App

## 🔍 Overview
BookBuddy is a simple book search app powered by the Open Library API. Users can search for books by title and view results with cover images, author names, and publish years.

## 🛠️ Tech Stack
- HTML5
- CSS3 (Flexbox, responsive design)
- JavaScript (DOM manipulation, async/await)
- Open Library API

## 🎨 Features
- Search for books by title
- Display top 10 results with cover, author, and year
- Responsive card layout with hover effects
- Graceful error handling and loading state

## 🚀 Future Ideas
- Save favorite books with `localStorage`
- Add book detail view with subjects and description
- “Book of the Day” randomizer

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