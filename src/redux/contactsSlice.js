import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const filteredData = state.data.filter(
        contact => contact.id !== action.payload
      );
      state.data = filteredData;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

const getContacts = state => state.contacts.data;

export const { addContact, deleteContact } = contactsSlice.actions;
export { persistedContactsReducer };
export { getContacts };
