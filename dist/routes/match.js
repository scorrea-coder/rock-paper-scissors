"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _matchController = require("../controllers/matchController");

const Router = (0, _express.Router)();
Router.post('/create/match/winner', _matchController.createMatchWinner);
Router.get('/get/match/winner/:id', _matchController.getMatchWinner);
var _default = Router;
exports.default = _default;