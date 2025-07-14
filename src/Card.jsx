import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card() {
  const [show, setShow] = useState(0);
  const navigate = useNavigate();

  const messages = [
    'Ba tháng – không dài, nhưng đủ để thấy: Dù có lúc mệt mỏi, cả hai vẫn chọn ở lại bên nhau.',
    'Cảm ơn em luôn quan tâm, luôn hỏi anh ổn không. Nhìn vào mắt em, anh biết mình được yêu rất nhiều.',
    'Anh biết em rất nhạy cảm, đôi khi anh vô tâm khiến em buồn. Tha thứ cho kẻ ngốc này nhé.',
    'Anh mong ta sẽ cùng vượt qua mọi khó khăn, để hiểu và thương nhau nhiều hơn nữa.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => (prev < messages.length ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h1 className="fade-in">💌 Gửi đến Xuân Ly của Anh</h1>
      <div className="content-box">
        {messages.slice(0, show).map((msg, index) => (
          <p key={index} className="fade-in" style={{ animationDelay: `${index * 1}s` }}>
            {msg}
          </p>
        ))}
        {show === messages.length && (
          <button className="btn" onClick={() => navigate('/video')}>Còn nữa...</button>
        )}
      </div>
    </div>
  );
}

export default Card;
