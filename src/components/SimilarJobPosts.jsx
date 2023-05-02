import React from 'react';

import SimilarJobsCard from './shared/SimilarJobsCard';
import SectionTitle from './SectionTitle';
import { useGetSimilarJobsQuery } from '../services/JSearch';
import { Loader } from '.';

const SimilarJobPosts = ({ selectedJobTitle }) => {
  const { data, isFetching, isError } = useGetSimilarJobsQuery(selectedJobTitle);

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
    <div>
      {/* title */}
      <div className="flex justify-between mx-1">
        <SectionTitle
          title="Similar Jobs"
          button="See All"
          targetPage="/job-search"
        />
      </div>
      <div className=" dark:bg-black-1 p-2 mt-3">
        {data.data.map((similarJob, index) => (
          <SimilarJobsCard key={index} job={similarJob} />
        ))}
      </div>
    </div>
  );
};

export default SimilarJobPosts;
