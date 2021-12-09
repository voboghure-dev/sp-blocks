import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes, setAttributes }) {
	const blockProps = useBlockProps.save();
	const { imageCaption, imageSlide } = attributes;

	return (
		<div {...blockProps}>
			<div className="slide-image">
				<img src={imageSlide} />
			</div>
			<div className="slide-caption">{imageCaption}</div>
		</div>
	);
}