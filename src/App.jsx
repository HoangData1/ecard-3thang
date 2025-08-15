import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Card';
import Loading from './Loading';
import Login from './Login';

function Main() {
  const [loadingDone, setLoadingDone] = useState(false);

  if (!loadingDone) return <Loading onFinish={() => setLoadingDone(true)} />;

  // Sau khi loading xong → hiển thị thiệp luôn
  return <div className="app"><Card /></div>;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!loggedIn ? <Login onLoginSuccess={() => setLoggedIn(true)} /> : <Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
