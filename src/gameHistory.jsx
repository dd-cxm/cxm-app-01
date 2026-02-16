import { useState } from 'react'

const GameHistory = ({ history, onClearHistory }) => {
    const [searchGameHistoryInput, setSearchGameHistoryInput] = useState('');

    const onSearchGameHistoryInputChange = (e) => setSearchGameHistoryInput(e.target.value);

    const matchSearchTerm = (game) => {
        let gameString = `${game.playerName} ${game.result} ${game.timestamp}`;
        return searchGameHistoryInput && gameString.toLowerCase().includes(searchGameHistoryInput.toLowerCase());
    };
  
    return (
        <div className='game-history'>
            <div className='row'>
                <h2>Game History</h2>
                <span className='greyed-out'>{history.length} games played</span>
                <button onClick={() => onClearHistory()}>Clear History</button>
            </div>
            <div className='row'>
                <label htmlFor="searchGameHistoryInput">Search Game History: </label>
                <input id="searchGameHistoryInput" type="text" value={searchGameHistoryInput} onChange={onSearchGameHistoryInputChange} />
            </div>
            <ul>
                {history.map((game, index) => (
                    <GameHistoryItem game={game} key={index} isSearchResult={matchSearchTerm(game)} />
                ))}
            </ul>
        </div>
    );
}

const GameHistoryItem = ({ game, isSearchResult }) => {
    return (
        <li className={isSearchResult ? 'search-result' : ''}>
        {game.playerName} - {game.result} at {game.timestamp}
        </li>
    );
}

export default GameHistory;