import { useEffect, useState } from 'react';

function Card() {
  const [show, setShow] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const messages = [
    'Ba tháng – không quá dài, nhưng đủ để biết rằng: Dù có những lúc không hiểu nhau, có lúc mệt mỏi đến mức muốn rời đi… Nhưng cuối cùng, cả hai vẫn chọn ở lại.',
    'Cảm ơn em lúc nào cũng nghĩ cho anh, lúc nào cũng hỏi anh ổn không, nhìn vào mắt em là thấy em yêu anh nhiều như thế nào, anh cảm ơn em vì đã ở cạnh anh đã chọn anh là người đồng hành.',
    'Anh biết em bé của anh nhạy cảm lắm, có những lúc anh vô ý mà làm em bùn anh biết chứ mà anh ngốc quá ha, nhưng mong em hãy tha thứ cho kẻ ngốc này nhé.',
    'Anh mong mình sẽ cùng nhau vượt qua những khó khăn, để hiểu và thương nhau nhiều hơn nữa. — Từ anh, người luôn muốn giữ em lại bên đời.'
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
        {show === messages.length && !showVideo && (
          <button className="btn" onClick={() => setShowVideo(true)}>Còn nữa...</button>
        )}
        {showVideo && (
          <div className="video-box">
            <video controls width="100%">
              <source src="/video.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
export default Card;
