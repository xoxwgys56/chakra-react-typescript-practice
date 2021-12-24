import { BaseSyntheticEvent } from "react";

export interface FontConfig {
	size: string;
	color: string;
	weight: number;
}

export interface ItemInputProps {
	fontConfig: FontConfig;
	createNewItem: (e: BaseSyntheticEvent) => void;
}

export interface ItemProps {
	fontConfig: FontConfig;
	itemValue?: string;
	isCompleted?: boolean;
}

export interface TodoState {
	todoList: string[];
	currentInput: string;
}
