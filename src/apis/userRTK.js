import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://api.themoviedb.org/3/";
const baseURL = {
  baseUrl: API,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery(baseURL),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (sessionId) => `account/${sessionId}`,
    }),
    generateToken: builder.query({
      query: () => "authentication/token/new",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
