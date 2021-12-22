import { Box, CloseButton, Text } from "@chakra-ui/react";
import ItemLayout from "../Layout/ItemLayout";
import { ItemProps } from "../interfaces";
import { useCallback, useState } from "react";

export default function Item({ fontConfig, itemValue = "test" }: ItemProps) {
	// TODO checkbox circle 만들기
	// TODO change font cancel line when item completed
	// TODO add event listener when click checkbox

	const [isHover, setIsHover] = useState(false);
	const onMouseIn = useCallback(() => setIsHover(true), []);
	const onMouseOut = useCallback(() => setIsHover(false), []);

	return (
		<ItemLayout onMouseEnter={onMouseIn} onMouseLeave={onMouseOut}>
			<Box w="100%">
				<Text
					fontSize={fontConfig.size}
					color={fontConfig.color}
					fontWeight={fontConfig.weight}
					textAlign="left"
				>
					{/*TODO need to test about long long text*/}
					{itemValue}
				</Text>
			</Box>
			{isHover ? <CloseButton justifySelf="end" _focus={{ border: 0 }} /> : null}
		</ItemLayout>
	);
}
