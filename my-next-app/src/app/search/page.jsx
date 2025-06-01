"use client";
import Link from "next/link";

import { useState } from "react";
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fakeData = [
      {
        id: 1,
        userId: "1",
        name: "A大学",

        image:
          "https://user0514.cdnw.net/shared/img/thumb/aig-ai221017313-xl_TP_V.jpg",
      },
      {
        id: 2,
        userId: "2",
        name: "B大学",

        image: null,
      },
      {
        id: 3,
        userId: "3",
        name: "C大学",
        image: null,
      },
    ];
    const filtered = fakeData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="container custom-container mt-5">
      <h1>検索フォーム</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="キーワードを入力"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          検索
        </button>
      </form>

      {results.length > 0 ? (
        <ul className="list-group">
          {results.map((item, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body">
                <Link
                  href={`/profile/${item.userId}`}
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
                    {item.name}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>結果がありません</p>
      )}
    </div>
  );
};

export default Search;
