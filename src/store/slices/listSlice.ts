import { createSlice } from '@reduxjs/toolkit';
import { ListSlice } from '../../models/types';

const initialState: ListSlice = {
	tasksList: [],
	filteredList: [],
};

export const listSlice = createSlice({
	name: 'listSlice',
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasksList = [...state.tasksList, action.payload];
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
		},
		deleteTask(state, action) {
			const updatedTasks = state.tasksList.filter(
				(task) => task.id !== action.payload
			);

			state.tasksList = updatedTasks;
			state.filteredList = updatedTasks;
		},
		clearCompleted: (state) => {
			const activeTasks = state.tasksList.filter(
				(item) => item.isCompleted === false
			);

			state.tasksList = activeTasks;
			state.filteredList = activeTasks;
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
	},
});

export const {
	addTask,
	completeTask,
	deleteTask,
	clearCompleted,
	showAllTasks,
	showActiveTasks,
	showCompletedTasks,
} = listSlice.actions;
export default listSlice.reducer;
