module.exports = api => {
	api.cache.using(() => process.env.NODE_ENV);

	const presets = [
		['@babel/preset-env', {
			targets: {
				esmodules: true
			},
			corejs: '3.6',
			useBuiltIns: 'usage',
			bugfixes: true
		}],
		'@babel/preset-react'
	];

	const plugins = [
		['babel-plugin-styled-components', {
			minify: true,
			pure: true
		}]
	];

	if (!api.env('production') && !api.env('test')) {
		plugins.push(['react-refresh/babel']);
	}

	return {presets, plugins};
};
