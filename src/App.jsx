import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [playerName, setPlayerName] = useState('');
  const [lastToss, setLastToss] = useState(null);

  const tossTheCoin = () => {
    return {
      result: Math.random() < 0.5 ? 'Heads' : 'Tails',
      timestamp: new Date()
    };
  };

  const onPlayerNameInputChange = (e) => {
    setPlayerName(e.target.value);
    setLastToss(null);
  };

  return (
  <div>
    <h1>CoinToss</h1>

    <label htmlFor="playerNameInput">Player: </label>
    <input id="playerNameInput" type="text" value={playerName} onChange={onPlayerNameInputChange} />
    <button onClick={() => setLastToss(tossTheCoin())}>Toss the coin</button>
    <div>{lastToss?.result}</div>
  </div>
  );
}

export default App;