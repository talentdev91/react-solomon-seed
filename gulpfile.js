// var gulp     = require('gulp')
// // , packager   = require('./lib/packager')({debug: true})
// , browserify = require('browserify')
// , nodemon    = require('gulp-nodemon')
// , uglify     = require('gulp-uglify')
// , rename     = require('gulp-rename');

// var paths = {
//   scripts: ['public/javascripts/**/*.js']
// };

// var EXTERNALS = [
//   { require: "react", expose: 'react' },
//   { require: "underscore", expose: 'underscore' },
//   { require: "react-router", expose: 'react-router' },
//   { require: "flux", expose: 'flux' },
//   { require: "buffer", expose: 'buffer' }
// ];

// gulp.task('scripts', function() {
//   gulp.src('public/javascripts/app.js')
//     .pipe(browserify({
//       insertGlobals : false,
//       debug : true
//     }))
//     .on('prebundle', function(bundle) {
//       EXTERNALS.forEach(function(i){
//         if(i.expose != null) {
//           bundle.external(i.require, {expose: i.expose});
//         }
//       });
//     })
//     .pipe(gulp.dest('./public/build/js'))
// });

// gulp.task('vendor', function() {
//   gulp.src('gulp/nop.js', { read: false })
//   .pipe(browserify({
//     insertGlobals : true,
//     debug: true
//   }))
//   .on('prebundle', function(bundle){
//     EXTERNALS.forEach(function(external) {
//       if (external.expose != null) {
//         bundle.require(external.require, {expose: external.expose});
//       } else {
//         bundle.require(external.require);
//       }
//     });
//   })
//   .pipe(rename('vendor.js'))
//   .pipe(gulp.dest("public/build/js"))
// });

// gulp.task('develop', function () {
//   nodemon({ script: 'app.js', ext: 'html js', ignore: ['public/*'] })
//     .on('restart', function () {
//       console.log('restarted!')
//     });
// });

// gulp.task('watch', function() {
//   gulp.watch(paths.scripts, ['scripts']);
// });

// gulp.task('watch-vendor', function() {
//   gulp.watch(['node_modules/**/*.js'], ['vendor-scripts']);
// });


// gulp.task('compress', function() {
//   gulp.src('public/build/js/app.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('public/build/js/min'));
// });

// gulp.task('client', ['watch', 'scripts']);
// gulp.task('default', ['client', 'develop', 'vendor']);



var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
