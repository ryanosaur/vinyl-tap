var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

var Passport = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    process.nextTick(function() {
      console.log(req);
      User.findOne({ email:  email }, function(err, user) {
        if (err){
          return done(err);
        }

        if (user) {
          return done(null, false, { message: 'That email is already taken.'});
        } else {
          var newUser = new User();

          newUser.email = email;
          newUser.password = newUser.generateHash(password);

          newUser.save(function(err) {
            if (err){
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    User.findOne({ email:  email }, function(err, user) {
      if (err)
      return done(err);

      if (!user)
      return done(null, false, { message: 'No user found'});

      if (!user.validPassword(password))
      return done(null, false, { message: 'Incorrect password'});

      return done(null, user);
    });
  }));
};

module.exports = Passport;
