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
	},
});

export const { addTask } = listSlice.actions;
export default listSlice.reducer

