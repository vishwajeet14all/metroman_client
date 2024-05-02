import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import userReducer from "./slices/user/userSlice";
import { userApi } from "./api/userApi";
import { productApi } from "./api/productApi";


export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (defaultMiddlewares) => [
    ...defaultMiddlewares(),
    userApi.middleware,
    productApi.middleware,
  ],
});
