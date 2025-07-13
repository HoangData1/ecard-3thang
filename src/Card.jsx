import { useEffect, useState } from 'react';

function Card() {
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
    <div className="card">
      <h1 className="fade-in">💖 Thiệp kỷ niệm 3 tháng 💖</h1>
      {messages.slice(0, show).map((msg, index) => (
        <p key={index} className="fade-in" style={{ animationDelay: `${index * 1}s` }}>{msg}</p>
      ))}
      {show === messages.length && (
        <button className="btn" onClick={() => alert('💖 Anh yêu em nhiều lắm!')}>Bấm vào đây nè 💖</button>
      )}
    </div>
  );
}

export default Card;