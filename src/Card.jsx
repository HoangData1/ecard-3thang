import "./Card.css";

export default function Card() {
  return (
    <div className="ecard-container">
      <div className="ecard">
        <h2 className="ecard-invite">TRÂN TRỌNG KÍNH MỜI BÉ YÊU CỦA ANH</h2>
        <h1 className="ecard-names">Xuân Ly 💖 Huy Hoàng</h1>
        <p className="ecard-message">
          21h tối ngày <strong>15/08</strong> — Mời em tới dự tiệc kỷ niệm 4 tháng của đôi ta.
          Tuy không phải nhà hàng sang trọng, nhưng anh mong em tới để nhận những món quà nhỏ từ anh.
          Và sáng sớm tinh mơ hôm sau, mình sẽ cùng nhau tới{" "}
          <strong>Bảo tàng Tôn Đức Thắng</strong> để lưu lại những tấm hình kỷ niệm thật xinh. 📸
        </p>
        <div className="ecard-info">
          <p>📍 Địa điểm: Pacho Pocha Express 220/58 Lê Văn Sỹ, P.14, Q.3</p>
          <p>🗓 Ngày: 15/08/2025</p>
        </div>
      </div>
    </div>
  );
}
