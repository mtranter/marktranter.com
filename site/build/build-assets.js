var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets'),
  rename = require("gulp-rename");

gulp.task('bundle-assets', function() {
  return gulp.src('./build/bundle.config.js')
    .pipe(bundle())
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace('src/','');
    }))
    .pipe(gulp.dest('./dist'));
});
