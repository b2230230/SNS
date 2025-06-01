"use client";

import { useState } from "react";
import { use } from "react";

const Profile = ({ params }) => {
  const postData = [
    { id: 1, content: "こんにちは！新しい投稿です。", likes: 0, liked: false },
    {
      id: 2,
      content: "Next.jsとBootstrapの組み合わせ最高！",
      likes: 0,
      liked: false,
    },
    {
      id: 3,
      content: "プロフィール画面も作ってみました。",
      likes: 0,
      liked: false,
    },
  ];
  const [posts, setPosts] = useState(postData);
  const [star, setStar] = useState(false);
  const { id } = use(params);
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
    <div className="container">
      {/* ヘッダー画像とアイコン */}
      <div className="position-relative">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
          alt="header"
        />
        <img
          src="https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
          className="rounded-circle border border-white position-absolute mb-3"
          alt="アイコン"
          width="100"
          height="100"
          style={{
            bottom: "-50px",
            left: "20px",
            border: "4px solid white",
          }}
        />
      </div>

      {/* プロフィール情報 */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <h5 className="col-auto my-0">かんた</h5>
          {id === "user" ? (
            <></>
          ) : (
            <div className="col-auto row align-items-center gx-1">
              <div className="col-auto">
                <button className="btn" onClick={() => setStar(!star)}>
                  {star ? "★" : "☆"}
                </button>
              </div>
              <a className="btn btn-dark col-auto ms-2" href="/message">
                メッセージ
              </a>
            </div>
          )}
        </div>

        <p className="text-muted">@kanta_dev</p>
        <p>Next.jsでTwitter風UI開発中です。</p>
        <div className="d-flex gap-3 mb-3">
          <span>
            <strong>123</strong> フォロー中
          </span>
          <span>
            <strong>456</strong> フォロワー
          </span>
        </div>

        {/* 投稿一覧 */}
        <div className="">
          {posts.map((post) => (
            <div key={post.id} className="card mb-2">
              <div className="card-body">
                <h6 className="card-title">
                  <img
                    src="https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
                    alt="アイコン"
                    className="rounded-circle me-2"
                    width="30"
                    height="30"
                  />
                  かんた
                </h6>
                <p className="card-text">{post.content}</p>
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
      </div>
    </div>
  );
};

export default Profile;
