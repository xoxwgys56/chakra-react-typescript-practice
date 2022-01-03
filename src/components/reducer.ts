import { v4 as uuidv4 } from "uuid";
import { ItemInfo } from "../interfaces";

export type TodoState = {
	todoList: ItemInfo[];
	currentInput: string;
};

interface ITodoState {
	todoList: ItemInfo[];
	currentInput: string;
}

export const initialState: ITodoState = {
	todoList: [],
	currentInput: "",
};

export enum ActionType {
	CREATE_ITEM = "CREATE_ITEM",
	TOGGLE_COMPLETE = "TOGGLE_COMPLETE",
	REMOVE_ITEM = "REMOVE_ITEM",
	UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE",
}

export type TodoAction =
	| { type: ActionType.CREATE_ITEM }
	| { type: ActionType.REMOVE_ITEM; itemId: string }
	| { type: ActionType.UPDATE_INPUT_VALUE; inputValue: string }
	| { type: ActionType.TOGGLE_COMPLETE; itemId: string };

export function reducer(state: TodoState = initialState, action: TodoAction): TodoState {
	// TODO add remove completed item action

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
			state.todoList.map((item) => {
				if (item.id === action.itemId) item.isCompleted = !item.isCompleted;
			});
			return state;
		default:
			throw new Error(`Given "${action}" type is not defined.`);
	}
}
