import { Router as _Router } from 'express';
import { createMatchWinner, getMatchWinner } from '../controllers/matchController';

const Router = _Router();

Router.post('/create/match/winner', createMatchWinner);

Router.get('/get/match/winner/:id', getMatchWinner);

export default Router;
