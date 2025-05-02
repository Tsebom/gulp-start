import gulp from 'gulp';
const {src} = gulp;

import ftp from 'vinyl-ftp';
import chalk from 'chalk';
import fs from 'fs';

const ftpSettings = fs.readFileSync('./tasks/ftp_settings.json');

const connect = ftp.create(ftpSettings)

export const deploy = () => {
	return src(['build/**/*.*', '!build/**/*.map'])
		.pipe(connect.newer('public_html/'))
		.pipe(connect.dest('public_html/'))
		.on('success', () => console.log(`Finished deploing ./build to https://${chalk.blueBright(ftpSettings.host)}`))
}