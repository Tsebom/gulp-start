import gulp from 'gulp';
const {src} = gulp;

import webpConv from 'gulp-webp';
import changed from 'gulp-changed';
import multiDest from 'gulp-multi-dest';
import plumber from 'gulp-plumber';

export const webp = () => {
	return src('build/images/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('build/images', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['app/images', 'build/images']))
}