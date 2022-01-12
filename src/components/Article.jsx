import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import { CommentsList } from "./CommentsList";

export const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <h3>By: {article.author}</h3>
      <p>{article.body}</p>
      <p>Topic: {article.topic}</p>
      <button className="votes-btn">Votes: {article.votes}</button>
      <p>Comment count: {article.comment_count}</p>
      <CommentsList article_id={article_id} />
    </div>
  );
};
