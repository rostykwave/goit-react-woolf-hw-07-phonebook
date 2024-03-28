import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllContactsApi, addContactApi, deleteContactApi, getSearchContactsApi } from '../../api/contacts';
import { changeFilter } from './actions';

export const getContactsThunk = createAsyncThunk('contacts/getAll', () =>
  getAllContactsApi()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', contact => {
  addContactApi(contact);
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', contact => {
  deleteContactApi(contact);
});

export const filterContactsThunk = createAsyncThunk('contacts/filterContacts', query => {
  getSearchContactsApi(query);
});

const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};

const handleFilter = (state, { payload }) => {
  state.filter = payload;
};

const handlePending = (state) => {
	state.contacts.isLoading = true
	state.contacts.error = ''
}
const handleRejected = (state, { error }) => {
	state.contacts.error = error.message
	state.contacts.isLoading = false
}

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
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(changeFilter, handleFilter)
    .addMatcher((action) => action.type.endsWith('contacts/pending'), handlePending)
    .addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
  },
});
export const contactsReducer = contactsSlice.reducer;
