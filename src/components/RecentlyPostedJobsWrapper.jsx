import React from 'react';

import JobCard from './shared/JobCard';

const RecentlyPostedJobsWrapper = ({ jobs }) => (
  <div className="grid lg:grid-cols-2 gap-6">
    {jobs.map((job, index) => (
      <JobCard
        key={index}
        job={job}
        transparentBtn
        // eslint-disable-next-line no-undef
        onClick={() => router.push(`/job/${job.job_id}`)}
      />
    ))}
  </div>
);

export default RecentlyPostedJobsWrapper;
