const gulp = require('gulp')
const requireDir = require('require-dir')
const task = requireDir('./tasks')

exports.styles = task.styles
exports.libs_style = task.libs_style
exports.build_js = task.build_js
exports.libs_js = task.libs_js
exports.scripts = task.scripts
exports.html = task.html
exports.php = task.php
exports.rastr = task.rastr
exports.webp = task.webp
exports.svg_css = task.svg_css
exports.svg_sprite = task.svg_sprite
exports.ttf = task.ttf
exports.fonts = task.fonts
exports.bs_html = task.bs_html
exports.bs_php = task.bs_php
exports.watch = task.watch
exports.deploy = task.deploy

exports.default = gulp.parallel(
	exports.rastr,
	exports.webp,
	exports.svg_sprite,
	exports.ttf,
	exports.fonts,
	exports.html,
	exports.styles,
	exports.libs_style,
	exports.svg_css,
	exports.scripts,
	exports.libs_js,
	exports.bs_html,
	exports.watch
)

exports.dev_php = gulp.parallel(
	exports.libs_style,
	exports.svg_css,
	exports.fonts,
	exports.styles,
	exports.libs_js,
	exports.scripts,
	exports.rastr,
	exports.webp,
	exports.svg_sprite,
	exports.ttf,
	exports.php,
	exports.bs_php,
	exports.watch
)