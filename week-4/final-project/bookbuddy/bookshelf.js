document.addEventListener("DOMContentLoaded", () => {
  const bookshelf = document.getElementById("bookshelf");

  const keys = Object.keys(localStorage).filter(key => key.startsWith("/works/"));

  if (keys.length === 0) {
    bookshelf.innerHTML = "<p>No favorites saved yet.</p>";
    return;
  }

  const bookCards = keys.map(key => {
    const book = JSON.parse(localStorage.getItem(key));
    const title = book.title || "No title available";
    const author = book.authors?.[0]?.name || book.author_name?.join(", ") || "Unknown author";
    const year = book.first_publish_year || "N/A";
    const coverId = book.cover_i || book.cover_id;
    const cover = coverId
      ? `<img src="https://covers.openlibrary.org/b/id/${coverId}-M.jpg" alt="Book cover">`
      : "<p>No cover image</p>";

    return `
      <div class="book-card">
        ${cover}
        <h3>${title}</h3>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>First published:</strong> ${year}</p>
        <button onclick="removeFavorite('${key}')">Remove</button>
      </div>
    `;
  });

  bookshelf.innerHTML = bookCards.join("");
});

function removeFavorite(key) {
  localStorage.removeItem(key);
  showToast("Book removed from Bookshelf ❌");
  setTimeout(() => {
    location.reload();
  }, 1500);
}

function showToast(message = "Book was successfully added to Bookshelf ✅") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 2000);
}