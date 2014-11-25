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
						stylesheets  : ['dist/stylesheets/style.css']
					},
					files: {
						'dist/stylesheets/style.css': ['dist/index.html']
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
						src: ['*.html', 'stylesheets/**/*', '!**/*.scss'],
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
				sync_staging_uploads: {
					options: {
						ssh: true,
						src: 'root@cronut.goodtwin.co:/var/www/goodtwin/wp-content/uploads/',
						dest: 'app/wp-content/uploads/',
					}
				}
			}

		});

		require('load-grunt-tasks')(grunt);

		grunt.registerTask('default', ['compile']);
		grunt.registerTask('compile', ['sass:dist', 'myth:dist']);
		grunt.registerTask('build', ['compile', 'imagemin:inplace', 'clean:dist', 'copy:dist', 'cssmin:dist' ]);
	};
