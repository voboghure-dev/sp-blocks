import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const ALLOWED_BLOCKS = ["sp-blocks/slides"];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				template={ [
					ALLOWED_BLOCKS,
					ALLOWED_BLOCKS,
					ALLOWED_BLOCKS,
				] }
				allowedBlocks={ALLOWED_BLOCKS} />
		</div>
	);
}
