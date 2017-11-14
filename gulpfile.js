
var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

var rigger = require('gulp-rigger');

gulp.task('default', function () {
    gulp.src('app/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
});

