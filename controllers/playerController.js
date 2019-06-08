'use strict';

const players = require('../models/players');
const validator = require('../utils/validator');
const sendDataToDB = require('../utils/submitData');

const createPlayers = (req, res) => {
const { player_1, player_2 } = req.body;

const users = {
	player_1,
	player_2
};

try {
	if (validator.isNotEmpty(player_1) && validator.isNotEmpty(player_2)) {
		sendDataToDB(players, users);
		return res.status(200).json({ users });
	}
	res.send('Who will be playing?');
} catch (error) {
	console.error(error.ValidationError);
	res.status(500).send('Server Error');
}
};

module.exports = createPlayers;
