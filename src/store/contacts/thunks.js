import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllContactsApi,
  addContactApi,
  deleteContactApi,
} from '../../api/contacts';
import { changeFilter } from './actions';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  getAllContactsApi()
);

export const addContact = createAsyncThunk('contacts/addContact', contact => {
  return addContactApi(contact);
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  contact => {
    return deleteContactApi(contact);
  }
);

const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};

const handleAddContact = (state, { payload }) => {
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
};

const handleDeleteContact = (state, { payload }) => {
  state.contacts.items.filter(contact => contact.id !== payload.id);
  state.contacts.isLoading = false;
};

const handleFilter = (state, { payload }) => {
  state.filter = payload;
};

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};
const handleRejected = (state, { error }) => {
  state.contacts.error = error.message;
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(changeFilter, handleFilter)
      .addMatcher(
        action => action.type.endsWith('contacts/pending'),
        handlePending
      )
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
