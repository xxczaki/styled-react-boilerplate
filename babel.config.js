const presets = [
	['@babel/preset-env', {
		targets: {
			esmodules: true
		},
		useBuiltIns: 'usage'
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
