import gulp from 'gulp';
const { src, dest } = gulp;

import svgmin from 'gulp-svgmin';
import svgCss from 'gulp-svg-css-pseudo';

export const svg_css = () => {
	return src('app/svg/css/**/*.svg')
		.pipe(
			svgmin({
				plugins: ['removeComments', 'removeEmptyContainers', 'removeMetadata'],
			})
		)
		.pipe(
			svgCss({
				fileName: '_svg',
				fileExt: 'scss',
				cssPrefix: '--svg__',
				addSize: false,
			})
		)
		.pipe(dest('app/scss/base'));
};
