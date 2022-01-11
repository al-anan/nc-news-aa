import React from "react";

export const ArticleCard = ({ article }) => {
  const handleClick = (article_id) => {
    // redirect to Article component with passed id
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <p>
        {article.title}
        Written by {article.author}
        Topic: {article.topic}
      </p>
    </div>
  );
};
