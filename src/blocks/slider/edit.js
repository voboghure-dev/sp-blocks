import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const ALLOWED_BLOCKS = ["sp-blocks/slides"];

	return (
		<div {...useBlockProps()} className="container">
			<div className="slider">
				<div className="slider-wrapper">
					<ul>
						<InnerBlocks
							template={ [
								ALLOWED_BLOCKS,
								ALLOWED_BLOCKS,
								ALLOWED_BLOCKS,
							] }
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</ul>
				</div>

				<div class="slider-control">
					<a href="#" class="prev">Prev</a>
					<a href="#" class="next">Next</a>
				</div>
			</div>
		</div>
	);
}
