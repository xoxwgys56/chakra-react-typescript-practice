import * as React from "react";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import { Logo } from "./Logo";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import theme from "./theme";
import Meta from "./components/Meta";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Meta />
		<Box textAlign="center" fontSize="xl" bg="gray.50">
			<Grid minH="100vh" p={3}>
				<ColorModeSwitcher justifySelf="flex-end" />
				<VStack spacing={8} justifySelf="center" position="absolute">
					<Header />
					<ItemList />
				</VStack>
			</Grid>
		</Box>
	</ChakraProvider>
);
