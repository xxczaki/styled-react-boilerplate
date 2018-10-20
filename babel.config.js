const presets = [
	['@babel/preset-env', {
		targets: 'last 1 version',
		shippedProposals: true
	}],
	['@babel/preset-react', {
		useBuiltIns: true
	}]
];

const plugins = [
	['babel-plugin-styled-components', {
		minify: true,
		pure: true
	}]
];

module.exports = {presets, plugins};
