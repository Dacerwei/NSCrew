const webpack = require('webpack');
const path = require('path');
const distPath = path.join(__dirname, 'dist');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'./app/src/index.js'
	],
	output: {
		filename: 'bundle.js',
		path: distPath,
 	},
	module: {
		rules: [
		{
			use: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			 use:['style-loader', 'css-loader'], 
			 test: /\.css$/
		}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'app/src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
	]
}