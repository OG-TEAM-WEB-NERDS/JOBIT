import React from 'react';
import Image from 'next/image';
import jobs from '../../samples/search';
import { SavedIcon } from '../icons';

const SimilarJobsCard = () => {
  const job = jobs.data[0];
  return (
    <article className="flex flex-col bg-white dark:bg-black-2 my-4  px-6 py-4 w-full rounded-xl ">
      {/* upper section */}
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <Image
            src={job.employer_logo}
            alt="Employer Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col ml-2">
            <h4 className="text-sm">{job.job_title}</h4>
            <p className="text-xs">
              {job.job_city},{job.job_country}
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <p className="text-xs">
            <span className="font-bold">$19</span>/Hr
          </p>
        </div>
      </div>

      {/* bottom section */}
      <div className="flex justify-between py-3 items-center">
        <p className="text-xs text-natural-1">2 days left</p>
        <div className="flex justify-around items-center w-5/12">
          <button>
            <SavedIcon />
          </button>
          <button className="bg-very-light-green text-primary rounded-md px-2 py-1 text-sm mr-2">
            View
          </button>
        </div>
      </div>
      <div />
    </article>
  );
};

export default SimilarJobsCard;
