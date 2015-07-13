var mongoose = require('mongoose');

var swapSchema = mongoose.Schema({
    owner: { type: String, required: true },
    requester: { type: String, required: true },
    owner_album: { type: Object, required: true },
    requester_album: { type: Object },
    createdAt: { type: Date, default: Date.now },
    state: { type: String, default: 'new' }
});

module.exports = mongoose.model('Swap', swapSchema);
