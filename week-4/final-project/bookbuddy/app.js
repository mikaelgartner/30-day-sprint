// Function to search books by title using Open Library API
async function searchBooks() {
    const query = document.getElementById("search").value;
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "<p>Loading...</p>";

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

    } catch (error) {
      resultsContainer.innerHTML = "<p>Error fetching book data. Please try again later.</p>";
      console.error("Error fetching book data:", error);
    }
}

// Fetch and display 3 Books of the Day from multiple popular subjects
async function fetchBooksOfTheDay() {
  const container = document.getElementById("books-of-the-day");
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

function showBookModal(book) {
  const modal = document.getElementById("book-modal");
  const modalBody = document.getElementById("modal-body");
  const modalCover = document.getElementById("modal-cover");

  const title = book.title || "No title available";
  const author = book.authors?.[0]?.name || book.author_name?.join(", ") || "Unknown author";
  const year = book.first_publish_year || "N/A";
  const coverId = book.cover_i || book.cover_id;

  if (coverId) {
    modalCover.src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    modalCover.alt = `Cover of ${title}`;
    modalCover.style.display = "block";
  } else {
    modalCover.style.display = "none";
  }

  modalBody.innerHTML = `
    <p><strong>Title:</strong> ${title}</p>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>First published:</strong> ${year}</p>
  `;

  modal.classList.remove("hidden");
}

document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("book-modal").classList.add("hidden");
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("book-modal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Fetch Books of the Day on page load
fetchBooksOfTheDay();

// Fetch top-rated books on page load
fetchTopRatedBooks();