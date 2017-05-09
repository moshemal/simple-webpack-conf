const webpack 			= require('webpack');
const path 				= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				const appPath = path.resolve('app/');
				return module.resource && module.resource.indexOf(appPath) === -1;
			}
		})
	]
};