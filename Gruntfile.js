module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: 'bower_components',

        less: {
            options: {
                includePaths: ['less/bootstrap']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/style.css': 'less/app.less'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'js/app.min.js': [
                        '<%= bower %>/jquery/jquery.min.js',
                        '<%= bower %>/bootstrap/dist/js/bootstrap.min.js',
                        '<%= bower %>/owl.carousel/dist/owl.carousel.min.js',
                        'js/app.js'
                    ]
                }
            }
        },

        sprite: {
            all: {
                src: 'img/sprite-source/*.png',
                dest: 'img/spritesheet_1608.png',
                destCss: 'less/sprite.less',
                padding: 5,
                algorithm: 'binary-tree'
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            less: {
                files: 'less/**/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('build', ['less', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);
};