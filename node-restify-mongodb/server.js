
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
// passport config
// ==================
var passport = require('passport');
var SERVER_PREFIX = 'http://localhost:' + HTTP_PORT + '/';
server.use(passport.initialize());
server.use(passport.session());
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// ==================
// auth passport-facebook
// ==================
var FacebookStrategy = require('passport-facebook').Strategy;
var FB_LOGIN_PATH = 'auth/facebookLogin';
var FB_CALLBACK_PATH = 'auth/facebookCallback';
var FB_APPID = 'xxx';
var FB_APPSECRET = 'xxx';
var FB_PERMISSION = {
    session: true,
    scope: ['email'] // add more permission here
};

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

// ==================
// auth passport-twitter - doesn't work on restify but should work on express
// ==================
var TwitterStrategy = require('passport-twitter').Strategy;
var TWITTER_LOGIN_PATH = 'auth/twitterLogin';
var TWITTER_CALLBACK_PATH = 'auth/twitterCallback';
var TWITTER_CONSUMER_KEY = 'xxx';
var TWITTER_CONSUMER_SECRET = 'xxx';

passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: SERVER_PREFIX + TWITTER_CALLBACK_PATH
    },
    function(token, tokenSecret, profile, done) {
        console.log(profile);
        console.log('accessToken=' + accessToken + ' facebookId=' + profile.id);
        // configure the twitter data
        return done(null, profile);
    }
));

// ==================
// start CURD =>
// ==================
/**
 * @api {get} /kitty Request Kitty information
 * @apiName GetKitty
 * @apiGroup Kitty
 *
 *
 * @apiSuccess {String} name name of the kitty
 * @apiSuccess {String} age  the kitty's age
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "name": "Hello Kitty",
 *       "age": 12
 *     }]
 *
 */
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
// facebook
// http://localhost:8080/auth/facebookLogin
// http://localhost:8080/auth/facebookCallback
server.get(FB_LOGIN_PATH, passport.authenticate('facebook', FB_PERMISSION));
server.get(FB_CALLBACK_PATH, passport.authenticate('facebook', FB_PERMISSION),require('./auth/facebookCallback'));
// twitter
// http://localhost:8080/auth/twitterLogin
// http://localhost:8080/auth/twitterCallback
server.get(TWITTER_LOGIN_PATH, passport.authenticate('twitter', { session: true}));
server.get(TWITTER_CALLBACK_PATH, passport.authenticate('twitter', { session: true}),require('./auth/twitterCallback'));