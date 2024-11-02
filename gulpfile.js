const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browsersync = require("browser-sync").create();

// Sass Task
function scssTask() {
  return src("css/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("css"));
}

// Watch Task
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(["**/*.scss", "**/*.js"], series(scssTask, browsersyncReload));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Default Gulp Task
exports.default = series(scssTask, browsersyncServe, watchTask);
