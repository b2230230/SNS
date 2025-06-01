'use client';
import { useState } from 'react';

const ReaddForm = ({ onAdd }) => {
  const [content, setContent] = useState(' こんにちは！新しい投稿です。');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    // 投稿データを作成
    onAdd({ content, image });

    // フォームをリセット
    setContent('');
    setImage(null);
    setPreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="container custom-container mt-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="form-control form-control-lg mb-2"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="投稿内容を入力"
        />

        <input
          type="file"
          accept="image/*"
          className="form-control mb-2"
          onChange={handleImageChange}
        />

        {preview && (
          <div className="mb-2">
            <img
              src={preview}
              alt="プレビュー"
              style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-2">
          再投稿する
        </button>
      </form>
    </div>
  );
};

export default ReaddForm;
