


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        
        // Configuration to be run (and then tested).
        webdriver: {
            options: {
                desiredCapabilities: {
                    browserName: 'firefox',
                    version: '27',
                    platform: 'XP',
                }
            },
            login: {
                tests: ['./assert_*.js']
            },
            cucumber: {
                tests: ['./cucumber_*.js']
            }
        },

    });

    // Actually load this plugin's task(s).
    grunt.loadNpmTasks('grunt-webdriver');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['webdriver:login']);


};