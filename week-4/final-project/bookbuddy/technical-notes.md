# 🧠 BookBuddy Technical Notes

## Favorites Feature
- Store favorite books in `localStorage` as an array of book objects
- Use `book.key` as a unique identifier for each book
- On page load, check for existing favorites and render them in a “My Bookshelf” section
- Add a “Save to Favorites” button to each book card
- Create `favorites.js` module to handle:
  - Adding/removing books from favorites
  - Rendering the favorites list
  - Syncing with `localStorage`

## Book Detail View
- Clicking a book card opens a modal with detailed info
- Fetch additional data from Open Library’s `/works/{work_id}.json` endpoint
- Display:
  - Book description
  - Subjects/genres
  - Author name and bio (if available)
  - First publish year
- Create `modal.js` to handle:
  - Modal open/close logic
  - Keyboard accessibility (ESC to close, focus trap)
  - Dynamic content injection

## Search Filters
- Add dropdowns or checkboxes for:
  - Author
  - Year
  - Language
  - Format (e.g., eBook, print)
- Filter results client-side after initial fetch
- Consider debounce for text input fields to reduce API calls
- Create `filters.js` to manage:
  - Filter state
  - DOM updates
  - Integration with search results

## Responsive Design
- Use Flexbox/Grid for layout
- Add media queries for breakpoints (mobile, tablet, desktop)
- Ensure book cards and modals scale gracefully
- Test responsiveness using DevTools device simulator
- Add transitions for hover/focus states

## Book of the Day
- On page load, fetch a random book from a curated list or random Open Library endpoint
- Display in a prominent “hero” section
- Include a “New Book” button to fetch another random book
- Consider caching the book of the day in `localStorage` to avoid repeat fetches

## Accessibility & UX Enhancements
- Use semantic HTML (`<main>`, `<section>`, `<button>`, etc.)
- Add ARIA labels to interactive elements
- Ensure all buttons and links are keyboard-navigable
- Use `tabindex`, `aria-expanded`, `aria-label`, etc. where appropriate
- Add loading indicators and error messages for fetch failures
- Run Lighthouse audits to identify accessibility issues
