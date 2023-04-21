import React from 'react';
import Image from 'next/image';
import jobs from '../../samples/search';

const SuggestedJobsCard = () => {
  const job = jobs.data[0];
  return (
    <article className="flex bg-natural-6 dark:bg-black-3 my-4  px-6 py-4 w-full rounded-xl justify-between">
      {/* image */}
      <div className="flex">
        <div>
          <Image
            src={job.employer_logo}
            alt="Employer Logo"
            width={50}
            height={50}
          />
        </div>
        {/* job details */}
        <div className="flex flex-col justify-center mx-2 dark:text-natural-1">
          <h5 className="text-xs self-start">Product Design</h5>
          <ul className="flex flex-wrap">
            <li className="text-xxxs mr-2 self-start">Google</li>
            <li className="text-xxxs mr-2 self-start">California, USA</li>
          </ul>
        </div>
      </div>
      {/* terms */}
      <div className="flex flex-col justify-center ml-2">
        <h5 className="text-xs">
          <span className="font-bold">$78/80</span>{' '}
          <span className="font-normal dark:text-natural-1">/ Hr</span>
        </h5>
        <ul className="flex">
          <li className="text-xxs md:text-xs dark:text-natural-1">Full Time</li>
        </ul>
      </div>
    </article>
  );
};

export default SuggestedJobsCard;
