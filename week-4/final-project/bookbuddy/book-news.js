document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".news-content");

    const feedUrl = "https://www.theguardian.com/books/rss";
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    fetch(proxyUrl)
        .then(res => res.json())
        .then(data => {
            if (!data.items || data.items.length === 0) {
                container.innerHTML = `<p>No book news available right now. Try again later.</p>`;
                return;
            }

            const newsSection = document.createElement("section");
            newsSection.classList.add("news-feed");

            data.items.slice(0, 10).forEach(item => {
                const article = document.createElement("article");
                article.classList.add("news-item");

                article.innerHTML = `
                <h2><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></h2>
                ${item.description}
                <small>Published: ${new Date(item.pubDate).toLocaleDateString()}</small>
                `;

                newsSection.appendChild(article);
            });

            container.appendChild(newsSection);
        })
        .catch(err => {
            console.error("Book News fetch error:", err);
            container.innerHTML = `<p>Sorry, book news is unavailable right now. Try again later.</p>`;
        });
});