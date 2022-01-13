import React, { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";

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
        setIsLoading(false);
        setError(err);
      });
  }, [article_id]);

  const addComment = (newComment) => {
    setIsLoading(true);
    comments.push(newComment);
    setComments(comments);
    setIsLoading(false);
  };

  const deleteComment = (comment_id) => {
    setIsLoading(true);
    setComments(
      comments.filter((comment) => comment.comment_id !== comment_id)
    );
    setIsLoading(false);
    alert("Your comment was deleted successfully!");
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>The following error has occurred: {error}</p>
  ) : (
    <>
      <CommentForm article_id={article_id} addComment={addComment} />
      <p>Comment count: {comments.length}</p>
      <div className="comments-list">
        <h4>Comments for this article:</h4>
        {comments.map((comment, i) => {
          return (
            <CommentCard
              comment={comment}
              key={i}
              removeComment={deleteComment}
            />
          );
        })}
      </div>
    </>
  );
};
