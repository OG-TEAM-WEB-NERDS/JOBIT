import React from 'react';
import SimilarJobsCard from './shared/SimilarJobsCard';
import SectionTitle from './SectionTitle';

const RecommendedJobPosts = () => (
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
      <SimilarJobsCard />
      <SimilarJobsCard />
      <SimilarJobsCard />
      <SimilarJobsCard />
      <SimilarJobsCard />
      <SimilarJobsCard />
    </div>
  </div>
);

export default RecommendedJobPosts;
