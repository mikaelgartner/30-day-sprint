function removeFavorite(key) {
  localStorage.removeItem(key);
  showToast("Removed from your Bookshelf ❌");
  setTimeout(() => {
    location.reload();
  }, 1500);
}

function showToast(message = "Added to your Bookshelf ✅") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 1500);
}

document.addEventListener("DOMContentLoaded", () => {
  const bookshelf = document.getElementById("bookshelf");
  const sortButtons = document.querySelectorAll(".segmented-control button");
  const sortDirectionBtn = document.getElementById("sort-direction");
  let isAscending = true;

  let books = [];

  // Load books from localStorage
  function loadBooks() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith("/works/"));
    books = keys.map(key => {
      const book = JSON.parse(localStorage.getItem(key));
      return {
        ...book,
        _key: key,
        _savedAt: book.savedAt || Date.now() // fallback if not tracked
      };
    });

    renderBooks(books);
  }

  // Render books to DOM
  function renderBooks(bookList) {
    if (bookList.length === 0) {
      bookshelf.innerHTML = "<p>No favorites saved yet.</p>";
      return;
    }

    const bookCards = bookList.map(book => {
      const title = book.title || "No title available";
      const author = book.authors?.[0]?.name || book.author_name?.join(", ") || "Unknown author";
      const year = book.first_publish_year || "N/A";
      const coverId = book.cover_i || book.cover_id;
      const cover = coverId
        ? `<img src="https://covers.openlibrary.org/b/id/${coverId}-M.jpg" alt="Book cover">`
        : "<p>No cover image</p>";

      return `
        <div class="book-card" data-key="${book._key}">
          ${cover}
          <h3>${title}</h3>
          <p><strong>Author:</strong> ${author}</p>
          <p><strong>First published:</strong> ${year}</p>
          <p><strong>Your Rating:</strong> ${book.rating ? `${book.rating} ★` : "Not rated"}</p>
          <p><strong>Your Review:</strong> ${book.review || "No review yet"}</p>
          <button onclick="removeFavorite('${book._key}'); event.stopPropagation();" style="display: block; margin: 0 auto; text-align: center;">Remove</button>
        </div>
      `;
    });

    bookshelf.innerHTML = bookCards.join("");
  }

  // Sort books based on selected criteria
  function sortBooks(criteria) {
  const sorted = [...books].sort((a, b) => {
    let result = 0;

    if (criteria === "title") {
      result = a.title.localeCompare(b.title);
    } else if (criteria === "author") {
      const authorA = a.authors?.[0]?.name || a.author_name?.[0] || "";
      const authorB = b.authors?.[0]?.name || b.author_name?.[0] || "";
      result = authorA.localeCompare(authorB);
    } else if (criteria === "date") {
      result = a._savedAt - b._savedAt;
    }

    return isAscending ? result : -result;
  });

  renderBooks(sorted);
}

  // Handle segmented control clicks
  sortButtons.forEach(button => {
    button.addEventListener("click", () => {
      sortButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const label = button.textContent.trim().toLowerCase();
      const criteria = label === "date added" ? "date" : label;
      sortBooks(criteria);
    });
  });

  // Handle sort direction toggle
  sortDirectionBtn.addEventListener("click", () => {
    isAscending = !isAscending;
    sortDirectionBtn.textContent = isAscending ? "↑" : "↓";

    const active = document.querySelector(".segmented-control .active");
    const criteria = active.textContent.trim().toLowerCase();
    sortBooks(criteria === "date added" ? "date" : criteria);
  });

  loadBooks();

  document.getElementById("bookshelf").addEventListener("click", e => {
  const card = e.target.closest(".book-card");
  if (!card) return;

  const key = card.dataset.key;
  const book = JSON.parse(localStorage.getItem(key));
  showBookModal(book, true);
});


});
