import { createSlice } from '@reduxjs/toolkit';
import { ListSlice } from '../../models/types';

const initialState: ListSlice = {
	tasksList: [],
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
		},
		deleteTask(state, action) {
			const updatedTasks = state.tasksList.filter(
				(task) => task.id !== action.payload
			);

			state.tasksList = updatedTasks;
		},
	},
});

export const { addTask, completeTask, deleteTask } = listSlice.actions;
export default listSlice.reducer;
