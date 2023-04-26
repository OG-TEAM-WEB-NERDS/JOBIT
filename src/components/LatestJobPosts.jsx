import React from 'react';

import JobCard from './shared/JobCard';
import SectionTitle from './SectionTitle';
import { useGetJobsQuery } from '../services/JSearch';

const LatestJobPosts = () => {
  const { data, isFetching, isError } = useGetJobsQuery();

  if (isFetching) {
    return (
      <div className="font-semibold text-black-3 dark:text-gray-200 mx-2">
        Wait while data fetching!!!
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="
        font-semibold
        text-black-3
        dark:text-gray-200
        mx-2"
      >
        Error while fetching!!!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <SectionTitle
        title="Latest Job Posts"
        buttonText="See All"
        targetPage="/job-search"
      />
      {/* jobs */}
      <div className="grid lg:grid-cols-2 gap-6 justify-between">
        {data.data.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobPosts;
