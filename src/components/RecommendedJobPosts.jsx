import React from 'react';
import SuggestedJobsCard from './shared/SuggestedJobsCard';

const RecommendedJobPosts = () => (
  <div>
    {/* title */}
    <div className="flex justify-between mx-4 ">
      <h4 className="text-sm">Recommended for you</h4>
      <button className="text-sm">See All</button>
    </div>
    <div className="bg-white dark:bg-black-2 p-2 mt-3">
      <SuggestedJobsCard />
      <SuggestedJobsCard />
      <SuggestedJobsCard />
      <SuggestedJobsCard />
      <SuggestedJobsCard />
      <SuggestedJobsCard />
    </div>
  </div>
);

export default RecommendedJobPosts;
