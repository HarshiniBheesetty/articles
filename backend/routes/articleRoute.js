const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newArticle = new Article({
    title,
    content,
  });
  newArticle.save();
});

router.route("/articles").get((req, res) => {
  Article.find().then((foundArticles) => res.json(foundArticles));
});

//get particular article
router.route("/article/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
