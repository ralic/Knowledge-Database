var webdriverjs = require('webdriverio'),
    assert      = require('assert');

var sharedSteps = module.exports = function(){

    var client    = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent' }),
        tmpResult = {};

    client.init();
    this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
        client
            .url(url)
            .call(next);
    });

    this.When(/^I use getTitle to get the title of this website$/, function(next) {
        client
            .getTitle(function(err, title) {
                assert(err === undefined, 'command getTitle() returns with an error');
                tmpResult.title = title;
            })
            .call(next);
    });

    this.Then(/^the command should return "([^"]*)"$/, function(message, next) {
        assert(tmpResult.title == message , 'the command should return' + tmpResult);

        client
           .call(next);
    });

    this.When(/^I click the login button and use isExisting to get the login input text$/, function(next) {
        client
            .click('#APJS_id-userOpt > div > a:nth-child(2)')
            .waitForVisible('#APJS_id-email')
            .isExisting('#APJS_id-email', function (err, isExisting) {
                tmpResult.loginInput = isExisting;
            })
            .call(next);
    })

    this.Then(/^login page should return "([^"]*)"$/, function (isexist, next) {
        console.log(isexist);
        console.log(tmpResult)
        assert(tmpResult.loginInput == isexist, 'the command should return true');
        client
            .end();
    })

};