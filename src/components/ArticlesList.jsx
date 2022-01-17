import React, { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";
import { fetchArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import { Subheading } from "./Subheading";
import { SortArticles } from "./SortArticles";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [selectedValue, setSelectedValue] = useState(0);

  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticles(slug, sortBy, order)
      .then((articlesFromApi) => {
        setArticlesList(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [slug, sortBy, order]);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>The following error occurred: {error}</p>
  ) : (
    <>
      <div className="container">
        <div className="row dropdown-articles-group py-4">
          <SortArticles
            setSortBy={setSortBy}
            setOrder={setOrder}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <Subheading text={slug ? `${slug} Articles` : "All Articles"} />
        </div>
        <div className="articles-list row d-flex justify-content-center">
          {articlesList.map((article, i) => {
            return <ArticleCard article={article} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};
