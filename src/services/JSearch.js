import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const jobsApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsearch.p.rapidapi.com/' }),

  endpoints: (builder) => ({
    //Get All Data (can be used for job posts and companies)
    getJobs: builder.query({
      query: ({
        query,
        page,
        employment_types,
        job_requirements,
        remote_jobs_only,
      }) => {
        console.log(
          `search?query=${query}&page=${page}&employment_types=${employment_types}&remote_jobs_only=${remote_jobs_only}&job_requirements=${job_requirements}&rapidapi-key=${jobsApiKey}`
        );
        return `search?query=${query}&page=${page}&employment_types=${employment_types}&remote_jobs_only=${remote_jobs_only}&job_requirements=${job_requirements}&rapidapi-key=${jobsApiKey}`;
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
