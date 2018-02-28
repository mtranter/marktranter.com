const gulp = require('gulp')

gulp.task('build', ['build-pages', 'build-sass', 'bundle-assets'])
gulp.task('default', ['build'])
