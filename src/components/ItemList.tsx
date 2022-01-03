import React, { useCallback, useReducer } from "react";
import { Container, VStack } from "@chakra-ui/react";
import ItemListFooter from "./ItemListFooter";
import ItemInput from "./ItemInput";
import Item from "./Item";
import { FontConfig, TodoState, TodoAction, ItemInfo } from "../interfaces";

function reducer(state: TodoState, action: TodoAction) {
	switch (action.type) {
		case "CREATE_TODO":
			return {
				...state,
				todoList: state.todoList.concat({
					text: state.currentInput,
					isCompleted: false,
				} as ItemInfo),
				currentInput: "",
			};
		case "REMOVE_TODO":
			return { ...state, todoList: state.todoList.filter((todo) => todo.text !== action.itemText) };
		case "UPDATE_INPUT_VALUE":
			return { ...state, currentInput: action.inputValue };
		default:
			throw new Error(`Given "${action}" type is not defined.`);
	}
}

const initialState = {
	todoList: [],
	currentInput: "",
};

function ItemList() {
	const fontConfig = {
		size: "1.5rem",
		color: "gray.600",
		weight: 300,
	} as FontConfig;

	// TODO implement reducer for manage state
	const [state, dispatch] = useReducer(reducer, initialState);
	const createNewItem = useCallback((e) => {
		if (e.key === "Enter") {
			dispatch({ type: "CREATE_TODO", itemText: e.target.value });
			e.target.value = "";
		}
	}, []);
	const updateInputValue = (inputValue: string) => {
		dispatch({ type: "UPDATE_INPUT_VALUE", inputValue: inputValue });
	};
	const removeItem = (itemText: string): undefined => {
		dispatch({ type: "REMOVE_TODO", itemText: itemText });
		return undefined;
	};
	const leftCount = state.todoList.filter((item) => !item.isCompleted).length;

	return (
		<Container bg="white" w="80%" paddingTop="25px" paddingBottom="25px" boxShadow="lg">
			<VStack>
				<ItemInput
					fontConfig={fontConfig}
					createNewItem={createNewItem}
					updateInputValue={updateInputValue}
				/>
				{state.todoList.map((itemInfo, key) => (
					<Item
						fontConfig={fontConfig}
						itemText={itemInfo.text}
						removeItem={removeItem}
						key={key}
					/>
				))}
				{/*<Item fontConfig={fontConfig} />*/}
				<ItemListFooter leftCount={leftCount} />
			</VStack>
		</Container>
	);
}

export default ItemList;
