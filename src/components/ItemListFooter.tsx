import { Button, ButtonGroup, Center, Grid } from "@chakra-ui/react";
import { ItemFooterProps, ItemVisibilityButton } from "../interfaces";
import { ItemVisibilityStatus } from "../constants";
import React from "react";

export default function ItemListFooter({
	leftCount,
	itemVisibilityStatus,
	updateVisibilityStatus,
}: ItemFooterProps) {
	// TODO change send value to use `createTheme` for `themeProvider`
	// TODO remove clear complete text when has no completed item
	// TODO add event listener which remove all completed items

	const fontConfig = {
		size: "1rem",
		color: "gray.900",
		weight: 200,
	};

	// TODO store this value as initial value
	const buttonState = new Array<ItemVisibilityButton>(
		{ name: "All", state: ItemVisibilityStatus.ALL },
		{ name: "Active", state: ItemVisibilityStatus.ACTIVE_ONLY },
		{ name: "Completed", state: ItemVisibilityStatus.COMPLETED_ONLY }
	);
	return (
		<Grid
			w="100%"
			templateColumns="repeat(3, 1fr)"
			paddingTop="12.5px"
			fontSize={fontConfig.size}
			color={fontConfig.color}
			fontWeight={fontConfig.weight}
		>
			<Center justifySelf="start">{leftCount} items left</Center>
			<ButtonGroup>
				{/* NOTE when focused button. highlight color is so bright and focused.*/}
				{buttonState.map((button, index) => (
					<Button
						key={index}
						fontSize={fontConfig.size}
						fontWeight={fontConfig.weight}
						variant={button.state === itemVisibilityStatus ? "outline" : "ghost"}
						_focus={{ borderColor: "gray.100" }}
						onClick={() => updateVisibilityStatus(button.state)}
					>
						{button.name}
					</Button>
				))}
			</ButtonGroup>
			<Center justifySelf="end">
				<Button
					variant="link"
					_focus={{ border: 0 }}
					fontSize={fontConfig.size}
					fontWeight={fontConfig.weight}
					color={fontConfig.color}
				>
					Clear completed
				</Button>
			</Center>
		</Grid>
	);
}
