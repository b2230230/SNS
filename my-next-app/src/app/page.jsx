"use client";

import { useState } from "react";

const Home = () => {
  const postData = [
    {
      id: 1,
      name: "a大学",
      content: "こんにちは！",
      image:
        "https://user0514.cdnw.net/shared/img/thumb/aig-ai221017313-xl_TP_V.jpg",
    },
    { id: 2, name: "b大学", content: "useState便利だね", image: null },
    {
      id: 3,
      name: "c大学",
      content: "クラスだけで簡単に装飾できます。",
      image: null,
    },
  ];
  const [posts, setPosts] = useState(postData);
  return (
    <div>
      <div className="container custom-container">
        <div className="">
          {posts.map((post) => {
            return (
              <div key={post.id} className="card mb-1">
                <div className="card-body">
                  <h6 className="card-title">
                    <img
                      src="https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
                      alt="アイコン"
                      className="rounded-circle me-2"
                      width="30"
                      height="30"
                    />
                    {post.name}
                  </h6>
                  <p className="card-text">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="投稿画像"
                      className="img-fluid rounded"
                      style={{ maxHeight: "100px", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="mb-5 fixed-bottom">
        <div className="d-flex justify-content-end me-5">
          <a
            className="btn btn-primary btn-lg"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            href="/addForm"
          >
            +
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
