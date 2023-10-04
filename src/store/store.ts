import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import listReducer from './slices/listSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		list: listReducer,
	},
});
