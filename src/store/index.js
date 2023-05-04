import { configureStore } from '@reduxjs/toolkit';

import { jobsApi } from '../services/JSearch';
import { geoLocationApi } from '../services/GeocodingAPI';
import filterReducer from '../features/filterReducer';

export default configureStore({
  reducer: {
    filter: filterReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [geoLocationApi.reducerPath]: geoLocationApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware()
      .concat(jobsApi.middleware)
      .concat(geoLocationApi.middleware),
});
