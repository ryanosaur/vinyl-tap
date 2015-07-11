var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/hmo');

var Service = mongoose.model('Service', {
  title: { type: String, required: true, unique: false },
  state: { type: String, required: true, unique: false, default: 'active' },
  userid: { type: String, required: true, unique: false }
});

Service.on('index', function(error){
  if(error){
    console.log(error);
  }
});

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

module.exports = router;

