"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatchWinner = exports.createMatchWinner = void 0;

var _match = _interopRequireDefault(require("../models/match"));

var _submitData = require("../utils/submitData");

const createMatchWinner = async (req, res) => {
  const {
    winner
  } = req.body;
  const resp = await (0, _submitData.submitData)(_match.default, winner);
  return res.status(200).json(resp);
};

exports.createMatchWinner = createMatchWinner;

const getMatchWinner = async (req, res) => {
  const winner = await (0, _submitData.getDataByID)(_match.default, req.params.id);
  res.send(winner);
};

exports.getMatchWinner = getMatchWinner;