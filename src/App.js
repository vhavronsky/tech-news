import React, { useState, useMemo } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1, 
      title: 'Coinbase Acquires AI Startup Agara For Over $40m', 
      body: 'Cryptocurrency exchange platform Coinbase has announced that it is acquiring Indian AI startup Agara, to make it easier for users to access its service and seek assistance.'
    },
    {
      id: 2,
      title: 'Video Game “Fortnite” Is Set To Shut Down In China', 
      body: 'This announcement comes a few months after the Chinese authorities imposed a series of strict curbs on the world’s biggest gaming market, this is part of plans by the Chinese government to crack down on the technology sector.'
    },
    {
      id: 3, 
      title: 'Huawei Latches On 5G Technology Use In The Wake Of US Sanctions',
      body: 'China-based network and telecommunications provider, Huawei Technologies Company has began the provision of smart services and the fifth generation (5G) technology to human uses industries like healthcare, finance and educational industries.'
    }
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }


  return (
    <div className="App">

      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        posts={sortedAndSearchedPosts} 
        title='Tech News' 
        remove={removePost} 
      />
    
    </div>
  );
}

export default App;
