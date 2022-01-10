import { useCallback, useState } from "react";
import { Box, Checkbox, CloseButton, Divider, HStack, Text } from "@chakra-ui/react";
import { ItemTextProps, ItemCheckBoxProps } from "../interfaces";

function ItemCheckBox({ toggleItem, itemInfo }: ItemCheckBoxProps) {
	// TODO research emotion or useMemo something like optimizing for storing component style value
	// TODO split style data
	if (!itemInfo) {
		console.error("Got invalid item info.");
		return null;
	}
	const onCheckListener = useCallback(() => toggleItem(itemInfo.id), []);

	return (
		<Checkbox
			size="lg"
			colorScheme="gray"
			// backgroundColor="gray"
			// color="gray"
			// border={1}
			paddingRight={15}
			onChange={onCheckListener}
			isChecked={itemInfo.isCompleted}
		/>
	);
}

function ItemText({ fontConfig, itemInfo }: ItemTextProps) {
	if (!itemInfo) {
		console.error("Got invalid item info.");
		return (
			<Box w="100%">
				<Text
					fontSize={fontConfig.size}
					color={fontConfig.color}
					fontWeight={fontConfig.weight}
					textAlign="left"
				>
					Invalid text
				</Text>
			</Box>
		);
	}

	const decoration = itemInfo.isCompleted ? "line-through" : "none";

	return (
		<Box w="100%">
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

	const paddingSize = "12.5px";
	const [isHover, setIsHover] = useState(false);
	const onMouseIn = useCallback(() => setIsHover(true), []);
	const onMouseOut = useCallback(() => setIsHover(false), []);

	return (
		<Box
			w="100%"
			justifyContent="space-between"
			paddingBottom={paddingSize}
			paddingTop={paddingSize}
			onMouseEnter={onMouseIn}
			onMouseLeave={onMouseOut}
		>
			<HStack>
				<ItemCheckBox toggleItem={toggleItem} itemInfo={itemInfo} />
				<ItemText fontConfig={fontConfig} removeItem={removeItem} itemInfo={itemInfo} />
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
			</HStack>
			<Divider w="100%" />
		</Box>
	);
}
