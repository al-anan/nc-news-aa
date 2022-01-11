import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";

export const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  console.log(article_id);

  useEffect(() => {
    fetchArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <div className="article">
      <p>Article with id {article_id}</p>
    </div>
  );
};
