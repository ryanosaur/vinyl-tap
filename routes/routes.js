var express = require('express');
var router = express.Router();

var routes = function(app, passport) {
  router.use('/', require('./auth/auth')(app, passport));
  router.use('/', require('./albums/albums')());
  router.use('/', require('./swaps/swaps')());
  router.use('/', require('./users/users')());

  return router;
}
module.exports = routes;
