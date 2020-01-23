"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require('gulp-pug');

sass.compiler = require("node-sass");  // Necessário para funcionar o gulp-sass

gulp.task('default', watch);

gulp.task('sass', compilaSass);

gulp.task('pug', compilaPug);


function compilaSass() {
    return gulp
        .src("src/scss/*.scss")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))  // Converte Sass para CSS minificado gulp-sass
        .pipe(gulp.dest("./dist/assets/css"));
}

function compilaPug() {
    return gulp
        .src("src/views/common/_layouts/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("./dist/views"));
}

function watch() {
    gulp.watch("src/scss/**/*.scss", compilaSass);
    gulp.watch("src/views/common/_layouts/*.pug", compilaPug);
}