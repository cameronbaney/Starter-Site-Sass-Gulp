var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

// Handle the error
var onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);
    this.emit('end');
};

// CSS
gulp.task('styles', function() {
  return gulp.src('src/css/style.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uncss({
        html: ['src/index.html']
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// JS - custom scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// JS - plugins
gulp.task('scripts-plugin', function() {
  return gulp.src('src/js/plugins/*.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Plugins task complete' }));
});

// Images
gulp.task('images', function() {
 return gulp.src('src/img/**/*')
   .pipe(plumber({errorHandler: onError}))
   .pipe(imagemin({
     progressive: true,
     svgoPlugins: [{removeViewBox: false, cleanupIDs: true}]
   }))
   .pipe(gulp.dest('dist/img'))
   .pipe(notify({ message: 'Image Task Completed: <%= file.relative %>' }));
});

// Minify HTML
gulp.task('minify', function() {
  return gulp.src('src/**/*.html')
    .pipe(plumber({errorHandler: onError}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'HTML minify task complete' }));
});

// Clean dist folder
gulp.task('clean', function() {
  return gulp.src(['dist/css', 'dist/js', 'dist/img'], {read: false})
    .pipe(clean());
});

// Copy files to dist
gulp.task('copyTask', function() {
  // Favicon
  gulp.src('src/**/*.ico')
    .pipe(gulp.dest('dist/'));

  // Fonts
  gulp.src('src/font/**/*')
    .pipe(gulp.dest('dist/font'));

  // .htaccess
  gulp.src('src/.htaccess')
    .pipe(gulp.dest('dist/'));
});

// Default Tasks
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'scripts-plugin', 'images', 'minify', 'copyTask');
});

// Copy Tasks
gulp.task('copy', function() {
    gulp.start('copyTask');
});

// Watch tasks
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/css/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);

  // Watch plugin .js files
  gulp.watch('src/js/plugins/*.js', ['scripts-plugin']);

  // Watch image files
  gulp.watch('src/img/**/*', ['images']);

  // Watch minify files
  gulp.watch('src/**/*.html', ['minify']);

});