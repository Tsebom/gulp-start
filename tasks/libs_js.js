//for plagins' js code
const plugins = []

import gulp from 'gulp';
const {src, dest} = gulp;

import map from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import chalk from 'chalk';

export const libs_js = (done) => {
	if (plugins.length > 0) {
		return src(plugins)
			.pipe(map.init())
			.pipe(terser())
			.pipe(concat('libs.min.js'))
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/js'))
			.pipe(browserSync.stream())
	} else {
		return done(console.log(chalk.redBright('No added js plugins')))
	}
}