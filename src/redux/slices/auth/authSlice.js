import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
  data: {},
  loading: true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      // state.isAuthenticated = true;
      // state.loading = false;
      state.user = action.payload;
    },
    unsetLoginData: (state) => {
      // state.isAuthenticated = false;
      // state.loading = true;
      state.user = {};
    },
    setUserOAuthData: (state, action) => {
      // state.isAuthenticated = true;
      // state.loading = false;
      state.data = action.payload;
    },
    unsetUserOAuthData: (state) => {
      // state.isAuthenticated = false;
      // state.loading = true;
      state.data = {};
    },
  },
});

export const {
  setLoginData,
  unsetLoginData,
  unsetUserOAuthData,
  setUserOAuthData,
} = authSlice.actions;

export const selectUserOAuthData = (state) => state.auth.data;
export const selectUserLoginData = (state) => state.auth.user;

export default authSlice.reducer;
