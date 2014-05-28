var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = module.exports = express();

// ==========================
// Server Configuration
// ==========================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.pretty = true; // jade pretty
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ==========================
// Global Variables
// ==========================
app.set('env', 'development'); // development / production
app.set('domain', 'http://localhost:3000');

// ==========================
// Route
// ==========================
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

// ==========================
// Error Handler
// ==========================
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    console.log('under development');
    app.use(function(err, req, res, next) {
        res.status(err.status || 404);
        res.render('404', {
            title: 404,
            canonical: app.get('domain'),
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
    console.log('under production');
    app.use(function(err, req, res, next) {
        res.status(err.status || 404);
        res.render('404', {
            title: 404,
            canonical: app.get('domain')
        });
    });
}
