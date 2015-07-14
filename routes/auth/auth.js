var express = require('express');
var router = express.Router();
var User = require('../../models/user');

var routes = function(app, passport) {
  router.get('/session', function(req, res, next){
    res.json(req.user);
  });

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(error, user, info) {
      console.log(error, user, info);
      if (error) {
        console.log(error);
      }
      if (!user) {
        res.status(400).json({
          message: 'could not authenicate: ',
          error: info
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json({
          message: 'Auth success! ',
          user: user
        });
      });
    })(req, res, next);
  });

  router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(error, user, info) {
      console.log(error, user, info);
      if (error) {
        res.status(400).json({
          message: 'could not authenicate: ',
          error: error
        });
      }
      if (!user) {
        res.contentType("text/javascript");
        res.status(400).json({
          message: 'could not authenicate: ',
          error: info
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json({
          message: 'Auth success! ',
          user: user
        });
      });
    })(req, res, next);
  });

  router.get("/logout", function(req, res) {
    req.logout();
    res.json({
      message: 'Logout success!'
    });
  });

  return router;
}

module.exports = routes;
