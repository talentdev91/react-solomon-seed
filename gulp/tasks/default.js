var gulp = require('gulp');
var gulpsync   = require('gulp-sync')(gulp);

gulp.task('default', gulpsync.async(['vendorjs', 'less', 'react', 'web', 'watch', ['browserSync']]));
