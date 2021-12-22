import React from "react";
import { Box, Checkbox, Container, Input, HStack, VStack, Divider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface ItemLayoutProps {
	children?: React.ReactNode;
}

function ItemLayout({ children }: ItemLayoutProps) {
	return <HStack w="100%">{children}</HStack>;
}

function TodoItem() {
	// TODO hover "x" 표시 우측에 띄우기
	// TODO checkbox circle 만들기
	return (
		<ItemLayout>
			<Checkbox size="lg" colorScheme="gray" icon={<ChevronDownIcon />}></Checkbox>
			<Box>test</Box>
		</ItemLayout>
	);
}

function TodoInput() {
	const placeholder = "What needs to be done?";
	// TODO input highlight outline 회색으로 만들기

	return (
		<ItemLayout>
			<Checkbox size="lg" colorScheme="gray" icon={<ChevronDownIcon />}></Checkbox>
			<Input placeholder={placeholder} type="text" />
		</ItemLayout>
	);
}

function TodoList() {
	// TODO container shade 추가
	// TODO footer 추가

	return (
		<Container bg="white" w="80%" paddingTop="25px" paddingBottom="25px" boxShadow="lg">
			<VStack>
				<TodoInput />
				<Divider w="100%" paddingTop="15px" />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</VStack>
		</Container>
	);
}

export default TodoList;
