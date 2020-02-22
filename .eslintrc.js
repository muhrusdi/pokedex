const path = require('path');

module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
	},
	plugins: [
		'react',
	],
	rules: {
		"linebreak-style": [0, "error", "windows"],
		"quotes": ["error", "double"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"indent": ["error", 2],
		"array-callback-return": [0, "error"],
		"import/no-extraneous-dependencies": [0, "error"],
		"react/jsx-filename-extension": [0],
		"import/extensions": [0],
		"react/prop-types": [0],
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					["components", path.resolve(__dirname, "src/components")],
					["containers", path.resolve(__dirname, "src/containers")],
					["hooks", path.resolve(__dirname, "src/hooks")],
					["hocs", path.resolve(__dirname, "src/hocs")],
					["images", path.resolve(__dirname, "src/images")],
					["utils", path.resolve(__dirname, "src/utils")],
					["layouts", path.resolve(__dirname, "src/containers/layouts")],
					["routes", path.resolve(__dirname, "src/routes")],
					["overmind-state", path.resolve(__dirname, "src/overmind")],
				],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
};
