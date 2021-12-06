<?php
/**
 * Plugin Name:       SP Blocks
 * Description:       Multiple blocks in a single plugin
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            voboghure
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sp-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function sp_blocks_init() {
	$blocks = array(
		'slider/',
		'slides',
	);

	foreach( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'src/blocks/' . $block );
	}
}
add_action( 'init', 'sp_blocks_init' );
