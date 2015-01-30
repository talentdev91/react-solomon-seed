var gulp       = require('gulp');
var rev        = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var path       = require('path');
var _          = require('underscore');

// add's a slash prefix to all the keys and values
function addSlash() {
  function transform(file, cb) {
    var arr = JSON.parse(String(file.contents));
    var res = {};

    _.each(arr, function(k, v){
      res['/' + v] = '/' + k;
    });

    // read and modify file contents
    file.contents = new Buffer(JSON.stringify(res));

    // if there was some error, just pass as the first parameter here
    cb(null, file);
  }

  return require('event-stream').map(transform);
}

/*
  Static rev all the files and output a map file
*/
gulp.task('revStatic', function() {
  return gulp.src([
    './tmp/public/css/*.css',
    './tmp/public/js/*.js',
    './tmp/public/images/**/*'
    ], {base: path.join(process.cwd(), 'tmp/public')})
      .pipe(rev())
      .pipe(revReplace())
      .pipe(gulp.dest('./deploy/public'))
      .pipe(rev.manifest())
      .pipe(addSlash())
      .pipe(gulp.dest('./deploy/public'));
});
