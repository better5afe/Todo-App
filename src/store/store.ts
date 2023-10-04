import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import listReducer from './slices/listSlice';
import listTypeReducer from './slices/listTypeSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		list: listReducer,
		listType: listTypeReducer,
	},
});
