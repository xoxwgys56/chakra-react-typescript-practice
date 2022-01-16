import { ItemVisibilityStatus } from "./constants";

export interface FontConfig {
	size: string;
	color: string;
	weight: number;
}

export interface ItemLayoutProps {
	CheckBox: () => JSX.Element;
	Item: () => JSX.Element;
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

export interface ItemInputBoxProps {
	fontConfig: FontConfig;
	createNewItem: () => void;
	updateInputValue: (inputValue: string) => void;
}

export interface ItemInputCheckBoxProps {
	onCheckItems: () => void;
	isAllChecked: boolean;
}

export interface ItemFooterProps {
	leftCount: number;
	updateVisibilityStatus: (status: ItemVisibilityStatus) => void;
	itemVisibilityStatus: ItemVisibilityStatus;
	removeAllCompletedItems: () => void;
}

export interface ItemVisibilityButton {
	name: string;
	state: ItemVisibilityStatus;
}
