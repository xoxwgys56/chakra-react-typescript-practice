import React, { ReactElement } from "react";
import { Box, Divider, HStack } from "@chakra-ui/react";
import { ItemLayoutProps } from "../interfaces";

/**
 * ## ItemLayout
 * `item`에 대한 레이아웃
 * @param children 자식 엘레먼트
 * @return 레이아웃으로 래핑된 자식 엘레먼트
 * @constructor
 */
export default function ItemLayout({ Item, CheckBox }: ItemLayoutProps): ReactElement {
	const paddingSize = "12.5px";
	// TODO check effect delayed

	return (
		<Box
			w="100%"
			justifyContent="space-between"
			paddingBottom={paddingSize}
			paddingTop={paddingSize}
		>
			<HStack>
				<CheckBox />
				<Item />
			</HStack>
			<Divider w="100%" />
		</Box>
	);
}
