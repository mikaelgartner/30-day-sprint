// Function to search books by title using Open Library API
async function searchBooks() {
    const query = document.getElementById("search").value;
    const wrapper = document.getElementById("results-wrapper")
    const heading = document.getElementById("results-heading");
    const resultsContainer = document.getElementById("results");

    if (!query) {
      resultsContainer.innerHTML = "";
      wrapper.classList.add("hidden");
      return;
    }

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!data.docs.length) {
        resultsContainer.innerHTML = "<p>No book results found with that title.</p>";
        return;
      }

      const topBooks = data.docs.slice(0, 10); // Get top 10 results if available

      const bookCards = topBooks.map(book => {
        const title = book.title || 'No title available';
        const author = book.author_name ? book.author_name.join(', ') : 'Unknown author';
        const year = book.first_publish_year || 'N/A';
        const cover = book.cover_i 
        ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="Book cover">`
        : '<p>No cover image available</p>';
        return `
          <div class="book-card" onclick='showBookModal(${JSON.stringify(book).replace(/'/g, "&apos;")})'>
            <h3>${title}</h3>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>First published:</strong> ${year}</p>
            ${cover}
          </div>
          `;
      });

      resultsContainer.innerHTML = bookCards.join('');

      heading.textContent = `🔍  Search Results: "${query}"  🔍`;
      wrapper.classList.remove("hidden");
      wrapper.classList.add("fade-in");

      // Optional: remove the class after animation
      setTimeout(() => {
      wrapper.classList.remove("fade-in");
    }, 500);

    } catch (error) {
      resultsContainer.innerHTML = "<p>Error fetching book data. Please try again later.</p>";
      console.error("Error fetching book data:", error);
    }
}

// Fetch and display 3 Books of the Day from multiple popular subjects
async function fetchBooksOfTheDay() {
  const container = document.getElementById("books-of-the-day");
  if (!container) return; // Prevent error on pages without this section

  container.innerHTML = "<p>Loading Books of the Day...</p>";

  try {
    const subjects = [
      "fantasy",
      "science_fiction",
      "young_adult"
    ]

    const fetches = subjects.map(subject => fetch(`https://openlibrary.org/subjects/${subject}.json?limit=20}`).then(res => res.json())
    );

    const results = await Promise.all(fetches);
    const allBooks = results.flatMap(data => data.works);

    const validBooks = [];
    for (const book of allBooks) {
      if (book.title && book.authors?.[0]?.name && book.cover_id) {
        validBooks.push(book);
      }
      if (validBooks.length === 3) break;
    }

    const bookCards = validBooks.map(book => {
      const title = book.title;
      const author = book.authors?.[0]?.name;
      const cover = `<img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg" alt="Book cover">`;
      
      return `
        <div class="book-card" onclick='showBookModal(${JSON.stringify(book).replace(/'/g, "&apos;")})'>
          ${cover}
          <h3>${title}</h3>
          <p><strong>Author:</strong> ${author}</p>
        </div>
      `;
    });

    container.innerHTML = bookCards.join("");

  } catch (error) {
    container.innerHTML = "<p>Error loading Books of the Day. Please try again later.</p>";
    console.error("Error fetching Books of the Day.", error);
  }
}


// Fetch and display 10 top rated books from multiple popular subjects
async function fetchTopRatedBooks() {
  const container = document.getElementById("top-rated-books");
  if (!container) return; // Prevent error on pages without this section

  container.innerHTML = "<p>Loading top-rated books...</p>";

  try {
    const subjects = [
      "award_winners",
      "popular",
      "fantasy",
      "science_fiction",
      "young_adult"
    ];

    const fetches = subjects.map(subject => fetch(`https://openlibrary.org/subjects/${subject}.json?limit=20`).then(res => res.json()));

    const results = await Promise.all(fetches);
    const allBooks = results.flatMap(data => data.works);
    
    const validBooks = [];
    for (const book of allBooks) {
      if (book.title && book.authors?.[0]?.name && book.cover_id) {
        validBooks.push(book);
      }
      if (validBooks.length === 10) break;
    }

    const bookCards = validBooks.map(book => {
      const title = book.title;
      const author = book.authors?.[0]?.name;
      const coverId = book.cover_id;
      const cover = `<img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg" alt="Book cover">`;

      return `
        <div class="book-card" onclick='showBookModal(${JSON.stringify(book).replace(/'/g, "&apos;")})'>
          ${cover}
          <h3>${title}</h3>
          <p><strong>Author:</strong> ${author}</p>
        </div>
      `;
    });

    container.innerHTML = bookCards.join("");

  } catch (error) {
    container.innerHTML = "<p>Error loading Top Books. Please try again later.</p>";
    console.error("Error fetching Top-Rated Books:", error);
  }
}

