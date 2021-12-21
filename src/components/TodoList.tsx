import React from "react";
import {
	Box,
	Checkbox,
	Container,
	Input,
	Table,
	TableCaption,
	Tbody,
	Td,
	Tr,
	HStack,
	VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function TodoList() {
	const placeholder = "What needs to be done?";

	return (
		<Container>
			<VStack>
				<HStack>
					<Checkbox size="lg" colorScheme="gray" icon={<ChevronDownIcon />}></Checkbox>
					<Input placeholder={placeholder}></Input>
				</HStack>
				<Box>test</Box>
				<Box>test</Box>
				<Box>test</Box>
			</VStack>
		</Container>
	);
}

export default TodoList;
