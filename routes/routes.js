var express = require('express');
var router = express.Router();
var User = require('../models/user');

var routes = function(app, passport){
  router.post("/users/:id/albums", function(req, res) {
    User.findOne({
      username: req.params.id
    }, function(error, user) {
      if (err) {
        console.log(error);
        res.status(400).json({ error: error });
      }
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }
      var album = req.body;
      user.inventory.push(album);
      user.save(function(error, savedAlbum) {
        if (error) {
          console.log(error);
          res.status(400).json({ error: error });
        }
        res.json(savedAlbum);
      });
    });
  });

  router.get('/users', function(res, req, next){
    User.find({}).exec(function(error, users){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(users);
    });
  })

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
