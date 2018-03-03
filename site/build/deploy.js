const gulp = require('gulp');
const awspublish = require('gulp-awspublish');

gulp.task("deploy", function() {

  var publisher = awspublish.create({
      region: 'ap-southeast-2',
      params: {
        Bucket: 'marktranter.com'
      }
    }, {
      cacheFileName: '.s3-deploy-cache'
    });

  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

    gulp.src("./dist/**")
      .pipe(awspublish.gzip())
      .pipe(publisher.publish(headers))
      .pipe(publisher.cache())
      .pipe(awspublish.reporter());
});
