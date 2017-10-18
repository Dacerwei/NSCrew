import express from 'express';
import helmet from 'helmet';
import {renderToString} from 'react-dom/server';
import App from '../app/src/serverIndex.js';
import template from '../app/src/template';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());

if (process.env.NODE_ENV !== 'production') {
	console.log('server mode: develop');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('../webpack.config.js');
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		noInfo: true
	}));
	app.use(webpackHotMiddleware(compiler));
} else {
	console.log('server mode: production');

	app.use(express.static('dist'));

	app.get('/', (req, res) => {
		appString = renderToString(<App />);
		res.send(template({
			body: appString,
			title: 'Naughty Swing 搖擺舞團',
		}))
	});
}

app.listen(PORT, () => console.log('Listening on port:'+PORT));