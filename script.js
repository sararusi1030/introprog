document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("book-search-form");
    const resultsDiv = document.getElementById("results");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const selectedGenre = document.getElementById("genre").value;
      const author = document.getElementById("author").value.toLowerCase();
      const maxPrice = parseFloat(document.getElementById("price").value);
      const language = document.getElementById("language").value;
  
      const filteredBooks = books.filter(book => {
        return (
          (selectedGenre === "" || book.genre === selectedGenre) &&
          (author === "" || book.author.toLowerCase().includes(author)) &&
          (isNaN(maxPrice) || book.price <= maxPrice) &&
          (language === "" || book.language === language)
        );
      });
  
      // Sort filtered books by popularity (most popular first)
      filteredBooks.sort((a, b) => b.popularity - a.popularity);
  
      // Clear previous results
      resultsDiv.innerHTML = "";
  
      if (filteredBooks.length === 0) {
        resultsDiv.innerHTML = "<p>No books found matching your criteria.</p>";
      } else {
        const mostPopular = filteredBooks[0]; // Top one after sorting
  
        filteredBooks.forEach(book => {
          const bookElement = document.createElement("div");
          bookElement.classList.add("book-item", "book-box");
  
          // ⭐️ Highlight the most popular book
          if (book === mostPopular) {
            bookElement.classList.add("highlight-popular");
          }
  
          bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Language:</strong> ${book.language}</p>
            <p><strong>Price:</strong> £${book.price}</p>
            <p>${book.description}</p>
            <p><strong>Popularity:</strong> ${book.popularity}</p>
            ${book === mostPopular ? `<p class="popular-label">💜 Most Popular Match</p>` : ""}
          `;
          resultsDiv.appendChild(bookElement);
        });
      }
    });
  });  
   