import React from 'react';
import jobs from '../samples/search';
import JobCard from './shared/JobCard';

const LatestJobPosts = () => (
  <div>
    {/* title */}
    <div className="flex justify-between ">
      <h5 className="my-2">Latest Job Posts</h5>
      <button>See All</button>
    </div>
    {/* jobs */}
    <div className="flex flex-wrap">
      {jobs.data.map((job, i) => (
        <JobCard key={i} />
      ))}
    </div>
  </div>
);

export default LatestJobPosts;
