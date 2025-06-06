"use client";

import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const postData = [
    {
      id: 1,
      userId: "1",
      name: "a大学",
      content: "こんにちは！",
      image:
        "https://user0514.cdnw.net/shared/img/thumb/aig-ai221017313-xl_TP_V.jpg",
      likes: 0,
      liked: false,
    },
    {
      id: 2,
      userId: "2",
      name: "b大学",
      content: "useState便利だね",
      image: null,
      likes: 0,
      liked: false,
    },
    {
      id: 3,
      userId: "3",
      name: "c大学",
      content: "クラスだけで簡単に装飾できます。",
      image: null,
      likes: 0,
      liked: false,
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

  const likePost = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: !post.liked ? post.likes + 1 : post.likes - 1,
            }
          : post
      )
    );
  };

  return (
    <div>
      <div className="container custom-container">
        {posts.map((post) => (
          <div key={post.id} className="card mb-1">
            <div className="card-body">
              <h6 className="card-title d-flex align-items-center">
                <Link
                  href={`/profile/${post.userId}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src="https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
                      alt="アイコン"
                      className="rounded-circle me-2"
                      width="30"
                      height="30"
                    />
                    {post.name}
                  </div>
                </Link>
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
              <div className="d-flex align-items-center mt-2">
                <button
                  onClick={() => likePost(post.id)}
                  className="btn p-0 me-2 no-outline"
                  style={{
                    fontSize: "1.5rem",
                    color: post.liked ? "red" : "gray",
                  }}
                >
                  {post.liked ? "❤️" : "♡"}
                </button>

                <span>{post.likes} いいね</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="position-fixed bottom-0 end-0 me-5 mb-5">
        <a
          className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          href="/addForm"
        >
          +
        </a>
      </div>

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
