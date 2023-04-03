import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

const getFilter = state => state.filter;

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export { getFilter };
