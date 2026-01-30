import { useState, useEffect } from 'react'
import './App.css'
import GameHistory from './gameHistory.jsx';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [lastToss, setLastToss] = useState(null);
  const [currentSeries, setCurrentSeries] = useState(1);
  const [gameHistory, setGameHistory] = useState([]);

  const tossTheCoin = () => {
    return {
      playerName: playerName || 'Anonymous',
      result: Math.random() < 0.5 ? 'Heads' : 'Tails',
      timestamp: new Date()
    };
  };

  const playGame = () => {
    const tossResult = tossTheCoin();
    if(tossResult.result === lastToss?.result) {
      setCurrentSeries(currentSeries + 1);
    } else {
      setCurrentSeries(1);
    }

    setLastToss(tossResult);
    setGameHistory([...gameHistory, tossResult]);
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
    <button onClick={() => playGame()}>Toss the coin</button>
    <div>
      <h4>{lastToss?.result}</h4>
      {lastToss && (
        <span className='greyed-out'>({currentSeries} times in a row)</span>
      )}
    </div>
    <hr/>
    <GameHistory history={gameHistory} onClearHistory={clearGameHistory} /> 
  </div>
  );
}

export default App;