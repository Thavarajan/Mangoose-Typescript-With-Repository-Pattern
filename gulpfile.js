var gulp = require("gulp");
var tsc = require("gulp-typescript");
var nodemon = require("gulp-nodemon");
var tsProject = tsc.createProject('tsconfig.json');

gulp.task("compile", function() {
    return gulp
        .src("src/**/*.ts")
        .pipe(tsProject())
        .js.pipe(gulp.dest("./lib"));
});

gulp.task("watch",["compile"], function() {
    return gulp.watch("src/**/*.*", ["compile"]);
});

gulp.task("nodemon", ["compile"], function() {
    nodemon({ script: "lib/index.js", delay:15 });
});

gulp.task("default", ["compile", "watch", "nodemon"]);
