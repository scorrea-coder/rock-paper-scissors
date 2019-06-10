"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _playerController = require("../controllers/playerController");

const Router = (0, _express.Router)();
Router.post('/create/players', _playerController.createPlayers);
Router.get('/get/player/:id', _playerController.getPlayers);
var _default = Router;
exports.default = _default;