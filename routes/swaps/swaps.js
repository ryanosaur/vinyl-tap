var Swap = require('../../models/swap');

var routes = function(router) {
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
    Swap.find({ requester: req.params.username, state: 'new' }).exec(function(error, swaps){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(swaps);
    });
  });

  router.get('/swaps/to/:username', function(req, res, next){
    Swap.find({ owner: req.params.username, state: 'new' }).exec(function(error, swaps){
      if(error){
        console.log(error);
        res.status(400).json({ error: error });
      }
      res.json(swaps);
    });
  });

  return router;
}
module.exports = routes;
