var gulp       = require('gulp');
var gulpsync   = require('gulp-sync')(gulp);
var clean      = require('gulp-clean');
var config     = require('../config').react;

gulp.task('clean-all', function () {
  return gulp.src(['./build', './tmp'], {read: false})
    .pipe(clean());
});
