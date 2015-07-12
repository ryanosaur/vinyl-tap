var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    email : { type: String, required: true, unique: true },
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    name: { type: String, required: true },
    inventory: [{ artist: String, album: String, year: Number, genre: String, image_url: String, state: { type: String, default: 'unavailable' } }]
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
