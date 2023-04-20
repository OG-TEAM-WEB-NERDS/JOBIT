import React, { useState } from 'react';

import Image from 'next/image';

import { SavedIcon, Oval } from './icons';
import jobs from '../samples/search';
import Badge from './shared/Badge';

const JobSearchCard = () => {
  const job = jobs.data[0];

  const [saved, setSaved] = useState(false);

  // One day Time in ms (milliseconds)
  var one_day = 1000 * 60 * 60 * 24;

  // today
  var present_date = new Date();

  // Job Posted Date
  var jobPosted_day = new Date(job.job_posted_at_datetime_utc);

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
            <Image
              src={job.employer_logo}
              alt="Employer Logo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-black-3 mb-1">{job.job_title}</h6>
            <p className="flex text-sm ">
              {job.employer_name}
              <div className="mt-2 mx-2 ">
                <Oval />
              </div>
              {job.job_city}, {job.job_country}
              <div className="mt-2 mx-2 ">
                <Oval />
              </div>
              {Final_Result} days ago
            </p>
          </div>
        </div>

        <div className="flex rounded-md justify-center items-center pl-2 self-center text-xs bg-natural-4 dark:bg-black-3 ">
          Save Job
          <button
            className="rounded-md px-2 py-2 text-sm"
            onClick={() => {
              setSaved(!saved);
            }}
          >
            <div className={`${saved ? 'bg-green-500' : 'bg-gray-300'}`}>
              <SavedIcon />
            </div>
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
        {job.job_required_skills &&
          job.job_required_skills.map((skill, i) => (
            <Badge text={skill} key={i} type="skill" />
          ))}
      </div>

      {/* footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-12">
          <p>$15/20k/month</p>
          <p>45 People Applied</p>
        </div>
        <div className="flex gap-6">
          <button className="bg-gray-100 text-gray-600 rounded-md px-10 py-4 text-sm">
            Message
          </button>
          <button className="bg-primary text-white rounded-md px-14 py-4 text-sm">
            Apply now
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobSearchCard;
