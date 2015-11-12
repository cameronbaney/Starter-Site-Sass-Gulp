var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    svgSprite = require('gulp-svg-sprite');

// SVG Sprites
gulp.task('svg-sprite', function() {
  return gulp.src('./src/svg/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '',
          prefix: '',
          sprite: 'spritemap'
        }
      }
    }))
    .pipe(gulp.dest('./img'));
});

// CSS
gulp.task('styles', function () {
  return gulp.src('./src/css/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions', 'safari 6', 'ie 9', 'ios 7', 'android 4']
        }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

// JS - custom scripts
gulp.task('scripts', function() {
  return gulp.src('./src/js/scripts.js')
    .pipe(sourcemaps.init())
      .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./js'));
});

// JS - plugins
gulp.task('scripts-plugin', function() {
  return gulp.src('./src/js/plugins/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('plugins.js'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./js'));
});

// Copy files to dist
gulp.task('copyTask', function() {
  // JS library
  gulp.src('./src/js/lib/**/*')
    .pipe(gulp.dest('./js/lib'));
});

// Default Tasks
gulp.task('default', ['copyTask', 'styles', 'scripts', 'svg-sprite','scripts-plugin']);

// Watch tasks
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./src/css/**/*.scss', ['styles']);

  // Watch scripts.js files
  gulp.watch('./src/js/scripts.js', ['scripts']);

  // Watch plugin .js files
  gulp.watch('./src/js/plugins/*.js', ['scripts-plugin']);

  // Watch for .js library files
  gulp.watch('./src/js/lib/*.js', ['copyTask']);

  // SVG files for spritemap
  gulp.watch('./src/svg/*.svg', ['svg-sprite']);;
});
