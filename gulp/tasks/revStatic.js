var gulp     = require('gulp');
var rev      = require('gulp-rev');
var config   = require('../config');
var path     = require('path');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('moveimages', function() {
  return gulp.src(['./client/images/**'], {base:"./client/images"})
    .pipe(gulp.dest('./tmp/public/images'));
});

gulp.task('revStaticItems', function() {
  // by default, gulp would pick `assets/css` as the base,
  // so we need to set it explicitly:
  return gulp.src([
    './tmp/public/css/*.css',
    './tmp/public/js/*.js',
    './tmp/public/images/**/*'
    ], {base: path.join(process.cwd(), 'tmp/public')})
      .pipe(rev())
      .pipe(gulp.dest('./deploy/public'))  // write rev'd assets to build dir
      .pipe(rev.manifest())
      .pipe(gulp.dest('./deploy/public')); // write manifest to build dir
});

gulp.task('revStatic', gulpsync.sync(['moveimages','revStaticItems']));