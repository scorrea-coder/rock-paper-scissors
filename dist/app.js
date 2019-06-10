"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _db = _interopRequireDefault(require("./config/db"));

const app = (0, _express.default)();
(0, _db.default)();
app.use((0, _cors.default)());
app.use((0, _express.json)({
  extended: false
}));
app.use('/api', require('./routes/players').default);
app.use('/api', require('./routes/match').default);
var _default = app;
exports.default = _default;