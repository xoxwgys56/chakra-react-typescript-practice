import React, { BaseSyntheticEvent } from "react";

export interface FontConfig {
	size: string;
	color: string;
	weight: number;
}

export interface ItemLayoutProps {
	children?: React.ReactNode;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onCheckListener?: () => void;
	CheckBox: React.ReactNode;
	Item: React.ReactNode;
}

export interface ItemInputProps {
	fontConfig: FontConfig;
	createNewItem: () => void;
	updateInputValue: (inputValue: string) => void;
	// dispatch: (state: TodoState, action: TodoAction) => React.Dispatch<TodoAction>;
}

export interface ItemCheckBoxProps {
	toggleItem: (itemId: string) => void;
	itemInfo?: ItemInfo;
}

export interface ItemTextProps {
	fontConfig: FontConfig;
	removeItem: (itemId: string) => void;
	itemInfo?: ItemInfo;
	isCompleted?: boolean;
}

export type ItemInfo = {
	text: string;
	isCompleted: boolean;
	id: string;
};
