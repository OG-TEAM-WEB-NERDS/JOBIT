import React from 'react';
import Image from 'next/image';
import jobs from '../../samples/search';

const SuggestedJobsCard = () => {
  const job = jobs.data[0];
  return (
    <div className="flex justify-between bg-natural-5 dark:bg-black-3 p-4 w-full rounded-xl cursor-pointer">

      <div className="flex gap-2">
        {/* image */}
        <Image
          src={job.employer_logo}
          alt="Employer Logo"
          width={50}
          height={50}
          className="object-contain rounded-lg"
        />
        {/* job details */}
        <div className="flex flex-col gap-1 justify-center mx-2">
          <h5 className="text-sm">Product Design</h5>
          <ul className="flex dark:text-natural-2">
            <li className="text-xs mr-2">Google</li>
            <li className="text-xs mr-2">California, USA</li>
          </ul>
        </div>
      </div>

      {/* terms */}
      <div className="flex gap-1 flex-col justify-center items-end mx-2">
        <h5 className="text-sm">
          <span className="font-bold">$78/80</span>{' '}
          <span className="font-normal dark:text-natural-2">/ Hr</span>
        </h5>
        <ul className="flex">
          <li className="text-xs dark:text-natural-2">Full Time</li>
        </ul>
      </div>
    </div>
  );
};

export default SuggestedJobsCard;
