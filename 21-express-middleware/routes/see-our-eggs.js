const { Router } = require('express');
const egg = Router();
const { displayEgg } = require('../controllers/eggCtrl');

egg.get("/egg", displayEgg);

module.exports = egg;