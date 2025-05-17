import gulp from 'gulp';
const { watch, parallel, series } = gulp;

import path from 'path';
import findRemoveSync from 'find-remove';
import run from 'gulp-run';

import { html } from './html.js';
import { php } from './php.js';
import { styles } from './styles.js';
import { scripts } from './scripts.js';
import { rastr } from './rastr.js';
import { webp } from './webp.js';
import { svg_css } from './svg_css.js';
import { svg_sprite } from './svg_sprite.js';
import { ttf } from './ttf.js';
import { fonts } from './fonts.js';

export const watching = () => {
	const wh_ttf = watch('app/fonts/**/*.ttf', parallel(ttf));
	wh_ttf.on('unlink', (file) => {
		let name = path.basename(file).split('.')[0];

		findRemoveSync('build/fonts/', { prefix: name });
	});

	const wh_rastr = watch('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel(rastr));
	wh_rastr.on('unlink', (file) => {
		let name = path.basename(file).split('.')[0];

		findRemoveSync('build/images/', { prefix: name });
		findRemoveSync('app/images/', { prefix: name });
	});

	const wh_html = watch('app/**/*.html', parallel(html));
	wh_html.on('change', (file) => {
		run(`npm run prettier -- ./${file}`).exec();
	});

	const wh_php = watch('app/**/*.php', parallel(php));
	wh_php.on('change', (file) => {
		run(`npm run prettier -- ./${file}`).exec();
	});

	const wh_style = watch('app/**/*.scss', parallel(styles));
	wh_style.on('change', (file) => {
		run(`npm run prettier -- ./${file}`).exec();
	});

	const wh_script = watch('app/**/*.js', parallel(scripts));

	wh_script.on('change', (file) => {
		run(`npm run prettier -- ./${file}`).exec();
	});

	watch('app/**/*.json', parallel(html));
	watch('app/svg/sprite/**/*.svg', series(svg_sprite, rastr));
	watch('build/images/**/*.+(png|jpg|jpeg)', parallel(webp));
	watch('app/svg/css/**/*.svg', series(svg_css, styles));
	watch('build/fonts/**/*.woff2', parallel(fonts));
};
