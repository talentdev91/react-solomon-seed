var gulp   = require('gulp');
var config = require('../config');
var size   = require('gulp-filesize');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglifyAppJs', ['browserify'], function() {
  return gulp.src('./tmp/public/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./tmp/public/js'))
    .pipe(size());
});

gulp.task('uglifyUiJs', function() {
  return gulp.src(config.uijs.libraries)
    .pipe(concat('ui.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./tmp/public/js'))
    .pipe(size());
});

gulp.task('uglifyJs', ['uglifyAppJs', 'uglifyUiJs']);