/* eslint-disable camelcase */
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

    // Get Searched Jobs
    getSearchedJobs: builder.query({
      query: ({
        query,
        page,
        employment_types,
        job_requirements,
        remote_jobs_only,
      }) =>
        `search?query=${query}&page=${page}&employment_types=${employment_types}&remote_jobs_only=${remote_jobs_only}&job_requirements=${job_requirements}&rapidapi-key=${jobsApiKey}`,
    }),

    // Get similar jobs (using current job title)
    getSimilarJobs: builder.query({
      query: (jobTitle) =>
        `search?query="${jobTitle}"&rapidapi-key=${jobsApiKey}`,
    }),

    // Get recommended jobs (currently recommending remote, fulltime web developerjobs posted in the last 3 days)
    getRecommendedJobs: builder.query({
      query: () =>
        `search?query="software developer"&date_posted=3days&remote_jobs_only=true&employment_types=fulltime&rapidapi-key=${jobsApiKey}`,
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

    // Get featured companies (top 5 returned by the search filters endpoint)
    getFeaturedCompanies: builder.query({
      query: () =>
        `search-filters?query="software developer"&rapidapi-key=${jobsApiKey}`,
    }),

    // Get jobs by company
    getJobsByCompany: builder.query({
      query: (employerId) =>
        `search?query="software developer"&employer=${employerId}&rapidapi-key=${jobsApiKey}`,
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetSearchedJobsQuery,
  useGetJobDetailsQuery,
  useGetSimilarJobsQuery,
  useLazyGetEstimatedSalaryQuery,
  useGetRecommendedJobsQuery,

  useGetFeaturedCompaniesQuery,
  useGetJobsByCompanyQuery,

  usePrefetch,
} = jobsApi;
