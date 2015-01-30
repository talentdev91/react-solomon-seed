var gulp     = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var concat   = require('gulp-concat');
var nodemon  = require('gulp-nodemon');
var config   = require('../config');
var watchify = require('./browserify')

/*
  Compiles the client side vendor js files ( jquery, etc )
*/
gulp.task('uijs', function() {
  return gulp.src(config.uijs.libraries)
    .pipe(concat('ui.js'))
    .pipe(gulp.dest('./public/js'))
});

/*
  Start the web server and set a watch on it
*/
gulp.task('web', function() {
  nodemon({
    script: './server/app.js',
    ext: 'html js',
    ignore: ['build/*', 'client/*', 'gulp/*', 'public/*']
  }).on('restart', function() {
    console.log('restarted!')
  });
});

/*
  Set a watch on changes to the css files
*/
gulp.task('watch', ['watchify'], function(callback) {
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
  gulp.watch('./client/less/**/*.less', ['less-app']);
});

gulp.task('default', gulpsync.async([
  'uijs',
  'less',
  'react',
  'web',
  'watch',
  [
    'browserSync'
  ]
]));
