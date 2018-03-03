const gulp = require('gulp');
const markdown = require('gulp-markdown');
const through = require('through2')
const handlebars = require('handlebars');
const path = require('path')
const ext_replace = require('gulp-ext-replace');

handlebars.registerHelper('isEven', function(conditional, options) {
  if((conditional % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

gulp.task('build-partials', function () {

    return gulp.src('**/*.hbp', {cwd: './src/'})
        .pipe(through.obj(function(chunk, enc, cb) {
          const partialName = chunk.relative.substr(0,chunk.relative.length - 4)
          handlebars.registerPartial(partialName, chunk.contents.toString())
          cb()
        }))
});

gulp.task('build-markdown', function () {

    return gulp.src('**/*.md', {cwd: './src/'})
        .pipe(markdown())
        .pipe(through.obj(function(chunk, enc, cb) {
          const partialName = chunk.relative.substr(0,chunk.relative.length - 3)
          handlebars.registerPartial(partialName, chunk.contents.toString())
          cb()
        }))
});

gulp.task('build-pages', ['build-partials', 'build-markdown'], function () {

    return gulp.src('**/*.hbs', {cwd: './src/'})
        .pipe(through.obj(function(chunk, enc, cb) {
          const fileData = path.parse(chunk.path)
          const model = require(`${fileData.dir}/${fileData.name}.js`)
          const partial = handlebars.compile(chunk.contents.toString())(model)
          chunk.contents = new Buffer(partial)
          this.push(chunk)
          cb()
        }))
        .pipe(ext_replace("html"))
        .pipe(gulp.dest("./dist"))
});
