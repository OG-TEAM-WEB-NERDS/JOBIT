import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const jobsApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const jobsApi = createApi({
  resucerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsearch.p.rapidapi.com/' }),

  endpoints: (builder) => ({
    //Get All Data (can be used for job posts and companies)
    getJobs: builder.query({
      query: () => `search?query="*"&rapidapi-key=${jobsApiKey}`,
    }),

    //Get Job Details by ID
    getJobDetails: builder.query({
      query: (Id) => {
        console.log(`job-details?job_id=${Id}&rapidapi-key=${jobsApiKey}`);
        return `job-details?job_id=${Id}&rapidapi-key=${jobsApiKey}`;
      },
    }),
  }),
});

export const { useGetJobsQuery, useGetJobDetailsQuery } = jobsApi;
