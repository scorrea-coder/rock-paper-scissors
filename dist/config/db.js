"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = require("dotenv");

(0, _dotenv.config)({
  path: './src/config/.env'
});

const connectToDb = async () => {
  try {
    await _mongoose.default.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true
    });
  } catch (error) {
    _mongoose.default.disconnect();
  }
};

module.exports = connectToDb;