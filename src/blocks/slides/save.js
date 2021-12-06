import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{__("Sp Block Slider – hello from the saved content!", "sp-blocks")}
		</p>
	);
}