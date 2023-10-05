export interface TodoProps {
	id: string;
	body: string;
	isCompleted: boolean;
}

export interface ThemeSlice {
	isLight: boolean;
}

export interface ListSlice {
	tasksList: TodoProps[];
	filteredList: TodoProps[];
}

export enum ListTypes {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed',
}

export interface AppStateObject {
	theme: {
		isLight: boolean;
	};
	list: {
		tasksList: TodoProps[];
		filteredList: TodoProps[];
	};
	listType: string;
}

export interface CheckboxProps {
	completed: boolean;
	onClick: () => void;
	onKeyDown: (event: React.KeyboardEvent) => void;
}

export interface DeleteTodoProps {
	onClick: () => void;
}

export interface TodoListButtonProps {
	text: string;
	isActive?: boolean;
	onClick: () => void;
}
