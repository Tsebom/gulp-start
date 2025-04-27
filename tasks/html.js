const {src, dest} = require('gulp')

const include = require('gulp-file-include')
const browserSync = require('browser-sync')

module.exports = function html() {
	return src(['app/**/*.html', '!app/components/**/*.html'], {base: 'app'})
		.pipe(include())
		.pipe(dest('build'))
		.pipe(browserSync.stream())
}