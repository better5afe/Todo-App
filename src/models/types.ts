export interface ThemeSlice {
	isLight: boolean;
}

export interface AppStateObject {
	theme: {
		isLight: boolean;
	};
}

export interface TodoProps {
	id: string;
	body: string;
	isCompleted: boolean;
}

export interface CheckboxProps {
	completed: boolean;
	onClick: () => void;
}

export interface DeleteTodoProps {
	onClick: () => void;
}
