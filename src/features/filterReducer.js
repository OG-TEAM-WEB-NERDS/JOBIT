/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const filterJobs = createSlice({
  name: 'filterJobs',
  initialState: {
    searchQuery: 'Software Developers',
    page: 1,
    selection: {
      empType: 'FULLTIME',
      requirementType: 'no_experience',

      remote_jobs_only: false,
    },
  },
  reducers: {
    searchJob: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterSelection: (state, action) => {
      state.selection = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { searchJob, filterSelection, changePage } = filterJobs.actions;

export default filterJobs.reducer;
