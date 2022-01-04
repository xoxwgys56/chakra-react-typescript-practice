import { BaseSyntheticEvent } from "react";

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
	itemInfo?: ItemInfo;
	isCompleted?: boolean;
	toggleItem: (itemId: string) => void;
	removeItem: (itemId: string) => void;
}

export type ItemInfo = {
	text: string;
	isCompleted: boolean;
	id: string;
};
