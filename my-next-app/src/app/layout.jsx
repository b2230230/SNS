import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <BootstrapClient />
      <body>
        <header className="mt-4 ms-4 fixed-top">
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-lg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &#9776;
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  プロフィール
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
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
        <main>{children}</main>
        <footer className="mb-4 fixed-bottom">
          <div className="d-flex justify-content-end me-5">
            <button className="btn btn-dark btn-lg">+</button>
          </div>
        </footer>
      </body>
    </html>
  );
}
