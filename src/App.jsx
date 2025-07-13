import { useState } from 'react';
import './App.css';
import Landing from './Landing';
import Card from './Card';

function App() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="app">
      {!opened ? <Landing onOpen={() => setOpened(true)} /> : <Card />}
    </div>
  );
}

export default App;