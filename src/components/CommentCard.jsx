import React from "react";
import moment from "moment";

export const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author} commented:</p>
      <p className="comment-body">{comment.body}</p>
      <p>
        Created on{" "}
        {moment(comment.created_at).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};
