var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

// SVG Sprites
gulp.task('svg-sprite', function() {
  return gulp.src('./public/src/svg/*.svg')
    .pipe(plugins.svgSprite({
      mode: {
        symbol: {
          dest: '',
          prefix: '',
          sprite: 'spritemap'
        }
      }
    }))
    .pipe(gulp.dest('./public/img'));
});

// CSS
gulp.task('styles', function () {
  return gulp.src('./public/src/css/*.scss')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer({
          browsers: ['last 2 versions', 'safari 6', 'ie 9', 'ios 7', 'android 4']
        }))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'));
});

// JS - custom scripts
gulp.task('scripts', function() {
  return gulp.src('./public/src/js/scripts.js')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('scripts.js'))
      .pipe(plugins.minify())
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js'));
});

// JS - plugins
gulp.task('scripts-plugin', function() {
  return gulp.src('./public/src/js/plugins/*.js')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('plugins.js'))
      .pipe(plugins.minify())
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js'));
});

// JS - library files
// Copy these files from /src/js/lib to /js/lib to maintain full file
gulp.task('scripts-lib', function() {
  gulp.src('./public/src/js/lib/**/*')
    .pipe(gulp.dest('./public/js/lib'));
});

// Default Tasks
gulp.task('default', ['scripts-lib', 'styles', 'scripts', 'svg-sprite','scripts-plugin']);

// Watch tasks
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('public/src/css/**/*.scss', ['styles']);

  // Watch scripts.js files
  gulp.watch('public/src/js/scripts.js', ['scripts']);

  // Watch plugin .js files
  gulp.watch('public/src/js/plugins/*.js', ['scripts-plugin']);

  // Watch for .js library files
  gulp.watch('public/src/js/lib/*.js', ['scripts-lib']);

  // SVG files for spritemap
  gulp.watch('public/src/svg/**/*.svg', ['svg-sprite']);
});
