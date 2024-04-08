import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  data: {}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUserOAuthData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { login, logout, setUserOAuthData } = authSlice.actions;

export const selectUserOAuthData  = (state) => state.auth.data;

export default authSlice.reducer;
