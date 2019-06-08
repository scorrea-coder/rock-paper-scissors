"use strict";

const players = require("../models/players");
const validator = require("../utils/validator");
const sendDataToDB = require("../utils/submitData");

const createPlayers = (req, res) => {
	const { playerOne, playerTwo } = req.body;

	const users = {
		playerOne,
		playerTwo
	};

	try {
		if (validator.isNotEmpty(playerOne) && validator.isNotEmpty(playerTwo)) {
			sendDataToDB(players, users);
			return res.status(200).json({ users });
		}
		res.send("Who will be playing?");
	} catch (error) {
		console.error(error.ValidationError);
		res.status(500).send("Server Error");
	}
};

module.exports = createPlayers;
