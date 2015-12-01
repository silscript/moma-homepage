// Require Gulp
var gulp = require('gulp');

// Require Plugins
// var browserSync = require('browser-sync');
// var concat = require('gulp-concat');
// var jshint = require('gulp-jshint');
// var rename = require('gulp-rename');
// var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
});

// Default Task
gulp.task('default', ['sass']);
