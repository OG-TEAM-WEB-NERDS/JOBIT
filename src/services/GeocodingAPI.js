// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const geoLocationApiKey = process.env.NEXT_PUBLIC_GEOCODING_API_KEY;

export const geoLocationApi = createApi({
  reducerPath: 'geoLocationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/' }),
  endpoints: (builder) => ({
    // Get location by country and city
    getLocationInfo: builder.query({
      query: ({ latitude, longitude }) => `reverse?lat=${latitude}&lon=${longitude}&accept-language=en&polygon_threshold=0.0&rapidapi-key=${geoLocationApiKey}`,
    }),
  }),
});

export const { useLazyGetLocationInfoQuery } = geoLocationApi;
