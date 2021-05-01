const mongoose = require("mongoose");

const articleSchema = {
  title: String,
  content: String,
  author: String,
  upvotes: {
    type: Number,
    defualt: 0,
  },
};

//create model
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
