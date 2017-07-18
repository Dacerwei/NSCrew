const webpack = require('webpack');
const path = require('path');
const distPath = path.join(__dirname, 'dist');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		'./app/src/index.js'
	],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'app/assets')
		},
		extensions: ['.js','.jsx'],
		modules: [
			path.resolve(__dirname, './app/src'),
			'node_modules'
		]
	},
	output: {
		filename: 'bundle.js',
		path: distPath,
		publicPath:'/'
		// publicPath: 'http://localhost:3050'
 	},
 	devServer: {
 		historyApiFallback: true,
 		contentBase: './',
 		hot: true
 	},
	module: {
		rules: [
		{
			use: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			}), 
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/,
			use: 'file-loader'
		},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    	// new webpack.NoErrorsPlugin(),
		new HTMLWebpackPlugin({
			template: 'app/src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new ExtractTextPlugin({
			filename: 'style.css'
		})
	]
}