import React from 'react';
import Image from 'next/image';
import { BriefcaseIcon, PinIcon, RatingStars } from './icons';
import Button from './Button';

const FeaturedCompanyCard = ({ logo, rating = 3, employerName = 'Company', location = 'Neverland', vacancies = 10, reviewCount = 10000 }) => {
  const formattedReviewCount = `${(reviewCount / 1000).toFixed(1)}k`;

  return (
    <div className="bg-white p-4 rounded-xl flex flex-col space-y-8 w-full">
      <div className="flex items-center space-x-3">
        <Image
          src={logo}
          width={60}
          height={60}
          alt={employerName}
        />
        <div className="flex flex-col space-y-1">
          <div className="font-bold text-xl">{employerName}</div>
          <div className="flex items-center space-x-2">
            <div className="flex">
              <RatingStars rating={rating} />
            </div>
            <div className="text-natural-2 font-bold text-base">{formattedReviewCount}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2 text-natural-2 font-bold"><PinIcon />{location}</div>
        <div className="flex gap-2 text-natural-2 font-bold"><BriefcaseIcon />{vacancies === 0 ? 'No' : vacancies} Job {vacancies === 1 ? 'Vacancy' : 'Vacancies'}</div>
      </div>
      <Button secondary fullWidth>See All</Button>
    </div>
  );
};

export default FeaturedCompanyCard;
