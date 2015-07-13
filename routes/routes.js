var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Swap = require('../models/swap');

var routes = function(app, passport) {
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

  router.post('/users/:username/albums', function(req, res) {
    User.findOne({
      username: req.params.username
    }, function(error, user) {
      if (error) {
        console.log(error);
        res.status(400).json({
          error: error
        });
      }
      if (!user) {
        res.status(404).json({
          error: 'User not found'
        });
      }
      var album = req.body;
      user.inventory.push(album);
      user.save(function(error, savedAlbum) {
        if (error) {
          console.log(error);
          res.status(400).json({
            error: error
          });
        }
        res.json(savedAlbum);
      });
    });
  });

  router.patch("/users/:username/albums", function(req, res) {
    console.log('check this shit!!!',req.body._id);
    User.findOneAndUpdate(
      {"username": req.params.username, "inventory._id": req.body._id },
      { $set: { 'inventory._id': req.body } },
      function(error, updatedInventory) {
      if (error) {
        console.log(error);
        res.status(400).json({
          error: error
        });
      }
      if (!updatedInventory) {
        res.status(404).json({
          error: 'Album not found'
        });
      }
      console.log(updatedInventory, 'new shit!!');
      res.json(updatedInventory);

    });
  });


//   router.patch("/users/:username/albums", function(req, res) {
//     User.find({
//   $and: [
//     {
//       "username": req.params.username
//     },
//     {
//       "inventory._id": req.body._id
//     }
//   ]
// }).forEach(function(item)
// {
//     console.log(item);
//
//     // User.save(item);
// });
//   });

  // router.patch('/users/:username/albums/:id', function(req, res){
  //   User.findOne({'username': req.params.username}, function(err, user){
  //     var thing = user.inventory.map(function(t){
  //       console.log('check this shit');
  //       if(t._id == req.params.id){return t;}
  //     });
  //     console.log(thing);
  //     thing[0].artist = req.body.artist;
  //     thing[0].album = req.body.album;
  //     thing[0].year = req.body.year;
  //     thing[0].genre = req.body.genre;
  //     thing[0].image_url = req.body.image_url;
  //     thing[0].state = req.body.state;
  //     thing[0].username = req.body.username;
  //     console.log(thing[0])
  //     user.save(function(er, us){
  //       if(er){console.log(er); res.json('fuck off');}
  //       res.json(us);
  //     });
  //   });
  // });

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
