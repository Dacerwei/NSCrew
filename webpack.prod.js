const webpack = require('webpack');
const path = require('path');
const distPath = path.join(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: [
		'./app/src/index.js'
	],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'app/assets'),
			moment$: 'moment/moment.js',
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
 	},
 	devtool: 'cheap-module-eval-source-map',
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
			test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/,
			use: 'file-loader'
		},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/src/index.html',
			minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			  },
			  output: {
				comments: false
			  }
		}),
		new ExtractTextPlugin({
			filename: 'style.css'
		})
	]
}