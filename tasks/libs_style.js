//create plugins' css file
const plugins = [];

import gulp from 'gulp';
const { src, dest } = gulp;

import map from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import chalk from 'chalk';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(dartSass);

export const libs_style = (done) => {
	if (plugins.length > 0) {
		return src(plugins)
			.pipe(map.init())
			.pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
			.pipe(concat('libs.min.css'))
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/css'));
	} else {
		return done(console.log(chalk.redBright('No added css/scss plugins')));
	}
};
