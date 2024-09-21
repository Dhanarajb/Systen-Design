const data = {
  authors: [
    { id: 1, name: "Harper Lee", bookId: 1 },
    { id: 2, name: "George Orwell", bookId: 2 },
    { id: 3, name: "F. Scott Fitzgerald", bookId: 3 },
    { id: 4, name: "Jane Austen", bookId: 4 },
    { id: 5, name: "Herman Melville", bookId: 5 },
  ],
  books: [
    { id: 1, title: "To Kill a Mockingbird", publishedYear: 1960, authorId: 1 },
    { id: 2, title: "1984", publishedYear: 1949, authorId: 2 },
    { id: 3, title: "The Great Gatsby", publishedYear: 1925, authorId: 3 },
    { id: 4, title: "Pride and Prejudice", publishedYear: 1813, authorId: 4 },
    { id: 5, title: "Moby-Dick", publishedYear: 1851, authorId: 5 },
  ],
};

export const resolvers = {
  Book: {
    author: (book) => {
      return data.authors.find((author) => author.bookId === book.id);
    },
  },
  Author: {
    books: (author) => {
      return data.books.filter((book) => book.authorId === author.id);
    },
  },
  Query: {
    books: () => data.books,
    authors: () => data.authors,
  },
  Mutation: {
    addBook: (_, { title, publishedYear, authorId }) => {
      const newBook = {
        id: data.books.length + 1,
        title,
        publishedYear,
        authorId,
      };
      console.log(newBook);
      data.books.push(newBook);
      return newBook;
    },
  },
};
