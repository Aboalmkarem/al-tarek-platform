// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
    reducerPath: "courseApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_NOT_SECRET_CODE}/api/` }),
    endpoints: (builder) => ({
        getCourseByName: builder.query({
            query: (name) => `${name}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCourseByNameQuery } = courseApi;
