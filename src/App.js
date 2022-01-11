import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ArticlesList } from "./components/ArticlesList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  const [topic, setTopic] = useState("all");
  return (
    <div className="App">
      <Header />
      <Navbar setTopic={setTopic} />
      <ArticlesList topic={topic} />
    </div>
  );
}

export default App;
