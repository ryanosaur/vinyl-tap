var express = require('express');
var router = express.Router();
var Service = require('../models/service');

var routes = function(app, passport){
  router.post('/services', function(req, res, next){
    var newService = new Service(req.body);
    newService.save(function(error, savedService){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(savedService);
    });
  });

  router.get('/services', function(req, res, next){
    Service.find({}).exec(function(error, services){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(services);
    });
  });

  router.get('/services/:id', function(req, res, next){
    Service.find({ _id: req.params.id }).exec(function(error, service){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(service);
    });
  });

  router.post('/signup', function(req, res, next){
    passport.authenticate('local-signup', function(error, user, info) {
      console.log(error, user, info);
      if (error) {
        console.log(error);
      }
      if (!user) {
        res.json({ message: 'could not authenicate: ', error: info });
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
        res.json({ message: 'could not authenicate: ', error: info });
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
