import { Router as _Router } from 'express';
import { createPlayers, getPlayers } from '../controllers/playerController';

const Router = _Router();

Router.post('/create/players', createPlayers);

Router.get('/get/player/:id', getPlayers);

export default Router;
