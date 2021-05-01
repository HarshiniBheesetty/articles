import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

function Articles() {
  const [articles, setArticles] = useState([
    {
      title: "",
      content: "",
    },
  ]);

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
        <Link
          key={key}
          className="article-list-item"
          to={`/articles/:${article.title}`}>
          <h3>{article.title}</h3>
          <p>{article.content.substring(0, 150)}...</p>
        </Link>
      ))}
    </div>
  );
}

export default Articles;
