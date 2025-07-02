import fs from 'fs';

import chalk from 'chalk';

const weightStyle = new Map();

weightStyle.set('Thin', 100);
weightStyle.set('ThinItalic', 100);
weightStyle.set('ExtraLight', 200);
weightStyle.set('ExtraLightItalic', 200);
weightStyle.set('Light', 300);
weightStyle.set('LightItalic', 300);
weightStyle.set('Regular', 400);
weightStyle.set('RegularItalic', 400);
weightStyle.set('Medium', 500);
weightStyle.set('MediumItalic', 500);
weightStyle.set('SemiBold', 600);
weightStyle.set('SemiBoldItalic', 600);
weightStyle.set('Bold', 700);
weightStyle.set('BoldItalic', 700);
weightStyle.set('ExtraBold', 800);
weightStyle.set('ExtraBoldItalic', 800);
weightStyle.set('Black', 900);
weightStyle.set('BlackItalic', 900);

const scssFonts = 'app/scss/_local-fonts.scss';
const appFonts = 'build/fonts/'; // путь к папке со шрифтами

export const fonts = (done) => {
	fs.writeFile(scssFonts, '', () => {});
	fs.readdir(appFonts, (err, items) => {
		if (err) throw err;
		if (!items) return;

		items.forEach((file) => {
			let [basename, ext] = file.split('.');
			let [fontName, rawStyle] = basename.split('-');

			let style = rawStyle.includes('Italic') ? 'italic' : 'normal';

			let weight;
			for (const [key, value] of weightStyle) {
				if (rawStyle.includes(key)) {
					weight = value;
					break;
				}
			}

			if (ext.includes('woff2')) {
				let addFont = `@include font-face("${fontName}", "${basename}", ${weight}, ${style});\r\n`;

				fs.appendFile(scssFonts, addFont, () => {});
				// eslint-disable-next-line no-undef
				console.log(chalk`\n{bold {bgGray Added font ${fontName} to the file ${scssFonts}}}\n\r`);
			}
		});
	});
	done();
};
