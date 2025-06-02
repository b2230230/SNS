import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-custom">
        <BootstrapClient />
        <header className="fixed-top">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">大学専用SNS</span>
            </div>
          </nav>
        </header>
        <div
          className="dropdown mt-5 ms-4 pt-2 fixed-top"
          style={{ width: "50px" }}
        >
          <button
            className="btn btn-secondary btn-lg"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            &#9776;
          </button>
          <ul
            className="dropdown-menu"
            style={{ width: "auto", minWidth: "unset" }}
          >
            <li>
              <a className="dropdown-item" href="/profile/user">
                プロフィール
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                ホーム
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/search">
                検索
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/message">
                メッセージ
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/like">
                お気に入り
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/login">
                ログイン
              </a>
            </li>
          </ul>
        </div>
        <main className="mt-5 pt-2">{children}</main>
      </body>
    </html>
  );
}
