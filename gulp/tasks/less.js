var gulp        = require('gulp');
var less        = require('gulp-less');
var path        = require('path');
var browserSync = require('browser-sync');
var sourcemaps  = require('gulp-sourcemaps');

gulp.task('less-bootstrap', function() {
  return gulp.src(['./client/less/bootstrap.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/css'));
})

gulp.task('less-app', function() {
  return gulp.src(['./client/less/app.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream:true}));
})

gulp.task('less', ['less-app', 'less-bootstrap']);
