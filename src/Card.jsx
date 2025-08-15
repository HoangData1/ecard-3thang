import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-yellow-50 p-4">
      <div className="relative w-[350px] h-[500px] perspective">

        {/* Cánh trái */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: opened ? -150 : 0 }}
          transition={{ duration: 1 }}
          className="absolute w-1/2 h-full left-0 top-0 origin-left bg-pink-200 shadow-lg overflow-hidden z-20"
          onClick={() => setOpened(true)}
        >
          <img
            src="https://pngimg.com/d/flower_PNG54451.png"
            alt="flower left"
            className="absolute top-0 left-0 w-32 opacity-80"
          />
        </motion.div>

        {/* Cánh phải */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: opened ? 150 : 0 }}
          transition={{ duration: 1 }}
          className="absolute w-1/2 h-full right-0 top-0 origin-right bg-pink-200 shadow-lg overflow-hidden z-20"
          onClick={() => setOpened(true)}
        >
          <img
            src="https://pngimg.com/d/flower_PNG54454.png"
            alt="flower right"
            className="absolute bottom-0 right-0 w-32 opacity-80"
          />
        </motion.div>

        {/* Nội dung bên trong */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: opened ? 1 : 0 }}
          transition={{ delay: opened ? 1 : 0, duration: 0.8 }}
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 text-center z-10"
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
          <div className="text-gray-600 mb-6">
            <p>📍 Địa điểm: Pacho Pocha Express 220/58 Lê Văn Sỹ, P.14, Q.3</p>
            <p>🗓 Ngày: 15/08/2025</p>
          </div>
          <button
            onClick={() => navigate("/video")}
            className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition"
          >
            Còn nữa...
          </button>
        </motion.div>
      </div>
    </div>
  );
}



\