import React from 'react';

import { SimilarJobPosts, JobDetail } from '../../components';

const JobDetailPage = () => (
  <section>
    <div className="flex flex-col justify-between md:flex-row mt-3 ">
      <div className="flex md:w-2/3">
        <JobDetail />
      </div>
      <div className="md:w-1/3 mx-2 px-2 my-3 md:my-0">
        <SimilarJobPosts />
      </div>
    </div>
  </section>
);

export default JobDetailPage;
