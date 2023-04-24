import React, { useState } from 'react';
import Image from 'next/image';

import { SavedIconGreen, Oval } from './icons';
import Badge from './shared/Badge';
import Button from './Button';

const JobSearchCard = ({ job, i }) => {
  const [saved, setSaved] = useState(false);

  // One day Time in ms (milliseconds)
  var one_day = 1000 * 60 * 60 * 24;

  // today
  var present_date = new Date();

  // Job Posted Date
  var jobPosted_day = new Date(job?.job_posted_at_datetime_utc);

  // To Calculate the result in milliseconds and then converting into days
  var Result =
    Math.round(present_date.getTime() - jobPosted_day.getTime()) / one_day;
  // To remove the decimals from the (Result) resulting days value
  var Final_Result = Result.toFixed(0);

  return (
    <article className="flex flex-col dark:bg-black-2 bg-white my-4  px-6 py-4 w-full md:w-120p">
      {/* card header */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex justify-center mt-2 w-14 h-14 bg-gray-500">
            <img
              src={job?.employer_logo}
              alt="Employer Logo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-black-3 mb-1">
              {job?.job_title}
            </h6>
            <p className="flex text-sm ">
              {job?.employer_name}
              <span className="mt-2 mx-2 ">
                <Oval />
              </span>
              {job?.job_city}, {job?.job_country}
              <span className="mt-2 mx-2 ">
                <Oval />
              </span>
              {Final_Result} days ago
            </p>
          </div>
        </div>
        <div className="flex rounded-md justify-center items-center pl-2 -mt-6 self-center text-xs bg-natural-4 dark:bg-black-3 ">
          <span>Save Job</span>
          <button
            className="justify-center p-1"
            onClick={() => {
              setSaved(!saved);
            }}
          >
            <SavedIconGreen fill={saved ? 'green' : 'gray'} />
          </button>
        </div>
      </div>

      {/* description */}
      <div>
        <p className="text-sm my-3">
          {`${job.job_description.slice(0, 300)}...`}
        </p>
      </div>

      <div className="flex">
        {job?.job_required_skills &&
          job?.job_required_skills.map((skill, i) => (
            <Badge text={skill} key={i} type="skill" />
          ))}
      </div>

      {/* footer */}
      <div className="flex flex-col justify-between items-center mt-4 sm:flex-row ">
        <div className="flex gap-20 sm:gap-6">
          <p>
            <span className="font-bold">$15/20k</span>/month
          </p>
          <p>
            <span className="font-bold">45 </span> People Applied
          </p>
        </div>
        <div className="flex gap-20 sm:gap-6 mt-4 sm:mt-0 ">
          <Button secondary>Message</Button>
          <Button primary>Apply now</Button>
        </div>
      </div>
    </article>
  );
};

export default JobSearchCard;