// Utility: Fetch author bio from Open Library
async function fetchAuthorBio(authorKey) {
  try {
    const res = await fetch(`https://openlibrary.org/authors/${authorKey}.json`);
    const data = await res.json();
    return typeof data.bio === "string" ? data.bio : data.bio?.value || null;
  } catch (err) {
    console.error("Error fetching author bio", err);
    return null;
  }
}


// Function to show book modal
async function showBookModal(book, isFromBookShelf = false) {
  const modal = document.getElementById("book-modal");
  const modalBody = document.getElementById("modal-body");
  const modalCover = document.getElementById("modal-cover");

  const favButton = document.getElementById("add-to-favorites");
  favButton.style.display = isFromBookShelf ? "none" : "inline-block";

  const title = book.title || "No title available";
  const author = book.authors?.[0]?.name || book.author_name?.join(", ") || "Unknown author";
  const year = book.first_publish_year || "N/A";
  const coverId = book.cover_i || book.cover_id;
  const workKey = book.key || book.work_key?.[0];
  const authorKey = book.author_key?.[0];


  if (coverId) {
    modalCover.src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    modalCover.alt = `Cover of ${title}`;
    modalCover.style.display = "block";
  } else {
    modalCover.style.display = "none";
  }

  // Fetch extra details from /works/ endpoint
  let subjects = "N/A";
  let description = "No description available.";
  let authorBio = "No author bio available.";

  if (workKey) {
    try {
      const res = await fetch(`https://openlibrary.org${workKey}.json`);
      const data = await res.json();

      subjects = data.subjects?.slice(0, 5).join(", ") || "N/A";
      description = typeof data.description === "string" 
      ? data.description
      : data.description?.value || description;
    } catch (error) {
      console.log("Error fetching additional book details.", error);
    }
  }

  // Then fetch and inject author bio
  if (authorKey) {
    fetchAuthorBio(authorKey).then(bio => {
      if (bio) {
        document.querySelector(".modal-author-bio").innerHTML = `
        <h3>About the Author</h3>
        <p>${bio}</p>
        `;
      }
    });
  }

  // Injecting modal content dynamically through return statement
 modalBody.innerHTML = `
  <h2>${title}</h2>
  <p><strong>Author:</strong> ${author}</p>
  <p><strong>First published:</strong> ${year}</p>
  <p><strong>Subjects:</strong> ${subjects}</p>
  ${isFromBookShelf ? (() => {
    const savedBook = JSON.parse(localStorage.getItem(book._key));
    const existingRating = savedBook?.rating || "";
    const existingReview = savedBook?.review || "";

    return `
      <div class="review-section">
        <label for="rating-${book._key}"><strong>Your Rating:</strong></label>
        <select id="rating-${book._key}">
          <option value="">Select</option>
          <option value="1" ${existingRating == 1 ? "selected" : ""}>★☆☆☆☆</option>
          <option value="2" ${existingRating == 2 ? "selected" : ""}>★★☆☆☆</option>
          <option value="3" ${existingRating == 3 ? "selected" : ""}>★★★☆☆</option>
          <option value="4" ${existingRating == 4 ? "selected" : ""}>★★★★☆</option>
          <option value="5" ${existingRating == 5 ? "selected" : ""}>★★★★★</option>
        </select>

        <label for="review-${book._key}"><strong>Your Review:</strong></label>
        <textarea id="review-${book._key}" placeholder="Write a Review">${existingReview}</textarea>

        <div class="review-actions">
          <button onclick="saveReview('${book._key}')">Save Review</button>
          <button id="more-info">More Info</button>
        </div>
      </div>
    `;
  })() : ""}
`;

document.querySelector(".modal-description").innerHTML = `
  <h3>Description:</h3>
  <p>${description}</p>
  ${authorBio ? `
    <div class="modal-author-bio">
      <h3>About the author</h3>
      <p>${authorBio}</p>
    </div>
  ` : ""}
`;

  // Add button listeners
  document.getElementById("add-to-favorites").onclick = () => {
    showToast("Added to your Bookshelf ✅", "modal");
    console.log("Add to Favorites clicked");

  const key = workKey || book.title?.replace(/\s+/g, "_") || `book_${Date.now()}`;
  if (!key) {
    console.warn("No valid key found. Cannot save to favorites.");
    return;
  }

  console.log("Final key used:", key);
  console.log("Book saved:", JSON.stringify(book));

  localStorage.setItem(key, JSON.stringify({ ...book, _key: key, savedAt: Date.now() }));

  const favButton = document.getElementById("add-to-favorites");
  favButton.textContent = "Added to Bookshelf";
  favButton.disabled = true;
  favButton.classList.add("saved");

  setTimeout(() => {
    favButton.textContent = "Add To Favorites";
    favButton.disabled = false;
    favButton.classList.remove("saved");
  }, 2000);
};

  document.getElementById("more-info").onclick = () => {
    window.open(`https://openlibrary.org${workKey}`, "_blank");
  };

  modal.classList.remove("hidden");
  document.getElementById("add-to-favorites").focus();
}

