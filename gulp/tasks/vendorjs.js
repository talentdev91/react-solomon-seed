var gulp   = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('vendorjs', function() {
  return gulp.src(config.vendorjs.libraries)
    .pipe(concat('vendorjs.js'))
    .pipe(gulp.dest('./public/js'))
});