var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendorjs', function() {
  return gulp.src([
    './client/bower/jquery/dist/jquery.min.js',
    './client/bower/bootstrap/dist/js/bootstrap.min.js',
    './client/bower/fastclick/lib/fastclick.js'
    ])
    .pipe(concat('vendorjs.js'))
    .pipe(gulp.dest('./public/js'))
});