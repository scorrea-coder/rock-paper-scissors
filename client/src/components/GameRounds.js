import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameAlert from './GameAlert';

const GameRounds = ({ player, getWinnerId, history }) => {
  const [players, setPlayers] = useState({
    playerOne: {
      name: player.playerOne || 'Player One',
      score: 0,
      selected: '',
    },
    playerTwo: {
      name: player.playerTwo || 'Player Two',
      score: 0,
      selected: '',
    },
  });

  const [round, setRound] = useState(1);
  const [nextPlayer, setNextPlayer] = useState(true);
  const [value, setValue] = useState('');
  const [roundsWon, setRoundsWon] = useState([]);
  const [gameWinner, setGameWinner] = useState({ id: '', winner: '' });
  const [errors, setMessage] = useState({
    error: false,
    class: '',
    message: '',
  });

  const { playerOne, playerTwo } = players;

  const reset = () => {
    if (playerOne.selected !== '' && playerTwo.selected !== '') {
      playerOne.selected = '';
      playerTwo.selected = '';
    }
  };

  const rounds = () => {
    setRound(nextPlayer ? round : round + 1);
    setNextPlayer(!nextPlayer);
  };

  const handleChange = (event) => {
    const users = { ...players };
    setValue(event.target.value);

    nextPlayer
      ? (users.playerOne.selected = event.target.value)
      : (users.playerTwo.selected = event.target.value);

    setPlayers({
      ...users,
    });

    setMessage({
      errors: false,
      class: '',
      message: '',
    });
  };

  const handleFocus = () => {
    setValue('');
  };

  const setWinner = (winner) => {
    setRoundsWon(state => state.concat({ rounds: round - 1, winner }));
  };

  const choiceHandler = () => {
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
    }
  };

  const winGame = async () => {
    if (playerOne.score === 3) {
      setGameWinner({ ...gameWinner, winner: playerOne.name });
    } else if (playerTwo.score === 3) {
      setGameWinner({ ...gameWinner, winner: playerTwo.name });
    }

    if (playerTwo.score === 3 || playerOne.score === 3) {
      const resp = await fetch(
        'https://rock-paper-scissors-app-io.herokuapp.com/api/create/match/winner',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ winner: gameWinner.winner }),
        },
      );

      const matchData = await resp.json();
      getWinnerId(matchData._id);
      history.push('/start');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    choiceHandler();
    winGame();
    reset();
  };

  return (
    <div>
      <GameAlert className={errors.class} message={errors.message} />
      <main className="match">
        <section>
          <h1>{`Round ${round}`}</h1>
          <h2>{nextPlayer ? players.playerOne.name : players.playerTwo.name}</h2>
          <form onSubmit={event => handleSubmit(event)}>
            <select
              onChange={event => handleChange(event)}
              onBlur={() => handleFocus()}
              value={value}
            >
              <option value="">Move</option>
              <option value="rock">Rock</option>
              <option value="paper">Paper</option>
              <option value="scissors">Scissors</option>
            </select>
            <button onClick={() => rounds()} type="submit">
							[OK]
            </button>
          </form>
        </section>
        <aside>
          <h1>Score</h1>
          <div className="leaderboard">
            <div className="leaderboard__inner">
              <h3>Winner</h3>
              <div className="rounds__count">
                {roundsWon.map(data => (
                  <ul key={data.rounds + 2}>
                    <li>{`Round ${data.rounds}`}</li>
                    <li>{data.winner}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

GameRounds.propTypes = {
  player: PropTypes.object.isRequired,
  getWinnerId: PropTypes.func.isRequired,
};

export default GameRounds;
