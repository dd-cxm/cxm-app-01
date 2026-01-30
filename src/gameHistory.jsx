const GameHistory = ({ history, onClearHistory }) => {
  return (
    <div>
      <h2>Game History</h2>
      <div>
        <span className='greyed-out'>{history.length} games played</span>
        <button onClick={() => onClearHistory()}>Clear History</button>
      </div>
      <ul>
        {history.map((game, index) => (
          <GameHistoryItem game={game} key={index} />
        ))}
      </ul>
    </div>
  );
}

const GameHistoryItem = ({ game }) => {
  return (
    <li>
      {game.playerName} - {game.result} at {game.timestamp.toLocaleTimeString()}
    </li>
  );
}

export default GameHistory;