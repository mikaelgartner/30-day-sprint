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

      const topBooks = data.docs.slice(0, 10); // Get top 10 results

      const bookCards = topBooks.map(book => {
        const title = book.title || 'No title available';
        const author = book.author_name ? book.author_name.join(', ') : 'Unknown author';
        const year = book.first_publish_year || 'N/A';
        const cover = book.cover_i 
        ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="Book cover">`
        : '<p>No cover image available</p>';
        return `
          <div class="book-card">
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