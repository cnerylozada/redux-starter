import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../models/models";

const apiUrl = "http://localhost:4000";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/` }),
  keepUnusedDataFor: 15,
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], void>({
      query: () => `posts`,
    }),
    getPostById: builder.query<IPost, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;
