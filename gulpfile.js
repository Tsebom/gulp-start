import gulp from 'gulp';

import { styles } from './tasks/styles.js'
import { libs_style } from './tasks/libs_style.js'
import { build_js } from './tasks/build_js.js'
import { libs_js } from './tasks/libs_js.js'
import { scripts } from './tasks/scripts.js'
import { html } from './tasks/html.js'
import { php } from './tasks/php.js'
import { rastr } from './tasks/rastr.js'
import { webp } from './tasks/webp.js'
import { svg_css } from './tasks/svg_css.js'
import { svg_sprite } from './tasks/svg_sprite.js'
import { ttf } from './tasks/ttf.js'
import { fonts } from './tasks/fonts.js'
import { bs_html } from './tasks/bs_html.js'
import { bs_php } from './tasks/bs_php.js'
import { watching as watch } from './tasks/watch.js'
import { deploy } from './tasks/deploy.js'

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
	watch
)

export const dev_php = () => {
	gulp.parallel(
		libs_style,
		svg_css,
		fonts,
		styles,
		libs_js,
		scripts,
		rastr,
		webp,
		svg_sprite,
		ttf,
		php,
		bs_php,
		watch
	)
}