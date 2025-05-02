import browserSync from 'browser-sync';

export const bs_php = () => {
	browserSync.init({
		browser: ['chrome'],
		watch: true,
		proxy: '',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	})
}