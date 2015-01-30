var _    = require('underscore');
var gulp = require('gulp');

// add's a slash prefix to all the keys
function makeChange() {
  // you're going to receive Vinyl files as chunks
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

gulp.task('pathify', function() {
  return gulp.src('./tmp/public/rev-manifest.json')
    .pipe(makeChange())
    .pipe(gulp.dest('./deploy/public'));
});
