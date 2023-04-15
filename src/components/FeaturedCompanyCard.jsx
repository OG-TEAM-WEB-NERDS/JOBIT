import React from 'react';
import Image from 'next/image';
import { BriefcaseIcon, PinIcon, RatingStars } from './icons';
import Button from './Button';

const FeaturedCompanyCard = ({ logo, rating = 3, employerName = 'Company', location = 'Neverland', vacancies = 10, reviewCount = 10000 }) => {
  const formattedReviewCount = `${(reviewCount / 1000).toFixed(1)}k`;

  return (
    <div className="bg-white dark:bg-black-2 p-4 rounded-xl flex flex-col space-y-8 w-full">
      <div className="flex items-center space-x-3">
        <Image
          src={logo}
          width={60}
          height={60}
          alt={employerName}
        />
        <div className="flex flex-col space-y-1">
          <h4>{employerName}</h4>
          <div className="flex items-center space-x-2">
            <div className="flex">
              <RatingStars rating={rating} />
            </div>
            <p className="text-natural-2 font-bold text-base">{formattedReviewCount}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="flex gap-2 text-natural-2 font-bold"><PinIcon />{location}</p>
        <p className="flex gap-2 text-natural-2 font-bold"><BriefcaseIcon />{vacancies === 0 ? 'No' : vacancies} Job {vacancies === 1 ? 'Vacancy' : 'Vacancies'}</p>
      </div>
      <Button secondary fullWidth>See All</Button>
    </div>
  );
};

export default FeaturedCompanyCard;
