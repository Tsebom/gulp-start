import gulp from 'gulp';
const { src } = gulp;

import ftp from 'vinyl-ftp';
import chalk from 'chalk';
import fs from 'fs';

const ftpSettings = JSON.parse(fs.readFileSync('./tasks/ftp_settings.json', 'utf8'));

const connect = ftp.create(ftpSettings);

export const deploy = () => {
	return src(['build/**/*.*', '!build/**/*.map'])
		.pipe(connect.newer(ftpSettings.dest))
		.pipe(connect.dest(ftpSettings.dest))
		.on('end', () =>
			// eslint-disable-next-line no-undef
			console.log(`Finished deploying ./build to https://${chalk.blueBright(ftpSettings.host)}`)
		);
};
