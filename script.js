// Wait for the entire HTML document to be fully loaded before running this script
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the book search form and the results container
  const form = document.getElementById("book-search-form");
  const resultsDiv = document.getElementById("results");

  // Add an event listener for when the form is submitted
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from reloading on form submission

    // Get the user's input from the form
    const selectedGenre = document.getElementById("genre").value;
    const author = document.getElementById("author").value.toLowerCase(); // Convert author input to lowercase for case-insensitive matching
    const maxPrice = parseFloat(document.getElementById("price").value); // Convert price input to a number
    const language = document.getElementById("language").value;

    // Filter the books based on user input
    const filteredBooks = books.filter(book => {
      return (
        (selectedGenre === "" || book.genre === selectedGenre) && // Match genre if selected
        (author === "" || book.author.toLowerCase().includes(author)) && // Match author if provided
        (isNaN(maxPrice) || book.price <= maxPrice) && // Match price if provided
        (language === "" || book.language === language) // Match language if selected
      );
    });

    // Sort the filtered books by popularity (highest first)
    filteredBooks.sort((a, b) => b.popularity - a.popularity);

    // Clear any previous search results
    resultsDiv.innerHTML = "";

    // If no books match the search criteria, show a message
    if (filteredBooks.length === 0) {
      resultsDiv.innerHTML = "<p>No books found matching your criteria.</p>";
    } else {
      // Identify the most popular book (first one after sorting)
      const mostPopular = filteredBooks[0];

      // Loop through each filtered book and create HTML elements to display it
      filteredBooks.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book-item", "book-box");

        // Highlight the most popular book with a special class
        if (book === mostPopular) {
          bookElement.classList.add("highlight-popular");
        }

        // Add the book details to the HTML
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

        // Add the book element to the results container
        resultsDiv.appendChild(bookElement);
      });
    }
  });
});

   