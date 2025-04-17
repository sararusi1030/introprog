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
  
      // ✅ Sort filtered books by popularity (most popular first)
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
   
const books = [
    // DARK HORROR FANTASY
    { title: "The Witcher: Blood of Elves", author: "Andrzej Sapkowski", genre: "Dark Horror Fantasy", price: 10.99, language: "English", description: "Geralt battles destiny in a war-torn world.", popularity: 9.2 },
    { title: "The Shadow of the Torturer", author: "Gene Wolfe", genre: "Dark Horror Fantasy", price: 11.49, language: "English", description: "A torturer's apprentice holds a powerful secret.", popularity: 8.7 },
    { title: "The Lesser Dead", author: "Christopher Buehlman", genre: "Dark Horror Fantasy", price: 12.99, language: "English", description: "Vampires lurk beneath 1970s New York.", popularity: 8.5 },
    { title: "The Library at Mount Char", author: "Scott Hawkins", genre: "Dark Horror Fantasy", price: 13.99, language: "English", description: "Twelve siblings wield terrifying knowledge.", popularity: 9.0 },
    { title: "The Monstrumologist", author: "Rick Yancey", genre: "Dark Horror Fantasy", price: 9.99, language: "English", description: "Grotesque horrors are unearthed by a scientist.", popularity: 8.6 },
    { title: "The Dreadful Tale of Prosper Redding", author: "Alexandra Bracken", genre: "Dark Horror Fantasy", price: 8.50, language: "English", description: "A demon dwells inside a cursed boy.", popularity: 8.3 },
    { title: "Devil May Cry", author: "David Wohl", genre: "Dark Horror Fantasy", price: 14.99, language: "English", description: "Half-demon Dante hunts the forces of evil.", popularity: 9.1 },
    { title: "The Troop", author: "Nick Cutter", genre: "Dark Horror Fantasy", price: 9.49, language: "English", description: "A scout troop's trip turns nightmarish.", popularity: 8.8 },
    { title: "Nocturno de los muertos", author: "Carlos Sisí", genre: "Dark Horror Fantasy", price: 7.99, language: "Spanish", description: "Zombies rise in a Spanish apocalypse.", popularity: 8.2 },
    { title: "La ciudad de los fantasmas", author: "Victoria Schwab", genre: "Dark Horror Fantasy", price: 8.99, language: "Spanish", description: "A girl sees the dead in Edinburgh.", popularity: 8.4 },

    // GAMELIT / LITRPG
    { title: "Ready Player One", author: "Ernest Cline", genre: "GameLit / LitRPG", price: 14.99, language: "English", description: "A teen enters a virtual treasure hunt.", popularity: 9.3 },
    { title: "Awaken Online", author: "Travis Bagwell", genre: "GameLit / LitRPG", price: 11.99, language: "English", description: "A bullied teen becomes the villain in VR.", popularity: 8.9 },
    { title: "The Land: Founding", author: "Aleron Kong", genre: "GameLit / LitRPG", price: 13.50, language: "English", description: "A man is transported into a brutal game world.", popularity: 9.0 },
    { title: "Spells, Swords, & Stealth", author: "Drew Hayes", genre: "GameLit / LitRPG", price: 10.99, language: "English", description: "Tabletop gamers become their characters.", popularity: 8.6 },
    { title: "Respawn", author: "Arthur Stone", genre: "GameLit / LitRPG", price: 12.49, language: "English", description: "He wakes up inside the game he played.", popularity: 8.5 },
    { title: "Dungeon Born", author: "Dakota Krout", genre: "GameLit / LitRPG", price: 9.99, language: "English", description: "A sentient dungeon grows and fights.", popularity: 8.8 },
    { title: "Play to Live", author: "D. Rus", genre: "GameLit / LitRPG", price: 13.99, language: "English", description: "Players escape reality by uploading minds.", popularity: 8.7 },
    { title: "Viridian Gate Online", author: "James A. Hunter", genre: "GameLit / LitRPG", price: 10.49, language: "English", description: "Earth ends, and players must survive online.", popularity: 8.4 },
    { title: "Jugadores del mundo virtual", author: "Mario Escobar", genre: "GameLit / LitRPG", price: 7.99, language: "Spanish", description: "Gamers explore a dangerous VR world.", popularity: 8.2 },
    { title: "El juego de Ender", author: "Orson Scott Card", genre: "GameLit / LitRPG", price: 9.49, language: "Spanish", description: "Child prodigies are trained via simulations.", popularity: 9.1 },

    // MYTHIC FICTION
    { title: "American Gods", author: "Neil Gaiman", genre: "Mythic Fiction", price: 12.99, language: "English", description: "Old gods clash with new in modern America.", popularity: 9.0 },
    { title: "Circe", author: "Madeline Miller", genre: "Mythic Fiction", price: 11.99, language: "English", description: "The witch Circe finds her power in exile.", popularity: 9.1 },
    { title: "The Song of Achilles", author: "Madeline Miller", genre: "Mythic Fiction", price: 13.49, language: "English", description: "The love story of Achilles and Patroclus.", popularity: 9.4 },
    { title: "The Buried Giant", author: "Kazuo Ishiguro", genre: "Mythic Fiction", price: 9.99, language: "English", description: "Memory, love, and monsters in post-Arthurian Britain.", popularity: 8.5 },
    { title: "Mythago Wood", author: "Robert Holdstock", genre: "Mythic Fiction", price: 10.99, language: "English", description: "A forest generates mythic creatures from belief.", popularity: 8.7 },
    { title: "Till We Have Faces", author: "C.S. Lewis", genre: "Mythic Fiction", price: 8.99, language: "English", description: "A retelling of the Cupid and Psyche myth.", popularity: 8.8 },
    { title: "Anansi Boys", author: "Neil Gaiman", genre: "Mythic Fiction", price: 12.49, language: "English", description: "A man discovers he’s the son of a trickster god.", popularity: 9.0 },
    { title: "The Firekeeper's Daughter", author: "Angeline Boulley", genre: "Mythic Fiction", price: 13.50, language: "English", description: "A native teen uncovers sacred secrets.", popularity: 8.9 },
    { title: "El dios de las pequeñas cosas", author: "Arundhati Roy", genre: "Mythic Fiction", price: 11.99, language: "Spanish", description: "Love and fate shape a broken family.", popularity: 8.3 },
    { title: "La canción de Aquiles", author: "Madeline Miller", genre: "Mythic Fiction", price: 10.50, language: "Spanish", description: "Una versión emotiva de Aquiles y Patroclo.", popularity: 9.2 },
  
    // SUPERNATURAL THRILLER
    { title: "The Silent Patient", author: "Alex Michaelides", genre: "Supernatural Thriller", price: 10.99, language: "English", description: "A woman’s silence hides a supernatural truth.", popularity: 9.1 },
    { title: "The Girl with All the Gifts", author: "M.R. Carey", genre: "Supernatural Thriller", price: 12.50, language: "English", description: "A gifted child may hold the cure to humanity.", popularity: 8.8 },
    { title: "The Taking of Jake Livingston", author: "Ryan Douglass", genre: "Supernatural Thriller", price: 9.99, language: "English", description: "A teen medium battles a vengeful ghost.", popularity: 8.6 },
    { title: "Middlegame", author: "Seanan McGuire", genre: "Supernatural Thriller", price: 14.99, language: "English", description: "Twins embody words and numbers with power.", popularity: 9.0 },
    { title: "The Outsider", author: "Stephen King", genre: "Supernatural Thriller", price: 11.49, language: "English", description: "A murder suspect hides something inhuman.", popularity: 9.2 },
    { title: "The Dead Zone", author: "Stephen King", genre: "Supernatural Thriller", price: 10.50, language: "English", description: "A man awakens from a coma with psychic powers.", popularity: 8.7 },
    { title: "Lock Every Door", author: "Riley Sager", genre: "Supernatural Thriller", price: 13.99, language: "English", description: "An apartment sitter uncovers haunting secrets.", popularity: 8.4 },
    { title: "The Shining", author: "Stephen King", genre: "Supernatural Thriller", price: 12.99, language: "English", description: "An isolated hotel awakens a father's madness.", popularity: 9.3 },
    { title: "La niña que podía hablar con los muertos", author: "Luis Carlos Molina Acevedo", genre: "Supernatural Thriller", price: 7.99, language: "Spanish", description: "Una niña descubre un vínculo con los espíritus.", popularity: 8.2 },
    { title: "El visitante", author: "Stephen King", genre: "Supernatural Thriller", price: 9.49, language: "Spanish", description: "Un crimen sobrenatural desafía la lógica policial.", popularity: 9.0 },

    // OCCULT FICTION
    { title: "A Discovery of Witches", author: "Deborah Harkness", genre: "Occult Fiction", price: 11.99, language: "English", description: "A witch and vampire unlock ancient secrets.", popularity: 9.0 },
    { title: "The Diviners", author: "Libba Bray", genre: "Occult Fiction", price: 10.50, language: "English", description: "Occult murders haunt 1920s New York.", popularity: 8.7 },
    { title: "The Secret History", author: "Donna Tartt", genre: "Occult Fiction", price: 13.99, language: "English", description: "Students fall into ritual and murder.", popularity: 9.1 },
    { title: "The Witching Hour", author: "Anne Rice", genre: "Occult Fiction", price: 14.50, language: "English", description: "A family cursed by generations of magic.", popularity: 9.2 },
    { title: "The Fisherman", author: "John Langan", genre: "Occult Fiction", price: 12.99, language: "English", description: "Grief opens a path to occult horror.", popularity: 8.9 },
    { title: "Practical Magic", author: "Alice Hoffman", genre: "Occult Fiction", price: 9.99, language: "English", description: "Two sisters try to escape a witch's curse.", popularity: 8.5 },
    { title: "The Book of Accidents", author: "Chuck Wendig", genre: "Occult Fiction", price: 13.49, language: "English", description: "Dark forces haunt a family’s new home.", popularity: 8.6 },
    { title: "We Have Always Lived in the Castle", author: "Shirley Jackson", genre: "Occult Fiction", price: 10.99, language: "English", description: "Two sisters live with dark family secrets.", popularity: 8.8 },
    { title: "Brujas", author: "Brenda Lozano", genre: "Occult Fiction", price: 8.99, language: "Spanish", description: "Un viaje entre la brujería y la resistencia femenina.", popularity: 8.4 },
    { title: "La hora de las brujas", author: "Anne Rice", genre: "Occult Fiction", price: 9.49, language: "Spanish", description: "Una dinastía marcada por el poder oscuro.", popularity: 9.1 },

    // CYBERPUNK FANTASY
    { title: "Neuromancer", author: "William Gibson", genre: "Cyberpunk Fantasy", price: 10.99, language: "English", description: "A hacker is hired for a digital heist.", popularity: 9.4 },
    { title: "Altered Carbon", author: "Richard K. Morgan", genre: "Cyberpunk Fantasy", price: 11.99, language: "English", description: "Souls are downloaded into new bodies.", popularity: 9.0 },
    { title: "Snow Crash", author: "Neal Stephenson", genre: "Cyberpunk Fantasy", price: 12.50, language: "English", description: "A hacker pizza guy fights a mind virus.", popularity: 8.9 },
    { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", genre: "Cyberpunk Fantasy", price: 9.49, language: "English", description: "A bounty hunter tracks rogue androids.", popularity: 9.2 },
    { title: "Cyber Shogun Revolution", author: "Peter Tieryas", genre: "Cyberpunk Fantasy", price: 10.99, language: "English", description: "Samurais battle AI in a tech-dystopia.", popularity: 8.7 },
    { title: "Mirrored Heavens", author: "David J. Williams", genre: "Cyberpunk Fantasy", price: 9.99, language: "English", description: "Terrorists hack a space elevator.", popularity: 8.5 },
    { title: "Glasshouse", author: "Charles Stross", genre: "Cyberpunk Fantasy", price: 10.49, language: "English", description: "A memory-wiped man enters a retro simulation.", popularity: 8.6 },
    { title: "Gun, with Occasional Music", author: "Jonathan Lethem", genre: "Cyberpunk Fantasy", price: 12.00, language: "English", description: "A detective navigates a drugged-out dystopia.", popularity: 8.4 },
    { title: "El sindicato de policía yiddish", author: "Michael Chabon", genre: "Cyberpunk Fantasy", price: 8.99, language: "Spanish", description: "Un detective investiga un crimen en un mundo alternativo.", popularity: 8.5 },
    { title: "Cibermancia", author: "Sergio Gaut vel Hartman", genre: "Cyberpunk Fantasy", price: 9.49, language: "Spanish", description: "Magia y máquinas se mezclan en el futuro.", popularity: 8.3 }
  ];
  