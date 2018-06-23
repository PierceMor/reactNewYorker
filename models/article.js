const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true, unique: {index: {unique: true}} },
  date: {type:Date, required: true},
  url: {type: String, required: true},
  saved: {type: Boolean, required: false },
  summary: { type: String, required: true }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
