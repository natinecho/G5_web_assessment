// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Blog} from '@/app/types/blog'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://a2sv-backend.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      
      // Example: Include authorization if needed
    //   const token = (getState() as RootState).auth.token;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }

      return headers;
    },
    // method: 'GET', // Set the default method if needed
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: 'blogs',
        method: 'GET',
      }),
    }),
    getBlogById: builder.query<Blog, string>({
      query: (id) =>({
        url:  `/blogs/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetBlogsQuery,useGetBlogByIdQuery } = api;


// redux/Api/blogApi.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const blogApi = createApi({
//   reducerPath: 'blogApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'YOUR_API_BASE_URL' }), // replace with your API base URL
//   endpoints: (builder) => ({
//     getBlogs: builder.query<Blog[], void>({
//       query: () => '/blogs',
//     }),
//     getBlogById: builder.query<Blog, string>({
//       query: (id) => `/blogs/${id}`,
//     }),
//   }),
// });

// // export const { useGetBlogsQuery, useGetBlogByIdQuery } = blogApi;
