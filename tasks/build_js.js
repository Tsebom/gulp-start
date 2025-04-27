//for minimaize prodaction js code
const {src, dest} = require('gulp')

const uglify = require('gulp-uglify-es').default
const concat = require('gulp-concat')
const babel = require('gulp-babel')

module.exports = function build_js() {
	return src(['app/components/**/*.js', 'app/js/main.js'])
		.pipe(concat())
		.pipe(uglify())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(dest('build/js'))
}