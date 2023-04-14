import React from 'react';
import jobs from '../samples/search';
import JobCard from './shared/JobCard';

const LatestJobPosts = () => (
  <div>
    {/* title */}
    <div className="flex justify-between mx-4">
      <h4 className="text-sm">Latest Job Posts</h4>
      <button className="text-sm">See All</button>
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
