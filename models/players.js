const mongoose = require('mongoose');
const schema = mongoose.Schema;

const playerSchema = new schema({
	player_1: {
		type: String,
		required: true
	},
	player_2: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('players', playerSchema);
