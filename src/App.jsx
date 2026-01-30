import { useState, useEffect } from 'react'
import './App.css'
import GameHistory from './gameHistory.jsx';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [lastToss, setLastToss] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

   useEffect(() => {
    if (lastToss) {
      setGameHistory([...gameHistory, lastToss]);
    }
  }, [lastToss]);

  const tossTheCoin = () => {
    return {
      playerName: playerName,
      result: Math.random() < 0.5 ? 'Heads' : 'Tails',
      timestamp: new Date()
    };
  };

  const onPlayerNameInputChange = (e) => {
    setPlayerName(e.target.value);
    setLastToss(null);
  };

  const clearGameHistory = () => {
    setGameHistory([]);
    setLastToss(null);
  }

  return (
  <div>
    <h1>CoinToss</h1>

    <label htmlFor="playerNameInput">Player: </label>
    <input id="playerNameInput" type="text" value={playerName} onChange={onPlayerNameInputChange} />
    <button onClick={() => setLastToss(tossTheCoin())}>Toss the coin</button>
    <div>{lastToss?.result}</div>
    <hr/>
    <GameHistory history={gameHistory} onClearHistory={clearGameHistory} /> 
    {/* <h2>Game History</h2>
    <button onClick={() => clearGameHistory()}>Clear History</button>
    <ul>
      {gameHistory.map((game, index) => (
        <li key={index}>
          {game.playerName} - {game.result} at {game.timestamp.toLocaleTimeString()}
        </li>
      ))}
    </ul> */}
  </div>
  );
}

export default App;