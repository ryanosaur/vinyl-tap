var mongoose = require('mongoose');

var swapsSchema = mongoose.Schema({
    owner: { type: String, required: true },
    requester: { type: String, required: true },
    owner_album: { type: Number, required: true },
    requester_album: { type: String },
    state: { type: String, default: 'active' }
});

module.exports = mongoose.model('Swaps', swapsSchema);
