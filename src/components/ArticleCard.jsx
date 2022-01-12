import React from "react";
import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.article_id}`);
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
