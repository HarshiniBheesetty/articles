import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

function Articles() {
  const [articles, setArticles] = useState([
    {
      title: "",
      content: "",
      upvotes: 0,
    },
  ]);

  function handleClick(e) {
    console.log(e);
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
          {article.upvotes}
          <button onClick={handleClick}> Upvotes</button>
          <p>{article.content}</p>
        </Link>
      ))}
    </div>
  );
}

export default Articles;
