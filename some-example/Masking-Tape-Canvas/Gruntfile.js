module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [

                        ]
                    }
                ]
            }
        },
        concat: {
            options: {
                banner: '/*! Automation - <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                separator: '\n\n\n'
            },
            dist: {
                src: ['app/MTcanvas.constructor.js'],
                dest: 'script/MTcanvas.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! Automation - <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'script/MTcanvas.min.js': ['script/MTcanvas.js']
                }
            }
        },
        watch: {
            js: {
                files: ['app/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        },
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    hostname: '*',
                    port: 8100,
                    base: '.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['concat', 'uglify']);

    grunt.registerTask('dev', ['connect', 'watch']);

};