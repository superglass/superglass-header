'use strict';

var gulp = require('gulp');

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('*.css')
        .pipe( postcss([ require('cssnext')(), require('cssnano')() ]) )
        .pipe( gulp.dest('build/') );
});

gulp.task('default', ['css']);
