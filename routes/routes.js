var express = require('express');
var router = express.Router();
var users = require('./users/users');
var swaps = require('./swaps/swaps');
var albums = require('./albums/albums');
var auth = require('./auth/auth');

var routes = function(app, passport) {
  router.use('/', albums(router));
  router.use('/', swaps(router));
  router.use('/', users(router));
  router.use('/', auth(app, passport, router));

  return router;
}
module.exports = routes;
