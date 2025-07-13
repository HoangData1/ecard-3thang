function Landing({ onOpen }) {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>💌 Gửi đến Lê Xuân Ly</h1>
        <button className="open-btn" onClick={onOpen}>Mở thiệp</button>
      </div>
    </div>
  );
}

export default Landing;