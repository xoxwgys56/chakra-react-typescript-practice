import { v4 as uuidv4 } from "uuid";
import { ItemInfo } from "../interfaces";
import { ActionType, ItemVisibilityStatus } from "../constants";

export type TodoState = {
	todoList: ItemInfo[];
	currentInput: string;
	isCompletedAll: boolean;
	visibilityStatus: ItemVisibilityStatus;
};

export const initialState: TodoState = {
	todoList: [],
	currentInput: "",
	isCompletedAll: false,
	visibilityStatus: ItemVisibilityStatus.ALL,
};

export type TodoAction =
	| { type: ActionType.CREATE_ITEM }
	| { type: ActionType.REMOVE_ITEM; itemId: string }
	| { type: ActionType.UPDATE_INPUT_VALUE; inputValue: string }
	| { type: ActionType.TOGGLE_COMPLETE; itemId: string }
	| { type: ActionType.COMPLETE_ALL_ITEMS }
	| { type: ActionType.REMOVE_ALL_COMPLETED_ITEMS }
	| { type: ActionType.SET_ITEM_VISIBILITY_STATUS; visibilityStatus: ItemVisibilityStatus };

export function reducer(state: TodoState = initialState, action: TodoAction): TodoState {
	switch (action.type) {
		case ActionType.CREATE_ITEM:
			return {
				...state,
				todoList: state.todoList.concat({
					text: state.currentInput,
					isCompleted: false,
					id: uuidv4(),
				} as ItemInfo),
				currentInput: "",
			};
		case ActionType.REMOVE_ITEM:
			return { ...state, todoList: state.todoList.filter((todo) => todo.id !== action.itemId) };
		case ActionType.UPDATE_INPUT_VALUE:
			return { ...state, currentInput: action.inputValue };
		case ActionType.TOGGLE_COMPLETE:
			return {
				...state,
				todoList: state.todoList.map((item) => {
					console.log(item.text, item.id === action.itemId);
					if (action.itemId === item.id)
						return {
							...item,
							isCompleted: !item.isCompleted,
						};
					else return item;
				}),
			};
		case ActionType.COMPLETE_ALL_ITEMS:
			return {
				...state,
				isCompletedAll: !state.isCompletedAll,
				todoList: state.todoList.map((item) => {
					return {
						...item,
						isCompleted: !state.isCompletedAll,
					};
				}),
			};
		case ActionType.REMOVE_ALL_COMPLETED_ITEMS:
			return {
				...state,
				todoList: state.todoList.filter((item) => !item.isCompleted),
			};
		case ActionType.SET_ITEM_VISIBILITY_STATUS:
			return {
				...state,
				visibilityStatus: action.visibilityStatus,
			};
		default:
			throw new Error(`Given "${action}" type is not defined.`);
	}
}
