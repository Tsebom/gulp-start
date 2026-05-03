import gulp from 'gulp';

import { build_js } from './tasks/build_js.js';
import { bs_html } from './tasks/bs_html.js';
import { bs_php } from './tasks/bs_php.js';
import { deploy } from './tasks/deploy.js';
import { fonts } from './tasks/fonts.js';
import { ftp } from './tasks/ftp_gitignore.js';
import { html } from './tasks/html.js';
import { libs_js } from './tasks/libs_js.js';
import { libs_style } from './tasks/libs_style.js';
import { rastr } from './tasks/rastr.js';
import { scripts } from './tasks/scripts.js';
import { styles } from './tasks/styles.js';
import { svg_css } from './tasks/svg_css.js';
import { svg_sprite } from './tasks/svg_sprite.js';
import { ttf } from './tasks/ttf.js';
import { watching } from './tasks/watch.js';
import { webp } from './tasks/webp.js';

export {
	build_js,
	bs_html,
	bs_php,
	deploy,
	fonts,
	ftp,
	html,
	libs_js,
	libs_style,
	rastr,
	scripts,
	styles,
	svg_css,
	svg_sprite,
	ttf,
	watching,
	webp,
};

export default gulp.parallel(
	rastr,
	webp,
	svg_sprite,
	ttf,
	fonts,
	html,
	styles,
	libs_style,
	svg_css,
	scripts,
	libs_js,
	bs_html,
	ftp,
	watching
);
