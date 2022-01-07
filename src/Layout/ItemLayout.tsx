import React, { ReactElement } from "react";
import { Box, Checkbox, Divider, HStack } from "@chakra-ui/react";
import { ItemLayoutProps } from "../interfaces";

/**
 * ## ItemLayout
 * `item`에 대한 레이아웃
 * @param children 자식 엘레먼트
 * @param hoverEvent hover 이벤트가 필요한 경우 할당
 * @return 레이아웃으로 래핑된 자식 엘레먼트
 * @constructor
 */
export default function ItemLayout({ children, onCheckListener }: ItemLayoutProps): ReactElement {
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
				<Checkbox
					size="lg"
					colorScheme="gray"
					// backgroundColor="gray"
					// color="gray"
					// border={1}
					paddingRight={15}
					onChange={() => (onCheckListener ? onCheckListener() : null)}
				/>
				{children}
			</HStack>
			<Divider w="100%" />
		</Box>
	);
}
