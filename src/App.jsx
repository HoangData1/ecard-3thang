import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Card from './Card';
import Loading from './Loading';
import Login from './Login';

function Main() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [opened, setOpened] = useState(false);

  if (!loadingDone) return <Loading onFinish={() => setLoadingDone(true)} />;

  return <div className="app">{!opened ? <Landing onOpen={() => setOpened(true)} /> : <Card />}</div>;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!loggedIn ? <Login onLoginSuccess={() => setLoggedIn(true)} /> : <Main />} />
        {/* <Route path="/video" element={<VideoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
