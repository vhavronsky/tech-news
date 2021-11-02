import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'React.js', body: 'Description'},
    {id: 3, title: 'Ruby', body: 'Description'}
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">

      <PostForm create={createPost} />
      <PostList posts={posts} title='Programming News'/>
    
    </div>
  );
}

export default App;
