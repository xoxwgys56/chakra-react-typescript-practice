import { Input } from "@chakra-ui/react";
import ItemLayout from "../Layout/ItemLayout";
import { ItemInputProps } from "../interfaces";

/**
 * ## TodoInput
 *  `todo` 입력을 받는 element
 *
 * @constructor
 */
export default function ItemInput({ fontConfig, createNewItem, updateInputValue }: ItemInputProps) {
	const placeholder = "What needs to be done?";

	// TODO add enter event listener
	// TODO block input when it is empty
	// TODO add checkbox event makes checked every items

	/**
	 * @desc
	 * `Checkbox`의 크기를 키우고 테두리를 없애고 싶었지만 성공하지 못했다.
	 * `chakra`에서 기본으로 제공하는 `checkbox`가 이쁜 것 같아, 사용하기로 함.
	 * */
	return (
		<ItemLayout>
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
		</ItemLayout>
	);
}
