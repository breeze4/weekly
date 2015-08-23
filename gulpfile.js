var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var path = require('path');

var notify = function (error) {
    var message = 'In: ';
    var title = 'Error: ';

    if (error.description) {
        title += error.description;
    } else if (error.message) {
        title += error.message;
    }

    if (error.filename) {
        var file = error.filename.split('/');
        message += file[file.length - 1];
    }

    if (error.lineNumber) {
        message += '\nOn Line: ' + error.lineNumber;
    }

    notifier.notify({title: title, message: message});
};

var bundler = watchify(browserify({
    entries: [path.join(__dirname, 'resources', 'jsx', 'app.jsx')],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true,
    verbose: true
}));

function bundle() {
    return bundler
        .bundle()
        .on('error', notify)
        .pipe(source('main.js'))
        .pipe(gulp.dest(path.join(__dirname, 'resources')))
}
bundler.on('update', bundle);
bundler.on('log', gutil.log); // output build logs to terminal

gulp.task('build', function () {
    bundle()
});

gulp.task('sass', function () {
    gulp.src(path.join(__dirname, 'resources', 'sass', '**', '*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./resources/'));
});

gulp.task('default', ['build', 'sass', 'watch']);

gulp.task('watch', function () {
    gulp.watch(path.join(__dirname, 'resources', 'sass', '**', '*.scss'), ['sass']);
});