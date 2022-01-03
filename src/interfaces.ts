import { BaseSyntheticEvent, MouseEventHandler } from "react";

export interface FontConfig {
	size: string;
	color: string;
	weight: number;
}

export interface ItemInputProps {
	fontConfig: FontConfig;
	createNewItem: (e: BaseSyntheticEvent) => void;
	updateInputValue: (inputValue: string) => void;
	// dispatch: (state: TodoState, action: TodoAction) => React.Dispatch<TodoAction>;
}

export interface ItemProps {
	fontConfig: FontConfig;
	itemText?: string;
	isCompleted?: boolean;
	removeItem: (itemText: string) => void;
}

export type ItemInfo = {
	text: string;
	isCompleted: boolean;
};

export type TodoState = {
	todoList: ItemInfo[];
	currentInput: string;
};

export type TodoAction =
	| { type: "CREATE_TODO"; itemText: string }
	| { type: "REMOVE_TODO"; itemText: string }
	| { type: "UPDATE_INPUT_VALUE"; inputValue: string };
