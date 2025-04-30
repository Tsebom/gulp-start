import gulp from 'gulp';
const {src, dest} = gulp;

import fs from 'fs';
import path from 'path';

import changed from 'gulp-changed';
import ttf2woff2 from 'gulp-ttftowoff2';
import ttf2woff from 'gulp-ttf2woff';

const cleanDirectory = (directory) => {
	if (fs.existsSync(directory)) {
			fs.readdir(directory, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				fs.unlink(path.join(directory, file), (err) => {
					if (err) throw err;
				});
			}
		});
	}
}

export const ttf = (done) => {
	cleanDirectory('build/fonts')
	src('app/fonts/**/*.ttf')
		.pipe(changed('build/fonts', {
			extension: '.woff2',
			hasChanged: changed.compareLastModifiedTime
		}))
		.pipe(ttf2woff2())
		.pipe(dest('build/fonts'))

	src('app/fonts/**/*.ttf')
		.pipe(changed('build/fonts', {
			extension: '.woff',
			hasChanged: changed.compareLastModifiedTime
		}))
		.pipe(ttf2woff())
		.pipe(dest('build/fonts'))
	done()
}