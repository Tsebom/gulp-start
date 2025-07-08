import { readFile, appendFile } from 'fs/promises';
import chalk from 'chalk';

const gitignore = '.gitignore';
const ftpSetting = 'ftp_settings.json';

export const ftp = async () => {
	try {
		const data = await readFile(`tasks/${ftpSetting}`, 'utf8');
		const config = JSON.parse(data);

		const gitFile = await readFile(gitignore, 'utf8');

		if (
			(config.pass !== '*********' ||
				config.host != 'yourhosting.com' ||
				config.user != 'username') &&
			!gitFile.includes(ftpSetting)
		) {
			await appendFile(gitignore, `${ftpSetting}\n`);
			// eslint-disable-next-line no-undef
			console.log(chalk`\n{bold {bgGreen ${ftpSetting} добавлен в .gitignore}}\n\r`);
		}
	} catch (err) {
		// eslint-disable-next-line no-undef
		console.log(chalk`\n{red Error in the ftp_gitignore.js: ${err.message}}\n`);
	}
};
