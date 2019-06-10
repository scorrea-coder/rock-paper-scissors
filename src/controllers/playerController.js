import Players from '../models/players';
import { submitData, getDataByID } from '../utils/submitData';

const createPlayers = async (req, res) => {
  const { playerOne, playerTwo } = req.body;

  const users = {
    playerOne,
    playerTwo,
  };

  const resp = await submitData(Players, users);
  return res.status(200).json(resp);
};

const getPlayers = async (req, res) => {
  const players = await getDataByID(Players, req.params.id);
  res.send(players);
};

export { createPlayers, getPlayers };
