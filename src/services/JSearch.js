import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jobsApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsearch.p.rapidapi.com/' }),

  endpoints: (builder) => ({
    // Get All Data (can be used for job posts and companies)
    getJobs: builder.query({
      query: () =>
        `search?query="software developer"&date_posted=month&rapidapi-key=${jobsApiKey}`,
    }),

    // Get similar jobs (using current job title)
    getSimilarJobs: builder.query({
      query: (jobTitle) =>
        `search?query="${jobTitle}"&rapidapi-key=${jobsApiKey}`,
    }),

    // Get recommended jobs (currently recommending remote, fulltime web developerjobs posted in the last 3 days)
    getRecommendedJobs: builder.query({
      query: () =>
        `search?query="web developer"&date_posted=3days&remote_jobs_only=true&employment_types=fulltime&rapidapi-key=${jobsApiKey}`,
    }),

    // Get job details by ID
    getJobDetails: builder.query({
      query: (id) => `job-details?job_id=${id}&rapidapi-key=${jobsApiKey}`,
    }),

    // Get estimated salary
    getEstimatedSalary: builder.query({
      query: ({ jobTitle, location, radius }) =>
        `estimated-salary?job_title=${encodeURIComponent(
          jobTitle
        )}&location=${encodeURIComponent(
          location
        )}&radius=${radius}&rapidapi-key=${jobsApiKey}`,
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobDetailsQuery,
  useGetSimilarJobsQuery,
  useLazyGetEstimatedSalaryQuery,
  useGetRecommendedJobsQuery,
} = jobsApi;
