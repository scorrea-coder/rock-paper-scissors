const Router = require("express").Router();
const playerController = require("../controllers/playerController");

Router.post("/create/players", playerController);

module.exports = Router;
