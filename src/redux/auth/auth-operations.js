import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeaderToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async(credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            console.log(response.data);
            setHeaderToken(response.data.token);
            return response.data;
        } catch ({response}) {
            return thunkAPI.rejectWithValue(response.data.message);
        };
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, {rejectWithValue}) => {
        try {
            const response = await axios.post("/users/login", credentials);
            setHeaderToken(response.data.token);
            return response.data;
        } catch ({response}) {
            toast.error('Sorry, user not found :(', {
                theme: 'dark'
            });
            return rejectWithValue(response.data.message);
        };
    },
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
         await axios.post("/users/logout");
         clearHeader();
        } catch ({response}) {
            return thunkAPI.rejectWithValue(response.data.message);
        };
    },
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
  async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().auth;
    if(!token) {
        return thunkAPI.rejectWithValue('No valid token!');
    } setHeaderToken(token);
    try {
       const response = await axios.get("/users/current");
       return response.data;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response.data.message);
    };
  },
);