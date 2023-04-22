import React from 'react';
import SuggestedJobsCard from './shared/SuggestedJobsCard';
import SectionTitle from './SectionTitle';

const RecommendedJobPosts = () => (
  <div className="flex flex-col gap-4">
    {/* title */}
    <SectionTitle
      title="Recommended Jobs"
      buttonText="See All"
      targetPage="/job-search"
    />
    <div className="grid lg:grid-cols-2 xl:grid-cols-1 gap-4 bg-white dark:bg-black-2 p-4 rounded-lg">
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
