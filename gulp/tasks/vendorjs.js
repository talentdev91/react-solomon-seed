var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendorjs', function() {
  gulp.src(['./client/bower/jquery/dist/jquery.min.js', './client/bower/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('vendorjs.js'))
    .pipe(gulp.dest('./public/js'))
});