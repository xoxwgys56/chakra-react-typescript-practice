import React from "react";
import { Heading } from "@chakra-ui/react";

function Header() {
	return (
		<Heading
			as="h1"
			size="4xl"
			color="gray.300"
			fontWeight={100}
			lineHeight="1.4rem"
			paddingTop="50px"
			paddingBottom="10px"
		>
			todos
		</Heading>
	);
}

export default Header;
