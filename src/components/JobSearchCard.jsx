import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BriefcaseIcon, JobItIcon, oval, PeopleIcon, SavedFilledIcon } from '../assets';
import Badge from './shared/Badge';
import Button from './shared/Button';
import ImageWrapper from './shared/ImageWrapper';
import { getSalaryRangeInfo } from '../utils';

const JobSearchCard = ({ job, i }) => {
  const [saved, setSaved] = useState(false);

  // One day Time in ms (milliseconds)
  const ONE_DAY_MS = 86400000;

  // today
  const presentDate = new Date().getTime();

  // Job Posted Date
  const jobPostedDate = new Date(job?.job_posted_at_datetime_utc).getTime();

  // calculate result (no of days since job post)
  const daysElapsed = Math.round(
    (presentDate - jobPostedDate) / ONE_DAY_MS,
  ).toFixed(0);

  const router = useRouter();

  // const handleJobClick = (id) => {
  //   router.push(`/job/${id}`);
  // };

  return (
    <article className="flex flex-col rounded-lg dark:bg-black-2 bg-white my-4  px-6 py-4 w-full md:w-120p">
      {/* card header */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center p-2 bg-natural-4 rounded-xl aspect-square w-16 h-16">
            <ImageWrapper
              src={job?.employer_logo}
              alt="Employer Logo"
              width={50}
              height={50}
              styles="object-contain rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-black-3 mb-1">
              {job?.job_title}
            </h6>
            <p className="flex text-sm ">
              {job?.employer_name}
              <ImageWrapper
                src={oval}
                alt="seperator"
                styles=" mx-2 dark:invert invert-0"
              />
              {job?.job_city}, {job?.job_country}
              <ImageWrapper
                src={oval}
                alt="seperator"
                styles=" mx-2 dark:invert invert-0"
              />
              {daysElapsed} days ago
            </p>
          </div>
        </div>

        <div className="flex rounded-md justify-center items-center pl-2 -mt-6 self-center text-xs bg-natural-4 dark:bg-black-3 ">
          <button
            className="flex items-center p-2 text-natural-2 gap-1 font-semibold"
            onClick={() => {
              setSaved(!saved);
            }}
          >
            Save Job
            <ImageWrapper
              src={SavedFilledIcon}
              alt="Save Job"
              width={20}
              height={20}
              styles={saved ? 'grayscale-0' : 'grayscale'}
            />
          </button>
        </div>
      </div>

      {/* description */}

      <p className="text-sm my-3">
        {`${job.job_description.slice(0, 300)}...`}
      </p>

      <div className="flex gap-2">
        {job?.job_required_skills?.slice(0, 3).map((skill, index) => (
          <Badge text={skill} key={skill} type="skill" />
        ))}
      </div>

      {/* footer */}
      <div className="flex flex-col justify-between items-center mt-4 sm:flex-row ">
        <div className="flex gap-20 sm:gap-6">
          <div className="text-xs">{getSalaryRangeInfo(job)}</div>

          {/* badges */}
          <div className="flex gap-2">
            {[
              { text: `${job.job_employment_type}`, icon: BriefcaseIcon },
              { text: `${job.employer_company_type}`, icon: PeopleIcon },
            ].map(
              (item, i) => item.text !== undefined && (
              <Badge text={item.text} key={i} icon={item.icon} />
              ),
            )}
          </div>
        </div>
        <div className="flex gap-20 sm:gap-6 mt-4 sm:mt-0 ">
          <Button secondary>Message</Button>
          <Button
            primary
            handleClick={() => router.push(`/job/${job?.job_id}`)}
          >
            Apply now
          </Button>
        </div>
      </div>
    </article>
  );
};

export default JobSearchCard;
