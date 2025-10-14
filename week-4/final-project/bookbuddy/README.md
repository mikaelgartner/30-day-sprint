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