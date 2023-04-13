import React from 'react';
import Image from 'next/image';
import { BriefcaseIcon, FilledStarIcon, PinIcon, RatingStars, StarIcon } from './icons';
import Button from './Button';

const FeaturedCompanyCard = ({ key, logo, rating = 3, employerName = 'Company' }) => (
  <div className="bg-white p-4 rounded-xl flex flex-col space-y-8 w-full">
    <div className="flex space-x-4">
      <Image
        src={logo}
        width={60}
        height={60}
        alt={employerName}
      />
      <div className="flex flex-col space-y-1">
        <div className="font-bold text-xl">Apple Inc.</div>
        <div className="flex items-center space-x-2">
          <div className="flex">
            <RatingStars rating={rating} />
          </div>
          <div className="text-natural-2 font-bold text-base">4.8k</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col space-y-2">
      <div className="flex gap-2 text-natural-2 font-bold"><PinIcon />New York, USA</div>
      <div className="flex gap-2 text-natural-2 font-bold"><BriefcaseIcon />5 Job Vacancies</div>
    </div>
    <Button secondary fullWidth>See All</Button>
  </div>
);

export default FeaturedCompanyCard;
