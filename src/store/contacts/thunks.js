import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllContactsApi, addContactApi } from '../../api/contacts';

export const getContactsThunk = createAsyncThunk('getAll/contacts', () =>
  getAllContactsApi(0, 10)
);

export const getSingleContactsThunk = createAsyncThunk(
  'contacts/getSingle',
  () => getAllContactsApi()
);

export const addContact = createAsyncThunk('contacts/addContact', contact => {
  addContactApi(contact);
});

const handleFulfilledContacts = (state, { payload }) => {
  state.contacts = payload;
  state.isLoading = false;
};

const handleFulfilledSingleContact = (state, { payload }) => {
  state.singleContact = payload;
  state.isLoading = false;
};
// const handlePending = (state) => {
// 	state.isLoading = true
// 	state.error = ''
// }
// const handleRejected = (state, { error }) => {
// 	state.error = error.message
// 	state.isLoading = false
// }

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
      .addCase(getSingleContactsThunk.fulfilled, handleFulfilledSingleContact);
    // .addMatcher(isAnyOf([getContactsThunk.pending,getSingleContactsThunk.pending])), handlePending)
    // .addMatcher((action) => action.type.endsWith('contacts/pending'), handlePending)
    // .addMatcher((action) => action.type.endsWith('rejected'), handleRejected)
  },
});
export const contactsReducer = contactsSlice.reducer;
