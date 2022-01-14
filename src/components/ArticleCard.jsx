import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.article_id}`);
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <p>
        {moment(article.created_at).format("LL")}
        {article.title}
        Written by {article.author}
        Topic: {article.topic}
        Comments: {article.comment_count}
        Votes: {article.votes}
      </p>
    </div>
  );
};
