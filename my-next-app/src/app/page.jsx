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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
                      onClick={() => handleImageClick(post.image)}
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
      {selectedImage && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="拡大画像"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 10px #000",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
