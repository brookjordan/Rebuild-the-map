module.exports = function(grunt) {

	//	DEV TASKS
	grunt.registerTask( 'dev_dump', [
			'copy:dump_dev', 'copy:images_dev',
		]);
	grunt.registerTask( 'dev_scripts', [
			'clean:scripts_dev', 'browserify:dev',
		]);
	grunt.registerTask( 'dev_styles', [
			 'clean:styles_dev', 'sass:dev', 'autoprefixer:dev',
		]);
	grunt.registerTask( 'dev_html', [
			 'processhtml:include', 'copy:html_dev',
		]);

	grunt.registerTask( 'dev', [
			'clean:dev', 'clean:temp',
			'dev_dump', 'dev_scripts', 'dev_styles', 'dev_html',
		]);

	//	For auto-updates on browserify
	grunt.registerTask( 'scripts', [
			'clean:scripts_dev', 'browserify:hot',
		]);


	//	BUILD TASKS
	grunt.registerTask( 'build_dump', [
			'copy:dump_build',
		]);
	grunt.registerTask( 'build_scripts', [
			'clean:scripts_build', 'browserify:build', 'uglify:build',
		]);
	grunt.registerTask( 'build_styles', [
			'clean:styles_build', 'sass:build', 'autoprefixer:build',
		]);
	grunt.registerTask( 'build_html', [
			'processhtml:include', 'copy:html_build', 'htmlmin:build',
		]);

	grunt.registerTask( 'build', [
			'clean:build', 'clean:temp',
			'build_dump', 'build_scripts', 'build_styles', 'build_html',

		]);


	//	WATCHED DEV TASKS
	grunt.registerTask( 'default', [
			'dev', 'watch',
		]);






	var uglifyOptions = {
		mangle: {
			sort: false,
			toplevel: false,
			eval: false,
			reserved: [],
		},
		compress: {
			sequences: true,
			properties: true,
			dead_code: true,
			drop_debugger: true,
			unsafe: false,
			conditionals: false,
			comparisons: false,
			evaluate: true,
			booleans: true,
			loops: true,
			unused: false,
			hoist_funs: true,
			hoist_vars: false,
			if_return: true,
			join_vars: true,
			cascade: true,
			warnings: true,
			negate_iife: true,
			pure_getters: false,
			pure_funcs: null,
			drop_console: true,
			keep_fargs: false,
		},
		beautify: {
			beautify: false,
			//'indent-level': 4,
			//'indent-start': 0,
			//'quote-keys': false,
			//'space-colon': true,
			//'ascii-only': false,
			//'inline-script': false,
			width: 80,
			//'max-line-len': 32000,
			bracketize: false,
			semicolons: true,
			preamble: null,
			//quote_style: 0,
				//	0 -- prefers double quotes, switches to single quotes when there are more double quotes in the string itself.
				//	1 -- always use single quotes
				//	2 -- always use double quotes
				//	3 -- always use the original quotes
		},//	Boolean or Object: [View all options here](https://github.com/mishoo/UglifyJS2#beautifier-options)
		expression: false,//	for parsing JSON
		report: 'min',//	'min' 'gzip'
		sourceMap: false,
		sourceMapName: function ( uglifyDestination ) { var sourceMapPath = undefined; return sourceMapPath; },
		sourceMapIn: undefined,//	The location of an input source map from an earlier compilation
		sourceMapIncludeSources: false,
		sourceMapRoot: false,
		enclose: false,
		//{
		//	'window': 'window',
		//	'undefined': 'undefined',
		//},
		wrap: undefined,//	Wrap all of the code in a closure. The value is the global variable exports will be available as.
		maxLineLen: 32000,
		ASCIIOnly: false,
		exportAll: false,
		preserveComments: undefined,//	false 'all' 'some' function( currentComment )
		banner: '',
		footer: '',
		screwIE8: false,
		mangleProperties: false,
		reserveDOMProperties: false,
		exceptionsFiles: [],
		nameCache: '',
		quoteStyle: 0,
			//	0 -- prefers double quotes, switches to single quotes when there are more double quotes in the string itself.
			//	1 -- always use single quotes
			//	2 -- always use double quotes
			//	3 -- always use the original quotes
	};

	var htmlminOptions = {
		removeComments: true,
		removeCommentsFromCDATA: false,
		removeCDATASectionsFromCDATA: false,
		collapseWhitespace: true,
		conservativeCollapse: true,
		preserveLineBreaks: false,
		collapseBooleanAttributes: true,
		removeAttributeQuotes: true,
		removeRedundantAttributes: false,
		preventAttributesEscaping: false,
		useShortDoctype: true,
		removeEmptyAttributes: false,
		removeScriptTypeAttributes: false,
		removeStyleLinkTypeAttributes: false,
		removeOptionalTags: false,
		removeIgnored: false,
		removeEmptyElements: false,
		lint: false,
		keepClosingSlash: false,
		caseSensitive: false,
		minifyJS: uglifyOptions,
		minifyCSS: {},
		minifyURLs: {},
		ignoreCustomComments: [],
		processScripts: [],
		maxLineLength: null,
		customAttrAssign: [],
		customAttrSurround: [],
		customAttrCollapse: null,
	};







//  d8b          d8b 888
//  Y8P          Y8P 888
//                   888
//  888 88888b.  888 888888
//  888 888 "88b 888 888
//  888 888  888 888 888
//  888 888  888 888 Y88b.
//  888 888  888 888  "Y888

	grunt.initConfig({

//	                                                            888      888                  888
//	                                                            888      888                  888
//	                                                            888      888                  888
//	88888b.  888d888 .d88b.   .d8888b .d88b.  .d8888b  .d8888b  88888b.  888888 88888b.d88b.  888
//	888 "88b 888P"  d88""88b d88P"   d8P  Y8b 88K      88K      888 "88b 888    888 "888 "88b 888
//	888  888 888    888  888 888     88888888 "Y8888b. "Y8888b. 888  888 888    888  888  888 888
//	888 d88P 888    Y88..88P Y88b.   Y8b.          X88      X88 888  888 Y88b.  888  888  888 888
//	88888P"  888     "Y88P"   "Y8888P "Y8888   88888P'  88888P' 888  888  "Y888 888  888  888 888
//	888
//	888
//	888
		processhtml: {

			options: {
				recursive: true,
				process: false,
				//environment: target,
				data: {},
				templateSettings: null,//	Object
				includeBase: null,//	An optional path to look for include files
				commentMarker: 'build',
				strip: null,//	strip comments which do not match the current target
				recursive: false,//	I guess this should usually be true?
				customBlockTypes: [],//	.js files that define custom block types. see (https://www.npmjs.com/package/grunt-processhtml#options-customblocktypes)
			},

			include: {
				options: {
					commentMarker: 'include',
				},

				files: [{
					expand: true,

					cwd: 'project/src/pages',
					src: [ '**/*.html', '!**/_*', ],
					dest: 'project/temp/common/pages',
					ext: '.html',
				}],
			},

		},



//	                888          888    d8b                   8888888b.                   888
//	                888          888    Y8P                   888   Y88b                  888
//	                888          888                          888    888                  888
//	888d888 .d88b.  888  8888b.  888888 888 888  888  .d88b.  888   d88P .d88b.   .d88b.  888888
//	888P"  d8P  Y8b 888     "88b 888    888 888  888 d8P  Y8b 8888888P" d88""88b d88""88b 888
//	888    88888888 888 .d888888 888    888 Y88  88P 88888888 888 T88b  888  888 888  888 888
//	888    Y8b.     888 888  888 Y88b.  888  Y8bd8P  Y8b.     888  T88b Y88..88P Y88..88P Y88b.
//	888     "Y8888  888 "Y888888  "Y888 888   Y88P    "Y8888  888   T88b "Y88P"   "Y88P"   "Y888

		relativeRoot: {
			options: {
				staticRoot: 'public',
			},

			dev: {
				files: [{
					expand: true,

					cwd:  'project/temp/pages/compiled',
					src: [ '**/*.html' ],
					dest: 'project/temp/pages/relativeRoot'
				}],
			},
		},



//	888      888                  888               d8b
//	888      888                  888               Y8P
//	888      888                  888
//	88888b.  888888 88888b.d88b.  888 88888b.d88b.  888 88888b.
//	888 "88b 888    888 "888 "88b 888 888 "888 "88b 888 888 "88b
//	888  888 888    888  888  888 888 888  888  888 888 888  888
//	888  888 Y88b.  888  888  888 888 888  888  888 888 888  888
//	888  888  "Y888 888  888  888 888 888  888  888 888 888  888

		htmlmin: {
			options: htmlminOptions,

			build: {
				files: [{
					expand: true,

					cwd: 'project/temp/build',
					src: '**/*.html',
					dest: 'project/build',
					ext: '.html',
				}],
			},
		},



//	d8b                                                        d8b
//	Y8P                                                        Y8P
//
//	888 88888b.d88b.   8888b.   .d88b.   .d88b.  88888b.d88b.  888 88888b.
//	888 888 "888 "88b     "88b d88P"88b d8P  Y8b 888 "888 "88b 888 888 "88b
//	888 888  888  888 .d888888 888  888 88888888 888  888  888 888 888  888
//	888 888  888  888 888  888 Y88b 888 Y8b.     888  888  888 888 888  888
//	888 888  888  888 "Y888888  "Y88888  "Y8888  888  888  888 888 888  888
//	                                888
//	                           Y8b d88P
//	                            "Y88P"

		imagemin: {
			options: {
				optimizationLevel: 3,//	PNG - 0-7
				progressive: true,//	JPEG
				interlaced: true,//	GIF
				svgoPlugins: [],//	SVG
				use: null,// Additional plugins (https://npmjs.org/keyword/imageminplugin)
			},

			build: {
				files: [{
					expand: true,
					cwd: 'project/src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'project/build/images'
				}],
			},
		},



//	888                                                              d8b  .d888
//	888                                                              Y8P d88P"
//	888                                                                  888
//	88888b.  888d888 .d88b.  888  888  888 .d8888b   .d88b.  888d888 888 888888 888  888
//	888 "88b 888P"  d88""88b 888  888  888 88K      d8P  Y8b 888P"   888 888    888  888
//	888  888 888    888  888 888  888  888 "Y8888b. 88888888 888     888 888    888  888
//	888 d88P 888    Y88..88P Y88b 888 d88P      X88 Y8b.     888     888 888    Y88b 888
//	88888P"  888     "Y88P"   "Y8888888P"   88888P'  "Y8888  888     888 888     "Y88888
//	                                                                                 888
//	                                                                            Y8b d88P
		browserify: {//                                                          "Y88P"
			options: {
//				alias: {},
//				banner: '',
//				require: [''],
//				ignore: [''],
//				exclude: [''],//	[{alias:path}],
//				external: '',//		{}
				transform: ['babelify'],//	['babelify', {}]
//				plugin: [''],
				browserifyOptions: {
					debug: true,
				},
//				watch: true,
//				keepAlive: true,
//				preBundleCB: function(){},
//				postBundleCB: function(){},

			},

			dev: {
				files: [{
					expand: true,

					cwd: 'project/src/scripts/base',
					src: [ '*.jsx', ],
					dest: 'project/dev/scripts',
					ext: '.js',
				},],
			},

			hot: {
				options: {
					watch: true,
					keepAlive: true,
				},

				files: [{
					expand: true,

					cwd: 'project/src/scripts/base',
					src: [ '*.jsx', ],
					dest: 'project/dev/scripts',
					ext: '.js',
				},],
			},

			build: {
				files: [{
					expand: true,

					cwd: 'project/src/scripts/base',
					src: [ '*.jsx', ],
					dest: 'project/temp/build/scripts',
					ext: '.js',
				},],
			},
		},


//                    888 d8b  .d888
//                    888 Y8P d88P"
//                    888     888
//  888  888  .d88b.  888 888 888888 888  888
//  888  888 d88P"88b 888 888 888    888  888
//  888  888 888  888 888 888 888    888  888
//  Y88b 888 Y88b 888 888 888 888    Y88b 888
//   "Y88888  "Y88888 888 888 888     "Y88888
//                888                     888
//           Y8b d88P                Y8b d88P
//            "Y88P"                  "Y88P"

		uglify: {
			options: uglifyOptions,

			build: {
				files: [{
					expand: true,

					cwd: 'project/temp/build/scripts',
					src: ['**/*.js', ],
					dest: 'project/build/scripts',
					ext: '.js',
				},],
			},
		},



//  .d8888b   8888b.  .d8888b  .d8888b
//  88K          "88b 88K      88K
//  "Y8888b. .d888888 "Y8888b. "Y8888b.
//       X88 888  888      X88      X88
//   88888P' "Y888888  88888P'  88888P'

		sass: {
			options: {
				//file: 'null',
				//data: 'null',
				//importer: 'undefined',
				//includePaths: '[]',
				//indentedSyntax: 'false',
				//omitSourceMapUrl: 'false',
				//outFile: 'null',
				outputStyle: 'compressed', // nested, compact, compressed, expanded
				//precision: '5',
				//sourceComments: 'false',
				sourceMap: true,
				//sourceMapEmbed: 'false',
				sourceMapContents: true,
			},

			dev: {
				options: {
					outputStyle: 'nested',
				},

				files: [{
					expand: true,

					cwd: 'project/src/styles',
					src: '**/*.scss',
					dest: 'project/temp/dev/styles',
					ext: '.css',
				}],
			},

			build: {
				files: [{
					expand: true,

					cwd: 'project/src/styles',
					src: '**/*.scss',
					dest: 'project/temp/build/styles__sass',
					ext: '.css',
				}],
			},
		},



//                    888                                      .d888 d8b
//                    888                                     d88P"  Y8P
//                    888                                     888
//   8888b.  888  888 888888 .d88b.  88888b.  888d888 .d88b.  888888 888 888  888  .d88b.  888d888
//      "88b 888  888 888   d88""88b 888 "88b 888P"  d8P  Y8b 888    888 `Y8bd8P' d8P  Y8b 888P"
//  .d888888 888  888 888   888  888 888  888 888    88888888 888    888   X88K   88888888 888
//  888  888 Y88b 888 Y88b. Y88..88P 888 d88P 888    Y8b.     888    888 .d8""8b. Y8b.     888
//  "Y888888  "Y88888  "Y888 "Y88P"  88888P"  888     "Y8888  888    888 888  888  "Y8888  888
//                                   888
//                                   888

		autoprefixer: {
			options: {
				browsers: [ 'last 10 versions', 'ie 8', 'ie 9' ],
				map: true,
			},

			dev: {
				files: [{
					expand: true,

					cwd: 'project/temp/dev/styles',
					src: '**/*.css',
					dest: 'project/dev/styles',
					ext: '.css',
				}],
			},

			build: {
				files: [{
					expand: true,

					cwd: 'project/temp/build/styles__sass',
					src: '**/*.css',
					dest: 'project/build/styles',
					ext: '.css',
				}],
			},
		},



//	         888
//	         888
//	         888
//	 .d8888b 888  .d88b.   8888b.  88888b.
//	d88P"    888 d8P  Y8b     "88b 888 "88b
//	888      888 88888888 .d888888 888  888
//	Y88b.    888 Y8b.     888  888 888  888
//	 "Y8888P 888  "Y8888  "Y888888 888  888

		clean: {
			options: {
				force: false,//	Allows deletion of non-project files
				'no-write': false,//	Logs files to be deleted without deleting
			},

			scripts_dev: [ "project/dev/scripts/*", ],
			styles_dev: [ "project/dev/styles/*", ],

			scripts_build: [ "project/temp/build/scripts/*", ],
			styles_build: [ "project/build/styles/*", ],

			build: [ "project/build/*", "!project/build/images", ],
			buildfull: [ "project/build/*", ],
			dev: [ "project/dev/*", "!project/dev/images", ],
			devfull: [ "project/dev/*", ],
			temp: [ "project/temp/*", ],

			NOTHING: [ "FAKE FOLDER", ],
		},



//   .d8888b .d88b.  88888b.  888  888
//  d88P"   d88""88b 888 "88b 888  888
//  888     888  888 888  888 888  888
//  Y88b.   Y88..88P 888 d88P Y88b 888
//   "Y8888P "Y88P"  88888P"   "Y88888
//                   888           888
//                   888      Y8b d88P
//                   888       "Y88P"

		copy: {
			options: {
//				process: function (content, srcpath) { return content },
//				noProcess: '',//	control which file contents are processed
				encoding: grunt.file.defaultEncoding,
				mode: false,//	true: copy permissions.	'0644': set permissions to 0644
				timestamp: false,//	preserve original file's timestamps
			},

			dump_dev: {
				files: [
					{
						expand: true,

						cwd: 'project/src/dump/',
						src: ['**/*.*', ],
						dest: 'project/dev',
					},
				],
			},
			images_dev: {
				files: [
					{
						expand: true,

						cwd: 'project/src/images/',
						src: ['**/*', ],
						dest: 'project/dev/images',
					},
				],
			},
			scripts_dev: {
				files: [
					{
						expand: true,

						cwd: 'project/src/scripts/',
						src: [ '**/*.js', ],
						dest: 'project/dev/scripts',
					},
				],
			},
			html_dev: {
				files: [
					{
						expand: true,

						cwd: 'project/temp/common/pages',
						src: [ '**/*.html', ],
						dest: 'project/dev',
					},
				],
			},

			dump_build: {
				files: [
					{
						expand: true,

						cwd: 'project/src/dump/',
						src: ['**/*.*', ],
						dest: 'project/build',
					},
				],
			},
			scripts_build: {
				files: [
					{
						expand: true,

						cwd: 'project/src/scripts/',
						src: [ '**/*.js', ],
						dest: 'project/temp/build/scripts',
					},
				],
			},
			html_build: {
				files: [
					{
						expand: true,

						cwd: 'project/temp/common/pages',
						src: [ '**/*.html', ],
						dest: 'project/temp/build',
					},
				],
			},
		},



//	                       888            888
//	                       888            888
//	                       888            888
//	888  888  888  8888b.  888888 .d8888b 88888b.
//	888  888  888     "88b 888   d88P"    888 "88b
//	888  888  888 .d888888 888   888      888  888
//	Y88b 888 d88P 888  888 Y88b. Y88b.    888  888
//	 "Y8888888P"  "Y888888  "Y888 "Y8888P 888  888

		watch: {
			options: {
				reload: false,
				spawn: false,
				interrupt: false,
				debounceDelay: 500,
				interval: 100,
				event: 'all',//	'all', 'changed', 'added', 'deleted'
				forever: true,
//				dateFormat: function(time) {
//					grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
//					grunt.log.writeln('Waiting for more changes...');
//				},
				atBegin: false,
				livereload: false
				//{//	Get it working over https
				//	port: 9000,
				//	key: grunt.file.read('path/to/ssl.key'),
				//	cert: grunt.file.read('path/to/ssl.crt')
				//	other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
				//}

			},

			dev_pages: {
				files: [
					'project/src/pages/**/*.html',
					'project/src/templates/**/*.html'
				],
				tasks: [ 'dev_html', ],
			},

			dev_styles: {
				files: [ 'project/src/styles/**/*.*', ],
				tasks: [ 'dev_styles', 'dev_html', ],
			},

			dev_dump: {
				files: [ 'project/src/dump/**/*.*', 'project/src/images/**/*.*', ],
				tasks: [ 'dev_dump', ],
			},

			dev_html: {
				files: [ 'project/src/**/*.html', ],
				tasks: [ 'dev_html', ],
			},



			Gruntfile: {
				files: [ 'Gruntfile.js', ],
				tasks: [],
			},
		},

	});



	require('load-grunt-tasks')(grunt);





	//	FUNCTIONS	//	FUNCTIONS	//


};