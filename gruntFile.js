var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		imagemin: {
			img: {
				files: [{
					expand: true,
					src: ['images/*.{png,jpg,gif}']
				}]
			}
		},
		run: {
			server: {
				args: ['./node_modules/http-server/bin/http-server'],
				options: {
					passArgs: [
						'-c18000' // turns on caching, defualt 3600(sec)
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};