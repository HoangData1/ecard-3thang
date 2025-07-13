import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(0);

  const messages = [
    'Ba tháng – không quá dài, nhưng đủ để biết rằng: Dù có những lúc không hiểu nhau, có lúc mệt mỏi đến mức muốn rời đi… Nhưng cuối cùng, cả hai vẫn chọn ở lại.',
    'Cuộc sống cứ xoay vần. Hai con người cùng muốn ở lại bên nhau — là điều rất khó.',
    'Anh không mong gì nhiều... Chỉ mong em hạnh phúc. Ở bên anh lâu hơn một chút.',
    'Cùng nhau vượt qua những khó khăn, để hiểu và thương nhau nhiều hơn nữa. — Từ anh, người luôn muốn giữ em lại bên đời.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => (prev < messages.length ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <audio autoPlay loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/24/audio_d77f7ba018.mp3?filename=romantic-piano-110148.mp3" type="audio/mpeg" />
        Trình duyệt không hỗ trợ audio.
      </audio>
      <div className="card">
        <h1 className="fade-in">💌 Gửi đến Lê Xuân Ly</h1>
        {messages.slice(0, show).map((msg, index) => (
          <p key={index} className="fade-in" style={{ animationDelay: `${index * 1}s` }}>{msg}</p>
        ))}
        {show === messages.length && (
          <button className="btn" onClick={() => alert('💖 Cảm ơn em đã bên anh!')}>Bấm vào đây nè 💖</button>
        )}
      </div>
    </div>
  );
}

export default App;