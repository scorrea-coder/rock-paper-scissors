import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const playerSchema = new Schema({
  playerOne: {
    type: String,
    required: true,
  },
  playerTwo: {
    type: String,
    required: true,
  },
});

export default model('players', playerSchema);
