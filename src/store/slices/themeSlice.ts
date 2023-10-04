import { createSlice } from '@reduxjs/toolkit';
import { ThemeSlice } from '../../models/types';

const initialState = {
	isLight: true,
};

const themeSlice = createSlice({
	name: 'currentTheme',
	initialState: initialState,
	reducers: {
		setTheme: (state: ThemeSlice, action) => {
			state.isLight = action.payload;
		},
		toggleTheme: (state: ThemeSlice) => {
			state.isLight = !state.isLight;
		},
	},
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
