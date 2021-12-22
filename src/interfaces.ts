export interface FontConfig {
	size: string;
	color: string;
	weight: number;
}

export interface ItemProps {
	fontConfig: FontConfig;
	itemValue?: string;
	isCompleted?: boolean;
}
