import React from 'react';
import Image from 'next/image';

import { MoreIcon } from '../icons';
import jobs from '../../samples/search';
import Badge from './Badge';
import Button from '../Button';

const myLoader = ({ src }) =>
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGQB_hmUVkx0HNjVmAKctp_E1gET48ocWSiKm&s=0';
const JobCard = () => {
  const job = jobs.data[0];
  console.log(job);
  return (
    <article className="flex flex-col bg-white my-4 mx-6 px-2 py-2 w-80">
      {/* card header */}
      <div className="flex justify-between">
        <div className="w-14 h-14 bg-natural-6">
          <Image
            loader={() => myLoader(job.employer_logo)}
            src={job.employer_logo}
            alt="Employer Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col">
          {/* title */}
          <h3 className="text-base">{job.job_title}</h3>
          {/* badges */}
          {/* {job.job_required_skills.map((skill, i) => (
            // <span>Hello</span>
            <Badge text={skill} key={i} />
          ))} */}
          <div className="flex">
            {/* {['Full Time', '45 Applied', '3 days left'].map((item, i) => (
              <Badge text={item} key={i} />
            ))} */}
          </div>
        </div>
        <MoreIcon />
      </div>
      {/* description */}
      <div>
        <p className="text-sm my-3">
          {`${job.job_description.slice(0, 300)}...`}
        </p>
      </div>
      {/* badges */}
      <div className="my-3">
        {['Full Time', '45 Applied', '3 days left'].map((item, i) => (
          <Badge text={item} key={i} />
        ))}
      </div>
      {/* footer */}
      <div className="flex justify-between align-middle my-4">
        <p>$15/20k/month</p>
        <button className="bg-primary text-white rounded-md px-2 py-2">
          Apply now
        </button>
      </div>
    </article>
  );
};

export default JobCard;
