import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';

import { SavedFilledIcon } from '../../assets';
import Button from './Button';
import { calculateDateToJobExpiration } from '../../utils';

const SimilarJobsCard = ({ job }) => {
  const router = useRouter();

  return (
    <article className="flex flex-col bg-white dark:bg-black-2 my-4  px-6 py-4 w-full rounded-xl ">
      {/* upper section */}
      <div className="flex justify-between">
        <div className="flex justify-center items-center max-w-xs">
          {/* TODO: switch placeholder from URL to placeholder component  */}
          <Image
            src={job.employer_logo ?? 'https://via.placeholder.com/60x60'}
            alt="Employer Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col ml-2">
            <h4 className="text-sm">{job.job_title}</h4>
            <p className="text-xs">
              {job.job_city && `${job.job_city},`}
              {job.job_country && job.job_country}
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-3">
          {job.job_max_salary && job.job_min_salary && job.job_salary_period ? (
            <p className="text-xs">
              <span className="font-bold">
                {job.job_salary_currency}
                {job.job_max_salary || job.job_min_salary}
              </span>
              / {job.job_salary_period}
            </p>
          ) : (
            <p className="text-xs font-bold">No salary info</p>
          )}
        </div>
      </div>

      {/* bottom section */}
      <div className="flex justify-between py-3 items-center">
        <p className="text-xs text-natural-1">
          {job.job_offer_expiration_timestamp
            ? `${calculateDateToJobExpiration(
                job.job_offer_expiration_timestamp
              )} days left`
            : 'No expiration info'}
        </p>
        <div className="flex justify-between items-center w-1/4">
          <button type="button">
            <Image
              src={SavedFilledIcon}
              alt="Save icon"
              width={20}
              height={20}
              className="grayscale"
            />
          </button>

          <Button
            transparent
            size="sm"
            handleClick={() => {
              router.push(`/job/${job.job_id}`);
            }}
          >
            View
          </Button>
        </div>
      </div>
      <div />
    </article>
  );
};
export default SimilarJobsCard;
