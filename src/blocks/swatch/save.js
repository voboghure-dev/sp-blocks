import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes, setAttributes }) {
	const blockProps = useBlockProps.save();
	const { imageCaption, imageSlide } = attributes;

	return (
		<>
			<li {...blockProps}>
				<a href=""><img src={imageSlide} alt={imageSlide} />
				{imageCaption}</a>
			</li>
		</>
	);
}