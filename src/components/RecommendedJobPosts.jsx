import React from 'react';
import SuggestedJobsCard from './shared/SuggestedJobsCard';
import SectionTitle from './SectionTitle';

const RecommendedJobPosts = () => (
  <div>

    {/* title */}
    <div className="flex justify-between">
      <SectionTitle
        title="Recommended Jobs"
        button="See All"
        targetPage="/job-search"
      />
    </div>
    <div className="bg-white dark:bg-black-2 py-2 px-4 mt-3 rounded">
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
