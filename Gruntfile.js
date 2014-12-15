/*global module */
/*jshint camelcase:false */
module.exports = function( grunt ) {
	'use strict';
	grunt.initConfig({

			watch: {
				reload_css: {
					files: ['stylesheets/**/*.scss'],
					tasks: 'compile'
				}
			},

			sass: {
				dist: {
					files : {
						'stylesheets/style.css': 'stylesheets/style.scss'
					}
				}
			},

			myth: {
				options: {
					sourcemap: true
				},
				dist: {
					files: [
					{
						expand: true,
						cwd: 'stylesheets/',
						src: ['**/*.css'],
						dest: 'stylesheets/'
					}
					]
				},
			},

			cssmin: {
				dist: {
					expand: true,
					cwd: 'dist/stylesheets/',
					src: ['**/*.css', '!*.min.css'],
					dest: 'dist/stylesheets/'
				}
			},

			uncss: {
				dist: {
					options: {
						ignore: [],
						stylesheets  : ['stylesheets/style.css']
					},
					files: {
						'dist/stylesheets/tidy.css': ['dist/index.html']
					}
				}
			},

			imagemin: {
				inplace: {
					files: [
					{
						expand: true,
						cwd: 'dist/assets/',
						src: ['**/*.{png,jpg,jpeg,gif,webp}'],
						dest: 'dist/assets/'
					}
					]
				}
			},

			clean: {
				dist: {
					files: [
					{
						dot: true,
						src: ['dist/*']
					}
					]
				}
			},

			copy: {
				dist: {
					files: [
					{
						expand: true,
						cwd: './',
						src: ['*.html', '*.ico', 'stylesheets/**/*', '!**/*.scss'],
						dest: 'dist/'
					}
					]
				}
			},

			rsync: {
				options: {
					args: ["--verbose"],
					recursive: true
				},
				staging: {
					options: {
						src: 'dist/',
						dest: '/var/www/<%= config.name  %>',
						host: 'root@cronut.goodtwin.co',
					}
				},
				prod: {
					options: {
						src: 'dist/',
						dest: '/var/www/thompsongl',
						host: 'root@thompsongl.com',
					}
				}
			}

		});

		require('load-grunt-tasks')(grunt);

		grunt.registerTask('default', ['compile']);
		grunt.registerTask('compile', ['sass:dist', 'myth:dist']);
		grunt.registerTask('build', ['compile', 'imagemin:inplace', 'clean:dist', 'copy:dist', 'uncss:dist', 'cssmin:dist' ]);
	};
