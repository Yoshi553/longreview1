import { useState } from "react";
import { heicTo } from "heic-to";

function Ver3({ onBack }) {
  // リピありレベル
  const [rating, setRating] = useState(0);

  // 選択した写真
  const [photo, setPhoto] = useState(null);

  // 投稿完了状態
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 写真を選択したときの処理
  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      let imageFile = file;

      // HEIC・HEIF形式の場合
      if (/\.(heic|heif)$/i.test(file.name)) {
        imageFile = await heicTo({
          blob: file,
          type: "image/jpeg",
          quality: 0.8,
        });
      }

      setPhoto(URL.createObjectURL(imageFile));
    } catch (error) {
      console.error("画像の変換に失敗しました:", error);
      alert("画像を読み込めませんでした。");
    }
  };
  // 投稿ボタンを押したときの処理
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  // 投稿完了画面
  if (isSubmitted) {
    return (
      <div className="app">
        <div className="success-container">
          <h1>投稿しました！</h1>
          <p>レビューの投稿が完了しました。</p>

          <button className="post-button" onClick={() => setIsSubmitted(false)}>
            戻る
          </button>
        </div>
      </div>
    );
  }

  // 投稿作成画面
  return (
    <div className="app">
      <button type="button" className="cancel-button" onClick={onBack}>
        選択画面に戻る
      </button>

      <main className="post-container">
        <form onSubmit={handleSubmit}>
          {/* お店の名前 */}
          <section className="form-section">
            <h2>📍お店の名前</h2>
            <input type="text" placeholder="みんなに感想を伝えましょう" />
          </section>

          {/* リピありレベル */}
          <section className="form-section">
            <h2>リピありレベル</h2>

            <div className="rating">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setRating(num)}
                  style={{
                    color: num <= rating ? "#ffc107" : "#ccc",
                  }}
                >
                  ★
                </button>
              ))}
            </div>
          </section>

          {/* 写真 */}
          <section className="form-section">
            <h2>写真</h2>

            <input type="file" accept="image/*" onChange={handlePhotoChange} />

            {/* 選択した写真のプレビュー */}
            {photo && (
              <div className="photo-preview">
                <img src={photo} alt="選択した写真" />
              </div>
            )}
          </section>

          {/* コメント */}
          <section className="form-section">
            <h2>コメント</h2>
            <textarea placeholder="お店の感想を入力してください" rows="5" />
          </section>

          {/* 投稿ボタン */}
          <div className="button-area">
            <button
              type="button"
              className="cancel-button"
              onClick={() => {
                setRating(0);
                setPhoto(null);
              }}
            >
              キャンセル
            </button>

            <button type="submit" className="post-button">
              投稿する
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Ver3;
