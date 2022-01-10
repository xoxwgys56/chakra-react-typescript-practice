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
}
