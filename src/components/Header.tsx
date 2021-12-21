import React from "react";
import { Heading } from "@chakra-ui/react";

function Header() {
	return (
		<Heading as="h1" size="3xl" color="gray.200" fontWeight={100}>
			todos
		</Heading>
	);
}

export default Header;
