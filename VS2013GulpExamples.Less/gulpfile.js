/// <vs SolutionOpened='watch' />

var gulp = require("gulp");
var gulpWatch = require("gulp-watch");
var less = require("gulp-less");

gulp.task("less", function () {
    return gulp.src("./Content/Less/Site.less")
        .pipe(less())
        .pipe(gulp.dest("./Content"));
});

gulp.task("watch", function () {
    gulp.watch(["./Content/Less/*.less"], ["less"]);
});

gulp.task("default", ["less"], function () { });