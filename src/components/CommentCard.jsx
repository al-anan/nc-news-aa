import React from "react";
import moment from "moment";
import { deleteComment } from "../utils/api";

export const CommentCard = ({ comment, removeComment }) => {
  const handleClick = () => {
    deleteComment(comment.comment_id).then((result) => {
      removeComment(comment.comment_id);
    });
  };
  return (
    <div className="comment-card">
      <p className="comment-author">{comment.author} commented:</p>
      <p className="comment-body">{comment.body}</p>
      <p>
        Created on{" "}
        {moment(comment.created_at).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p>Votes: {comment.votes}</p>
      {comment.author === "jessjelly" ? (
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      ) : null}
    </div>
  );
};
