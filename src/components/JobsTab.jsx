import React from 'react';
import { useRouter } from 'next/router';

import { BellIcon, SearchIcon } from '../assets';
import Button from './shared/Button';
import ImageWrapper from './shared/ImageWrapper';
import { useGetJobsByCompanyQuery } from '../services/JSearch';
import { Loader } from './shared';
import RecentlyPostedJobsWrapper from './RecentlyPostedJobsWrapper';

const JobsTab = () => {
  const router = useRouter();

  const companyId = router.query.id;

  const { data, isFetching, isError } = useGetJobsByCompanyQuery(companyId);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div
        className="
        font-semibold
        text-black-3
        dark:text-gray-200
        mx-2"
      >
        Error while fetching!!!
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:items-center md:flex-row justify-between gap-8">
        <form className="flex flex-col md:flex-row items-center bg-natural-4 dark:dark:bg-black-2 rounded-xl py-3 px-4 h-full justify-between gap-4 w-full md:w-1/2">
          <div className="flex ml-2 gap-2 mr-2 pt-2 w-full md:pt-0">
            <ImageWrapper
              src={SearchIcon}
              alt="Search icon"
              width={24}
              height={24}
              styles="grayscale"
            />
            <input
              type="text"
              placeholder="Search for a job ..."
              className="dark:text-white outline-none"
            />
          </div>
          <div className="justify-end pt-4 w-full md:w-44 md:pt-0">
            <Button primary isSubmit fullWidth>
              Search
            </Button>
          </div>
        </form>
        <div className="w-full md:w-44">
          <Button secondary outlined fullWidth icon={BellIcon}>
            Create job alert
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6>Recently Posted Jobs</h6>
        <RecentlyPostedJobsWrapper jobs={data.data} />
      </div>
    </>
  );
};

export default JobsTab;
