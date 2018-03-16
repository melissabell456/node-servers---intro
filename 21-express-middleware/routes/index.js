const { Router } = require('express');
const routes = Router();

routes.use(require('./see-our-chickens'));
routes.use(require('./see-our-eggs'));
routes.use(require('./home'));

module.exports = routes;