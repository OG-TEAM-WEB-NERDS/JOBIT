// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    // Get location by country and city
    getCountriesInfo: builder.query({
      query: () => 'independent?status=true&fields=name',
    }),
  }),
});

export const { useGetCountriesInfoQuery } = countriesApi;
