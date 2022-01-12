import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ArticlesList } from "./components/ArticlesList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Article } from "./components/Article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/topic/:slug" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
