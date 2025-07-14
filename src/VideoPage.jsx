import { useNavigate } from 'react-router-dom';

function VideoPage() {
  const navigate = useNavigate();

  return (
    <div className="video-page">
      <div className="video-overlay">
        <h1>🎬 Kỷ niệm nhỏ của tụi mình</h1>
        <video controls width="100%" className="video-box">
          <source src="/video.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        <button className="back-btn" onClick={() => navigate('/')}>
        ← Quay lại trang thiệp
        </button>
      </div>
    </div>
  );
}

export default VideoPage;
