import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  BriefcaseIcon,
  ClockIcon,
  EllipsisIcon,
  PeopleIcon,
} from '../../assets';
import Badge from './Badge';
import Button from './Button';

const JobCard = ({
  primaryBtn,
  secondaryBtn,
  outlinedBtn,
  transparentBtn,
  job,
}) => {
  const router = useRouter();

  const handleJobClick = (id) => {
    router.push(`/job/${id}`);
  };
  return (
    <div className="flex flex-col gap-6 dark:bg-black-2 bg-white px-6 py-4 w-full rounded-xl">
      {/* card header */}
      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-natural-4 dark:bg-black-3 rounded-xl">
            <Image
              src={job?.employer_logo || 'https://via.placeholder.com/50x50'}
              alt="Employer logo"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            {/* title */}
            <h3 className="text-base font-bold">{job?.job_title}</h3>
            {/* badges */}
            <div className="flex flex-wrap gap-2">
              {job?.job_required_skills &&
                job?.job_required_skills
                  .slice(0, 3)
                  .map((skill, i) => <Badge text={skill} key={i} />)}
            </div>
          </div>
        </div>

        <div className="cursor-pointer self-start">
          <Image
            src={EllipsisIcon}
            alt="Ellipsis icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      {/* description */}
      <div>
        <p className="text-sm text-natural-1 dark:text-natural-2 font-medium">
          {`${job?.job_description.slice(0, 300)}...`}
        </p>
      </div>
      {/* badges */}
      <div className="flex gap-2">
        {[
          { text: 'Full Time', icon: BriefcaseIcon },
          { text: '45 Applied', icon: PeopleIcon },
          { text: '3 days left', icon: ClockIcon },
        ].map((item, i) => (
          <Badge text={item.text} key={i} icon={item.icon} />
        ))}
      </div>
      {/* footer */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">
          $15k-20k<span className="font-medium text-natural-1">/month</span>
        </p>
        <Button
          primary={primaryBtn}
          secondary={secondaryBtn}
          outlined={outlinedBtn}
          transparent={transparentBtn}
          handleClick={() => handleJobClick(job?.job_id)}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
