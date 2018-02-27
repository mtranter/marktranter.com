const gulp = require('gulp');
const through = require('through2')
const handlebars = require('handlebars');
const path = require('path')
var ext_replace = require('gulp-ext-replace');

const safeRequireModel = (n) => {
  try {
    return require(n);
  }catch(e) {
    console.warn(e)
    console.warn("Could not find model at " + n)
    return {}
  }
}
gulp.task('build-partials', function () {

    return gulp.src('**/*.hbp', {cwd: './src/'})
        .pipe(through.obj(function(chunk, enc, cb) {
          const fileData = path.parse(chunk.path)
          const model = safeRequireModel(`${fileData.dir}/${fileData.name}.js`)
          const partial = handlebars.compile(chunk.contents.toString())(model)
          const partialName = chunk.relative.substr(0,chunk.relative.length - 4)
          handlebars.registerPartial(partialName, partial)
          cb()
        }))
});

gulp.task('build-pages', ['build-partials'], function () {

    return gulp.src('**/*.hbs', {cwd: './src/'})
        .pipe(through.obj(function(chunk, enc, cb) {
          const fileData = path.parse(chunk.path)
          const model = safeRequireModel(`${fileData.dir}/${fileData.name}.js`)
          const partial = handlebars.compile(chunk.contents.toString())(model)
          chunk.contents = new Buffer(partial)
          this.push(chunk)
          cb()
        }))
        .pipe(ext_replace("html"))
        .pipe(gulp.dest("./dist"))
});

gulp.task('default', ['build-pages'])
