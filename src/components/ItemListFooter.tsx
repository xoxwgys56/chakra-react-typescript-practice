import { Button, ButtonGroup, Center, Grid } from "@chakra-ui/react";

export default function ItemListFooter({ leftCount = 0 }: { leftCount: number }) {
	// TODO change send value to use `createTheme` for `themeProvider`
	// TODO remove clear complete text when has no completed item

	const fontConfig = {
		size: "1rem",
		color: "gray.900",
		weight: 200,
	};

	interface ButtonState {
		name: string;
		state: boolean;
	}

	// TODO store this value as initial value
	const buttonState = new Array<ButtonState>(
		{ name: "All", state: true },
		{ name: "Active", state: false },
		{ name: "Completed", state: false }
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
				{/*TODO apply button style by current state*/}
				{buttonState.map((button, index) => (
					<Button
						key={index}
						fontSize={fontConfig.size}
						fontWeight={fontConfig.weight}
						variant={button.state ? "outline" : "ghost"}
						_focus={{ border: 0 }}
					>
						{button.name}
					</Button>
				))}
			</ButtonGroup>
			{/* TODO add button state which current todolist has completed item */}
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
