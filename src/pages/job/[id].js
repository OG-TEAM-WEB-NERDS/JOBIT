import React from 'react';
import { useRouter } from 'next/router';

import {
  SimilarJobPosts,
  JobDetail,
  SearchBar,
  Button,
} from '../../components';
import { ChevronLeftIcon } from '../../components/icons';

const JobDetailPage = () => {
  const router = useRouter();

  return (
    <section>
      <SearchBar />

      <Button secondary handleClick={() => router.back()}>
        <ChevronLeftIcon />
        Back
      </Button>

      <div className="flex flex-col justify-between md:flex-row mt-3">
        <div className="flex flex-col md:w-2/3">
          <div className=" bg-white dark:bg-black-2">
            <JobDetail id={router.query.id} />
          </div>
        </div>
        <div className="md:w-1/3 mx-2 px-2 my-3 md:my-0">
          <SimilarJobPosts />
        </div>
      </div>
    </section>
  );
};

export default JobDetailPage;
