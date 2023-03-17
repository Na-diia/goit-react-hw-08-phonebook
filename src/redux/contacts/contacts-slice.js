import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contacts-operations";

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => { 
      state.isLoading = true;})
    .addCase(fetchContacts.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.items = payload;
    })
    .addCase(fetchContacts.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(addContact.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addContact.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.items.push(payload);
      state.error = null;
    })
    .addCase(addContact.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    })
    .addCase(deleteContact.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    })
    .addCase(deleteContact.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    })
  },
});

const contactsReducer = contactSlice.reducer;
export default contactsReducer;