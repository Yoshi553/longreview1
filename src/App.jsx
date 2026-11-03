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

  const handleBack = () => {
    setSelectedPage(null);
  };

  return (
    <div className="app">
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
      ) : selectedPage === 1 ? (
        <Ver1 onBack={handleBack}/>
      ) : selectedPage === 2 ? (
        <Ver2 onBack={handleBack} />
      ) : selectedPage === 3 ? (
        <Ver3 onBack={handleBack} />
      ) : selectedPage === 4 ? (
        <Ver4 onBack={handleBack} />
      ) : null}
    </div>
  );
}

export default App;