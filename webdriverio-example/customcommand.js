var webdriverio = require('webdriverjs-angular'); // support angularjs
var options = {
    desiredCapabilities: {
        browserName: 'chrome', // options: firefox, chrome, opera, safari
        // version: '27.0',        // browser version
        // platform: 'XP'         // OS platform
    }
};

var login = function login() {
    var searchString = arguments[0],
    callback = arguments[arguments.length - 1]
    this
    .url('http://www.accupass.com')
    .title(function(err, res) {
        console.log('[Title]' + res.value);
    })
    .isEnabled('#APJS_id-userOpt > div > a:nth-child(2)', function (err, isEnabled) {
        if (isEnabled) {
            console.log('[Login is enable]');
        }   
    })
    .click('#APJS_id-userOpt > div > a:nth-child(2)', function (err, sss) {
        console.log('[Click Login Btn]');
    })
    .waitForVisible('#APJS_id-email', function () {
        console.log('[Start fill the form]');
    })
    .setValue('#APJS_id-email', 'hueitan+selenium@accuvally.com')
    .setValue('#APJS_id-pwd', '123456')
    .click('#APJS_id-mailTab > form > input')
    .waitForVisible('#APJS_dropdown-user', function (a,b) {
        console.log('[login success]')
    })
    .call(callback);
}

var logout = function logout() {
    var callback = arguments[arguments.length];
    this
    .click('#APJS_dropdown-user')
    .click('#APJS_id-userOpt > div > div > ul > li:nth-child(100) > a',function (err) {
        if (err) {console.log('oops!');return;}
        console.log('[logout]')
    })
    .click('#APJS_id-userOpt > div > div > ui > li:nth-child(12) > a', function (err,s) {
        if (err) {console.log('oops again!');return;}        
        console.log('[logout]');
    })
}
var client = webdriverio.remote(options);
client.addCommand('login', login.bind(client));
client.addCommand('logout', logout.bind(client));

client
.init()
.setViewportSize({ width: 500, height: 600}) // set mobile size
.login('asdf') // custom command
.waitForVisible('#APJS_id-userOpt > div > a:nth-child(1)',2000, function (err, isE) {
    // setting assert here
   console.log('this is the end of the test');
})
.end();
