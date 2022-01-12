import React, { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticleComments(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>The following error has occurred: {error}</p>
  ) : (
    <div className="comments-list">
      <h4>Comments for this article:</h4>
      {comments.map((comment, i) => {
        return <CommentCard comment={comment} key={i} />;
      })}
    </div>
  );
};