const closeButton = document.querySelector(".close-button");
if (closeButton) {
  closeButton.addEventListener("click", () => {
  document.getElementById("book-modal").classList.add("hidden");
});
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("book-modal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("book-modal");
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});

// Get the button element once
const backToTopButton = document.getElementById("backToTop");

// Show or hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "inline-flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top on button click
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message = "Added to your Bookshelf ✅", scope = "global") {
  const toastId = scope === "modal" ? "toast-modal" : "toast-global";
  const toast = document.getElementById(toastId);
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 2000);
}

// Fetch Books of the Day on page load
fetchBooksOfTheDay();

// Fetch Top-Rated books on page load
fetchTopRatedBooks();

// Onboarding Modal for new users
window.addEventListener("DOMContentLoaded", () => {
  const hasSeenModal = localStorage.getItem("seenBookBuddyModal");

  if (!hasSeenModal) {
    showOnboardingModal();
  }

  const modalCloseBtn = document.querySelector(".onboarding-close-button");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      localStorage.setItem("seenBookBuddyModal", "true");
      hideOnboardingModal();
    });
  }
});

function showOnboardingModal() {
  const modal = document.querySelector(".onboarding-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.querySelector(".onboarding-modal-content")?.focus();
  }
}

function hideOnboardingModal() {
  const modal = document.querySelector(".onboarding-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function resetOnboardingModal() {
  localStorage.removeItem("seenBookBuddyModal");
}


// Function that clears the searchInput and resultsContainer of its content
function clearSearch() {
  const searchInput = document.getElementById("search");
  const resultsWrapper = document.getElementById("results-wrapper");
  const resultsContainer = document.getElementById("results");
  const resultsHeading = document.getElementById("results-heading");

  searchInput.value = "";
  resultsContainer.innerHTML = "";
  resultsHeading.textContent = "";
  resultsWrapper.classList.add("hidden");
}

// Function that grabs the rating and review from modal and updates corresponding book in localStorage
function saveReview(bookKey) {
  const rating = document.getElementById(`rating-${bookKey}`).value;
  const review = document.getElementById(`review-${bookKey}`).value;

  const savedBook = JSON.parse(localStorage.getItem(bookKey));
  if (!savedBook) {
    console.warn("Book not found in localStorage");
    return;
  }

  const updatedBook = {
    ...savedBook,           // copies all existing properties from the saved book
    rating,                 // adds or updates the rating field
    review,                 // adds or updates the review field
    reviewedAt: Date.now()  // adds a timestamp (optional)
  };

  localStorage.setItem(bookKey, JSON.stringify(updatedBook));
  // Optional: show a toast or update the modal UI
  showToast("Book rated and reviewed ✅", "modal");

  // ✅ Trigger bookshelf refresh if you're on that page
  if (window.location.pathname.includes("bookshelf.html")) {
    document.dispatchEvent(new Event("reviewUpdated"));
  }
}

