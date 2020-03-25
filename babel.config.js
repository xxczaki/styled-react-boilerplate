const presets = [
	['@babel/preset-env', {
		targets: {
			esmodules: true
		},
		corejs: '3.6',
		useBuiltIns: 'usage',
		bugfixes: true
	}],
	['@babel/preset-react']
];

const plugins = [
	['babel-plugin-styled-components', {
		minify: true,
		pure: true
	}],
	['react-hot-loader/babel']
];

module.exports = {presets, plugins};
