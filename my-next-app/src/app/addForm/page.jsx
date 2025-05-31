"use client";
import { useState } from "react";
const AddForm = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onAdd(content);
    setContent("");
  };

  return (
    <div className="container custom-container mt-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="form-control form-control-lg"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="投稿内容を入力"
        />
        <button type="submit" className="btn btn-primary mt-2">
          投稿する
        </button>
      </form>
    </div>
  );
};

export default AddForm;
