var assert = require('assert');

describe('accupass web test', function () {

    it('checks the title', function(done) {

        browser
            .url('http://www.accupass.com')
            .getTitle(function(err,title) {
                assert.strictEqual(title,'Accupass x active your life with events / Funnest event platform.');
            })
            .call(done);
    });

});