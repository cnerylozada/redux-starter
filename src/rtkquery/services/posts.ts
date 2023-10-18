import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from "../../models/models";

const apiUrl = "http://localhost:4000";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/` }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], string>({
      query: () => `posts`,
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
