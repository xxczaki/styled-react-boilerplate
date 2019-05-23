const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {HashedModuleIdsPlugin} = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (env, argv) => {
	const {mode} = argv;

	return {
		entry: './src/index.js',
		output: {
			filename: '[name].[hash].js',
			chunkFilename: '[name].[chunkhash].chunk.js',
			path: path.resolve(__dirname, 'dist')
		},
		optimization: {
			minimize: mode !== 'development',
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						warnings: false,
						compress: {
							comparisons: false
						},
						parse: {},
						mangle: true,
						output: {
							comments: false,
							/* eslint-disable camelcase */
							ascii_only: true
						/* eslint-enable camelcase */
						}
					},
					parallel: true,
					cache: true
				})
			],
			splitChunks: {
				chunks: 'all',
				minSize: 30000,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				name: true,
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
						chunks: 'all'
					},
					main: {
						chunks: 'all',
						minChunks: 2,
						reuseExistingChunk: true,
						enforce: true
					}
				}
			},
			runtimeChunk: true
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
					use: ['react-hot-loader/webpack', 'babel-loader?cacheDirectory=true']
				},
				{
					test: /\.css$/,
					use: [
						'cache-loader',
						ExtractCssChunks.loader,
						'css-loader',
						'clean-css-loader'
					]
				},
				{
					test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
					use: [
						'cache-loader',
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
								fallback: 'file-loader?name="[path][name].[ext]"'
							}
						},
						{
							loader: 'img-loader',
							options: {
								plugins: mode === 'production' && [
									require('imagemin-mozjpeg')({
										progressive: true
									}),
									require('imagemin-pngquant')({
										floyd: 0.5,
										speed: 5
									}),
									require('imagemin-webp'),
									require('imagemin-svgo')
								]
							}
						}
					]
				},
				{
					test: /\.(woff2|woff)$/,
					use: [
						'cache-loader',
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/'
							}
						}
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
				favicon: './public/favicon.png',
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true
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
			new HashedModuleIdsPlugin({
				hashFunction: 'sha256',
				hashDigest: 'hex',
				hashDigestLength: 20
			}),
			/* eslint-disable camelcase */
			new WebpackPwaManifest({
				name: 'Hello World',
				short_name: 'Hello World',
				description: 'Styled React Boilerplate Demo',
				theme_color: '#212121',
				background_color: '#212121',
				icons: [
					{
						src: path.resolve('public/favicon.png'),
						sizes: [36, 48, 72, 96, 144, 192, 512],
						ios: true
					}
				]
			}),
			/* eslint-enable camelcase */
			new GenerateSW({
				swDest: 'sw.js',
				importWorkboxFrom: 'local',
				clientsClaim: true,
				skipWaiting: true
			}),
			new HardSourceWebpackPlugin(),
			new FriendlyErrorsWebpackPlugin()
		]
	};
};
