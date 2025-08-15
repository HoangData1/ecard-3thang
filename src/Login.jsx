import { useState } from 'react';
import './App.css';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'xuanly' && password === '15082025') {
      onLoginSuccess();
    } else {
      setError('Sai tài khoản hoặc mật khẩu rồi đó 😢');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">
        <h2>Đăng nhập vào thiệp 💖</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Vào xem thiệp</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
