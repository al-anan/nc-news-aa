import React, { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import { fetchAllArticles } from "../utils/api";

export const ArticlesList = ({ topic }) => {
  const [articlesList, setArticlesList] = useState([]);
  useEffect(() => {
    fetchAllArticles().then((articlesFromApi) => {
      console.log(articlesFromApi);
      setArticlesList(articlesFromApi);
    });
  }, []);

  return (
    <div className="articles-list">
      {articlesList.map((article, i) => {
        return <ArticleCard article={article} key={i} />;
      })}
    </div>
  );
};
