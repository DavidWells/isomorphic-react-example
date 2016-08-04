var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {

    // gulp.src(['app/main.js'])
    //     .pipe(browserify({
    //         debug: true,
    //         transform: [ 'reactify' ]
    //     }))
    //     .pipe(gulp.dest('./public/'));


    var bundler = browserify({
        entries: ['app/main.js'],
        debug: true,
        transform: [ "babelify" ]
    });
    return bundler.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);

