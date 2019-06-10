"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

const {
  Schema
} = _mongoose.default;
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

var _default = (0, _mongoose.model)('players', playerSchema);

exports.default = _default;