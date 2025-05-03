import gulp from 'gulp';
const { src, dest } = gulp;

import include from 'gulp-file-include';
import browserSync from 'browser-sync';

export const html = () => {
	return src(['app/**/*.html', '!app/components/**/*.html'], { base: 'app' })
		.pipe(include())
		.pipe(dest('build'))
		.pipe(browserSync.stream());
};
