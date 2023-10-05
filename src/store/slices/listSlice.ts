import { createSlice } from '@reduxjs/toolkit';
import { ListSlice, TodoProps } from '../../models/types';
import { updateLocalStorage } from '../../utils/local-storage-functions';

const initialState: ListSlice = {
	tasksList: [],
	filteredList: [],
};

interface ActionObject {
	type: string;
	payload: TodoProps[];
}



export const listSlice = createSlice({
	name: 'listSlice',
	initialState: initialState,
	reducers: {
		setTaskslist: (state, action) => {
			state.tasksList = action.payload;
			state.filteredList = action.payload;
		},
		addTask: (state, action) => {
			state.tasksList = [...state.tasksList, action.payload];
			localStorage.setItem('todos', JSON.stringify(state.tasksList));
		},
		completeTask: (state, action) => {
			const updatedTasks = state.tasksList.map((task) => {
				if (task.id === action.payload) {
					return { ...task, isCompleted: !task.isCompleted };
				}
				return task;
			});

			state.tasksList = updatedTasks;
			state.filteredList = updatedTasks;
			updateLocalStorage(updatedTasks);
		},
		deleteTask(state, action) {
			const updatedTasks = state.tasksList.filter(
				(task) => task.id !== action.payload
			);

			state.tasksList = updatedTasks;
			state.filteredList = updatedTasks;
			updateLocalStorage(updatedTasks);
		},
		clearCompleted: (state) => {
			const updatedTasks = state.tasksList.filter(
				(item) => item.isCompleted === false
			);

			state.tasksList = updatedTasks;
			state.filteredList = updatedTasks;
			updateLocalStorage(updatedTasks);
		},
		showAllTasks: (state) => {
			state.filteredList = state.tasksList;
		},
		showActiveTasks: (state) => {
			const activeTasks = state.tasksList.filter(
				(task) => task.isCompleted === false
			);

			state.filteredList = activeTasks;
		},
		showCompletedTasks: (state) => {
			const completedTasks = state.tasksList.filter(
				(task) => task.isCompleted === true
			);

			state.filteredList = completedTasks;
		},
		reorderTasks: (state, action: ActionObject) => {
			state.filteredList = action.payload;
		},
	},
});

export const {
	setTaskslist,
	addTask,
	completeTask,
	deleteTask,
	clearCompleted,
	showAllTasks,
	showActiveTasks,
	showCompletedTasks,
	reorderTasks
} = listSlice.actions;
export default listSlice.reducer;
