var gulp    = require('gulp');
var config  = require('../config').production;
var size    = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src('./tmp/public/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./tmp/public/js'))
    .pipe(size());
});
