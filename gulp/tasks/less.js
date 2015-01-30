var gulp        = require('gulp');
var less        = require('gulp-less');
var path        = require('path');
var browserSync = require('browser-sync');
var sourcemaps  = require('gulp-sourcemaps');

/*
  Less compile all the bootstrap css files together
*/
gulp.task('less-bootstrap', function() {
  return gulp.src(['./client/less/bootstrap.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/css'));
})

/*
  Less compile all app css files
*/
gulp.task('less-app', function() {
  return gulp.src(['./client/less/app.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream:true}));
})

gulp.task('less', ['less-app', 'less-bootstrap']);
