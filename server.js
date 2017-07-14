const express = require('express');
const path = require('path');

const app = express();
if (process.env.NODE_ENV !== 'production') {
	console.log('server mode: develop');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config.js');
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler,{
		noInfo: true
	}));

	app.use(webpackHotMiddleware(compiler));
} else {
	console.log('server mode: production');
	app.use(express.static('dist'));
	app.get('*', (req, res) =>{
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen(process.env.PORT || 3050, ()=> console.log('Listening on port 3050'));