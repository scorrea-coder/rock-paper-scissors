import React, { useState } from 'react';
import GameAlert from './GameAlert';

const GameStart = ({ getPlayerId, history }) => {
  const [playerNames, setPlayerNames] = useState({
    id: '',
    playerOne: '',
    playerTwo: '',
  });

  const [errors, setMessage] = useState({
    error: false,
    class: '',
    message: '',
  });

  const { playerOne, playerTwo } = playerNames;

  const onChange = (event) => {
    setPlayerNames({ ...playerNames, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (playerOne.trim() === '' || playerTwo.trim() === '') {
        setMessage({
          ...errors,
          error: true,
          message: 'Two players are required to play',
          class: 'danger',
        });
      } else {
        setMessage({
          error: false,
          message: '',
        });

        const res = await fetch('http://localhost:5000/api/create/players/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ playerOne, playerTwo }),
        });

        const playerData = await res.json();

        if (playerData._id) {
          getPlayerId(playerData._id);
          history.push('/start');
        }
      }
    } catch (error) {
      setMessage({
        ...errors,
        error: true,
        message: error.message,
        class: 'danger',
      });
    }
  };

  return (
    <main>
      <GameAlert message={errors.message} className={errors.class} />
      <div className="background" />
      <section className="gameStart">
        <h1>
          {"Enter Player's name"}
          {' '}
        </h1>

        <form className="gameStart__form" onSubmit={event => onSubmit(event)} noValidate>
          <label htmlFor="playerOne">
						Player 1
            <input
              name="playerOne"
              type="text"
              id="playerOne"
              required
              onChange={event => onChange(event)}
            />
          </label>
          <label htmlFor="playerTwo">
						Player 2
            <input
              name="playerTwo"
              type="text"
              id="playerTwo"
              required
              onChange={event => onChange(event)}
            />
          </label>
          <button className="gameStart__form-submit" type="submit">
						Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default GameStart;
