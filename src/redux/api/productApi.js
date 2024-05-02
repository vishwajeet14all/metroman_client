import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_API_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}/api/product` }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    latestProducts: builder.query({
      query: () => ({
        url: "/latest",
      }),
      keepUnusedDataFor: 0,
    }),
    allProducts: builder.query({
      query: () => ({
        url: "/getAllProducts",
      }),
      keepUnusedDataFor: 0,
    }),
    newProducts: builder.mutation({
      query: ({ formData, authId }) => ({
        url: `/newProduct?authId=${authId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useNewProductsMutation,
} = productApi;
