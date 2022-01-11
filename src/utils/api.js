import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-app-aa.herokuapp.com/api",
});

export const fetchNavItems = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics.map((topic) => {
      return topic.slug;
    });
  });
};

export const fetchAllArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
