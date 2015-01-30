var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('web', function () {
  nodemon({ script: './server/app.js', ext: 'html js', ignore: ['build/*', 'client/*', 'gulp/*', 'public/*'] })
    .on('restart', function () {
      console.log('restarted!')
    });
});
