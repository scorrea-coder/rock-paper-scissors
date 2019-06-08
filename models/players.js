const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	playerOne: {
		type: String,
		required: true
	},
	playerTwo: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("players", playerSchema);
