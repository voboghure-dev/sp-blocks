const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'slider': './src/blocks/slider',
		'slides': './src/blocks/slides',
		'swatch': './src/blocks/swatch',
	}
}
