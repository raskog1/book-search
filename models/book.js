const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema constructed to mimic the google API structure
const bookSchema = new Schema({
  volumeInfo: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    authors: {
      type: [String],
    },
    description: {
      type: String,
    },
    imageLinks: {
      type: Object,
    },
    infoLink: {
      type: String,
    },
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
