import React from 'react';
import Image from 'next/image';
import jobs from '../../samples/search';

const SuggestedJobsCard = () => {
  const job = jobs.data[0];
  return (
    <article className="flex bg-natural-6 my-4  px-6 py-4 w-full rounded-xl">
      {/* image */}
      <div>
        <Image
          src={job.employer_logo}
          alt="Employer Logo"
          width={50}
          height={50}
        />
      </div>
      {/* job details */}
      <div className="flex flex-col justify-center mx-2">
        <h5 className="text-sm">Product Design</h5>
        <ul className="flex">
          <li className="text-xxxs mr-2">Google</li>
          <li className="text-xxxs mr-2">California, USA</li>
        </ul>
      </div>
      {/* terms */}
      <div className="flex flex-col justify-center mx-2">
        <h5 className="text-sm">
          <span className="font-bold">$78/80</span>{' '}
          <span className="font-normal">/ Hr</span>
        </h5>
        <ul className="flex">
          <li className="text-xxs mr-2">Full Time</li>
        </ul>
      </div>
    </article>
  );
};

export default SuggestedJobsCard;
