import { TodoProps } from "../models/types";

export const updateLocalStorage = (updatedValue: TodoProps[]) => {
	localStorage.removeItem('todos');
	localStorage.setItem('todos', JSON.stringify(updatedValue));
};