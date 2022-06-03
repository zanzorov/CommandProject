const { Router } = require("express");

const route = Router();

route.use(require('./brands.route'));
route.use(require('./carts.route'));
route.use(require('./categories.route'));
route.use(require('./clients.route'));
route.use(require('./products.route'));
route.use(require('./reviews.route'));

module.exports = route;