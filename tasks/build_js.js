//for minimaize prodaction js code
import gulp from 'gulp';
const {src, dest} = gulp;

import terser from 'gulp-terser';
import concat from 'gulp-concat';
import babel from 'gulp-babel';

export const build_js = () => {
	return src(['app/components/**/*.js', 'app/js/main.js'])
		.pipe(terser())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(dest('build/js'))
}