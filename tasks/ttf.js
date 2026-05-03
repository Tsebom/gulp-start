import gulp from 'gulp';
const { src, dest } = gulp;

import changed from 'gulp-changed';

const pathFonts = 'build/fonts';

const streamDone = (stream) =>
	new Promise((resolve, reject) => {
		stream.on('end', resolve);
		stream.on('error', reject);
	});

export const ttf = async () => {
	const [{ default: ttf2woff2 }, { default: ttf2woff }] = await Promise.all([
		import('gulp-ttf2woff2'),
		import('gulp-ttf2woff'),
	]);

	await Promise.all([
		streamDone(
			src('app/fonts/**/*.ttf')
				.pipe(
					changed(pathFonts, {
						extension: '.woff2',
						hasChanged: changed.compareLastModifiedTime,
					})
				)
				.pipe(ttf2woff2())
				.pipe(dest(pathFonts))
		),
		streamDone(
			src('app/fonts/**/*.ttf')
				.pipe(
					changed(pathFonts, {
						extension: '.woff',
						hasChanged: changed.compareLastModifiedTime,
					})
				)
				.pipe(ttf2woff())
				.pipe(dest(pathFonts))
		),
	]);
};
