import React from 'react';
import jobs from '../samples/search';
import JobCard from './shared/JobCard';
import SectionTitle from './SectionTitle';

const LatestJobPosts = () => (
  <div>
    {/* title */}
    <div className="flex justify-between">
      <SectionTitle
        title="Latest Job Posts"
        button="See All"
        targetPage="/job-search"
      />
    </div>
    {/* jobs */}
    <div className="flex flex-wrap justify-between">
      {jobs.data.map((job, i) => (
        <JobCard key={i} />
      ))}
    </div>
  </div>
);

export default LatestJobPosts;
