import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Blog } from '@/app/types/blog';

// Create a custom fetch function to handle local JSON file fetching
const fetchLocalData = async (url: string) => {
  const response = await fetch(`/data.json`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export const api = createApi({
  reducerPath: 'blogApi',
  baseQuery: async ({ url }: { url: string }) => {
    const data = await fetchLocalData(url);
    return { data };
  },
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: 'blogs',  // This will be fetched from `data.json`
      }),
    }),
    getBlogById: builder.query<Blog, string>({
      query: (id) => ({
        url: `blogs/${id}`,  // This will be fetched from `data.json`
      }),
      transformResponse: (response: Blog[], meta, arg) => 
        response.find(blog => blog._id === arg) as Blog,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery } = api;


// // services/api.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {Blog} from '@/app/types/blog'

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://a2sv-backend.onrender.com/api/',
//     prepareHeaders: (headers, { getState }) => {
//       headers.set('Content-Type', 'application/json');
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getBlogs: builder.query<Blog[], void>({
//       query: () => ({
//         url: 'blogs',
//         method: 'GET',
//       }),
//     }),
//     getBlogById: builder.query<Blog, string>({
//       query: (id) =>({
//         url:  `/blogs/${id}`,
//         method: 'GET',
//       }),
//     }),
//   }),
// });

// export const { useGetBlogsQuery,useGetBlogByIdQuery } = api;

