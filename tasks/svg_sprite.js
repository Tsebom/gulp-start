import gulp from 'gulp';
const {src} = gulp;

import svgmin from 'gulp-svgmin';
import sprite from 'gulp-svg-sprite';
import multiDest from 'gulp-multi-dest';

export const svg_sprite = () => {
	return src('app/svg/sprite/**/*.svg')
		.pipe(svgmin({
			plugins: [
					"removeComments",
					"removeEmptyContainers",
					"removeMetadata"
			]
		}))
		.pipe(sprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(multiDest(['app/images', 'build/images']))
}