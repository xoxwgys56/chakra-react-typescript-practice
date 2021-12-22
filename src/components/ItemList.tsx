import React from "react";
import { Container, VStack } from "@chakra-ui/react";
import ItemListFooter from "./ItemListFooter";
import ItemInput from "./ItemInput";
import Item from "./Item";
import { FontConfig } from "../interfaces";

function ItemList() {
	const fontConfig = {
		size: "1.5rem",
		color: "gray.600",
		weight: 300,
	} as FontConfig;

	const leftCount = 0;

	return (
		<Container bg="white" w="80%" paddingTop="25px" paddingBottom="25px" boxShadow="lg">
			<VStack>
				<ItemInput fontConfig={fontConfig} />
				<Item fontConfig={fontConfig} />
				<Item fontConfig={fontConfig} />
				<Item fontConfig={fontConfig} />
				<ItemListFooter leftCount={leftCount} />
			</VStack>
		</Container>
	);
}

export default ItemList;
