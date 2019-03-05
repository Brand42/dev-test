const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', () => {
  gulp.src('./src/less/*.less')
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'node_modules', 'simple-grid-css') ]
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  gulp.watch('./src/less/*.less', ['less']);
});

gulp.task('develop', () => {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee handlebars',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', (chunk) => {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'less',
  'develop',
  'watch'
]);
