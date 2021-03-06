//Declarations
const gulp = require("gulp"); //
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const babel = require("gulp-babel");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const webpack = require("webpack-stream");

//CSS tasks
function cssTask(cb) {
	src("./src/sass/styles.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./dist/css"))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(gulp.dest("./dist/css"));
	cb();
}

//Javascript tasks
function babelTask(cb) {
	src("src/scripts/**/*.js")
		.pipe(
			babel({
				presets: ["@babel/preset-env"],
			})
		)
		.pipe(terser())
		.pipe(dest("dist/scripts"));
	cb();
}

function webpackTask() {
	return gulp
		.src("src/scripts/app.js")
		.pipe(webpack())
		.pipe(gulp.dest("dist/scripts"));
}

//Browser tasks
function browsersyncServer(cb) {
	browsersync.init({
		server: {
			baseDir: ".",
		},
	});
	cb();
}

//Reload on save
function browsersyncReload(cb) {
	browsersync.reload();
	cb();
}

// Watch Task
function watchTask() {
	watch(["*html", "src/html/**/*.html"], browsersyncReload);
	watch(
		["src/sass/**/*.scss", "src/scripts/**/*.js"],
		series(cssTask, babelTask, browsersyncReload, webpackTask)
	);
}

function buildTask(cb) {
	series(cssTask, babelTask, webpackTask);
	cb();
}

// Default Gulp Task
exports.default = series(
	cssTask,
	browsersyncServer,
	watchTask,
	babelTask,
	webpackTask
);

exports.build = buildTask;
