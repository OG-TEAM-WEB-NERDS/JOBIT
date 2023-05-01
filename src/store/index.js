import { configureStore } from '@reduxjs/toolkit';

import { jobsApi } from '../services/JSearch';
import { geoLocationApi } from '../services/GeocodingAPI';

export default configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    [geoLocationApi.reducerPath]: geoLocationApi.reducer,
  },
  middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(jobsApi.middleware).concat(geoLocationApi.middleware),
});
