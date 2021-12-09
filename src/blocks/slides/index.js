import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import edit from "./edit";
import save from "./save";

import metadata from "./block.json";
const { name, ...settings } = metadata;

// "parent": [ "sp-blocks/slider" ],

registerBlockType(name, {
	...settings,

	edit,

	save,
});
