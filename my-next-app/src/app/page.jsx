"use client";

import { useState } from "react";

const Home = () => {
  const postData = [
    { id: 1, name:"a大学",content: "こんにちは！" },
    { id: 2, name:"b大学",content: "useState便利だね" },
    { id: 3, name:"c大学",content: "クラスだけで簡単に装飾できます。" },
  ];
  const [posts, setPosts] = useState(postData);
  return (
    <div className="container custom-container">
      <div className="">
        {posts.map((post) => {
          return (
            <div key={post.id} className="card mb-3">
              <div className="card-body">
                <h6 className="card-title">{post.name}</h6>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
