import React from 'react';
import SuggestedJobsCard from './shared/SuggestedJobsCard';
import SectionTitle from './SectionTitle';
import { Loader } from '.';
import { useGetRecommendedJobsQuery } from '../services/JSearch';

const RecommendedJobPosts = () => {
  const { data, isFetching, isError } = useGetRecommendedJobsQuery();

  if (isFetching) {
    return <Loader />;
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
        title="Recommended Jobs"
        buttonText="See All"
        targetPage="/job-search"
      />
      <div className="grid lg:grid-cols-2 xl:grid-cols-1 gap-4 bg-white dark:bg-black-2 p-4 rounded-lg">
        {data.data.map((job, index) => (
          <SuggestedJobsCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobPosts;
