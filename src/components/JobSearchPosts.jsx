import React from 'react';

import jobs from '../samples/search';
import JobSearchCard from './JobSearchCard';
import { ChevronIcon } from './icons';

const JobSearchPosts = () => {
  return (
    <div>
      {/* job post header*/}
      <div className="flex justify-between mx-4 pb-3">
        <div className="flex">
          <p className="text-base text-natural-1">Showing:</p>{' '}
          <h6 className="font-semibold text-black-3 ml-2">5 jobs</h6>
        </div>
        <div className="flex">
          <p v>Sort by:</p>{' '}
          <p className="font-semibold text-black-3 mx-2">Relevance</p>
          <ChevronIcon />
        </div>
      </div>
      {/* searched job posts */}
      <div>
        {jobs.data.map((job, i) => (
          <JobSearchCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default JobSearchPosts;
