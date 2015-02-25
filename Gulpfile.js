var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    livereload   = require('gulp-livereload');

var onError = function (err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
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
  .pipe(livereload());
});

// Sass
gulp.task('sass', function() {
  return gulp.src('./src/burgermenu.scss')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({
    "browsers": ['> 1%', 'last 3 versions', 'Firefox >= 20', 'Android > 4', 'iOS > 6'],
    "remove": false
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'))
  .pipe(livereload());
});

// HTML
gulp.task('html', function() {
  return gulp.src('./demo/index.html')
  .pipe(livereload());
});

// Default watcher
gulp.task('default', function() {
  // LiveReload
  livereload.listen();

  // Watch JS
  gulp.watch('./src/burgermenu.js', ['uglifyjs']);

  // Watch Sass
  gulp.watch('./src/burgermenu.scss', ['sass']);

  // Watch HTML and livereload
  gulp.watch('./demo/index.html', ['html']);

  // Watch Gulpconfig
  gulp.watch('./Gulpfile.js', ['uglifyjs', 'sass', 'html']);
});

// Manually build all
gulp.task('build', function() {
  gulp.start('uglifyjs', 'sass');
});
