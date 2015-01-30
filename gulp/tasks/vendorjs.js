var gulp   = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('uijs', function() {
  return gulp.src(config.uijs.libraries)
    .pipe(concat('ui.js'))
    .pipe(gulp.dest('./public/js'))
});