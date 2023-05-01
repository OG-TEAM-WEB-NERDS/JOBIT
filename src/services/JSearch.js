import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jobsApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsearch.p.rapidapi.com/' }),

  endpoints: (builder) => ({
    // Get all data (can be used for job posts and companies)
    getJobs: builder.query({
      query: () => `search?query="*"&rapidapi-key=${jobsApiKey}`,
    }),

    // Get job details by ID
    getJobDetails: builder.query({
      query: (id) => `job-details?job_id=${id}&rapidapi-key=${jobsApiKey}`,
    }),

    // Get estimated salary
    getEstimatedSalary: builder.query({
      query: ({ jobTitle, location, radius }) => `estimated-salary?job_title=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}&radius=${radius}&rapidapi-key=${jobsApiKey}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobDetailsQuery, useLazyGetEstimatedSalaryQuery } = jobsApi;
