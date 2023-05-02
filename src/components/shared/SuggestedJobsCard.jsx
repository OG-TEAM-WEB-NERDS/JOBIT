import React from 'react';
import { ImageWrapper } from '..';
import { CheckEmploymentType } from '../../utils';

const SuggestedJobsCard = ({ job }) => (
  <div className="flex justify-between bg-natural-5 dark:bg-black-3 p-4 w-full rounded-xl cursor-pointer">
    <div className="flex gap-2">
      {/* image */}
      <ImageWrapper
        src={job.employer_logo || 'https://via.placeholder.com/50x50'}
        alt="Employer Logo"
        width={50}
        height={50}
        styles="object-contain rounded-lg"
      />
      {/* job details */}
      <div className="flex flex-col gap-1 justify-center mx-2">
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
    <div className="flex gap-1 flex-col justify-center items-end mx-2">
      <h5 className="text-sm">
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
export default SuggestedJobsCard;
