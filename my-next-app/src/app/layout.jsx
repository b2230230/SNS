import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
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
          <div className="dropdown mt-4 ms-4">
            <button
              className="btn btn-secondary btn-lg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &#9776;
            </button>
            <ul className="dropdown-menu" style={{ width: 'auto', minWidth: 'unset' }}>
              <li>
                <a className="dropdown-item" href="#">
                  プロフィール
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  ホーム
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  検索
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  メッセージ
                </a>
              </li>
            </ul>
          </div>{" "}
        </header>
        <main className="mt-5 pt-1">{children}</main>
        <footer className="mb-5 fixed-bottom">
          <div className="d-flex justify-content-end me-5">
            <a className="btn btn-primary btn-lg"  style={{ width: '50px', height: '50px', borderRadius: '50%' }} href="/addForm">+</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
