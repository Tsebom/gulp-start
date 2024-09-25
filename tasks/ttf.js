const {src, dest} = require('gulp')

const fs = require("fs");
const path = require("path");

const changed = require('gulp-changed')
const ttf2woff2 = require('gulp-ttftowoff2')
const ttf2woff = require('gulp-ttf2woff');

function cleanDirectory(directory) {
	fs.readdir(directory, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(path.join(directory, file), (err) => {
				if (err) throw err;
			});
		}
	});
}

module.exports = function ttf(done) {
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