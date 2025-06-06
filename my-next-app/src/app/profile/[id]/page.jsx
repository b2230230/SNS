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
          src={
            id === "user"
              ? "https://tabicoffret.com/uploads/b99dc17381e88e19cc064127da00e86d_m.jpg"
              : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
          }
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
          alt="header"
        />
        <img
          src={
            id === "user"
              ? "https://www.homes.co.jp/life/images/20211224021152/th_th_pixta_77370244_M-2000x1333.jpg"
              : "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
          }
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
          <h5 className="col-auto my-0">○○大学</h5>
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
                <h6 className="card-title d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <img
                      src={
                        id === "user"
                          ? "https://www.homes.co.jp/life/images/20211224021152/th_th_pixta_77370244_M-2000x1333.jpg"
                          : "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
                      }
                      alt="アイコン"
                      className="rounded-circle me-2"
                      width="30"
                      height="30"
                    />
                    ○○大学
                  </span>
                  <div className="dropdown">
                    <a
                      className="btn"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ・・・
                    </a>

                    <ul
                      className="dropdown-menu"
                      style={{ width: "auto", minWidth: "unset" }}
                    >
                      <li>
                        <a className="dropdown-item" href="/readdForm">
                          編集
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          削除
                        </a>
                      </li>
                    </ul>
                  </div>
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
