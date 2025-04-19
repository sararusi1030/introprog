# Book Finder App

# Overview
The BOOK Finder App is an interactive web application that allows users to discover books based on their personal preferences. Readers can filter books by genre, author, price and language. The app highlights the most popular book that matches the search, making it easier to choose a great read.

# Key Features
- Search and filter books by:
- Genre (6 genres available)
- Author name (case-insensitive search)
- Maximum price
- Language (English or Spanish)
- Sorts results by popularity (most popular books shown first)
- 💜 Highlights the top recommended book in each search
- Displays real, pre-loaded book data in both English and Spanish (10 books per genre)

# Technologies Used
- HTML – for the page structure and search form  
- CSS – for styling and layout  
- JavaScript – for filtering, sorting, and dynamic display of book results  
- External file (`books.js`) – contains book data used in filtering  

# How It Works
1. The user fills out the search form by selecting a genre, entering an author name (optional), setting a max price (optional), and selecting a language.
2. If genre or language are not selected, the browser will show a built-in warning: 
"Please select an item in the list."
3. When the form is submitted, JavaScript filters the book data (`books.js`) based on these inputs.
4. The results are sorted by popularity and displayed on the page.
5. The most popular matching book is visually highlighted with a special label.

# Design Notes
- The app includes a custom background image to enhance visual appeal.
- Responsive, user-friendly layout with clear typography and spacing.
- The most popular book is given a 💜 "Most Popular Match" label.

# How to Run
1. All project files are in the same directory:
   - `index.html`
   - `style.css`
   - `script.js`
   - `books.js`
   - `images/background.jpg`
2. Open `index.html` in your web browser.
3. Start searching and exploring book options. The "Genre" and "Language" fields must be selected — if left empty, the browser will show a validation warning saying "Please select an item in the list.".

# Folder Structure
BookFinderApp/ 
├── index.html # Main HTML page 
├── style.css # CSS file for styling 
├── script.js # JavaScript for search functionality 
├── books.js # JavaScript file containing book data 
├── images/ 
│ └── background.jpg # Background image used in styling 
└── README.md # Project documentation


## Created By
**Sara A. Rusi**  
Student ID: 1406423  
Web Scripting Assignment – (2025)