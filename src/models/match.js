import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const matchSchema = new Schema({
  winner: {
    type: String,
  },
});

export default model('match', matchSchema);
