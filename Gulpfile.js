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
runSequence = require('run-sequence');

gulp.task('scripts', function () {

    gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);
