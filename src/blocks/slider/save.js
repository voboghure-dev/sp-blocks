import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	return (
		<div {...useBlockProps.save()} className="container">
			<div className="slider">
				<div className="slider-wrapper">
					<ul>
						<InnerBlocks.Content />
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
