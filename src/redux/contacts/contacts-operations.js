import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch ({response}) {
            return thunkAPI.rejectWithValue(response.data.message);
        };
    },
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(data, {rejectWithValue}) => {
        try {
           const result = await axios.post("/contacts", data);
           console.log(result.data);
           return result.data;
        } catch ({response}) {
            return rejectWithValue(response.data.message);
        };
    },
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(contactId, {rejectWithValue}) => {
        try {
        const response = await axios.delete(`/contacts/${contactId}`);
         return response.data;
        } catch ({response}) {
             return rejectWithValue(response.data.message);
        };
    },
);
