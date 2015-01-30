var gulp       = require('gulp');
var clean      = require('gulp-clean');
var gulpsync   = require('gulp-sync')(gulp);
var minifyCSS  = require('gulp-minify-css');
var size       = require('gulp-filesize');
var path       = require('path');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');

var config     = require('../config');

/*
  Cleanup the deploy folder
*/
gulp.task('clean-deploy', function() {
  return gulp.src('./deploy', {read: false})
    .pipe(clean());
});

/*
  Clean the temp folder
*/
gulp.task('clean-tmp', function() {
  return gulp.src('./tmp', {read: false})
    .pipe(clean());
});

/*
  Move all the server files over
*/
gulp.task('moveServerFiles', function() {
  return gulp.src(['./server/**'], {base: './'})
    .pipe(gulp.dest('./deploy'));
});

/*
  browserfy all react app files
*/
gulp.task('uglifyAppJs', ['browserify'], function() {
  return gulp.src('./tmp/public/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./tmp/public/js'))
    .pipe(size());
});

/*
  Compress and combine all the UI client js files ( jquery, etc )
*/
gulp.task('uglifyUiJs', function() {
  return gulp.src(config.uijs.libraries)
    .pipe(concat('ui.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./tmp/public/js'))
    .pipe(size());
});

/*
  Minify css files
*/
gulp.task('minifyCss', ['less-app', 'less-bootstrap'], function() {
  return gulp.src(config.production.cssSrc)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(config.production.cssDeploy))
    .pipe(size());
});

/*
  Move all the images over to tmp so they can be rev'ed
*/
gulp.task('moveimages', function() {
  return gulp.src(['./client/images/**'], {base:"./client/images"})
    .pipe(gulp.dest('./tmp/public/images'));
});

gulp.task('production', gulpsync.sync([
  'clean-deploy',
  'clean-tmp',
  'moveServerFiles',
  'uglifyAppJs',
  'uglifyUiJs',
  'minifyCss',
  'moveimages',
  'revStatic',
  'clean-tmp'
]));
