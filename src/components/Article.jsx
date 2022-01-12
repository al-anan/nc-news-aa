import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";

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
      <h2>Article title: {article.title}</h2>
      <h3>Author: {article.author}</h3>
      <p>{article.body}</p>
    </div>
  );
};
