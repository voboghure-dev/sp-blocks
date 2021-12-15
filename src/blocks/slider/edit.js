import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	const ALLOWED_BLOCKS = ["sp-blocks/slides"];

	return (
		<div {...useBlockProps()} className="container">
			<div className="slider">
				<div className="slider-wrapper">
					<ul className="slider-ul">
						<InnerBlocks
							template={ [
								ALLOWED_BLOCKS,
								ALLOWED_BLOCKS,
								ALLOWED_BLOCKS,
							] }
							orientation="horizontal"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</ul>
				</div>

				<div className="slider-control">
					<a href="#" className="prev">Prev</a>
					<a href="#" className="next">Next</a>
				</div>
			</div>
		</div>
	);
}
