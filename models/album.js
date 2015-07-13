var mongoose = require('mongoose');

var albumSchema = mongoose.Schema({
  artist: { type: String, required: true },
  username: { type: String, required: true },
  album: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  image_url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Album', albumSchema);
