import { configureStore } from '@reduxjs/toolkit';
import { constactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { contacts: constactsReducer, filter: filterReducer },
});
