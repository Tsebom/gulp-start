//convert, concatenate and compress scss to css
const {src, dest} = require('gulp')

const map = require('gulp-sourcemaps')
const scss = require('gulp-sass')(require('sass'))
const bulk = require('gulp-sass-bulk-importer')
const concat = require('gulp-concat')
const clean = require('gulp-clean-css')
const browserSync = require('browser-sync')
const autoPrefixer = require('gulp-autoprefixer')

module.exports = function styles() {
	return src('app/scss/**/*.scss', '!app/scss/base/*.scss', '!app/scss/global/*.scss')
		.pipe(map.init())
		.pipe(bulk())
		.pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
		.pipe(autoPrefixer({cascade: false}))
		.pipe(clean({level: 2}))
		.pipe(concat('style.min.css'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/css'))
		.pipe(browserSync.stream())//reboot html file
}