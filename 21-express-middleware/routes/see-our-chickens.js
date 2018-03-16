const { Router } = require('express');
const chickenRoute = Router();
const { showChickens } = require('../controllers/chickenCtrl');

chickenRoute.get("/see-our-chickens", showChickens);

module.exports = chickenRoute;