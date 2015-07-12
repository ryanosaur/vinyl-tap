var express = require('express');
var router = express.Router();
var User = require('../models/user');

var routes = function(app, passport){
  router.post('/signup', function(req, res, next){
    passport.authenticate('local-signup', function(error, user, info) {
      console.log(error, user, info);
      if (error) {
        console.log(error);
      }
      if (!user) {
        res.status(400).json({ message: 'could not authenicate: ', error: info });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json({ message: 'Auth success! ', user: user });
      });
    })(req, res, next);
  });

  router.post('/login', function(req, res, next){
    passport.authenticate('local-login', function(error, user, info) {
      console.log(error, user, info);
      if (error) {
        console.log(error);
      }
      if (!user) {
        res.status(400).json({ message: 'could not authenicate: ', error: info });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json({ message: 'Auth success! ', user: user });
      });
    })(req, res, next);
  });

  return router;
}
module.exports = routes;
