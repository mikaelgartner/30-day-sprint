# 📚 BookBuddy Final Project Notes

## 🎯 Project Vision
BookBuddy is evolving from a simple book search tool into a full-featured, responsive, and accessible reading companion. The goal is to create a user-friendly interface for discovering, saving, and exploring books using the Open Library API.

---

## 🛠️ Planned Features

### 1. Favorites & Local Storage
- Users can "star" books to save them to a personal bookshelf
- Favorites persist across sessions using `localStorage`
- Add a “My Bookshelf” tab or section to view saved books

### 2. Book Detail View
- Clicking a book opens a modal or detail page
- Includes description, subjects, author bio, and publish history

### 3. Search Filters
- Filter results by author, year, language, or format
- Add dropdowns or checkboxes for intuitive filtering

### 4. Responsive Design Polish
- Mobile-first layout with smooth transitions
- Hover effects, spacing, and typography refinements

### 5. "Book of the Day" Feature
- Randomly fetch and display a featured book on page load
- Include a refresh button to cycle through new picks

### 6. Accessibility & UX Enhancements
- ARIA labels and semantic HTML
- Keyboard navigation and focus states
- Loading indicators and error messages

---

## 🌱 Stretch Ideas (Time Permitting)
- Pagination or Infinite Scroll for large result sets
- Theme Toggle (light/dark mode)
- Shareable Book Links with query parameters
- Offline Mode for viewing saved favorites without API calls
- User Notes: Let users add personal notes to saved books

---

## 🧭 Roadmap

### Day 25–26
- Wireframes, layout setup, and modular JS structure

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

## 📅 Day 26 Progress – BookBuddy Final Project

### ✅ Features Completed
- Implemented `fetchBooksOfTheDay()` using Open Library subject endpoint
- Implemented `fetchTopRatedBooks()` with dynamic rendering
- Built reusable book card component with cover, title, author, and publish year
- Created book detail modal with dynamic content injection
- Structured modal layout using Flexbox for side-by-side image and metadata
- Standardized metadata formatting for title, author, and publish year

### 🐛 Bugs Fixed
- Corrected `.modal.hidden` class mismatch
- Fixed malformed `<img>` tag in modal
- Resolved layout wrapping issue by restructuring modal HTML

### 🧠 Technical Notes
- Used `book.cover_i || book.cover_id` to support multiple data formats
- Escaped JSON safely for inline `onclick` handlers
- Structured modal HTML with sibling `<img>` and `.modal-body` for Flexbox alignment

### 🔜 Next Steps
- Fetch subjects and description from `/works/{id}.json`
- Refactor inline `onclick` to use `addEventListener`
- Implement favorites with `localStorage`
- Add accessibility features (ARIA roles, keyboard navigation)

---

### 📅 Day 27 Progress — BookBuddy Final Project

**Achievements:**
- Filtered `localStorage` keys to only show saved books (`/works/`)
- Added visual feedback to “Add to Favorites” button using `.saved` class
- Implemented floating toast notifications for saving and removing favorites
- Anchored toast inside modal and bookshelf for focused UX
- Refactored `removeFavorite()` to delay reload and show toast
- Confirmed consistent styling and behavior across pages

**Reflections:**
- Small UX touches (like toasts and button feedback) make a big difference
- Anchoring feedback near user focus improves clarity and trust
- Code is modular and ready for polish or expansion

**Next Steps:**
- Add “Clear All Favorites” button
- Consider search/filter options for bookshelf
- Final polish: animations, accessibility, responsiveness

---

### 📅 Day 28 Progress — BookBuddy Final Project

**Achievements:**
- Refactored `style.css` to use semantic CSS variables for theme control
- Implemented light/dark mode toggle using `localStorage` and `body` class switching
- Prevented theme flicker by placing theme script at top of `<head>`
- Scoped dark mode overrides for `--bg-color`, `--text-color`, `--accent-color`, and related variables
- Ensured consistent theme behavior across all pages (`index.html`, `bookshelf.html`, `about.html`, `settings.html`)
- Styled toast notifications and buttons to follow theme logic
- Cleaned up hardcoded colors and improved variable naming clarity
- Added two new pages: `about.html` and `settings.html`

**Reflections:**
- Semantic variables improve clarity and scalability, but require careful naming and documentation
- Placing theme logic early in the `<head>` prevents layout flicker and improves UX
- Adding new pages helped clarify the app’s structure and user flow
- Theme consistency across pages feels like a major milestone

**Next Steps:**
- Customize toast colors for dark mode
- Refactor button styles into reusable `.btn` class
- Consider bundling theme logic into a shared `theme.js` file
- Final polish: transitions, accessibility, responsiveness

---

### 📅 Day 29 Progress — BookBuddy Final Project

**Achievements:**
- Refined modal accessibility with `role="dialog"` and `aria-labelledby`
- Added keyboard support: Escape key closes modal, focus set on open
- Improved search input with hidden label and `aria-label`
- Verified button accessibility and toast announcements with `aria-live`
- Reorganized global event listeners for clarity and performance
- Enhanced CSS transitions and animations:
  - Fade-in effects for search results and modals
  - Smooth hover transitions on book cards and buttons
  - Responsive layout polish for mobile and desktop
- Finalized `README.md` with accessibility features and setup instructions
- Updated `final-project-notes.md` to reflect UX and accessibility work

**Reflections:**
- Accessibility improvements made BookBuddy feel more inclusive and professional
- Focus management and Escape key support added real keyboard usability
- CSS animations now feel smooth and intentional, not distracting
- Today’s polish work tied together visual design, UX, and performance

**Next Steps:**
- Additional polish and testing across different devices
- Write Day 30 reflection and showcase summary
- Add final screenshots or demo link to `README.md`
- Celebrate completion of the 30-day sprint 🎉

### Day 30
- Final testing, README, and deployment
