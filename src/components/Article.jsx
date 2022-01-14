import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, patchArticleVotes } from "../utils/api";
import { CommentsList } from "./CommentsList";
import moment from "moment";

export const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setVotes(articleFromApi.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  const handleVotes = () => {
    setError(false);
    let value = clicked ? -1 : 1;
    setVotes(votes + value);
    patchArticleVotes(article_id, value).catch((err) => {
      setError(err);
      setVotes(votes - value);
    });
    setClicked(!clicked);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>The following error has occurred: {error}</p>
  ) : (
    <div className="article">
      <h2>{article.title}</h2>
      <h3>By: {article.author}</h3>
      <p>{article.body}</p>
      <p>Topic: {article.topic}</p>
      <p>Written on {moment(article.created_at).format("LL")}</p>
      <button className="votes-btn" onClick={handleVotes}>
        Votes: {votes}
      </button>
      <CommentsList article_id={article_id} />
    </div>
  );
};
