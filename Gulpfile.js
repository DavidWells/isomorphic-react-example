var gulp = require('gulp'),
browserify = require('gulp-browserify'),
nodemon = require('gulp-nodemon'),
sass = require('gulp-ruby-sass'),
wiredep = require('wiredep').stream,
react = require('gulp-react'),
gulpif = require('gulp-if'),
autoprefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
cache = require('gulp-cache'),
useref = require('gulp-useref'),
plumber = require('gulp-plumber'),
htmlmin = require('gulp-htmlmin'),
pngquant = require('imagemin-pngquant'),
cssmin = require('gulp-minify-css'),
runSequence = require('run-sequence'),
nodeJsx = require('node-jsx');

gulp.task('watch-sass', function () {
  return sass('src/public/scss/main.scss', { style: 'expanded' })
    .pipe(autoprefixer({
        // This will include support for all major browsers!
        browsers: [
            'last 3 versions',
            'Chrome > 20',
            'Firefox > 20',
            'Safari > 3.1',
            'Opera > 12.1',
            'Explorer > 11',
        ],
        cascade: false
    }))
    .pipe(gulp.dest('src/public/styles'));
});

// Watch React Files
gulp.task('watch-jsx', function () {
    console.log("Running Watch-JSX");
    nodeJsx.install();
    gulp.src(['src/app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./src/public/jsx/'));
});

gulp.task('scripts', function () {

    gulp.src(['src/app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./src/public/jsx/'));

});

gulp.task('watch', function() {
  gulp.watch('src/public/scss/**/*.scss', ['watch-sass']);
  gulp.watch('src/app/components/**/*.js', ['watch-jsx']);
});

gulp.task('develop', function () {
  nodemon({
    script: 'src/bin/www',
    ext: 'js jade'
  }).on('restart', function () {
  });
});

// gulp.task('default', ['scripts']);

gulp.task('default', [
  'watch-sass',
  'scripts',
  'develop',
  'watch'
]);
