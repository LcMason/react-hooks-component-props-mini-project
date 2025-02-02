import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header />
      <About image = {blogData.image} />
      <ArticleList posts = {blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
