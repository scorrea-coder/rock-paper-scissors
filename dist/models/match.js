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
const matchSchema = new Schema({
  match: {
    winner: {
      type: String
    }
  }
});

var _default = (0, _mongoose.model)('match', matchSchema);

exports.default = _default;