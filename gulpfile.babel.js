"use strict";
//using common.js to import the gulp module
//let gulp = require("gulp");

//Do it using ES2015 module system.
import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {
  return browserify("src/app.js")
  .transform("babelify")
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("dist"));
});
