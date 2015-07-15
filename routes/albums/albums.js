var shuffle = require('knuth-shuffle').knuthShuffle, shuffledAlbums;
var Album = require('../../models/album');

var routes = function(router) {
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

  return router;
}
module.exports = routes;
