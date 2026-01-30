const GameHistory = ({ history, onClearHistory }) => {
  return (
    <div>
      <h2>Game History</h2>
      <button onClick={() => onClearHistory()}>Clear History</button>
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