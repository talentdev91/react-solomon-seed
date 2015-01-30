var gulp     = require('gulp');
var config   = require('../config');
var clean    = require('gulp-clean');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('clean-deploy', function () {
  return gulp.src('./deploy', {read: false})
    .pipe(clean());
});

gulp.task('clean-tmp', function () {
  return gulp.src('./tmp', {read: false})
    .pipe(clean());
});

gulp.task('production', gulpsync.sync(['clean-deploy', 'clean-tmp', 'moveServer', 'uglifyJs', 'minifyCss', 'revStatic', 'clean-tmp']));
