"use strict";
//using common.js to import the gulp module
//let gulp = require("gulp");

//Do it using ES2015 module system.
import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("transpile", () => {
  return browserify("src/app.js")
  .transform("babelify")
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("dist"));
});

// add gulp task to watch for changes and transpile the code without manually entering gulp command after a change

//watch Any file under the src folder ending with .js extension and every time any of these files change run the transpile task
gulp.task("watch", ["transpile"], () => {
  gulp.watch("src/**/*.js", ["transpile"]);
});

gulp.task("default",["transpile"]); //this indicates that transpile is a dependency before running the default task.
