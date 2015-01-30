var gulp     = require('gulp');
var config   = require('../config');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('moveServer', function() {
  return gulp.src(['./server/**'], {base: './'})
    .pipe(gulp.dest('./deploy'));
});
