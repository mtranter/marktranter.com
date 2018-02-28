const gulp = require('gulp');
const gls = require('gulp-live-server')
const clearRequire = require('clear-require');

const clearMatch = regex => {
	for (const moduleId of Object.keys(require.cache)) {
		if (moduleId.indexOf('node_modules') === -1) {
			delete require.cache[moduleId];
		}
	}
}

gulp.task('serve', ['build'], function() {


  //3. serve multi folders
  var server = gls.static(['dist']);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['src/**/*.scss'], function (file) {
      console.log(`${file.path} changed`)
    gulp.start('build-sass')
  });

  gulp.watch(['src/**/*.hbp','src/**/*.hbs','src/**/*.md'], function (file) {
      console.log(`${file.path} changed`)
    gulp.start('build-pages')
  });

  gulp.watch(['src/**/*.js'], function (file) {
    clearMatch()
    gulp.start('build-pages')
  });

  gulp.watch(['dist/**/*.html','dist/**/*.js','dist/**/*.css'], function (file) {
      console.log(`${file.path} changed`)
    server.notify.apply(server, [file]);
  });
});
