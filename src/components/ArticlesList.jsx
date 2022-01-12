import React, { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useParams } from "react-router-dom";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    fetchArticles(slug).then((articlesFromApi) => {
      setArticlesList(articlesFromApi);
    });
  }, [slug]);

  return (
    <div className="articles-list">
      {articlesList.map((article, i) => {
        return <ArticleCard article={article} key={i} />;
      })}
    </div>
  );
};
