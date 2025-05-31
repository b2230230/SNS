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
    <div className="container custom-container mt-5">
      <form onSubmit={handleSubmit} className="mb-4 fixed-bottom row">
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
          <button type="submit" className="btn btn-lg btn-primary mt-3 me-2">
           送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default Message;
