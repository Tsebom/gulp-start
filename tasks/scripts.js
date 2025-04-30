//for main java code 
import gulp from 'gulp';
const {src, dest} = gulp;

import map from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

export const scripts = () => {
	return src(['app/components/**/*.js', 'app/js/main.js'])
		.pipe(map.init())
		.pipe(concat('main.min.js'))
		.pipe(terser())
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/js'))
		.pipe(browserSync.stream())
}