import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Card from './Card';
import VideoPage from './VideoPage';

function Main() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="app">
      {!opened ? <Landing onOpen={() => setOpened(true)} /> : <Card />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
