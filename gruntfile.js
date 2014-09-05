module.exports = function(grunt) {

	grunt.initConfig({

		instrument: {
		  files: 'app/*.js',
		  options: {
		    lazy: true,
		    basePath: 'test/coverage/instrument/'
		  }
		},

		mochacov: {
		    options: {
		      reporter: 'spec',
		      require: ['should']
		    },
		    all: ['test/*.js']
		  }


	});

	grunt.loadNpmTasks('grunt-mocha-cov');
	grunt.loadNpmTasks('grunt-istanbul');
	grunt.registerTask('test', ['mochacov']);


};
