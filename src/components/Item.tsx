import { Box, CloseButton, Text } from "@chakra-ui/react";
import ItemLayout from "../Layout/ItemLayout";
import { ItemProps } from "../interfaces";
import { useCallback, useState } from "react";

export default function Item({
	fontConfig,
	toggleItem,
	removeItem,
	itemInfo = { text: "undefined", isCompleted: true, id: "undefined" },
}: ItemProps) {
	// TODO checkbox circle 만들기
	// TODO change font cancel line when item completed

	const [isHover, setIsHover] = useState(false);
	const onMouseIn = useCallback(() => setIsHover(true), []);
	const onMouseOut = useCallback(() => setIsHover(false), []);
	const onCheckListener = useCallback(() => {
		console.log(itemInfo.id);
		toggleItem(itemInfo.id);
	}, []);

	const decoration = itemInfo.isCompleted ? "line-through" : "none";

	return (
		<ItemLayout
			onMouseEnter={onMouseIn}
			onMouseLeave={onMouseOut}
			onCheckListener={onCheckListener}
		>
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
		</ItemLayout>
	);
}
