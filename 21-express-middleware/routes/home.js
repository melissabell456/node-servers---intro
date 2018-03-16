const { Router } = require('express');
const home = Router();
const { displayHome } = require('../controllers/homeCtrl');

home.get("/home", displayHome);

module.exports = home;