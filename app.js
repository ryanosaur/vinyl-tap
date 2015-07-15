'use strict'
//testing
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

require('./config/passport')(passport); // pass passport for configuration

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({
  secret: 'T398745T9345TG89374HJ9F78H398FG29B92F762G8RG3Q'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var router = express.Router();
var users = require('./routes/users/users');
var swaps = require('./routes/swaps/swaps');
var albums = require('./routes/albums/albums');
var auth = require('./routes/auth/auth');

app.use('/', albums(router));
app.use('/', swaps(router));
app.use('/', users(router));
app.use('/', auth(app, passport, router));

// var routes = require('./routes/routes')(app, passport);
//
// app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
