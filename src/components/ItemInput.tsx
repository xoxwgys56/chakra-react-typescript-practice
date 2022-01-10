import { Checkbox, Input, Box, HStack, Divider } from "@chakra-ui/react";
import { ItemInputBoxProps, ItemInputCheckBoxProps } from "../interfaces";

function ItemInputCheckBox({ onCheckItems, isAllChecked }: ItemInputCheckBoxProps) {
	return (
		<Checkbox
			size="lg"
			colorScheme="gray"
			paddingRight={15}
			onChange={onCheckItems}
			isChecked={isAllChecked}
		/>
	);
}

function ItemInputBox({ fontConfig, createNewItem, updateInputValue }: ItemInputBoxProps) {
	const placeholder = "What needs to be done?";

	return (
		<Input
			placeholder={placeholder}
			type="text"
			variant="unstyled"
			fontSize={fontConfig.size}
			color={fontConfig.color}
			fontWeight={fontConfig.weight}
			onKeyPress={(e) => {
				if (e.key === "Enter") {
					if (e.currentTarget.value === "") {
						console.warn("Can not add empty text item.");
						return;
					}
					createNewItem();
					e.currentTarget.value = "";
				}
			}}
			onChange={(e) => updateInputValue(e.target.value)}
		/>
	);
}

/**
 * ## TodoInput
 *  `todo` 입력을 받는 element
 *
 * @constructor
 */
export default function ItemInput({
	fontConfig,
	createNewItem,
	updateInputValue,
	onCheckItems,
	isAllChecked,
}: ItemInputBoxProps & ItemInputCheckBoxProps) {
	// TODO remove checkbox when no items.

	/**
	 * @desc
	 * `Checkbox`의 크기를 키우고 테두리를 없애고 싶었지만 성공하지 못했다.
	 * `chakra`에서 기본으로 제공하는 `checkbox`가 이쁜 것 같아, 사용하기로 함.
	 * */
	const paddingSize = "12.5px";

	return (
		<Box
			w="100%"
			justifyContent="space-between"
			paddingBottom={paddingSize}
			paddingTop={paddingSize}
		>
			<HStack>
				<ItemInputCheckBox onCheckItems={onCheckItems} isAllChecked={isAllChecked} />
				<ItemInputBox
					fontConfig={fontConfig}
					createNewItem={createNewItem}
					updateInputValue={updateInputValue}
				/>
			</HStack>
			<Divider w="100%" />
		</Box>
	);
}
