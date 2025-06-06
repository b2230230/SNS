"use client";

import { useState } from "react";
const Message = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onAdd(content);
    setContent("");
  };
  return (
    <div className="container custom-container">
      <div className="text-center border-bottom">
        <h2
          className="card-title d-inline-flex align-items-center"
          style={{ gap: "8px", height: "35px" }}
        >
          <img
            src="https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg"
            alt="アイコン"
            className="rounded-circle"
            width="35"
            height="35"
          />
          ○○大学
        </h2>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "80%",
        }}
      >
        <form onSubmit={handleSubmit} className="mb-4 row">
          <div className="col ms-2">
            <textarea
              className="form-control form-control-lg"
              rows="2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="メッセージを入力"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-lg btn-primary mt-3">
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
