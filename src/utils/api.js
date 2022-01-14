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

export const fetchArticles = (topic, sort_by, order) => {
  return newsApi
    .get("/articles", {
      params: {
        topic,
        sort_by,
        order,
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

export const postComment = (article_id, body, username = "jessjelly") => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
