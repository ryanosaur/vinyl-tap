var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Swap = require('../models/swap');
var Album = require('../models/album');
var shuffle = require('knuth-shuffle').knuthShuffle, shuffledAlbums;

var routes = function(app, passport) {
  router.get('/session', function(req, res, next){
    res.json(req.user);
  });

  router.post('/users/:username/albums', function(req, res, next) {
    var newAlbum = req.body;
    newAlbum.username = req.params.username;
    var album = new Album(newAlbum);

    album.save(function(error, savedAlbum){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(savedAlbum);
    });
  });

  router.get('/albums', function(req, res, next){
    Album.find({}).sort({ createdAt: 'desc' }).limit(24).exec(function(error, usersAlbums){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      shuffledAlbums = shuffle(usersAlbums.slice(0));
      res.json(shuffledAlbums);
    });
  });

  router.get('/users/:username/albums', function(req, res, next){
    Album.find({ username: req.params.username }).sort({ createdAt: 'desc' }).exec(function(error, usersAlbums){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(usersAlbums);
    });
  });

  router.patch("/users/:username/albums/:id", function(req, res, next) {
    Album.findOneAndUpdate(
      { _id : req.params.id },
      req.body,
      { new: true },
      function(error, updatedAlbum) {
        if (error) {
          console.log(error);
          res.status(400).json({ error: error });
        }
        if (!updatedAlbum) {
          res.status(404).json({ error: 'Album not found' });
        }
        res.json(updatedAlbum);
      }
    );
  });

  router.delete('/users/:username/albums/:id', function(req, res, next){
    Album.findOneAndRemove(
      { _id: req.params.id },
      function(error, removedAlbum){
        console.log(error, removedAlbum);
        if (error) {
          console.log(error);
          res.status(400).json({ error: error });
        }
        if (!removedAlbum) {
          res.status(404);
        }
        res.json({message: 'question deleted'});
      }
    );
  });

  router.post('/swaps', function(req, res, next){
    var swap = new Swap(req.body);

    swap.save(function(error, savedSwap){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(savedSwap);
    });
  });

  router.patch('/swaps/:id', function(req, res, next){
    Swap.findOneAndUpdate(
      { _id: req.params.id },
      req.body, { new: true },
      function(error, updatedSwap){
        if(error){
          console.log(error);
          res.status(400).json({ error: error });
        }
        if(!updatedSwap){
          res.status(404).json({ error: 'Could not find swap' });
        }
        res.json(updatedSwap);
      }
    );
  });

  router.get('/swaps/from/:username', function(req, res, next){
    Swap.find({ requester: req.params.username }).exec(function(error, swaps){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(swaps);
    });
  });

  router.get('/swaps/to/:username', function(req, res, next){
    Swap.find({ owner: req.params.username }).exec(function(error, swaps){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(swaps);
    });
  });

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

  return router;
}
module.exports = routes;
