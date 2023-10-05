import { TodoProps } from '../models/types';

export const reorderTodos = (
	todoList: TodoProps[],
	startIndex: number,
	endIndex: number
) => {
	const list = [...todoList];

	const [draggedTodo] = list.splice(startIndex, 1);
	list.splice(endIndex, 0, draggedTodo);

	return list;
};
