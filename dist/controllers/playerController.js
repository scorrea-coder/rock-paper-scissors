"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlayers = exports.createPlayers = void 0;

var _players = _interopRequireDefault(require("../models/players"));

var _submitData = require("../utils/submitData");

const createPlayers = async (req, res) => {
  const {
    playerOne,
    playerTwo
  } = req.body;
  const users = {
    playerOne,
    playerTwo
  };
  const resp = await (0, _submitData.submitData)(_players.default, users);
  return res.status(200).json(resp);
};

exports.createPlayers = createPlayers;

const getPlayers = async (req, res) => {
  const players = await (0, _submitData.getDataByID)(_players.default, req.params.id);
  res.send(players);
};

exports.getPlayers = getPlayers;