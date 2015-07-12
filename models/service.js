var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
  title: { type: String, required: true, unique: false },
  duration: { type: String, required: true, unique: false },
  state: { type: String, required: true, unique: false, default: 'active' },
  userid: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Service', serviceSchema);
