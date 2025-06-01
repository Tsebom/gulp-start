//convert, concatenate and compress scss to css
import gulp from 'gulp';
const { src, dest } = gulp;

import glob from 'gulp-sass-glob-use-forward';
import map from 'gulp-sourcemaps';
import clean from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(dartSass);

export const styles = () => {
	return src('app/scss/**/*.scss', '!app/scss/base/*.scss', '!app/scss/global/*.scss')
		.pipe(map.init())
		.pipe(glob())
		.pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
		.pipe(autoPrefixer({ cascade: false }))
		.pipe(clean({ level: 2 }))
		.pipe(concat('style.min.css'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/css'))
		.pipe(browserSync.stream()); //reboot html file
};
