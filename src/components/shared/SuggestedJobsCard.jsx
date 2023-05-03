import React from 'react';
import { useRouter } from 'next/router';

import { ImageWrapper } from '..';
import { CheckEmploymentType } from '../../utils';

const SuggestedJobsCard = ({ job }) => {
  const router = useRouter();

  const handleJobClick = (id) => {
    router.push(`/job/${id}`);
  };

  return (
    <div
      className="flex justify-between bg-natural-5 dark:bg-black-3 p-4 w-full rounded-xl cursor-pointer"
      onClick={() => handleJobClick(job.job_id)}
    >
      <div className="flex gap-4">
        {/* image */}
        <div className="flex items-center p-2 bg-natural-4 rounded-xl aspect-square w-16 h-16">
          <ImageWrapper
            src={job?.employer_logo}
            alt="Employer Logo"
            width={50}
            height={50}
            styles="object-contain rounded-lg w-full h-full"
          />
        </div>
        {/* job details */}
        <div className="flex flex-col gap-1 justify-center">
          <h5 className="text-sm">{job.job_title}</h5>
          <ul className="flex dark:text-natural-2">
            <li className="text-xs mr-2">{job.employer_name}</li>
            <li className="text-xs mr-2">
              {job.job_city && `${job.job_city},`} {job.job_country}
            </li>
          </ul>
        </div>
      </div>

      {/* terms */}
      <div className="flex gap-1 flex-col justify-center items-end">
        <h5 className="text-sm text-right">
          <span className="font-bold">
            {job.job_min_salary && job.job_max_salary
              ? `${job.job_salary_currency} ${job.job_min_salary} - ${job.job_max_salary}`
              : 'Salary Not Specified'}
          </span>
          <span className="font-normal dark:text-natural-2">
            {job.job_min_salary && job.job_max_salary
              ? `/ ${job.job_salary_period}`
              : ''}
          </span>
        </h5>
        <ul className="flex">
          <li className="text-xs dark:text-natural-2">
            {CheckEmploymentType(job.job_employment_type, job.job_is_remote)}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SuggestedJobsCard;
