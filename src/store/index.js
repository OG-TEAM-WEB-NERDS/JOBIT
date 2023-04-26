import { configureStore } from '@reduxjs/toolkit';

import { jobsApi } from '../services/JSearch';

export default configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(jobsApi.middleware),
});
