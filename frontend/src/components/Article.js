import React from "react";
import "./Article.css";
import { useState, useEffect } from "react";
import Articles from "./Articles";

function Article({ match }) {
  const name = match.params.title;
  const article = Articles.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  return (
    <div>
      <React.Fragment>
        <h1>{article.title} </h1>
        {/* <UpvoteSection
          articleName={name}
          upvotes={articleInfo.upvotes}
          setArticleInfo={setArticleInfo}></UpvoteSection> */}
        {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
      </React.Fragment>
    </div>
  );
}

export default Article;
