//create plugins' css file
const plugins = []

const {src, dest} = require('gulp')

const map = require('gulp-sourcemaps')
const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const chalk = require('chalk')

module.exports = function libs_style(done) {
	if (plugins.length > 0) {
		return src(plugins)
		.pipe(map.init())
		.pipe(concat('libs.min.css'))
		.pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/css'))
	} else {
		return done(console.log(chalk.redBright('No added css/scss plugins')));
	}
}