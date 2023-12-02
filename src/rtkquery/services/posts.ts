import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../models/models";

const apiUrl = "http://localhost:4000";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/` }),
  keepUnusedDataFor: 15,
  tagTypes: ["allPosts"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], void>({
      query: () => `posts`,
      providesTags: ["allPosts"],
    }),
    getPostById: builder.query<IPost, string>({
      query: (id) => `posts/${id}`,
    }),
    addNewPost: builder.mutation<IPost, Omit<IPost, "id">>({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["allPosts"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useAddNewPostMutation,
} = postApi;
