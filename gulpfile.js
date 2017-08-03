var gulp = require('gulp'),                      // Gulp JS
    concat = require('gulp-concat'),             // Concat filse
    imagemin = require('gulp-imagemin'),         // Minify images
    uglify = require('gulp-uglify'),             // Minify JS
    include = require('gulp-include'),           // HTML Templates
    csso = require('gulp-csso'),                 // Minify CSS
    autoprefixer = require('gulp-autoprefixer'), // Gulp autoprefixer
    copy2 = require('gulp-copy2'),               // Copy files
    less = require('gulp-less'),                 // Less compiler
    path = require('path'),                      // Array of paths to be used for @import directives
    rename = require("gulp-rename"),             // Rename files
    pug = require('gulp-pug'),                   // HTML Preprocessor
    htmlmin = require('gulp-htmlmin'),           // HTML Minification
		prettify = require('gulp-html-prettify');    // Beautify HTML

/*---------------------------------------------------------------------------------*/
/*----------------------------------- COPY ----------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('copy', function () {
	var paths = [
		{src: 'bower_components/bootstrap/dist/fonts/*.*', dest: 'dist/fonts/'},
		{src: 'src/fonts/**/*.*', dest: 'dist/fonts/'},
		{src: 'src/*.ico', dest: 'dist/'}
	];
	return copy2(paths);
});
/*---------------------------------------------------------------------------------*/
/*--------------------------------- LIBRARIES -------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('plugins', function() {
	return gulp.src(['bower_components/angular/angular.min.js',
									 'bower_components/angular-route/angular-route.min.js',
									 'bower_components/angular-strap/dist/angular-strap.min.js',
									 'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
									 'bower_components/jquery/dist/jquery.min.js',
									 'bower_components/bootstrap/dist/js/bootstrap.min.js',
									 'bower_components/slick-carousel/slick/slick.min.js'
									 //'bower_components/owl-carousel2/dist/owl.carousel.min.js',
									 //'bower_components/jquery-circle-progress/dist/circle-progress.min.js',
									 //'src/libs/appear-js/jquery.appear.js',
									 //'bower_components/jquery.easing/js/jquery.easing.min.js',
									 //'bower_components/parallax.js/parallax.min.js',
									 //'bower_components/wow/dist/wow.min.js',
									 //'bower_components/jQuery-Mask-Plugin/dist/jquery.mask.min.js',
									 //'bower_components/fotorama/fotorama.js',
									 //'bower_components/isotope/dist/isotope.pkgd.min.js',
									 //'bower_components/fancybox/source/jquery.fancybox.js',
									 //'bower_components/fancybox/source/jquery.fancybox.pack.js'
									])
		.pipe(concat('libs.js'))
		.pipe(gulp.dest('src/js/'));
});
/*---------------------------------------------------------------------------------*/
/*-------------------------------- JAVASCRIPT -------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('libsJs', function() {
	gulp.src('src/js/libs.js')
		.pipe(include())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('dist/js/'));
});
/*---------------------------------------------------------------------------------*/
/*-------------------------------- JAVASCRIPT -------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('js', function() {
	gulp.src(['src/app/app.js',
						'src/js/script.js'
					 ])
		.pipe(include())
		/*.pipe(uglify())*/
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('dist/js/'));
});
/*---------------------------------------------------------------------------------*/
/*---------------------------------- IMAGES ---------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('img', () =>
	gulp.src('src/img/**/*.{jpg,jpeg,png}')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);
/*---------------------------------------------------------------------------------*/
/*------------------------------------ CSS ----------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('css', function() {
	return gulp.src(['src/less/style.less',
									 'src/less/external/bootstrap.less',
									 'src/less/external/plugins.less'])
		.pipe(less())
		.pipe(autoprefixer({browsers: ['last 6 versions']}))
		.pipe(csso())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('dist/css'))
});
/*---------------------------------------------------------------------------------*/
/*----------------------------------- HTML ----------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('html', function() {
	return gulp.src('src/**/*.pug')
		.pipe(pug())
		/*.pipe(htmlmin({
				collapseWhitespace: true,
				removeComments: true
		}))*/
		.pipe(prettify())
		.pipe(gulp.dest('dist/'))
});
/*---------------------------------------------------------------------------------*/
/*---------------------------------- DEFAULT --------------------------------------*/
/*---------------------------------------------------------------------------------*/
gulp.task('default', function(){
	gulp.run('copy', 'html', 'css', 'plugins', 'libsJs', 'js', 'img');

	// Watch
	gulp.watch("src/**/*", function(event){
		gulp.run('copy', 'html', 'css', 'plugins', 'libsJs', 'js');
	});
});
