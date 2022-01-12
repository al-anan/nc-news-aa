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

export const fetchArticles = (topic) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic,
      },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const fetchArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (article_id, value) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: value })
    .then((res) => {
      return res.data;
    });
};
