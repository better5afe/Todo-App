import { createSlice } from '@reduxjs/toolkit';
import { ListTypes } from '../../models/types';

const initialState = ListTypes.ALL;

export const listTypeSlice = createSlice({
  name: 'listType',
  initialState,
  reducers: {
    allItems: () => ListTypes.ALL,
    activeItems: () => ListTypes.ACTIVE,
    completedItems: () => ListTypes.COMPLETED,
  },
});

export const { allItems, activeItems, completedItems } = listTypeSlice.actions;
export default listTypeSlice.reducer;
