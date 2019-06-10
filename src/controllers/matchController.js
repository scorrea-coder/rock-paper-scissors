import Match from '../models/match';
import { submitData, getDataByID } from '../utils/submitData';

const createMatchWinner = async (req, res) => {
  const { winner } = req.body;
  const resp = await submitData(Match, winner);
  return res.status(200).json(resp);
};

const getMatchWinner = async (req, res) => {
  const winner = await getDataByID(Match, req.params.id);
  res.send(winner);
};

export { createMatchWinner, getMatchWinner };
