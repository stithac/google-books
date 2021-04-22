const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema([
  {
    id: {type: String},
    title: { type: String },
    authors: [{ type: String }],
    description: {type: String},
    image: {type: String},
    link: {type: String},
  }
]);

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
