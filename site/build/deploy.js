var gulp = require('gulp');
    var s3 = require('gulp-s3-upload')({});

gulp.task("deploy", function() {
    gulp.src("./dist/**")
        .pipe(s3({
            Bucket: 'marktranter.com', //  Required
            ACL:    'public-read'       //  Needs to be user-defined
        }, {
            // S3 Constructor Options, ie:
            maxRetries: 5
        }))
    ;
});
