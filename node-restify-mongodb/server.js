
var chalk = require('chalk');

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

server.listen(8080, function () {
    console.log('server start');
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
