import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const jobsApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsearch.p.rapidapi.com/' }),

  endpoints: (builder) => ({
    //Get All Data (can be used for job posts and companies)
    getJobs: builder.query({
      query: ({ query, num_pages, employment_types, company_types }) => {
        console.log(
          `search?query=${query}&num_pages=${num_pages}&employment_types=${employment_types}&company_types=${company_types}&rapidapi-key=${jobsApiKey}`
        );
        return `search?query=${query}&num_pages=${num_pages}&employment_types=${employment_types}&company_types=${company_types}&rapidapi-key=${jobsApiKey}`;
      },
    }),

    //Get Job Details by ID
    getJobDetails: builder.query({
      query: (Id) => {
        return `job-details?job_id=${Id}&rapidapi-key=${jobsApiKey}`;
      },
    }),
  }),
});

export const { useGetJobsQuery, useGetJobDetailsQuery } = jobsApi;
