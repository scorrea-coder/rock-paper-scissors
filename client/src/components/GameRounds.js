import React, { useState } from 'react';
import GameAlert from './GameAlert';

const GameRounds = ({ player }) => {
  const [players, setPlayers] = useState({
    playerOne: {
      name: player.playerOne || 'Player One',
      score: 0,
      selected: 'move',
    },
    playerTwo: {
      name: player.playerTwo || 'Player Two',
      score: 0,
      selected: 'move',
    },
  });

  const [round, setRound] = useState(1);
  const [nextPlayer, setNextPlayer] = useState(true);
  const [value, setValue] = useState('');
  const [roundsWon, setRoundsWon] = useState([]);
  const [errors, setMessage] = useState({
    error: false,
    class: '',
    message: '',
  });

  const { playerOne, playerTwo } = players;

  const rounds = () => {
    setRound(nextPlayer ? round : round + 1);
    setNextPlayer(!nextPlayer);
  };

  const handleChange = (event) => {
    const users = { ...players };
    nextPlayer
      ? (users.playerOne.selected = event.target.value)
      : (users.playerTwo.selected = event.target.value);

    setPlayers({
      ...users,
    });

    setValue(event.target.value);
  };

  const handleFocus = () => {
    setValue('');
  };

  const reset = () => {
    if (playerOne.selected !== '' && playerTwo.selected !== '') {
      playerOne.selected = '';
      playerTwo.selected = '';
    }
  };

  const setWinner = (winner) => {
    setRoundsWon(state => state.concat({ rounds: round - 1, winner }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = { ...players };
    if (playerOne.selected === 'rock' && playerTwo.selected === 'paper') {
      users.playerTwo.score += 1;

      setPlayers({
        ...players,
        ...users,
      });

      setWinner(playerTwo.name);
    } else if (playerTwo.selected === 'rock' && playerOne.selected === 'paper') {
      users.playerOne.score += 1;

      setPlayers({
        ...players,
        ...users,
      });

      setWinner(playerOne.name);
    } else if (playerOne.selected === 'paper' && playerTwo.selected === 'scissors') {
      users.playerTwo.score += 1;

      setPlayers({
        ...players,
        ...users,
      });

      setWinner(playerTwo.name);
    } else if (playerTwo.selected === 'paper' && playerOne.selected === 'scissors') {
      users.playerOne.score += 1;

      setPlayers({
        ...players,
        ...users,
      });

      setWinner(playerOne.name);
    } else if (playerOne.selected === 'rock' && playerTwo.selected === 'scissors') {
      users.playerOne.score += 1;

      setPlayers({
        ...players,
        ...users,
      });

      setWinner(playerOne.name);
    } else if (playerTwo.selected === 'rock' && playerOne.selected === 'scissors') {
      users.playerTwo.score += 1;

      setPlayers({
        ...players,
        ...users,
      });

      setWinner(playerTwo.name);
    } else if (
      (playerTwo.selected === 'rock' && playerOne.selected === 'rock')
			|| (playerTwo.selected === 'scissors' && playerOne.selected === 'scissors')
			|| (playerTwo.selected === 'paper' && playerOne.selected === 'paper')
    ) {
      setMessage({
        error: true,
        class: 'danger',
        message: 'Its a tie',
      });
    } else if (playerTwo.selected === '' && playerOne.selected === '') {
      setMessage({
        error: true,
        class: 'danger',
        message: 'Select a valid option',
      });

      setRound(1);

      setNextPlayer(!nextPlayer);
    }
    reset();
  };

  return (
    <main className="round">
      <GameAlert className={errors.class} message={errors.message} />
      <h1>{`Round ${round}`}</h1>
      <h2>{nextPlayer ? players.playerOne.name : players.playerTwo.name}</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <select onChange={event => handleChange(event)} onBlur={() => handleFocus()} value={value}>
          <option>Move</option>
          <option value="rock">Rock</option>
          <option value="paper">Paper</option>
          <option value="scissors">Scissors</option>
        </select>
        <button onClick={() => rounds()} type="submit">
					[OK]
        </button>
      </form>
      <aside>
        <h1>Score</h1>
        <div>
          {roundsWon.map(data => (
            <div key={data.rounds + 2}>
              {`Round ${data.rounds}`}
              {data.winner}
            </div>
          ))}
          <div />
        </div>
      </aside>
    </main>
  );
};

export default GameRounds;
