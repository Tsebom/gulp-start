const {src} = require('gulp')

const svgmin = require('gulp-svgmin')
const sprite = require('gulp-svg-sprite')
const multiDest = require('gulp-multi-dest')

module.exports = function svg_sprite() {
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