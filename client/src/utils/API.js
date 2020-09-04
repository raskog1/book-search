import axios from "axios";

export default {
  // GOOGLE BOOKS API FUNCTIONS\
  // Both of these function the same, but one is a promise, one is not

  searchAll: function(search) {
    let query = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

    axios.get(query).then((response) => {
      console.log(response.data);
      // Returning data only
      return response.data;
    });
  },

  searchId: function(req, res) {
    let query = `https://www.googleapis.com/books/v1/volumes?q=${req}`;
    // Returning a function that returns a promise, so I can use .then
    return axios.get(query);
  },

  // DATABASE API FUNCTIONS

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
};
