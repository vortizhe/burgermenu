var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    livereload   = require('gulp-livereload'),
    connect      = require('gulp-connect');

var onError = function (err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err.message));
  this.emit( "end" );
};

// JS
gulp.task('uglifyjs', function() {
  return gulp.src('./src/burgermenu.js')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sourcemaps.init())
  .pipe(rename({prefix: 'jquery.'}))
  .pipe(gulp.dest('./dist/'))
  .pipe(uglify({ preserveComments: 'some' }))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo/js'))
  .pipe(livereload());
});

// Sass
gulp.task('sass', function() {
  return gulp.src('./src/burgermenu.scss')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'))
  .pipe(gulp.dest('./demo/css'))
  .pipe(livereload());
});

// HTML
gulp.task('demo', function() {
  return gulp.src('./demo/index.html')
    .pipe(connect.reload());
});

// Default watcher
gulp.task('default', function() {
  // Start demo server
  connect.server({
    root: 'demo',
    port: 8765,
    livereload: true
  });

  // Watch JS
  gulp.watch('./src/burgermenu.js', ['uglifyjs']);

  // Watch Sass
  gulp.watch('./src/burgermenu.scss', ['sass']);

  // Watch HTML and livereload
  gulp.watch(['./demo/index.html', './demo/css/demo.css'], ['demo']);

  // Watch Gulpconfig
  gulp.watch('./Gulpfile.js', ['uglifyjs', 'sass', 'demo']);
});

// Manually build all
gulp.task('build', function() {
  gulp.start('uglifyjs', 'sass');
});
