import gulp from 'gulp';

export const { styles } = await import('./tasks/styles.js');
export const { libs_style } = await import('./tasks/libs_style.js');
export const { build_js } = await import('./tasks/build_js.js');
export const { libs_js } = await import('./tasks/libs_js.js');
export const { scripts } = await import('./tasks/scripts.js');
export const { html } = await import('./tasks/html.js');
export const { php } = await import('./tasks/php.js');
export const { rastr } = await import('./tasks/rastr.js');
export const { webp } = await import('./tasks/webp.js');
export const { svg_css } = await import('./tasks/svg_css.js');
export const { svg_sprite } = await import('./tasks/svg_sprite.js');
export const { ttf } = await import('./tasks/ttf.js');
export const { fonts } = await import('./tasks/fonts.js');
export const { bs_html } = await import('./tasks/bs_html.js');
export const { bs_php } = await import('./tasks/bs_php.js');
export const { watching } = await import('./tasks/watch.js');
export const { deploy } = await import('./tasks/deploy.js');
export const { ftp } = await import('./tasks/ftp_gitignore.js');

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
		watching
	);
};
