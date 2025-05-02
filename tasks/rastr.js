import gulp from 'gulp';
const {src, dest} = gulp;

import changed from 'gulp-changed';
import recompress from 'imagemin-jpeg-recompress';
import pngquant from 'imagemin-pngquant';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';

export const rastr = () => {
	return src('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(plumber())
		.pipe(changed('build/images'))
		.pipe(imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
			},
			[
				recompress({
					loops: 6,
					min: 50,
					max: 90,
					quality: 'high',
					use: [pngquant({
						quality: [0.8, 1],
						strip: true,
						speed: 1
					})],
				}),
				imagemin.gifsicle(),
				imagemin.optipng(),
				imagemin.svgo()
			], ), )
		.pipe(dest('build/images'))
  	.pipe(browserSync.stream())
}