import React from 'react';

import { SearchIcon } from './icons';
import bellIcon from '../assets/icons/bell-icon.svg';
import Button from './shared/Button';
import JobCard from './shared/JobCard';

const JobsTab = () => (
  <>
    <div className="flex flex-col md:items-center md:flex-row justify-between gap-8">
      <form className="flex flex-col md:flex-row items-center bg-natural-4 dark:dark:bg-black-2 rounded-xl py-3 px-4 h-full justify-between gap-4 w-full md:w-1/2">
        <div className="flex ml-2 gap-2 mr-2 pt-2 w-full md:pt-0">
          <SearchIcon />
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
        <Button secondary outlined fullWidth icon={bellIcon}>Create job alert</Button>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h6>Recently Posted Jobs</h6>
      <div className="grid lg:grid-cols-2 gap-6">
        <JobCard transparentBtn />
        <JobCard transparentBtn />
        <JobCard transparentBtn />
        <JobCard transparentBtn />
      </div>
    </div>
  </>
);

export default JobsTab;
