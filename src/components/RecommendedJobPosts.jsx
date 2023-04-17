import React from 'react';
import SuggestedJobsCard from './shared/SuggestedJobsCard';
import SectionTitle from './SectionTitle';

const RecommendedJobPosts = () => (
  <div>

    {/* title */}
    <div className="flex justify-between mx-1">
      <SectionTitle
        title=""
        button="Back"
        targetPage="/job-search"
      />
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
