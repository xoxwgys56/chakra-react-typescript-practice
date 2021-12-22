import React from "react";
import { Box, Checkbox, Container, Input, HStack, VStack, Divider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface ItemLayoutProps {
	children?: React.ReactNode;
}

/**
 * ## ItemLayout
 * `todo`에 대한 레이아웃
 *
 * @param children
 * @constructor
 */
function ItemLayout({ children }: ItemLayoutProps) {
	return (
		<HStack w="100%" spacing={15}>
			{children}
		</HStack>
	);
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

/**
 * ## TodoInput
 *  `todo` 입력을 받는 element
 *
 * @constructor
 */
function TodoInput() {
	const placeholder = "What needs to be done?";
	// TODO add enter event listener
	// TODO increase font size

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
			<Input placeholder={placeholder} type="text" variant="unstyled" />
		</ItemLayout>
	);
}

function TodoList() {
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
