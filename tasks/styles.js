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
		.pipe(autoPrefixer({
			overrideBrowserslist: ['last 8 version'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6'
			]
		}))
		.pipe(clean({level: 2}))
		.pipe(concat('style.min.css'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/css'))
		.pipe(browserSync.stream())//reboot html file
}