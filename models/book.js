const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  imageLinks: {
    type: [String],
  },
  infoLink: {
    type: String,
  },
});
