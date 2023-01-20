/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { SelectControl, PanelBody, RangeControl } from "@wordpress/components";
import NumberControl from "./components/number-control";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const onChangeContent = (val) => {
		setAttributes({ content: val });
	};

	const onChangeColumnCount = (val) => {
		setAttributes({ columnCount: val });
	};

	const onChangeColumnWidth = (val) => {
		setAttributes({ columnWidth: Number(val) });
	};

	const onChangeColumnGap = (val) => {
		setAttributes({ columnGap: Number(val) });
	};

	const onChangeColumnRuleStyle = (val) => {
		setAttributes({ columnRuleStyle: val });
	};

	const onChangeColumnRuleWidth = (val) => {
		setAttributes({ columnRuleWidth: Number(val) });
	};

	const onChangeColumnRuleColor = (val) => {
		setAttributes({ columnRuleColor: val });
	};

	const {
		columnCount,
		columnWidth,
		columnGap,
		columnRuleStyle,
		columnRuleWidth,
		columnRuleColor,
	} = attributes;
	const columnStyles = {
		columnCount,
		columnWidth,
		columnGap,
		columnRuleStyle,
		columnRuleWidth,
		columnRuleColor,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Column Settings">
					<RangeControl
						label="Columns"
						value={columnCount}
						onChange={onChangeColumnCount}
						min={2}
						max={6}
					/>
					<NumberControl
						label="Column width"
						value={columnWidth}
						onChange={onChangeColumnWidth}
						min={120}
						max={500}
						step={10}
					/>
					<NumberControl
						label="Gap"
						value={columnGap}
						onChange={onChangeColumnGap}
						min={10}
						max={100}
					/>
				</PanelBody>
				<PanelBody title="Column Separator" initialOpen={false}>
					<SelectControl
						label="Separator Style"
						onChange={onChangeColumnRuleStyle}
						value={columnRuleStyle}
						options={[
							{
								label: "None",
								value: "none",
							},
							{
								label: "Solid",
								value: "solid",
							},
							{
								label: "Dotted",
								value: "dotted",
							},
							{
								label: "Dashed",
								value: "dashed",
							},
							{
								label: "Double",
								value: "double",
							},
							{
								label: "Groove",
								value: "groove",
							},
							{
								label: "Ridge",
								value: "ridge",
							},
						]}
					/>
					<NumberControl
						label="Width"
						onChange={onChangeColumnRuleWidth}
						value={columnRuleWidth}
						min={1}
						max={8}
					/>
				</PanelBody>
				<PanelColorSettings
					title="Color Settings"
					colorSettings={[
						{
							label: "Separator Color",
							value: columnRuleColor,
							onChange: onChangeColumnRuleColor,
						},
					]}
				></PanelColorSettings>
			</InspectorControls>
			<RichText
				{...useBlockProps({ style: columnStyles })}
				tagName="p"
				onChange={onChangeContent}
				value={attributes.content}
				placeholder="Enter some text here..."
			/>
		</>
	);
}
