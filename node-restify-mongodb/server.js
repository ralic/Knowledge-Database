
var chalk = require('chalk');

// ===============
// global configuration
// ===============
var HTTP_PORT = '8080';

// ===============
// db server
// ===============
var mongoose = require('mongoose'),
    dbuser = 'xxxx',
    dbpassword = 'xxxx';
mongoose.connect('mongodb://' + dbuser + ':' + dbpassword + '@ds033740.mongolab.com:33740/kitty');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log(chalk.red('you are open mongodb'))// yay!
});

// ==================
// restful api server
// ==================
var restify = require('restify');

var server = restify.createServer({
    name: 'Kitty Server'
});
server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.listen(HTTP_PORT, function () {
    console.log('server start');
});

// ==================
// auth facebook
// ==================
var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;
var FB_LOGIN_PATH = 'auth/facebookLogin';
var FB_CALLBACK_PATH = 'auth/facebookCallback';
var FB_APPID = 'xxx';
var FB_APPSECRET = 'xxx';
var SERVER_PREFIX = 'http://localhost:' + HTTP_PORT + '/';
var FB_PERMISSION = {
    session: true,
    scope: ['email'] // add more permission here
};

server.use(passport.initialize());
server.use(passport.session());
passport.use(new FacebookStrategy({
        clientID: FB_APPID,
        clientSecret: FB_APPSECRET,
        callbackURL: SERVER_PREFIX + FB_CALLBACK_PATH
    }, function(accessToken, refreshToken, profile, done) {
        // console.log(profile);
        // console.log('accessToken=' + accessToken + ' facebookId=' + profile.id);
        // configure the facebook data
        return done(null, profile);
    })
);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// ==================
// start CURD =>
// ==================

// GET
// curl http://localhost:8080/kitty
server.get('/kitty', require('./get/kitty'));

// POST
// curl -i -X POST -d 'name=good&age=12' http://localhost:8080/add
server.post('/add', require('./post/add'));

// PUT
// curl -i -X PUT -d 'name=special&newName=cutekitty' localhost:8080/update
server.put('/update', require('./put/update'));

// DEL
// curl -i -X DELETE localhost:8080/delete/newName
server.del('delete/:name', require('./del/delete'));

// auth
// http://localhost:8080/auth/facebookLogin
// http://localhost:8080/auth/facebookCallback
server.get(FB_LOGIN_PATH, passport.authenticate('facebook', FB_PERMISSION));
server.get(FB_CALLBACK_PATH, passport.authenticate('facebook', FB_PERMISSION),require('./auth/facebookCallback'));