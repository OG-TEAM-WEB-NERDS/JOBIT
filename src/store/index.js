import { configureStore } from '@reduxjs/toolkit';

import { jobsApi } from '../services/JSearch';
import { geoLocationApi } from '../services/GeocodingAPI';
import filterReducer from '../features/filterReducer';
import { countriesApi } from '../services/CountriesAPI';

export default configureStore({
  reducer: {
    filter: filterReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [geoLocationApi.reducerPath]: geoLocationApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware()
      .concat(jobsApi.middleware)
      .concat(geoLocationApi.middleware)
      .concat(countriesApi.middleware),
});
