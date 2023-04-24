import React from 'react';
import jobs from '../samples/search';
import JobCard from './shared/JobCard';
import SectionTitle from './SectionTitle';

const LatestJobPosts = () => (
  <div className="flex flex-col gap-4">
    {/* title */}
    <SectionTitle
      title="Latest Job Posts"
      buttonText="See All"
      targetPage="/job-search"
    />
    {/* jobs */}
    <div className="grid lg:grid-cols-2 gap-6 justify-between">
      {jobs.data.map((job, i) => (
        <JobCard key={i} />
      ))}
    </div>
  </div>
);

export default LatestJobPosts;
