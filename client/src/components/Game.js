import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameStart from './GameStart';
import GameRounds from './GameRounds';
import GameWin from './GameWin';
import '../styles/game.css';

const Game = () => {
  const [player, setPlayer] = useState({ id: '', playerOne: '', playerTwo: '' });
  const [winner, setWinner] = useState({ id: '', winner: '' });

  const getPlayerId = (fetchedId) => {
    if (fetchedId) {
      setPlayer({
        ...player,
        id: fetchedId,
      });
    }
  };

  const getWinnerId = (fetchedId) => {
    if (fetchedId) {
      setWinner({ ...winner, id: fetchedId });
    }
  };

  useEffect(() => {
    const getPlayer = async () => {
      const resp = await fetch(`https://rock-paper-scissors-app-io.herokuapp.com/api/get/player/${player.id}`);
      const players = await resp.json();
      setPlayer({
        playerOne: players.playerOne,
        playerTwo: players.playerTwo,
      });
    };
    if (player.id) {
      getPlayer();
    }
  }, [player.id]);

  return (
    <Router>
      <Route
        path="/"
        exact
        component={props => <GameStart {...props} getPlayerId={getPlayerId} />}
      />
      <Route
        path="/start"
        exact
        component={props => <GameRounds {...props} player={player} getWinnerId={getWinnerId} />}
      />
      <Route
        path="/winner"
        exact
        component={props => <GameWin {...props} matchWinner={winner} />}
      />
    </Router>
  );
};

export default Game;
