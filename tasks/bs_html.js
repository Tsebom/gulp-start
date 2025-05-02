import browserSync from 'browser-sync';

export const bs_html = () => {
	browserSync.init({
		server: {
			baseDir: 'build/',
			host: '192.168.1.77'//this is the local ip your PC
		},
		callbacks: {
			ready: function (err, browserSync) {
				browserSync.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		browser: 'chrome',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}