import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article.article_id}`);
  };

  return (
    <div className="col-sm-4">
      <div
        className="article-card card text-center mb-5 w-100"
        onClick={handleClick}
      >
        <div className="card-header text-muted">
          {moment(article.created_at).format("LL")}
        </div>
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
        </div>
        <p className="card-text">
          Written by {article.author}
          <br />
          Topic: {article.topic}
        </p>
        <div className="card-footer text-muted">
          Comments: {article.comment_count} Votes: {article.votes}
        </div>
      </div>
    </div>
  );
};
