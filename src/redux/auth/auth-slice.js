import { createSlice } from "@reduxjs/toolkit";

import { register, login, logOut, refreshUser } from "./auth-operations";

const initialState = {
    user: { name: null, email: null},
    token: null,
    isLogin: false,
    isRefresh: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      }) 
      .addCase(register.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.isLogin = false;
        state.error = null;
        state.user = {name: '', email: ''};
        state.token = null;
      })
      .addCase(logOut.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.isRefresh = false;
        state.user = payload;
        state.isLogin = true; 
      })
      .addCase(refreshUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.isRefresh = false;
      })
   },
});

const authReducer = authSlice.reducer;
export default authReducer;