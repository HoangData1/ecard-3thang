import { motion } from "framer-motion";

export default function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[350px] bg-pink-200 rounded-lg shadow-lg p-6 text-center"
      >
        <h2 className="text-gray-700 italic mb-2">TRÂN TRỌNG KÍNH MỜI</h2>
        <h1 className="text-3xl font-[cursive] text-pink-600 mb-6">
          Xuân Ly 💖 Huy Hoàng
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          21h tối ngày <strong>15/08</strong> — Mời em tới dự tiệc kỷ niệm 4 tháng của đôi ta.
          Tuy không phải nhà hàng sang trọng, nhưng anh mong em tới để nhận những món quà nhỏ từ anh.
          Và sáng sớm tinh mơ hôm sau, mình sẽ cùng nhau tới{" "}
          <strong>Bảo tàng Tôn Đức Thắng</strong> để lưu lại những tấm hình kỷ niệm thật xinh. 📸
        </p>
        <div className="text-gray-600">
          <p>📍 Địa điểm: Pacho Pocha Express 220/58 Lê Văn Sỹ, P.14, Q.3</p>
          <p>🗓 Ngày: 15/08/2025</p>
        </div>
      </motion.div>
    </div>
  );
}
