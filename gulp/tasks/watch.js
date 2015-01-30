/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
var watchify = require('./browserify')

gulp.task('watch', ['watchify'], function(callback) {
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
  gulp.watch('./client/less/**/*.less', ['less-app']);
});
