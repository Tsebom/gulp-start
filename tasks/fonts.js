const fs = require('fs')

const chalk = require('chalk')
const { equal } = require('assert')

const weightStyle = new Map()

weightStyle.set("Thin", 100) 
weightStyle.set("ThinItalic", 100) 
weightStyle.set("ExtraLight", 200)
weightStyle.set("ExtraLightItalic", 200)
weightStyle.set("Light", 300)
weightStyle.set("LightItalic", 300)
weightStyle.set("Regular", 400)
weightStyle.set("RegularItalic", 400)
weightStyle.set("Medium", 500)
weightStyle.set("MediumItalic", 500)
weightStyle.set("SemiBold", 600)
weightStyle.set("SemiBoldItalic", 600)
weightStyle.set("Bold", 700)
weightStyle.set("BoldItalic", 700)
weightStyle.set("ExtraBold", 800)
weightStyle.set("ExtraBoldItalic", 800)
weightStyle.set("Black", 900)
weightStyle.set("BlackItalic", 900)

let srcFonts = 'app/scss/_local-fonts.scss'
let appFonts = 'build/fonts/'

module.exports = function fonts(done) {
	fs.writeFile(srcFonts, '', () => {})
	fs.readdir(appFonts, (err, items) => {
		if (items) {
			let style
			let name
			let c_fontname;
			for (let i = 0; i < items.length; i++) {
				let fontname = items[i].split('.');
				let fontExt = fontname[1];
				
				fontname = fontname[0];
				name = fontname.split('-')[0];
				style = fontname.split('-')[1];

				for (const key of weightStyle.keys()) {
					if (style === key) {
						weight = weightStyle.get(key)
						if (style.includes('Italic')) {
							style = 'italic'
						} else {
							style = 'normal'
						}
						break
					}
				}
				
				if (c_fontname != fontname) {
					if (fontExt == 'woff' || fontExt == 'woff2') {
						fs.appendFile(srcFonts, `@include font-face("${name}", "${fontname}", ${weight}, ${style});\r\n`, () => {})
						console.log(chalk `
{bold {bgGray Added new font: ${fontname}.}
----------------------------------------------------------------------------------
{bgYellow.black Please, move mixin call from {cyan app/scss/_local-fonts.scss} to {cyan app/scss/_fonts.scss} and then change it!}}
----------------------------------------------------------------------------------
`);
					}
				}
				c_fontname = fontname;
			}
		}
	})
	done()
}