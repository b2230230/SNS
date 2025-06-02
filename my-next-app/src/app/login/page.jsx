"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 仮のログイン処理：ここに認証処理を追加
    if (email.endsWith("@univ.ac.jp") && password === "pass123") {
      alert("ログイン成功！");
      router.push("/"); // ホーム画面へ遷移
    } else {
      alert("メールアドレスまたはパスワードが違います。");
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            大学メールアドレス
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="xxxx@univ.ac.jp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            パスワード
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          ログイン
        </button>
      </form>
    </div>
  );
}