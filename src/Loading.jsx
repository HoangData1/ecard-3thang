import './Loading.css';

function Loading({ onFinish }) {
  // Chuyển sau 4 giây
  setTimeout(onFinish, 6000);

  return (
    <div className="loading-container">
      <div className="torch-wrapper">
        <img src="/bear.png" alt="Bear" className="bear" />
        <div className="flame"></div>
      </div>
      <p className="loading-text">Đang đốt lửa lên thiệp...</p>
    </div>
  );
}

export default Loading;
