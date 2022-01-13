import React, { useState } from "react";
import { postComment } from "../utils/api";

export const CommentForm = ({ article_id, addComment }) => {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    console.log(event);
    postComment(article_id, newComment)
      .then((result) => {
        addComment(result);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return error ? (
    <p>The following error has occurred: {error}</p>
  ) : (
    <>
      <h4>Leave a comment</h4>
      <form className="comment-form" onSubmit={handleSubmit}>
        <label>
          Your comment:
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
