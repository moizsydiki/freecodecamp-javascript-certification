const books = [
  {
    title: "Feel Good Productivity",
    authorName: "Ali Abdaal",
    releaseYear: 2023,
  },
  {
    title: "Nexus",
    authorName: "Naval Harari",
    releaseYear: 2024,
  },
  {
    title: "A Game of Thrones",
    authorName: "George R.R. Martin",
    releaseYear: 1996,
  },

  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1940,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);
