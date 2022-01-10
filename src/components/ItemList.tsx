import React from "react";
import { Container, VStack } from "@chakra-ui/react";
import ItemListFooter from "./ItemListFooter";
import ItemInput from "./ItemInput";
import Item from "./Item";
import { FontConfig } from "../interfaces";
import { reducer, initialState, TodoState, TodoAction, ActionType } from "./reducer";

/**
 * 아래 구현에서 모두 `React.`으로 접근했다. 파라미터 이름을 *IDE*에서 보기 위해서이다.
 * `useCallback`같은 형식으로 가져올 경우. `*.min.*`파일에서 선언부를 가져오기 때문에 매개변수가 `a`, `b`같은 형태로 나온다.
 * @constructor
 */
function ItemList() {
	const fontConfig = {
		size: "1.5rem",
		color: "gray.600",
		weight: 300,
	} as FontConfig;

	const [state, dispatch] = React.useReducer<React.Reducer<TodoState, TodoAction>>(
		reducer,
		initialState
	);
	const createNewItem = React.useCallback(() => dispatch({ type: ActionType.CREATE_ITEM }), []);
	const updateInputValue = React.useCallback((inputValue: string) => {
		dispatch({ type: ActionType.UPDATE_INPUT_VALUE, inputValue: inputValue });
	}, []);
	const removeItem = React.useCallback((itemId: string): undefined => {
		dispatch({ type: ActionType.REMOVE_ITEM, itemId: itemId });
		return undefined;
	}, []);
	const completeItem = React.useCallback((itemId: string) => {
		dispatch({ type: ActionType.TOGGLE_COMPLETE, itemId: itemId });
	}, []);
	const completeAllItems = React.useCallback(
		() => dispatch({ type: ActionType.COMPLETE_ALL_ITEMS }),
		[]
	);

	// TODO useEffect or useMemo something for performance
	const leftCount = React.useMemo(
		() => state.todoList.filter((item) => !item.isCompleted).length,
		[state]
	);

	return (
		<Container bg="white" w="80%" paddingTop="25px" paddingBottom="25px" boxShadow="lg">
			<VStack>
				<ItemInput
					fontConfig={fontConfig}
					createNewItem={createNewItem}
					updateInputValue={updateInputValue}
					onCheckItems={completeAllItems}
					isAllChecked={leftCount == 0 && state.todoList.length > 0}
				/>
				{state.todoList.map((itemInfo, key) => (
					<Item
						fontConfig={fontConfig}
						itemInfo={itemInfo}
						toggleItem={completeItem}
						removeItem={removeItem}
						key={key}
					/>
				))}
				{/*TODO assign key to footer*/}
				<ItemListFooter leftCount={leftCount} />
			</VStack>
		</Container>
	);
}

export default ItemList;
