import React, { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  return (
    <div className="comments-list">
      <h4>Comments for this article:</h4>
      {comments.map((comment, i) => {
        return <CommentCard comment={comment} key={i} />;
      })}
    </div>
  );
};
