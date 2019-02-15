const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
						return `npm.${packageName.replace('@', '')}`;
					}
				}
			}
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		quiet: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				include: /node_modules/,
				use: ['react-hot-loader/webpack']
			},
			{
				test: /\.css$/,
				use: [
					ExtractCssChunks.loader,
					'css-loader'
				]
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [
					'file-loader',
					{
						loader: 'img-loader',
						options: {
							outputPath: 'images/',
							plugins: [
								require('imagemin-mozjpeg')({
									progressive: true
								}),
								require('imagemin-pngquant')({
									floyd: 0.5,
									speed: 5
								})
							]
						}
					}
				]
			},
			{
				test: /\.(woff2|woff)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.png',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
		new ExtractCssChunks(
			{
				filename: '[name].css',
				chunkFilename: '[id].css',
				hot: true
			}
		),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new ScriptExtHtmlWebpackPlugin({
			prefetch: /\.js$/,
			defaultAttribute: 'async'
		}),
		new FriendlyErrorsWebpackPlugin()
	]
};
