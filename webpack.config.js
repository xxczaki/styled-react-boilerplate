const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const moduleList = ['react', 'react-dom', 'styled-components'];

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				cache: true
			})
		],
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: new RegExp(
						`[\\/]node_modules[\\/](${moduleList.join('|')})[\\/]`
					),
					chunks: 'initial',
					name: 'vendors',
					enforce: true
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
					'css-loader',
					'clean-css-loader'
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
		new ScriptExtHtmlWebpackPlugin({
			prefetch: /\.js$/,
			defaultAttribute: 'async'
		}),
		new OfflinePlugin(),
		new FriendlyErrorsWebpackPlugin()
	]
};
