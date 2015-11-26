var gulp       = require('gulp'),
    browserify = require('browserify');

gulp.task('scripts', function () {

    var bundler = browserify({
        entries: ['app/main.js'],
        debug: true,
        transform: [ 'reactify' ]
    });

    bundler.bundle()
        .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);
