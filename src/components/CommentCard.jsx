import React from "react";

export const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author} commented:</p>
      <p className="comment-body">{comment.body}</p>
      <p>Created on {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};
