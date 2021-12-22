import React from "react";
import {
	Box,
	Checkbox,
	Container,
	Input,
	HStack,
	VStack,
	Divider,
	Grid,
	Button,
	GridItem,
	SimpleGrid,
	ButtonGroup,
	Text,
	Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface ItemLayoutProps {
	children?: React.ReactNode;
}

type FontConfig = {
	size: string;
	color: string;
	weight: number;
};

interface ItemProps {
	fontConfig: FontConfig;
	itemValue?: string;
	isCompleted?: boolean;
}

/**
 * ## ItemLayout
 * `todo`에 대한 레이아웃
 *
 * @param children
 * @constructor
 */
function ItemLayout({ children }: ItemLayoutProps) {
	const paddingSize = "12.5px";

	return (
		<>
			<HStack w="100%" spacing={15} paddingBottom={paddingSize} paddingTop={paddingSize}>
				{children}
			</HStack>
			<Divider w="100%" />
		</>
	);
}

function TodoItem({ fontConfig }: ItemProps) {
	// TODO hover "x" 표시 우측에 띄우기 -> use close button
	// TODO checkbox circle 만들기
	// TODO change font cancel line when item completed

	return (
		<ItemLayout>
			<Checkbox size="lg" colorScheme="gray" icon={<ChevronDownIcon />}></Checkbox>
			<Box fontSize={fontConfig.size} color={fontConfig.color} fontWeight={fontConfig.weight}>
				test
			</Box>
		</ItemLayout>
	);
}

/**
 * ## TodoInput
 *  `todo` 입력을 받는 element
 *
 * @constructor
 */
function TodoInput({ fontConfig }: ItemProps) {
	const placeholder = "What needs to be done?";
	// TODO add enter event listener

	/**
	 * @desc
	 * `Checkbox`의 크기를 키우고 테두리를 없애고 싶었지만 성공하지 못했다.
	 * `chakra`에서 기본으로 제공하는 `checkbox`가 이쁜 것 같아, 사용하기로 함.
	 * */
	return (
		<ItemLayout>
			<Checkbox
				size="lg"
				colorScheme="gray"
				// icon={<ChevronDownIcon />}
			/>
			<Input
				placeholder={placeholder}
				type="text"
				variant="unstyled"
				fontSize={fontConfig.size}
				color={fontConfig.color}
				fontWeight={fontConfig.weight}
			/>
		</ItemLayout>
	);
}

function TodoFooter({ leftCount = 0 }: { leftCount: number }) {
	// TODO change send value to use `createTheme` for `themeProvider`
	const fontConfig = {
		size: "1rem",
		color: "gray.900",
		weight: 200,
	} as FontConfig;

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
				{buttonState.map((button) => (
					<Button
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

function TodoList() {
	// TODO footer 추가
	const fontConfig = {
		size: "1.5rem",
		color: "gray.600",
		weight: 300,
	} as FontConfig;

	const leftCount = 0;

	return (
		<Container bg="white" w="80%" paddingTop="25px" paddingBottom="25px" boxShadow="lg">
			<VStack>
				<TodoInput fontConfig={fontConfig} />
				{/*<Divider w="100%" paddingTop="15px" />*/}
				<TodoItem fontConfig={fontConfig} />
				<TodoFooter leftCount={leftCount} />
			</VStack>
		</Container>
	);
}

export default TodoList;
