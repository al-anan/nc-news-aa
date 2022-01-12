import React, { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import { Subheading } from "./Subheading";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticles(slug)
      .then((articlesFromApi) => {
        setArticlesList(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [slug]);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>The following error occurred: {error}</p>
  ) : (
    <>
      <Subheading text={slug ? `${slug} Articles` : "All Articles"} />
      <div className="articles-list">
        {articlesList.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    </>
  );
};
