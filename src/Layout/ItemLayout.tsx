import React, { ReactElement } from "react";
import { Checkbox, Divider, HStack } from "@chakra-ui/react";

interface ItemLayoutProps {
	children: React.ReactNode;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onCheckListener?: () => void;
}

/**
 * ## ItemLayout
 * `todo`에 대한 레이아웃
 * @param children 자식 엘레먼트
 * @param hoverEvent hover 이벤트가 필요한 경우 할당
 * @return 레이아웃으로 래핑된 자식 엘레먼트
 * @constructor
 */
export default function ItemLayout({
	children,
	onMouseEnter,
	onMouseLeave,
}: ItemLayoutProps): ReactElement {
	const paddingSize = "12.5px";

	return (
		<>
			<HStack
				w="100%"
				justifyContent="space-between"
				paddingBottom={paddingSize}
				paddingTop={paddingSize}
				onMouseEnter={() => (onMouseEnter ? onMouseEnter() : null)}
				onMouseLeave={() => (onMouseLeave ? onMouseLeave() : null)}
			>
				<Checkbox size="lg" colorScheme="gray" paddingRight={15} />
				{children}
			</HStack>
			<Divider w="100%" />
		</>
	);
}
