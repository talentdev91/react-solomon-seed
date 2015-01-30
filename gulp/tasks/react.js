var gulp       = require('gulp');
var gulpsync   = require('gulp-sync')(gulp);
var react      = require('gulp-react');
var gulpIgnore = require('gulp-ignore');
var config     = require('../config').react;
var clean      = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
      .pipe(clean());
});

gulp.task('copy', function() {
  gulp.src(['./client/js/**/*', '!./client/js/**/*.react.js'], {base:"./client"})
    .pipe(gulp.dest('./build'));
});

gulp.task('jsx', function () {
  return gulp.src(config.src)
    .pipe(react())
    .pipe(gulp.dest(config.dest));
});

gulp.task('react', gulpsync.sync(['clean', ['copy', 'jsx']]));