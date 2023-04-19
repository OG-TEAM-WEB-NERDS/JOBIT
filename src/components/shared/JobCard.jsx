import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { MoreIcon } from '../icons';
import jobs from '../../samples/search';
import Badge from './Badge';

const JobCard = () => {
  const job = jobs.data[0];
  const router = useRouter();

  const handleJobClick = (id) => {
    router.push(`/job/${id}`);
  };
  return (
    <article className="flex flex-col dark:bg-black-2 bg-white my-4  px-6 py-4 w-full md:w-48p">
      {/* card header */}
      <div className="flex justify-between">
        <div className="flex justify-center mt-2 w-14 h-14 bg-natural-6">
          <Image
            src={job.employer_logo}
            alt="Employer Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col ml-2">
          {/* title */}
          <h3 className="text-base mb-2 ml-2">{job.job_title}</h3>
          {/* badges */}
          <div className="flex">
            {job.job_required_skills &&
              job.job_required_skills.map((skill, i) => (
                <Badge text={skill} key={i} type="skill" />
              ))}
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
      <div className="flex justify-between items-center my-4">
        <p>$15/20k/month</p>
        <button
          className="bg-primary text-white rounded-md px-2 py-2 text-sm"
          onClick={() => handleJobClick(job.job_id)}
        >
          Apply now
        </button>
      </div>
    </article>
  );
};

export default JobCard;
