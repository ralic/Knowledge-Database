var webdriverio = require('webdriverjs-angular'); // support angularjs
var chalk = require('chalk');
var options = {
    desiredCapabilities: {
        browserName: 'chrome', // options: firefox, chrome, opera, safari, phantomjs
    }
};

var client = webdriverio.remote(options);

// .setViewportSize({ width: 500, height: 600}) // set mobile size

client
.init()
.url('http://www.accupass.com')
.setViewportSize({ width: 300, height: 300})
    .title(function(err, res) {
        console.log(chalk.blue('[Title]' + res.value));
    })
    .isEnabled('#APJS_id-userOpt > div > a:nth-child(2)', function (err, isEnabled) {
        if (isEnabled) {
            console.log(chalk.blue('[Login is enable]'));
        }   
    })
    .click('#APJS_id-userOpt > div > a:nth-child(2)', function (err, sss) {
        console.log(chalk.blue('[Click Login Btn]'));
    })
    .waitForVisible('#APJS_id-email', function () {
        console.log(chalk.blue('[Start fill the form]'));
    })
    .setValue('#APJS_id-email', 'hueitan+selenium@accuvally.com')
    .setValue('#APJS_id-pwd', '123456')
    .click('#APJS_id-mailTab > form > input')
    .waitForVisible('#APJS_dropdown-user', function (a,b) {
        console.log(chalk.blue('[login success]'));
    })
    .click('#APJS_dropdown-user')
    .click('#APJS_id-userOpt > div > div > ul > li:nth-child(100) > a',function (err) {
        if (err) {console.log(chalk.red('oops!'));return;}
        console.log('[logout]')
    })
    .click('#APJS_id-userOpt > div > div > ui > li:nth-child(12) > a', function (err,s) {
        if (err) {console.log(chalk.red('oops again!'));return;}        
        console.log('[logout]');
    })
.waitForVisible('#APJS_id-userOpt > div > a:nth-child(1)',2000, function (err, isE) {
    // setting assert here
   console.log('this is the end of the test');
})
.end();
