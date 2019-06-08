const router = require('express').Router();
const playerController = require('../controllers/playerController');

router.post('/create/players', playerController);

module.exports = router;
