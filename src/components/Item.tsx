import { Box, Checkbox, CloseButton, HStack, Text } from "@chakra-ui/react";
import ItemLayout from "../Layout/ItemLayout";
import { ItemTextProps, ItemCheckBoxProps } from "../interfaces";
import { useCallback, useState } from "react";

const defaultItemInfo = { text: "undefined", isCompleted: true, id: "undefined" };

function ItemCheckBox({ toggleItem, itemInfo = defaultItemInfo }: ItemCheckBoxProps) {
	// TODO research emotion or useMemo something like optimizing for storing component style value
	const onCheckListener = useCallback(() => {
		console.log(itemInfo.id);
		toggleItem(itemInfo.id);
	}, []);

	return (
		<Checkbox
			size="lg"
			colorScheme="gray"
			// backgroundColor="gray"
			// color="gray"
			// border={1}
			paddingRight={15}
			onChange={onCheckListener}
		/>
	);
}

function ItemText({ fontConfig, removeItem, itemInfo = defaultItemInfo }: ItemTextProps) {
	const [isHover, setIsHover] = useState(false);
	const onMouseIn = useCallback(() => setIsHover(true), []);
	const onMouseOut = useCallback(() => setIsHover(false), []);
	const decoration = itemInfo.isCompleted ? "line-through" : "none";

	return (
		<>
			<Box w="100%" onMouseEnter={onMouseIn} onMouseLeave={onMouseOut}>
				<Text
					fontSize={fontConfig.size}
					color={fontConfig.color}
					fontWeight={fontConfig.weight}
					textAlign="left"
					decoration={decoration}
				>
					{/*TODO need to test about long long text*/}
					{itemInfo.text}
				</Text>
			</Box>
			{isHover ? (
				<CloseButton
					justifySelf="end"
					_focus={{ border: 0 }}
					onClick={() => {
						removeItem(itemInfo.id);
					}}
					color="black"
				/>
			) : null}
		</>
	);
}

export default function Item({
	fontConfig,
	toggleItem,
	removeItem,
	itemInfo = { text: "undefined", isCompleted: true, id: "undefined" },
}: ItemTextProps & ItemCheckBoxProps) {
	// TODO checkbox circle 만들기
	// TODO change font cancel line when item completed
	// TODO add useMemo something like optimizing.

	const itemText = <ItemText fontConfig={fontConfig} removeItem={removeItem} itemInfo={itemInfo} />;
	const itemCheckBox = <ItemCheckBox toggleItem={toggleItem} />;

	return <ItemLayout Item={itemText} CheckBox={itemCheckBox} />;
}
