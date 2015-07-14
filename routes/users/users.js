var express = require('express');
var router = express.Router();
var User = require('../../models/user');

var routes = function() {
  router.get('/users/:username', function(req, res, next) {
    User.findOne({ username: req.params.username }).exec(function(error, users) {
      if (error) {
        console.log(error);
        res.status(400).json({
          error: error
        });
      }
      res.json(users);
    });
  });

  router.get('/users', function(req, res, next) {
    User.find({}).exec(function(error, users) {
      if (error) {
        console.log(error);
        res.status(400).json({
          error: error
        });
      }
      res.json(users);
    });
  });
  
  return routes
}

module.exports = routes;
