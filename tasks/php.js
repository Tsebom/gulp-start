import gulp from 'gulp';
const { src, dest } = gulp;

import include from 'gulp-file-include';
import browserSync from 'browser-sync';

export const php = () => {
	return src(['app/**/*.php']).pipe(include()).pipe(dest('build/php')).pipe(browserSync.stream());
};
