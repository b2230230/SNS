"use client";

import { useState } from "react";
import Link from "next/link";

const Like = () => {
  const dummyFavorites = [
    { id: 1, title: "a大学", image: "/img1.jpg" },
    { id: 2, title: "b大学", image: "/img2.jpg" },
  ];
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
  return (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Like;
