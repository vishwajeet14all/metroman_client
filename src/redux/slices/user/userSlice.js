import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //function for making reducer
    setUserData: (state, action) => {
      state.user = action.payload;
    },    
  },
});

//Action Creators
export const { setUserData } = userSlice.actions;
export const selectUserData  = (state) => state.user.user;

//Reducer
export default userSlice.reducer;
