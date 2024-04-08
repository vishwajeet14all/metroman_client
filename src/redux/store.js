import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth/authSlice"
import userReducer from './slices/user/userSlice'


export const store = configureStore({
  reducer: {
    //Reducer
    user:userReducer,
    auth:authReducer    
  },
})