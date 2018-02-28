const gulp = require('gulp')
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const cleanCss = require('gulp-clean-css');

gulp.task('build-sass', function () {
  return gulp.src('./**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concatCss("styles/bundle.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/'));
});
