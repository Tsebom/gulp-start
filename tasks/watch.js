import gulp from 'gulp';
const {watch,	parallel,	series} = gulp;

import path from 'path';
import findRemoveSync from 'find-remove';


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

	wh_ttf.on('unlink', function(file) {
		let name = path.basename(file).split('.')[0];

		findRemoveSync('build/fonts/', {
			prefix : name
		})
	});

	watch('app/**/*.html', parallel(html));
	watch('app/**/*.php', parallel(php));
	watch('app/**/*.scss', parallel(styles));
	watch('app/**/*.js', parallel(scripts));
	watch('app/**/*.json', parallel(html));
	watch('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel(rastr));
	watch('build/images/**/*.+(png|jpg|jpeg)', parallel(webp));
	watch('app/svg/css/**/*.svg', series(svg_css, styles));
	watch('app/svg/sprite/**/*.svg', series(svg_sprite, rastr));
	
	watch('build/fonts/**/*.woff2', parallel(fonts));
}