import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

function Articles() {
  const [articles, setArticles] = useState([
    {
      title: "",
      content: "",
      upvotes: 0,
    },
  ]);

  function handleClick() {
    // setArticles(articles.upvotes);
    console.log(articles.upvotes);
    console.log("clicked upvote");
  }
  useEffect(() => {
    fetch("/articles")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setArticles(jsonRes));
  });

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article, key) => (
        <Link key={key} className="article-list-item">
          <h3>{article.title}</h3>
          <div className="likes">
            {article.upvotes} <span>likes</span>
            <ThumbUpAltIcon
              className="thumbs-up"
              onClick={handleClick}></ThumbUpAltIcon>
          </div>

          <p>{article.content}</p>
        </Link>
      ))}
    </div>
  );
}

export default Articles;
