import { createSlice } from '@reduxjs/toolkit';

interface StateObject {
	isLight: boolean;
}

const initialState = {
	isLight: true,
};

const themeSlice = createSlice({
	name: 'currentTheme',
	initialState: initialState,
	reducers: {
		setTheme: (state: StateObject, action) => {
			state.isLight = action.payload;
		},
		toggleTheme: (state: StateObject) => {
			state.isLight = !state.isLight;
		},
	},
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
