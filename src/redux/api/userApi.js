import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_API_URL;


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}/api/user` }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = userApi;
