import { __ } from "@wordpress/i18n";

import {
	InspectorControls,
	MediaUpload,
	useBlockProps,
} from "@wordpress/block-editor";
import { Panel, PanelBody, TextControl, Button } from "@wordpress/components";

import "./editor.scss";

import placeholder from './placeholder.png';

export default function Edit({ attributes, setAttributes }) {
	const { imageCaption, imageSlide } = attributes;
	const ALLOWED_MEDIA_TYPES = ["image"];
	setAttributes({ imageSlide: placeholder });
	console.log(imageSlide);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Slider Image Caption", "sp-blocks")}
						icon="format-status"
					>
						<TextControl
							label={__("Image Caption", "sp-block")}
							help={__("Write your slider image caption.", "sp-blocks")}
							onChange={(imageCaption) => setAttributes({ imageCaption })}
							value={imageCaption}
						/>
					</PanelBody>

					<PanelBody
						title={__("Slider Image Settings", "sp-blocks")}
						icon="format-gallery"
					>
						<MediaUpload
							onSelect={(uploadImage) => {
								setAttributes({ imageSlide: uploadImage.sizes.full.url });
							}}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={imageSlide}
							render={({ open }) => (
								<Button
									onClick={open}
									icon="format-image"
									className="editor-media-placeholder__button is-button is-default is-large"
								>
									Open Media Library
								</Button>
							)}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="slide-image">
					<img src={imageSlide} />
				</div>
				<div className="slide-caption">{imageCaption}</div>
			</div>
		</>
	);
}
