import { useState } from "react";
import Ver1 from "./components/Ver1.jsx";
import Ver2 from "./components/Ver2.jsx";
import Ver3 from "./components/Ver3.jsx";
import Ver4 from "./components/Ver4.jsx";

function App() {
  const [selectedPage, setSelectedPage] = useState(null);

  const pages = [
    "投稿画面①",
    "投稿画面②",
    "投稿画面③",
    "投稿画面④",
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>レビュー投稿</h1>
      </header>

      {selectedPage === null ? (
        <main className="post-container">
          <h2>投稿画面を選択してください</h2>

          <div className="page-list">
            {pages.map((page, index) => (
              <button
                key={index}
                className="post-button"
                onClick={() => setSelectedPage(index + 1)}
              >
                {page}
              </button>
            ))}
          </div>
        </main>
      ): selectedPage === 1 ? (
        <Ver1 />
      ): selectedPage === 2 ? (
        <Ver2 />
      ) : selectedPage === 3 ? (
        <Ver3 />
      ): actedPage === 4 ? (
        <Ver4 />
      )
      : (
        <main className="post-container">
          <h2>{pages[selectedPage - 1]}</h2>
          <p>この投稿画面はこれから作成します。</p>

          <button
            className="cancel-button"
            onClick={() => setSelectedPage(null)}
          >
            戻る
          </button>
        </main>
      )}
    </div>
  );
}

export default App;